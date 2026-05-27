import { useState } from 'react'
import { bloques } from '@/data/contenido'
import { useReveal } from '@/hooks/useReveal'

export function SeccionIntroduccion() {
  const [activo, setActivo] = useState(0)
  const bloque = bloques[activo]
  const { ref, visible } = useReveal({ threshold: 0.1 })

  return (
    <section id="introduccion" className="py-16 sm:py-24" style={{ background: '#1a1a2e', borderTop: '1px solid var(--border-light)', color: 'var(--text)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-8" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="flex items-center gap-4 sm:gap-6 mb-10 sm:mb-16">
            <div>
              <p className="text-accent text-[9px] sm:text-[10px] font-mono tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-1" style={{ fontFamily: 'var(--font-mono)' }}>— Marco conceptual</p>
              <h2 className="text-stone-100 font-black text-2xl sm:text-3xl lg:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
                Introducción
              </h2>
            </div>
            <div className="h-px flex-1 bg-stone-800" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Timeline lateral */}
          <div className={`lg:col-span-4 relative stagger-item ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
            <div className="absolute left-4 top-0 bottom-0 w-px bg-stone-800" />
            <div className="space-y-1 sm:space-y-2">
              {bloques.map((b, i) => (
                <button
                  key={b.id}
                  onClick={() => setActivo(i)}
                  className={`relative w-full text-left pl-9 sm:pl-10 pr-4 py-3 sm:py-5 transition-all duration-300 group ${
                    activo === i ? 'bg-stone-900 border-l-2 border-accent' : 'hover:bg-stone-900/50'
                  }`}
                >
                  <div className={`absolute left-[13px] top-1/2 -translate-y-1/2 w-2 h-2.5 sm:w-2.5 rounded-full border-2 transition-all duration-300 ${
                    activo === i ? 'bg-accent border-accent' : 'bg-stone-950 border-stone-600 group-hover:border-stone-400'
                  }`} />
                  <span className={`block text-[9px] sm:text-[10px] font-mono tracking-[0.2em] sm:tracking-[0.3em] mb-0.5 sm:mb-1 ${activo === i ? 'text-accent' : 'text-stone-600'}`}
                    style={{ fontFamily: 'var(--font-mono)' }}>
                    {b.id}
                  </span>
                  <span className={`block font-bold text-xs sm:text-sm ${activo === i ? 'text-stone-100' : 'text-stone-500 group-hover:text-stone-300'}`}
                    style={{ fontFamily: 'var(--font-display)' }}>
                    {b.titulo}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Panel de contenido */}
          <div className={`lg:col-span-8 stagger-item ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <div key={activo} className="referente-enter border border-stone-800 p-4 sm:p-8 min-h-[280px] sm:min-h-[320px] relative overflow-hidden">
              <div
                className="absolute -right-2 sm:-right-4 -top-4 sm:-top-8 text-stone-900 font-black select-none pointer-events-none"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(6rem, 15vw, 12rem)', lineHeight: 1, opacity: 0.2 }}
              >
                {bloque.id}
              </div>
              <div className="relative z-10">
                <p className="text-accent text-[9px] sm:text-[10px] font-mono tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-3" style={{ fontFamily: 'var(--font-mono)' }}>Pregunta {bloque.id}</p>
                <h3 className="text-stone-100 font-black text-xl sm:text-2xl lg:text-3xl mb-5 sm:mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                  {bloque.titulo}
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {bloque.puntos.map((punto, i) => (
                    <li key={punto} className="flex items-start gap-3 sm:gap-4">
                      <span className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 border border-accent-2/40 text-accent-2 text-[9px] sm:text-[10px] font-mono flex items-center justify-center mt-0.5"
                        style={{ fontFamily: 'var(--font-mono)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-stone-300 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                        {punto}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-between mt-3 sm:mt-4 px-1">
              <button
                onClick={() => setActivo(a => Math.max(0, a - 1))}
                disabled={activo === 0}
                className="text-[10px] sm:text-xs font-mono text-stone-500 hover:text-stone-200 disabled:opacity-20 transition-colors"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                ← Anterior
              </button>
              <div className="flex gap-1.5 sm:gap-2">
                {bloques.map((_, i) => (
                  <button key={i} onClick={() => setActivo(i)}
                    className={`h-1.5 rounded-full transition-all duration-200 ${activo === i ? 'bg-accent w-3 sm:w-4' : 'bg-stone-700 w-1.5 hover:bg-stone-500'}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActivo(a => Math.min(bloques.length - 1, a + 1))}
                disabled={activo === bloques.length - 1}
                className="text-[10px] sm:text-xs font-mono text-stone-500 hover:text-stone-200 disabled:opacity-20 transition-colors"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Siguiente →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}