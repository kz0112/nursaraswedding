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
  className="
    relative
    overflow-hidden
    py-16
    px-4
    bg-white
  "
>

  {/* soft glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-[140px] bg-[#c3ab7f]/5 blur-3xl rounded-full" />

  {/* top ornament */}
  <motion.div
    initial={{ opacity: 0, y: -15 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 1 }}
    className="flex justify-center mb-6"
  >
    
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="relative z-10 max-w-md mx-auto text-center"
  >

    {/* text */}
    <motion.h2
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 1.2,
        delay: 0.2,
      }}
      className="
        text-4xl
        md:text-5xl
        text-[#9b6d6d]
        leading-tight
      "
      style={{ fontFamily: 'var(--font-script)' }}
    >
      Сіздерді
      <br />
      асыға күтеміз!
    </motion.h2>

    {/* elegant divider */}
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
      transition={{
        duration: 1.2,
        delay: 0.5,
      }}
      className="flex items-center justify-center gap-3 my-7"
    >
      <div className="h-px w-10 bg-[#c3ab7f]/40"></div>

      <div className="w-2 h-2 rotate-45 bg-[#c3ab7f]/70"></div>

      <div className="h-px w-10 bg-[#c3ab7f]/40"></div>
    </motion.div>

    {/* bottom ornament */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        delay: 0.8,
      }}
      className="flex justify-center mb-5"
    >
      <img
        src="https://grizly.club/uploads/posts/2022-12/1671768734_grizly-club-p-kazakhskii-zheltii-ornament-26.png"
        alt="ornament"
        className="
          w-20
          opacity-50
          scale-x-[-1]
        "
      />
    </motion.div>

    {/* date */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{
        duration: 1,
        delay: 1,
      }}
      className="
        text-[#c3ab7f]
        text-xs
        tracking-[0.25em]
      "
      style={{ fontFamily: 'var(--font-serif)' }}
    >
      26 • 06 • 2026
    </motion.p>

  </motion.div>
</footer>
  )
}
