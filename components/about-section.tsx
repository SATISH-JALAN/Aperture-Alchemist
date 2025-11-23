"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const stats = [
  { number: 500, label: "Projects Completed" },
  { number: 50, label: "Industry Awards" },
  { number: 15, label: "Years Experience" },
  { number: 200, label: "Happy Clients" },
]

function CountUp({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true)
      let start = 0
      const increment = value / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [inView, value, duration, isVisible])

  return <span ref={ref}>{count}</span>
}

export default function AboutSection() {
  return (
    <motion.section
      className="w-full bg-neutral-900 py-12 md:py-20 lg:py-32 px-4 md:px-6 lg:px-12 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-neutral-900 pointer-events-none" />

      <div className="absolute inset-0 opacity-5">
        <img src="/placeholder.svg?height=600&width=800" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">About Our Agency</h2>
          <p className="text-base md:text-xl text-neutral-400 leading-relaxed mb-3 md:mb-4">
            For over a decade, we've been transforming ideas into cinematic experiences. Our team of passionate
            creatives combines technical expertise with artistic vision to deliver videos that captivate, engage, and
            inspire action.
          </p>
          <p className="text-base md:text-xl text-neutral-400 leading-relaxed mb-8 md:mb-12">
            Whether you're launching a new product, telling your brand story, or creating content for digital platforms,
            we partner with you every step of the way to bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                <CountUp value={stat.number} />
                {stat.number >= 100 ? "+" : ""}
              </div>
              <p className="text-neutral-500 text-xs md:text-sm lg:text-base uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-neutral-900/0 pointer-events-none" />
    </motion.section>
  )
}
