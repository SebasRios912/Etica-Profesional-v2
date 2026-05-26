import { useEffect, useState } from 'react'

interface NavbarProps {
  oscuro: boolean
  onToggleTema: () => void
  seccionActiva: string
}

const SECCIONES = [
  { id: 'autores', label: 'Autores' },
  { id: 'justificacion', label: 'Justificación' },
  { id: 'introduccion', label: 'Introducción' },
  { id: 'referentes', label: 'Referentes' },
]

export function Navbar({ oscuro, onToggleTema, seccionActiva }: NavbarProps) {
  const [progreso, setProgreso] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setProgreso(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 bg-stone-950/95 backdrop-blur-md border-b border-stone-800">
      <div className="absolute bottom-0 left-0 h-[2px] bg-amber-500 transition-all duration-150"
        style={{ width: `${progreso}%` }} />

      <div className="flex items-center justify-between px-6 py-3">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group"
        >
          <span className="text-amber-400 font-black text-xl" style={{ fontFamily: 'Georgia, serif' }}>É</span>
          <span className="text-stone-400 text-xs font-mono tracking-[0.3em] uppercase group-hover:text-stone-200 transition-colors">THICA</span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {SECCIONES.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className={`px-4 py-1.5 text-xs tracking-[0.15em] uppercase font-mono transition-all duration-200 border-b-2 ${
                seccionActiva === sec.id
                  ? 'text-amber-400 border-amber-500'
                  : 'text-stone-500 border-transparent hover:text-stone-200'
              }`}
            >
              {sec.label}
            </button>
          ))}
        </nav>

        <button
          onClick={onToggleTema}
          className="flex items-center gap-2 border border-stone-700 px-3 py-1.5 text-xs font-mono text-stone-400 hover:border-amber-500 hover:text-amber-400 transition-all duration-200"
        >
          <span>{oscuro ? '☀' : '◑'}</span>
          <span className="hidden sm:inline">{oscuro ? 'Claro' : 'Oscuro'}</span>
        </button>
      </div>
    </header>
  )
}