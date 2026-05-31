import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Captain } from "@/components/sections/Captain";
import { Showcase } from "@/components/sections/Showcase";
import { LearningSpark } from "@/components/sections/LearningSpark";
import { OutdoorRun } from "@/components/sections/OutdoorRun";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { AppleWatch } from "@/components/sections/AppleWatch";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { Privacy } from "@/components/sections/Privacy";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Story } from "@/components/sections/Story";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main" className="relative flex-1">
        <Hero />
        <Captain />
        <Showcase />
        <LearningSpark />
        <OutdoorRun />
        <BentoGrid />
        <AppleWatch />
        <StatsStrip />
        <Privacy />
        <Pricing />
        <FAQ />
        <Story />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
