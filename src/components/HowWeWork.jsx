import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  { title: { es: 'Auditoría express (gratis)', ca: 'Auditoria exprés (gratuïta)', en: 'Express audit (free)' }, desc: { es: '15–30 min para entender tus flujos actuales.', ca: '15–30 min per entendre els teus fluxos actuals.', en: '15–30 mins to understand your current flows.' } },
  { title: { es: 'Blueprint de automatización (72 h)', ca: 'Blueprint d’automatització (72 h)', en: 'Automation blueprint (72h)' }, desc: { es: 'Mapa de integraciones, bots y KPIs.', ca: 'Mapa d’integracions, bots i KPIs.', en: 'Map of integrations, bots and KPIs.' } },
  { title: { es: 'MVP en 7–14 días', ca: 'MVP en 7–14 dies', en: 'MVP in 7–14 days' }, desc: { es: 'Arranca con lo esencial medido y trazable.', ca: 'Inicia amb l’essencial mesurat i traçable.', en: 'Launch essentials, measured and traceable.' } },
  { title: { es: 'Escala y soporte continuo', ca: 'Escala i suport continu', en: 'Scale and ongoing support' }, desc: { es: 'Iteramos con datos y mejores prácticas.', ca: 'Iterem amb dades i bones pràctiques.', en: 'Iterate with data and best practices.' } },
]

export default function HowWeWork({ lang }) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="relative border-s border-white/10 ms-3">
          {steps.map((s, i) => (
            <li key={i} className="mb-10 ms-6">
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] ring-2 ring-[#0B0F14]" />
              <motion.h4 initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{ once: true }} className="text-white font-semibold" style={{ fontFamily: 'Manrope, Inter, sans-serif' }}>{s.title[lang]}</motion.h4>
              <p className="text-sm text-gray-300 mt-1">{s.desc[lang]}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
