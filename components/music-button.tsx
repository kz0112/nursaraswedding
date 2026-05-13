"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface MusicButtonProps {
  isMuted: boolean
  onToggle: () => void
}

export default function MusicButton({ isMuted, onToggle }: MusicButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2 
          }}
          onClick={(e) => {
            e.stopPropagation()
            onToggle()
          }}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label={isMuted ? "Музыканы қосу" : "Музыканы өшіру"}
        >
          {/* Outer glow ring */}
          <motion.div
            animate={!isMuted ? {
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.1, 0.3],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full bg-gold/30 blur-md"
          />

          {/* Main button container */}
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            {/* Kazakh ornament background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6B3A3A] via-[#8B5A5A] to-[#5a2d2d]">
              {/* Inner ornament pattern */}
              <svg 
                className="absolute inset-0 w-full h-full opacity-20" 
                viewBox="0 0 100 100"
              >
                <pattern id="kazakhPattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                  <path
                    d="M12.5 0 L25 12.5 L12.5 25 L0 12.5 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-gold-light"
                  />
                  <circle cx="12.5" cy="12.5" r="3" fill="currentColor" className="text-gold-light/30" />
                </pattern>
                <rect width="100" height="100" fill="url(#kazakhPattern)" />
              </svg>
            </div>

            {/* Gold border frame */}
            <div className="absolute inset-1 rounded-full border-2 border-gold/60" />
            <div className="absolute inset-2 rounded-full border border-gold-light/30" />

            {/* Sound icon container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {isMuted ? (
                  <motion.div
                    key="muted"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    {/* Muted icon - Kazakh style speaker */}
                    <svg 
                      className="w-7 h-7 text-gold-light drop-shadow-lg"
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5"
                    >
                      <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" fillOpacity="0.3" />
                      <path d="M11 5L6 9H2v6h4l5 4V5z" />
                      <line x1="23" y1="9" x2="17" y2="15" strokeLinecap="round" />
                      <line x1="17" y1="9" x2="23" y2="15" strokeLinecap="round" />
                    </svg>
                  </motion.div>
                ) : (
                  <motion.div
                    key="playing"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    className="relative flex items-center gap-0.5"
                  >
                    {/* Animated sound bars - Kazakh ornament style */}
                    {[0, 1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        animate={{
                          height: [8, 20, 12, 24, 8],
                          opacity: [0.6, 1, 0.8, 1, 0.6],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: "easeInOut"
                        }}
                        className="w-1.5 rounded-full"
                        style={{
                          background: `linear-gradient(to top, #C9A962, #E8D5A8)`,
                          boxShadow: '0 0 8px rgba(201, 169, 98, 0.5)',
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Shine effect */}
            <motion.div
              animate={{
                x: [-100, 100],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            />
          </div>

          {/* Decorative corner elements */}
          <div className="absolute -top-1 -left-1 w-3 h-3">
            <svg viewBox="0 0 12 12" className="w-full h-full text-gold/60">
              <path d="M0 6 L6 0 L12 6 L6 12 Z" fill="currentColor" transform="scale(0.5)" />
            </svg>
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3">
            <svg viewBox="0 0 12 12" className="w-full h-full text-gold/60">
              <path d="M0 6 L6 0 L12 6 L6 12 Z" fill="currentColor" transform="scale(0.5) translate(12, 0)" />
            </svg>
          </div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3">
            <svg viewBox="0 0 12 12" className="w-full h-full text-gold/60">
              <path d="M0 6 L6 0 L12 6 L6 12 Z" fill="currentColor" transform="scale(0.5) translate(0, 12)" />
            </svg>
          </div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3">
            <svg viewBox="0 0 12 12" className="w-full h-full text-gold/60">
              <path d="M0 6 L6 0 L12 6 L6 12 Z" fill="currentColor" transform="scale(0.5) translate(12, 12)" />
            </svg>
          </div>

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-primary/90 text-white text-xs rounded-lg whitespace-nowrap pointer-events-none"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {isMuted ? "Музыканы қосу" : "Музыканы өшіру"}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-primary/90" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
