"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface TimelineEvent {
  time: string
  title: string
  position: "left" | "right"
}

const events: TimelineEvent[] = [
  { time: "18:00", title: "ҚОНАҚТАР\nЖИНАЛУЫ", position: "right" },
  { time: "19:00", title: "ТОЙДЫҢ\nБАСТАЛУЫ", position: "left" },
  { time: "23:00", title: "ТОЙДЫҢ\nАЯҚТАЛУЫ", position: "right" },
]

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Heart position along the path (0 to 1)
  const heartProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1])
  
  return (
    <section 
      ref={containerRef}
      className="relative py-20 px-4 bg-white overflow-hidden"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="timelinePattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#timelinePattern)" />
        </svg>
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 
          className="text-4xl md:text-5xl text-primary mb-4"
          style={{ fontFamily: 'var(--font-script)' }}
        >
          Той бағдарламасы
        </h2>
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gold/50" />
          <div className="w-2 h-2 rotate-45 bg-gold/70" />
          <div className="h-px w-12 bg-gold/50" />
        </div>
      </motion.div>

      {/* Timeline container */}
      <div className="relative max-w-lg mx-auto h-[500px]">
        {/* SVG curved path */}
        <svg 
          className="absolute left-1/2 -translate-x-1/2 w-full h-full" 
          viewBox="0 0 200 500" 
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Main curved path */}
          <motion.path
           d="
  M100 0
  C140 70, 140 130, 100 200
  C60 270, 60 330, 100 400
  C140 470, 140 530, 100 600
"
    stroke="#3a3a3a"
    strokeWidth="0.7"
    strokeLinecap="round"
    opacity="0.85"
    fill="none"
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#6b3a3a" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
         
        </svg>

        {/* Animated heart that follows scroll */}
<motion.div
  style={{ 
    top: useTransform(heartProgress, [0, 1], ["15%", "75%"]),
    left: useTransform(
  heartProgress,
  [0, 0.25, 0.5, 0.75, 1],
  ["50%", "63%", "50%", "37%", "50%"]
),
  }}
  className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
>
  <motion.div
    animate={{ 
      scale: [1, 1.04, 1],
    }}
    transition={{ 
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="relative"
  >
    {/* Elegant Heart */}
    <svg 
      width="52"
      height="52"
      viewBox="0 0 64 64"
      fill="none"
    >
      <path
        d="
          M32 56
          C32 56 10 40 10 22
          C10 12 17 6 25 6
          C30 6 32 10 32 10
          C32 10 34 6 39 6
          C47 6 54 12 54 22
          C54 40 32 56 32 56
        "
        fill="#9c3944"
      />

      <path
        d="M23 15 C20 16, 18 19, 18 23"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </motion.div>
</motion.div>

       {/* Timeline events */}
{events.map((event, index) => {
  const yPosition =
    index === 0 ? "10%" :
    index === 1 ? "45%" :
    "80%"

  const xPosition = "8%"

  const textAlign =
    event.position === "left"
      ? "text-left"
      : "text-right"

  return (
    <motion.div
      key={index}
      initial={{ 
        opacity: 0, 
        x: event.position === "left" ? -50 : 50 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0 
      }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: 0.3 + index * 0.2,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`absolute ${textAlign}`}
      style={{ 
        top: yPosition,
        width: "35%",
        ...(event.position === "left"
          ? { left: xPosition }
          : { right: xPosition }),
      }}
    >
              {/* Time */}
              <motion.p
                animate={{
                  textShadow: [
                    "0 0 0px rgba(0, 0, 0, 0)",
                    "0 0 10px rgba(107, 58, 58, 0.3)",
                    "0 0 0px rgba(0, 0, 0, 0)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                className="text-2xl md:text-3xl text-primary font-light mb-1"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {event.time}
              </motion.p>
              
              {/* Title */}
              <p 
                className="text-xs md:text-sm text-primary/70 tracking-wider leading-relaxed whitespace-pre-line"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {event.title}
              </p>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom ornament */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex justify-center mt-12"
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
          src="https://grizly.club/uploads/posts/2022-12/1671768734_grizly-club-p-kazakhskii-zheltii-ornament-26.png"
          alt="ornament"
          className="w-24 opacity-50"
        />
      </motion.div>
    </section>
  )
}
