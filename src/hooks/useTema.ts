import { useState, useEffect } from 'react'

export function useTema() {
  const [oscuro, setOscuro] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    if (oscuro) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [oscuro])

  return { oscuro, toggleTema: () => setOscuro(prev => !prev) }
}