"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function FooterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden py-20 px-4 bg-gradient-to-b from-white to-secondary/20"
    >
      {/* Animated soft glow */}
      <motion.div 
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#c3ab7f]/10 blur-3xl rounded-full" 
      />

      {/* Top ornament with animation */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.8 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex justify-center mb-8"
      >
        <motion.img
          animate={{ 
            filter: [
              "drop-shadow(0 0 0px rgba(201, 169, 98, 0))",
              "drop-shadow(0 0 10px rgba(201, 169, 98, 0.3))",
              "drop-shadow(0 0 0px rgba(201, 169, 98, 0))"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          src="https://i.ibb.co.com/zh88YY2Y/i-removebg-preview-2.png"
          alt="ornament"
          className="w-32 opacity-50"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-md mx-auto text-center"
      >
        {/* Main text with character animation */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-4xl md:text-5xl text-[#9b6d6d] leading-tight"
          style={{ fontFamily: 'var(--font-script)' }}
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 0px rgba(201, 169, 98, 0)",
                "0 0 20px rgba(201, 169, 98, 0.3)",
                "0 0 0px rgba(201, 169, 98, 0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Сіздерді
            <br />
            асыға күтеміз!
          </motion.span>
        </motion.h2>

        {/* Animated elegant divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="flex items-center justify-center gap-3 my-8"
        >
          <motion.div 
            animate={{ width: ["2.5rem", "3.5rem", "2.5rem"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="h-px bg-[#c3ab7f]/40"
          />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-2 h-2 rotate-45 bg-[#c3ab7f]/70"
          />
          <motion.div 
            animate={{ width: ["2.5rem", "3.5rem", "2.5rem"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="h-px bg-[#c3ab7f]/40"
          />
        </motion.div>

        {/* Bottom ornament with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -10 }}
          animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-6"
        >
          <img
            src="https://grizly.club/uploads/posts/2022-12/1671768734_grizly-club-p-kazakhskii-zheltii-ornament-26.png"
            alt="ornament"
            className="w-24 opacity-50 scale-x-[-1]"
          />
        </motion.div>

        {/* Date with special effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.p
            animate={{
              letterSpacing: ["0.25em", "0.35em", "0.25em"]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-[#c3ab7f] text-sm tracking-[0.25em]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            26 • 06 • 2026
          </motion.p>
        </motion.div>
      </motion.div>
    </footer>
  )
}
