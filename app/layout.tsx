import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "../components/footer";
import Header from "../components/header";

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
      <body className={inter.className + " bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-gray-800 min-h-screen"} suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

