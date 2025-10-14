"use client";

import Header from "../../component/common/Header";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import FeaturesSection from "./components/FeaturesSection";
import TeamSection from "./components/TeamSection";
import FooterCTA from "./components/FooterCTA";

const TasteMapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header currentPage="homepage" />
      <HeroSection />
      <MissionSection />
      <FeaturesSection />
      <TeamSection />
      <FooterCTA />
    </div>
  );
};

export default TasteMapPage;
