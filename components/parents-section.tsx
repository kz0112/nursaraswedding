"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function ParentsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-20 px-4">
      {/* Background with couple hands image - ССЫЛКАНЫ ӨЗГЕРТІҢІЗ */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/31433506/pexels-photo-31433506.jpeg"
          alt="Қол ұстасу"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-md mx-auto text-center"
      >
        {/* White card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl px-8 py-10 shadow-lg">
          {/* Title */}
          <h2 
            className="text-4xl md:text-5xl text-primary mb-6"
            style={{ fontFamily: 'var(--font-script)' }}
          >
            Той иелері:
          </h2>

          {/* Parents names */}
          <p className="text-primary text-xl md:text-2xl tracking-wider" style={{ fontFamily: 'var(--font-serif)' }}>
            ТАЛҒАТ - АЙСАУЛЕ
          </p>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <div className="h-px w-16 bg-gold/50"></div>
          <div className="w-2 h-2 rotate-45 bg-gold"></div>
          <div className="h-px w-16 bg-gold/50"></div>
        </div>
      </motion.div>
    </section>
  )
}
