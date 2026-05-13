"use client"

import { useState, useEffect, useRef } from "react"
import HeroSection from "@/components/hero-section"
import InvitationSection from "@/components/invitation-section"
import DateSection from "@/components/date-section"
import VenueSection from "@/components/venue-section"
import TimelineSection from "@/components/timeline-section"
import LocationSection from "@/components/location-section"
import ParentsSection from "@/components/parents-section"
import CountdownSection from "@/components/countdown-section"
import FooterSection from "@/components/footer-section"
import MusicButton from "@/components/music-button"

export default function Home() {
  const [isMuted, setIsMuted] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

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

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <main 
      className="min-h-screen bg-white overflow-x-hidden"
      onClick={handleFirstInteraction}
    >
      {/* 
        МУЗЫКА ҚОСУ НҰСҚАУЛЫҒЫ:
        ========================
        1. Өз өлеңіңізді public/music папкасына салыңыз (мысалы: public/music/my-song.mp3)
        2. Төмендегі src атрибутын өзгертіңіз: src="/music/my-song.mp3"
        
        НЕМЕСЕ сыртқы сілтеме қолдансаңыз:
        - src="https://example.com/your-music.mp3" түрінде жазыңыз
        
        ҚОЛДАУ КӨРСЕТІЛЕТІН ФОРМАТТАР: MP3, WAV, OGG, AAC
      */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="audio.mp3"
      />

      {/* Kazakh-styled music button */}
      <MusicButton isMuted={isMuted} onToggle={toggleMute} />

      {/* Sections */}
      <HeroSection />
      <InvitationSection />
      <DateSection />
      <VenueSection />
      <TimelineSection />
      <LocationSection />
      <ParentsSection />
      <CountdownSection />
      <FooterSection />
    </main>
  )
}
