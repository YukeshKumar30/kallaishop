import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-5 left-4 sm:bottom-7 sm:left-7 z-40 grid place-items-center w-12 h-12 rounded-full bg-plum/90 text-ivory shadow-card hover:bg-wine transition-colors"
    >
      <ArrowUp size={20} />
    </button>
  )
}
