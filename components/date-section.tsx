"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function DateSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

 return (
  <section ref={ref} className="relative py-52 px-4 overflow-hidden">

    {/* background */}
    <div 
      className="absolute inset-0 bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: `url('https://i.ibb.co/sdFQB0yc/Whats-App-Image-2026-05-11-at-19-50-53-1.jpg')`,
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* top fade */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white via-white/25 to-transparent z-10" />

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/25 to-transparent z-10" />

      {/* side glows */}
      <div className="absolute left-[-120px] top-0 w-[260px] h-full bg-white/5 blur-3xl" />
      <div className="absolute right-[-120px] top-0 w-[260px] h-full bg-white/5 blur-3xl" />
    </div>

    {/* content */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2 }}
      className="relative z-20 max-w-md mx-auto text-center"
    >

      <h2 
        className="
          text-5xl
          md:text-6xl
          text-[#c3ab7f]
          mb-10
          drop-shadow-[0_0_25px_rgba(255,255,255,0.12)]
        "
        style={{ fontFamily: 'var(--font-script)' }}
      >
        Той салтанаты:
      </h2>
      
      

      {/* elegant calendar */}
      <div className="mt-12 flex justify-center">
        <div
          className="
            bg-white/90
            backdrop-blur-md
            rounded-3xl
            px-8
            py-6
            shadow-2xl
            border border-white/40
            w-[280px]
          "
        >
           <p
      className="text-[#9a6f6f] text-[10px] italic mb-1"
      style={{ fontFamily: 'var(--font-script)' }}
    >
      26 маусым 2026 жыл
    </p>

          <h3
            className="text-[#8b5e5e] text-3xl mb-1"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            МАУСЫМ
          </h3>

          <p className="text-[#b48b8b] text-lg mb-4">
            — 2026 —
          </p>

          {/* weekdays */}
          <div className="grid grid-cols-7 text-[#9b7777] text-sm mb-2">
            <span>ДС</span>
            <span>СС</span>
            <span>СР</span>
            <span>БС</span>
            <span>ЖМ</span>
            <span>СБ</span>
            <span>ЖС</span>
          </div>

          {/* dates */}
          <div className="grid grid-cols-7 gap-y-2 text-[#7f5f5f] text-lg">

            <span></span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>

            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
            <span>13</span>

            <span>14</span>
            <span>15</span>
            <span>16</span>
            <span>17</span>
            <span>18</span>
            <span>19</span>
            <span>20</span>

            <span>21</span>
            <span>22</span>
            <span>23</span>
            <span>24</span>
            <span>25</span>

            {/* HEART DATE */}
            <div className="relative flex items-center justify-center">
              <div className="absolute text-6xl text-[#d97c7c]">
                ♥
              </div>
              <span className="relative z-10 text-white text-sm font-semibold">
                26
              </span>
            </div>

            <span>27</span>

            <span>28</span>
            <span>29</span>
            <span>30</span>

          </div>
        </div>
      </div>
      {/* time */}
<div className="mt-8 text-center">
  <p
    className="
      text-[#e7d0a1]
      text-2xl
      tracking-[0.2em]
      drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]
    "
    style={{ fontFamily: 'var(--font-serif)' }}
  >
    Сағат: 19:00
  </p>
</div>
      {/* ornament */}
<div className="flex justify-center mt-10">
  <img
    src="https://grizly.club/uploads/posts/2022-12/1671768734_grizly-club-p-kazakhskii-zheltii-ornament-26.png"
    alt="ornament"
    className="
      w-36
      opacity-90
      drop-shadow-[0_0_10px_rgba(255,255,255,0.08)]
    "
  />
</div>

    </motion.div>
  </section>
)
}