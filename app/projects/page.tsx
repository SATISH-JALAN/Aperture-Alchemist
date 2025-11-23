"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { Search, Play, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { allProjects } from "@/lib/projects"

const categories = [
  "All",
  "Animation",
  "Commercials",
  "Corporate",
  "Documentary",
  "Educational",
  "Entertainment",
  "Event",
  "Fashion",
  "Interview",
  "Lifestyle",
  "Product Video",
  "Real Estate",
  "Social Media",
  "News Edit",
  "Motion Graphics",
  "Wedding",
]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(allProjects)
  const [isScrolled, setIsScrolled] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  const handleFilter = (category: string) => {
    setActiveFilter(category)
    if (category === "All") {
      setFilteredProjects(allProjects)
    } else {
      setFilteredProjects(allProjects.filter((p) => p.category === category))
    }
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#FFD700] selection:text-black">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/1.png"
            fill
            alt="Projects Hero"
            className="object-cover opacity-40 scale-105 animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-serif tracking-tight">
              Our{" "}
              <span className="text-[#FFD700] inline-block relative">
                Projects
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFD700]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              From coming up with creative concepts to delivering outstanding campaigns, we turn your
              <span className="text-[#FFD700] font-serif italic mx-2">visions</span>
              into cinematic reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <div
        className={`sticky top-0 z-40 transition-all duration-500 border-b border-white/5 ${
          isScrolled ? "bg-black/80 backdrop-blur-xl py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-black py-8"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 relative group">
          {/* Left Arrow */}
          <AnimatePresence>
            {canScrollLeft && (
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                onClick={() => scroll("left")}
                className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-50 bg-black/80 backdrop-blur-sm p-2 rounded-full border border-white/10 hover:bg-[#FFD700] hover:text-black transition-all shadow-lg"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-3 overflow-x-auto pb-2 md:pb-0 mask-linear-fade px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] scroll-smooth"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilter(category)}
                className={`relative px-6 py-2.5 rounded-full whitespace-nowrap font-medium text-sm transition-all duration-300 border flex-shrink-0 ${
                  activeFilter === category
                    ? "bg-[#FFD700] text-black border-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.3)] scale-105 font-bold"
                    : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white hover:border-[#FFD700]/50"
                }`}
              >
                {category}
                {activeFilter === category && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 rounded-full bg-[#FFD700] -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <AnimatePresence>
            {canScrollRight && (
              <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                onClick={() => scroll("right")}
                className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-50 bg-black/80 backdrop-blur-sm p-2 rounded-full border border-white/10 hover:bg-[#FFD700] hover:text-black transition-all shadow-lg"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-20 px-4 md:px-8 max-w-[1800px] mx-auto min-h-[60vh]">
        {filteredProjects.length > 0 ? (
          <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.05,
                  }}
                  className="break-inside-avoid mb-8"
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block group relative rounded-xl overflow-hidden bg-zinc-900 cursor-pointer border border-white/5 hover:border-[#FFD700]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,215,0,0.1)]"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={600}
                        className={`w-full h-auto object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 ${
                          project.aspectRatio === "portrait"
                            ? "aspect-[3/4]"
                            : project.aspectRatio === "square"
                              ? "aspect-square"
                              : "aspect-video"
                        }`}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out">
                          <div className="flex items-center justify-between mb-3">
                            <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-black uppercase bg-[#FFD700] rounded-full">
                              {project.category}
                            </span>
                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                              <ArrowUpRight className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          <h3 className="text-3xl font-bold text-white mb-2 font-serif leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-gray-300 font-light tracking-wide">{project.client}</p>
                        </div>
                      </div>

                      {/* Play Icon Overlay (Optional) */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="w-16 h-16 rounded-full bg-[#FFD700]/90 flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-lg">
                          <Play className="w-6 h-6 text-black fill-black ml-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-32 text-center"
          >
            <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-6 border border-white/10">
              <Search className="w-8 h-8 text-gray-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-serif">No projects found</h3>
            <p className="text-gray-400 mb-8">We couldn't find any projects in the "{activeFilter}" category.</p>
            <button
              onClick={() => handleFilter("All")}
              className="px-8 py-3 bg-[#FFD700] text-black font-bold rounded-full hover:bg-[#FFE55C] transition-colors"
            >
              View All Projects
            </button>
          </motion.div>
        )}
      </section>

      <Footer />
    </div>
  )
}
