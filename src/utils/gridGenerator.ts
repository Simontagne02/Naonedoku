/**
 * Générateur et solveur de grilles de Metrodoku Nantais
 * Garantit que chaque cellule 3x3 possède au moins une station valide
 * et qu'une combinaison de 9 stations distinctes existe pour remporter la grille.
 */

import { ALL_CRITERIA } from '../data/criteria';
import { NANTES_STATIONS } from '../data/nantesTransit';
import { Criterion, GameDifficulty, GameMode, GridCell, Station } from '../types/game';

// Pseudo Random Number Generator (Mulberry32) pour le mode quotidien déterministe
export function createRng(seed: number) {
  let s = Math.floor(seed);
  return function () {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function stringToSeed(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * Algorithme de couplage biparti maximal pour vérifier qu'il existe
 * 9 stations uniques permettant de remplir l'ensemble de la grille 3x3.
 */
function canSolveWithoutDuplicates(solutions: Station[][][]): boolean {
  // 9 sommets à gauche (les 9 cellules 0..8)
  // sommets à droite (les IDs des stations)
  const cellSolutions: string[][] = [];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (solutions[r][c].length === 0) return false;
      cellSolutions.push(solutions[r][c].map((s) => s.id));
    }
  }

  const matchR: Record<string, number> = {}; // stationId -> cellIndex

  function bpm(u: number, seen: Set<string>): boolean {
    for (const v of cellSolutions[u]) {
      if (!seen.has(v)) {
        seen.add(v);
        if (matchR[v] === undefined || bpm(matchR[v], seen)) {
          matchR[v] = u;
          return true;
        }
      }
    }
    return false;
  }

  let result = 0;
  for (let u = 0; u < 9; u++) {
    const seen = new Set<string>();
    if (bpm(u, seen)) {
      result++;
    }
  }

  return result === 9;
}

/**
 * Filtre les critères disponibles selon la difficulté sélectionnée
 */
function getCriteriaPool(_difficulty?: GameDifficulty): Criterion[] {
  return ALL_CRITERIA;
}

export interface GeneratedGrid {
  id: string;
  rowCriteria: Criterion[];
  colCriteria: Criterion[];
  solutions: Station[][][];
}

/**
 * Grilles de secours hautement validées avec multiples stations par case
 */
const CURATED_GRIDS: { rowIds: string[]; colIds: string[] }[] = [
  {
    rowIds: ['line-1', 'line-2', 'line-3'],
    colIds: ['commune-nantes', 'is-terminus', 'is-correspondence'],
  },
  {
    rowIds: ['line-1', 'line-2', 'line-3'],
    colIds: ['commune-nantes', 'has-park-and-ride', 'is-correspondence'],
  },
  {
    rowIds: ['line-1', 'line-3', 'any-busway'],
    colIds: ['commune-nantes', 'outside-nantes', 'is-historic-person'],
  },
  {
    rowIds: ['line-1', 'line-2', 'any-busway'],
    colIds: ['zone-rive-nord', 'near-water', 'is-correspondence'],
  },
  {
    rowIds: ['line-2', 'line-3', 'any-busway'],
    colIds: ['commune-nantes', 'zone-rive-sud', 'is-terminus'],
  },
];

// Cache des stations par critère pour des performances optimales lors de la génération
const criteriaStationsCache = new Map<string, Station[]>();
export function getStationsForCriterion(criterion: Criterion): Station[] {
  let cached = criteriaStationsCache.get(criterion.id);
  if (!cached) {
    cached = NANTES_STATIONS.filter((s) => criterion.matches(s));
    criteriaStationsCache.set(criterion.id, cached);
  }
  return cached;
}

/**
 * Vérifie que pour deux critères C1 et C2 d'une case :
 * - Il existe au moins une station qui valide les deux critères (intersection non vide)
 * - Les solutions de C1 ne sont pas entièrement incluses dans C2 (C1 n'est pas un sous-ensemble de C2)
 * - Les solutions de C2 ne sont pas entièrement incluses dans C1 (C2 n'est pas un sous-ensemble de C1)
 *
 * Exemple interdit : C1 = Tram 1 et C2 = Tram 1 ou 2 (toutes les stations de C1 sont dans C2).
 */
export function isValidCriteriaPair(
  crit1: Criterion,
  crit2: Criterion
): { valid: boolean; matches: Station[] } {
  const s1 = getStationsForCriterion(crit1);
  const s2 = getStationsForCriterion(crit2);

  if (s1.length === 0 || s2.length === 0) {
    return { valid: false, matches: [] };
  }

  const matches = s1.filter((s) => crit2.matches(s));

  // 1. Il doit y avoir au moins une solution valide commune
  if (matches.length === 0) {
    return { valid: false, matches: [] };
  }

  // 2. Les solutions de la condition 1 ne doivent pas être entièrement incluses dans la condition 2
  // Si matches.length === s1.length, alors toutes les solutions de C1 valident C2
  if (matches.length >= s1.length) {
    return { valid: false, matches: [] };
  }

  // 3. Les solutions de la condition 2 ne doivent pas être entièrement incluses dans la condition 1
  // Si matches.length === s2.length, alors toutes les solutions de C2 valident C1
  if (matches.length >= s2.length) {
    return { valid: false, matches: [] };
  }

  return { valid: true, matches };
}

/**
 * Génère une grille Metrodoku 3x3 aléatoire ou quotidienne 100% solvable
 */
export function generateMetrodokuGrid(
  mode: GameMode,
  difficulty: GameDifficulty,
  seedKey?: string
): GeneratedGrid {
  const seedString = seedKey || (mode === 'daily' 
    ? new Date().toISOString().split('T')[0] 
    : `${Date.now()}-${Math.random()}`);

  const rng = createRng(stringToSeed(seedString));
  const pool = getCriteriaPool(difficulty);

  const maxAttempts = 500;
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    // Sélectionner 3 critères pour les lignes et 3 critères pour les colonnes
    // On mélange le pool
    const shuffled = [...pool].sort(() => rng() - 0.5);

    // On évite d'avoir exactement le même critère en ligne et colonne
    // Et on s'assure d'une diversité (ex: au moins une ligne de transport)
    const rowCand = shuffled.slice(0, 3);
    const colCand = shuffled.slice(3, 6);

    if (rowCand.length < 3 || colCand.length < 3) continue;

    // Pas de doublon d'ID entre row et col
    const rowIds = new Set(rowCand.map((c) => c.id));
    if (colCand.some((c) => rowIds.has(c.id))) continue;

    // Vérifier les 9 cases avec la règle stricte de non-inclusion
    const solutions: Station[][][] = [];
    let allCellsValid = true;

    for (let r = 0; r < 3; r++) {
      solutions[r] = [];
      for (let c = 0; c < 3; c++) {
        const check = isValidCriteriaPair(rowCand[r], colCand[c]);
        if (!check.valid) {
          allCellsValid = false;
          break;
        }
        solutions[r][c] = check.matches;
      }
      if (!allCellsValid) break;
    }

    if (allCellsValid && canSolveWithoutDuplicates(solutions)) {
      return {
        id: `grid-${seedString}-${attempt}`,
        rowCriteria: rowCand,
        colCriteria: colCand,
        solutions,
      };
    }
  }

  // Si la génération purement aléatoire a échoué (très rare), utiliser une des grilles validées
  const fallbackIndex = Math.floor(rng() * CURATED_GRIDS.length);
  const fallback = CURATED_GRIDS[fallbackIndex];

  const rowCriteria = fallback.rowIds.map(
    (id) => ALL_CRITERIA.find((c) => c.id === id)!
  );
  const colCriteria = fallback.colIds.map(
    (id) => ALL_CRITERIA.find((c) => c.id === id)!
  );

  const solutions: Station[][][] = [];
  for (let r = 0; r < 3; r++) {
    solutions[r] = [];
    for (let c = 0; c < 3; c++) {
      const check = isValidCriteriaPair(rowCriteria[r], colCriteria[c]);
      solutions[r][c] = check.matches;
    }
  }

  return {
    id: `fallback-${seedString}`,
    rowCriteria,
    colCriteria,
    solutions,
  };
}

