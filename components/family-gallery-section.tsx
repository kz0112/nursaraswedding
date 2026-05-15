"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const familyPhotos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-15%20at%2008.48.48-LZtDYYJDu287GDZNZlFkam1AvhJoTB.jpeg",
    alt: "Отбасылық сурет",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-15%20at%2008.48.48%20%281%29-E3OFLz6Z49vITvY1MjXpntgqWc8V43.jpeg",
    alt: "Ата-ана мен қыз",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-15%20at%2008.48.48%20%282%29-FNYdHl38K1svaODAmIHiDJM2vP58eY.jpeg",
    alt: "Ата-ана киіз үйде",
  },
]

export default function FamilyGallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % familyPhotos.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + familyPhotos.length) % familyPhotos.length)
  }

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % familyPhotos.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-white"
    >
      {/* Fullscreen carousel */}
      <div className="relative w-full h-full">

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={currentIndex}
            src={familyPhotos[currentIndex].src}
            alt={familyPhotos[currentIndex].alt}
            custom={direction}
            variants={{
              enter: (direction: number) => ({
                x: direction > 0 ? "100%" : "-100%",
              }),
              center: {
                x: 0,
              },
              exit: (direction: number) => ({
                x: direction < 0 ? "100%" : "-100%",
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* top fade */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* left arrow */}
        <button
          onClick={goToPrevious}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            z-20

            w-7
            h-7

            rounded-full
            bg-white/80
            backdrop-blur-sm

            flex
            items-center
            justify-center
          "
        >
          <ChevronLeft size={14} className="text-black/70" />
        </button>

        {/* right arrow */}
        <button
          onClick={goToNext}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            z-20

            w-7
            h-7

            rounded-full
            bg-white/80
            backdrop-blur-sm

            flex
            items-center
            justify-center
          "
        >
          <ChevronRight size={14} className="text-black/70" />
        </button>

        {/* dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {familyPhotos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}