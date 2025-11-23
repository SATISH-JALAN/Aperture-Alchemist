"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Calendar, Folder, ImageIcon, ChevronLeft, ChevronRight, X } from "lucide-react"
import { albums } from "@/lib/albums"
import { ParallaxScroll } from "@/components/parallax-scroll"

export default function AlbumDetailPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  const album = albums.find((a) => a.slug === slug)

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [lightboxOpen])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return

      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") prevPhoto()
      if (e.key === "ArrowRight") nextPhoto()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, currentPhotoIndex])

  if (!album) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Album Not Found</h1>
          <Link href="/photo-albums" className="text-[#FFD700] hover:underline">
            Back to Albums
          </Link>
        </div>
      </div>
    )
  }

  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextPhoto = () => {
    setDirection(1)
    setCurrentPhotoIndex((prev) => (prev + 1) % album.photos.length)
  }

  const prevPhoto = () => {
    setDirection(-1)
    setCurrentPhotoIndex((prev) => (prev === 0 ? album.photos.length - 1 : prev - 1))
  }

  // Find prev/next albums for navigation
  const currentAlbumIndex = albums.findIndex((a) => a.id === album.id)
  const prevAlbum = currentAlbumIndex > 0 ? albums[currentAlbumIndex - 1] : null
  const nextAlbum = currentAlbumIndex < albums.length - 1 ? albums[currentAlbumIndex + 1] : null

  return (
    <div className="bg-black min-h-screen relative pt-40 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] overflow-hidden flex flex-col items-center justify-center px-6 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={album.coverImage || "/placeholder.svg"}
            alt="Background"
            fill
            className="object-cover blur-[60px] opacity-30 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

          {/* Noise texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl w-full text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 font-serif tracking-tight leading-[0.95]">
              {album.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              {album.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
          >
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Folder className="w-4 h-4 text-[#FFD700]" />
              <span className="text-sm font-medium text-white/90 uppercase tracking-wide">{album.category}</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <ImageIcon className="w-4 h-4 text-[#FFD700]" />
              <span className="text-sm font-medium text-white/90">{album.photoCount} Photos</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Calendar className="w-4 h-4 text-[#FFD700]" />
              <span className="text-sm font-medium text-white/90">{album.date}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 pb-32 md:pb-48">
        <ParallaxScroll images={album.photos.map((photo) => photo.src)} onImageClick={openLightbox} />
      </section>

      {/* Album Navigation */}
      <section className="border-t border-white/10 bg-neutral-950 py-20 px-6 mt-20 md:mt-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {prevAlbum ? (
            <Link
              href={`/photo-albums/${prevAlbum.slug}`}
              className="group flex items-center gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#FFD700]/30 transition-all"
            >
              <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src={prevAlbum.coverImage || "/placeholder.svg"}
                  alt={prevAlbum.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-medium text-white/50 uppercase tracking-wider mb-2 block">
                  Previous Album
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors font-serif">
                  {prevAlbum.title}
                </h3>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextAlbum && (
            <Link
              href={`/photo-albums/${nextAlbum.slug}`}
              className="group flex items-center justify-end gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#FFD700]/30 transition-all text-right"
            >
              <div>
                <span className="text-xs font-medium text-white/50 uppercase tracking-wider mb-2 block">
                  Next Album
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors font-serif">
                  {nextAlbum.title}
                </h3>
              </div>
              <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src={nextAlbum.coverImage || "/placeholder.svg"}
                  alt={nextAlbum.title}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
          >
            <div className="absolute inset-0 z-0" onClick={closeLightbox} />

            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:rotate-90"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                prevPhoto()
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-[110] p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 hidden md:flex"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                nextPhoto()
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-[110] p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 hidden md:flex"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="relative w-full h-full max-w-7xl max-h-[85vh] p-4 md:p-10 pointer-events-none flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentPhotoIndex}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 100 : -100, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: direction > 0 ? -100 : 100, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full h-full flex items-center justify-center pointer-events-auto"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={album.photos[currentPhotoIndex].src || "/placeholder.svg"}
                      alt={album.photos[currentPhotoIndex].alt}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[110] px-6 py-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white/80 font-medium font-mono">
              {currentPhotoIndex + 1} / {album.photos.length}
            </div>

            {/* Mobile Navigation Overlay */}
            <div className="absolute inset-0 md:hidden z-[100] flex">
              <div
                className="w-1/2 h-full"
                onClick={(e) => {
                  e.stopPropagation()
                  prevPhoto()
                }}
              />
              <div
                className="w-1/2 h-full"
                onClick={(e) => {
                  e.stopPropagation()
                  nextPhoto()
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back button positioned below floating dock */}
      <Link
        href="/photo-albums"
        className="fixed top-24 left-6 z-50 pointer-events-auto md:top-20 md:left-6 p-3 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 text-white/90 hover:text-[#FFD700] hover:bg-black/40 hover:border-[#FFD700]/30 transition-all duration-300 group shadow-lg inline-flex items-center"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
      </Link>
    </div>
  )
}
