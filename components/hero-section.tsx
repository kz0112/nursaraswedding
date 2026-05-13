"use client"

import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - ССЫЛКАНЫ ӨЗГЕРТІҢІЗ */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/Vc9k7bXF/Whats-App-Image-2026-05-11-at-19-50-52-1.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      {/* Date in corner */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-24 right-4 md:right-8 text-right z-20"
      >
        <div className="text-5xl md:text-7xl font-light tracking-wider text-[#C9A962]" style={{ fontFamily: 'var(--font-serif)', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>26</div>
        <div className="text-5xl md:text-7xl font-light tracking-wider text-[#C9A962]" style={{ fontFamily: 'var(--font-serif)', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>06</div>
        <div className="text-5xl md:text-7xl font-light tracking-wider text-[#C9A962]" style={{ fontFamily: 'var(--font-serif)', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>26</div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 pt-20">

        {/* Main decorative image - Saukele (traditional Kazakh bridal headwear) */}
       

        {/* White card with name */}
        <motion.div
  initial={{ opacity: 0, y: 100, scale: 0.92 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    duration: 1.6,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative flex flex-col items-center justify-center mt-40"
>
  {/* soft thin cinematic glow */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
    className="
      absolute
      w-[520px]
      h-[140px]
      bg-white/30
      blur-[70px]
      rounded-full
    "
  />

  {/* stronger center glow behind text */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 2, delay: 0.3 }}
    className="
      absolute
      w-[260px]
      h-[90px]
      bg-white/55
      blur-[35px]
      rounded-full
    "
  />

  {/* content */}
  <div className="relative z-10 text-center">
    <motion.h1
      initial={{
        opacity: 0,
        y: 40,
        letterSpacing: "0.25em",
      }}
      animate={{
        opacity: 1,
        y: 0,
        letterSpacing: "0.02em",
      }}
      transition={{
        duration: 1.8,
        delay: 0.2,
      }}
      className="
        text-5xl
        md:text-6xl
        text-white
        font-light
        mb-2
        drop-shadow-[0_0_18px_rgba(255,255,255,0.45)]
      "
      style={{
        fontFamily: "var(--font-script)",
      }}
    >
      Нұрсара
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.4,
        delay: 0.8,
      }}
      className="
        text-xl
        md:text-2xl
        tracking-[0.35em]
        uppercase
        text-white/90
        font-light
        drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]
      "
      style={{
        fontFamily: "serif",
      }}
    >
      QYZ UZATU
    </motion.p>
  </div>
</motion.div>
      </div>

      
    </section>
  )
}
