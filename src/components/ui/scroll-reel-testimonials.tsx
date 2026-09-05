import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

/**
 * Placeholder testimonials: swap with real client quotes when available.
 * Portrait images use pravatar.cc (reliable face placeholders).
 * Each portrait in the reel pool is independent of the testimonial author.
 */
const TESTIMONIALS = [
  {
    quote: 'Akundy delivered our offshore containers on time and in perfect condition. Their team understood the operational pressure we were under and never missed a beat.',
    author: 'Operations Manager',
    role: 'Oil & Gas Sector',
    company: 'Apex Integrated Ventures Ltd',
    portrait: 'https://i.pravatar.cc/300?img=11',
  },
  {
    quote: 'From equipment leasing to logistics coordination, they handled everything professionally. The quality of their fabrication work exceeded our specifications.',
    author: 'Project Director',
    role: 'Marine Operations',
    company: 'Aero Atlantic Nigeria Limited',
    portrait: 'https://i.pravatar.cc/300?img=32',
  },
  {
    quote: 'Their HSE standards are top tier. We felt confident having Akundy on site, and their response time for emergency supply requests is unmatched in Port Harcourt.',
    author: 'Site Safety Lead',
    role: 'Construction & Industrial',
    company: 'Apex Agro Allied Product & Multipurpose Farms Ltd',
    portrait: 'https://i.pravatar.cc/300?img=47',
  },
  {
    quote: 'The procurement team sourced specialised equipment we could not find locally, and delivered within the agreed window. Reliable partners who get things done.',
    author: 'Supply Chain Manager',
    role: 'Offshore Support',
    company: 'Independent Operator',
    portrait: 'https://i.pravatar.cc/300?img=15',
  },
]

// Portrait pool for the reel columns, separate from testimonial authors
const REEL_PORTRAITS = [
  'https://i.pravatar.cc/300?img=1',
  'https://i.pravatar.cc/300?img=5',
  'https://i.pravatar.cc/300?img=8',
  'https://i.pravatar.cc/300?img=11',
  'https://i.pravatar.cc/300?img=15',
  'https://i.pravatar.cc/300?img=20',
  'https://i.pravatar.cc/300?img=25',
  'https://i.pravatar.cc/300?img=32',
  'https://i.pravatar.cc/300?img=36',
  'https://i.pravatar.cc/300?img=40',
  'https://i.pravatar.cc/300?img=44',
  'https://i.pravatar.cc/300?img=47',
]

// Split into 3 columns, then duplicate each for seamless loop
const COL_SIZE = 4
const COLS = [
  [...REEL_PORTRAITS.slice(0, COL_SIZE), ...REEL_PORTRAITS.slice(0, COL_SIZE)],
  [...REEL_PORTRAITS.slice(COL_SIZE, COL_SIZE * 2), ...REEL_PORTRAITS.slice(COL_SIZE, COL_SIZE * 2)],
  [...REEL_PORTRAITS.slice(COL_SIZE * 2), ...REEL_PORTRAITS.slice(COL_SIZE * 2)],
]

// Directions and speeds per column
const COL_CONFIG = [
  { direction: 'up', duration: 22 },
  { direction: 'down', duration: 28 },
  { direction: 'up', duration: 18 },
] as const

// Character-by-character rising text
function RisingText({ text, staggerDelay = 0.012 }: { text: string; staggerDelay?: number }) {
  return (
    <span aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', lineHeight: 1.15 }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '105%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-105%', opacity: 0 }}
            transition={{
              duration: 0.45,
              delay: i * staggerDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {char === ' ' ? ' ' : char}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

// Single infinitely-scrolling portrait column
function ReelColumn({
  portraits,
  direction,
  duration,
}: {
  portraits: string[]
  direction: 'up' | 'down'
  duration: number
}) {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const halfHeight = track.scrollHeight / 2
    let raf: number
    let pos = direction === 'down' ? -halfHeight : 0
    const speed = halfHeight / (duration * 60) // px per frame at 60fps

    function tick() {
      if (direction === 'up') {
        pos -= speed
        if (pos <= -halfHeight) pos = 0
      } else {
        pos += speed
        if (pos >= 0) pos = -halfHeight
      }
      track!.style.transform = `translateY(${pos}px)`
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [direction, duration])

  return (
    <div className="relative h-full overflow-hidden" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)' }}>
      <div ref={trackRef} className="flex flex-col gap-3">
        {portraits.map((src, i) => (
          <div
            key={i}
            className="shrink-0 overflow-hidden rounded-2xl"
            style={{ width: '100%', aspectRatio: '3/4' }}
          >
            <img
              src={src}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function ScrollReelTestimonials() {
  const [active, setActive] = useState(0)
  const current = TESTIMONIALS[active]

  // Auto-advance every 5s
  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      className="relative overflow-hidden py-28"
      style={{ backgroundColor: '#0a0a0a', color: '#fafafa' }}
    >
      {/* Noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-16 flex items-center gap-4">
          <span className="h-px w-10 bg-brand" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
            What Clients Say
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[42%_58%] lg:gap-8">

          {/* Portrait reel */}
          <div
            className="grid gap-3"
            style={{ gridTemplateColumns: 'repeat(3, 1fr)', height: '520px' }}
          >
            {COLS.map((portraits, colIdx) => (
              <ReelColumn
                key={colIdx}
                portraits={portraits}
                direction={COL_CONFIG[colIdx].direction}
                duration={COL_CONFIG[colIdx].duration}
              />
            ))}
          </div>

          {/* Quote panel */}
          <div className="flex flex-col justify-center">
            {/* Large opening mark */}
            <div
              className="mb-6 font-black leading-none text-brand select-none"
              style={{ fontSize: 'clamp(5rem, 10vw, 9rem)', lineHeight: 0.7, opacity: 0.25 }}
            >
              "
            </div>

            {/* Quote text */}
            <div
              className="font-bold leading-snug"
              style={{ fontSize: 'clamp(1.25rem, 2.4vw, 1.85rem)', minHeight: '9rem' }}
            >
              <AnimatePresence mode="wait">
                <motion.p key={active}>
                  <RisingText text={current.quote} />
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Author */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`author-${active}`}
                className="mt-10 flex items-center gap-5"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              >
                <img
                  src={current.portrait}
                  alt={current.author}
                  className="size-14 rounded-full object-cover ring-2 ring-brand/40"
                />
                <div>
                  <p className="text-sm font-bold text-white">{current.author}</p>
                  <p className="mt-0.5 text-xs text-white/45">{current.role} · {current.company}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="mt-10 flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className="transition-all duration-300"
                  style={{
                    height: '3px',
                    width: i === active ? '2rem' : '0.75rem',
                    borderRadius: '9999px',
                    backgroundColor: i === active ? '#f97316' : 'rgba(255,255,255,0.2)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
