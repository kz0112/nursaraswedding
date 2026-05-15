"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"

const familyPhotos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-15%20at%2008.48.48-LZtDYYJDu287GDZNZlFkam1AvhJoTB.jpeg",
    alt: "Отбасылық сурет киіз үйде",
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
  const containerRef = useRef(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section 
      ref={containerRef} 
      className="relative py-20 px-4 bg-gradient-to-b from-white via-secondary/10 to-white overflow-hidden"
    >
      {/* Background ornament */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <svg viewBox="0 0 400 400" className="w-full h-full text-primary">
            <pattern id="galleryPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="400" height="400" fill="url(#galleryPattern)" />
          </svg>
        </div>
      </div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl text-primary mb-4"
            style={{ fontFamily: 'var(--font-script)' }}
          >
            Отбасымыз
          </motion.h2>
          <div className="flex items-center justify-center gap-3">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-gold/50"
            />
            <motion.div 
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 45 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-2 h-2 bg-gold/70"
            />
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-gold/50"
            />
          </div>
        </motion.div>

        {/* Photo Gallery - Elegant Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {familyPhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative group cursor-pointer ${
                index === 0 ? 'md:row-span-2' : ''
              }`}
            >
              {/* Decorative frame corners */}
              <div className="absolute -inset-2 z-0">
                <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-gold/40 transition-all duration-300 group-hover:w-8 group-hover:h-8 group-hover:border-gold/70" />
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-gold/40 transition-all duration-300 group-hover:w-8 group-hover:h-8 group-hover:border-gold/70" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-gold/40 transition-all duration-300 group-hover:w-8 group-hover:h-8 group-hover:border-gold/70" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-gold/40 transition-all duration-300 group-hover:w-8 group-hover:h-8 group-hover:border-gold/70" />
              </div>

              {/* Image container */}
              <div className={`relative overflow-hidden rounded-lg shadow-lg ${
                index === 0 ? 'aspect-[3/4]' : 'aspect-square'
              }`}>
                {/* Glow effect on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-gold/20 via-transparent to-transparent z-10 pointer-events-none"
                />

                {/* Image */}
                <motion.img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{
                    transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)'
                  }}
                />

                {/* Elegant overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-20 pointer-events-none"
                />
              </div>

              {/* Floating sparkle effect */}
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="absolute -top-1 -right-1 w-4 h-4 z-30"
                >
                  <svg viewBox="0 0 24 24" className="w-full h-full text-gold">
                    <path 
                      fill="currentColor" 
                      d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z"
                    />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <img
            src="https://i.ibb.co.com/zh88YY2Y/i-removebg-preview-2.png"
            alt="ornament"
            className="w-32 opacity-40"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
