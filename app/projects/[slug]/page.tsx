import { allProjects } from "@/lib/projects"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, User, Tag } from "lucide-react"
import { Footer } from "@/components/footer"
import * as motion from "framer-motion/client"

export function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = allProjects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  // Find next project for navigation
  const currentIndex = allProjects.findIndex((p) => p.id === project.id)
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length]

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#FFD700] selection:text-black">
      {/* Hero Section */}
      <div className="relative h-[85vh] w-full overflow-hidden flex items-center">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover opacity-70"
          priority
        />
        {/* Enhanced gradients for better text readability and depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />

        {/* Fixed positioning - below floating dock on mobile, aligned with dock on desktop */}
        <div className="fixed top-24 left-6 z-50 pointer-events-none md:top-20 md:left-6">
          <Link
            href="/projects"
            className="pointer-events-auto inline-flex items-center gap-2 p-3 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 text-white/90 hover:text-[#FFD700] hover:bg-black/40 hover:border-[#FFD700]/30 transition-all duration-300 group shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>

        {/* Changed positioning to relative with top margin to shift text lower and prevent overlap */}
        {/* Increased top margin from mt-32 to mt-64 to push content lower as requested */}
        <div className="relative w-full p-8 md:p-16 lg:p-24 mt-64">
          <div className="max-w-6xl mx-auto">
            {/* Animated badges with premium styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <span className="px-6 py-2 bg-[#FFD700] text-black font-bold rounded-full text-xs md:text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                {project.category}
              </span>
              <span className="px-6 py-2 bg-white/5 backdrop-blur-md text-white border border-white/20 rounded-full text-xs md:text-sm uppercase tracking-widest hover:bg-white/10 transition-colors">
                {project.year}
              </span>
            </motion.div>

            {/* Enhanced title typography and size */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-9xl font-bold font-serif leading-none mb-6 text-white drop-shadow-2xl tracking-tight"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 font-light tracking-wide border-l-2 border-[#FFD700] pl-6"
            >
              {project.client}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Description */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold font-serif text-[#FFD700]">About the Project</h2>
            <p className="text-lg text-gray-300 leading-relaxed font-light">{project.description}</p>
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>

          {/* Credits & Details */}
          <div className="space-y-10">
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-bold font-serif mb-6 text-white border-b border-white/10 pb-4">
                Project Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <User className="w-5 h-5 text-[#FFD700] mt-1" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Client</p>
                    <p className="text-white font-medium">{project.client}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Tag className="w-5 h-5 text-[#FFD700] mt-1" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Category</p>
                    <p className="text-white font-medium">{project.category}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-[#FFD700] mt-1" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Year</p>
                    <p className="text-white font-medium">{project.year}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-bold font-serif mb-6 text-white border-b border-white/10 pb-4">Credits</h3>
              <div className="space-y-4">
                {project.credits.map((credit, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-400 font-light">{credit.role}</span>
                    <span className="text-white font-medium">{credit.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Project Navigation */}
      <Link href={`/projects/${nextProject.slug}`} className="block group relative h-[40vh] overflow-hidden">
        <Image
          src={nextProject.image || "/placeholder.svg"}
          alt="Next Project"
          fill
          className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <p className="text-[#FFD700] uppercase tracking-widest text-sm font-bold mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            Next Project
          </p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 group-hover:text-[#FFD700] transition-colors duration-300">
            {nextProject.title}
          </h2>
          <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
            <span className="font-medium">View Case Study</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </Link>

      <Footer />
    </div>
  )
}
