import React from 'react'
import { motion } from 'framer-motion'
import { Merge, CalendarCheck2, FileSignature, BarChart3 } from 'lucide-react'

const items = [
  { icon: Merge, title: { es: 'Leads dispersos', ca: 'Leads dispersos', en: 'Scattered leads' }, desc: { es: 'Unificamos portales, web y WhatsApp.', ca: 'Unifiquem portals, web i WhatsApp.', en: 'We unify portals, website and WhatsApp.' } },
  { icon: CalendarCheck2, title: { es: 'Visitas fantasma', ca: 'Visites fantasma', en: 'Ghost showings' }, desc: { es: 'Bots que confirman, reprograman y recuerdan.', ca: 'Bots que confirmen, reprogramen i recordin.', en: 'Bots that confirm, reschedule and remind.' } },
  { icon: FileSignature, title: { es: 'Contratos y facturas', ca: 'Contractes i factures', en: 'Contracts & billing' }, desc: { es: 'Plantillas + firma + envío automático.', ca: 'Plantilles + signatura + enviament automàtic.', en: 'Templates + signing + automatic sending.' } },
  { icon: BarChart3, title: { es: 'Cero visibilidad', ca: 'Zero visibilitat', en: 'Zero visibility' }, desc: { es: 'Dashboard de negocio en tiempo real.', ca: 'Quadre de comandament en temps real.', en: 'Real-time business dashboard.' } },
]

export default function ProblemSolution({ lang }) {
  return (
    <section className="py-16" id="problema-solucion">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx*0.05 }} className="rounded-2xl border border-white/10 bg-[#121825]/60 p-5 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#7C3AED]/30 to-[#06B6D4]/30 flex items-center justify-center text-white">
                <it.icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-white" style={{ fontFamily: 'Manrope, Inter, sans-serif' }}>{it.title[lang]}</h3>
              <p className="mt-2 text-gray-300 text-sm">{it.desc[lang]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
