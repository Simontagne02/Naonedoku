import React from 'react';
import { Calendar, Dices, RotateCcw } from 'lucide-react';
import { GameMode } from '../types/game';

interface GameControlsProps {
  mode: GameMode;
  theme?: 'light' | 'dark';
  onSelectMode: (mode: GameMode) => void;
  onResetGame: () => void;
}

export const GameControls: React.FC<GameControlsProps> = ({
  mode,
  theme = 'light',
  onSelectMode,
  onResetGame,
}) => {
  const isLight = theme === 'light';

  return (
    <div className="w-full max-w-3xl mx-auto mb-4 space-y-2.5">
      {/* Top Controls Row: Segmented Mode Selector & Difficulty */}
      <div
        className={`flex flex-wrap items-center justify-between gap-2.5 p-1.5 rounded-2xl transition-colors ${
          isLight
            ? 'bg-white border border-slate-200/90 shadow-xs'
            : 'bg-[#0f172a] border border-slate-800'
        }`}
      >
        {/* Mode Selector */}
        <div
          className={`flex items-center gap-1 p-0.5 rounded-xl ${
            isLight ? 'bg-slate-100' : 'bg-slate-900'
          }`}
        >
          <button
            onClick={() => onSelectMode('daily')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              mode === 'daily'
                ? 'bg-emerald-600 text-white shadow-xs'
                : isLight
                ? 'text-slate-600 hover:text-slate-900'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Grille du Jour</span>
          </button>

          <button
            onClick={() => onSelectMode('random')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              mode === 'random'
                ? 'bg-emerald-600 text-white shadow-xs'
                : isLight
                ? 'text-slate-600 hover:text-slate-900'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Dices className="w-3.5 h-3.5" />
            <span>Aléatoire</span>
          </button>
        </div>

        {/* Right tools: Reset */}
        <div className="flex items-center gap-2">
          <button
            onClick={onResetGame}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors ${
              isLight
                ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
            title="Recommencer cette grille"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Recommencer</span>
          </button>
        </div>
      </div>
    </div>
  );
};
