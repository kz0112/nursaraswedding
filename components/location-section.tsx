"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function LocationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleOpenMap = () => {
    // МЕКЕН ЖАЙ КООРДИНАТАЛАРЫН ӨЗГЕРТІҢІЗ
    const address = "Алматы, Қабанбай батыр көшесі, Grand Hall мейрамханасы"
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank')
  }

  return (
    <section ref={ref} className="py-16 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto text-center"
      >
        {/* Title */}
        <h2 
          className="text-4xl md:text-5xl text-primary mb-8"
          style={{ fontFamily: 'var(--font-script)' }}
        >
          Мекен жайымыз:
        </h2>

        {/* Address */}
        <p className="text-primary/80 text-sm md:text-base tracking-wide leading-relaxed mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
          АЛМАТЫ ҚАЛАСЫ,<br />
          ҚАБАНБАЙ БАТЫР КӨШЕСІ<br />
          «GRAND HALL»<br />
          МЕЙРАМХАНАСЫ
        </p>

        {/* Map Button */}
        <motion.button
          onClick={handleOpenMap}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-primary/80 hover:bg-primary text-white px-10 py-3 rounded-full text-sm tracking-widest transition-colors duration-300"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          КАРТАНЫ АШУ
        </motion.button>

        {/* TUGIS logo */}
<div className="flex justify-center mt-12">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkhZVogfBangF5iBj1a707JSYMZPrGS3p8A&s"
    alt="Tugis logo"
    className="
      w-20
      opacity-90
      object-contain
    "
  />
</div>
      </motion.div>
    </section>
  )
}
