"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const portfolioItems = [
  {
    title: "GreenWaves",
    category: "Environmental",
    image: "/green-environmental-video-campaign.jpg",
    span: "col-span-12 md:col-span-6 md:row-span-2",
  },
  {
    title: "Mystic Horizons",
    category: "Travel",
    image: "/travel-landscape-cinematography.jpg",
    span: "col-span-12 md:col-span-4 md:row-span-1",
  },
  {
    title: "Pixel Fusion",
    category: "Tech",
    image: "/tech-product-demo-video.jpg",
    span: "col-span-12 md:col-span-2 md:row-span-1",
  },
  {
    title: "EcoExplorer",
    category: "Documentary",
    image: "/nature-documentary-cinematography.jpg",
    span: "col-span-12 md:col-span-4 md:row-span-1",
  },
  {
    title: "Urban Uplift",
    category: "Brand",
    image: "/urban-lifestyle-brand-video.jpg",
    span: "col-span-12 md:col-span-2 md:row-span-1",
  },
]

export default function PortfolioGrid({ id }: { id?: string }) {
  return (
    <motion.section
      id={id}
      className="w-full bg-black py-12 md:py-20 lg:py-32 px-4 md:px-6 lg:px-12 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-10 md:mb-16 px-4">
          Our Handpicked Featured Portfolio
        </h2>

        <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function PortfolioCard({ item, index }: { item: any; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      className={`${item.span} relative rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group min-h-[250px]`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <img
        src={item.image || "/placeholder.svg"}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-400" />
      <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 z-10 translate-y-2 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-400">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">{item.title}</h3>
        <p className="text-xs md:text-sm text-[#FFD700] font-medium">{item.category}</p>
      </div>
    </motion.div>
  )
}
