"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function DateSection() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5])

 return (
  <section ref={containerRef} className="relative py-52 px-4 overflow-hidden">

    {/* Parallax background */}
    <motion.div 
      style={{ y: backgroundY, opacity }}
      className="absolute inset-0 scale-110"
    >
      <div 
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.ibb.co/sdFQB0yc/Whats-App-Image-2026-05-11-at-19-50-53-1.jpg')`,
        }}
      />
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* top fade */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white via-white/25 to-transparent z-10" />

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/25 to-transparent z-10" />

      {/* side glows */}
      <div className="absolute left-[-120px] top-0 w-[260px] h-full bg-white/5 blur-3xl" />
      <div className="absolute right-[-120px] top-0 w-[260px] h-full bg-white/5 blur-3xl" />
    </motion.div>

    {/* Floating particles */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100 }}
          animate={{ 
            opacity: [0, 0.4, 0],
            y: -150,
          }}
          transition={{
            duration: Math.random() * 6 + 5,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
          className="absolute w-1 h-1 bg-gold-light/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${50 + Math.random() * 50}%`,
          }}
        />
      ))}
    </div>

    {/* content */}
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2 }}
      className="relative z-20 max-w-md mx-auto text-center"
    >

      <motion.h2
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-5xl md:text-6xl text-[#c3ab7f] mb-10 drop-shadow-[0_0_25px_rgba(255,255,255,0.12)]"
        style={{ fontFamily: 'var(--font-script)' }}
      >
        <motion.span
          animate={{
            textShadow: [
              "0 0 0px rgba(201, 169, 98, 0)",
              "0 0 30px rgba(201, 169, 98, 0.5)",
              "0 0 0px rgba(201, 169, 98, 0)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Той салтанаты:
        </motion.span>
      </motion.h2>
      
      

      {/* elegant calendar with animation */}
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 flex justify-center"
      >
        <motion.div
          whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          transition={{ duration: 0.3 }}
          className="bg-white/90 backdrop-blur-md rounded-3xl px-8 py-6 shadow-2xl border border-white/40 w-[280px] relative overflow-hidden"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-gold/30" />
          <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-gold/30" />
          <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-gold/30" />
          <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-gold/30" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[#9a6f6f] text-[10px] italic mb-1"
            style={{ fontFamily: 'var(--font-script)' }}
          >
            26 маусым 2026 жыл
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-[#8b5e5e] text-3xl mb-1"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            МАУСЫМ
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-[#b48b8b] text-lg mb-4"
          >
            — 2026 —
          </motion.p>

          {/* weekdays */}
          <div className="grid grid-cols-7 text-[#9b7777] text-sm mb-2">
            {["ДС", "СС", "СР", "БС", "ЖМ", "СБ", "ЖС"].map((day, i) => (
              <motion.span
                key={day}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
              >
                {day}
              </motion.span>
            ))}
          </div>

          {/* dates */}
          <div className="grid grid-cols-7 gap-y-2 text-[#7f5f5f] text-lg">
            <span></span>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map((day) => (
              <motion.span
                key={day}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1 + day * 0.02 }}
              >
                {day}
              </motion.span>
            ))}

            {/* HEART DATE with pulsing animation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.5, type: "spring" }}
              className="relative flex items-center justify-center"
            >
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute text-6xl text-[#d97c7c]"
              >
                &#9829;
              </motion.div>
              <span className="relative z-10 text-white text-sm font-semibold">
                26
              </span>
            </motion.div>

            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1.6 }}
            >
              27
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1.65 }}
            >
              28
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1.7 }}
            >
              29
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1.75 }}
            >
              30
            </motion.span>
          </div>
        </motion.div>
      </motion.div>

      {/* time with animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-8 text-center"
      >
        <motion.p
          animate={{
            textShadow: [
              "0 0 10px rgba(231, 208, 161, 0.3)",
              "0 0 25px rgba(231, 208, 161, 0.6)",
              "0 0 10px rgba(231, 208, 161, 0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-[#e7d0a1] text-2xl tracking-[0.2em] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Сағат: 19:00
        </motion.p>
      </motion.div>

      {/* ornament with animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex justify-center mt-10"
      >
        <motion.img
          animate={{ 
            filter: [
              "drop-shadow(0 0 5px rgba(255,255,255,0.1))",
              "drop-shadow(0 0 15px rgba(255,255,255,0.3))",
              "drop-shadow(0 0 5px rgba(255,255,255,0.1))"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          src="https://grizly.club/uploads/posts/2022-12/1671768734_grizly-club-p-kazakhskii-zheltii-ornament-26.png"
          alt="ornament"
          className="w-36 opacity-90"
        />
      </motion.div>

    </motion.div>
  </section>
)
}
