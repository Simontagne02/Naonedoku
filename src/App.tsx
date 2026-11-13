/**
 * Naonedoku - Le Metrodoku Nantais
 * Jeu de déduction et de culture transport sur le réseau Naolib / TAN de Nantes
 */

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AlertCircle, BarChart3, BookOpen, Check, CheckCircle, Dices, Eye, Info, Sparkles, Timer } from 'lucide-react';
import { GameControls } from './components/GameControls';
import { GameOverModal } from './components/GameOverModal';
import { GridBoard } from './components/GridBoard';
import { HelpRulesModal } from './components/HelpRulesModal';
import { StationSearchModal } from './components/StationSearchModal';
import { CellSolutionsModal } from './components/CellSolutionsModal';
import { StatsModal } from './components/StatsModal';
import { Criterion, GameDifficulty, GameMode, GridCell, Station, UserStats } from './types/game';
import { computeAcceptedSolutionGrid, generateMetrodokuGrid } from './utils/gridGenerator';
import { formatTime, loadUserStats, saveGameResult } from './utils/storage';

export default function App() {
  // Mode clair permanent (mode sombre désactivé)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('naonedoku_theme');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const theme = 'light' as const;
  const isLight = true;

  // Game Setup State
  const [mode, setMode] = useState<GameMode>('daily');
  const difficulty: GameDifficulty = 'standard';
  const [rowCriteria, setRowCriteria] = useState<Criterion[]>([]);
  const [colCriteria, setColCriteria] = useState<Criterion[]>([]);
  const [grid, setGrid] = useState<GridCell[][]>([]);
  
  // Game Progress State (3 erreurs maximales autorisées)
  const [mistakes, setMistakes] = useState<number>(0);
  const maxMistakes = 3;
  const [usedStationIds, setUsedStationIds] = useState<string[]>([]);
  const [selectedCellPos, setSelectedCellPos] = useState<{ row: number; col: number } | null>(null);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isWon, setIsWon] = useState<boolean>(false);
  const [isPerfect, setIsPerfect] = useState<boolean>(false);
  const [solutionsRevealed, setSolutionsRevealed] = useState<boolean>(false);
  const [solutionsModalCell, setSolutionsModalCell] = useState<{ row: number; col: number } | null>(null);

  // Chronomètre de la partie (déclenché à chaque nouvelle partie, arrêté dès que terminé)
  const [startTime, setStartTime] = useState<number>(() => Date.now());
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  // Modals
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);
  const [isStatsOpen, setIsStatsOpen] = useState<boolean>(false);
  const [isGameOverOpen, setIsGameOverOpen] = useState<boolean>(false);
  const [userStats, setUserStats] = useState<UserStats>(loadUserStats());

  // Transient Toast Notification
  const [toastMessage, setToastMessage] = useState<{
    text: string;
    type: 'success' | 'error' | 'info';
  } | null>(null);

  const showToast = (text: string, type: 'success' | 'error' | 'info') => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage((prev) => (prev?.text === text ? null : prev));
    }, 3500);
  };

  // Initialize or Reset a Game Grid
  const startNewGame = useCallback(
    (newMode: GameMode, newDiff: GameDifficulty, customSeed?: string) => {
      const generated = generateMetrodokuGrid(newMode, newDiff, customSeed);

      const initialGrid: GridCell[][] = [];
      for (let r = 0; r < 3; r++) {
        initialGrid[r] = [];
        for (let c = 0; c < 3; c++) {
          initialGrid[r][c] = {
            row: r,
            col: c,
            answer: null,
            possibleSolutions: generated.solutions[r][c],
          };
        }
      }

      setRowCriteria(generated.rowCriteria);
      setColCriteria(generated.colCriteria);
      setGrid(initialGrid);
      setMistakes(0);
      setUsedStationIds([]);
      setSelectedCellPos(null);
      setIsFinished(false);
      setIsWon(false);
      setIsPerfect(false);
      setSolutionsRevealed(false);
      setSolutionsModalCell(null);
      setIsGameOverOpen(false);

      // Réinitialiser et déclencher le chronomètre pour la nouvelle partie
      setStartTime(Date.now());
      setElapsedTime(0);
    },
    []
  );

  // Initial load
  useEffect(() => {
    startNewGame(mode, difficulty);
  }, []);

  // Décompte du chronomètre : tourne tant que la partie n'est pas terminée
  useEffect(() => {
    if (isFinished) return;

    // Mise à jour immédiate
    setElapsedTime(Math.floor((Date.now() - startTime) / 1000));

    const interval = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, isFinished]);

  // Compute Current Score (Number of valid answers in grid)
  const currentScore = grid.reduce(
    (acc, row) =>
      acc + row.filter((cell) => cell.answer && cell.answer.isValid).length,
    0
  );

  // Compute accepted unique solutions for the grid
  const acceptedSolutions = useMemo(() => {
    return computeAcceptedSolutionGrid(grid);
  }, [grid]);

  // Handle cell click
  const handleSelectCell = (row: number, col: number) => {
    setSelectedCellPos({ row, col });

    // Si la partie est terminée ou les solutions révélées : afficher la liste déroulante des solutions
    if (isFinished || solutionsRevealed) {
      setSolutionsModalCell({ row, col });
    } else {
      setIsSearchOpen(true);
    }
  };

  // Validate answer for the selected cell
  const handleSelectStation = (station: Station) => {
    if (!selectedCellPos) return;
    const { row, col } = selectedCellPos;
    const cell = grid[row][col];

    if (cell.answer && cell.answer.isValid) {
      showToast('Cette case a déjà été validée !', 'info');
      setIsSearchOpen(false);
      return;
    }

    if (usedStationIds.includes(station.id)) {
      return;
    }

    const rowCrit = rowCriteria[row];
    const colCrit = colCriteria[col];

    const matchesRow = rowCrit.matches(station);
    const matchesCol = colCrit.matches(station);
    const isValid = matchesRow && matchesCol;

    setIsSearchOpen(false);

    if (isValid) {
      const nextUsedIds = [...usedStationIds, station.id];
      setUsedStationIds(nextUsedIds);

      // Mettre à jour la case avec la réponse validée
      const nextGrid = grid.map((rList, rIdx) =>
        rList.map((cCell, cIdx) => {
          if (rIdx === row && cIdx === col) {
            return {
              ...cCell,
              answer: {
                station,
                isValid: true,
                timestamp: Date.now(),
              },
            };
          }
          return cCell;
        })
      );
      setGrid(nextGrid);

      const nextScore = currentScore + 1;
      showToast(`Bravo ! « ${station.name} » valide la case.`, 'success');

      // Condition de victoire : les 9 cases sont trouvées
      if (nextScore === 9) {
        const finalSec = Math.floor((Date.now() - startTime) / 1000);
        setElapsedTime(finalSec);
        const perfect = mistakes === 0;
        setIsFinished(true);
        setIsWon(true);
        setIsPerfect(perfect);

        const updatedStats = saveGameResult(9, true, perfect, mode);
        setUserStats(updatedStats);

        setTimeout(() => {
          setIsGameOverOpen(true);
        }, 500);
      }
    } else {
      const nextMistakes = mistakes + 1;
      setMistakes(nextMistakes);

      // Marquer la case en rouge pour signaler l'essai manqué, la case reste rejouable
      const nextGrid = grid.map((rList, rIdx) =>
        rList.map((cCell, cIdx) => {
          if (rIdx === row && cIdx === col) {
            return {
              ...cCell,
              answer: {
                station,
                isValid: false,
                timestamp: Date.now(),
              },
            };
          }
          return cCell;
        })
      );
      setGrid(nextGrid);

      // Défaite si le joueur atteint 3 erreurs
      if (nextMistakes >= maxMistakes) {
        const finalSec = Math.floor((Date.now() - startTime) / 1000);
        setElapsedTime(finalSec);
        setIsFinished(true);
        setIsWon(false);

        const updatedStats = saveGameResult(currentScore, false, false, mode);
        setUserStats(updatedStats);

        setTimeout(() => {
          setIsGameOverOpen(true);
        }, 600);
      }
    }
  };

  // Reveal accepted solutions (grille intacte, consultation au clic par case)
  const handleRevealSolutions = () => {
    const finalSec = Math.floor((Date.now() - startTime) / 1000);
    setElapsedTime(finalSec);
    setSolutionsRevealed(true);
    setIsFinished(true);
    setIsGameOverOpen(false);
    showToast('Cliquez sur une case pour afficher la liste déroulante de ses solutions.', 'info');
  };

  // Handlers for switching mode
  const handleSelectMode = (newMode: GameMode) => {
    setMode(newMode);
    startNewGame(newMode, 'standard');
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-200 selection:bg-emerald-500 selection:text-white ${
        isLight
          ? 'bg-[#f8fafc] text-slate-900'
          : 'bg-[#0b131f] text-slate-100'
      }`}
    >
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-3 duration-200">
          <div
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl shadow-lg text-xs sm:text-sm font-semibold border ${
              toastMessage.type === 'success'
                ? isLight
                  ? 'bg-emerald-50 text-emerald-900 border-emerald-300 shadow-emerald-500/10'
                  : 'bg-emerald-950/90 text-emerald-200 border-emerald-600/70 shadow-emerald-950/50'
                : toastMessage.type === 'error'
                ? isLight
                  ? 'bg-rose-50 text-rose-900 border-rose-300 shadow-rose-500/10'
                  : 'bg-rose-950/90 text-rose-200 border-rose-600/70 shadow-rose-950/50'
                : isLight
                ? 'bg-sky-50 text-sky-900 border-sky-300 shadow-sky-500/10'
                : 'bg-slate-900/90 text-slate-200 border-slate-700 shadow-slate-950/50'
            }`}
          >
            {toastMessage.type === 'success' && (
              <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            )}
            {toastMessage.type === 'error' && (
              <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
            )}
            {toastMessage.type === 'info' && (
              <Info className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            )}
            <span>{toastMessage.text}</span>
          </div>
        </div>
      )}

      {/* Main Workspace Frame */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-6 flex flex-col items-center justify-start">
        {/* Title & Actions Bar */}
        <div className="w-full max-w-3xl flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-6">
          <div className="text-left">
            <h1
              className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}
            >
              Naonedoku
            </h1>
            <p
              className={`text-xs sm:text-sm mt-1 max-w-lg ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              Trouvez une station nantaise validant à la fois la ligne et la colonne. Aucune station ne peut être réutilisée !
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsHelpOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-2xs transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>Règles</span>
            </button>

            <button
              onClick={() => setIsStatsOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-2xs transition-colors cursor-pointer"
            >
              <BarChart3 className="w-4 h-4 text-amber-500" />
              <span>Statistiques</span>
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <GameControls
          mode={mode}
          theme={theme}
          onSelectMode={handleSelectMode}
          onResetGame={() => startNewGame(mode, difficulty)}
        />

        {/* 3x3 Metrodoku Grid */}
        {rowCriteria.length === 3 && colCriteria.length === 3 && (
          <GridBoard
            rowCriteria={rowCriteria}
            colCriteria={colCriteria}
            grid={grid}
            selectedCell={selectedCellPos}
            usedStationIds={usedStationIds}
            isGameFinished={isFinished}
            solutionsRevealed={solutionsRevealed}
            acceptedSolutions={acceptedSolutions}
            elapsedTime={elapsedTime}
            theme={theme}
            onSelectCell={handleSelectCell}
          />
        )}

        {/* Progression & Erreurs (en bas de la grille) */}
        <div className="w-full max-w-3xl mt-3 px-1.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-5 sm:gap-6">
            <div className="flex items-center gap-1.5">
              <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>
                Progression :
              </span>
              <span className="font-bold text-sm text-emerald-600 dark:text-emerald-400 tabular-nums">
                {currentScore}/9
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>
                Erreurs :
              </span>
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-1">
                    {[1, 2, 3].map((slot) => {
                      const isErrorMade = mistakes >= slot;
                      return (
                        <span
                          key={slot}
                          title={
                            isErrorMade
                              ? `Erreur ${slot}/${maxMistakes}`
                              : `Droit à l'erreur (${slot}/${maxMistakes})`
                          }
                          className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black transition-all ${
                            isErrorMade
                              ? 'bg-rose-500 text-white shadow-xs scale-105'
                              : isLight
                              ? 'bg-slate-200 text-slate-400'
                              : 'bg-slate-800 text-slate-600'
                          }`}
                        >
                          {isErrorMade ? '✕' : '•'}
                        </span>
                      );
                    })}
                  </div>
                  <span
                    className={`font-semibold tabular-nums text-xs ${
                      mistakes >= maxMistakes
                        ? 'text-rose-600 dark:text-rose-400 font-bold'
                        : mistakes === 2
                        ? 'text-amber-600 dark:text-amber-400'
                        : isLight
                        ? 'text-slate-700'
                        : 'text-slate-300'
                    }`}
                  >
                    ({mistakes}/{maxMistakes})
                  </span>
                </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!isFinished && !solutionsRevealed && (
              <button
                onClick={handleRevealSolutions}
                className={`flex items-center gap-1.5 text-xs font-medium transition-colors hover:underline cursor-pointer ${
                  isLight
                    ? 'text-slate-500 hover:text-amber-700'
                    : 'text-slate-400 hover:text-amber-300'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Révéler les réponses</span>
              </button>
            )}
            {solutionsRevealed && (
              <span className="text-amber-600 dark:text-amber-400 font-medium text-xs flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                <span>Solutions acceptées affichées</span>
              </span>
            )}
          </div>
        </div>

        {/* Action button below grid if game is completed */}
        {isFinished && (
          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={() => setIsGameOverOpen(true)}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition-all shadow-xs"
            >
              Voir le récapitulatif & Partager
            </button>
            <button
              onClick={() => {
                setMode('random');
                startNewGame('random', difficulty);
              }}
              className={`px-4 py-2.5 font-semibold rounded-xl text-sm transition-all border flex items-center gap-2 ${
                isLight
                  ? 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 shadow-xs'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
            >
              <Dices className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Autre grille</span>
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer
        className={`w-full py-4 px-4 text-center text-xs transition-colors ${
          isLight
            ? 'border-t border-slate-200 bg-white text-slate-500'
            : 'border-t border-slate-800/80 bg-[#090f1a] text-slate-400'
        }`}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            Naonedoku — Librement inspiré du célèbre jeu Metrodoku
          </span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsHelpOpen(true)}
              className={`transition-colors cursor-pointer ${
                isLight ? 'hover:text-slate-900' : 'hover:text-slate-200'
              }`}
            >
              Règles
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setIsStatsOpen(true)}
              className={`transition-colors cursor-pointer ${
                isLight ? 'hover:text-slate-900' : 'hover:text-slate-200'
              }`}
            >
              Statistiques
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <StationSearchModal
        isOpen={isSearchOpen}
        rowCriterion={selectedCellPos ? rowCriteria[selectedCellPos.row] : null}
        colCriterion={selectedCellPos ? colCriteria[selectedCellPos.col] : null}
        usedStationIds={usedStationIds}
        theme={theme}
        onSelectStation={handleSelectStation}
        onClose={() => setIsSearchOpen(false)}
      />

      <CellSolutionsModal
        isOpen={solutionsModalCell !== null}
        row={solutionsModalCell?.row ?? 0}
        col={solutionsModalCell?.col ?? 0}
        cell={solutionsModalCell ? grid[solutionsModalCell.row]?.[solutionsModalCell.col] : null}
        rowCriterion={solutionsModalCell ? rowCriteria[solutionsModalCell.row] : null}
        colCriterion={solutionsModalCell ? colCriteria[solutionsModalCell.col] : null}
        grid={grid}
        theme={theme}
        onSelectCell={(r, c) => {
          setSelectedCellPos({ row: r, col: c });
          setSolutionsModalCell({ row: r, col: c });
        }}
        onClose={() => setSolutionsModalCell(null)}
      />

      <HelpRulesModal
        isOpen={isHelpOpen}
        theme={theme}
        onClose={() => setIsHelpOpen(false)}
      />

      <StatsModal
        isOpen={isStatsOpen}
        stats={userStats}
        theme={theme}
        onClose={() => setIsStatsOpen(false)}
      />

      <GameOverModal
        isOpen={isGameOverOpen}
        score={currentScore}
        mistakes={mistakes}
        maxMistakes={maxMistakes}
        isWon={isWon}
        isPerfect={isPerfect}
        grid={grid}
        mode={mode}
        solutionsRevealed={solutionsRevealed}
        elapsedTime={elapsedTime}
        theme={theme}
        onRevealSolutions={handleRevealSolutions}
        onNewRandomGame={() => {
          setMode('random');
          startNewGame('random', difficulty);
        }}
        onClose={() => setIsGameOverOpen(false)}
      />
    </div>
  );
}
