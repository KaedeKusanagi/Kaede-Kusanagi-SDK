import { Header } from "@/components/header"
import { HeroPanel } from "@/components/hero-panel"
import { StatusPanel } from "@/components/status-panel"
import { PrologueSection } from "@/components/prologue-section"
import { OriginsSection } from "@/components/origins-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { MissionsSection } from "@/components/missions-section"
import { ModulesGrid } from "@/components/modules-grid"
import { XaiVisionSection } from "@/components/xai-vision-section"
import { TerminalBlock } from "@/components/terminal-block"
import { TimelineSection } from "@/components/timeline-section"
import { ManifestoSection } from "@/components/manifesto-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Header />

        {/* Section 1: Hero Identity */}
        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <HeroPanel />
          </div>
          <div className="lg:col-span-5">
            <StatusPanel />
          </div>
        </div>

        {/* Section 2: Prologue */}
        <PrologueSection />

        {/* Section 3: Origins */}
        <OriginsSection />

        {/* Section 4: Philosophy */}
        <PhilosophySection />

        {/* Section 5: Core Missions */}
        <MissionsSection />

        {/* Section 6: Protocol Modules */}
        <ModulesGrid />

        {/* Section 7: xAI Vision */}
        <XaiVisionSection />

        {/* Section 8: Timeline Chronicle */}
        <TimelineSection />

        {/* Section 9: Manifesto */}
        <ManifestoSection />

        {/* Console Output */}
        <TerminalBlock />

        <Footer />
      </div>
    </main>
  )
}
