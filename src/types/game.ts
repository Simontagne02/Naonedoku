/**
 * Game Types for Naonedoku - Le Metrodoku Nantais
 */

export type LineId = 
  | '1' // Tram 1
  | '2' // Tram 2
  | '3' // Tram 3
  | '4' // Busway 4
  | '5' // Busway 5
  | 'C1' // Chronobus C1
  | 'C2' // Chronobus C2
  | 'C3' // Chronobus C3
  | 'C4' // Chronobus C4
  | 'C6' // Chronobus C6
  | 'C7' // Chronobus C7
  | 'C8' // Chronobus C8
  | 'C9' // Chronobus C9
  | 'C20'; // Chronobus C20

export type Commune = 
  | 'Nantes'
  | 'Rezé'
  | 'Saint-Herblain'
  | 'Orvault'
  | 'Bouguenais'
  | 'Vertou'
  | 'Saint-Sébastien-sur-Loire'
  | 'La Chapelle-sur-Erdre'
  | 'Carquefou'
  | 'Sainte-Luce-sur-Loire'
  | 'Thouaré-sur-Loire'
  | 'Couëron'
  | 'Indre'
  | 'Basse-Goulaine'
  | 'Les Sorinières'
  | 'Bouaye'
  | 'Autre commune';

export type GeographicZone = 'Nord Loire' | 'Sud Loire' | 'Île de Nantes';

export interface Station {
  id: string;
  name: string;
  commune: Commune;
  zone: GeographicZone;
  lines: LineId[];
  isTerminus?: boolean;
  hasParkAndRide?: boolean; // P+R
  hasTerConnection?: boolean; // Gare SNCF / TER
  hasUniversity?: boolean; // Campus / Écoles
  nearWater?: boolean; // Erdre, Loire, Sèvre
  isHistoricPerson?: boolean; // Nom de personnage
  isAccessiblePmr?: boolean;
  description?: string;
  lat?: number;
  lon?: number;
}

export type CriterionCategory = 'line' | 'commune' | 'feature' | 'letter' | 'zone';

export interface CriterionBadgeItem {
  badge: string;
  bg: string;
  text: string;
}

export interface Criterion {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  category: CriterionCategory;
  badgeBg: string;
  badgeText: string;
  iconName: string;
  lineBadge?: string;
  lineBadges?: CriterionBadgeItem[];
  difficulty: 'standard';
  matches: (station: Station) => boolean;
}

export interface CellAnswer {
  station: Station;
  isValid: boolean;
  timestamp: number;
}

export interface GridCell {
  row: number;
  col: number;
  answer: CellAnswer | null;
  possibleSolutions: Station[];
}

export type GameMode = 'daily' | 'random';
export type GameDifficulty = 'standard';

export interface GameState {
  id: string;
  mode: GameMode;
  difficulty: GameDifficulty;
  rowCriteria: Criterion[];
  colCriteria: Criterion[];
  grid: GridCell[][];
  mistakes: number;
  maxMistakes: number;
  isUnlimitedMistakes?: boolean;
  isFinished: boolean;
  isWon: boolean;
  isPerfect: boolean; // 9/9 with 0 mistakes
  usedStationIds: string[];
  solutionsRevealed: boolean;
  startedAt: number;
  finishedAt: number | null;
}

export interface UserStats {
  gamesPlayed: number;
  gamesWon: number;
  immaculateGrids: number;
  currentStreak: number;
  maxStreak: number;
  lastPlayedDate: string;
  history: {
    date: string;
    score: number;
    maxScore: number;
    isPerfect: boolean;
    mode: GameMode;
  }[];
}
