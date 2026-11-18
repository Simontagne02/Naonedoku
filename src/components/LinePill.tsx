import React from 'react';
import { LINES_META } from '../data/nantesTransit';
import { LineId } from '../types/game';

interface LinePillProps {
  lineId: LineId;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const LinePill: React.FC<LinePillProps> = ({
  lineId,
  size = 'md',
  showLabel = false,
}) => {
  const meta = LINES_META[lineId] || {
    id: lineId,
    name: lineId,
    type: 'tram',
    color: '#475569',
    textColor: '#ffffff',
    borderColor: '#334155',
    badge: lineId,
  };

  const sizeClasses = {
    sm: 'text-[10px] min-w-[18px] h-[18px] px-1 font-bold',
    md: 'text-xs min-w-[24px] h-[24px] px-1.5 font-bold',
    lg: 'text-sm min-w-[30px] h-[30px] px-2 font-extrabold',
  }[size];

  const roundedClass = meta.type === 'tram' ? 'rounded-md' : meta.type === 'busway' ? 'rounded-full' : 'rounded-md';

  return (
    <span
      className={`inline-flex items-center justify-center gap-1 shadow-sm transition-transform select-none ${sizeClasses} ${roundedClass}`}
      style={{
        backgroundColor: meta.color,
        color: meta.textColor,
        border: `1px solid ${meta.borderColor}`,
      }}
      title={meta.name}
    >
      <span>{meta.badge}</span>
      {showLabel && <span className="text-[11px] font-normal">{meta.name}</span>}
    </span>
  );
};
