export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sangharsmohanty.vercel.app').replace(/\/$/, '');

export const SITE_NAME = 'Sanghars Mohanty';

export const SITE_DESCRIPTION =
  'Freelance digital and AI solutions consultant in Bhubaneswar, India. Cinematic 3D portfolio websites, AI-assisted workflows and brand builds, backed by fintech project delivery experience.';

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/sanghars-mohanty-371996149',
  instagram: 'https://www.instagram.com/mr.mohanty1902',
};

export type SitePage = {
  path: string;
  label: string;
  title: string;
  description: string;
};

export const PAGES: SitePage[] = [
  {
    path: '/about',
    label: 'About',
    title: 'About Sanghars Mohanty',
    description:
      'Meet Sanghars Mohanty, a Bhubaneswar based project manager and freelance digital consultant who turns complex requirements into shipped products.',
  },
  {
    path: '/projects',
    label: 'Projects',
    title: 'Selected Projects and Case Studies',
    description:
      'Selected work: NSDL agency banking delivery, a prepaid card product, an AI spec to Gherkin multi-agent system and cinematic portfolio sites for clients.',
  },
  {
    path: '/skills',
    label: 'Skills',
    title: 'Skills and Tech Matrix',
    description:
      'Project delivery, Agile, fintech and banking domain knowledge, PMO reporting tools and AI-assisted spec-driven workflows.',
  },
  {
    path: '/ventures',
    label: 'Ventures',
    title: 'Freelance Consulting and Digital Shakti Academy',
    description:
      'A freelance digital and AI consulting practice plus Digital Shakti Academy, a portfolio template business across 14 profession-specific niches.',
  },
  {
    path: '/experience',
    label: 'Experience',
    title: 'Experience and Milestones',
    description:
      'Career timeline: project manager at iServeU Technologies, SME at Concentrix Daksh, production executive at CEAT Tyres and a mechatronics diploma.',
  },
  {
    path: '/contact',
    label: 'Contact',
    title: 'Contact Sanghars Mohanty',
    description:
      'Have a fintech delivery challenge or a freelance digital or AI build in mind? Contact Sanghars Mohanty by email, WhatsApp, LinkedIn or the form.',
  },
];

export function pageMetadata(path: string) {
  const page = PAGES.find((p) => p.path === path);
  if (!page) throw new Error(`Unknown page: ${path}`);
  const url = `${SITE_URL}${page.path}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      type: 'website' as const,
      url,
      title: `${page.title} | ${SITE_NAME}`,
      description: page.description,
      siteName: SITE_NAME,
      images: [{ url: '/hero-preview.png', width: 1418, height: 802, alt: 'Sanghars Mohanty cinematic portfolio preview' }],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: `${page.title} | ${SITE_NAME}`,
      description: page.description,
      images: ['/hero-preview.png'],
    },
  };
}
