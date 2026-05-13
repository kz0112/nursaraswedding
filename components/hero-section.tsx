"use client"

import { motion } from "framer-motion"

// Kazakh ornament SVG component
function KazakhOrnament({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 50" fill="currentColor">
      <path d="M0,25 Q25,0 50,25 T100,25 T150,25 T200,25" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path d="M20,25 L30,15 L40,25 L30,35 Z" />
      <path d="M60,25 L70,15 L80,25 L70,35 Z" />
      <path d="M100,25 L110,15 L120,25 L110,35 Z" />
      <path d="M140,25 L150,15 L160,25 L150,35 Z" />
      <path d="M180,25 L190,15 L200,25 L190,35 Z" />
      <circle cx="50" cy="25" r="4" />
      <circle cx="100" cy="25" r="5" />
      <circle cx="150" cy="25" r="4" />
    </svg>
  )
}

// Floating particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0,
            x: Math.random() * 100 + "%",
            y: "100%",
          }}
          animate={{ 
            opacity: [0, 0.6, 0],
            y: "-20%",
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
          className="absolute w-1 h-1 bg-gold-light/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}

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
      
      {/* Floating particles */}
      <FloatingParticles />

      {/* Top ornament */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-6 left-1/2 -translate-x-1/2 z-20"
      >
        <KazakhOrnament className="w-40 md:w-56 text-gold-light/50" />
      </motion.div>

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

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-xs tracking-widest" style={{ fontFamily: 'var(--font-serif)' }}>
            ТӨМЕН СЫРҒЫТУ
          </span>
          <svg 
            className="w-5 h-5 text-gold-light/70" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Bottom ornament */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden z-10"
      >
        <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-white to-transparent" />
      </motion.div>
    </section>
  )
}
