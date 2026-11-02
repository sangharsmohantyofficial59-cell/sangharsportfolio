import type { Metadata } from 'next';
import { ExperienceSection } from '../../components/ExperienceSection';
import { PageShell } from '../../components/PageShell';
import { pageMetadata } from '../../lib/site';

export const metadata: Metadata = pageMetadata('/experience');

export default function ExperiencePage() {
  return (
    <PageShell path="/experience">
      <ExperienceSection headingLevel="h1" />
    </PageShell>
  );
}
