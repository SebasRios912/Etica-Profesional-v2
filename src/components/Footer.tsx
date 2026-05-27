export function Footer() {
    return (
        <footer style={{ background: 'var(--bg-dark)', borderTop: '1px solid rgba(var(--c1-rgb),0.06)' }} className="py-10 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-0 mb-8 sm:mb-10 pb-8 sm:pb-10" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <div>
                <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl leading-none" style={{ fontFamily: 'var(--font-display)', color: 'var(--c4)' }}>
                  Normatividad Ética
                </h2>
                <p className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] mt-1.5 sm:mt-2 uppercase" style={{ fontFamily: 'var(--font-mono)', color: 'var(--muted)' }}>
                  Revista Estudiantil · Vol. I · 2026
                </p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-xs sm:text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--muted)' }}>
                  Institución Universitaria de Envigado
                </p>
                <p className="text-[10px] sm:text-xs mt-1" style={{ fontFamily: 'var(--font-mono)', color: 'var(--muted-weak)' }}>Ética Profesional · Semestre 2026-1</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4">
              <p className="text-[10px] sm:text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--muted-weak)' }}>Proyecto académico — Ingeniería Informática</p>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-1 h-1 rounded-full shrink-0" style={{ background: 'var(--c4)' }} />
                <p className="text-[10px] sm:text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--muted-weak)' }}>
                  Sebastian Rios · Juan Pablo Bernal · Brayan Trujillo
                </p>
              </div>
            </div>
          </div>
        </footer>
      )
  }