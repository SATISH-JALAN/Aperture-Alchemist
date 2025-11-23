"use client"

import { motion } from "framer-motion"

const brands = ["Studio A", "Creative Co", "Pixel Works", "Motion Lab", "Visual Arts", "Frame Studio"]

export default function BrandMarquee() {
  return (
    <motion.section
      className="w-full bg-black py-16 md:py-20 px-6 md:px-12 overflow-hidden relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/0 to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h3 className="text-center text-lg text-neutral-500 font-medium mb-12 uppercase tracking-widest">
          Standing Tall with Our Esteemed Brand Partners
        </h3>

        <div className="relative overflow-hidden py-4">
          <motion.div
            className="flex gap-16 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-2xl font-semibold text-neutral-600 grayscale hover:grayscale-0 hover:text-white transition-all duration-300"
              >
                {brand}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
