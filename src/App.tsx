import { useState, useEffect } from 'react'
import { useTema } from '@/hooks/useTema'
import Portada from '@/components/Portada'
import { Navbar } from '@/components/Navbar'
import { SeccionAutores } from '@/components/SeccionAutores'
import { SeccionJustificacion } from '@/components/SeccionJustificacion'
import { SeccionIntroduccion } from '@/components/SeccionIntroduccion'
import { SeccionReferentes } from '@/components/SeccionReferentes'
import { Footer } from '@/components/Footer'

const SECCIONES = ['autores', 'justificacion', 'introduccion', 'referentes']

export default function App() {
  const { oscuro, toggleTema } = useTema()
  const [mostrarRevista, setMostrarRevista] = useState(false)
  const [seccionActiva, setSeccionActiva] = useState('')

  useEffect(() => {
    if (!mostrarRevista) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setSeccionActiva(entry.target.id)
        })
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
    setTimeout(() => {
      document.getElementById('autores')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className={oscuro ? 'dark' : ''}>
      <div className="bg-white dark:bg-stone-950 min-h-screen transition-colors duration-300">
        <Portada onVerContenido={handleVerContenido} />

        {mostrarRevista && (
          <>
            <Navbar
              oscuro={oscuro}
              onToggleTema={toggleTema}
              seccionActiva={seccionActiva}
            />
            <SeccionAutores />
            <SeccionJustificacion />
            <SeccionIntroduccion />
            <SeccionReferentes />
            <Footer />
          </>
        )}
      </div>
    </div>
  )
}