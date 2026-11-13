import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Check, Copy, Dices, Eye, Sparkles, Trophy, X } from 'lucide-react';
import { GameMode, GridCell } from '../types/game';
import { formatTime, generateShareText } from '../utils/storage';

interface GameOverModalProps {
  isOpen: boolean;
  score: number;
  mistakes: number;
  maxMistakes: number;
  isWon: boolean;
  isPerfect: boolean;
  grid: GridCell[][];
  mode: GameMode;
  solutionsRevealed: boolean;
  elapsedTime?: number;
  theme?: 'light' | 'dark';
  onRevealSolutions: () => void;
  onNewRandomGame: () => void;
  onClose: () => void;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({
  isOpen,
  score,
  mistakes,
  maxMistakes,
  isWon,
  isPerfect,
  grid,
  mode,
  solutionsRevealed,
  elapsedTime,
  theme = 'light',
  onRevealSolutions,
  onNewRandomGame,
  onClose,
}) => {
  const isLight = theme === 'light';
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen && isWon) {
      try {
        confetti({
          particleCount: isPerfect ? 120 : 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#007a45', '#0079bc', '#e53138', '#ffcd1c', '#0bbbef'],
        });
      } catch {
        // Ignore
      }
    }
  }, [isOpen, isWon, isPerfect]);

  if (!isOpen) return null;

  const handleShare = async () => {
    const text = generateShareText(grid, score, mistakes, maxMistakes, mode, isPerfect, elapsedTime);
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="game-over-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`w-full max-w-md rounded-2xl p-6 shadow-2xl text-center relative transition-colors ${
          isLight
            ? 'bg-white border border-slate-200 text-slate-900'
            : 'bg-[#0f172a] border border-slate-700 text-slate-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-1 rounded-lg transition-colors ${
            isLight
              ? 'text-slate-400 hover:text-slate-800 hover:bg-slate-100'
              : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
          }`}
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon & Title */}
        <div className="flex justify-center mb-3">
          {isWon ? (
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-md">
              <Trophy className="w-8 h-8" />
            </div>
          ) : (
            <div
              className={`w-16 h-16 rounded-2xl border flex items-center justify-center ${
                isLight
                  ? 'bg-slate-100 border-slate-200 text-slate-600'
                  : 'bg-slate-800 border-slate-700 text-slate-300'
              }`}
            >
              <Sparkles className="w-8 h-8" />
            </div>
          )}
        </div>

        <h3
          id="game-over-title"
          className={`text-xl sm:text-2xl font-black ${
            isLight ? 'text-slate-900' : 'text-slate-100'
          }`}
        >
          {isPerfect
            ? 'Grille Immaculée ! 🏆'
            : isWon
            ? 'Félicitations ! 🎉'
            : 'Partie terminée'}
        </h3>

        <p
          className={`text-sm mt-1 ${
            isLight ? 'text-slate-500' : 'text-slate-400'
          }`}
        >
          {isPerfect
            ? 'Score parfait de 9/9 sans aucune faute (0 erreur) ! Un véritable expert du réseau Naolib.'
            : isWon
            ? `Grille 100% validée avec seulement ${mistakes} erreur${mistakes > 1 ? 's' : ''} sur ${maxMistakes} max.`
            : `Vous avez atteint le maximum de ${maxMistakes} erreurs autorisées.`}
        </p>

        {/* Score Card */}
        <div
          className={`my-5 p-4 rounded-xl border flex items-center justify-around ${
            isLight
              ? 'bg-slate-50 border-slate-200'
              : 'bg-[#142033] border-slate-800'
          }`}
        >
          <div>
            <span
              className={`text-[11px] uppercase tracking-wider font-semibold block ${
                isLight ? 'text-slate-500' : 'text-slate-400'
              }`}
            >
              Cases trouvées
            </span>
            <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 tabular-nums">
              {score} / 9
            </span>
          </div>
          <div
            className={`w-px h-10 ${
              isLight ? 'bg-slate-200' : 'bg-slate-800'
            }`}
          />
          <div>
            <span
              className={`text-[11px] uppercase tracking-wider font-semibold block ${
                isLight ? 'text-slate-500' : 'text-slate-400'
              }`}
            >
              Erreurs
            </span>
            <span
              className={`text-2xl font-black tabular-nums ${
                mistakes === 0
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : mistakes >= maxMistakes
                  ? 'text-rose-600 dark:text-rose-400'
                  : isLight
                  ? 'text-slate-900'
                  : 'text-slate-100'
              }`}
            >
              {mistakes} / {maxMistakes}
            </span>
          </div>
          {elapsedTime !== undefined && (
            <>
              <div
                className={`w-px h-10 ${
                  isLight ? 'bg-slate-200' : 'bg-slate-800'
                }`}
              />
              <div>
                <span
                  className={`text-[11px] uppercase tracking-wider font-semibold block ${
                    isLight ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  Temps
                </span>
                <span className="text-2xl font-black font-mono text-slate-800 dark:text-slate-100 tabular-nums">
                  {formatTime(elapsedTime)}
                </span>
              </div>
            </>
          )}
        </div>

        {/* Mini Preview of Grid */}
        <div
          className={`inline-grid grid-cols-3 gap-1.5 p-2 rounded-xl border mb-5 ${
            isLight
              ? 'bg-slate-100 border-slate-200'
              : 'bg-slate-900/90 border-slate-800'
          }`}
        >
          {grid.map((row, r) =>
            row.map((cell, c) => (
              <div
                key={`mini-${r}-${c}`}
                className={`w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold ${
                  cell.answer && cell.answer.isValid
                    ? 'bg-emerald-600 text-white'
                    : cell.answer && !cell.answer.isValid
                    ? 'bg-rose-600 text-white'
                    : isLight
                    ? 'bg-white text-slate-300 border border-slate-200'
                    : 'bg-slate-800 text-slate-600'
                }`}
              >
                {cell.answer && cell.answer.isValid ? '✓' : ''}
              </div>
            ))
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2.5">
          <button
            onClick={handleShare}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors shadow-xs"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Copié dans le presse-papier !</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Partager mes résultats</span>
              </>
            )}
          </button>

          {!solutionsRevealed && (
            <button
              onClick={() => {
                onRevealSolutions();
                onClose();
              }}
              className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 font-semibold rounded-xl text-sm transition-colors border ${
                isLight
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Voir les solutions acceptées</span>
            </button>
          )}

          <button
            onClick={onNewRandomGame}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl transition-colors shadow-xs"
          >
            <Dices className="w-4 h-4" />
            <span>Nouvelle grille aléatoire</span>
          </button>
        </div>
      </div>
    </div>
  );
};
