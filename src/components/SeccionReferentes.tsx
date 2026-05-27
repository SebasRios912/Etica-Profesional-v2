import { useState } from 'react'
import { referentes } from '@/data/contenido'
import { useReveal } from '@/hooks/useReveal'

const colorMap: Record<string, { cssVar: string }> = {
  amber:   { cssVar: '--c1' },
  blue:    { cssVar: '--c2' },
  red:     { cssVar: '--c3' },
  emerald: { cssVar: '--c2' },
  violet:  { cssVar: '--c3' },
}

export function SeccionReferentes() {
  const [expandido, setExpandido] = useState<string | null>('r1')
  const { ref, visible } = useReveal({ threshold: 0.08 })

  return (
    <section id="referentes" className="py-16 sm:py-24" style={{ background: '#f8f7fc', borderTop: '1px solid var(--border-light)', color: 'var(--text-dark)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-8" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="flex items-center gap-4 sm:gap-6 mb-10 sm:mb-16">
            <div>
              <p className="text-accent text-[9px] sm:text-[10px] font-mono tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-1" style={{ fontFamily: 'var(--font-mono)' }}>— Base académica</p>
              <h2 className="font-black text-2xl sm:text-3xl lg:text-4xl" style={{ fontFamily: 'var(--font-display)', color: '#1a1a2e' }}>
                Referentes Teóricos
              </h2>
            </div>
            <div className="h-px flex-1" style={{ background: 'var(--border-light)' }} />
          </div>
        </div>

        {/* Índice de 5 botones responsive */}
        <div className={`stagger-item ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-1 mb-12 sm:mb-16">
            {referentes.map((r) => {
              const c = colorMap[r.color]
              const activo = expandido === r.id
              return (
                <button
                  key={r.id}
                  onClick={() => setExpandido(activo ? null : r.id)}
                  className="p-2 sm:p-4 border transition-all duration-300 text-left min-h-[60px] sm:min-h-0"
                  style={activo ? { background: `var(${c.cssVar})`, borderColor: 'transparent' } : { borderColor: '#d5d0e6', background: '#ffffff' }}
                >
                  <span className="block text-lg sm:text-2xl font-black leading-none mb-0.5 sm:mb-2" style={{ fontFamily: 'var(--font-display)', color: activo ? '#07061A' : `var(${c.cssVar})` }}>
                    {r.numero}
                  </span>
                  <span className="block text-[8px] sm:text-[10px] font-mono leading-tight" style={{ fontFamily: 'var(--font-mono)', color: activo ? '#07061A' : '#38385c' }}>
                    {r.etiqueta}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Artículo expandido responsive */}
        <div className={`stagger-item ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          {referentes.map((r) => {
            const c = colorMap[r.color]
            if (expandido !== r.id) return null
            return (
              <div key={r.id} className="overflow-hidden referente-enter" style={{ border: '1px solid #d5d0e6' }}>

                <div className="grid grid-cols-1 sm:grid-cols-12">
                  <div className="sm:col-span-2 flex items-center justify-center py-6 sm:py-10" style={{ background: `var(${c.cssVar})` }}>
                    <span className="font-black opacity-80"
                      style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1, color: '#07061A' }}>
                      {r.numero}
                    </span>
                  </div>
                  <div className="sm:col-span-10 p-4 sm:p-8" style={{ background: '#ffffff' }}>
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 flex-wrap mb-3 sm:mb-4">
                      <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.2em] sm:tracking-[0.3em] uppercase px-2 sm:px-3 py-1 border" style={{ fontFamily: 'var(--font-mono)', background: `rgba(var(${c.cssVar}-rgb),0.1)`, color: `var(${c.cssVar})`, borderColor: `rgba(var(${c.cssVar}-rgb),0.3)` }}>
                        {r.etiqueta}
                      </span>
                      <span className="text-[10px] sm:text-xs font-mono" style={{ fontFamily: 'var(--font-mono)', color: '#38385c' }}>Referente {r.numero} / 05</span>
                    </div>
                    <h3 className="font-black text-lg sm:text-xl lg:text-2xl leading-snug mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-display)', color: '#1a1a2e' }}>
                      {r.titulo}
                    </h3>
                    <blockquote className="border-l-3 sm:border-l-4 pl-3 sm:pl-4 py-1" style={{ borderColor: `var(${c.cssVar})` }}>
                      <p className="italic text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: `var(${c.cssVar})` }}>
                        "{r.cita.texto}"
                      </p>
                      <cite className="block text-[9px] sm:text-[10px] font-mono tracking-wider mt-1.5 sm:mt-2 not-italic" style={{ fontFamily: 'var(--font-mono)', color: '#38385c' }}>
                        — {r.cita.autor}
                      </cite>
                    </blockquote>
                  </div>
                </div>

                <div className="p-4 sm:p-8" style={{ borderTop: '1px solid #d5d0e6' }}>
                  <div className="columns-1 md:columns-2 gap-6 sm:gap-10">
                    {r.parrafos.map((p, i) => (
                      <p key={i} className="leading-relaxed mb-4 break-inside-avoid text-xs sm:text-sm"
                        style={{ fontFamily: 'var(--font-body)', color: '#1a1a2e' }}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2" style={{ borderTop: '1px solid #d5d0e6' }}>
                  <div className="p-4 sm:p-8 border-b sm:border-b-0 sm:border-r" style={{ borderColor: '#d5d0e6', background: '#f5f4f9' }}>
                    <p className="text-[9px] sm:text-[10px] font-mono tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-3" style={{ fontFamily: 'var(--font-mono)', color: '#1a1a2e' }}>Aporte a la revista</p>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: '#1a1a2e' }}>
                      {r.aporte}
                    </p>
                  </div>
                  <div className="p-4 sm:p-8" style={{ background: '#f5f4f9' }}>
                    <p className="text-[9px] sm:text-[10px] font-mono tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-3" style={{ fontFamily: 'var(--font-mono)', color: '#38385c' }}>Referencias</p>
                    <ul className="space-y-2 sm:space-y-3">
                      {r.referencias.map((ref) => (
                        <li key={ref} className="flex items-start gap-1.5 sm:gap-2">
                            <span className="shrink-0 w-1 h-1 rounded-full mt-1.5 sm:mt-2" style={{ background: `var(${c.cssVar})` }} />
                          <p className="text-[10px] sm:text-xs leading-relaxed font-mono" style={{ fontFamily: 'var(--font-mono)', color: '#38385c' }}>{ref}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap" style={{ borderTop: '1px solid #d5d0e6' }}>
                  {referentes.map((rx) => {
                    const activo = rx.id === r.id
                    return (
                      <button key={rx.id} onClick={() => setExpandido(rx.id)}
                        className="flex-1 min-w-[60px] py-2 sm:py-3 text-[9px] sm:text-[10px] font-mono transition-colors"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          color: activo ? '#07061A' : '#38385c',
                          background: activo ? `var(${c.cssVar})` : 'transparent',
                        }}>
                        {rx.numero}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}

          {expandido === null && (
            <div className="border border-dashed p-8 sm:p-12 text-center" style={{ borderColor: '#bfbadd' }}>
              <p className="text-xs sm:text-sm font-mono" style={{ fontFamily: 'var(--font-mono)', color: '#38385c' }}>Selecciona un referente para leer el artículo</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}