"use client"

import { useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export interface ParallaxScrollProps {
  images: string[]
  className?: string
  onImageClick?: (index: number) => void
}

export function ParallaxScroll({ images, className, onImageClick }: ParallaxScrollProps) {
  const gridRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  })

  // Split images into three columns
  const third = Math.ceil(images.length / 3)
  const firstColumn = images.slice(0, third)
  const secondColumn = images.slice(third, 2 * third)
  const thirdColumn = images.slice(2 * third)

  const parallaxDistance = isMobile ? 100 : 200

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -parallaxDistance])
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, parallaxDistance])
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -parallaxDistance])

  return (
    <div ref={gridRef} className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[1600px] px-6">
        {/* First Column - Scrolls up */}
        <div className="grid gap-8">
          {firstColumn.map((src, idx) => (
            <motion.div
              key={`first-${idx}`}
              style={{ y: translateFirst }}
              className="group relative cursor-pointer"
              onClick={() => onImageClick?.(idx)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Gallery image ${idx + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="px-6 py-3 bg-white/10 backdrop-blur-[8px] border border-white/20 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-white text-sm font-medium tracking-wider uppercase">View</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second Column - Scrolls down */}
        <div className="grid gap-8">
          {secondColumn.map((src, idx) => (
            <motion.div
              key={`second-${idx}`}
              style={{ y: translateSecond }}
              className="group relative cursor-pointer"
              onClick={() => onImageClick?.(idx + firstColumn.length)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Gallery image ${idx + firstColumn.length + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="px-6 py-3 bg-white/10 backdrop-blur-[8px] border border-white/20 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-white text-sm font-medium tracking-wider uppercase">View</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Third Column - Scrolls up */}
        <div className="grid gap-8">
          {thirdColumn.map((src, idx) => (
            <motion.div
              key={`third-${idx}`}
              style={{ y: translateThird }}
              className="group relative cursor-pointer"
              onClick={() => onImageClick?.(idx + firstColumn.length + secondColumn.length)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Gallery image ${idx + firstColumn.length + secondColumn.length + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="px-6 py-3 bg-white/10 backdrop-blur-[8px] border border-white/20 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-white text-sm font-medium tracking-wider uppercase">View</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
