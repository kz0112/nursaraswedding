"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

// Number flip animation component
function FlipNumber({ value, label }: { value: number; label: string }) {
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative">
        {/* Glow effect */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 20px rgba(201, 169, 98, 0.2)",
              "0 0 40px rgba(201, 169, 98, 0.4)",
              "0 0 20px rgba(201, 169, 98, 0.2)",
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-xl"
        />
        
        {/* Number container */}
        <motion.div
          key={value}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2 md:px-4 md:py-3 border border-white/20"
        >
          <span 
            className="text-3xl md:text-5xl font-light text-white"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {value.toString().padStart(2, '0')}
          </span>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-[10px] md:text-xs text-white/80 tracking-wider mt-2" 
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {label}
      </motion.div>
    </motion.div>
  )
}

export default function CountdownSection() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  
  // КҮНІН ӨЗГЕРТІҢІЗ - Той күні
  const targetDate = new Date("2026-06-26T19:00:00").getTime()
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const timeUnits = [
    { value: timeLeft.days, label: "КҮН" },
    { value: timeLeft.hours, label: "САҒАТ" },
    { value: timeLeft.minutes, label: "МИНУТ" },
    { value: timeLeft.seconds, label: "СЕКУНД" }
  ]

  return (
    <section ref={containerRef} className="relative py-24 px-4 overflow-hidden">
      {/* Background Image with parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://i.ibb.co.com/DDvkf0Vj/2026-05-13-002206.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0, 0.5, 0],
              y: -200,
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1.5 h-1.5 bg-gold-light/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-lg mx-auto text-center"
      >
        {/* Ornament above title */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <img
            src="https://grizly.club/uploads/posts/2022-12/1671768734_grizly-club-p-kazakhskii-zheltii-ornament-26.png"
            alt="ornament"
            className="w-24 opacity-50"
          />
        </motion.div>

        {/* Title with animation */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-lg md:text-xl tracking-widest mb-10" 
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          ТОЙ САЛТАНАТЫНА ДЕЙІН
        </motion.h2>

        {/* Countdown Timer with new design */}
        <div className="flex items-center justify-center gap-3 md:gap-5">
          {timeUnits.map((unit, index) => (
            <div key={unit.label} className="flex items-center">
              <FlipNumber value={unit.value} label={unit.label} />
              {index < timeUnits.length - 1 && (
                <motion.div 
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="mx-1 md:mx-2 text-gold-light text-2xl md:text-3xl"
                >
                  :
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Decorative element with animation */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mt-12"
        >
          <motion.div 
            animate={{ width: ["3rem", "4rem", "3rem"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="h-px bg-gradient-to-r from-transparent via-gold-light/60 to-transparent"
          />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-3 h-3 rotate-45 border border-gold-light"
          />
          <motion.div 
            animate={{ width: ["3rem", "4rem", "3rem"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="h-px bg-gradient-to-r from-transparent via-gold-light/60 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
