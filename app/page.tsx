"use client";

import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectSection } from "@/components/sections/project";
import dynamic from "next/dynamic";

// Dynamically import motion-heavy components
const SkillSection = dynamic(() => import("@/components/sections/skills").then(m => m.SkillSection), { ssr: false });
const ExperienceSection = dynamic(() => import("@/components/sections/experiences").then(m => m.ExperienceSection), { ssr: false });
const ContactSection = dynamic(() => import("@/components/sections/contact").then(m => m.ContactSection), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <SkillSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
