import React, { useState } from 'react';
import { Bus, ChevronDown, Eye, ListFilter, MapPin, Sparkles, Train, X, CheckCircle2 } from 'lucide-react';
import { Criterion, GridCell, Station } from '../types/game';
import { LinePill } from './LinePill';

interface CellSolutionsModalProps {
  isOpen: boolean;
  row: number;
  col: number;
  cell: GridCell | null;
  rowCriterion: Criterion | null;
  colCriterion: Criterion | null;
  grid: GridCell[][];
  theme?: 'light' | 'dark';
  onSelectCell: (row: number, col: number) => void;
  onClose: () => void;
}

export const CellSolutionsModal: React.FC<CellSolutionsModalProps> = ({
  isOpen,
  row,
  col,
  cell,
  rowCriterion,
  colCriterion,
  grid,
  theme = 'light',
  onSelectCell,
  onClose,
}) => {
  const isLight = theme === 'light';
  const [selectedStationId, setSelectedStationId] = useState<string | null>(null);

  if (!isOpen || !cell || !rowCriterion || !colCriterion) return null;

  // Tri alphabétique des solutions acceptées pour cette case
  const solutions: Station[] = [...cell.possibleSolutions].sort((a, b) =>
    a.name.localeCompare(b.name, 'fr')
  );

  const selectedStation = solutions.find((s) => s.id === selectedStationId);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cell-solutions-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`w-full max-w-lg max-h-[90vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden transition-colors ${
          isLight
            ? 'bg-white border border-slate-200 text-slate-900'
            : 'bg-[#0f172a] border border-slate-700/80 text-slate-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          className={`p-4 sm:p-5 border-b shrink-0 ${
            isLight
              ? 'bg-slate-50/90 border-slate-200'
              : 'bg-[#131d33] border-slate-800'
          }`}
        >
          <div className="flex items-center justify-between gap-3 mb-2.5">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h3
                  id="cell-solutions-title"
                  className={`text-base sm:text-lg font-bold ${
                    isLight ? 'text-slate-900' : 'text-slate-100'
                  }`}
                >
                  Solutions acceptées
                </h3>
                <p
                  className={`text-xs ${
                    isLight ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  Case (ligne {row + 1}, colonne {col + 1}) · {solutions.length} station{solutions.length > 1 ? 's' : ''} valide{solutions.length > 1 ? 's' : ''}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className={`p-1.5 rounded-lg transition-colors ${
                isLight
                  ? 'text-slate-400 hover:text-slate-800 hover:bg-slate-200'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
              }`}
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Condition Intersection Badges */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>
              Intersection :
            </span>

            {/* Row Criterion */}
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-bold shadow-2xs"
              style={{
                backgroundColor: rowCriterion.badgeBg,
                color: rowCriterion.badgeText,
              }}
            >
              {rowCriterion.category === 'line' && rowCriterion.lineBadges && rowCriterion.lineBadges.length > 0 && (
                <span className="inline-flex items-center gap-0.5">
                  {rowCriterion.lineBadges.map((lb, i) => (
                    <span
                      key={i}
                      className="px-1 rounded text-[10px] font-black"
                      style={{ backgroundColor: lb.bg, color: lb.text }}
                    >
                      {lb.badge}
                    </span>
                  ))}
                </span>
              )}
              {rowCriterion.category === 'line' && rowCriterion.lineBadge && (!rowCriterion.lineBadges || rowCriterion.lineBadges.length === 0) && (
                <span className="px-1 rounded text-[10px] font-black bg-black/20">
                  {rowCriterion.lineBadge}
                </span>
              )}
              <span>{rowCriterion.title}</span>
            </span>

            <span className={`font-bold ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
              ×
            </span>

            {/* Col Criterion */}
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-bold shadow-2xs"
              style={{
                backgroundColor: colCriterion.badgeBg,
                color: colCriterion.badgeText,
              }}
            >
              {colCriterion.category === 'line' && colCriterion.lineBadges && colCriterion.lineBadges.length > 0 && (
                <span className="inline-flex items-center gap-0.5">
                  {colCriterion.lineBadges.map((lb, i) => (
                    <span
                      key={i}
                      className="px-1 rounded text-[10px] font-black"
                      style={{ backgroundColor: lb.bg, color: lb.text }}
                    >
                      {lb.badge}
                    </span>
                  ))}
                </span>
              )}
              {colCriterion.category === 'line' && colCriterion.lineBadge && (!colCriterion.lineBadges || colCriterion.lineBadges.length === 0) && (
                <span className="px-1 rounded text-[10px] font-black bg-black/20">
                  {colCriterion.lineBadge}
                </span>
              )}
              <span>{colCriterion.title}</span>
            </span>
          </div>
        </div>

        {/* Dropdown Selector ("Liste déroulante") */}
        <div
          className={`p-4 border-b shrink-0 ${
            isLight ? 'bg-slate-50/50 border-slate-200' : 'bg-[#0f172a] border-slate-800'
          }`}
        >
          <label
            htmlFor="solutions-dropdown-select"
            className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${
              isLight ? 'text-slate-700' : 'text-slate-300'
            }`}
          >
            Liste déroulante des solutions ({solutions.length}) :
          </label>
          <div className="relative">
            <select
              id="solutions-dropdown-select"
              value={selectedStationId || ''}
              onChange={(e) => setSelectedStationId(e.target.value || null)}
              className={`w-full appearance-none pl-3.5 pr-10 py-2.5 rounded-xl text-sm font-semibold border focus:outline-none transition-colors cursor-pointer ${
                isLight
                  ? 'bg-white border-slate-300 text-slate-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                  : 'bg-slate-900 border-slate-700 text-slate-100 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20'
              }`}
            >
              <option value="">
                -- Dérouler pour voir les {solutions.length} solutions --
              </option>
              {solutions.map((st) => (
                <option key={st.id} value={st.id}>
                  {st.name} ({st.commune}) — Lignes : {st.lines.join(', ')}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Scrollable list of accepted solutions */}
        <div
          className={`flex-1 overflow-y-auto divide-y p-3 max-h-[46vh] ${
            isLight ? 'divide-slate-100 bg-white' : 'divide-slate-800/60 bg-[#0b1320]'
          }`}
        >
          {solutions.length === 0 ? (
            <div className="py-8 text-center text-slate-400">
              <p className="font-semibold text-sm">Aucune solution trouvée</p>
            </div>
          ) : (
            solutions.map((st) => {
              const isCellAnswer = cell.answer?.station?.id === st.id;
              const isSelected = selectedStationId === st.id;

              return (
                <div
                  key={st.id}
                  onClick={() => setSelectedStationId(st.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-all cursor-pointer ${
                    isSelected
                      ? isLight
                        ? 'bg-emerald-50/90 border border-emerald-400 shadow-xs'
                        : 'bg-emerald-950/40 border border-emerald-500/60 shadow-xs'
                      : isCellAnswer
                      ? isLight
                        ? 'bg-emerald-50/50 border border-emerald-200'
                        : 'bg-emerald-950/20 border border-emerald-800/60'
                      : isLight
                      ? 'hover:bg-slate-50 border border-transparent'
                      : 'hover:bg-slate-800/40 border border-transparent'
                  }`}
                >
                  <div className="flex flex-col gap-0.5 min-w-0 pr-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`font-bold text-sm ${
                          isLight ? 'text-slate-900' : 'text-slate-100'
                        }`}
                      >
                        {st.name}
                      </span>
                      {isCellAnswer && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Votre réponse</span>
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-xs ${
                        isLight ? 'text-slate-500' : 'text-slate-400'
                      }`}
                    >
                      {st.commune}
                    </span>
                  </div>

                  {/* Line Pills: précédées des icônes tram / bus en noir et blanc entourées d'un cercle */}
                  <div className="flex flex-col items-end justify-center gap-1 shrink-0">
                    {st.lines.filter((l) => ['1', '2', '3'].includes(l)).length > 0 && (
                      <div className="flex items-center gap-1.5 justify-end flex-wrap">
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
                        {st.lines
                          .filter((l) => ['1', '2', '3'].includes(l))
                          .map((lineId) => (
                            <LinePill key={lineId} lineId={lineId} size="sm" />
                          ))}
                      </div>
                    )}
                    {st.lines.filter((l) => !['1', '2', '3'].includes(l)).length > 0 && (
                      <div className="flex items-center gap-1.5 justify-end flex-wrap">
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
                        {st.lines
                          .filter((l) => !['1', '2', '3'].includes(l))
                          .map((lineId) => (
                            <LinePill key={lineId} lineId={lineId} size="sm" />
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer: Mini 3x3 Selector to browse other cells directly */}
        <div
          className={`p-3 sm:p-4 border-t shrink-0 flex items-center justify-between gap-4 ${
            isLight
              ? 'bg-slate-50/90 border-slate-200'
              : 'bg-[#131d33] border-slate-800'
          }`}
        >
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-semibold hidden sm:inline ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              Changer de case :
            </span>
            <div className="grid grid-cols-3 gap-1">
              {[0, 1, 2].map((rIdx) =>
                [0, 1, 2].map((cIdx) => {
                  const isCurrent = rIdx === row && cIdx === col;
                  const targetCell = grid[rIdx]?.[cIdx];
                  const isTargetCorrect = targetCell?.answer?.isValid;

                  return (
                    <button
                      key={`nav-${rIdx}-${cIdx}`}
                      onClick={() => {
                        setSelectedStationId(null);
                        onSelectCell(rIdx, cIdx);
                      }}
                      title={`Case (${rIdx + 1}, ${cIdx + 1})`}
                      className={`w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center transition-all ${
                        isCurrent
                          ? 'bg-emerald-600 text-white ring-2 ring-emerald-400'
                          : isTargetCorrect
                          ? isLight
                            ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                            : 'bg-emerald-950 text-emerald-300 hover:bg-emerald-900'
                          : isLight
                          ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {rIdx * 3 + cIdx + 1}
                    </button>
                  );
                })
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors ${
              isLight
                ? 'bg-slate-200 hover:bg-slate-300 text-slate-800'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
            }`}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
