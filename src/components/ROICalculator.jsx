import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

export default function ROICalculator({ lang }) {
  const t = {
    es: { title: 'Calculadora de ROI', leads: 'Leads/mes', toVisit: 'Tasa a visita (%)', toClose: 'Tasa a cierre (%)', ticket: 'Ticket medio (€)', hours: 'Horas ahorradas/mes', result: 'Resultado estimado', cta: 'Verlo en mi caso' },
    ca: { title: 'Calculadora de ROI', leads: 'Leads/mes', toVisit: 'Taxa a visita (%)', toClose: 'Taxa a tancament (%)', ticket: 'Tiquet mitjà (€)', hours: 'Hores estalviades/mes', result: 'Resultat estimat', cta: 'Veure-ho en el meu cas' },
    en: { title: 'ROI Calculator', leads: 'Leads/month', toVisit: 'Visit rate (%)', toClose: 'Close rate (%)', ticket: 'Average deal (€)', hours: 'Hours saved/month', result: 'Estimated result', cta: 'See it for my case' },
  }[lang]

  const [inputs, setInputs] = useState({ leads: 200, toVisit: 30, toClose: 20, ticket: 3500, hours: 45 })

  const { extraRevenue, savings, total } = useMemo(() => {
    const visits = (inputs.leads * (inputs.toVisit/100))
    const deals = (visits * (inputs.toClose/100))
    const extra = deals * inputs.ticket * 0.15 // assume +15% uplift with automations
    const save = inputs.hours * 25 // assume 25€/h blended cost
    return { extraRevenue: Math.round(extra), savings: Math.round(save), total: Math.round(extra + save) }
  }, [inputs])

  const field = (key, label, step=1) => (
    <label className="grid gap-1 text-sm text-gray-300">
      <span>{label}</span>
      <input type="number" step={step} value={inputs[key]} onChange={e=>setInputs({ ...inputs, [key]: Number(e.target.value) })} className="w-full rounded-xl bg-[#0B0F14] border border-white/10 px-3 py-2 text-white" />
    </label>
  )

  return (
    <section className="py-16" id="roi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-[#121825]/60 p-6">
          <h3 className="text-white font-semibold" style={{ fontFamily: 'Manrope, Inter, sans-serif' }}>{t.title}</h3>
          <div className="mt-6 grid md:grid-cols-5 gap-4">
            {field('leads', t.leads)}
            {field('toVisit', t.toVisit)}
            {field('toClose', t.toClose)}
            {field('ticket', t.ticket, 100)}
            {field('hours', t.hours)}
          </div>

          <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{ once: true }} className="mt-6 grid md:grid-cols-3 gap-4 text-center">
            <div className="rounded-xl bg-black/30 border border-white/10 p-4">
              <div className="text-xs text-gray-400">€ {lang==='es'?'ventas extra':lang==='ca'?'vendes extra':'extra revenue'}</div>
              <div className="text-2xl font-semibold text-white">{extraRevenue.toLocaleString('es-ES')}</div>
            </div>
            <div className="rounded-xl bg-black/30 border border-white/10 p-4">
              <div className="text-xs text-gray-400">€ {lang==='es'?'ahorro':lang==='ca'?'estalvi':'savings'}</div>
              <div className="text-2xl font-semibold text-white">{savings.toLocaleString('es-ES')}</div>
            </div>
            <div className="rounded-xl bg-black/30 border border-white/10 p-4">
              <div className="text-xs text-gray-400">€ {lang==='es'?'total':lang==='ca'?'total':'total'}</div>
              <div className="text-2xl font-semibold text-white">{total.toLocaleString('es-ES')}</div>
            </div>
          </motion.div>

          <div className="mt-6 flex justify-center">
            <a href="#contacto" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] px-5 py-3 text-base font-semibold text-white">{t.cta}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
