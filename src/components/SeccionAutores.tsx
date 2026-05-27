import { useState } from 'react'
import { autores } from '@/data/contenido'
import { useReveal } from '@/hooks/useReveal'

export function SeccionAutores() {
  const { ref, visible } = useReveal({ threshold: 0.1 })

  return (
    <section id="autores" className="py-16 sm:py-24" style={{ background: '#eeedf4', color: 'var(--text-dark)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-8" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="flex items-center gap-4 sm:gap-6 mb-10 sm:mb-16">
            <div>
              <p className="text-accent text-[9px] sm:text-[10px] font-mono tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-1" style={{ fontFamily: 'var(--font-mono)' }}>— Equipo editorial</p>
              <h2 className="font-black text-2xl sm:text-3xl lg:text-4xl" style={{ fontFamily: 'var(--font-display)', color: '#1a1a2e' }}>
                Los Autores
              </h2>
            </div>
            <div className="h-px flex-1" style={{ background: 'var(--border-light)' }} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {autores.map((autor, i) => (
            <div key={autor.nombre} className={`stagger-item ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${i * 0.15}s` }}>
              <TarjetaAutor autor={autor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TarjetaAutor({ autor }: { autor: typeof autores[0] }) {
  const [girada, setGirada] = useState(false)

  return (
    <div
      className="relative cursor-pointer card-hover"
      style={{ perspective: '1000px', height: 'clamp(240px, 30vw, 300px)' }}
      onClick={() => setGirada(v => !v)}
      onMouseEnter={() => setGirada(true)}
      onMouseLeave={() => setGirada(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: girada ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Frente */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center border p-4 sm:p-6 rounded-sm"
          style={{ backfaceVisibility: 'hidden', background: '#f8f7fc', borderColor: '#e0dcf0' }}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center font-black text-xl sm:text-2xl mb-3 sm:mb-4"
            style={{ fontFamily: 'var(--font-display)', background: 'var(--c1)', color: '#07061A' }}>
            {autor.iniciales}
          </div>
          <h3 className="font-bold text-center text-xs sm:text-sm leading-snug mb-1" style={{ color: '#1a1a2e', fontFamily: 'var(--font-display)' }}>
            {autor.nombre}
          </h3>
          <p style={{ color: '#4a4a6a', fontSize: '0.7rem', fontFamily: 'var(--font-body)' }} className="text-center">{autor.rol}</p>
          <p style={{ color: '#38385c', fontSize: '0.7rem', fontFamily: 'var(--font-body)' }} className="text-center">{autor.semestre}</p>
          <div className="glow-line mt-2 sm:mt-3" />
          <p className="text-accent text-[9px] sm:text-[10px] mt-2 sm:mt-3 font-mono tracking-wider" style={{ fontFamily: 'var(--font-mono)' }}>{autor.nivel}</p>
          <p style={{ color: '#38385c', fontSize: '9px', fontFamily: 'var(--font-mono)' }} className="mt-1 tracking-widest uppercase">Clic para más info</p>
        </div>

        {/* Reverso */}
        <div
          className="absolute inset-0 flex flex-col justify-center p-4 sm:p-6 rounded-sm"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', background: 'var(--c1)' }}
        >
          <p className="text-[9px] sm:text-[10px] font-mono tracking-[0.3em] uppercase mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-mono)', color: '#07061A' }}>— Contacto</p>
          <p className="font-bold text-base sm:text-lg leading-tight mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-display)', color: '#07061A' }}>
            {autor.nombre}
          </p>
          <div className="border-t pt-3 sm:pt-4 space-y-1.5 sm:space-y-2" style={{ borderColor: 'rgba(7,6,26,0.2)' }}>
            <p className="text-[11px] sm:text-xs font-mono break-all" style={{ fontFamily: 'var(--font-mono)', color: '#07061A' }}>{autor.email}</p>
            {[autor.rol, autor.semestre, autor.nivel].map((dato) => (
              <div key={dato} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ background: 'rgba(7,6,26,0.4)' }} />
                <p className="text-[11px] sm:text-xs" style={{ color: '#07061A', fontFamily: 'var(--font-body)' }}>{dato}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}