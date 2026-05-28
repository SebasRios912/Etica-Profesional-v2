import { useState } from 'react'
import { bloques } from '@/data/contenido'

export function SeccionIntroduccion() {
  const [activo, setActivo] = useState(0)
  const bloque = bloques[activo]

  return (
    <section id="introduccion" className="py-24" style={{ background: '#1a1a2e', borderTop: '1px solid var(--border-light)', color: 'var(--text)' }}>
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex items-center gap-6 mb-16">
          <div>
            <p className="text-accent text-[10px] font-mono tracking-[0.4em] uppercase mb-1">— Marco conceptual</p>
            <h2 className="text-stone-100 font-black text-4xl" style={{ fontFamily: 'Georgia, serif' }}>
              Introducción
            </h2>
          </div>
          <div className="h-px flex-1 bg-stone-800" />
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div className="hidden lg:block">
            <img 
              src="/imagenes/INTRODUCCION.jpg"
              alt="Introducción"
              className="w-full rounded-2xl object-cover"
              style={{ aspectRatio: '9/16' }}
            />
          </div>

          <div>
            <div className="relative mb-8">
              <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: 'var(--border-light)' }} />
              <div className="space-y-2 ml-10">
                {bloques.map((b, i) => (
                  <button
                    key={b.id}
                    onClick={() => setActivo(i)}
                    className={`relative w-full text-left pl-10 pr-4 py-5 transition-all duration-300 group ${
                      activo === i ? 'bg-white/5 border-l-2 border-accent' : 'hover:bg-white/10'
                    }`}
                    style={{ color: activo === i ? 'var(--text)' : 'var(--text-muted-dark)' }}
                  >
                    <div className={`absolute left-[13px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 transition-all duration-300`}
                      style={{
                        background: activo === i ? 'var(--c1)' : 'transparent',
                        borderColor: activo === i ? 'var(--c1)' : 'rgba(148,163,184,0.8)',
                      }}
                    />
                    <span className="block text-[10px] font-mono tracking-[0.3em] mb-1" style={{ color: activo === i ? 'var(--c1)' : 'var(--text-muted-dark)' }}>
                      {b.id}
                    </span>
                    <span className="block font-bold text-sm" style={{ fontFamily: 'Georgia, serif', color: activo === i ? 'var(--text)' : 'var(--text-muted-dark)' }}>
                      {b.titulo}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="border border-white/10 p-8 min-h-[320px] relative overflow-hidden rounded-[2rem]" style={{ background: 'rgba(255,255,255,0.04)' }}>
              <div
                className="absolute -right-4 -top-8 text-white font-black select-none pointer-events-none"
                style={{ fontFamily: 'Georgia, serif', fontSize: '12rem', lineHeight: 1, opacity: 0.15 }}
              >
                {bloque.id}
              </div>
              <div className="relative z-10 flex flex-col items-end">
                <p className="text-accent text-[10px] font-mono tracking-[0.3em] uppercase mb-3">Pregunta {bloque.id}</p>
                <h3 className="text-white font-black text-3xl mb-8 text-right" style={{ fontFamily: 'Georgia, serif' }}>
                  {bloque.titulo}
                </h3>
                <ul className="space-y-4 w-full">
                  {bloque.puntos.map((punto, i) => (
                    <li key={punto} className="flex items-start gap-4">
                      <span className="shrink-0 w-6 h-6 border border-accent-2/40 text-accent-2 text-[10px] font-mono flex items-center justify-center mt-0.5">
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
                className="text-xs font-mono text-stone-300 hover:text-white disabled:opacity-20 transition-colors"
              >
                ← Anterior
              </button>
              <div className="flex gap-2">
                {bloques.map((_, i) => (
                  <button key={i} onClick={() => setActivo(i)}
                    className={`h-1.5 rounded-full transition-all duration-200 ${activo === i ? 'bg-accent w-4' : 'bg-stone-700 w-1.5 hover:bg-stone-500'}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActivo(a => Math.min(bloques.length - 1, a + 1))}
                disabled={activo === bloques.length - 1}
                className="text-xs font-mono text-stone-300 hover:text-white disabled:opacity-20 transition-colors"
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