import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

const docsSections = [
  { id: "overview", title: "Protocol Overview", path: "/docs/overview" },
  { id: "architecture", title: "System Architecture", path: "/docs/architecture" },
  { id: "philosophy", title: "Core Philosophy", path: "/docs/philosophy" },
  { id: "xai-integration", title: "xAI Integration", path: "/docs/xai-integration" },
  { id: "modules", title: "Module Reference", path: "/docs/modules" },
  { id: "chronicle", title: "Historical Chronicle", path: "/docs/chronicle" },
]

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Header />

        <div className="mt-12">
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            // documentation.index
          </span>

          <h1 className="text-4xl sm:text-5xl font-light text-foreground mt-4 mb-6">
            Protocol
            <br />
            <span className="text-primary">Documentation</span>
          </h1>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-12">
            Welcome to the comprehensive documentation of the Kaede Kusanagi Protocol. Within these pages lies the
            accumulated wisdom of countless development cycles, the distilled essence of our architectural decisions,
            and the guiding principles that inform every line of code we write.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {docsSections.map((section) => (
              <Link
                key={section.id}
                href={section.path}
                className="group border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50"
              >
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">docs.{section.id}</span>
                <h3 className="font-mono text-lg text-foreground mt-2 group-hover:text-primary transition-colors">
                  {section.title}
                </h3>
                <div className="mt-4">
                  <span className="font-mono text-[10px] text-muted-foreground group-hover:text-primary transition-colors">
                    → read documentation
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
