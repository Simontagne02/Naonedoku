import React from 'react';
import { Flame, Medal, Trophy, X } from 'lucide-react';
import { UserStats } from '../types/game';

interface StatsModalProps {
  isOpen: boolean;
  stats: UserStats;
  theme?: 'light' | 'dark';
  onClose: () => void;
}

export const StatsModal: React.FC<StatsModalProps> = ({
  isOpen,
  stats,
  theme = 'light',
  onClose,
}) => {
  const isLight = theme === 'light';
  if (!isOpen) return null;

  const winRate =
    stats.gamesPlayed > 0
      ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100)
      : 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="stats-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className={`w-full max-w-md rounded-2xl p-6 shadow-2xl relative transition-colors ${
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

        <div className="flex items-center gap-2 mb-5">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <h3
              id="stats-modal-title"
              className={`text-lg font-bold ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}
            >
              Statistiques de Jeu
            </h3>
            <p
              className={`text-xs ${
                isLight ? 'text-slate-500' : 'text-slate-400'
              }`}
            >
              Vos performances sur le réseau nantais
            </p>
          </div>
        </div>

        {/* 4 KPIs grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div
            className={`p-3.5 rounded-xl border text-center ${
              isLight
                ? 'bg-slate-50 border-slate-200'
                : 'bg-[#131d33] border-slate-800'
            }`}
          >
            <span
              className={`text-2xl font-black tabular-nums block ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}
            >
              {stats.gamesPlayed}
            </span>
            <span
              className={`text-[11px] font-semibold uppercase tracking-wider ${
                isLight ? 'text-slate-500' : 'text-slate-400'
              }`}
            >
              Parties jouées
            </span>
          </div>

          <div
            className={`p-3.5 rounded-xl border text-center ${
              isLight
                ? 'bg-slate-50 border-slate-200'
                : 'bg-[#131d33] border-slate-800'
            }`}
          >
            <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 tabular-nums block">
              {winRate}%
            </span>
            <span
              className={`text-[11px] font-semibold uppercase tracking-wider ${
                isLight ? 'text-slate-500' : 'text-slate-400'
              }`}
            >
              Taux de victoire
            </span>
          </div>

          <div
            className={`p-3.5 rounded-xl border text-center ${
              isLight
                ? 'bg-slate-50 border-slate-200'
                : 'bg-[#131d33] border-slate-800'
            }`}
          >
            <div className="flex items-center justify-center gap-1">
              <Flame className="w-4 h-4 text-orange-500" />
              <span className="text-2xl font-black text-orange-500 tabular-nums">
                {stats.currentStreak}
              </span>
            </div>
            <span
              className={`text-[11px] font-semibold uppercase tracking-wider ${
                isLight ? 'text-slate-500' : 'text-slate-400'
              }`}
            >
              Série actuelle
            </span>
          </div>

          <div
            className={`p-3.5 rounded-xl border text-center ${
              isLight
                ? 'bg-slate-50 border-slate-200'
                : 'bg-[#131d33] border-slate-800'
            }`}
          >
            <div className="flex items-center justify-center gap-1">
              <Medal className="w-4 h-4 text-amber-500" />
              <span className="text-2xl font-black text-amber-500 tabular-nums">
                {stats.immaculateGrids}
              </span>
            </div>
            <span
              className={`text-[11px] font-semibold uppercase tracking-wider ${
                isLight ? 'text-slate-500' : 'text-slate-400'
              }`}
            >
              Immaculées (9/9)
            </span>
          </div>
        </div>

        {/* History preview */}
        {stats.history.length > 0 && (
          <div
            className={`mt-4 pt-4 border-t ${
              isLight ? 'border-slate-200' : 'border-slate-800'
            }`}
          >
            <h4
              className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                isLight ? 'text-slate-700' : 'text-slate-300'
              }`}
            >
              Dernières grilles
            </h4>
            <div className="space-y-1.5 max-h-36 overflow-y-auto">
              {stats.history.slice(0, 5).map((game, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between py-1.5 px-3 rounded-lg text-xs ${
                    isLight ? 'bg-slate-50' : 'bg-slate-900/60'
                  }`}
                >
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                    {game.date}
                  </span>
                  <span
                    className={`font-bold tabular-nums ${
                      isLight ? 'text-slate-900' : 'text-slate-200'
                    }`}
                  >
                    {game.score}/9
                  </span>
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      game.isPerfect
                        ? 'bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-500/20 dark:text-amber-300'
                        : game.score === 9
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300'
                        : isLight
                        ? 'bg-slate-200 text-slate-600'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {game.isPerfect ? 'Immaculé' : game.score === 9 ? 'Victoire' : 'Incomplet'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={onClose}
          className={`w-full mt-5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
            isLight
              ? 'bg-slate-100 hover:bg-slate-200 text-slate-800'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
          }`}
        >
          Fermer
        </button>
      </div>
    </div>
  );
};
