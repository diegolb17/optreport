import { Navigation } from "@/components/layout/Navigation";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { ExecutiveSummary } from "@/components/sections/ExecutiveSummary";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { Roadmap } from "@/components/sections/Roadmap";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="noise min-h-screen">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <ExecutiveSummary />
      <TeamGrid />
      <SolutionsGrid />
      <Roadmap />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
