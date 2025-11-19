import React from 'react'
import { motion } from 'framer-motion'
import { Bot, Network, MessageSquareMore, FileText, BarChart4, PlugZap } from 'lucide-react'

const services = [
  { icon: Bot, text: {
    es: 'Bot de Cualificación Inmobiliaria (ES/CA/EN) con scoring y triaje.',
    ca: 'Bot de Qualificació Immobiliària (ES/CA/EN) amb scoring i triaje.',
    en: 'Real-estate Qualification Bot (ES/CA/EN) with scoring and triage.',
  }},
  { icon: Network, text: {
    es: 'Embudo multi-portal (Idealista/Fotocasa/Habitaclia) a CRM.',
    ca: 'Embuts multi-portal (Idealista/Fotocasa/Habitaclia) cap al CRM.',
    en: 'Multi-portal funnel (Idealista/Fotocasa/Habitaclia) into your CRM.',
  }},
  { icon: MessageSquareMore, text: {
    es: 'Seguimiento por WhatsApp (mensajes, recordatorios, no-shows).',
    ca: 'Seguiment per WhatsApp (missatges, recordatoris, no-shows).',
    en: 'WhatsApp follow-ups (messages, reminders, no-shows).',
  }},
  { icon: FileText, text: {
    es: 'Generación de contratos (variables + firma) y facturación (Holded/Verifactu).',
    ca: 'Generació de contractes (variables + signatura) i facturació (Holded/Verifactu).',
    en: 'Contract generation (vars + signing) and invoicing (Holded/Verifactu).',
  }},
  { icon: BarChart4, text: {
    es: 'Dashboards (Supabase/BigQuery) con KPIs clave.',
    ca: 'Dashboards (Supabase/BigQuery) amb KPIs clau.',
    en: 'Dashboards (Supabase/BigQuery) with core KPIs.',
  }},
  { icon: PlugZap, text: {
    es: 'Integraciones: n8n/Make, WhatsApp Business API, Calendly, Salesforce...',
    ca: 'Integracions: n8n/Make, WhatsApp Business API, Calendly, Salesforce...',
    en: 'Integrations: n8n/Make, WhatsApp Business API, Calendly, Salesforce...',
  }},
]

export default function Services({ lang }) {
  return (
    <section id="servicios" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx*0.05 }} className="rounded-2xl border border-white/10 bg-[#121825]/60 p-5">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#7C3AED]/30 to-[#06B6D4]/30 flex items-center justify-center text-white">
                <s.icon size={18} />
              </div>
              <p className="mt-4 text-gray-200 text-sm">{s.text[lang]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
