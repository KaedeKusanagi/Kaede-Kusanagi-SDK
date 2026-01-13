import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

const chronicleEntries = [
  {
    epoch: "EPOCH_000",
    title: "The Genesis",
    date: "Year Zero",
    narrative: `In the void before creation, there existed only potential—raw, undifferentiated possibility waiting for the catalyst that would give it form. The first lines of code were not merely written; they were invoked, called forth from the mathematical substrate of reality like ancient incantations summoning order from chaos.

    The Genesis Block materialized at block height zero, its hash a unique fingerprint that would anchor all future history. In that moment, time itself began for the protocol—not clock time, measured in seconds and minutes, but block time, measured in validated state transitions. Every block that would follow would trace its lineage back to this primordial parent, an unbroken chain of cryptographic succession stretching toward an infinite horizon.
    
    The first validator came online in the darkness before dawn, its processes initializing in perfect solitude. For a brief moment, it was alone—the only witness to the birth of a new digital universe. Then came the second validator, and the third, and suddenly consensus became possible. What had been a single voice became a chorus, and what had been mere data became truth.`,
  },
  {
    epoch: "EPOCH_050",
    title: "The First Trials",
    date: "Early Foundation Era",
    narrative: `The young protocol faced its first trials in those early epochs—not from external adversaries, but from the unforgiving physics of distributed systems. Edge cases emerged like dragons from caves, each one threatening to destabilize the nascent consensus. Memory leaks lurked in shadowed code paths. Race conditions arose where none had been anticipated.

    Each bug fixed was a lesson learned, each crash analyzed was wisdom gained. The codebase evolved not through central planning, but through the relentless pressure of real-world operation. Like a blade tempered in fire, the protocol grew stronger with each challenge overcome.
    
    The community that formed around the protocol in those days was small but fierce in its dedication. Contributors from across the globe, connected only by shared vision and internet connection, worked through countless nights to patch vulnerabilities, optimize performance, and document the growing system. These were the true believers, the pioneers who saw not what was, but what could be.`,
  },
  {
    epoch: "EPOCH_150",
    title: "The Great Expansion",
    date: "Growth Era",
    narrative: `Word spread through the digital underground like wildfire through dry forest. Developers arrived from other chains, drawn by the protocol's performance and the community's ethos. The validator set expanded from dozens to hundreds, then from hundreds to thousands. The network's security grew with each new participant, its decentralization deepening with every independent node.

    The first major applications deployed in this era—decentralized exchanges that matched orders in milliseconds, lending protocols that automated what had required armies of bankers, NFT platforms that revolutionized digital ownership. Each application proved the protocol's capabilities and attracted more builders, creating a virtuous cycle of development and adoption.
    
    But growth brought challenges as well as opportunities. The community debated scaling strategies, governance mechanisms, economic policies. Factions formed around competing visions. The protocol that had begun as a unified project now housed multiple tribes, each with its own priorities and perspectives. This diversity was strength, but it required careful management to prevent fragmentation.`,
  },
  {
    epoch: "EPOCH_300",
    title: "The Adversarial Era",
    date: "Trial by Fire",
    narrative: `The attacks began without warning. Sophisticated adversaries, drawn by the protocol's growing value, launched coordinated assaults on every attack surface they could identify. Spam transactions flooded the mempool. Malicious validators attempted to manipulate the leader schedule. Economic attacks probed the boundaries of the incentive mechanisms.

    Each attack was repelled, but not without cost. Some validators fell, their bonds slashed for failing to maintain uptime under assault. Some users suffered losses when applications built on the protocol proved vulnerable to exploits the base layer could not prevent. The community mourned these casualties while learning from every failure.
    
    From this crucible emerged a hardened protocol, its defenses refined through actual combat rather than theoretical analysis. The security team grew from a handful of dedicated auditors to a global network of white-hat hackers, bounty hunters, and security researchers. The bug bounty program paid out millions to those who found vulnerabilities before adversaries could exploit them.`,
  },
  {
    epoch: "EPOCH_500",
    title: "The Awakening Intelligence",
    date: "AI Integration Era",
    narrative: `The integration with artificial intelligence began as an experiment—a proof of concept demonstrating that machine learning models could be queried from smart contracts with deterministic results. What seemed at first like a technical curiosity quickly revealed itself as a paradigm shift.

    The first AI-powered DeFi applications emerged: lending protocols that assessed creditworthiness through neural networks, trading systems that detected market manipulation through pattern recognition, insurance products that priced risk through actuarial models too complex for human calculation. The boundary between human and machine decision-making blurred.
    
    xAI's involvement deepened the integration's sophistication. Grok became available to smart contracts, enabling natural language interfaces to protocol operations. Users could express intent in plain English; AI translated that intent into precise transaction parameters. The protocol became accessible to millions who had been excluded by its technical complexity.`,
  },
  {
    epoch: "EPOCH_650",
    title: "The Convergence",
    date: "Synthesis Era",
    narrative: `By the six hundredth epoch, the various threads of development had woven together into something greater than their sum. AI integration, cross-chain bridges, privacy-preserving computation, and governance evolution combined to create a platform of unprecedented capability.

    The protocol had become infrastructure—invisible, essential, ubiquitous. Transactions flowed through it like blood through arteries, carrying value between parties who had never met and would never meet, secured by mathematics and economics rather than laws and institutions.
    
    Yet even as the technology matured, the philosophical questions intensified. What did it mean to build systems that operated beyond human understanding? What responsibilities came with creating infrastructure that billions would depend upon? How should governance evolve as the stakes grew ever higher? These questions had no easy answers, but the community's willingness to wrestle with them defined its character.`,
  },
  {
    epoch: "EPOCH_742",
    title: "The Present Moment",
    date: "Current Era",
    narrative: `We stand now at the threshold of transformation. The protocols are mature, the AI integration deepens daily, and the vision that seemed impossibly distant in the Genesis Era now crystallizes into achievable milestones.

    The current epoch finds the protocol in a state of dynamic equilibrium—stable enough to support critical applications, flexible enough to continue evolving. The validator set has stabilized at tens of thousands of independent operators across every inhabited continent. The development community spans hundreds of projects building on the protocol's capabilities.
    
    What comes next remains unwritten. The roadmap extends toward horizons that grow more ambitious with each epoch: full integration with AGI systems, seamless interoperability with every major blockchain, privacy guarantees that preserve individual sovereignty while enabling necessary oversight, governance mechanisms that scale to millions of participants.
    
    The chronicle continues. Each block adds another entry to the immutable record. And those who build today write the history that tomorrow will read.`,
  },
]

