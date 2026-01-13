import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { WalletProviders } from "@/components/wallet-providers"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kaede Kusanagi | Protocol Interface",
  description: "Developer-first protocol interface",
  generator: "v0.app",
  icons: {
    icon: "/images/kaede-kusanagi.png",
    shortcut: "/images/kaede-kusanagi.png",
    apple: "/images/kaede-kusanagi.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#141414",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        <WalletProviders>{children}</WalletProviders>
        <Analytics />
      </body>
    </html>
  )
}
