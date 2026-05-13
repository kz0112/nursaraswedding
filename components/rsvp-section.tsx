"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export default function RSVPSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [formData, setFormData] = useState({
    name: "",
    attendance: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to a server
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const attendanceOptions = [
    { value: "yes", label: "Келемін" },
    { value: "with_spouse", label: "Жұбыммен келемін" },
    { value: "no", label: "Өкінішке орай қатыса алмаймын" }
  ]

  return (
    <section ref={ref} className="py-16 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto"
      >
        {/* Title with decorative header */}
        <div className="bg-primary rounded-t-3xl py-6 px-8 text-center">
          <h2 
            className="text-3xl md:text-4xl text-white"
            style={{ fontFamily: 'var(--font-script)' }}
          >
            Сауалнама:
          </h2>
        </div>

        {/* Form Card */}
        <div className="bg-white border border-border rounded-b-3xl px-6 py-8 shadow-lg">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="text-5xl mb-4">💐</div>
              <h3 className="text-xl text-primary mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                Рахмет!
              </h3>
              <p className="text-primary/70" style={{ fontFamily: 'var(--font-serif)' }}>
                Сіздің жауабыңыз қабылданды
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form header */}
              <div className="text-center">
                <h3 className="text-primary text-lg tracking-wide mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
                  ТОЙҒА КЕЛУІҢІЗДІ
                </h3>
                <h3 className="text-primary text-lg tracking-wide" style={{ fontFamily: 'var(--font-serif)' }}>
                  РАСТАУДЫ СҰРАЙМЫЗ
                </h3>
              </div>

              {/* Name instruction */}
              <p className="text-primary/70 text-sm text-center" style={{ fontFamily: 'var(--font-serif)' }}>
                Аты-жөніңіз (жұбыңызбен келетін болсаңыз, есімін бірге жазуыңызды сұраймыз)
              </p>

              {/* Name Input */}
              <input
                type="text"
                placeholder="ЕСІМІҢІЗ"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 border border-border rounded-lg text-center text-primary placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                style={{ fontFamily: 'var(--font-serif)' }}
              />

              {/* Attendance Question */}
              <div className="space-y-4">
                <p className="text-primary text-center" style={{ fontFamily: 'var(--font-serif)' }}>
                  Тойға келесіз бе?
                </p>

                {/* Radio Options */}
                <div className="space-y-3">
                  {attendanceOptions.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div className="relative">
                        <input
                          type="radio"
                          name="attendance"
                          value={option.value}
                          checked={formData.attendance === option.value}
                          onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded-full border-2 transition-colors ${
                          formData.attendance === option.value 
                            ? 'border-primary bg-primary' 
                            : 'border-primary/40 group-hover:border-primary/60'
                        }`}>
                          {formData.attendance === option.value && (
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                          )}
                        </div>
                      </div>
                      <span className="text-primary/80 text-sm" style={{ fontFamily: 'var(--font-serif)' }}>
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={!formData.name || !formData.attendance}
                className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-white py-3 rounded-full text-sm tracking-widest transition-colors duration-300"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                ЖІБЕРУ
              </motion.button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  )
}
