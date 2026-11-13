import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AlertCircle, Check, Search, X } from 'lucide-react';
import { NANTES_STATIONS } from '../data/nantesTransit';
import { Criterion, Station } from '../types/game';

interface StationSearchModalProps {
  isOpen: boolean;
  rowCriterion: Criterion | null;
  colCriterion: Criterion | null;
  usedStationIds: string[];
  theme?: 'light' | 'dark';
  onSelectStation: (station: Station) => void;
  onClose: () => void;
}

// Nettoyer les accents et la casse pour la recherche
function normalizeString(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export const StationSearchModal: React.FC<StationSearchModalProps> = ({
  isOpen,
  rowCriterion,
  colCriterion,
  usedStationIds,
  theme = 'light',
  onSelectStation,
  onClose,
}) => {
  const isLight = theme === 'light';
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Focus automatique à l'ouverture
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const normalizedQuery = useMemo(() => normalizeString(query), [query]);
  const isSearchActive = normalizedQuery.length >= 3;

  // Filtrage dynamique des stations uniquement à partir de 3 lettres
  const filteredStations = useMemo(() => {
    if (!isOpen || !isSearchActive) return [];

    const matches = NANTES_STATIONS.filter((station) => {
      const normalizedName = normalizeString(station.name);
      return normalizedName.includes(normalizedQuery);
    }).sort((a, b) => {
      // Prioriser les correspondances exactes ou commençant par la requête
      const aStarts = normalizeString(a.name).startsWith(normalizedQuery);
      const bStarts = normalizeString(b.name).startsWith(normalizedQuery);
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
      return a.name.localeCompare(b.name, 'fr');
    });

    return matches.slice(0, 100);
  }, [isOpen, isSearchActive, normalizedQuery]);

  // Réinitialiser la sélection lors du changement de requête
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Gestion des touches clavier
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, filteredStations.length - 1));
      scrollActiveIntoView(selectedIndex + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
      scrollActiveIntoView(selectedIndex - 1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const current = filteredStations[selectedIndex];
      if (current) {
        if (!usedStationIds.includes(current.id)) {
          onSelectStation(current);
        }
      }
    }
  };

  const scrollActiveIntoView = (index: number) => {
    if (!listRef.current) return;
    const item = listRef.current.children[index] as HTMLElement;
    if (item) {
      item.scrollIntoView({ block: 'nearest' });
    }
  };

  if (!isOpen || !rowCriterion || !colCriterion) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className={`w-full max-w-xl max-h-[85vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden transition-colors ${
          isLight
            ? 'bg-white border border-slate-200 text-slate-900'
            : 'bg-[#0f172a] border border-slate-700/80 text-slate-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          className={`p-4 sm:p-5 border-b ${
            isLight
              ? 'bg-slate-50/80 border-slate-200'
              : 'bg-[#131d33] border-slate-800'
          }`}
        >
          <div className="flex items-center justify-between gap-3 mb-2">
            <h3
              id="search-modal-title"
              className={`text-base sm:text-lg font-bold flex items-center gap-2 ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}
            >
              <span>Sélectionner une station</span>
            </h3>
            <button
              onClick={onClose}
              className={`p-1 rounded-lg transition-colors ${
                isLight
                  ? 'text-slate-400 hover:text-slate-800 hover:bg-slate-200'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
              }`}
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Condition intersection reminder */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>
              Doit valider :
            </span>
            <span
              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded font-bold shadow-xs"
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
            <span
              className={`font-bold ${
                isLight ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              ×
            </span>
            <span
              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded font-bold shadow-xs"
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

        {/* Search Bar Input */}
        <div
          className={`p-4 border-b ${
            isLight
              ? 'bg-white border-slate-200'
              : 'bg-[#0e1628] border-slate-800/80'
          }`}
        >
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Rechercher une station (ex: Commerce, Beauséjour, Foch...)"
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm focus:outline-none transition-all ${
                isLight
                  ? 'bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                  : 'bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20'
              }`}
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <div
            className={`flex justify-between items-center text-[11px] mt-2 px-1 ${
              isLight ? 'text-slate-500' : 'text-slate-400'
            }`}
          >
            <span>
              {!isSearchActive ? (
                normalizedQuery.length === 0
                  ? '3 lettres minimum pour rechercher'
                  : `Encore ${3 - normalizedQuery.length} lettre${3 - normalizedQuery.length > 1 ? 's' : ''}...`
              ) : (
                `${filteredStations.length} station${filteredStations.length > 1 ? 's' : ''} trouvée${filteredStations.length > 1 ? 's' : ''}`
              )}
            </span>
            <span className="hidden sm:inline opacity-80">
              {isSearchActive && filteredStations.length > 0
                ? 'Utilisez ↑ ↓ pour naviguer, Entrée pour valider'
                : ''}
            </span>
          </div>
        </div>

        {/* Station List */}
        <div
          ref={listRef}
          className={`flex-1 overflow-y-auto divide-y p-2 max-h-[50vh] ${
            isLight
              ? 'divide-slate-100 bg-white'
              : 'divide-slate-800/50 bg-[#0f172a]'
          }`}
        >
          {!isSearchActive ? (
            <div className="py-12 text-center text-slate-400">
              <Search
                className={`w-8 h-8 mx-auto mb-2.5 ${
                  isLight ? 'text-slate-300' : 'text-slate-600'
                }`}
              />
              <p
                className={`font-semibold text-sm ${
                  isLight ? 'text-slate-700' : 'text-slate-200'
                }`}
              >
                {normalizedQuery.length === 0
                  ? 'Tapez au moins 3 lettres pour rechercher'
                  : `Entrez encore ${3 - normalizedQuery.length} lettre${3 - normalizedQuery.length > 1 ? 's' : ''}...`}
              </p>
              <p
                className={`text-xs mt-1 max-w-xs mx-auto ${
                  isLight ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Recherchez par nom (ex : Com pour Commerce, Foc pour Foch...).
              </p>
            </div>
          ) : filteredStations.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <AlertCircle
                className={`w-8 h-8 mx-auto mb-2 ${
                  isLight ? 'text-slate-300' : 'text-slate-600'
                }`}
              />
              <p
                className={`font-semibold ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}
              >
                Aucune station correspondante
              </p>
              <p
                className={`text-xs mt-1 ${
                  isLight ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Vérifiez l'orthographe du nom ou essayez un mot-clé.
              </p>
            </div>
          ) : (
            filteredStations.map((station, idx) => {
              const isUsed = usedStationIds.includes(station.id);
              const isFocused = idx === selectedIndex;

              return (
                <button
                  key={station.id}
                  disabled={isUsed}
                  onClick={() => onSelectStation(station)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-colors ${
                    isUsed
                      ? isLight
                        ? 'opacity-40 cursor-not-allowed bg-slate-50'
                        : 'opacity-40 cursor-not-allowed bg-slate-900/30'
                      : isFocused
                      ? isLight
                        ? 'bg-emerald-50 border border-emerald-300'
                        : 'bg-cyan-950/60 border border-cyan-500/40'
                      : isLight
                      ? 'hover:bg-slate-50 border border-transparent'
                      : 'hover:bg-slate-800/50 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-semibold text-sm ${
                        isLight ? 'text-slate-900' : 'text-slate-100'
                      }`}
                    >
                      {station.name}
                    </span>
                    {isUsed && (
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded ${
                          isLight
                            ? 'bg-slate-200 text-slate-600'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        Déjà utilisée
                      </span>
                    )}
                  </div>

                  {!isUsed && isFocused && (
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        isLight
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-cyan-500/20 text-cyan-400'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  )}
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
