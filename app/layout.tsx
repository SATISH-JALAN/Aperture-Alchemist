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
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
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
