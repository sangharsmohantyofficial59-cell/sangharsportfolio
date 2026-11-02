import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL_LINKS } from '../lib/site';

const HOME_TITLE = 'Sanghars Mohanty | Freelance Digital & AI Solutions Consultant';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: HOME_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  icons: { icon: '/favicon.svg' },
  verification: { google: 'QLtL_2KFI71-3dOTLjc8sVLvkgY2K5GKLARBFrUWRhU' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'en_IN',
    images: [{ url: '/hero-preview.png', width: 1418, height: 802, alt: 'Sanghars Mohanty cinematic portfolio preview' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/hero-preview.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#business`,
      name: 'Sanghars Mohanty, Freelance Digital & AI Solutions Consultant',
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      image: `${SITE_URL}/hero-preview.png`,
      email: 'sangharsmohanty59@gmail.com',
      telephone: '+919078938019',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bhubaneswar',
        addressRegion: 'Odisha',
        addressCountry: 'IN',
      },
      areaServed: 'Worldwide',
      serviceType: ['Website development', 'AI workflow design', 'Brand and landing pages', 'Automation systems'],
      founder: { '@id': `${SITE_URL}/#person` },
      sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.instagram],
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: SITE_NAME,
      url: SITE_URL,
      jobTitle: 'Project Manager and Freelance Digital Consultant',
      worksFor: { '@type': 'Organization', name: 'iServeU Technologies Pvt. Ltd.' },
      address: { '@type': 'PostalAddress', addressLocality: 'Bhubaneswar', addressRegion: 'Odisha', addressCountry: 'IN' },
      sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.instagram],
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&family=Bebas+Neue&family=Cinzel:wght@600;700;800;900&family=Great+Vibes&family=Herr+Von+Muellerhoff&family=Montserrat:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
