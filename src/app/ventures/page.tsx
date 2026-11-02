import type { Metadata } from 'next';
import { VenturesSection } from '../../components/VenturesSection';
import { PageShell } from '../../components/PageShell';
import { pageMetadata } from '../../lib/site';

export const metadata: Metadata = pageMetadata('/ventures');

export default function VenturesPage() {
  return (
    <PageShell path="/ventures">
      <VenturesSection headingLevel="h1" />
    </PageShell>
  );
}
