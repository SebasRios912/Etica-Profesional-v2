export function Footer() {
    return (
      <footer className="bg-stone-950 border-t border-stone-800 py-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex items-end justify-between mb-10 pb-10 border-b border-stone-800">
            <div>
              <h2 className="text-amber-400 font-black text-5xl leading-none" style={{ fontFamily: 'Georgia, serif' }}>
                Normatividad Ética
              </h2>
              <p className="text-stone-500 text-xs font-mono tracking-[0.3em] mt-2 uppercase">
                Revista Estudiantil · Vol. I · 2026
              </p>
            </div>
            <div className="text-right">
              <p className="text-stone-400 text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                Institución Universitaria de Envigado
              </p>
              <p className="text-stone-600 text-xs font-mono mt-1">Ética Profesional · Semestre 2026-1</p>
            </div>
          </div>
  
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-stone-600 text-xs font-mono">Proyecto académico — Ingeniería Informática</p>
            <div className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-amber-500" />
              <p className="text-stone-600 text-xs font-mono">
                Sebastian Rios · Juan Pablo Bernal · Brayan Trujillo
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }