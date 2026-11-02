import Link from 'next/link';
import type { ReactNode } from 'react';
import { PAGES, SITE_NAME, SITE_URL } from '../lib/site';

export function PageShell({ path, children }: { path: string; children: ReactNode }) {
  const current = PAGES.find((p) => p.path === path);
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: current?.label ?? 'Page', href: path },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.href === '/' ? '' : c.href}`,
    })),
  };

  return (
    <div className="w-full min-h-screen bg-black text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <header className="relative z-20 w-full px-6 sm:px-12 lg:px-20 pt-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            aria-label={`${SITE_NAME} home`}
            className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#EAD8C7] hover:opacity-75 transition-opacity"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            SM.
          </Link>
          <nav aria-label="Site pages">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] tracking-[0.28em] font-light uppercase text-[#C4B5A5]">
              {PAGES.map((page) => (
                <li key={page.path}>
                  <Link
                    href={page.path}
                    aria-current={page.path === path ? 'page' : undefined}
                    className={page.path === path ? 'text-[#D4AF37]' : 'hover:text-[#FFF5EB] transition-colors'}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto mt-6">
          <ol
            className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F]"
          >
            {crumbs.map((c, i) => (
              <li key={c.href} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {i === crumbs.length - 1 ? (
                  <span aria-current="page" className="text-[#D4AF37]">{c.name}</span>
                ) : (
                  <Link href={c.href} className="hover:text-[#D4AF37] transition-colors">{c.name}</Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
