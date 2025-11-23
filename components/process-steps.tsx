"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    title: "Pre-Production",
    description:
      "We start with your vision. Our creative team conducts in-depth consultations to understand your goals, target audience, and brand message. We develop comprehensive scripts, storyboards, and shot lists to ensure every frame serves your narrative.",
    image: "/creative-planning-storyboard-meeting.jpg",
    direction: "left",
  },
  {
    title: "Production",
    description:
      "Our cinematography experts bring your vision to life with cutting-edge equipment and techniques. We capture stunning visuals with professional lighting, composition, and movement. Every shot is meticulously planned and executed to perfection.",
    image: "/professional-video-production-filming.jpg",
    direction: "right",
  },
  {
    title: "Post-Production",
    description:
      "The magic happens in the edit suite. Our editors, colorists, and sound designers craft your footage into a compelling final product. From color grading to sound design, we ensure every element enhances your story.",
    image: "/video-editing-color-grading-post-production.jpg",
    direction: "left",
  },
]

export default function ProcessSteps() {
  return (
    <motion.section
      className="w-full bg-neutral-900 py-12 md:py-20 lg:py-32 px-4 md:px-6 lg:px-12 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-neutral-900 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-3 md:mb-4 px-4">
          From Concept To Completion
        </h2>
        <p className="text-base md:text-lg text-neutral-400 text-center mb-10 md:mb-16 max-w-2xl mx-auto px-4">
          We've got you covered through every stage of your production
        </p>

        <div className="space-y-8 md:space-y-12">
          {steps.map((step, index) => (
            <ProcessCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function ProcessCard({ step, index }: { step: any; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  const isLeft = step.direction === "left"

  return (
    <motion.div
      ref={ref}
      className="flex flex-col md:flex-row items-stretch gap-0 md:gap-8 bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 border border-neutral-800"
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -60 : 60 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className={`w-full md:w-2/5 h-64 md:h-auto flex-shrink-0 overflow-hidden group ${!isLeft && "md:order-2"}`}>
        <img
          src={step.image || "/placeholder.svg"}
          alt={step.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex-1 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">{step.title}</h3>
        <p className="text-neutral-400 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">{step.description}</p>
        <div className="flex items-center gap-2 text-[#FFD700] font-semibold cursor-pointer hover:gap-3 transition-all text-sm md:text-base">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  )
}
