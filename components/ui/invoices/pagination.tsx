'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const current = Number(searchParams.get('page')) || 1;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const createPageURL = (p: number) => {
    const params = new URLSearchParams(searchParams as any);
    params.set('page', p.toString());
    return `${pathname}?${params.toString()}`;
  };

  if (totalPages <= 1) return null;
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      {pages.map((p) => (
        <Link key={p} href={createPageURL(p)} style={{ fontWeight: p === current ? 'bold' : 'normal' }}>
          {p}
        </Link>
      ))}
    </div>
  );
}