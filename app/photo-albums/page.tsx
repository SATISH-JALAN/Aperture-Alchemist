"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { albums } from "@/lib/albums"
import { AlbumCard } from "@/components/album-card"

const categories = ["All", "Wedding", "Event", "Travel", "Portrait", "Others"]

export default function PhotoAlbumsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredAlbums = activeCategory === "All" ? albums : albums.filter((album) => album.category === activeCategory)

  return (
    <div className="bg-background min-h-screen selection:bg-[#FFD700] selection:text-black">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/20 via-black/60 to-black" />
          <div
            className="absolute inset-0 opacity-[0.2]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23333' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl lg:text-9xl font-bold text-white mb-8 font-serif tracking-tighter pt-8"
          >
            VISUAL
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20">
              CHRONICLES
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed"
          >
            A curated collection of moments frozen in time, where every frame tells a story of light, shadow, and
            emotion.
          </motion.p>
        </div>
      </section>

      {/* Minimal Sticky Filter Bar */}
      <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-center gap-8 md:gap-12 overflow-x-auto scrollbar-hide no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "text-sm font-medium tracking-widest uppercase transition-all duration-300 relative py-2",
                  activeCategory === category ? "text-[#FFD700]" : "text-white/40 hover:text-white",
                )}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute -bottom-px left-0 right-0 h-px bg-[#FFD700] shadow-[0_0_10px_#FFD700]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Albums Grid */}
      <section className="max-w-[1800px] mx-auto px-6 py-20 min-h-[50vh]">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredAlbums.map((album, index) => (
              <AlbumCard key={album.id} album={album} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  )
}
