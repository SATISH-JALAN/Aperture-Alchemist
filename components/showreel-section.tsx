"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ShowreelSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  const width = useTransform(scrollYProgress, [0, 1], ["60%", "100%"])
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["24px", "0px"])

  return (
    <motion.section
      ref={containerRef}
      className="relative bg-black min-h-[100vh] md:min-h-[150vh]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-4 md:px-6 lg:px-12 bg-black overflow-hidden">
        <div className="relative z-30 text-center mb-4 md:mb-12 mt-4 md:mt-12">
          {/* Updated font sizing for responsive display */}
          <h2 className="text-[13vw] md:text-8xl lg:text-9xl font-bold tracking-wide leading-none">
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]">
              SHOWREEL
            </span>
          </h2>
        </div>

        {/* Video container */}
        <motion.div
          style={{ width, scale, borderRadius }}
          className="relative aspect-video shadow-2xl overflow-hidden w-full max-h-[50vh] md:max-h-[70vh]"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="/videography-showreel-preview.jpg"
          >
            <source src="/videos/Showreel.mp4" type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </motion.div>
      </div>
    </motion.section>
  )
}
