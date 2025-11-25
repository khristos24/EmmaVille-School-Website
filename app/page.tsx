import { Navigation } from "@/components/Navigation";
import { HeroCarousel } from "@/components/HeroCarousel";
import { AboutSection } from "@/components/AboutSection";
import { MissionVisionValues } from "@/components/MissionVisionValues";
import { ProgramsSection } from "@/components/ProgramsSection";
import { CommunitySection } from "@/components/CommunitySection";
import { AdmissionsSection } from "@/components/AdmissionsSection";
import { InoculationInfo } from "@/components/InoculationInfo";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroCarousel />
        <AboutSection />
        <MissionVisionValues />
        <ProgramsSection />
        <CommunitySection />
        <AdmissionsSection />
        <InoculationInfo />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
