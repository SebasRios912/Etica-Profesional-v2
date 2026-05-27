import { justificacion } from '@/data/contenido'
import { useReveal } from '@/hooks/useReveal'

export function SeccionJustificacion() {
  const parrafos = justificacion.trim().split('\n\n')
  const { ref, visible } = useReveal({ threshold: 0.1 })

  return (
    <section id="justificacion" className="py-16 sm:py-24" style={{ background: '#f8f7fc', borderTop: '1px solid var(--border-light)', color: 'var(--text-dark)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-8" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="flex items-center gap-4 sm:gap-6 mb-10 sm:mb-16">
            <div>
              <p className="text-accent text-[9px] sm:text-[10px] font-mono tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-1" style={{ fontFamily: 'var(--font-mono)' }}>— Por qué esta revista</p>
              <h2 className="font-black text-2xl sm:text-3xl lg:text-4xl" style={{ fontFamily: 'var(--font-display)', color: '#1a1a2e' }}>
                Justificación
              </h2>
            </div>
            <div className="h-px flex-1" style={{ background: 'var(--border-light)' }} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className={`lg:col-span-8 stagger-item ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
            <div className="columns-1 md:columns-2 gap-6 md:gap-8">
              {parrafos.map((p, i) => (
                <p
                  key={i}
                  className="leading-relaxed mb-4 break-inside-avoid text-sm sm:text-base"
                  style={{ fontFamily: 'var(--font-body)', color: '#1a1a2e' }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className={`stagger-item ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
              <div className="border p-4 sm:p-6 card-hover" style={{ borderColor: '#d5d0e6', background: '#ffffff' }}>
                <p className="text-accent text-[9px] sm:text-[10px] font-mono tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-mono)' }}>En cifras</p>
                {[
                  { valor: '2026-1', etiqueta: 'Semestre académico' },
                  { valor: 'IUE', etiqueta: 'Institución' },
                  { valor: '5', etiqueta: 'Referentes teóricos' },
                  { valor: '3', etiqueta: 'Autores colaboradores' },
                ].map((item) => (
                  <div key={item.etiqueta} className="flex items-baseline justify-between py-2.5 sm:py-3 border-b last:border-0" style={{ borderColor: '#e8e5f0' }}>
                    <span className="font-black text-lg sm:text-xl" style={{ fontFamily: 'var(--font-display)', color: '#1a1a2e' }}>
                      {item.valor}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono" style={{ color: '#38385c', fontFamily: 'var(--font-mono)' }}>{item.etiqueta}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`stagger-item ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.45s' }}>
              <div className="p-4 sm:p-6 card-hover" style={{ background: 'linear-gradient(135deg, var(--c1), var(--c3))' }}>
                <p className="font-bold text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'var(--font-display)', color: '#07061A' }}>
                  "La ética no es un obstáculo para la innovación tecnológica; es su fundamento más sólido."
                </p>
                <p className="text-[9px] sm:text-[10px] font-mono tracking-wider mt-2 sm:mt-3" style={{ color: 'rgba(7,6,26,0.75)', fontFamily: 'var(--font-mono)' }}>— Equipo editorial, 2026</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}