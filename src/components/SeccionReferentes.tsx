import { useState } from 'react'
import { referentes } from '@/data/contenido'

const colorMap: Record<string, { cssVar: string }> = {
  amber:   { cssVar: '--c1' },
  blue:    { cssVar: '--c2' },
  red:     { cssVar: '--c3' },
  emerald: { cssVar: '--c2' },
  violet:  { cssVar: '--c3' },
}

const imageMap: Record<string, string> = {
  r1: '/referentes/IMMANUEL-KANT.jpg',
  r2: '/referentes/eithics.jpeg',
  r3: '/referentes/LEY-842.png',
  r4: '/referentes/COMISION-EUROPEA.jpg',
  r5: '/referentes/LIDERAZGO-ETICO.png',
}

export function SeccionReferentes() {
  const [expandido, setExpandido] = useState<string | null>('r1')

  return (
    <section id="referentes" className="py-24" style={{ background: 'var(--bg-lighter)', borderTop: '1px solid var(--border-light)', color: 'var(--text-dark)' }}>
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex items-center gap-6 mb-16">
          <div>
            <p className="text-accent text-[10px] font-mono tracking-[0.4em] uppercase mb-1">— Base académica</p>
            <h2 className="text-stone-900 font-black text-4xl" style={{ fontFamily: 'Georgia, serif', color: 'var(--text-dark)' }}>
              Referentes Teóricos
            </h2>
          </div>
          <div className="h-px flex-1" style={{ background: 'var(--border-light)' }} />
        </div>

        {/* Índice de 5 botones */}
        <div className="grid grid-cols-5 gap-1 mb-16">
          {referentes.map((r) => {
            const c = colorMap[r.color]
            const activo = expandido === r.id
            return (
              <button
                key={r.id}
                onClick={() => setExpandido(activo ? null : r.id)}
                className={`p-4 border transition-all duration-300 text-left`}
                style={activo ? { background: `var(${c.cssVar})`, borderColor: 'transparent' } : undefined}
              >
                <span className={`block text-2xl font-black leading-none mb-2`} style={{ fontFamily: 'Georgia, serif', color: activo ? '#07061A' : `var(${c.cssVar})` }}>
                  {r.numero}
                </span>
                <span className={`block text-[10px] font-mono leading-tight ${activo ? 'text-stone-900' : ''}`} style={activo ? undefined : { color: 'var(--text-muted-dark)' }}>
                  {r.etiqueta}
                </span>
              </button>
            )
          })}
        </div>

        {/* Artículo expandido */}
          {referentes.map((r) => {
            const c = colorMap[r.color]
          if (expandido !== r.id) return null
          return (
            <div key={r.id} className="overflow-hidden" style={{ border: '1px solid var(--border-light)' }}>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className={`lg:col-span-2 flex items-center justify-center py-10 lg:py-0`} style={{ background: `var(${c.cssVar})` }}>
                  <span className="text-stone-950 font-black opacity-80"
                    style={{ fontFamily: 'Georgia, serif', fontSize: '5rem', lineHeight: 1 }}>
                    {r.numero}
                  </span>
                </div>
                <div className="lg:col-span-6 p-8" style={{ background: 'var(--bg-lighter)' }}>
                  <div className="flex items-start justify-start gap-4 flex-wrap mb-4">
                    <span className={`text-[10px] font-mono tracking-[0.3em] uppercase px-3 py-1 border`} style={{ background: `rgba(var(${c.cssVar}-rgb),0.1)`, color: `var(${c.cssVar})`, borderColor: `rgba(var(${c.cssVar}-rgb),0.3)` }}>
                      {r.etiqueta}
                    </span>
                    <span className="text-[10px] font-mono" style={{ color: 'var(--text-muted-dark)' }}>Referente {r.numero} / 05</span>
                  </div>
                  <h3 className="font-black text-2xl leading-snug mb-4"
                    style={{ fontFamily: 'Georgia, serif', color: 'var(--text-dark)' }}>
                    {r.titulo}
                  </h3>
                  <blockquote className={`border-l-4 pl-4 py-1`} style={{ borderColor: `var(${c.cssVar})` }}>
                    <p className={`italic text-sm leading-relaxed`} style={{ fontFamily: 'Georgia, serif', color: `var(${c.cssVar})` }}>
                      "{r.cita.texto}"
                    </p>
                    <cite className="block text-stone-500 text-[10px] font-mono tracking-wider mt-2 not-italic">
                      — {r.cita.autor}
                    </cite>
                  </blockquote>
                </div>
                <div className="lg:col-span-4 p-8 flex items-start justify-center" style={{ background: 'var(--bg-lighter)' }}>
                  {imageMap[r.id] ? (
                    <img
                      src={imageMap[r.id]}
                      alt={r.titulo}
                      className="w-full max-w-[320px] rounded-[2rem] object-cover shadow-[0_30px_60px_rgba(15,23,42,0.12)]"
                      loading="lazy"
                    />
                  ) : null}
                </div>
              </div>

              <div className="p-8" style={{ borderTop: '1px solid var(--border-light)' }}>
                <div className="columns-1 md:columns-2 gap-10">
                  {r.parrafos.map((p, i) => (
                    <p key={i} className="leading-relaxed mb-5 break-inside-avoid"
                      style={{ fontSize: '0.92rem', fontFamily: 'Georgia, serif', color: 'var(--text-dark)' }}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2" style={{ borderTop: '1px solid var(--border-light)' }}>
                <div className="p-8 border-b lg:border-b-0 lg:border-r" style={{ borderColor: 'var(--border-light)', background: 'var(--bg-lighter)' }}>
                  <p className="text-[10px] font-mono tracking-[0.3em] uppercase mb-3" style={{ color: `var(${c.cssVar})` }}>Aporte a la revista</p>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: 'Georgia, serif', color: 'var(--text-dark)' }}>
                    {r.aporte}
                  </p>
                </div>
                <div className="p-8" style={{ background: 'var(--bg-lighter)' }}>
                  <p className="text-[10px] font-mono tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--text-muted-dark)' }}>Referencias</p>
                  <ul className="space-y-3">
                    {r.referencias.map((ref) => (
                      <li key={ref} className="flex items-start gap-2">
                          <span className={`shrink-0 w-1 h-1 rounded-full mt-2`} style={{ background: `var(${c.cssVar})` }} />
                        <p className="text-xs leading-relaxed font-mono" style={{ color: 'var(--text-dark)' }}>{ref}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex" style={{ borderTop: '1px solid var(--border-light)' }}>
                {referentes.map((rx) => (
                  <button key={rx.id} onClick={() => setExpandido(rx.id)}
                    className="flex-1 py-3 text-[10px] font-mono transition-colors"
                    style={rx.id === r.id ? { background: `var(${c.cssVar})`, color: '#07061A', fontWeight: 700 } : { color: 'var(--text-muted-dark)' }}>
                    {rx.numero}
                  </button>
                ))}
              </div>
            </div>
          )
        })}

        {expandido === null && (
          <div className="border-dashed p-12 text-center" style={{ borderColor: 'var(--border-light)' }}>
            <p className="text-sm font-mono" style={{ color: 'var(--text-muted-dark)' }}>Selecciona un referente para leer el artículo</p>
          </div>
        )}
      </div>
    </section>
  )
}