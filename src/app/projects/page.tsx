import type { Metadata } from 'next';
import { ProjectsSection } from '../../components/ProjectsSection';
import { PageShell } from '../../components/PageShell';
import { pageMetadata } from '../../lib/site';

export const metadata: Metadata = pageMetadata('/projects');

export default function ProjectsPage() {
  return (
    <PageShell path="/projects">
      <ProjectsSection headingLevel="h1" />
    </PageShell>
  );
}
