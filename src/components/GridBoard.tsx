import React from 'react';
import { Timer } from 'lucide-react';
import { Criterion, GridCell, Station } from '../types/game';
import { formatTime } from '../utils/storage';
import { CriterionBadge } from './CriterionBadge';
import { GridCellComponent } from './GridCellComponent';

interface GridBoardProps {
  rowCriteria: Criterion[];
  colCriteria: Criterion[];
  grid: GridCell[][];
  selectedCell: { row: number; col: number } | null;
  usedStationIds: string[];
  isGameFinished: boolean;
  solutionsRevealed: boolean;
  acceptedSolutions?: (Station | null)[][];
  elapsedTime?: number;
  theme?: 'light' | 'dark';
  onSelectCell: (row: number, col: number) => void;
}

export const GridBoard: React.FC<GridBoardProps> = ({
  rowCriteria,
  colCriteria,
  grid,
  selectedCell,
  usedStationIds,
  isGameFinished,
  solutionsRevealed,
  acceptedSolutions,
  elapsedTime = 0,
  theme = 'light',
  onSelectCell,
}) => {
  const isLight = theme === 'light';

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* 4x4 Table-like grid layout */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3.5 items-stretch">
        {/* Premier carré en haut à gauche : Chronomètre */}
        <div
          className={`flex flex-col items-center justify-center text-center p-1.5 sm:p-2 rounded-xl transition-all w-full aspect-square border shadow-2xs select-none ${
            isLight
              ? 'bg-slate-100 hover:bg-slate-200/70 border border-slate-100 hover:border-slate-200/70 shadow-2xs'
              : 'bg-emerald-950/30 border-emerald-800/60 text-emerald-100'
          }`}
          title="Chronomètre de la partie"
        >
          <span className="text-m sm:text-xl font-black tracking-tight leading-snug line-clamp-3 px-0.5">
            {formatTime(elapsedTime)}
          </span>
        </div>

        {/* Top Headers: Column Criteria */}
        {colCriteria.map((colCrit) => (
          <CriterionBadge
            key={colCrit.id}
            criterion={colCrit}
            type="col"
            theme={theme}
          />
        ))}

        {/* Row 0 */}
        <CriterionBadge criterion={rowCriteria[0]} type="row" theme={theme} />
        {[0, 1, 2].map((col) => (
          <GridCellComponent
            key={`cell-0-${col}`}
            cell={grid[0][col]}
            rowCriterion={rowCriteria[0]}
            colCriterion={colCriteria[col]}
            usedStationIds={usedStationIds}
            isSelected={selectedCell?.row === 0 && selectedCell?.col === col}
            isGameFinished={isGameFinished}
            solutionsRevealed={solutionsRevealed}
            acceptedSolution={acceptedSolutions?.[0]?.[col]}
            theme={theme}
            onClick={() => onSelectCell(0, col)}
          />
        ))}

        {/* Row 1 */}
        <CriterionBadge criterion={rowCriteria[1]} type="row" theme={theme} />
        {[0, 1, 2].map((col) => (
          <GridCellComponent
            key={`cell-1-${col}`}
            cell={grid[1][col]}
            rowCriterion={rowCriteria[1]}
            colCriterion={colCriteria[col]}
            usedStationIds={usedStationIds}
            isSelected={selectedCell?.row === 1 && selectedCell?.col === col}
            isGameFinished={isGameFinished}
            solutionsRevealed={solutionsRevealed}
            acceptedSolution={acceptedSolutions?.[1]?.[col]}
            theme={theme}
            onClick={() => onSelectCell(1, col)}
          />
        ))}

        {/* Row 2 */}
        <CriterionBadge criterion={rowCriteria[2]} type="row" theme={theme} />
        {[0, 1, 2].map((col) => (
          <GridCellComponent
            key={`cell-2-${col}`}
            cell={grid[2][col]}
            rowCriterion={rowCriteria[2]}
            colCriterion={colCriteria[col]}
            usedStationIds={usedStationIds}
            isSelected={selectedCell?.row === 2 && selectedCell?.col === col}
            isGameFinished={isGameFinished}
            solutionsRevealed={solutionsRevealed}
            acceptedSolution={acceptedSolutions?.[2]?.[col]}
            theme={theme}
            onClick={() => onSelectCell(2, col)}
          />
        ))}
      </div>
    </div>
  );
};
