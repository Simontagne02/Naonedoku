import React from 'react';
import { Criterion } from '../types/game';

interface CriterionBadgeProps {
  criterion: Criterion;
  type: 'row' | 'col';
  theme?: 'light' | 'dark';
}

export const CriterionBadge: React.FC<CriterionBadgeProps> = ({
  criterion,
  type,
  theme = 'light',
}) => {
  const isLight = theme === 'light';
  const isLineCondition = criterion.category === 'line' || criterion.category === 'color';

  return (
    <div
      className={`group relative flex flex-col justify-center items-center text-center p-1.5 sm:p-2 transition-all rounded-xl select-none w-full aspect-square ${
        isLight
          ? 'bg-slate-100 hover:bg-slate-200/70 border border-slate-100 hover:border-slate-200/70 shadow-2xs'
          : 'bg-slate-800/60 hover:bg-slate-800/90 border border-slate-800/60 hover:border-slate-800/90 shadow-2xs'
      }`}
    >
      {/* Main condition title */}
      <span
        className={`text-xs sm:text-sm font-black tracking-tight leading-snug line-clamp-3 px-0.5 ${
          isLight ? 'text-slate-800' : 'text-slate-200'
        }`}
      >
        {criterion.shortTitle}
      </span>

      {/* Icônes/pastilles pour les conditions de lignes et de couleurs de lignes */}
      {isLineCondition && (
        <>
          {criterion.lineBadges && criterion.lineBadges.length > 0 ? (
            <div className="flex items-center justify-center gap-1 mt-1.5 shrink-0 flex-wrap max-w-full">
              {criterion.lineBadges.map((lb, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center min-w-4 h-4 px-1 rounded border border-black/15 shadow-2xs font-black text-[9px] sm:text-[10px] select-none tracking-tight leading-none"
                  style={{
                    backgroundColor: lb.bg,
                    color: lb.text,
                  }}
                >
                  {lb.badge}
                </div>
              ))}
            </div>
          ) : criterion.lineBadge ? (
            <div
              className="flex items-center justify-center min-w-4 h-4 px-1 sm:min-w-5 sm:h-5 rounded border border-black/15 mt-1.5 shadow-2xs font-black text-[9px] sm:text-[10px] shrink-0 select-none tracking-tight leading-none"
              style={{
                backgroundColor: criterion.badgeBg,
                color: criterion.badgeText,
              }}
            >
              {criterion.lineBadge}
            </div>
          ) : criterion.colorSwatches && criterion.colorSwatches.length > 0 ? (
            <div className="flex items-center justify-center gap-1.5 mt-1.5 shrink-0 flex-wrap max-w-full">
              {criterion.colorSwatches.map((hex, idx) => (
                <span
                  key={idx}
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-black/15 shadow-2xs shrink-0"
                  style={{ backgroundColor: hex }}
                />
              ))}
            </div>
          ) : null}
        </>
      )}

      {/* Full hover tooltip */}
      <div className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50 hidden group-hover:flex flex-col items-center w-48 p-2 bg-slate-900 text-white text-xs rounded-lg shadow-xl border border-slate-700">
        <p className="font-semibold text-emerald-400 text-center">{criterion.title}</p>
      </div>
    </div>
  );
};
