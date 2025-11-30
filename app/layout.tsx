import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Cinzel } from "next/font/google"
import "./globals.css"
import FloatingDock from "@/components/floating-dock"
import SmoothScroll from "@/components/smooth-scroll"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
})

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Aperture Alchemist",
  description: "Created by team AA",
  generator: "AA",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${cinzel.variable} font-sans antialiased`}>
        <SmoothScroll />
        <FloatingDock />
        {children}
      </body>
    </html>
  )
}
