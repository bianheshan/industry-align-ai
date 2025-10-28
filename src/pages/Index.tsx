import HeroSection from "@/components/HeroSection";
import AgentCards from "@/components/AgentCards";
import StatsSection from "@/components/StatsSection";
import ResourcesSection from "@/components/ResourcesSection";
import CasesSection from "@/components/CasesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-secondary">
      <HeroSection />
      <StatsSection />
      <AgentCards />
      <ResourcesSection />
      <CasesSection />
    </div>
  );
};

export default Index;
