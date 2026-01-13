import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function OverviewPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Header />

        <article className="mt-12 max-w-4xl">
          <div className="mb-4">
            <Link
              href="/docs"
              className="font-mono text-[10px] text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
            >
              ← back to docs
            </Link>
          </div>

          <span className="font-mono text-[10px] text-primary uppercase tracking-widest">// docs.overview</span>

          <h1 className="text-4xl sm:text-5xl font-light text-foreground mt-4 mb-8">
            Protocol
            <br />
            <span className="text-primary">Overview</span>
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="border-l-2 border-primary pl-6 mb-10">
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                "In the beginning was the Block, and the Block was with Consensus, and the Block was Consensus. Through
                it all things were validated; without it nothing was validated that has been validated."
              </p>
              <span className="font-mono text-[10px] text-primary mt-2 block">— The Protocol Genesis, Chapter 1</span>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-light text-foreground mb-4">Introduction to the Protocol</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The Kaede Kusanagi Protocol represents a fundamental reimagining of what decentralized infrastructure
                can achieve. Born from the recognition that existing blockchain systems, while revolutionary, remained
                constrained by architectural decisions made in an earlier era of the technology's evolution, this
                protocol was designed from first principles to address the trilemma of scalability, security, and
                decentralization.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Unlike protocols that emerged through incremental improvement of existing designs, Kaede Protocol was
                conceived as a clean-sheet implementation, incorporating lessons learned from a decade of blockchain
                development while remaining unburdened by legacy compatibility requirements. This freedom enabled
                architectural choices that would be impossible in systems constrained by backward compatibility.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The result is a system that achieves throughput previously thought impossible in decentralized systems,
                while maintaining the security guarantees and censorship resistance that make blockchain technology
                valuable in the first place. This is not incremental progress—it is a paradigm shift in what we consider
                achievable.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light text-foreground mb-4">The Vision</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The vision that animates this protocol extends far beyond technical specifications and performance
                metrics. At its core lies a belief that the architecture of our digital infrastructure shapes the
                architecture of our society. Systems designed for surveillance will create surveillance societies.
                Systems designed for censorship will create censored societies. And systems designed for freedom—truly
                designed, from the ground up, with freedom as a non-negotiable requirement—will create free societies.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                This is why every design decision in the Kaede Protocol was evaluated not merely for technical merit,
                but for its implications for human liberty. Every optimization was weighed against its potential for
                abuse. Every feature was scrutinized for centralization vectors. The result is a protocol that embodies
                the cypherpunk ethos: privacy through mathematics, freedom through architecture, sovereignty through
                code.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We envision a world where individuals have complete sovereignty over their digital lives—their assets,
                their data, their identity. A world where permission is unnecessary because the systems themselves are
                permissionless. A world where trust is unnecessary because the systems themselves are trustless. This is
                not utopia; it is engineering. And it is being built, one block at a time.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light text-foreground mb-4">Core Tenets</h2>

              <div className="space-y-6">
                <div className="border border-border p-6">
                  <h3 className="font-mono text-sm text-primary mb-2">Tenet I: Decentralization Without Compromise</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The temptation to sacrifice decentralization for performance is the siren song of blockchain
                    development. Many have succumbed, creating systems that call themselves decentralized while
                    concentrating power in the hands of a few validators, a few token holders, a few decision makers. We
                    reject this compromise utterly. The Kaede Protocol maintains genuine decentralization—measured not
                    in validator count, but in the actual distribution of power and the practical impossibility of
                    collusion.
                  </p>
                </div>

                <div className="border border-border p-6">
                  <h3 className="font-mono text-sm text-primary mb-2">Tenet II: Security Through Transparency</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Security through obscurity is no security at all. Every component of this protocol is open source,
                    not as a marketing decision, but as a security requirement. We invite adversarial analysis because
                    we know that only systems that survive continuous attack are worthy of trust. Our security model
                    assumes the worst about our adversaries and demands mathematical proof of our defenses.
                  </p>
                </div>

                <div className="border border-border p-6">
                  <h3 className="font-mono text-sm text-primary mb-2">Tenet III: Scalability as a Right</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The ability to transact should not be rationed by gas fees or constrained by throughput limitations.
                    We believe that access to financial infrastructure is a fundamental right, and we have engineered
                    accordingly. The Kaede Protocol scales to meet demand, ensuring that participation is never
                    restricted by artificial scarcity.
                  </p>
                </div>

                <div className="border border-border p-6">
                  <h3 className="font-mono text-sm text-primary mb-2">Tenet IV: Evolution Through Governance</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A protocol that cannot evolve is a protocol that will eventually fail. But evolution without
                    legitimate governance is chaos. We have implemented governance mechanisms that balance the need for
                    adaptability with the requirement for stability, enabling the protocol to improve while protecting
                    against capture by special interests.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">The Journey Ahead</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                What you will find in these documentation pages is more than technical specification—it is a map of
                possibility. Each section reveals another facet of what we have built and what we intend to build. The
                architecture section details the engineering decisions that make our performance possible. The
                philosophy section explains why we made those decisions. The module reference provides the practical
                knowledge needed to build upon our foundation.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We invite you to explore, to question, to contribute. This protocol belongs not to its creators, but to
                its community. Its future will be written not by a single architect, but by the collective intelligence
                of all who choose to participate. Welcome to the Kaede Kusanagi Protocol. Welcome to the future.
              </p>
            </section>
          </div>
        </article>

        <Footer />
      </div>
    </main>
  )
}
