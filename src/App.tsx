import { useState, useEffect } from 'react'
import { Portada } from '@/components/Portada'
import { Navbar } from '@/components/Navbar'
import { SeccionAutores } from '@/components/SeccionAutores'
import { SeccionJustificacion } from '@/components/SeccionJustificacion'
import { SeccionIntroduccion } from '@/components/SeccionIntroduccion'
import { SeccionReferentes } from '@/components/SeccionReferentes'
import { Footer } from '@/components/Footer'

const SECCIONES = ['autores', 'justificacion', 'introduccion', 'referentes']

export default function App() {
  const [mostrarRevista, setMostrarRevista] = useState(false)
  const [seccionActiva, setSeccionActiva] = useState('')

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  useEffect(() => {
    if (!mostrarRevista) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setSeccionActiva(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    SECCIONES.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [mostrarRevista])

  const handleVerContenido = () => {
    setMostrarRevista(true)
    setTimeout(() => document.getElementById('autores')?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-dark)' }}>
      <Portada onVerContenido={handleVerContenido} />
      {mostrarRevista && (
        <>
          <Navbar seccionActiva={seccionActiva} />
          <SeccionAutores />
          <SeccionJustificacion />
          <SeccionIntroduccion />
          <SeccionReferentes />
          <Footer />
        </>
      )}
    </div>
  )
}