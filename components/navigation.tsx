"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "bg-black/95 backdrop-blur-md border-b border-[#FFD700]/20" : "bg-black/50 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center gap-8 flex-1">
          {/* Restored the logo image to the navigation bar */}
          <Link href="/" className="relative h-12 w-48">
            <Image
              src="/images/logo.jpeg"
              alt="Aperture Alchemist"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors`}>
            <button
              className={`flex items-center gap-1 transition-colors ${
                scrolled ? "text-white/90 hover:text-[#FFD700]" : "text-white/90 hover:text-[#FFD700]"
              }`}
            >
              Projects
              <ChevronDown className="w-4 h-4" />
            </button>
            <Link
              href="#"
              className={`transition-colors ${
                scrolled ? "text-white/90 hover:text-[#FFD700]" : "text-white/90 hover:text-[#FFD700]"
              }`}
            >
              About
            </Link>
            <Link
              href="#"
              className={`transition-colors ${
                scrolled ? "text-white/90 hover:text-[#FFD700]" : "text-white/90 hover:text-[#FFD700]"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>

        <Button
          size="sm"
          className={`hidden md:flex bg-[#FFD700] text-black hover:bg-[#E6C200] font-medium px-4 ${
            scrolled ? "opacity-100" : "opacity-100"
          }`}
        >
          Get Started
        </Button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#FFD700]" /> : <Menu className="w-6 h-6 text-[#FFD700]" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[80px] z-40 bg-black/95 backdrop-blur-md md:hidden border-t border-[#FFD700]/20">
          <div className="flex flex-col items-center gap-6 p-8">
            <Link href="#" className="text-white text-lg font-medium hover:text-[#FFD700] transition-colors">
              Projects
            </Link>
            <Link href="#" className="text-white text-lg font-medium hover:text-[#FFD700] transition-colors">
              About
            </Link>
            <Link href="#" className="text-white text-lg font-medium hover:text-[#FFD700] transition-colors">
              Contact
            </Link>
            <Button className="bg-[#FFD700] text-black hover:bg-[#E6C200] w-full mt-4">Get Started</Button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navigation
