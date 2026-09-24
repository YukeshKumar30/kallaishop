import { useEffect, useMemo, useState, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import Reveal from './Reveal'
import { galleryCategories, galleryItems } from '../data/gallery'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = useMemo(
    () =>
      activeFilter === 'All'
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeFilter),
    [activeFilter]
  )

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const showNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length))
  }, [filtered.length])

  const showPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length))
  }, [filtered.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') showNext()
      if (e.key === 'ArrowLeft') showPrev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, closeLightbox, showNext, showPrev])

  const activeItem = lightboxIndex !== null ? filtered[lightboxIndex] : null

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-wine mb-3">
                Curated Portfolio
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-plum text-balance">
                A Glimpse Into Our Work
              </h2>
              <p className="mt-2 text-ink/70 max-w-xl">
                Explore our signature gifts, photography moments, and luxury event decorations.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  aria-pressed={activeFilter === cat}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    activeFilter === cat
                      ? 'bg-wine text-ivory shadow-card'
                      : 'bg-plum/5 text-plum hover:bg-plum/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 4 Images Across the Frame (>2 images per frame) */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
          {filtered.map((item, i) => (
            <Reveal key={item.id} delay={i * 80}>
              <div
                role="button"
                tabIndex={0}
                onClick={() => openLightbox(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') openLightbox(i)
                }}
                className="group relative rounded-3xl overflow-hidden shadow-card bg-plum-dark aspect-[3/4] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-wine"
                aria-label={`View ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/90 via-plum-dark/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-ivory/90 text-plum shadow-sm">
                  {item.category}
                </span>

                <span className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-plum-dark/60 text-ivory grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={14} />
                </span>

                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <h3 className="font-display text-base font-semibold text-ivory line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-ivory/70 line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-[100] bg-plum-dark/95 backdrop-blur-md flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close gallery"
            className="absolute top-5 right-5 grid place-items-center w-11 h-11 rounded-full bg-ivory/10 text-ivory hover:bg-ivory/20 transition-colors"
          >
            <X size={22} />
          </button>

          {filtered.length > 1 && (
            <button
              type="button"
              onClick={showPrev}
              aria-label="Previous image"
              className="absolute left-3 sm:left-6 grid place-items-center w-11 h-11 rounded-full bg-ivory/10 text-ivory hover:bg-ivory/20 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <figure className="max-w-3xl w-full text-center">
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="w-full max-h-[75vh] object-contain rounded-2xl shadow-soft"
            />
            <figcaption className="mt-4 text-ivory">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-champagne text-plum uppercase tracking-wider mb-2">
                {activeItem.category}
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-semibold">
                {activeItem.title}
              </h4>
              <p className="text-sm text-ivory/70 mt-1 max-w-lg mx-auto">
                {activeItem.subtitle}
              </p>
            </figcaption>
          </figure>

          {filtered.length > 1 && (
            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-3 sm:right-6 grid place-items-center w-11 h-11 rounded-full bg-ivory/10 text-ivory hover:bg-ivory/20 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      )}
    </section>
  )
}
