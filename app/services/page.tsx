"use client"

import { motion, useScroll } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"

const services = [
  {
    title: "Wedding Photography",
    description: "Capture the magic of your special day with timeless elegance.",
    image: "/elegant-wedding-ceremony-bride-groom.jpg",
    features: ["Full Day Coverage", "Pre-Wedding Shoot", "Edited Photos", "Physical Album"],
    number: "01",
  },
  {
    title: "Portrait Photography",
    description: "Professional portraits that reveal your unique personality.",
    image: "/professional-portrait-studio-lighting.jpg",
    features: ["Studio Session", "Outdoor Options", "Professional Editing", "Multiple Looks"],
    number: "02",
  },
  {
    title: "Commercial Photography",
    description: "Elevate your brand with stunning commercial imagery.",
    image: "/commercial-product-photography-professional.jpg",
    features: ["Product Shots", "Brand Identity", "Marketing Content", "Social Media Assets"],
    number: "03",
  },
  {
    title: "Event Photography",
    description: "Document your special moments with artistry and precision.",
    image: "/corporate-event-party-celebration.jpg",
    features: ["Corporate Events", "Private Parties", "Full Coverage", "Same-Day Edits"],
    number: "04",
  },
  {
    title: "Fashion Photography",
    description: "Editorial and fashion photography that tells your story.",
    image: "/fashion-editorial-model-photoshoot.jpg",
    features: ["Editorial Shoots", "Lookbook Creation", "Creative Direction", "Styling Consultation"],
    number: "05",
  },
  {
    title: "Lifestyle Photography",
    description: "Authentic moments captured in their natural beauty.",
    image: "/lifestyle-family-candid-outdoor.jpg",
    features: ["Family Sessions", "Lifestyle Shoots", "Natural Settings", "Candid Moments"],
    number: "06",
  },
]

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-black to-[#0A0A0A] text-white">
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex flex-col justify-center items-center overflow-hidden pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="absolute inset-0 z-0">
          <img src="/images/services-hero.jpg" alt="Services Hero" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-6 md:mb-8 font-serif tracking-tighter"
          >
            OUR
            <br />
            <span>SERVICES</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg lg:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Transforming moments into timeless art through the lens of passion and precision.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 relative bg-[#0A0A0A]">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group relative ${index % 2 === 1 ? "lg:mt-20" : ""}`}
              >
                <Link href="/contact" className="block">
                  <div className="relative h-[500px] md:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFD700]/5 to-transparent">
                    {/* Decorative corner elements */}
                    <div className="absolute top-4 left-4 w-10 h-10 md:w-12 md:h-12 border-l-2 border-t-2 border-[#FFD700]/30 group-hover:border-[#FFD700] transition-all duration-500 z-10" />
                    <div className="absolute bottom-4 right-4 w-10 h-10 md:w-12 md:h-12 border-r-2 border-b-2 border-[#FFD700]/30 group-hover:border-[#FFD700] transition-all duration-500 z-10" />

                    {/* Large number overlay */}
                    <div className="absolute top-6 md:top-8 right-6 md:right-8 text-[8rem] md:text-[12rem] font-serif leading-none text-[#FFD700]/5 group-hover:text-[#FFD700]/10 transition-all duration-700 z-0">
                      {service.number}
                    </div>

                    {/* Image with parallax effect */}
                    <div className="absolute inset-0">
                      <motion.img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        whileHover={{ scale: 1.05 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 group-hover:via-black/60 transition-all duration-500" />

                      {/* Golden glow effect on hover */}
                      <motion.div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700]/0 via-[#FFD700]/0 to-[#FFD700]/0 group-hover:from-[#FFD700]/20 group-hover:via-[#FFD700]/5 group-hover:to-transparent transition-all duration-700" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-end p-6 md:p-8 lg:p-10 z-10">
                      <motion.div
                        className="space-y-3 md:space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {/* Number badge */}
                        <div className="inline-block px-3 md:px-4 py-1 backdrop-blur-xl bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full text-[#FFD700] text-xs md:text-sm font-medium mb-3 md:mb-4">
                          {service.number}
                        </div>

                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white group-hover:text-[#FFD700] transition-colors duration-500 text-balance">
                          {service.title}
                        </h3>
                        <p className="text-base md:text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-500">
                          {service.description}
                        </p>

                        {/* Features with enhanced styling */}
                        <div className="flex flex-wrap gap-2 md:gap-3 pt-3 md:pt-4">
                          {service.features.map((feature, i) => (
                            <motion.span
                              key={feature}
                              className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm backdrop-blur-md bg-white/5 border border-white/10 rounded-full text-gray-300 group-hover:border-[#FFD700]/50 group-hover:text-[#FFD700] group-hover:bg-[#FFD700]/5 transition-all duration-500"
                              whileHover={{ scale: 1.05, y: -2 }}
                              transition={{ delay: i * 0.05 }}
                            >
                              {feature}
                            </motion.span>
                          ))}
                        </div>

                        {/* Arrow indicator with animation */}
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ x: 10 }}
                          className="flex items-center gap-2 pt-4 md:pt-6 text-[#FFD700] opacity-0 group-hover:opacity-100 transition-all duration-500"
                        >
                          <span className="text-xs md:text-sm font-medium tracking-wider uppercase">
                            Explore Service
                          </span>
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Enhanced border glow with animation */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl md:rounded-3xl border border-transparent group-hover:border-[#FFD700]/50 transition-all duration-500"
                      whileHover={{
                        boxShadow: "0 0 50px rgba(255, 215, 0, 0.3), inset 0 0 30px rgba(255, 215, 0, 0.1)",
                      }}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 relative overflow-hidden bg-black">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#FFD700]/5 to-black" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[#FFD700]/10 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div
            className="mb-4 md:mb-6 text-[#FFD700] text-xs md:text-sm tracking-[0.3em] uppercase font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get Started
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6 md:mb-8 text-balance leading-tight">
            Let's Create Something{" "}
            <span className="text-[#FFD700] inline-block relative">
              Extraordinary
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h2>

          <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto">
            Ready to turn your vision into stunning visual stories? Get in touch and let's discuss your next project.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 md:gap-3 px-8 md:px-12 py-4 md:py-5 bg-[#FFD700] text-black font-semibold rounded-full text-base md:text-lg hover:bg-[#FFD700]/90 transition-all shadow-[0_0_50px_rgba(255,215,0,0.3)] hover:shadow-[0_0_80px_rgba(255,215,0,0.5)] relative overflow-hidden"
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
