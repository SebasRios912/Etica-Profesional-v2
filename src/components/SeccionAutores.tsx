import { useState } from 'react'
import { autores } from '@/data/contenido'

export function SeccionAutores() {
  return (
    <section id="autores" className="py-24 bg-stone-100 dark:bg-stone-900">
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex items-center gap-6 mb-16">
          <div>
            <p className="text-amber-500 text-[10px] font-mono tracking-[0.4em] uppercase mb-1">— Equipo editorial</p>
            <h2 className="text-stone-900 dark:text-stone-100 font-black text-4xl" style={{ fontFamily: 'Georgia, serif' }}>
              Los Autores
            </h2>
          </div>
          <div className="h-px flex-1 bg-stone-300 dark:bg-stone-700" />
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
      style={{ perspective: '1000px', height: '280px' }}
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
          className="absolute inset-0 flex flex-col items-center justify-center bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 p-6"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="w-20 h-20 rounded-full bg-amber-500 flex items-center justify-center text-stone-950 font-black text-2xl mb-4"
            style={{ fontFamily: 'Georgia, serif' }}>
            {autor.iniciales}
          </div>
          <h3 className="text-stone-900 dark:text-stone-100 font-bold text-center text-sm leading-snug mb-1">
            {autor.nombre}
          </h3>
          <p className="text-stone-500 text-xs text-center">{autor.rol}</p>
          <p className="text-stone-400 text-xs text-center">{autor.semestre}</p>
          <p className="text-amber-500 text-[10px] mt-3 font-mono tracking-wider">{autor.nivel}</p>
          <p className="text-stone-400 text-[10px] mt-1 font-mono tracking-widest uppercase">Clic para más info</p>
        </div>

        {/* Reverso */}
        <div
          className="absolute inset-0 flex flex-col justify-center bg-amber-500 border border-amber-400 p-6"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <p className="text-stone-950 text-[10px] font-mono tracking-[0.3em] uppercase mb-4">— Contacto</p>
          <p className="text-stone-950 font-bold text-lg leading-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            {autor.nombre}
          </p>
          <div className="border-t border-stone-900/20 pt-4 space-y-2">
            <p className="text-stone-900 text-xs font-mono break-all">{autor.email}</p>
            {[autor.rol, autor.semestre, autor.nivel].map((dato) => (
              <div key={dato} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-stone-900/40" />
                <p className="text-stone-900 text-xs">{dato}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}