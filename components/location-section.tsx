"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

// Letter animation component
function AnimatedText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.4, 
            delay: delay + i * 0.03,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}

export default function LocationSection() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  const handleOpenMap = () => {
    // МЕКЕН ЖАЙ КООРДИНАТАЛАРЫН ӨЗГЕРТІҢІЗ
    const address = "Алматы, Қабанбай батыр көшесі, Grand Hall мейрамханасы"
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank')
  }

  return (
    <section ref={containerRef} className="relative py-20 px-4 bg-gradient-to-b from-white via-secondary/20 to-white overflow-hidden">
      {/* Decorative corner ornaments */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-8 left-4 w-24 h-24"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
          <path d="M0,0 L50,0 L50,10 L10,10 L10,50 L0,50 Z" fill="currentColor" />
          <path d="M20,20 L30,10 L40,20 L30,30 Z" fill="currentColor" />
        </svg>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-8 right-4 w-24 h-24 scale-x-[-1]"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
          <path d="M0,0 L50,0 L50,10 L10,10 L10,50 L0,50 Z" fill="currentColor" />
          <path d="M20,20 L30,10 L40,20 L30,30 Z" fill="currentColor" />
        </svg>
      </motion.div>

      <motion.div
        ref={ref}
        style={{ scale }}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-md mx-auto text-center"
      >
        {/* Title with animation */}
        <motion.h2 
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl text-primary mb-8"
          style={{ fontFamily: 'var(--font-script)' }}
        >
          <AnimatedText text="Мекен жайымыз:" />
        </motion.h2>

        {/* Address with staggered animation */}
        <motion.div 
          className="text-primary/80 text-sm md:text-base tracking-wide leading-relaxed mb-8" 
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {["АЛМАТЫ ҚАЛАСЫ,", "ҚАБАНБАЙ БАТЫР КӨШЕСІ", "«GRAND HALL»", "МЕЙРАМХАНАСЫ"].map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        {/* Map Button with enhanced animation */}
        <motion.button
          onClick={handleOpenMap}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(107, 58, 58, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          className="relative bg-primary/80 hover:bg-primary text-white px-10 py-3 rounded-full text-sm tracking-widest transition-colors duration-300 overflow-hidden"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          <motion.span
            animate={{
              x: [-100, 200],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
          />
          <span className="relative z-10">КАРТАНЫ АШУ</span>
        </motion.button>

        {/* Decorative ornament */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center mt-12"
        >
          <img
            src="https://grizly.club/uploads/posts/2022-12/1671768734_grizly-club-p-kazakhskii-zheltii-ornament-26.png"
            alt="ornament"
            className="w-28 opacity-60"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
