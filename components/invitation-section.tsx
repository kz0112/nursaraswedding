"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

// Text animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    }
  }
}

const wordVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    rotateX: -90,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export default function InvitationSection() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])

  return (
    <section ref={containerRef} className="relative py-20 px-4 bg-white overflow-hidden">
      {/* Animated background ornament */}
      <motion.div 
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-[0.03]">
          <svg viewBox="0 0 400 400" className="w-full h-full text-primary">
            <pattern id="invitePattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M25 0 L50 25 L25 50 L0 25 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="25" cy="25" r="5" fill="currentColor" opacity="0.3" />
            </pattern>
            <rect width="400" height="400" fill="url(#invitePattern)" />
          </svg>
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-md mx-auto text-center"
      >
        {/* Greeting with word-by-word animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-primary/80 text-sm md:text-base tracking-wide leading-relaxed mb-6"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {["ҚҰРМЕТТІ", "АТА-АНА,", "АҒА-ІНІ,", "АПА-СІҢЛІ,"].map((word, i) => (
            <motion.span key={i} variants={wordVariants} className="inline-block mr-1.5">
              {word}
            </motion.span>
          ))}
          <br />
          {["ЖИЕН,", "БӨЛЕЛЕР,", "ДОС-ЖАРАН,", "ӘРІПТЕСТЕР,"].map((word, i) => (
            <motion.span key={i} variants={wordVariants} className="inline-block mr-1.5">
              {word}
            </motion.span>
          ))}
          <br />
          <motion.span variants={wordVariants} className="inline-block">КӨРШІЛЕР!</motion.span>
        </motion.div>

        {/* Main invitation text with animation */}
        <motion.p 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-primary/80 text-sm md:text-base tracking-wide mb-4" 
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          СІЗДЕРДІ АЯУЛЫ ҚЫЗЫМЫЗ
        </motion.p>

        {/* Bride name with special animation */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ 
            duration: 1.2, 
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-5xl md:text-6xl text-primary my-6 relative"
          style={{ fontFamily: 'var(--font-script)' }}
        >
          <motion.span
            animate={{ 
              textShadow: [
                "0 0 0px rgba(201, 169, 98, 0)",
                "0 0 20px rgba(201, 169, 98, 0.5)",
                "0 0 0px rgba(201, 169, 98, 0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Нұрсарамыз
          </motion.span>
        </motion.h2>

        {/* Invitation body with staggered animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-primary/80 text-sm md:text-base tracking-wide leading-relaxed" 
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            ҰЗАТЫЛАТЫН АҚ ДАСТАРХАНЫМЫЗДЫҢ
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            ҚАДІРЛІ ҚОНАҒЫ БОЛУҒА ШАҚЫРАМЫЗ!
          </motion.p>
        </motion.div>

        {/* Decorative divider with animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 1, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center my-10"
        >
          <motion.img
            animate={{ 
              filter: [
                "drop-shadow(0 0 0px rgba(201, 169, 98, 0))",
                "drop-shadow(0 0 15px rgba(201, 169, 98, 0.4))",
                "drop-shadow(0 0 0px rgba(201, 169, 98, 0))"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            src="https://i.ibb.co.com/zh88YY2Y/i-removebg-preview-2.png"
            alt="ornament"
            className="w-48 opacity-80"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
