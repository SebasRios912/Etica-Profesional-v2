import { useState } from 'react'
import { autores } from '@/data/contenido'

export function SeccionAutores() {
  return (
    <section id="autores" className="min-h-screen flex flex-col justify-center pt-32" style={{ background: 'var(--bg-light)', color: 'var(--text-dark)' }}>
      <div className="max-w-5xl mx-auto px-8 w-full">
        <div className="flex flex-col items-center gap-6 mb-16">
          <div className="text-center">
            <p className="text-accent text-[10px] font-mono tracking-[0.4em] uppercase mb-1">— Equipo editorial</p>
            <h2 className="font-black text-4xl" style={{ fontFamily: 'Georgia, serif', color: 'var(--text-dark)' }}>
              Los Autores
            </h2>
          </div>
          <div className="h-px w-32" style={{ background: 'var(--border-light)' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {autores.map((autor) => (
            <TarjetaAutor key={autor.nombre} autor={autor} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TarjetaAutor({ autor }: { autor: typeof autores[0] }) {
  const [girada, setGirada] = useState(false)

  return (
    <div
      className="relative cursor-pointer"
      style={{ perspective: '1000px', height: '420px' }}
      onClick={() => setGirada(v => !v)}
      onMouseEnter={() => setGirada(true)}
      onMouseLeave={() => setGirada(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: girada ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Frente */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-white border p-8"
          style={{ backfaceVisibility: 'hidden', borderColor: 'var(--border-light)' }}
        >
          <div className="w-28 h-28 rounded-full flex items-center justify-center text-stone-950 font-black text-4xl mb-6 overflow-hidden" style={{ fontFamily: 'Georgia, serif', background: autor.foto ? 'white' : 'var(--c1)' }}>
            {autor.foto ? (
              <img src={autor.foto} alt={autor.nombre} className="w-full h-full object-cover object-center" />
            ) : (
              autor.iniciales
            )}
          </div>
          <h3 className="font-bold text-center text-base leading-snug mb-2" style={{ color: 'var(--text-dark)' }}>
            {autor.nombre}
          </h3>
          <p className="text-sm text-center" style={{ color: 'var(--text-muted-dark)' }}>{autor.rol}</p>
          <p className="text-sm text-center" style={{ color: 'var(--text-muted-dark)' }}>{autor.semestre}</p>
          <p className="text-accent text-xs mt-4 font-mono tracking-wider">{autor.nivel}</p>
          <p className="text-xs mt-2 font-mono tracking-widest uppercase" style={{ color: 'var(--text-muted-dark)' }}>Clic para más info</p>
        </div>

        {/* Reverso */}
        <div
          className="absolute inset-0 flex flex-col justify-center bg-accent border border-accent-2 p-8"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <p className="text-stone-950 text-xs font-mono tracking-[0.3em] uppercase mb-6">— Contacto</p>
          <p className="text-stone-950 font-bold text-xl leading-tight mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            {autor.nombre}
          </p>
          <div className="border-t border-stone-900/20 pt-4 space-y-3">
            <p className="text-stone-900 text-sm font-mono break-all">{autor.email}</p>
            {[autor.rol, autor.semestre, autor.nivel].map((dato) => (
              <div key={dato} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-stone-900/40" />
                <p className="text-stone-900 text-sm">{dato}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}