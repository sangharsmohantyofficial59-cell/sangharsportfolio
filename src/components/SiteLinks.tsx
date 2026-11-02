import Link from 'next/link';
import { PAGES } from '../lib/site';

export function SiteLinks() {
  return (
    <nav
      aria-label="Site pages"
      className="w-full bg-black px-6 sm:px-12 lg:px-20 pb-10 text-[#A8988B]"
    >
      <ul className="max-w-7xl mx-auto flex flex-wrap gap-x-6 gap-y-2 border-t border-[#8C6D4F]/15 pt-6 text-[10px] font-mono tracking-widest uppercase">
        {PAGES.map((page) => (
          <li key={page.path}>
            <Link href={page.path} className="hover:text-[#D4AF37] transition-colors">
              {page.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
