"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const venueImages = [
  {
    src: "https://i9.photo.2gis.com/images/branch/0/30258560170270495_226a.jpg",
    alt: "Той залы"
  },
  {
    src: "https://avatars.mds.yandex.net/get-altay/13206609/2a0000018f9d17c0fec80fb361c59de6a981/orig",
    alt: "Дастархан"
  },
  {
    src: "https://i9.photo.2gis.com/images/branch/0/30258560170270490_401a_656x340.jpg",
    alt: "Сәндеу"
  },
  {
    src: "https://i9.photo.2gis.com/images/branch/0/30258560170270441_5915_656x340.jpg",
    alt: "Интерьер"
  },
]

export default function VenueSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section ref={ref} className="relative py-20 px-4 bg-gradient-to-b from-white via-secondary/30 to-white overflow-hidden">
       {/* Running line */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-30">
        <div className="h-[28px] bg-[#d4b06a] flex items-center whitespace-nowrap">

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 90,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap"
          >
            {Array(8).fill(
              " NURSARA • QYZ UZATU • "
            ).map((text, i) => (
              <span
                key={i}
                className="text-[#6f3f3f] text-[10px] tracking-[0.35em] uppercase px-4"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {text}
              </span>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Decorative corner ornaments */}
      <div className="absolute top-8 left-4 w-20 h-20 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
          <path
            fill="currentColor"
            d="M0,50 Q25,25 50,0 Q25,25 0,50 M50,0 Q75,25 100,50 Q75,25 50,0"
          />
          <circle cx="50" cy="50" r="8" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-8 right-4 w-20 h-20 opacity-20 scale-x-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
          <path
            fill="currentColor"
            d="M0,50 Q25,25 50,0 Q25,25 0,50 M50,0 Q75,25 100,50 Q75,25 50,0"
          />
          <circle cx="50" cy="50" r="8" fill="currentColor" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-md mx-auto text-center"
      >
        {/* Title with ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex justify-center mb-4">
            <img
              src="https://i.ibb.co.com/zh88YY2Y/i-removebg-preview-2.png"
              alt="ornament"
              className="w-32 opacity-60"
            />
          </div>
          <h2 
            className="text-4xl md:text-5xl text-primary"
            style={{ fontFamily: 'var(--font-script)' }}
          >
            Той мекені
          </h2>
        </motion.div>

        {/* Main image showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative mb-6"
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <motion.img
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src={venueImages[activeIndex].src}
              alt={venueImages[activeIndex].alt}
              className="w-full h-full object-cover"
            />
            {/* Elegant overlay frame */}
            <div className="absolute inset-0 border-[3px] border-gold/30 rounded-2xl pointer-events-none" />
            <div className="absolute inset-2 border border-white/20 rounded-xl pointer-events-none" />
          </div>
          
          
        </motion.div>

        {/* Thumbnail gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-4 gap-2"
        >
          {venueImages.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                index === activeIndex 
                  ? "ring-2 ring-gold shadow-lg" 
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-center gap-4 mt-10"
        >
          <div className="h-px w-16 bg-gold/40"></div>
          <svg className="w-6 h-6 text-gold/60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
          </svg>
          <div className="h-px w-16 bg-gold/40"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}
