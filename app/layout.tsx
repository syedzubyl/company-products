import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import ProductFilter from "./product-filter"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Precision Machine Parts Manufacturing",
  description: "High-quality cutting, trimming, welding and joining services for automotive parts",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <ProductFilter />
      </body>
    </html>
  )
}

