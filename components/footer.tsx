"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Twitter, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <motion.footer
      className="w-full bg-black text-white py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-12 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-neutral-900 to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12 relative z-10">
        <div className="sm:col-span-2 md:col-span-1">
          <div className="relative h-12 md:h-16 w-48 md:w-64 mb-4 md:mb-6">
            <Image src="/images/logo.jpeg" alt="Aperture Alchemist" fill className="object-contain object-left" />
          </div>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Professional video production agency creating cinematic stories that captivate and inspire audiences
            worldwide.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm md:text-base">
            <li>
              <a href="#" className="hover:text-white transition">
                Commercial Production
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Documentary Filmmaking
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Corporate Videos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Event Coverage
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm md:text-base">
            <li>
              <a href="#" className="hover:text-white transition">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Contact</h3>
          <div className="flex items-center gap-2 mb-4 text-sm md:text-base">
            <Mail className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <a href="mailto:hello@agency.com" className="text-gray-400 hover:text-white transition break-all">
              hello@agency.com
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition p-2 -ml-2">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition p-2">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition p-2">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
          &copy; 2025 Aperture Alchemist. All rights reserved.
        </p>
        <div className="flex gap-4 md:gap-6 text-xs md:text-sm text-gray-400">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms of Service
          </a>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
