import React from 'react';
import { Bus, CheckCircle2, Sparkles, Train } from 'lucide-react';
import { Criterion, GridCell, Station } from '../types/game';
import { LinePill } from './LinePill';

interface GridCellComponentProps {
  cell: GridCell;
  rowCriterion: Criterion;
  colCriterion: Criterion;
  usedStationIds?: string[];
  isSelected: boolean;
  isGameFinished: boolean;
  solutionsRevealed: boolean;
  acceptedSolution?: Station | null;
  theme?: 'light' | 'dark';
  onClick: () => void;
}

export const GridCellComponent: React.FC<GridCellComponentProps> = ({
  cell,
  rowCriterion,
  colCriterion,
  usedStationIds = [],
  isSelected,
  isGameFinished,
  solutionsRevealed,
  acceptedSolution,
  theme = 'light',
  onClick,
}) => {
  const isLight = theme === 'light';
  const isCorrect = Boolean(cell.answer && cell.answer.isValid);
  const isFailed = Boolean(cell.answer && !cell.answer.isValid);
  const totalSolutionsCount = cell.possibleSolutions.length;
  // Calcul dynamique des possibilités restantes (exclut les stations déjà posées ailleurs)
  const remainingSolutions = cell.possibleSolutions.filter(
    (st) => !usedStationIds.includes(st.id)
  );
  const remainingCount = remainingSolutions.length;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!isGameFinished && !solutionsRevealed && isCorrect}
      aria-label={`Case ligne ${rowCriterion.shortTitle}, colonne ${colCriterion.shortTitle}`}
      className={`group relative w-full aspect-square p-2 sm:p-2.5 rounded-xl flex flex-col justify-between items-center text-center transition-all duration-150 cursor-pointer overflow-hidden ${
        isCorrect
          ? isLight
            ? 'bg-slate-100 border-2 border-slate-600 shadow-xs'
            : 'bg-emerald-950/40 border-2 border-emerald-500/80 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
          : isFailed
          ? isLight
            ? 'bg-white border-2 border-rose-500 shadow-xs'
            : 'bg-rose-950/30 border-2 border-rose-500/70 shadow-xs'
          : isLight
          ? 'bg-white border-2 border-slate-600 hover:border-slate-600 hover:bg-slate-50/70 shadow-xs'
          : 'bg-[#101927] border-2 border-slate-600 hover:border-slate-400 hover:bg-[#142033] shadow-sm'
      }`}
    >
      {/* Solved State */}
      {isCorrect && cell.answer && (
        <div className="flex flex-col items-center justify-between w-full h-full animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between w-full text-[10px] font-semibold mb-1">
            <span
              className={`text-[10px] tabular-nums ${
                isLight ? 'text-slate-500' : 'text-slate-400'
              }`}
            >
              {totalSolutionsCount} sol.
            </span>
          </div>

          <div className="my-auto">
            <h4
              className={`font-bold text-s sm:text-base line-clamp-2 leading-tight ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}
            >
              {cell.answer.station.name}
            </h4>
          </div>

          {/* Line badges: à gauche, précédés d'un icône tram ou bus en noir et blanc entouré d'un cercle */}
          <div className="flex flex-col items-start justify-center gap-1 mt-1 w-full pl-0.5 sm:pl-1">
            {cell.answer.station.lines.filter((l) => ['1', '2', '3'].includes(l)).length > 0 && (
              <div className="flex items-center justify-start gap-1 flex-wrap">
                <span
                  title="Tramway"
                  className={`w-[18px] h-[18px] rounded-full border flex items-center justify-center shrink-0 shadow-2xs ${
                    isLight
                      ? 'border-slate-350 bg-slate-100 text-slate-800'
                      : 'border-slate-600 bg-slate-800 text-slate-200'
                  }`}
                >
                  <Train className="w-2.5 h-2.5" />
                </span>
                {cell.answer.station.lines
                  .filter((l) => ['1', '2', '3'].includes(l))
                  .map((lineId) => (
                    <LinePill key={lineId} lineId={lineId} size="sm" />
                  ))}
              </div>
            )}
            {cell.answer.station.lines.filter((l) => !['1', '2', '3'].includes(l)).length > 0 && (
              <div className="flex items-center justify-start gap-1 flex-wrap">
                <span
                  title="Bus / Busway / Chronobus"
                  className={`w-[18px] h-[18px] rounded-full border flex items-center justify-center shrink-0 shadow-2xs ${
                    isLight
                      ? 'border-slate-350 bg-slate-100 text-slate-800'
                      : 'border-slate-600 bg-slate-800 text-slate-200'
                  }`}
                >
                  <Bus className="w-2.5 h-2.5" />
                </span>
                {cell.answer.station.lines
                  .filter((l) => !['1', '2', '3'].includes(l))
                  .map((lineId) => (
                    <LinePill key={lineId} lineId={lineId} size="sm" />
                  ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Empty / Unsolved / Failed State (sans + et sans le mot Trouver) */}
      {!isCorrect && (
        <div
          className={`flex flex-col items-center justify-center w-full h-full gap-0.5 my-auto transition-colors ${
            isLight
              ? 'text-slate-500 group-hover:text-slate-800'
              : 'text-slate-500 group-hover:text-slate-300'
          }`}
        >
          {isFailed ? (
            <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 tracking-tight">
            </span>
          ) : (isGameFinished || solutionsRevealed) ? (
            <span className="text-[11px] font-semibold tracking-tight">
              Voir sol.
            </span>
          ) : isSelected ? (
            <span className="text-[11px] font-semibold text-sky-600 dark:text-cyan-400 tracking-tight">
              Choisir...
            </span>
          ) : null}
          <span
            className={`text-xs sm:text-sm tabular-nums font-semibold ${
              remainingCount === 0
                ? 'text-rose-500 font-bold'
                : isLight
                ? 'text-slate-500 group-hover:text-slate-700'
                : 'text-slate-400 group-hover:text-slate-300'
            }`}
          >
            {isGameFinished || solutionsRevealed
              ? `${totalSolutionsCount} sol.`
              : `${remainingCount} poss.`}
          </span>
        </div>
      )}

      {/* Subtle indicator for rare solutions */}
      {isCorrect && totalSolutionsCount === 1 && (
        <div
          title="Station unique pour cette case !"
          className="absolute -top-1 -right-1 bg-amber-500 text-slate-950 p-1 rounded-bl-lg shadow-xs"
        >
          <Sparkles className="w-2.5 h-2.5" />
        </div>
      )}
    </button>
  );
};
