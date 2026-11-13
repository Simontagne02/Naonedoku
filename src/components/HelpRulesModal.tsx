import React from 'react';
import { BookOpen, Sparkles, X } from 'lucide-react';

interface HelpRulesModalProps {
  isOpen: boolean;
  theme?: 'light' | 'dark';
  onClose: () => void;
}

export const HelpRulesModal: React.FC<HelpRulesModalProps> = ({
  isOpen,
  theme = 'light',
  onClose,
}) => {
  const isLight = theme === 'light';
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="help-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className={`w-full max-w-lg rounded-2xl p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto transition-colors ${
          isLight
            ? 'bg-white border border-slate-200 text-slate-800'
            : 'bg-[#0f172a] border border-slate-700 text-slate-300'
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

        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3
              id="help-modal-title"
              className={`text-lg font-bold ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}
            >
              Comment jouer à Naonedoku ?
            </h3>
            <p
              className={`text-xs ${
                isLight ? 'text-slate-500' : 'text-slate-400'
              }`}
            >
              Le jeu de déduction inspiré de Metrodoku
            </p>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div
            className={`p-3.5 rounded-xl border ${
              isLight
                ? 'bg-slate-50 border-slate-200'
                : 'bg-slate-900/80 border-slate-800'
            }`}
          >
            <h4
              className={`font-bold text-xs sm:text-sm mb-1 flex items-center gap-2 ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-black">
                1
              </span>
              <span>Le principe de la grille 3×3</span>
            </h4>
            <p
              className={`text-xs leading-relaxed ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              Chaque case se situe au croisement d'une condition en ligne (à gauche) et d'une condition en colonne (en haut). Votre objectif est de trouver une station ou un arrêt du réseau de transport nantais (Naolib / TAN) qui remplit <strong>simultanément les deux critères</strong>.
            </p>
          </div>

          <div
            className={`p-3.5 rounded-xl border ${
              isLight
                ? 'bg-slate-50 border-slate-200'
                : 'bg-slate-900/80 border-slate-800'
            }`}
          >
            <h4
              className={`font-bold text-xs sm:text-sm mb-1 flex items-center gap-2 ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-cyan-600 text-white text-xs flex items-center justify-center font-black">
                2
              </span>
              <span>Règle d'unicité (Aucun doublon)</span>
            </h4>
            <p
              className={`text-xs leading-relaxed ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              Une station ne peut être utilisée <strong>qu'une seule fois</strong> dans toute la grille ! Même si une station majeure valide plusieurs cases, choisissez judicieusement où la placer.
            </p>
          </div>

          <div
            className={`p-3.5 rounded-xl border ${
              isLight
                ? 'bg-slate-50 border-slate-200'
                : 'bg-slate-900/80 border-slate-800'
            }`}
          >
            <h4
              className={`font-bold text-xs sm:text-sm mb-1 flex items-center gap-2 ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-amber-600 text-white text-xs flex items-center justify-center font-black">
                3
              </span>
              <span>3 erreurs maximales autorisées</span>
            </h4>
            <p
              className={`text-xs leading-relaxed ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              Vous avez le droit à <strong>3 erreurs au maximum</strong> pour compléter les 9 cases. À la 3ᵉ erreur, la partie s'arrête ! Réussir l'ensemble de la grille sans aucune faute (0 erreur) vous confère le titre de <strong>Grille Immaculée</strong>.
            </p>
          </div>

          <div
            className={`p-3.5 rounded-xl border ${
              isLight
                ? 'bg-slate-50 border-slate-200'
                : 'bg-slate-900/80 border-slate-800'
            }`}
          >
            <h4
              className={`font-bold text-xs sm:text-sm mb-1 flex items-center gap-2 ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}
            >
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Génération aléatoire & Données officielles</span>
            </h4>
            <p
              className={`text-xs leading-relaxed ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              L'application choisit aléatoirement les conditions parmi les 1 082 arrêts répertoriés du réseau Naolib (Tram, Busway, Navibus, Chronobus, gares TER...). Chaque grille générée est <strong>garantie 100% solvable</strong>.
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors text-sm shadow-xs"
        >
          C'est compris, je joue !
        </button>
      </div>
    </div>
  );
};
