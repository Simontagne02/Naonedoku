/**
 * Gestion du stockage local et partage pour Nantodoku
 */

import { GameMode, GridCell, UserStats } from '../types/game';

const STATS_KEY = 'nantodoku_user_stats';

const DEFAULT_STATS: UserStats = {
  gamesPlayed: 0,
  gamesWon: 0,
  immaculateGrids: 0,
  currentStreak: 0,
  maxStreak: 0,
  lastPlayedDate: '',
  history: [],
};

export function loadUserStats(): UserStats {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) return DEFAULT_STATS;
    return { ...DEFAULT_STATS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_STATS;
  }
}

export function saveGameResult(
  score: number,
  isWon: boolean,
  isPerfect: boolean,
  mode: GameMode
): UserStats {
  const stats = loadUserStats();
  const today = new Date().toISOString().split('T')[0];

  stats.gamesPlayed += 1;
  if (isWon) {
    stats.gamesWon += 1;
    if (isPerfect) {
      stats.immaculateGrids += 1;
    }

    if (stats.lastPlayedDate === today) {
      // Déjà joué aujourd'hui
    } else {
      // Calcul du streak
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      if (stats.lastPlayedDate === yesterday) {
        stats.currentStreak += 1;
      } else {
        stats.currentStreak = 1;
      }
      stats.maxStreak = Math.max(stats.maxStreak, stats.currentStreak);
      stats.lastPlayedDate = today;
    }
  } else {
    stats.currentStreak = 0;
  }

  stats.history.unshift({
    date: today,
    score,
    maxScore: 9,
    isPerfect,
    mode,
  });

  // Limiter l'historique aux 30 dernières parties
  if (stats.history.length > 30) {
    stats.history = stats.history.slice(0, 30);
  }

  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch {
    // Ignore storage quota
  }

  return stats;
}

/**
 * Formate un nombre de secondes en mm:ss
 */
export function formatTime(seconds: number): string {
  const safeSec = Math.max(0, Math.floor(seconds || 0));
  const mins = Math.floor(safeSec / 60);
  const secs = safeSec % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Génère la grille de carrés emojis pour partage sur les réseaux / messageries
 */
export function generateShareText(
  grid: GridCell[][],
  score: number,
  mistakes: number,
  maxMistakes: number,
  mode: GameMode,
  isPerfect: boolean,
  elapsedTime?: number
): string {
  const modeLabel = mode === 'daily' ? `Grille du Jour (${new Date().toLocaleDateString('fr-FR')})` : 'Grille Aléatoire';
  let emojiGrid = '';

  for (let r = 0; r < 3; r++) {
    let rowStr = '';
    for (let c = 0; c < 3; c++) {
      const cell = grid[r][c];
      if (cell.answer && cell.answer.isValid) {
        rowStr += '🟩';
      } else {
        rowStr += '⬜';
      }
    }
    emojiGrid += rowStr + '\n';
  }

  const perfectBadge = isPerfect ? ' 🌟 IMMACULÉ (0 FAUTE) !' : '';
  const errorText = mistakes === 0 ? '0 faute' : `${mistakes}/${maxMistakes} erreur${mistakes > 1 ? 's' : ''}`;
  const timeText = elapsedTime !== undefined ? ` · ⏱️ ${formatTime(elapsedTime)}` : '';

  return `🚊 Naonedoku · ${modeLabel}
Score : ${score}/9${perfectBadge} (${errorText})${timeText}

${emojiGrid}
Relevez le défi des transports de Nantes !`;
}
