import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Box, Code2, Database, Lock, Layers, Zap, Cpu, Network, Binary } from "lucide-react"

const modules = [
  {
    id: "core",
    icon: Box,
    label: "Core Protocol",
    version: "v2.4.1",
    status: "stable",
    description:
      "The foundational layer of the Kaede Protocol, implementing Byzantine fault-tolerant consensus through Proof of Historical Convergence. This module handles block production, validator coordination, and finality determination.",
    features: [
      "Sub-second block times with cryptographic finality",
      "Parallel leader schedule for high availability",
      "Optimistic confirmation for low-latency applications",
      "Turbine block propagation for efficient data distribution",
    ],
  },
  {
    id: "sdk",
    icon: Code2,
    label: "Developer SDK",
    version: "v1.8.0",
    status: "beta",
    description:
      "Comprehensive development toolkit enabling rapid protocol integration. Provides type-safe bindings for all protocol operations, from simple transfers to complex multi-instruction transactions.",
    features: [
      "TypeScript and Rust client libraries",
      "CLI tools for deployment and testing",
      "IDE integrations with real-time validation",
      "Extensive documentation and example code",
    ],
  },
  {
    id: "storage",
    icon: Database,
    label: "State Layer",
    version: "v3.1.2",
    status: "stable",
    description:
      "Distributed state management utilizing advanced merkle structures for efficient state proof generation and verification. Enables light client operation without full state synchronization.",
    features: [
      "Merkle-Patricia trie for efficient state proofs",
      "State compression reducing storage requirements by 90%",
      "Snapshot-based state sync for new validators",
      "Rent-based storage economics preventing state bloat",
    ],
  },
  {
    id: "security",
    icon: Lock,
    label: "Security Module",
    version: "v4.0.0",
    status: "audited",
    description:
      "Multi-layered cryptographic security implementing the highest standards of protection for digital assets. Audited by leading security firms with formal verification of critical paths.",
    features: [
      "Ed25519 signatures with hardware wallet support",
      "Blake3 hashing for performance and security",
      "Zero-knowledge proof verification native support",
      "Multi-signature and threshold signature schemes",
    ],
  },
  {
    id: "execution",
    icon: Layers,
    label: "Execution Engine",
    version: "v2.2.0",
    status: "stable",
    description:
      "High-performance virtual machine implementing parallel transaction execution for maximum throughput. The Kaede VM achieves linear scaling with available compute resources.",
    features: [
      "Parallel execution with automatic conflict resolution",
      "Speculative execution for optimistic throughput",
      "Native support for compute-intensive operations",
      "Gas metering with predictable costs",
    ],
  },
  {
    id: "network",
    icon: Zap,
    label: "P2P Network",
    version: "v1.9.5",
    status: "stable",
    description:
      "Gossip-Optimized Rapid Propagation protocol for global-scale message distribution. Achieves sub-second propagation to thousands of nodes with minimal bandwidth overhead.",
    features: [
      "Adaptive routing based on network topology",
      "Encrypted peer-to-peer communication",
      "Rate limiting and DoS protection",
      "Automatic partition recovery",
    ],
  },
  {
    id: "compute",
    icon: Cpu,
    label: "Verifiable Compute",
    version: "v0.5.0",
    status: "experimental",
    description:
      "Off-chain computation framework enabling complex operations with on-chain verification. Unlocks computationally intensive applications impossible within traditional constraints.",
    features: [
      "Optimistic execution with fraud proofs",
      "ZK-SNARK verification for private computation",
      "Economic security through bonding mechanisms",
      "Integration with AI inference pipelines",
    ],
  },
  {
    id: "bridge",
    icon: Network,
    label: "Bridge Protocol",
    version: "v1.2.0",
    status: "beta",
    description:
      "Cross-chain messaging and asset transfer infrastructure connecting Kaede to the broader blockchain ecosystem. Implements trustless verification through light clients and optimistic proofs.",
    features: [
      "Light client verification of external chains",
      "Optimistic bridges with fraud proof security",
      "Canonical token wrapping and unwrapping",
      "Message passing for cross-chain contract calls",
    ],
  },
  {
    id: "oracle",
    icon: Binary,
    label: "Oracle System",
    version: "v2.0.3",
    status: "stable",
    description:
      "Decentralized data feed aggregation bringing external information on-chain with cryptographic verification. Powers DeFi, prediction markets, and real-world asset tokenization.",
    features: [
      "Multi-source aggregation with outlier filtering",
      "Cryptographic attestation of data provenance",
      "Economic incentives for accurate reporting",
      "Real-time price feeds with sub-second updates",
    ],
  },
]

export default function ModulesPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Header />

        <article className="mt-12">
          <div className="mb-4">
            <Link
              href="/docs"
              className="font-mono text-[10px] text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
            >
              ← back to docs
            </Link>
          </div>

          <span className="font-mono text-[10px] text-primary uppercase tracking-widest">// docs.modules</span>

          <h1 className="text-4xl sm:text-5xl font-light text-foreground mt-4 mb-8">
            Module
            <br />
            <span className="text-primary">Reference</span>
          </h1>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-12">
            The Kaede Protocol comprises nine core modules, each representing a critical component of the system's
            functionality. These modules are designed for composability—they can be used independently or combined to
            create sophisticated decentralized applications.
          </p>

          <div className="space-y-6">
            {modules.map((module) => {
              const Icon = module.icon
              return (
                <div key={module.id} className="border border-border bg-card p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                    <div className="shrink-0">
                      <div className="h-12 w-12 border border-border flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                          module.{module.id}
                        </span>
                        <span className="font-mono text-[9px] text-muted-foreground">{module.version}</span>
                        <span
                          className={`font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 ${
                            module.status === "audited"
                              ? "text-primary bg-primary/10"
                              : module.status === "experimental"
                                ? "text-foreground bg-foreground/10"
                                : "text-muted-foreground bg-muted"
                          }`}
                        >
                          {module.status}
                        </span>
                      </div>

                      <h3 className="text-xl font-light text-foreground mb-4">{module.label}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">{module.description}</p>

                      <div className="border-t border-border pt-4">
                        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3 block">
                          Key Features
                        </span>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {module.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <span className="text-primary mt-0.5">→</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </article>

        <Footer />
      </div>
    </main>
  )
}
