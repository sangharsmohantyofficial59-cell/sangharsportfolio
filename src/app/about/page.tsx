import type { Metadata } from 'next';
import { AboutSection } from '../../components/AboutSection';
import { PageShell } from '../../components/PageShell';
import { pageMetadata } from '../../lib/site';

export const metadata: Metadata = pageMetadata('/about');

export default function AboutPage() {
  return (
    <PageShell path="/about">
      <AboutSection headingLevel="h1" />
    </PageShell>
  );
}
