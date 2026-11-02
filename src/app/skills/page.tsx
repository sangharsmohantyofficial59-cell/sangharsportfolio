import type { Metadata } from 'next';
import { SkillsSection } from '../../components/SkillsSection';
import { PageShell } from '../../components/PageShell';
import { pageMetadata } from '../../lib/site';

export const metadata: Metadata = pageMetadata('/skills');

export default function SkillsPage() {
  return (
    <PageShell path="/skills">
      <SkillsSection headingLevel="h1" />
    </PageShell>
  );
}
