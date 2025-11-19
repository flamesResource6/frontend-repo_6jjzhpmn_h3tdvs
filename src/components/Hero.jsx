import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ lang }) {
  const t = {
    es: {
      title: 'Automatizaciones con IA para inmobiliarias que convierten leads en ventas.',
      subtitle: 'Bots que cualifican, flujos que no fallan y paneles que por fin enseñan el dinero.',
      primary: 'Agendar demo',
      secondary: 'Ver casos reales',
    },
    ca: {
      title: 'Automatitzacions amb IA per a immobiliàries que converteixen leads en vendes.',
      subtitle: 'Bots que qualifiquen, fluxos que no fallen i panells que finalment ensenyen els diners.',
      primary: 'Reservar demo',
      secondary: 'Veure casos reals',
    },
    en: {
      title: 'AI automations for real estate that turn leads into sales.',
      subtitle: 'Bots that qualify, flows that don’t break, and dashboards that finally show the money.',
      primary: 'Book demo',
      secondary: 'See real cases',
    },
  }[lang]

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
              style={{ fontFamily: 'Manrope, Inter, sans-serif' }}
            >
              {t.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-5 text-lg sm:text-xl text-gray-300 max-w-2xl"
            >
              {t.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#contacto" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] px-5 py-3 text-base font-semibold text-white shadow-lg shadow-[#7C3AED]/20">
                {t.primary}
              </a>
              <a href="#casos" className="inline-flex items-center justify-center rounded-xl border border-white/10 px-5 py-3 text-base font-semibold text-white/90 hover:bg-white/5">
                {t.secondary}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_40%)]" />
    </section>
  )
}
