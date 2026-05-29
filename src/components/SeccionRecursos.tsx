import { referentes } from '@/data/contenido'

const colorMap: Record<string, string> = {
  amber:   '--c1',
  blue:    '--c2',
  red:     '--c3',
  emerald: '--c2',
  violet:  '--c3',
}

const recursosDigitales = [
  {
    titulo: 'ACM Code of Ethics',
    descripcion: 'Código de ética y conducta profesional de la Association for Computing Machinery.',
    url: 'https://www.acm.org/code-of-ethics',
    etiqueta: 'ACM · 2018',
  },
  {
    titulo: 'IEEE Code of Ethics',
    descripcion: 'Principios éticos del Institute of Electrical and Electronics Engineers.',
    url: 'https://www.ieee.org/about/corporate/governance/p7-8.html',
    etiqueta: 'IEEE · 2020',
  },
  {
    titulo: 'Propuesta de Reglamento IA',
    descripcion: 'Propuesta de la Comisión Europea sobre inteligencia artificial responsable.',
    url: 'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:52021PC0206',
    etiqueta: 'Comisión Europea · 2021',
  },
]

const documentosInstitucionales = [
  {
    titulo: 'Ley 842 de 2003',
    descripcion: 'Regula el ejercicio de la ingeniería y sus profesiones auxiliares en Colombia.',
    etiqueta: 'Congreso de Colombia',
  },
  {
    titulo: 'Ley 1273 de 2009',
    descripcion: 'Tipifica conductas relacionadas con delitos informáticos en Colombia.',
    etiqueta: 'Congreso de Colombia',
  },
]

export function SeccionRecursos() {
  return (
    <section
      id="recursos"
      className="py-24"
      style={{
        background: 'var(--bg-lighter)',
        borderTop: '1px solid var(--border-light)',
        color: 'var(--text-dark)',
      }}
    >
      <div className="max-w-5xl mx-auto px-8">

        {/* Header */}
        <div className="flex items-center gap-6 mb-16">
          <div>
            <p className="text-accent text-[10px] font-mono tracking-[0.4em] uppercase mb-1">
              — Fuentes y lecturas
            </p>
            <h2
              className="font-black text-4xl"
              style={{ fontFamily: 'Georgia, serif', color: 'var(--text-dark)' }}
            >
              Recursos y Bibliografía
            </h2>
          </div>
          <div className="h-px flex-1" style={{ background: 'var(--border-light)' }} />
        </div>

        {/* Bibliografía */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <p
              className="text-[10px] font-mono tracking-[0.4em] uppercase shrink-0"
              style={{ color: 'var(--text-muted-dark)' }}
            >
              Referencias bibliográficas
            </p>
            <div className="h-px flex-1" style={{ background: 'var(--border-light)' }} />
          </div>

          <div className="space-y-6">
            {referentes.map((r) => {
              const cssVar = colorMap[r.color]
              return (
                <div
                  key={r.id}
                  className="p-6 border"
                  style={{ borderColor: 'var(--border-light)', background: 'var(--bg-light)' }}
                >
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <span
                        className="font-black text-2xl leading-none"
                        style={{ fontFamily: 'Georgia, serif', color: `var(${cssVar})` }}
                      >
                        {r.numero}
                      </span>
                      <div
                        className="w-px flex-1"
                        style={{
                          background: `var(${cssVar})`,
                          opacity: 0.3,
                          minHeight: '20px',
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4 flex-wrap">
                        <span
                          className="text-[10px] font-mono tracking-[0.2em] uppercase px-2 py-1 border"
                          style={{
                            color: `var(${cssVar})`,
                            borderColor: `var(${cssVar})`,
                          }}
                        >
                          {r.etiqueta}
                        </span>
                        <span
                          className="text-xs font-mono"
                          style={{ color: 'var(--text-muted-dark)' }}
                        >
                          {r.titulo}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {r.referencias.map((ref) => (
                          <li key={ref} className="flex items-start gap-3">
                            <span
                              className="shrink-0 w-1 h-1 rounded-full mt-2"
                              style={{ background: `var(${cssVar})` }}
                            />
                            <p
                              className="text-sm leading-relaxed font-mono"
                              style={{ color: 'var(--text-dark)' }}
                            >
                              {ref}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Recursos digitales */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <p
              className="text-[10px] font-mono tracking-[0.4em] uppercase shrink-0"
              style={{ color: 'var(--text-muted-dark)' }}
            >
              Recursos digitales
            </p>
            <div className="h-px flex-1" style={{ background: 'var(--border-light)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recursosDigitales.map((recurso) => (
              <div
                key={recurso.titulo}
                onClick={() => window.open(recurso.url, '_blank')}
                className="group p-6 border transition-all duration-300 cursor-pointer"
                style={{ borderColor: 'var(--border-light)', background: 'var(--bg-light)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(59,139,255,0.4)'
                  e.currentTarget.style.background = 'rgba(59,139,255,0.04)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-light)'
                  e.currentTarget.style.background = 'var(--bg-light)'
                }}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h4
                    className="font-bold text-sm leading-snug"
                    style={{ fontFamily: 'Georgia, serif', color: 'var(--text-dark)' }}
                  >
                    {recurso.titulo}
                  </h4>
                  <span style={{ color: 'var(--c1)', fontSize: '1.125rem' }}>↗</span>
                </div>
                <p
                  className="text-xs leading-relaxed mb-4"
                  style={{ fontFamily: 'Georgia, serif', color: 'var(--text-muted-dark)' }}
                >
                  {recurso.descripcion}
                </p>
                <span
                  className="text-[10px] font-mono tracking-[0.2em] uppercase"
                  style={{ color: 'var(--c1)' }}
                >
                  {recurso.etiqueta}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Documentos institucionales */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <p
              className="text-[10px] font-mono tracking-[0.4em] uppercase shrink-0"
              style={{ color: 'var(--text-muted-dark)' }}
            >
              Documentos institucionales
            </p>
            <div className="h-px flex-1" style={{ background: 'var(--border-light)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documentosInstitucionales.map((doc) => (
              <div
                key={doc.titulo}
                className="p-6 border"
                style={{ borderColor: 'var(--border-light)', background: 'var(--bg-light)' }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="shrink-0 text-2xl font-black leading-none"
                    style={{ fontFamily: 'Georgia, serif', color: 'var(--c3)' }}
                  >
                    §
                  </span>
                  <div>
                    <h4
                      className="font-bold text-sm mb-2"
                      style={{ fontFamily: 'Georgia, serif', color: 'var(--text-dark)' }}
                    >
                      {doc.titulo}
                    </h4>
                    <p
                      className="text-xs leading-relaxed mb-3"
                      style={{ fontFamily: 'Georgia, serif', color: 'var(--text-muted-dark)' }}
                    >
                      {doc.descripcion}
                    </p>
                    <span
                      className="text-[10px] font-mono tracking-[0.2em] uppercase"
                      style={{ color: 'var(--text-muted-dark)' }}
                    >
                      {doc.etiqueta}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}