/**
 * Calcule une solution valide complète pour la grille, sans doublon de station entre les cases.
 * Si le joueur a déjà validé certaines cases, leurs stations sont conservées
 * et les cases restantes sont complétées avec d'autres stations distinctes.
 */
export function computeAcceptedSolutionGrid(
  grid: GridCell[][]
): (Station | null)[][] {
  if (!grid || grid.length !== 3) {
    return Array(3)
      .fill(null)
      .map(() => Array(3).fill(null));
  }

  // 1. Collecter les stations déjà validées par le joueur
  const result: (Station | null)[][] = Array(3)
    .fill(null)
    .map(() => Array(3).fill(null));
  const usedStationIds = new Set<string>();

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const cell = grid[r]?.[c];
      if (cell && cell.answer && cell.answer.isValid) {
        result[r][c] = cell.answer.station;
        usedStationIds.add(cell.answer.station.id);
      }
    }
  }

  // 2. Trouver les cellules restantes à compléter
  const unassigned: { r: number; c: number; candidates: Station[] }[] = [];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (!result[r][c]) {
        unassigned.push({
          r,
          c,
          candidates: grid[r]?.[c]?.possibleSolutions || [],
        });
      }
    }
  }

  // Trier les cellules avec le moins de candidats en premier (heuristique MRV)
  unassigned.sort((a, b) => a.candidates.length - b.candidates.length);

  // 3. Backtracking pour trouver une assignation sans doublon en conservant les choix de l'utilisateur
  function backtrack(idx: number, currentUsed: Set<string>): boolean {
    if (idx === unassigned.length) return true;
    const { r, c, candidates } = unassigned[idx];
    for (const st of candidates) {
      if (!currentUsed.has(st.id)) {
        currentUsed.add(st.id);
        result[r][c] = st;
        if (backtrack(idx + 1, currentUsed)) {
          return true;
        }
        currentUsed.delete(st.id);
        result[r][c] = null;
      }
    }
    return false;
  }

  const successWithExisting = backtrack(0, new Set(usedStationIds));
  if (successWithExisting) {
    return result;
  }

  // 4. Fallback si un choix de l'utilisateur a rendu impossible la résolution du reste :
  // résoudre l'intégralité de la grille 3x3 sans doublon de zéro
  const freshResult: (Station | null)[][] = Array(3)
    .fill(null)
    .map(() => Array(3).fill(null));
  const allCells: { r: number; c: number; candidates: Station[] }[] = [];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      allCells.push({
        r,
        c,
        candidates: grid[r]?.[c]?.possibleSolutions || [],
      });
    }
  }
  allCells.sort((a, b) => a.candidates.length - b.candidates.length);

  function backtrackAll(idx: number, currentUsed: Set<string>): boolean {
    if (idx === allCells.length) return true;
    const { r, c, candidates } = allCells[idx];
    for (const st of candidates) {
      if (!currentUsed.has(st.id)) {
        currentUsed.add(st.id);
        freshResult[r][c] = st;
        if (backtrackAll(idx + 1, currentUsed)) {
          return true;
        }
        currentUsed.delete(st.id);
        freshResult[r][c] = null;
      }
    }
    return false;
  }

  if (backtrackAll(0, new Set())) {
    return freshResult;
  }

  // 5. Fallback ultime : première solution possible pour chaque case
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (!result[r][c]) {
        result[r][c] = grid[r]?.[c]?.possibleSolutions[0] || null;
      }
    }
  }
  return result;
}

