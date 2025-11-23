"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide comprehensive video production services including commercial production, documentary filmmaking, corporate videos, event coverage, music videos, animation, and social media content creation. Our team handles everything from pre-production planning to final post-production.",
  },
  {
    question: "How much does video production cost?",
    answer:
      "Project costs vary based on scope, duration, complexity, and your specific requirements. We offer flexible packages ranging from starter to premium tiers. Contact us for a detailed quote tailored to your budget and vision.",
  },
  {
    question: "How long does it take to produce a video?",
    answer:
      "Timeline depends on project complexity. Typically, simple projects take 2-4 weeks, mid-level projects take 4-8 weeks, and complex productions can take 8-16 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Can you help with scriptwriting and storyboarding?",
    answer:
      "Our creative team excels at scriptwriting and storyboarding. We collaborate with you to develop compelling narratives that align with your brand voice and messaging objectives.",
  },
  {
    question: "What is your production process?",
    answer:
      "Our process consists of three main phases: Pre-Production (planning, scripting, storyboarding), Production (filming with professional equipment), and Post-Production (editing, color grading, sound design). We keep you involved at every stage.",
  },
  {
    question: "Do you provide video marketing services?",
    answer:
      "Yes! Beyond production, we offer strategic consultation on video marketing, platform optimization, and content distribution to ensure your videos reach and engage your target audience effectively.",
  },
  {
    question: "Can you work with a specific budget?",
    answer:
      "We absolutely can! We're experienced in maximizing creative impact within any budget. Our team will work with you to prioritize elements and find efficient solutions that deliver exceptional results.",
  },
]

export default function FAQAccordion() {
  return (
    <motion.section
      className="w-full bg-black py-20 md:py-32 px-6 md:px-12 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Curious? Check Out the Scoop</h2>
        <p className="text-lg text-neutral-400 text-center mb-12">(FAQs)</p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-neutral-900 rounded-xl px-6 border border-neutral-800"
            >
              <AccordionTrigger className="text-lg font-semibold text-white hover:text-[#FFD700] transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-400 leading-relaxed pt-2">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  )
}
