import { useState } from 'react'
import { referentes } from '@/data/contenido'

const colorMap: Record<string, { accent: string; bg: string; border: string; tag: string }> = {
  amber:   { accent: 'text-amber-400',   bg: 'bg-amber-500',   border: 'border-amber-500',   tag: 'bg-amber-500/10 text-amber-400 border-amber-500/30' },
  blue:    { accent: 'text-blue-400',    bg: 'bg-blue-500',    border: 'border-blue-500',    tag: 'bg-blue-500/10 text-blue-400 border-blue-500/30' },
  red:     { accent: 'text-red-400',     bg: 'bg-red-500',     border: 'border-red-500',     tag: 'bg-red-500/10 text-red-400 border-red-500/30' },
  emerald: { accent: 'text-emerald-400', bg: 'bg-emerald-500', border: 'border-emerald-500', tag: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
  violet:  { accent: 'text-violet-400',  bg: 'bg-violet-500',  border: 'border-violet-500',  tag: 'bg-violet-500/10 text-violet-400 border-violet-500/30' },
}

export function SeccionReferentes() {
  const [expandido, setExpandido] = useState<string | null>('r1')

  return (
    <section id="referentes" className="py-24 bg-white dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex items-center gap-6 mb-16">
          <div>
            <p className="text-amber-500 text-[10px] font-mono tracking-[0.4em] uppercase mb-1">— Base académica</p>
            <h2 className="text-stone-900 dark:text-stone-100 font-black text-4xl" style={{ fontFamily: 'Georgia, serif' }}>
              Referentes Teóricos
            </h2>
          </div>
          <div className="h-px flex-1 bg-stone-200 dark:bg-stone-800" />
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
                className={`p-4 border transition-all duration-300 text-left ${
                  activo ? `${c.bg} border-transparent` : `bg-white dark:bg-stone-950 ${c.border} border-opacity-40 hover:bg-stone-50 dark:hover:bg-stone-900`
                }`}
              >
                <span className={`block text-2xl font-black leading-none mb-2 ${activo ? 'text-stone-950' : c.accent}`}
                  style={{ fontFamily: 'Georgia, serif' }}>
                  {r.numero}
                </span>
                <span className={`block text-[10px] font-mono leading-tight ${activo ? 'text-stone-900' : 'text-stone-500'}`}>
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
            <div key={r.id} className="border border-stone-200 dark:border-stone-800 overflow-hidden">

              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className={`lg:col-span-2 ${c.bg} flex items-center justify-center py-10 lg:py-0`}>
                  <span className="text-stone-950 font-black opacity-80"
                    style={{ fontFamily: 'Georgia, serif', fontSize: '5rem', lineHeight: 1 }}>
                    {r.numero}
                  </span>
                </div>
                <div className="lg:col-span-10 p-8 bg-stone-50 dark:bg-stone-900">
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                    <span className={`text-[10px] font-mono tracking-[0.3em] uppercase px-3 py-1 border ${c.tag}`}>
                      {r.etiqueta}
                    </span>
                    <span className="text-stone-400 text-xs font-mono">Referente {r.numero} / 05</span>
                  </div>
                  <h3 className="text-stone-900 dark:text-stone-100 font-black text-2xl leading-snug mb-4"
                    style={{ fontFamily: 'Georgia, serif' }}>
                    {r.titulo}
                  </h3>
                  <blockquote className={`border-l-4 ${c.border} pl-4 py-1`}>
                    <p className={`italic text-sm leading-relaxed ${c.accent}`} style={{ fontFamily: 'Georgia, serif' }}>
                      "{r.cita.texto}"
                    </p>
                    <cite className="block text-stone-500 text-[10px] font-mono tracking-wider mt-2 not-italic">
                      — {r.cita.autor}
                    </cite>
                  </blockquote>
                </div>
              </div>

              <div className="p-8 border-t border-stone-200 dark:border-stone-800">
                <div className="columns-1 md:columns-2 gap-10">
                  {r.parrafos.map((p, i) => (
                    <p key={i} className="text-stone-700 dark:text-stone-300 leading-relaxed mb-5 break-inside-avoid"
                      style={{ fontSize: '0.92rem', fontFamily: 'Georgia, serif' }}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-stone-200 dark:border-stone-800">
                <div className="p-8 border-b lg:border-b-0 lg:border-r border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900">
                  <p className={`text-[10px] font-mono tracking-[0.3em] uppercase ${c.accent} mb-3`}>Aporte a la revista</p>
                  <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                    {r.aporte}
                  </p>
                </div>
                <div className="p-8 bg-stone-50 dark:bg-stone-900">
                  <p className="text-stone-500 text-[10px] font-mono tracking-[0.3em] uppercase mb-3">Referencias</p>
                  <ul className="space-y-3">
                    {r.referencias.map((ref) => (
                      <li key={ref} className="flex items-start gap-2">
                        <span className={`shrink-0 w-1 h-1 rounded-full mt-2 ${c.bg}`} />
                        <p className="text-stone-500 text-xs leading-relaxed font-mono">{ref}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex border-t border-stone-200 dark:border-stone-800">
                {referentes.map((rx) => (
                  <button key={rx.id} onClick={() => setExpandido(rx.id)}
                    className={`flex-1 py-3 text-[10px] font-mono transition-colors ${
                      rx.id === r.id ? `${c.bg} text-stone-950 font-bold` : 'text-stone-500 hover:text-stone-200 hover:bg-stone-900'
                    }`}>
                    {rx.numero}
                  </button>
                ))}
              </div>
            </div>
          )
        })}

        {expandido === null && (
          <div className="border border-dashed border-stone-300 dark:border-stone-800 p-12 text-center">
            <p className="text-stone-400 text-sm font-mono">Selecciona un referente para leer el artículo</p>
          </div>
        )}
      </div>
    </section>
  )
}