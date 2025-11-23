"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "The team brought our vision to life in ways we couldn't have imagined. The final product exceeded all expectations and our engagement metrics soared.",
    author: "Sarah Chen",
    title: "CEO, TechStartup Inc.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "Working with this agency was a game-changer. They understood our brand deeply and created content that resonated with our audience on an emotional level.",
    author: "Michael Rodriguez",
    title: "Marketing Director, Global Brands Co.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "From concept to delivery, the entire process was seamless. Their attention to detail and creative expertise made our commercial production a huge success.",
    author: "Emma Thompson",
    title: "Producer, Entertainment Group",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoPlay])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  return (
    <motion.section
      className="w-full bg-neutral-900 py-20 md:py-32 px-6 md:px-12 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-neutral-900 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Our Client Chronicles</h2>
        <p className="text-lg text-neutral-400 text-center mb-12">Stories that make us smile</p>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="bg-black rounded-2xl p-8 md:p-12 text-center border border-neutral-800"
            >
              <div className="text-4xl text-neutral-600 mb-4">"</div>
              <p className="text-lg md:text-2xl text-neutral-300 leading-relaxed mb-8 italic">
                {testimonials[current].quote}
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={testimonials[current].author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#FFD700]"
                />
                <div className="text-left">
                  <p className="font-bold text-white">{testimonials[current].author}</p>
                  <p className="text-sm text-neutral-500">{testimonials[current].title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors border border-neutral-700"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={next}
            className="absolute -right-6 md:-right-12 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors border border-neutral-700"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrent(index)
                setAutoPlay(false)
              }}
              className={`transition-all ${
                current === index
                  ? "w-8 h-2 bg-[#FFD700] rounded-full"
                  : "w-2 h-2 bg-neutral-700 rounded-full hover:bg-neutral-600"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-neutral-900/0 pointer-events-none" />
    </motion.section>
  )
}
