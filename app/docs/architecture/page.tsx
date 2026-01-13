import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ArchitecturePage() {
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

          <span className="font-mono text-[10px] text-primary uppercase tracking-widest">// docs.architecture</span>

          <h1 className="text-4xl sm:text-5xl font-light text-foreground mt-4 mb-8">
            System
            <br />
            <span className="text-primary">Architecture</span>
          </h1>

          <div className="prose prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-light text-foreground mb-4">Architectural Philosophy</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The architecture of the Kaede Protocol is not merely a technical implementation—it is a physical
                manifestation of our philosophical principles. Every layer, every component, every interaction pattern
                was designed with intentionality, reflecting the belief that system architecture shapes social
                architecture.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                We drew inspiration from the great engineering traditions: the elegant simplicity of Unix philosophy,
                the resilient redundancy of biological systems, the emergent complexity of natural ecosystems. The
                result is an architecture that is simultaneously simple in its individual components and sophisticated
                in their composition.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Like the neural networks that inspired our AI integration, the protocol exhibits properties that emerge
                from the interaction of simple rules operating at scale. Individual validators follow straightforward
                protocols; collective behavior produces global consensus. Simple cryptographic primitives combine to
                create sophisticated security guarantees. Basic economic incentives align to produce system-wide
                optimization.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light text-foreground mb-4">The Consensus Layer</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                At the foundation of everything lies the consensus layer—the mechanism by which thousands of independent
                actors achieve agreement on the state of the world. Our consensus mechanism, which we call Proof of
                Historical Convergence, represents a novel synthesis of existing approaches with original innovations.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Traditional consensus mechanisms face a fundamental tradeoff: they can be fast, or they can be secure,
                or they can be decentralized, but achieving all three simultaneously seemed impossible. We resolved this
                trilemma through a combination of cryptographic timestamping, parallel validation, and optimistic
                execution with retroactive verification.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The key insight was recognizing that not all transactions require the same level of verification
                immediacy. By categorizing transactions based on risk profile and implementing stratified finality—where
                high-value transactions receive immediate cryptographic certainty while lower-value transactions achieve
                probabilistic finality faster—we achieve throughput previously thought impossible while maintaining
                security guarantees for the transactions that need them most.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The result is a consensus layer that processes tens of thousands of transactions per second while
                maintaining Byzantine fault tolerance against adversaries controlling up to one-third of the validator
                set. This is not theoretical—it is production-proven, battle-tested, and continuously improving.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light text-foreground mb-4">The Execution Environment</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Above the consensus layer sits the execution environment—the virtual machine that interprets and
                executes smart contract code. Our execution environment, the Kaede Virtual Machine (KVM), represents a
                fundamental rethinking of what blockchain execution can achieve.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Traditional blockchain virtual machines execute transactions sequentially, creating an inherent
                bottleneck that limits throughput regardless of how many validators participate in consensus. KVM breaks
                this constraint through parallel execution, identifying transactions that do not conflict in their state
                access patterns and executing them simultaneously across multiple cores.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The challenge of parallel execution lies in conflict detection and resolution. KVM implements
                speculative execution with optimistic concurrency control—transactions execute in parallel under the
                assumption that conflicts are rare, with automatic retry and reordering when conflicts occur. This
                approach provides near-linear scaling with hardware capabilities while maintaining deterministic
                execution guarantees.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The KVM also implements native support for zero-knowledge proof verification, enabling
                privacy-preserving computations that would be prohibitively expensive in traditional environments. This
                capability enables entirely new categories of applications—private DeFi, confidential voting, sealed-bid
                auctions—that were previously impossible on transparent blockchains.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light text-foreground mb-4">The Network Layer</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The network layer handles communication between nodes, propagating transactions, blocks, and state data
                across the global validator set. Our network protocol, Gossip-Optimized Rapid Propagation (GORP),
                achieves sub-second message delivery to all nodes while minimizing bandwidth requirements.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Traditional gossip protocols suffer from message duplication and propagation delays. GORP implements
                intelligent routing based on network topology analysis, ensuring that messages reach their destinations
                through optimal paths while avoiding redundant transmission. The protocol continuously adapts to
                changing network conditions, rerouting around congestion and failed nodes automatically.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Security at the network layer is paramount. GORP implements mandatory encryption for all peer-to-peer
                communication, authenticated message delivery to prevent spoofing, and rate limiting to mitigate
                denial-of-service attacks. The protocol is designed to function even under adversarial network
                conditions, maintaining consensus even when significant portions of the network are partitioned or under
                attack.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Integration Points</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The architecture provides multiple integration points for external systems and cross-chain
                communication. The Bridge Protocol enables trustless asset transfers between Kaede and other blockchain
                networks through light client verification and fraud proofs. The Oracle System brings external data
                on-chain through a decentralized network of data providers with cryptographic attestation.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Most significantly, the architecture includes native integration points for artificial intelligence
                systems. The AI Integration Layer enables smart contracts to query machine learning models, receive
                probabilistic outputs, and make decisions based on AI analysis—all while maintaining the determinism
                required for blockchain consensus. This capability represents the cutting edge of protocol design,
                enabling applications that blend the trustlessness of blockchain with the intelligence of AI.
              </p>
            </section>
          </div>
        </article>

        <Footer />
      </div>
    </main>
  )
}
