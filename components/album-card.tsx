"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import type { Album } from "@/lib/albums"
import { GlowingBorder } from "./glowing-border"

interface AlbumCardProps {
  album: Album
  index: number
}

export function AlbumCard({ album, index }: AlbumCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Added mouse tracking for custom cursor effect
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    cursorX.set(e.clientX - rect.left)
    cursorY.set(e.clientY - rect.top)
  }

  // All images including cover
  const allImages = [album.coverImage, ...album.previewImages]

  // Start slideshow on hover
  useEffect(() => {
    if (isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % allImages.length)
      }, 900) // Change image every 900ms
    } else {
      // Stop and reset on mouse leave
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      setCurrentImageIndex(0) // Reset to cover
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovered, allImages.length])

  // Slide animation variants
  const slideVariants = {
    enter: {
      x: "100%",
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: "-100%",
      opacity: 0,
    },
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <Link href={`/photo-albums/${album.slug}`} className="block">
        <GlowingBorder
          borderWidth={2}
          blur={15}
          spread={40}
          proximity={150}
          inactiveZone={0.6}
          disabled={!isHovered}
          className="mb-6"
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 cursor-none rounded-lg">
            {/* Image Stack with Carousel Effect */}
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={currentImageIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0"
              >
                <Image
                  src={allImages[currentImageIndex] || "/placeholder.svg"}
                  alt={`${album.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Implemented mouse-following custom cursor */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    left: cursorXSpring,
                    top: cursorYSpring,
                  }}
                  className="absolute z-50 -ml-12 -mt-12 pointer-events-none"
                >
                  <div className="w-24 h-24 rounded-full bg-white/5 backdrop-blur-[8px] flex items-center justify-center border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
                    <span className="text-white font-medium text-xs tracking-widest uppercase opacity-90">View</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Photo Count Badge */}
            <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
              <span className="text-xs font-medium text-white/90 tracking-wide">{album.photoCount} Shots</span>
            </div>

            {/* Image Indicator Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {allImages.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex ? "bg-[#FFD700] w-6" : "bg-white/50 w-1.5"
                  }`}
                />
              ))}
            </div>
          </div>
        </GlowingBorder>

        <div className="space-y-3 text-center relative z-10">
          <div className="overflow-hidden">
            <motion.span
              className="text-xs font-bold text-[#FFD700] tracking-[0.2em] uppercase inline-block"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {album.category}
            </motion.span>
          </div>
          <h3 className="text-3xl text-white group-hover:text-white/80 transition-colors duration-300 font-serif tracking-tight">
            {album.title}
          </h3>
          <p className="text-sm text-white/50 max-w-xs mx-auto font-light leading-relaxed">
            {album.date} — {album.description}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
