import { entrevista } from '@/data/contenido'

export function SeccionEntrevista() {
  const { titulo, etiqueta, entrevistada, videoId, preguntas, aprendizajes } = entrevista

  return (
    <section
      id="entrevista"
      className="py-24"
      style={{ background: '#1a1a2e', borderTop: '1px solid var(--border-light)', color: 'var(--text)' }}
    >
      <div className="max-w-5xl mx-auto px-8">

        {/* Header */}
        <div className="flex items-center gap-6 mb-16">
          <div>
            <p className="text-accent text-[10px] font-mono tracking-[0.4em] uppercase mb-1">
              — {etiqueta}
            </p>
            <h2 className="text-stone-100 font-black text-4xl" style={{ fontFamily: 'Georgia, serif' }}>
              {titulo}
            </h2>
          </div>
          <div className="h-px flex-1 bg-stone-800" />
        </div>

        {/* Perfil + Video */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 mb-20 items-start">

          {/* Tarjeta de perfil */}
          <div
            className="border p-8 flex flex-col items-center text-center"
            style={{ borderColor: 'rgba(var(--c1-rgb),0.2)', background: 'rgba(255,255,255,0.03)' }}
          >
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center font-black text-3xl mb-6"
              style={{ background: 'linear-gradient(135deg, var(--c1), var(--c3))', color: '#07061A', fontFamily: 'Georgia, serif' }}
            >
              {entrevistada.iniciales}
            </div>

            <h3 className="font-bold text-stone-100 text-lg leading-snug mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              {entrevistada.nombre}
            </h3>

            <div className="space-y-2 mb-5">
              {entrevistada.cargos.map((cargo) => (
                <p key={cargo} className="text-xs leading-relaxed" style={{ fontFamily: 'var(--font-mono)', color: 'var(--muted)' }}>
                  {cargo}
                </p>
              ))}
            </div>

            <div
              className="mt-2 px-3 py-1.5 text-[10px] font-mono tracking-[0.2em] uppercase border"
              style={{ color: 'var(--c2)', borderColor: 'rgba(var(--c2-rgb),0.3)', background: 'rgba(var(--c2-rgb),0.06)' }}
            >
              {entrevistada.experiencia}
            </div>

            {/* Preguntas como índice */}
            <div className="mt-8 w-full text-left">
              <p className="text-[10px] font-mono tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--muted-weak)' }}>
                Temas abordados
              </p>
              <ul className="space-y-3">
                {preguntas.map((pregunta, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="shrink-0 text-[10px] font-mono mt-0.5" style={{ color: 'var(--c1)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)', fontFamily: 'Georgia, serif' }}>
                      {pregunta}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Video */}
          <div className="flex flex-col gap-4">
            <div
              className="relative w-full overflow-hidden"
              style={{ paddingBottom: '56.25%', border: '1px solid rgba(var(--c1-rgb),0.15)', background: '#0d0c1f' }}
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={titulo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-[10px] font-mono tracking-widest uppercase text-right" style={{ color: 'var(--muted-weak)' }}>
              Entrevista completa · 2026
            </p>
          </div>
        </div>

        {/* Lo que nos dejó */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <p className="text-[10px] font-mono tracking-[0.4em] uppercase shrink-0" style={{ color: 'var(--muted-weak)' }}>
              Lo que nos dejó
            </p>
            <div className="h-px flex-1 bg-stone-800" />
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-px"
            style={{ border: '1px solid rgba(var(--c1-rgb),0.12)', background: 'rgba(var(--c1-rgb),0.08)' }}
          >
            {aprendizajes.map((item, i) => (
              <div
                key={item.numero}
                className="p-8 flex flex-col gap-4"
                style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : '#1a1a2e' }}
              >
                <span
                  className="font-black text-5xl leading-none opacity-20 select-none"
                  style={{ fontFamily: 'Georgia, serif', color: 'var(--c1)' }}
                >
                  {item.numero}
                </span>
                <h4 className="font-bold text-stone-100 text-base" style={{ fontFamily: 'Georgia, serif' }}>
                  {item.titulo}
                </h4>
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'Georgia, serif', color: 'var(--muted)' }}>
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}