import React from 'react'

export default function FinalCTA({ lang }) {
  const copy = {
    es: { title: '¿Listo para dejar al bot haciendo lo que nadie quiere hacer?', cta: 'Agendar demo' },
    ca: { title: 'A punt per deixar el bot fent el que ningú vol fer?', cta: 'Reservar demo' },
    en: { title: 'Ready to let the bot do what no one wants to do?', cta: 'Book demo' },
  }[lang]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#7C3AED]/20 to-[#06B6D4]/20 p-8 text-center">
          <h3 className="text-white text-xl font-semibold" style={{ fontFamily: 'Manrope, Inter, sans-serif' }}>{copy.title}</h3>
          <a href="#contacto" className="mt-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] px-5 py-3 text-base font-semibold text-white">{copy.cta}</a>
        </div>
      </div>
    </section>
  )
}
