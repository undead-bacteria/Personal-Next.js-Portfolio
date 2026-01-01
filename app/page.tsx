import { HeroSection } from "@/components/sections/hero-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { BioSection } from "@/components/sections/bio-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center text-center py-8">
      <div className="">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <BioSection />
        <ContactSection />
      </div>
    </main>
  );
}
