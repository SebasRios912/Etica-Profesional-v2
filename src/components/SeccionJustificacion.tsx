import { justificacion } from '@/data/contenido'

export function SeccionJustificacion() {
  const parrafos = justificacion.trim().split('\n\n')

  return (
    <section id="justificacion" className="py-24 bg-white dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex items-center gap-6 mb-16">
          <div>
            <p className="text-amber-500 text-[10px] font-mono tracking-[0.4em] uppercase mb-1">— Por qué esta revista</p>
            <h2 className="text-stone-900 dark:text-stone-100 font-black text-4xl" style={{ fontFamily: 'Georgia, serif' }}>
              Justificación
            </h2>
          </div>
          <div className="h-px flex-1 bg-stone-200 dark:bg-stone-800" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <div className="columns-1 md:columns-2 gap-8">
              {parrafos.map((p, i) => (
                <p
                  key={i}
                  className="text-stone-700 dark:text-stone-300 leading-relaxed mb-5 break-inside-avoid"
                  style={{ fontSize: '0.95rem', fontFamily: 'Georgia, serif' }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="border border-stone-200 dark:border-stone-800 p-6">
              <p className="text-amber-500 text-[10px] font-mono tracking-[0.3em] uppercase mb-4">En cifras</p>
              {[
                { valor: '2026-1', etiqueta: 'Semestre académico' },
                { valor: 'IUE', etiqueta: 'Institución' },
                { valor: '5', etiqueta: 'Referentes teóricos' },
                { valor: '3', etiqueta: 'Autores colaboradores' },
              ].map((item) => (
                <div key={item.etiqueta} className="flex items-baseline justify-between py-3 border-b border-stone-100 dark:border-stone-800 last:border-0">
                  <span className="text-stone-900 dark:text-stone-100 font-black text-xl" style={{ fontFamily: 'Georgia, serif' }}>
                    {item.valor}
                  </span>
                  <span className="text-stone-500 text-xs font-mono">{item.etiqueta}</span>
                </div>
              ))}
            </div>

            <div className="bg-amber-500 p-6">
              <p className="text-stone-950 font-bold text-sm leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                "La ética no es un obstáculo para la innovación tecnológica; es su fundamento más sólido."
              </p>
              <p className="text-stone-900/60 text-[10px] font-mono tracking-wider mt-3">— Equipo editorial, 2026</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}