"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Link from "next/link"
import { Home, FolderOpen, ImageIcon, Palette, Info, Mail, Briefcase } from "lucide-react"

interface DockItem {
  title: string
  icon: React.ReactNode
  href: string
}

const items: DockItem[] = [
  { title: "Home", icon: <Home className="w-5 h-5" />, href: "/" },
  { title: "Projects", icon: <FolderOpen className="w-5 h-5" />, href: "/projects" },
  { title: "Albums", icon: <ImageIcon className="w-5 h-5" />, href: "/photo-albums" },
  { title: "Services", icon: <Briefcase className="w-5 h-5" />, href: "/services" },
  { title: "Blogs", icon: <Palette className="w-5 h-5" />, href: "/blogs" },
  { title: "About", icon: <Info className="w-5 h-5" />, href: "/about" },
  { title: "Contact", icon: <Mail className="w-5 h-5" />, href: "/contact" },
]

const FloatingDock: React.FC = () => {
  return (
    <>
      {/* Desktop Dock - Hidden on mobile */}
      <div className="hidden md:flex fixed top-6 left-0 right-0 z-50 justify-center pointer-events-none">
        <DesktopDock />
      </div>

      {/* Mobile Dock - Hidden on desktop */}
      <div className="md:hidden fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <MobileDock />
      </div>
    </>
  )
}

const DesktopDock = () => {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY)

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="pointer-events-auto"
    >
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
        className="flex items-center justify-center gap-3 px-6 py-3 bg-black/80 backdrop-blur-xl border border-[#FFD700]/30 rounded-full shadow-[0_8px_30px_rgba(255,215,0,0.15)]"
      >
        {items.map((item) => (
          <IconContainer key={item.href} mouseX={mouseX} {...item} />
        ))}
      </motion.div>
    </motion.div>
  )
}

const MobileDock = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="pointer-events-auto w-full px-4 flex justify-center"
    >
      <div className="flex items-center justify-between gap-1 px-4 py-3 bg-black/90 backdrop-blur-xl border border-[#FFD700]/30 rounded-2xl shadow-[0_4px_20px_rgba(255,215,0,0.15)] w-full max-w-sm overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative group p-2 shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg active:bg-[#FFD700]/10 transition-colors"
          >
            <div className="text-[#FFD700]/70 group-hover:text-[#FFD700] transition-colors">{item.icon}</div>
            <span className="sr-only">{item.title}</span>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

interface IconContainerProps extends DockItem {
  mouseX: any
}

const IconContainer: React.FC<IconContainerProps> = ({ mouseX, title, icon, href }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 56, 40])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <Link href={href} onClick={(e) => scrollToSection(e, href)}>
      <motion.div
        ref={ref}
        style={{ width }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center aspect-square cursor-pointer"
      >
        <motion.div
          className={`flex items-center justify-center w-full h-full rounded-full transition-colors duration-300 ${
            isHovered
              ? "bg-[#FFD700] text-black"
              : "bg-transparent text-[#FFD700]/70 hover:text-[#FFD700] hover:bg-[#FFD700]/10"
          }`}
          whileTap={{ scale: 0.95 }}
        >
          {icon}
        </motion.div>

        {/* Tooltip */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-14 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#FFD700] text-black text-xs font-medium rounded-lg whitespace-nowrap shadow-lg z-50"
          >
            {title}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#FFD700] rotate-45" />
          </motion.div>
        )}
      </motion.div>
    </Link>
  )
}

export default FloatingDock
