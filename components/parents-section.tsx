"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function ParentsSection() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1])
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.5, 1, 1, 0.5]
  )

  return (
    <section
      ref={containerRef}
      className="relative py-20 px-4 overflow-hidden"
    >
      {/* Background image */}
      <motion.div
        style={{ scale: imageScale, opacity: imageOpacity }}
        className="absolute inset-0 overflow-hidden"
      >
        <img
          src="https://images.pexels.com/photos/31433506/pexels-photo-31433506.jpeg"
          alt="Қол ұстасу"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/20 to-white" />
      </motion.div>

      {/* Content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-md mx-auto text-center"
      >
        {/* Elegant minimal card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            bg-white/82
            backdrop-blur-sm
            rounded-[30px]
            px-6
            py-8
            shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          "
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl text-primary mb-4"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Той иелері:
          </motion.h2>

          {/* Elegant line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="
              w-20
              h-px
              bg-gradient-to-r
              from-transparent
              via-gold/70
              to-transparent
              mx-auto
              mb-5
            "
          />

          {/* Names */}
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="
              text-primary
              text-[17px]
              tracking-[0.15em]
            "
            style={{ fontFamily: "var(--font-serif)" }}
          >
            <motion.span
              animate={{
                opacity: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              ТАЛҒАТ — АЙСАУЛЕ
            </motion.span>
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}