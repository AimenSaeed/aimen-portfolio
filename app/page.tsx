import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { fetchAllProjects } from '@/lib/github';

export default async function Home() {
  const { projects, isLive } = await fetchAllProjects();

  return (
    <main className="relative flex-1">
      <Navbar />
      <Hero />
      <ProjectsSection initialProjects={projects} isLiveDefault={isLive} />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
