import React from 'react'
import { Mail, Twitter, Linkedin } from 'lucide-react'

export default function Footer({ lang }) {
  const links = [
    { href: '#servicios', label: { es: 'Servicios', ca: 'Serveis', en: 'Services' } },
    { href: '#casos', label: { es: 'Casos', ca: 'Casos', en: 'Case Studies' } },
    { href: '#recursos', label: { es: 'Recursos', ca: 'Recursos', en: 'Resources' } },
    { href: '#blog', label: { es: 'Blog', ca: 'Blog', en: 'Blog' } },
    { href: '#precios', label: { es: 'Precios', ca: 'Preus', en: 'Pricing' } },
    { href: '#contacto', label: { es: 'Contacto', ca: 'Contacte', en: 'Contact' } },
  ]

  return (
    <footer className="border-t border-white/10 bg-[#0B0F14] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#06B6D4]" />
            <span className="font-semibold tracking-tight text-white">FlowProp</span>
          </div>
          <p className="mt-3 text-sm text-gray-400">hola@flowprop.co</p>
          <div className="flex gap-3 mt-3 text-gray-300">
            <a href="#" aria-label="Twitter"><Twitter size={18}/></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={18}/></a>
            <a href="mailto:hola@flowprop.co" aria-label="Email"><Mail size={18}/></a>
          </div>
        </div>
        <nav className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-300">
          {links.map((l, i) => (
            <a key={i} href={l.href} className="hover:text-white">{l.label[lang]}</a>
          ))}
        </nav>
        <div className="text-xs text-gray-400 space-y-2">
          <a href="#" className="block">Aviso legal</a>
          <a href="#" className="block">Privacidad</a>
          <a href="#" className="block">Cookies</a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-6">© {new Date().getFullYear()} FlowProp</div>
    </footer>
  )
}
