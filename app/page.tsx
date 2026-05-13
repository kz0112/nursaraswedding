"use client"

import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"
import HeroSection from "@/components/hero-section"
import InvitationSection from "@/components/invitation-section"
import DateSection from "@/components/date-section"
import LocationSection from "@/components/location-section"
import ParentsSection from "@/components/parents-section"
import CountdownSection from "@/components/countdown-section"

import FooterSection from "@/components/footer-section"

export default function Home() {
  const [isMuted, setIsMuted] = useState(true)
  const [showMuteButton, setShowMuteButton] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Show mute button after a short delay
    const timer = setTimeout(() => {
      setShowMuteButton(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(() => {
          // Autoplay was prevented
        })
      }
    }
  }, [isMuted])

  const handleFirstInteraction = () => {
    if (isMuted && audioRef.current) {
      setIsMuted(false)
      audioRef.current.play().catch(() => {})
    }
  }

  return (
    <main 
      className="min-h-screen bg-white overflow-x-hidden"
      onClick={handleFirstInteraction}
    >
      {/* Background Music - ССЫЛКАНЫ ӨЗГЕРТІҢІЗ */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://limewire.com/d/3Fjxj#Tqq72534MG"
      />

      {/* Mute/Unmute Button */}
      {showMuteButton && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIsMuted(!isMuted)
          }}
          className="fixed bottom-6 right-6 z-50 p-3 bg-primary/90 text-white rounded-full shadow-lg hover:bg-primary transition-all duration-300"
          aria-label={isMuted ? "Музыканы қосу" : "Музыканы өшіру"}
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
      )}

      {/* Sections */}
      <HeroSection />
      <InvitationSection />
      <DateSection />
      <LocationSection />
      <ParentsSection />
      <CountdownSection />
      <FooterSection />
    </main>
  )
}
