"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function InvitationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto text-center"
      >
        {/* Greeting */}
        <p className="text-primary/80 text-sm md:text-base tracking-wide leading-relaxed mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
          ҚҰРМЕТТІ АТА-АНА, АҒА-ІНІ, АПА-СІҢЛІ,<br />
          ЖИЕН, БӨЛЕЛЕР, ДОС-ЖАРАН, ӘРІПТЕСТЕР,<br />
          КӨРШІЛЕР!
        </p>

        {/* Main invitation text */}
        <p className="text-primary/80 text-sm md:text-base tracking-wide mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          СІЗДЕРДІ АЯУЛЫ ҚЫЗЫМЫЗ
        </p>

        {/* Bride name */}
        <h2 
          className="text-5xl md:text-6xl text-primary my-6"
          style={{ fontFamily: 'var(--font-script)' }}
        >
          Нұрсарамыз
        </h2>

        {/* Invitation body */}
        <p className="text-primary/80 text-sm md:text-base tracking-wide leading-relaxed" style={{ fontFamily: 'var(--font-serif)' }}>
          ҰЗАТЫЛАТЫН АҚ ДАСТАРХАНЫМЫЗДЫҢ<br />
          ҚАДІРЛІ ҚОНАҒЫ БОЛУҒА ШАҚЫРАМЫЗ!<br />
        </p>

        {/* Decorative divider */}
        {/* Kazakh ornament divider */}
<div className="flex justify-center my-10">
  <img
    src="https://i.ibb.co.com/zh88YY2Y/i-removebg-preview-2.png"
    alt="ornament"
    className="w-48 opacity-80"
  />
</div>
      </motion.div>
    </section>
  )
}