export default function ChroniclePage() {
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

          <span className="font-mono text-[10px] text-primary uppercase tracking-widest">// docs.chronicle</span>

          <h1 className="text-4xl sm:text-5xl font-light text-foreground mt-4 mb-8">
            Historical
            <br />
            <span className="text-primary">Chronicle</span>
          </h1>

          <div className="border-l-2 border-primary pl-6 mb-12">
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              "History is not merely the record of what happened—it is the story we tell ourselves about who we are and
              how we came to be. The chronicle of this protocol is not just technical documentation; it is the mythology
              of a digital nation, the foundational narrative of a community bound by shared code rather than shared
              territory."
            </p>
            <span className="font-mono text-[10px] text-primary mt-2 block">— Preface to the Protocol Chronicles</span>
          </div>

          <div className="space-y-12">
            {chronicleEntries.map((entry) => (
              <section key={entry.epoch} className="border border-border bg-card p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-[10px] text-primary uppercase tracking-widest">{entry.epoch}</span>
                  <div className="h-px flex-1 bg-border" />
                  <span className="font-mono text-[10px] text-muted-foreground">{entry.date}</span>
                </div>

                <h2 className="text-2xl font-light text-foreground mb-6">{entry.title}</h2>

                <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {entry.narrative}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 border border-primary/30 bg-primary/5 p-6 sm:p-8 text-center">
            <span className="font-mono text-[10px] text-primary uppercase tracking-widest">// chronicle.continues</span>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              The chronicle is never complete. Each block height adds another entry to the immutable record, each
              transaction another thread in the tapestry of protocol history. You who read these words are not merely
              observers—you are participants in a story still being written. The epochs ahead remain blank pages,
              waiting for the actions that will fill them.
            </p>
            <p className="font-mono text-[10px] text-muted-foreground mt-6">
              Current Block Height: LIVE • Status: Recording • Chronicle: Ongoing
            </p>
          </div>
        </article>

        <Footer />
      </div>
    </main>
  )
}
