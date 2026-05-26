import { useState } from 'react'
import { bloques } from '@/data/contenido'

export function SeccionIntroduccion() {
  const [activo, setActivo] = useState(0)
  const bloque = bloques[activo]

  return (
    <section id="introduccion" className="py-24 bg-stone-950 border-t border-stone-800">
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex items-center gap-6 mb-16">
          <div>
            <p className="text-amber-500 text-[10px] font-mono tracking-[0.4em] uppercase mb-1">— Marco conceptual</p>
            <h2 className="text-stone-100 font-black text-4xl" style={{ fontFamily: 'Georgia, serif' }}>
              Introducción
            </h2>
          </div>
          <div className="h-px flex-1 bg-stone-800" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Timeline lateral */}
          <div className="lg:col-span-4 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-stone-800" />
            <div className="space-y-2">
              {bloques.map((b, i) => (
                <button
                  key={b.id}
                  onClick={() => setActivo(i)}
                  className={`relative w-full text-left pl-10 pr-4 py-5 transition-all duration-300 group ${
                    activo === i ? 'bg-stone-900 border-l-2 border-amber-500' : 'hover:bg-stone-900/50'
                  }`}
                >
                  <div className={`absolute left-[13px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
                    activo === i ? 'bg-amber-500 border-amber-500' : 'bg-stone-950 border-stone-600 group-hover:border-stone-400'
                  }`} />
                  <span className={`block text-[10px] font-mono tracking-[0.3em] mb-1 ${activo === i ? 'text-amber-500' : 'text-stone-600'}`}>
                    {b.id}
                  </span>
                  <span className={`block font-bold text-sm ${activo === i ? 'text-stone-100' : 'text-stone-500 group-hover:text-stone-300'}`}
                    style={{ fontFamily: 'Georgia, serif' }}>
                    {b.titulo}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Panel de contenido */}
          <div className="lg:col-span-8">
            <div className="border border-stone-800 p-8 min-h-[320px] relative overflow-hidden">
              <div
                className="absolute -right-4 -top-8 text-stone-900 font-black select-none pointer-events-none"
                style={{ fontFamily: 'Georgia, serif', fontSize: '12rem', lineHeight: 1, opacity: 0.3 }}
              >
                {bloque.id}
              </div>
              <div className="relative z-10">
                <p className="text-amber-500 text-[10px] font-mono tracking-[0.3em] uppercase mb-3">Pregunta {bloque.id}</p>
                <h3 className="text-stone-100 font-black text-3xl mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                  {bloque.titulo}
                </h3>
                <ul className="space-y-4">
                  {bloque.puntos.map((punto, i) => (
                    <li key={punto} className="flex items-start gap-4">
                      <span className="shrink-0 w-6 h-6 border border-amber-500/40 text-amber-500 text-[10px] font-mono flex items-center justify-center mt-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-stone-300 text-sm leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                        {punto}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 px-1">
              <button
                onClick={() => setActivo(a => Math.max(0, a - 1))}
                disabled={activo === 0}
                className="text-xs font-mono text-stone-500 hover:text-stone-200 disabled:opacity-20 transition-colors"
              >
                ← Anterior
              </button>
              <div className="flex gap-2">
                {bloques.map((_, i) => (
                  <button key={i} onClick={() => setActivo(i)}
                    className={`h-1.5 rounded-full transition-all duration-200 ${activo === i ? 'bg-amber-500 w-4' : 'bg-stone-700 w-1.5 hover:bg-stone-500'}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActivo(a => Math.min(bloques.length - 1, a + 1))}
                disabled={activo === bloques.length - 1}
                className="text-xs font-mono text-stone-500 hover:text-stone-200 disabled:opacity-20 transition-colors"
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