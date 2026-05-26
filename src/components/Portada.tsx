import { useEffect, useRef } from 'react'

interface PortadaProps {
  onVerContenido: () => void
}

export function Portada({ onVerContenido }: PortadaProps) {
  const volRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (volRef.current) {
        volRef.current.style.opacity = volRef.current.style.opacity === '0' ? '1' : '0'
      }
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-stone-950">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23ffffff'/%3E%3Crect x='0' y='0' width='1' height='1' fill='%23000000'/%3E%3Crect x='2' y='2' width='1' height='1' fill='%23000000'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative z-10 border-b border-amber-500/60 px-8 py-3 flex items-center justify-between">
        <span className="text-amber-500 text-xs font-mono tracking-[0.3em] uppercase">
          Vol. I — Núm. 1 — 2026
        </span>
        <span className="text-stone-400 text-xs font-mono">
          Institución Universitaria de Envigado
        </span>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 py-16">

        <div className="flex items-center gap-4 mb-8 w-full max-w-4xl">
          <div className="h-px flex-1 bg-stone-700" />
          <span className="text-stone-500 text-[10px] font-mono tracking-[0.4em] uppercase">Revista Estudiantil de Ética</span>
          <div className="h-px flex-1 bg-stone-700" />
        </div>

        <div className="text-center mb-6 w-full max-w-5xl">
          <h2
            className="font-black uppercase leading-[0.88] tracking-tight text-stone-100"
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 6rem)',
              fontFamily: '"Georgia", "Times New Roman", serif',
              textShadow: '2px 2px 0 rgba(245,158,11,0.15)',
            }}
          >
            Normatividad Ética
          </h2>

          <div className="h-1 w-full bg-amber-500 my-4" />

          <h2
            className="text-stone-300 font-light tracking-[0.12em] uppercase"
            style={{ fontSize: 'clamp(0.8rem, 2.5vw, 1.2rem)' }}
          >
            · Enfoque en Ingeniería Informática
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-px w-full max-w-4xl mt-12 border border-stone-800 bg-stone-800">
          {[
            { num: '5', label: 'Referentes\nTeóricos' },
            { num: '3', label: 'Autores\nEstudiantes' },
            { num: '2026', label: 'Semestre\n2026-1' },
          ].map((item) => (
            <div key={item.num} className="bg-stone-950 px-6 py-5 text-center">
              <p className="text-amber-400 font-black text-3xl" style={{ fontFamily: 'Georgia, serif' }}>
                {item.num}
              </p>
              <p className="text-stone-500 text-[10px] tracking-[0.2em] uppercase mt-1 whitespace-pre-line leading-tight">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <blockquote className="mt-14 max-w-2xl text-center">
          <p
            className="text-stone-400 italic leading-relaxed"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1rem, 2vw, 1.15rem)' }}
          >
            "La calidad moral de una acción no depende de sus consecuencias, sino del deber y la intención con que se realiza."
          </p>
          <cite className="block mt-3 text-amber-500 text-xs tracking-[0.3em] uppercase not-italic">
            — Immanuel Kant
          </cite>
        </blockquote>

        <button
          onClick={onVerContenido}
          className="mt-14 group flex items-center gap-3 border border-amber-500 text-amber-400 px-8 py-3 text-sm tracking-[0.2em] uppercase font-mono hover:bg-amber-500 hover:text-stone-950 transition-all duration-300"
        >
          <span>Abrir revista</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      <div className="relative z-10 border-t border-stone-800 px-8 py-3 flex items-center justify-between">
        <span className="text-stone-600 text-[10px] font-mono tracking-widest">ISSN — 2026 — IUE</span>
        <span className="text-stone-600 text-[10px] font-mono">Ética Profesional · Ing. Informática</span>
      </div>
    </section>
  )
}

// Export default para compatibilidad con importaciones `import X from ...`
export default Portada