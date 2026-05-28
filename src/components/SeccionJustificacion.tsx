import { justificacion } from '@/data/contenido'

export function SeccionJustificacion() {
  const parrafos = justificacion.trim().split('\n\n')

  return (
    <section id="justificacion" className="py-24" style={{ background: 'var(--bg-lighter)', borderTop: '1px solid var(--border-light)', color: 'var(--text-dark)' }}>
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex items-start gap-6 mb-6">
          <div className="pl-8 pt-8">
            <p className="text-accent text-[10px] font-mono tracking-[0.4em] uppercase mb-1">— Por qué esta revista</p>
            <h2 className="text-stone-900 font-black text-4xl" style={{ fontFamily: 'Georgia, serif', marginTop: '0.75rem', color: 'var(--text-dark)' }}>
              Justificación
            </h2>
          </div>
          <div className="h-px flex-1 mt-8" style={{ background: 'var(--border-light)' }} />
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.2fr] items-stretch">
          <div className="flex items-start justify-center">
            <div className="w-full rounded-4xl overflow-hidden shadow-[0_35px_80px_rgba(15,23,42,0.18)]" style={{ background: 'var(--bg-light)', minHeight: '360px' }}>
              <div className="aspect-[4/3] lg:aspect-[16/10] w-full">
                <img
                  src="/imagenes/Proteccion-de-datos.png"
                  alt="Protección de datos"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8">
            <div className="space-y-5">
              {parrafos.map((p, i) => (
                <p
                  key={i}
                  className="leading-relaxed"
                  style={{ fontSize: '0.95rem', fontFamily: 'Georgia, serif', color: 'var(--text-dark)' }}
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="border border-stone-200 p-6" style={{ borderColor: 'var(--border-light)' }}>
                <p className="text-accent text-[10px] font-mono tracking-[0.3em] uppercase mb-4">En cifras</p>
                {[
                  { valor: '2026-1', etiqueta: 'Semestre académico' },
                  { valor: 'IUE', etiqueta: 'Institución' },
                  { valor: '5', etiqueta: 'Referentes teóricos' },
                  { valor: '3', etiqueta: 'Autores colaboradores' },
                ].map((item) => (
                  <div key={item.etiqueta} className="flex items-baseline justify-between py-3 border-b last:border-0" style={{ borderColor: 'rgba(59,139,255,0.12)' }}>
                    <span className="text-stone-900 font-black text-xl" style={{ fontFamily: 'Georgia, serif' }}>
                      {item.valor}
                    </span>
                    <span className="text-stone-500 text-xs font-mono">{item.etiqueta}</span>
                  </div>
                ))}
              </div>

              <div className="bg-accent p-6 rounded-[1.5rem]">
                <p className="text-stone-950 font-bold text-sm leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  "La ética no es un obstáculo para la innovación tecnológica; es su fundamento más sólido."
                </p>
                <p className="text-stone-900/60 text-[10px] font-mono tracking-wider mt-3">— Equipo editorial, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}