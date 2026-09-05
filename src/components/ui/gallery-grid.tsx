import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

export type GalleryItem = {
  id: string
  title: string
  category: string
  shortDescription: string
  description: string
  features: string[]
  specs: Record<string, string>
  image: string
}

type Props = {
  items: GalleryItem[]
  categories: string[]
}

export function GalleryGrid({ items, categories }: Props) {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = useMemo(
    () => (active === 'All' ? items : items.filter((i) => i.category === active)),
    [active, items],
  )

  // Lightbox helpers
  const openAt = useCallback((idx: number) => setLightbox(idx), [])
  const close = useCallback(() => setLightbox(null), [])
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length],
  )
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length],
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightbox === null) return
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, close, prev, next])

  // Lock body scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  const currentItem = lightbox !== null ? filtered[lightbox] : null

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap justify-center gap-2">
        {['All', ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => { setActive(cat); setLightbox(null) }}
            className="relative rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-200"
            style={{ color: active === cat ? 'var(--background)' : undefined }}
          >
            {active === cat && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-foreground"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <button
                onClick={() => openAt(idx)}
                className="group w-full rounded-3xl border border-border/50 border-t-[3px] border-t-brand bg-card text-left shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-brand-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-[calc(1.5rem-3px)] bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Orange wash on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/0 to-brand/0 transition-all duration-500 group-hover:from-brand/20 group-hover:to-transparent" />
                  {/* Dark overlay + zoom icon */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/25">
                    <ZoomIn className="size-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  {/* Category badge */}
                  <span className="absolute left-4 top-4 rounded-full bg-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider text-background">
                    {item.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="px-5 pt-4 pb-3">
                  <h3 className="text-base font-bold leading-snug">{item.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {item.shortDescription}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {Object.entries(item.specs).slice(0, 2).map(([key, val]) => (
                      <span
                        key={key}
                        className="rounded-lg bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {val}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Concave ticket cut + quick-view */}
                <div className="relative px-5 pb-5">
                  <div className="pointer-events-none absolute -left-3 top-0 size-6 -translate-y-1/2 rounded-full bg-background" />
                  <div className="pointer-events-none absolute -right-3 top-0 size-6 -translate-y-1/2 rounded-full bg-background" />
                  <div className="mb-4 border-t border-dashed border-border/70" />
                  <div className="flex items-center justify-between rounded-2xl bg-foreground px-4 py-2.5">
                    <span className="text-sm font-bold text-background">Quick View</span>
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand">
                      <ZoomIn className="size-3.5 text-white" />
                    </span>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {currentItem && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm"
              onClick={close}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ type: 'spring', stiffness: 340, damping: 30 }}
              className="fixed inset-4 z-50 m-auto flex max-h-[90vh] max-w-5xl flex-col overflow-hidden rounded-[2rem] bg-[#111] text-white shadow-2xl lg:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image side */}
              <div className="relative shrink-0 lg:w-[52%]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentItem.id}
                    src={currentItem.image}
                    alt={currentItem.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-64 w-full object-cover lg:h-full"
                  />
                </AnimatePresence>
                {/* Category label on image */}
                <span className="absolute left-5 top-5 rounded-full bg-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider text-background">
                  {currentItem.category}
                </span>
              </div>

              {/* Details side */}
              <div className="flex flex-1 flex-col overflow-y-auto p-7 lg:p-9">
                {/* Close */}
                <div className="mb-6 flex items-start justify-between gap-4">
                  <h2 className="text-xl font-black leading-tight lg:text-2xl">
                    {currentItem.title}
                  </h2>
                  <button
                    onClick={close}
                    className="shrink-0 rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
                    aria-label="Close"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                <p className="text-sm leading-relaxed text-white/70">
                  {currentItem.description}
                </p>

                {/* Specs */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {Object.entries(currentItem.specs).map(([key, val]) => (
                    <div key={key} className="rounded-xl bg-white/5 px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
                        {key}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold">{val}</p>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="mt-6">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/40">
                    Key Features
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {currentItem.features.map((f) => (
                      <span
                        key={f}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-white/80"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-8">
                  <Link
                    to={`/equipment/${currentItem.id}`}
                    onClick={close}
                    className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-6 py-3.5 text-sm font-bold text-background transition-all duration-200 hover:bg-foreground/90"
                  >
                    View Full Specs
                  </Link>
                </div>
              </div>

              {/* Prev / Next */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2.5 backdrop-blur-sm transition-colors hover:bg-black/80 lg:left-[calc(52%-20px)]"
                aria-label="Previous"
              >
                <ChevronLeft className="size-5 text-white" />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2.5 backdrop-blur-sm transition-colors hover:bg-black/80"
                aria-label="Next"
              >
                <ChevronRight className="size-5 text-white" />
              </button>

              {/* Position indicator */}
              <div className="absolute bottom-5 right-6 text-xs font-bold tabular-nums text-white/30">
                {(lightbox ?? 0) + 1} / {filtered.length}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
