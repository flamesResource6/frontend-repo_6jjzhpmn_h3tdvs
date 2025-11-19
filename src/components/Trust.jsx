import React from 'react'
import { motion } from 'framer-motion'

export default function Trust({ lang }) {
  const label = {
    es: ['+120 agentes usan FlowProp', '-38% tiempo en tareas repetitivas', '+24% conversión a visita'],
    ca: ['+120 agents usen FlowProp', '-38% temps en tasques repetitives', '+24% conversió a visita'],
    en: ['+120 agents use FlowProp', '-38% time on repetitive tasks', '+24% visit conversion'],
  }[lang]

  const logos = Array.from({ length: 8 }).map((_, i) => (
    <div key={i} className="h-10 w-28 rounded-xl bg-white/5 border border-white/10" />
  ))

  return (
    <section className="py-14" aria-label="Trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex-1 min-w-[260px]">
            <div className="flex flex-wrap gap-4 items-center opacity-80">
              {logos}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-300 text-sm">
            {label.map((l, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx*0.05 }} className="rounded-xl border border-white/10 bg-[#121825]/60 px-4 py-3">
                {l}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
