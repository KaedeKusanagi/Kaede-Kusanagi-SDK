import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function PhilosophyPage() {
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

          <span className="font-mono text-[10px] text-primary uppercase tracking-widest">// docs.philosophy</span>

          <h1 className="text-4xl sm:text-5xl font-light text-foreground mt-4 mb-8">
            Core
            <br />
            <span className="text-primary">Philosophy</span>
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="border-l-2 border-primary pl-6 mb-10">
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                "The code is mightier than the sword, for code executes without mercy, without prejudice, without the
                corruption that has always plagued human institutions. We write code not to replace human judgment, but
                to free humans from the tyranny of those who would judge them."
              </p>
              <span className="font-mono text-[10px] text-primary mt-2 block">— Kaede Kusanagi, Genesis Address</span>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-light text-foreground mb-4">The Philosophical Foundation</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Every protocol embodies a philosophy, whether its creators acknowledge it or not. The architecture of a
                system reflects the values of its architects—their beliefs about human nature, their assumptions about
                adversarial behavior, their hopes for what society can become. The Kaede Protocol is explicit about its
                philosophical foundations because we believe that implicit assumptions are dangerous assumptions.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Our philosophy draws from multiple traditions: the cypherpunk movement's commitment to privacy and
                individual sovereignty; the open source movement's belief in the power of collaborative development; the
                crypto-anarchist's vision of systems that transcend governmental control; and the classical liberal's
                faith in the emergent order that arises from free individuals pursuing their own interests within fair
                rules.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We synthesize these traditions into a coherent worldview: technology should serve to expand human
                freedom, protect individual privacy, resist centralized control, and enable cooperation without
                requiring trust. These are not merely nice-to-haves—they are design requirements, encoded into the
                protocol at every level.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light text-foreground mb-4">On Trust and Trustlessness</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The concept of trustlessness is often misunderstood. We do not believe that trust is bad—trust is the
                foundation of all human cooperation, the invisible infrastructure of civilization. What we reject is not
                trust itself, but the requirement to trust those who have not earned it, the forced trust in
                institutions that have repeatedly betrayed that trust, the systemic vulnerability that comes from
                concentrating trust in single points of failure.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Blockchain technology enables a new form of social organization: cooperation without required trust.
                Parties who do not know each other, who have no reputation with each other, who may even be adversarial
                to each other, can nonetheless transact with confidence because the system itself guarantees fair
                execution. This is not the elimination of trust—it is the democratization of trust, the transformation
                of trust from a scarce resource controlled by gatekeepers into an abundant resource available to all.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We have designed every aspect of the Kaede Protocol to minimize required trust. Validators are not
                trusted—they are verified. Data providers are not trusted—they are economically incentivized and
                cryptographically accountable. Even the protocol developers are not trusted—the code is open source, the
                upgrades are governed by stakeholders, and the system is designed to function even if its creators turn
                adversarial.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light text-foreground mb-4">On Decentralization and Power</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Power corrupts. This is not cynicism—it is empirical observation confirmed across millennia of human
                history. Every institution, no matter how noble its founding purpose, eventually succumbs to the
                gravitational pull of concentrated power. Banks become instruments of surveillance. Governments become
                instruments of control. Even charitable organizations become instruments of self-perpetuation.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The only defense against the corruption of power is the distribution of power. Decentralization is not
                merely a technical property—it is a moral imperative. A system controlled by a single entity, or even a
                small cabal of entities, will inevitably be captured by the interests of those entities, no matter what
                safeguards are put in place. Only genuine decentralization—the distribution of power so broadly that no
                coalition can achieve control—provides robust resistance to capture.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We measure decentralization not by the number of nodes, but by the actual distribution of power. A
                system with a thousand nodes controlled by ten entities is less decentralized than a system with a
                hundred nodes controlled by a hundred independent actors. We have designed economic mechanisms that
                encourage participation by diverse stakeholders while discouraging concentration, and governance
                mechanisms that give voice to all participants while preventing capture by whales.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light text-foreground mb-4">On Privacy and Transparency</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Privacy and transparency appear to be in tension, but this apparent contradiction dissolves upon deeper
                examination. What we seek is selective transparency: visibility where visibility serves the public
                interest, privacy where privacy protects individual rights.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The protocol itself must be transparent—every line of code visible, every state transition verifiable,
                every governance decision accountable. But the users of the protocol deserve privacy—the freedom to
                transact without surveillance, to hold assets without disclosure, to participate without identification.
                These are not contradictory goals; they are complementary aspects of a free society.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our implementation of zero-knowledge proofs enables precisely this combination: public verification of
                private data. Users can prove they meet requirements—sufficient balance, valid identity, authorized
                access—without revealing the underlying information. The system knows what it needs to know; observers
                see only what users choose to reveal. This is privacy by design, embedded in the protocol's DNA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">The Path Forward</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Philosophy without implementation is mere abstraction. What distinguishes the Kaede Protocol is that
                these principles are not aspirational statements in a whitepaper—they are constraints encoded into the
                system's architecture. Every line of code has been evaluated against these principles. Every design
                decision has been justified in terms of these values. Every feature has been scrutinized for alignment
                with this vision.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We invite you to hold us accountable to these principles. Review our code. Analyze our mechanisms.
                Challenge our decisions. This philosophy is a commitment, and commitments must be kept. Together, we
                will build systems worthy of the freedom they claim to protect.
              </p>
            </section>
          </div>
        </article>

        <Footer />
      </div>
    </main>
  )
}
