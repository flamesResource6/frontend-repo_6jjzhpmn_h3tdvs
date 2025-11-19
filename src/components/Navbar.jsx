import React, { useEffect, useState } from 'react'
import { Menu, X, Globe, Moon, Sun, CalendarDays } from 'lucide-react'

const LANGS = [
  { key: 'es', label: 'ES' },
  { key: 'ca', label: 'CA' },
  { key: 'en', label: 'EN' },
]

export default function Navbar({ onLangChange, lang, onToggleTheme, theme }) {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#servicios', label: { es: 'Servicios', ca: 'Serveis', en: 'Services' } },
    { href: '#casos', label: { es: 'Casos', ca: 'Casos', en: 'Case Studies' } },
    { href: '#recursos', label: { es: 'Recursos', ca: 'Recursos', en: 'Resources' } },
    { href: '#blog', label: { es: 'Blog', ca: 'Blog', en: 'Blog' } },
    { href: '#precios', label: { es: 'Precios', ca: 'Preus', en: 'Pricing' } },
    { href: '#contacto', label: { es: 'Contacto', ca: 'Contacte', en: 'Contact' } },
  ]

  useEffect(() => {
    const handler = () => setOpen(false)
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-[#0B0F14]/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] shadow ring-1 ring-white/10" />
            <span className="font-semibold tracking-tight text-white">FlowProp</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-gray-300 hover:text-white transition">
                {l.label[lang]}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center rounded-xl border border-white/10 overflow-hidden">
              {LANGS.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => onLangChange(key)}
                  className={`px-2.5 py-1 text-xs font-medium transition ${
                    lang === key ? 'bg-white/10 text-white' : 'text-gray-300 hover:text-white'
                  }`}
                  aria-label={`Switch language to ${label}`}
                >
                  {label}
                </button>
              ))}
            </div>
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg border border-white/10 text-gray-200 hover:text-white hover:bg-white/5 transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] px-3.5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#7C3AED]/20 hover:shadow-[#06B6D4]/20 transition"
            >
              <CalendarDays size={18} />
              <span>{lang === 'es' ? 'Agendar demo' : lang === 'ca' ? 'Reservar demo' : 'Book demo'}</span>
            </a>
          </div>

          <button className="md:hidden text-gray-200" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0B0F14]">
          <div className="px-4 py-3 space-y-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="block text-gray-300 hover:text-white">{l.label[lang]}</a>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <Globe size={16} className="text-gray-400" />
              <div className="flex items-center rounded-lg border border-white/10 overflow-hidden">
                {LANGS.map(({ key, label }) => (
                  <button key={key} onClick={() => onLangChange(key)} className={`px-2 py-1 text-xs ${lang===key?'bg-white/10 text-white':'text-gray-300'}`}>{label}</button>
                ))}
              </div>
              <button onClick={onToggleTheme} className="ml-auto p-2 rounded-lg border border-white/10 text-gray-200">
                {theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}            
              </button>
            </div>
            <a href="#contacto" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] px-3 py-2 text-sm font-semibold text-white">
              <CalendarDays size={18} />
              <span>{lang === 'es' ? 'Agendar demo' : lang === 'ca' ? 'Reservar demo' : 'Book demo'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
