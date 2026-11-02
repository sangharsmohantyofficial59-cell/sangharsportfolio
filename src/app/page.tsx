import type { Metadata } from 'next';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { SkillsSection } from '../components/SkillsSection';
import { VenturesSection } from '../components/VenturesSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ContactSection } from '../components/ContactSection';
import { SiteLinks } from '../components/SiteLinks';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-black text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <VenturesSection />
      <ExperienceSection />
      <ContactSection />
      <SiteLinks />
    </main>
  );
}
