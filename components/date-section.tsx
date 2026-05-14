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
    <section ref={containerRef} className="relative py-20 px-4 overflow-hidden">

      {/* Background */}
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

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white via-white/25 to-transparent z-10" />

        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/25 to-transparent z-10" />
      </motion.div>

      {/* Content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2 }}
        className="relative z-20 max-w-md mx-auto text-center"
      >

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl text-[#c3ab7f] mb-10"
          style={{ fontFamily: 'var(--font-script)' }}
        >
          Той салтанаты:
        </motion.h2>

        {/* Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <div className="bg-white/90 backdrop-blur-md rounded-3xl px-8 py-6 shadow-2xl w-[280px] relative overflow-hidden">

            <motion.p
              className="text-[#9a6f6f] text-[10px] italic mb-1"
              style={{ fontFamily: 'var(--font-script)' }}
            >
              26 маусым 2026 жыл
            </motion.p>

            <motion.h3
              className="text-[#8b5e5e] text-3xl mb-1"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              МАУСЫМ
            </motion.h3>

            <motion.p className="text-[#b48b8b] text-lg mb-4">
              — 2026 —
            </motion.p>

            {/* weekdays */}
            <div className="grid grid-cols-7 text-[#9b7777] text-sm mb-2">
              {["ДС", "СС", "СР", "БС", "ЖМ", "СБ", "ЖС"].map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>

            {/* dates */}
            <div className="grid grid-cols-7 gap-y-2 text-[#7f5f5f] text-lg">

              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <span key={day}>{day}</span>
              ))}

              {[8, 9, 10, 11, 12, 13, 14].map((day) => (
                <span key={day}>{day}</span>
              ))}

              {[15, 16, 17, 18, 19, 20, 21].map((day) => (
                <span key={day}>{day}</span>
              ))}

              {[22, 23, 24, 25].map((day) => (
                <span key={day}>{day}</span>
              ))}

              {/* 26 Friday */}
              <div className="relative flex items-center justify-center">
                <div className="absolute text-6xl text-[#d97c7c]">
                  &#9829;
                </div>

                <span className="relative z-10 text-white text-sm font-semibold">
                  26
                </span>
              </div>

              {[27, 28].map((day) => (
                <span key={day}>{day}</span>
              ))}

              {[29, 30].map((day) => (
                <span key={day}>{day}</span>
              ))}

            </div>
          </div>
        </motion.div>

        {/* Time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p
            className="text-[#e7d0a1] text-2xl tracking-[0.2em]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Сағат: 19:00
          </p>
        </motion.div>

        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex justify-center mt-10"
        >
          <img
            src="https://grizly.club/uploads/posts/2022-12/1671768734_grizly-club-p-kazakhskii-zheltii-ornament-26.png"
            alt="ornament"
            className="w-24 opacity-80"
          />
        </motion.div>

      </motion.div>

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

    </section>
  )
}