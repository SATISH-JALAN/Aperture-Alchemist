"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation" // importing useRouter for navigation
import ShowreelSection from "@/components/showreel-section"
import PortfolioGrid from "@/components/portfolio-grid"
import ProcessSteps from "@/components/process-steps"
import ServicesGrid from "@/components/services-grid"
import AboutSection from "@/components/about-section"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import FAQAccordion from "@/components/faq-accordion"
import BrandMarquee from "@/components/brand-marquee"
import Footer from "@/components/footer" // Declared the Footer variable

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const router = useRouter() // initializing router
  const [autoScrollOffset, setAutoScrollOffset] = useState(0)
  const [animationComplete, setAnimationComplete] = useState(false)
  const autoScrollStartTime = useRef<number | null>(null)
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setMounted(true)
    const checkMobile = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      setIsMobile(width < 768)
      setWindowDimensions({ width, height })
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!containerRef.current) return

          const rect = containerRef.current.getBoundingClientRect()
          const containerHeight = containerRef.current.offsetHeight
          const viewportHeight = window.innerHeight

          const scrollableDistance = containerHeight - viewportHeight
          const scrolled = -rect.top
          const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1)

          // Allow full scroll through hero section
          setScrollProgress(progress)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!autoScrollStartTime.current) {
      autoScrollStartTime.current = Date.now()
    }

    let animationFrameId: number
    let lastTime = Date.now()

    const animate = () => {
      const now = Date.now()
      const delta = now - lastTime
      lastTime = now

      // Only animate when scroll is at the end (loop phase)
      if (scrollProgress >= 0.95) {
        setAutoScrollOffset((prev) => prev - (0.3 * delta / 16))
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [scrollProgress])

  const cards = [
    {
      image: "/images/1.png",
      initial: { x: 0, y: 0, opacity: 0, scale: 0.75 },
      descending: { x: 0, y: 250, opacity: 1, scale: 0.95 },
      exploded: { x: -3200, y: -280, opacity: 1, scale: 0.85, rotation: 0 },
      row: { x: -3200, y: 380, opacity: 1, scale: 1.05, rotation: 0 },
    },
    {
      image: "/images/2.png",
      initial: { x: 0, y: 0, opacity: 0, scale: 0.8 },
      descending: { x: 0, y: 250, opacity: 1, scale: 0.9 },
      exploded: { x: -2800, y: -200, opacity: 1, scale: 0.9, rotation: 0 },
      row: { x: -2800, y: 380, opacity: 1, scale: 1.0, rotation: 0 },
    },
    {
      image: "/images/3.png",
      initial: { x: 0, y: 0, opacity: 0, scale: 0.85 },
      descending: { x: 0, y: 250, opacity: 1, scale: 0.88 },
      exploded: { x: -2400, y: -150, opacity: 1, scale: 0.95, rotation: 0 },
      row: { x: -2400, y: 380, opacity: 1, scale: 1.05, rotation: 0 },
    },
    {
      image: "/images/4.png",
      initial: { x: 0, y: 0, opacity: 0, scale: 0.8 },
      descending: { x: 0, y: 250, opacity: 1, scale: 0.85 },
      exploded: { x: -2000, y: -100, opacity: 1, scale: 1.1, rotation: 0 },
      row: { x: -2000, y: 380, opacity: 1, scale: 1.05, rotation: 0 },
    },
    {
      image: "/images/5.png",
      initial: { x: 0, y: 0, opacity: 0, scale: 0.78 },
      descending: { x: 0, y: 250, opacity: 1, scale: 0.82 },
      exploded: { x: -1600, y: -120, opacity: 1, scale: 0.92, rotation: 0 },
      row: { x: -1600, y: 380, opacity: 1, scale: 1.02, rotation: 0 },
    },
    {
      image: "/images/6.png",
      initial: { x: 0, y: 0, opacity: 0, scale: 0.82 },
      descending: { x: 0, y: 250, opacity: 1, scale: 0.8 },
      exploded: { x: -1200, y: -180, opacity: 1, scale: 0.9, rotation: 0 },
      row: { x: -1200, y: 380, opacity: 1, scale: 1.0, rotation: 0 },
    },
    {
      image: "/images/7.png",
      initial: { x: 0, y: 0, opacity: 0, scale: 0.8 },
      descending: { x: 0, y: 250, opacity: 1, scale: 0.78 },
      exploded: { x: -800, y: -240, opacity: 1, scale: 0.88, rotation: 0 },
      row: { x: -800, y: 380, opacity: 1, scale: 0.98, rotation: 0 },
    },
    {
      image: "/images/9.png",
      initial: { x: 0, y: 0, opacity: 0, scale: 0.8 },
      descending: { x: 0, y: 250, opacity: 1, scale: 0.72 },
      exploded: { x: -400, y: 50, opacity: 1, scale: 0.83, rotation: 0 },
      row: { x: -400, y: 380, opacity: 1, scale: 0.93, rotation: 0 },
    },
    {
      image: "/images/10.png",
      initial: { x: 0, y: 0, opacity: 0, scale: 0.7 },
      descending: { x: 0, y: 250, opacity: 1, scale: 0.68 },
      exploded: { x: 0, y: -100, opacity: 1, scale: 0.82, rotation: 0 },
      row: { x: 0, y: 380, opacity: 1, scale: 0.92, rotation: 0 },
    },
    {
      image: "/images/11.png",
      initial: { x: 0, y: 0, opacity: 0, scale: 0.8 },
      descending: { x: 0, y: 250, opacity: 1, scale: 0.65 },
      exploded: { x: 400, y: -60, opacity: 1, scale: 0.8, rotation: 0 },
      row: { x: 400, y: 380, opacity: 1, scale: 0.9, rotation: 0 },
    },
    {
      image: "/images/12.png",
      initial: { x: 0, y: 0, opacity: 0, scale: 0.72 },
      descending: { x: 0, y: 250, opacity: 1, scale: 0.5 },
      exploded: { x: 800, y: 200, opacity: 1, scale: 0.78, rotation: 0 },
      row: { x: 800, y: 380, opacity: 1, scale: 0.88, rotation: 0 },
    },
    {
      image: "/images/13.png",
      initial: { x: 0, y: 0, opacity: 0, scale: 0.74 },
      descending: { x: 0, y: 250, opacity: 1, scale: 0.6 },
      exploded: { x: 1200, y: 150, opacity: 1, scale: 0.88, rotation: 0 },
      row: { x: 1200, y: 380, opacity: 1, scale: 0.98, rotation: 0 },
    },
    {
      image: "/images/16.png",
      initial: { x: 0, y: 0, opacity: 0, scale: 0.8 },
      descending: { x: 0, y: 250, opacity: 1, scale: 0.58 },
      exploded: { x: 1600, y: -120, opacity: 1, scale: 0.82, rotation: 0 },
      row: { x: 1600, y: 380, opacity: 1, scale: 0.92, rotation: 0 },
    },
    {
      image: "/images/17.png",
      initial: { x: 0, y: 0, opacity: 0, scale: 0.8 },
      descending: { x: 0, y: 250, opacity: 1, scale: 0.52 },
      exploded: { x: 2000, y: 180, opacity: 1, scale: 0.8, rotation: 0 },
      row: { x: 2000, y: 380, opacity: 1, scale: 0.9, rotation: 0 },
    },
    {
      image: "/images/18.png",
      initial: { x: 0, y: 0, opacity: 0, scale: 0.72 },
      descending: { x: 0, y: 250, opacity: 1, scale: 0.5 },
      exploded: { x: 2400, y: 100, opacity: 1, scale: 0.86, rotation: 0 },
      row: { x: 2400, y: 380, opacity: 1, scale: 0.96, rotation: 0 },
    },
    {
      image: "/images/19.png",
      initial: { x: 0, y: 0, opacity: 0, scale: 0.8 },
      descending: { x: 0, y: 250, opacity: 1, scale: 0.48 },
      exploded: { x: 2800, y: 140, opacity: 1, scale: 0.84, rotation: 0 },
      row: { x: 2800, y: 380, opacity: 1, scale: 0.94, rotation: 0 },
    },
    {
      image: "/images/20.png",
      initial: { x: 0, y: 0, opacity: 0, scale: 0.68 },
      descending: { x: 0, y: 250, opacity: 1, scale: 0.46 },
      exploded: { x: 3200, y: 200, opacity: 1, scale: 0.82, rotation: 0 },
      row: { x: 3200, y: 380, opacity: 1, scale: 0.92, rotation: 0 },
    },
  ]

  const displayCards = cards.slice(5, 12)

  // This ensures cards scale down and shift position to avoid overlapping the "Explore Work" button
  const getResponsiveRowConfig = (originalY: number, originalScale: number) => {
    if (isMobile || windowDimensions.height === 0) {
      return { y: isMobile ? 250 : originalY, scale: originalScale }
    }

    const safeTop = 150 // Clearance for center content (button + text)
    const safeBottom = windowDimensions.height / 2 - 20 // Bottom padding
    const availableHeight = safeBottom - safeTop
    const cardBaseHeight = 300 // Updated cardBaseHeight to 300 (increased from 256) for larger desktop cards

    // If screen is very short, force a minimum scale and position
    if (availableHeight < 80) {
      return { y: safeBottom - 40, scale: 0.4 }
    }

    const targetHeight = cardBaseHeight * originalScale

    if (targetHeight > availableHeight) {
      const newScale = availableHeight / cardBaseHeight
      const newY = safeTop + availableHeight / 2
      return { y: newY, scale: newScale }
    } else {
      const halfHeight = targetHeight / 2
      let newY = originalY
      // Clamp top to avoid overlapping button
      if (newY - halfHeight < safeTop) newY = safeTop + halfHeight
      // Clamp bottom to keep on screen
      if (newY + halfHeight > safeBottom) newY = safeBottom - halfHeight

      return { y: newY, scale: originalScale }
    }
  }

  const getCardStyle = (card: (typeof cards)[0], index: number) => {
    let x = card.initial.x
    let y = card.initial.y
    let opacity = 0
    let scale = card.initial.scale

    const mobileSpacing = 155 // Increased spacing for larger cards
    const mobileRowX = isMobile ? (index - 8) * mobileSpacing : card.row.x

    const { y: responsiveRowY, scale: responsiveRowScale } = getResponsiveRowConfig(card.row.y, card.row.scale)

    const randomSeedX = Math.sin(index * 456.789)
    const randomSeedY = Math.cos(index * 123.456)

    const explodedX =
      (index - 8) * (isMobile ? 30 : 150) + randomSeedX * (windowDimensions.width * (isMobile ? 0.15 : 0.2))
    const explodedY = randomSeedY * (windowDimensions.height * (isMobile ? 0.15 : 0.2))

    const isLateCard = index >= 8

    // Faster animation thresholds for mobile
    const fadeInEnd = isMobile ? 0.25 : 0.35
    const descendEnd = isMobile ? 0.45 : 0.55
    const loopStart = isMobile ? 0.85 : 0.95

    if (scrollProgress > 0 && scrollProgress <= fadeInEnd) {
      const progress = Math.min(scrollProgress / fadeInEnd, 1)
      const delay = index * 0.05
      const adjustedProgress = Math.max(0, Math.min((progress - delay) * 2, 1))

      opacity = isLateCard ? 0 : adjustedProgress
    }

    if (scrollProgress > fadeInEnd && scrollProgress <= descendEnd) {
      const progress = Math.min((scrollProgress - fadeInEnd) / (descendEnd - fadeInEnd), 1)
      const eased = progress * progress * (3 - 2 * progress)

      x = 0
      y = card.descending.y * eased
      scale = card.initial.scale + (card.descending.scale - card.initial.scale) * eased
      opacity = isLateCard ? Math.min(eased * 2, 1) : 1
    }

    if (scrollProgress > descendEnd) {
      const progress = Math.min((scrollProgress - descendEnd) / (loopStart - descendEnd), 1)
      const eased = progress * progress * (3 - 2 * progress)

      const startX = explodedX
      const startY = explodedY
      const endX = mobileRowX
      const endY = responsiveRowY

      const startScale = isMobile ? card.exploded.scale * 0.85 : card.exploded.scale
      const endScale = isMobile ? 0.75 : responsiveRowScale

      x = startX + (endX - startX) * eased
      y = startY + (endY - startY) * eased
      scale = startScale + (endScale - startScale) * eased
      opacity = card.row.opacity
    }

    if (scrollProgress >= loopStart) {
      const loopWidth = isMobile ? displayCards.length * mobileSpacing : 2800
      const minX = isMobile ? -(displayCards.length * mobileSpacing) / 2 : -1400

      const rawPos = (isMobile ? mobileRowX : card.row.x) + autoScrollOffset

      const relativePos = rawPos - minX
      const wrappedRelativePos = ((relativePos % loopWidth) + loopWidth) % loopWidth
      x = wrappedRelativePos + minX

      y = responsiveRowY
      scale = isMobile ? 0.75 : responsiveRowScale // Increased mobile loop scale

      const fadeEdge = isMobile ? loopWidth / 2 - mobileSpacing : 2800
      const fadeWidth = isMobile ? mobileSpacing : 400

      if (x < -fadeEdge) {
        opacity = Math.max(0, 1 - (-fadeEdge - x) / fadeWidth)
      } else if (x > fadeEdge) {
        opacity = Math.max(0, 1 - (x - fadeEdge) / fadeWidth)
      } else {
        opacity = 1
      }
    }

    return {
      transform: `translate(${x}px, ${y}px) scale(${scale})`,
      opacity,
    }
  }

  const nextSectionOpacity = animationComplete && scrollProgress > 0.95 ? Math.min((scrollProgress - 0.95) * 10, 1) : 0

  return (
    <div className="bg-black min-h-screen relative selection:bg-[#FFD700] selection:text-black">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black" />
        <div
          className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Subtle ambient glows */}
        <div className="absolute top-[-10%] left-1/4 w-[800px] h-[800px] bg-[#FFD700] rounded-full opacity-[0.03] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-900 rounded-full opacity-[0.05] blur-[100px]" />
      </div>

      {/* Hero Section - Pinned scroll container */}
      <div ref={containerRef} className="relative z-10" style={{ height: isMobile ? "280vh" : "800vh" }} id="hero">
        <div className="sticky top-0 left-0 right-0 h-[100dvh] overflow-hidden flex items-center justify-center">
          {/* Hero-specific background gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black pointer-events-none z-0" />

          <div className="relative w-full h-full flex items-center justify-center z-10">
            {/* Cards container with proper containment */}
            <div
              className="relative w-full flex items-center justify-center max-w-[100vw] overflow-hidden"
              style={{ height: "100vh", perspective: "1000px" }}
            >
              {displayCards.map((card, index) => {
                const originalIndex = cards.indexOf(card)
                const cardStyle = getCardStyle(card, originalIndex)
                // Smooth transitions during scroll phases, none during auto-scroll loop
                const isInLoop = scrollProgress >= 0.95

                return (
                  <div
                    key={index}
                    className={`absolute ${isMobile ? "w-44 h-44" : "w-[300px] h-[300px]"} rounded-2xl overflow-hidden shadow-2xl ${!isMobile ? "hover:scale-110 hover:z-50" : ""} cursor-pointer`}
                    style={{
                      transform: cardStyle.transform,
                      opacity: cardStyle.opacity,
                      willChange: scrollProgress >= 0.35 ? 'transform, opacity' : 'auto',
                      transition: isInLoop ? 'none' : 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease-out',
                    }}
                  >
                    <Image
                      src={card.image || "/placeholder.svg"}
                      alt={`Artwork ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 176px, 300px"
                      priority={index < 6}
                      className="object-cover"
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)',
                      }}
                    />
                  </div>
                )
              })}
            </div>

            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Centered Logo */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{
                    opacity: scrollProgress < (isMobile ? 0.35 : 0.5) ? 1 - (scrollProgress - (isMobile ? 0.25 : 0.4)) * (isMobile ? 10 : 5) : 0,
                    transform: `scale(${scrollProgress < (isMobile ? 0.35 : 0.5) ? 1 - scrollProgress * 0.2 : 0.8})`,
                    transition: "opacity 0.2s, transform 0.2s",
                  }}
                >
                  <h1 className="text-[17vw] md:text-[14rem] font-bold tracking-tighter text-white mb-2 font-serif px-4 text-center leading-none">
                    APERTURE
                  </h1>
                  <h2 className="text-[7vw] md:text-[4rem] font-light tracking-[0.2em] text-[#FFD700] font-serif px-4 text-center">
                    ALCHEMIST
                  </h2>
                </div>

                {/* Headline and CTA */}
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-auto"
                  style={{
                    opacity: scrollProgress > (isMobile ? 0.35 : 0.5) ? (scrollProgress - (isMobile ? 0.35 : 0.5)) * 2 : 0,
                    transform: `scale(${scrollProgress > (isMobile ? 0.35 : 0.5) ? 0.85 + (scrollProgress - (isMobile ? 0.35 : 0.5)) * 0.3 : 0.85}) translateY(-${scrollProgress > (isMobile ? 0.6 : 0.75) ? (scrollProgress - (isMobile ? 0.6 : 0.75)) * 50 : 0}vh)`,
                    transition: "opacity 0.2s, transform 0.2s",
                  }}
                >
                  <div className="text-center px-6 flex flex-col items-center">
                    <h1 className="text-[14vw] md:text-[10rem] font-bold tracking-tighter text-white mb-2 font-serif leading-none">
                      APERTURE
                    </h1>
                    <h2 className="text-[6vw] md:text-[3rem] font-light tracking-[0.2em] text-[#FFD700] mb-8 md:mb-12 font-serif">
                      ALCHEMIST
                    </h2>
                    <Button
                      size="lg"
                      className="bg-[#FFD700] text-black hover:bg-[#E6C200] font-semibold text-sm md:text-lg px-8 md:px-10 py-6 md:py-7 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all hover:scale-105 min-w-[200px]"
                      onClick={() => {
                        router.push("/projects")
                      }}
                    >
                      Explore Work
                    </Button>

                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            {scrollProgress < 0.1 && (
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30">
                <div className="flex flex-col items-center gap-2 text-white/50 text-sm animate-bounce">
                  <span className="hidden sm:inline">Keep scrolling</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className="absolute h-24 w-full bg-gradient-to-b from-black to-transparent pointer-events-none z-10"
        style={{ top: "100vh" }}
      />

      {/* Additional Sections - Reordered */}
      <ShowreelSection />
      <PortfolioGrid id="portfolio" />
      <ProcessSteps />
      <ServicesGrid />

      <BrandMarquee />

      <AboutSection />
      <TestimonialsCarousel />
      <FAQAccordion />
      <Footer />
    </div>
  )
}
