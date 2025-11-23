"use client"

import { useMotionValue, useSpring } from "framer-motion"
import type React from "react"
import { useEffect, useRef, useState } from "react"

interface GlowingBorderProps {
  children: React.ReactNode
  className?: string
  borderWidth?: number
  blur?: number
  spread?: number
  proximity?: number
  inactiveZone?: number
  disabled?: boolean
  glow?: boolean
}

export function GlowingBorder({
  children,
  className = "",
  borderWidth = 1,
  blur = 10,
  spread = 30,
  proximity = 100,
  inactiveZone = 0.7,
  disabled = false,
  glow = false,
}: GlowingBorderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isHovered, setIsHovered] = useState(false)

  // Mouse position tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring animation for smooth following
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const [angle, setAngle] = useState(0)

  useEffect(() => {
    if (!containerRef.current) return

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    const unsubscribeX = x.on("change", (latest) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const currentY = y.get()
      const deltaX = latest - centerX
      const deltaY = currentY - centerY

      const newAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
      setAngle(newAngle)
    })

    const unsubscribeY = y.on("change", (latest) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const currentX = x.get()
      const deltaX = currentX - centerX
      const deltaY = latest - centerY

      const newAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
      setAngle(newAngle)
    })

    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [x, y])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return

    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const shouldShowGlow = !disabled && (isHovered || glow)

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ borderRadius: "inherit" }}
    >
      {/* Glowing Border Effect - Golden Theme */}
      {shouldShowGlow && (
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            borderRadius: "inherit",
            padding: `${borderWidth}px`,
          }}
        >
          <div
            className="h-full w-full"
            style={{
              borderRadius: "inherit",
              background: `conic-gradient(from ${angle}deg at ${x.get()}px ${y.get()}px, 
                transparent ${90 - spread}deg, 
                rgba(255, 215, 0, 0.8) ${90}deg, 
                rgba(255, 215, 0, 1) ${90 + spread / 2}deg,
                rgba(255, 223, 0, 0.9) ${90 + spread}deg,
                transparent ${90 + spread * 2}deg)`,
              filter: `blur(${blur}px)`,
              opacity: 0.9,
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-20" style={{ borderRadius: "inherit" }}>
        {children}
      </div>
    </div>
  )
}
