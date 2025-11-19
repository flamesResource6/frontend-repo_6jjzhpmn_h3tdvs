import React from 'react'
import { motion } from 'framer-motion'

const cases = [
  { name: 'LM Real Estate', metric: { es: '+28% visitas confirmadas', ca: '+28% visites confirmades', en: '+28% confirmed visits' } },
  { name: 'Brisasol Inmobiliaria', metric: { es: '-35% tiempo en CRM', ca: '-35% temps al CRM', en: '-35% time in CRM' } },
  { name: 'Autokolecció', metric: { es: '+22% test-drives', ca: '+22% test-drives', en: '+22% test-drives' } },
]

export default function CaseStudies({ lang }) {
  return (
    <section id="casos" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, idx) => (
            <motion.article key={idx} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx*0.05 }} className="rounded-2xl overflow-hidden border border-white/10 bg-[#121825]/60">
              <div className="h-40 bg-[url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center"/>
              <div className="p-5">
                <h3 className="text-white font-semibold" style={{ fontFamily: 'Manrope, Inter, sans-serif' }}>{c.name}</h3>
                <p className="text-sm text-gray-300 mt-1">{c.metric[lang]}</p>
                <a href="#" className="mt-4 inline-block text-sm font-medium text-[#06B6D4] hover:text-white">
                  {lang==='es'?'Ver detalle':lang==='ca'?'Veure detall':'View details'}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
