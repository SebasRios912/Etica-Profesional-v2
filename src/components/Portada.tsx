interface PortadaProps {
  onVerContenido: () => void
}

export function Portada({ onVerContenido }: PortadaProps) {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: '#f0eef7', color: 'var(--text-dark)' }}>
      
      {/* Fondo de red animado */}
      <div className="network-bg">
        <div className="dot-grid" />
        <div className="drift-lines" />
        <div className="scan-bar" />
        <div className="network-node" style={{ top: '15%', left: '10%', animationDelay: '0s' }} />
        <div className="network-node" style={{ top: '30%', left: '70%', animationDelay: '0.8s', background: 'var(--c2)' }} />
        <div className="network-node" style={{ top: '55%', left: '25%', animationDelay: '1.6s', background: 'var(--c3)' }} />
        <div className="network-node" style={{ top: '75%', left: '60%', animationDelay: '0.4s' }} />
        <div className="network-node" style={{ top: '20%', left: '85%', animationDelay: '2.2s', background: 'var(--c2)' }} />
        <div className="network-node" style={{ top: '85%', left: '15%', animationDelay: '1.2s', background: 'var(--c3)' }} />
        <div className="network-node" style={{ top: '45%', left: '50%', animationDelay: '2.8s' }} />
      </div>

      {/* Header superior */}
      <div className="hero-footer relative z-10 border-b px-6 lg:px-12 py-3 flex items-center justify-between" style={{ borderColor: 'rgba(var(--c1-rgb),0.6)' }}>
        <span className="text-accent text-xs font-mono tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-mono)' }}>
          Vol. I — Núm. 1 — 2026
        </span>
        <span className="text-xs font-mono" style={{ color: 'var(--muted-strong)', fontFamily: 'var(--font-mono)' }}>
          Institución Universitaria de Envigado
        </span>
      </div>

      {/* Contenido principal: texto izq + ilustración der */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center">
        
        {/* LADO IZQUIERDO - TEXTO */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-12 xl:px-20 py-10 lg:py-0">
          
          <div className="flex items-center gap-4 mb-6 max-w-md">
            <div className="h-px flex-1" style={{ background: 'var(--border-light)' }} />
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase" style={{ color: 'var(--muted-strong)', fontFamily: 'var(--font-mono)' }}>
              Revista Estudiantil de Ética
            </span>
          </div>

          <div className="max-w-lg">
            <h1
              className="hero-title uppercase leading-[0.88] tracking-tight font-black"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
                fontFamily: 'var(--font-display)',
                color: 'var(--text-dark)',
              }}
            >
              Normatividad
              <br />
              <span className="text-6xl sm:text-7xl lg:text-8xl" style={{ color: 'var(--c1)' }}>Ética</span>
            </h1>

            <div className="hero-line h-1 w-full my-5" style={{ background: 'var(--c1)', borderRadius: '2px' }} />

            <p
              className="hero-subtitle font-light tracking-[0.12em] uppercase text-sm lg:text-base"
              style={{ color: '#38385c', fontFamily: 'var(--font-display)' }}
            >
              · Enfoque en Ingeniería Informática
            </p>
          </div>

          {/* Stats */}
          <div className="hero-stats flex gap-6 mt-10">
            {[
              { num: '5', label: 'Referentes' },
              { num: '3', label: 'Autores' },
              { num: '2026', label: 'Semestre' },
            ].map((item) => (
              <div key={item.num} className="text-left">
                <p className="font-black text-3xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--c2)' }}>
                  {item.num}
                </p>
                <p className="text-[10px] tracking-[0.2em] uppercase mt-1 font-mono" style={{ color: '#38385c', fontFamily: 'var(--font-mono)' }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <blockquote className="hero-quote mt-10 max-w-md">
            <p
              className="italic leading-relaxed text-sm"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted-dark)' }}
            >
              "La calidad moral de una acción no depende de sus consecuencias, sino del deber y la intención con que se realiza."
            </p>
            <cite className="block mt-2 text-xs tracking-[0.3em] uppercase not-italic" style={{ color: 'var(--c1)', fontFamily: 'var(--font-mono)' }}>
              — Immanuel Kant
            </cite>
          </blockquote>

          <button
            onClick={onVerContenido}
            className="hero-cta btn-modern mt-8 self-start"
          >
            <span>Abrir revista</span>
            <span style={{ display: 'inline-block', transition: 'transform 0.2s' }} className="group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* LADO DERECHO - ILUSTRACIÓN TÉCNICA */}
        <div className="hidden lg:flex w-1/2 h-full items-center justify-center relative">
          <div className="tech-dots" />
          
          {/* Anillos orbitales */}
          <div className="orbit-ring" style={{ width: '220px', height: '220px' }}>
            <div className="orbit-dot" />
          </div>
          <div className="orbit-ring-2" style={{ width: '300px', height: '300px' }}>
            <div className="orbit-dot" style={{ background: 'var(--c3)' }} />
          </div>
          
          {/* Nodo central */}
          <div className="tech-node z-10" />

          {/* Símbolos de código flotantes */}
          <span className="tech-symbol" style={{ top: '15%', right: '25%', animationDelay: '0s', fontSize: '2rem' }}>{'{ }'}</span>
          <span className="tech-symbol" style={{ top: '25%', left: '15%', animationDelay: '1s', fontSize: '1.5rem' }}>{'</>'}</span>
          <span className="tech-symbol" style={{ bottom: '20%', right: '20%', animationDelay: '2s', fontSize: '1.8rem' }}>{'/* */'}</span>
          <span className="tech-symbol" style={{ bottom: '30%', left: '10%', animationDelay: '0.5s', fontSize: '1.2rem' }}>{'0101'}</span>
          <span className="tech-symbol" style={{ top: '10%', left: '30%', animationDelay: '1.5s', fontSize: '1rem' }}>{'<html>'}</span>
          
          {/* Líneas decorativas SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.15 }}>
            <line x1="0%" y1="30%" x2="100%" y2="50%" stroke="var(--c1)" strokeWidth="1" strokeDasharray="4 4" className="tech-line" />
            <line x1="20%" y1="100%" x2="80%" y2="40%" stroke="var(--c3)" strokeWidth="1" strokeDasharray="4 4" className="tech-line" style={{ animationDirection: 'reverse' }} />
            <line x1="60%" y1="0%" x2="30%" y2="100%" stroke="var(--c2)" strokeWidth="1" strokeDasharray="4 4" className="tech-line" style={{ animationDelay: '0.5s' }} />
          </svg>
        </div>
      </div>

      {/* Versión móvil de la ilustración */}
      <div className="lg:hidden absolute right-0 bottom-0 w-40 h-40 opacity-30 pointer-events-none">
        <div className="tech-dots" />
        <div className="orbit-ring" style={{ width: '120px', height: '120px', left: '10px', top: '10px' }}>
          <div className="orbit-dot" />
        </div>
        <div className="tech-node" style={{ width: '50px', height: '50px', left: '25px', top: '25px' }} />
        <span className="tech-symbol" style={{ top: '20%', right: '10%', fontSize: '1.2rem' }}>{'{ }'}</span>
      </div>

      {/* Footer inferior */}
      <div className="hero-footer relative z-10 border-t px-6 lg:px-12 py-3 flex items-center justify-between" style={{ borderColor: 'var(--border-light)' }}>
        <span className="text-[10px] font-mono tracking-widest" style={{ color: 'var(--muted-strong)', fontFamily: 'var(--font-mono)' }}>
          ISSN — 2026 — IUE
        </span>
        <span className="text-[10px] font-mono" style={{ color: 'var(--muted-strong)', fontFamily: 'var(--font-mono)' }}>
          Ética Profesional · Ing. Informática
        </span>
      </div>
    </section>
  )
}

export default Portada