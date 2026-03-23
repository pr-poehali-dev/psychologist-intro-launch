import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import AnketaSection from "@/components/sections/AnketaSection";

export default function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--cream)" }}>
      <HeroSection />
      <AboutSection />
      <AnketaSection />
    </div>
  );
}
