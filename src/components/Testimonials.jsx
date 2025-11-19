import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { name: 'Laura M.', role: 'Directora Comercial', quote: 'Confirmamos un 27% más de visitas y el equipo se centra en cerrar.' },
  { name: 'Jordi P.', role: 'CEO', quote: 'Consolidamos portales al CRM y ahorramos horas cada semana.' },
  { name: 'Marta R.', role: 'COO', quote: 'Dejamos de perseguir no-shows. Los recordatorios por WhatsApp funcionan.' },
]

export default function Testimonials({ lang }) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, idx) => (
            <motion.figure key={idx} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{ once: true }} transition={{ delay: idx*0.05 }} className="rounded-2xl border border-white/10 bg-[#121825]/60 p-6">
              <blockquote className="text-gray-200 text-sm">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-xs text-gray-400">{t.name} · {t.role}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
