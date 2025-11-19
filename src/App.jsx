import React, { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trust from './components/Trust'
import ProblemSolution from './components/ProblemSolution'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import HowWeWork from './components/HowWeWork'
import ROICalculator from './components/ROICalculator'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  const [lang, setLang] = useState('es')
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.body.style.backgroundColor = theme === 'dark' ? '#0B0F14' : '#FFFFFF'
  }, [theme])

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#E5E7EB]">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.08),transparent_50%)]" />
      <Navbar onLangChange={setLang} lang={lang} onToggleTheme={() => setTheme(theme==='dark'?'light':'dark')} theme={theme} />
      <main>
        <Hero lang={lang} />
        <Trust lang={lang} />
        <ProblemSolution lang={lang} />
        <Services lang={lang} />
        <CaseStudies lang={lang} />
        <HowWeWork lang={lang} />
        <ROICalculator lang={lang} />
        <Pricing lang={lang} />
        <Testimonials lang={lang} />
        <FinalCTA lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  )
}

export default App
