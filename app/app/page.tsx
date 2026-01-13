import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WalletConnect } from "@/components/wallet-connect"
import { UtilityGrid } from "@/components/utility-grid"
import { AppStatusBar } from "@/components/app-status-bar"

export default function AppPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Header />

        {/* App Header */}
        <div className="mt-8 border-b border-border pb-4">
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            // protocol.terminal
          </span>
          <h1 className="text-3xl sm:text-4xl font-light text-foreground mt-3">
            Protocol <span className="text-primary">Dashboard</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-2xl">
            Connect your wallet to access protocol utilities and on-chain interactions. All systems operational.
          </p>
        </div>

        {/* Status Bar */}
        <AppStatusBar />

        {/* Wallet Connection Panel */}
        <WalletConnect />

        {/* Utility Modules Grid */}
        <UtilityGrid />

        <Footer />
      </div>
    </main>
  )
}
