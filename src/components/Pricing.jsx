import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  { name: { es: 'Starter', ca: 'Starter', en: 'Starter' }, price: '€490', period: '/mes', features: { es: ['1–3 agentes', 'Bot básico', 'Embudo multi-portal', '1 dashboard'], ca: ['1–3 agents', 'Bot bàsic', 'Embuts multi-portal', '1 dashboard'], en: ['1–3 agents', 'Basic bot', 'Multi-portal funnel', '1 dashboard'] } },
  { name: { es: 'Pro', ca: 'Pro', en: 'Pro' }, price: '€990', period: '/mes', features: { es: ['Hasta 10 agentes', 'Scoring y contratos', 'Recordatorios WhatsApp', '3 dashboards'], ca: ['Fins a 10 agents', 'Scoring i contractes', 'Recordatoris WhatsApp', '3 dashboards'], en: ['Up to 10 agents', 'Scoring & contracts', 'WhatsApp reminders', '3 dashboards'] }, highlight: true },
  { name: { es: 'Enterprise', ca: 'Enterprise', en: 'Enterprise' }, price: 'A medida', period: '', features: { es: ['Integraciones avanzadas', 'SLA', 'Soporte prioritario'], ca: ['Integracions avançades', 'SLA', 'Suport prioritari'], en: ['Advanced integrations', 'SLA', 'Priority support'] } },
]

export default function Pricing({ lang }) {
  return (
    <section id="precios" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx*0.05 }} className={`rounded-2xl border ${p.highlight?'border-[#06B6D4]/40':'border-white/10'} bg-[#121825]/60 p-6` }>
              <div className="flex items-baseline justify-between">
                <h3 className="text-white font-semibold" style={{ fontFamily: 'Manrope, Inter, sans-serif' }}>{p.name[lang]}</h3>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{p.price}</div>
                  <div className="text-xs text-gray-400">{p.period}</div>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {p.features[lang].map((f, i) => (
                  <li key={i} className="flex items-start gap-2"><Check size={16} className="text-[#06B6D4] mt-0.5" /><span>{f}</span></li>
                ))}
              </ul>
              <a href="#contacto" className={`mt-5 inline-flex items-center justify-center w-full rounded-xl px-4 py-2 text-sm font-semibold text-white ${p.highlight?'bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]':'bg-white/10 hover:bg-white/20'}`}>
                {lang==='es'?'Agendar demo':lang==='ca'?'Reservar demo':'Book demo'}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
