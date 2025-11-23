"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    title: "Commercial Production",
    description: "High-impact commercials that sell your brand",
    image: "/commercial-advertising-production.jpg",
  },
  {
    title: "Documentary Filmmaking",
    description: "Compelling stories told through visual narrative",
    image: "/documentary-filmmaking-cinematic.jpg",
  },
  {
    title: "Corporate Videos",
    description: "Professional content for your business",
    image: "/corporate-business-video-production.jpg",
  },
  {
    title: "Event Coverage",
    description: "Memorable moments captured beautifully",
    image: "/event-coverage-videography.jpg",
  },
  {
    title: "Music Videos",
    description: "Creative visual storytelling with music",
    image: "/music-video-production-creative.jpg",
  },
  {
    title: "Animation & Motion Graphics",
    description: "Dynamic visual effects and animations",
    image: "/animation-motion-graphics-video.jpg",
  },
  {
    title: "Social Media Content",
    description: "Engaging content optimized for platforms",
    image: "/social-media-content-production.jpg",
  },
]

export default function ServicesGrid() {
  return (
    <motion.section
      className="w-full bg-black py-12 md:py-20 lg:py-32 px-4 md:px-6 lg:px-12 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-10 md:mb-16 px-4">
          We're Video Pros in Many Industries
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      className="relative rounded-xl md:rounded-2xl overflow-hidden aspect-[4/5] group cursor-pointer border border-neutral-800"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <img
        src={service.image || "/placeholder.svg"}
        alt={service.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
      />

      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{service.title}</h3>
        <p className="text-neutral-300 text-sm leading-relaxed max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-400">
          {service.description}
        </p>
      </div>
    </motion.div>
  )
}
