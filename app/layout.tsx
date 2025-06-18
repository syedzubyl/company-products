import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SRI MUTHARAMMAN ENGINEERING",
  description: "High-quality welding, cutting, and fabrication services. 14/26, MANICKAM PILLAI STREET, MANNURPET, Chennai, Tamil Nadu, 600050.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className + " bg-[hsl(241,65%,32%)] text-[hsl(211,28%,18%)] min-h-screen"} suppressHydrationWarning={true}>
        {/* Removed header with company name and address */}
        {children}
      </body>
    </html>
  )
}

