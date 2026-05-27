import { useEffect, useState } from 'react'

interface NavbarProps {
  seccionActiva: string
}

const SECCIONES = [
  { id: 'autores', label: 'Autores' },
  { id: 'justificacion', label: 'Justificación' },
  { id: 'introduccion', label: 'Introducción' },
  { id: 'referentes', label: 'Referentes' },
]

export function Navbar({ seccionActiva }: NavbarProps) {
  const [progreso, setProgreso] = useState(0)
  const [menuAbierto, setMenuAbierto] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const total = el.scrollHeight - el.clientHeight
      setProgreso(total > 0 ? (el.scrollTop / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMenuAbierto(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b"
      style={{ background: 'rgba(7,6,26,0.95)', borderColor: 'rgba(var(--c1-rgb),0.2)' }}>

      {/* Barra de progreso */}
      <div
        className="absolute bottom-0 left-0 h-[2px] transition-all duration-150"
        style={{
          width: `${progreso}%`,
          background: 'linear-gradient(90deg, var(--c3), var(--c1), var(--c2))',
          boxShadow: '0 0 8px rgba(var(--c1-rgb),0.6)',
        }}
      />

      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer flex items-center gap-1.5 sm:gap-2 group shrink-0"
        >
          <span
            className="font-black text-lg sm:text-xl"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--c1)' }}
          >
            N
          </span>
          <span
            className="hidden sm:inline text-[10px] sm:text-xs tracking-[0.25em] uppercase transition-colors duration-200"
            style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.4)' }}
          >
            ORMATIVIDAD ÉTICA
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {SECCIONES.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className="cursor-pointer px-3 lg:px-4 py-1.5 text-[10px] lg:text-xs tracking-[0.15em] uppercase transition-all duration-200 border-b-2"
              style={{
                fontFamily: 'var(--font-mono)',
                color: seccionActiva === sec.id ? 'var(--c1)' : 'var(--muted-weak)',
                borderBottomColor: seccionActiva === sec.id ? 'var(--c1)' : 'transparent',
              }}
              onMouseEnter={(e) => {
                if (seccionActiva !== sec.id) {
                  (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.9)'
                }
              }}
              onMouseLeave={(e) => {
                if (seccionActiva !== sec.id) {
                  (e.target as HTMLElement).style.color = 'var(--muted-weak)'
                }
              }}
            >
              {sec.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Indicador de progreso numérico */}
          <div
            className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 border"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--c2)',
              borderColor: 'rgba(var(--c2-rgb),0.25)',
              background: 'rgba(var(--c2-rgb),0.05)',
            }}
          >
            {Math.round(progreso)}%
          </div>

          {/* Hamburger mobile */}
          <button
            onClick={() => setMenuAbierto(v => !v)}
            className="md:hidden flex flex-col gap-1 p-2"
            style={{ color: 'rgba(255,255,255,0.6)' }}
            aria-label="Menú de navegación"
          >
            <span className={`block w-5 h-px bg-current transition-transform duration-200 ${menuAbierto ? 'rotate-45 translate-y-[3px]' : ''}`} />
            <span className={`block w-5 h-px bg-current transition-opacity duration-200 ${menuAbierto ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-current transition-transform duration-200 ${menuAbierto ? '-rotate-45 -translate-y-[3px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: menuAbierto ? `${SECCIONES.length * 3.5}rem` : '0',
          opacity: menuAbierto ? 1 : 0,
        }}
      >
        <div className="px-4 pb-3 flex flex-col gap-1 border-t" style={{ borderColor: 'rgba(var(--c1-rgb),0.15)' }}>
          {SECCIONES.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className="text-left py-2.5 text-xs tracking-[0.2em] uppercase transition-colors"
              style={{
                fontFamily: 'var(--font-mono)',
                color: seccionActiva === sec.id ? 'var(--c1)' : 'var(--muted-weak)',
              }}
            >
              {sec.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}