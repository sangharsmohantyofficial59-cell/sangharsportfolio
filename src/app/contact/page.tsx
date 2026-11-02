import type { Metadata } from 'next';
import { ContactSection } from '../../components/ContactSection';
import { PageShell } from '../../components/PageShell';
import { pageMetadata } from '../../lib/site';

export const metadata: Metadata = pageMetadata('/contact');

export default function ContactPage() {
  return (
    <PageShell path="/contact">
      <ContactSection headingLevel="h1" />
    </PageShell>
  );
}
