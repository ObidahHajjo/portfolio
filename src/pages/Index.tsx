import Navbar from "@/components/Navbar";
import MatrixRain from "@/components/MatrixRain";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ConsoleSection from "@/components/ConsoleSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scanline">
      <MatrixRain />
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ConsoleSection />
      <ContactSection />
    </div>
  );
};

export default Index;
