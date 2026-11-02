import type { Metadata } from 'next';
import Link from 'next/link';
import { PAGES } from '../lib/site';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen w-full bg-black text-[#E8DFD8] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="text-[11px] font-mono tracking-[0.35em] uppercase text-[#D4AF37] mb-6">Error 404</p>
        <h1
          className="text-6xl sm:text-7xl uppercase leading-[0.9] text-[#F7E7C4] mb-6"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          This page does not exist
        </h1>
        <p
          className="text-sm font-light text-[#A8988B] leading-relaxed mb-10"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          The link may be broken or the page may have moved. Head back to the portfolio or jump to a section below.
        </p>
        <Link
          href="/"
          className="inline-block px-7 py-3.5 border border-[#8C6D4F] bg-[#120F0C] hover:border-[#D4AF37] text-[#EAD8C7] text-[11px] font-medium tracking-[0.24em] uppercase transition-colors"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Back to home
        </Link>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] font-mono tracking-widest uppercase text-[#8C6D4F]">
          {PAGES.map((page) => (
            <li key={page.path}>
              <Link href={page.path} className="hover:text-[#D4AF37] transition-colors">
                {page.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
