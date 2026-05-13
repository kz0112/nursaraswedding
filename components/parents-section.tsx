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
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5])

  return (
    <section ref={containerRef} className="relative py-24 px-4 overflow-hidden">
      {/* Background with couple hands image - ССЫЛКАНЫ ӨЗГЕРТІҢІЗ */}
      <motion.div 
        style={{ scale: imageScale, opacity: imageOpacity }}
        className="absolute inset-0 overflow-hidden"
      >
        <img 
          src="https://images.pexels.com/photos/31433506/pexels-photo-31433506.jpeg"
          alt="Қол ұстасу"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-md mx-auto text-center"
      >
        {/* White card with enhanced animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/95 backdrop-blur-md rounded-3xl px-8 py-12 shadow-2xl border border-white/50"
        >
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gold/40" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-gold/40" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-gold/40" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gold/40" />

          {/* Title with animation */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl text-primary mb-6"
            style={{ fontFamily: 'var(--font-script)' }}
          >
            Той иелері:
          </motion.h2>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"
          />

          {/* Parents names with special animation */}
          <motion.p 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-primary text-xl md:text-2xl tracking-wider relative" 
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 0px rgba(201, 169, 98, 0)",
                  "0 0 10px rgba(201, 169, 98, 0.3)",
                  "0 0 0px rgba(201, 169, 98, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ТАЛҒАТ - АЙСАУЛЕ
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Decorative divider with animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-4 mt-10"
        >
          <motion.div 
            animate={{ width: ["4rem", "5rem", "4rem"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="h-px bg-gold/50"
          />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-2 h-2 rotate-45 bg-gold"
          />
          <motion.div 
            animate={{ width: ["4rem", "5rem", "4rem"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="h-px bg-gold/50"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
