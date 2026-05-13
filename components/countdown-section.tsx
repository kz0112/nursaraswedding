"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
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
    <section ref={ref} className="relative py-20 px-4">
      {/* Background Image - ССЫЛКАНЫ ӨЗГЕРТІҢІЗ */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/DDvkf0Vj/2026-05-13-002206.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-lg mx-auto text-center"
      >
        {/* Title */}
        <h2 className="text-white text-lg md:text-xl tracking-widest mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
          ТОЙ САЛТАНАТЫНА ДЕЙІН
        </h2>

        {/* Countdown Timer */}
        <div className="flex items-center justify-center gap-2 md:gap-4">
          {timeUnits.map((unit, index) => (
            <div key={unit.label} className="flex items-center">
              <div className="text-center">
                <motion.div
                  key={unit.value}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="text-4xl md:text-5xl font-light text-white mb-1"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {unit.value.toString().padStart(2, '0')}
                </motion.div>
                <div className="text-xs text-white/80 tracking-wider" style={{ fontFamily: 'var(--font-serif)' }}>
                  {unit.label}
                </div>
              </div>
              {index < timeUnits.length - 1 && (
                <div className="mx-2 md:mx-4 h-12 w-px bg-white/30" />
              )}
            </div>
          ))}
        </div>

        {/* Decorative element */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <div className="h-px w-12 bg-gold-light/50"></div>
          <div className="w-2 h-2 rotate-45 border border-gold-light"></div>
          <div className="h-px w-12 bg-gold-light/50"></div>
        </div>
      </motion.div>
    </section>
  )
}
