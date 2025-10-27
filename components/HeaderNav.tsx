'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HeaderNav({ target = '/', label = 'Invoices', enabled = true }: { target?: string; label?: string; enabled?: boolean; }) {
  const router = useRouter();
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    if (!enabled) return;
    router.push(target);
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => enabled && setHover(true)}
      onMouseLeave={() => enabled && setHover(false)}
      aria-disabled={!enabled}
      style={{
        display: 'inline-block',
        background: hover && enabled ? 'rgba(255,245,157,0.8)' : 'transparent', // hafif sarı hover
        borderBottom: hover && enabled ? '3px solid #f59e0b' : '3px solid transparent',
        padding: '4px 8px',
        borderRadius: 6,
        cursor: enabled ? 'pointer' : 'not-allowed',
        transition: 'background .12s, border-bottom .12s',
        fontSize: 22,
        color: '#0f172a',
      }}
      title={enabled ? label : 'Disabled'}
    >
      {label}
    </button>
  );
}
