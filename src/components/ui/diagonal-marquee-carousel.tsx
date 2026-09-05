import { useEffect, useRef } from 'react'
import { cn } from '../../lib/utils'

const CARDS = [
  { src: 'https://picsum.photos/seed/dmq-vessel/320/440', label: 'Marine Vessels' },
  { src: 'https://picsum.photos/seed/dmq-offshore/320/440', label: 'Offshore Support' },
  { src: 'https://picsum.photos/seed/dmq-port/320/440', label: 'Port Operations' },
  { src: 'https://picsum.photos/seed/dmq-fabrication/320/440', label: 'Metal Fabrication' },
  { src: 'https://picsum.photos/seed/dmq-crew/320/440', label: 'Expert Crew' },
  { src: 'https://picsum.photos/seed/dmq-logistics/320/440', label: 'Industrial Logistics' },
  { src: 'https://picsum.photos/seed/dmq-equipment/320/440', label: 'Equipment Leasing' },
  { src: 'https://picsum.photos/seed/dmq-marine/320/440', label: 'Marine Logistics' },
  { src: 'https://picsum.photos/seed/dmq-welding/320/440', label: 'Fabrication Works' },
  { src: 'https://picsum.photos/seed/dmq-rig/320/440', label: 'Rig Support' },
  { src: 'https://picsum.photos/seed/dmq-barge/320/440', label: 'Barge Operations' },
  { src: 'https://picsum.photos/seed/dmq-supply/320/440', label: 'Supply Chain' },
]

const COLS = [
  { cards: CARDS.slice(0, 3),  speed: 0.38, dir: 'up'   as const },
  { cards: CARDS.slice(3, 6),  speed: 0.55, dir: 'down' as const },
  { cards: CARDS.slice(6, 9),  speed: 0.45, dir: 'up'   as const },
  { cards: CARDS.slice(9, 12), speed: 0.62, dir: 'down' as const },
]

type Dir = 'up' | 'down'

function Column({ cards, speed, dir }: { cards: typeof CARDS; speed: number; dir: Dir }) {
  const ref = useRef<HTMLDivElement>(null)
  const pos = useRef(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf: number

    const tick = () => {
      pos.current += speed
      const half = el.scrollHeight / 2
      if (pos.current >= half) pos.current = 0

      el.style.transform = dir === 'up'
        ? `translateY(-${pos.current}px)`
        : `translateY(${pos.current - half}px)`
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [speed, dir])

  const all = [...cards, ...cards]

  return (
    <div className="flex shrink-0 flex-col gap-4 px-2" style={{ willChange: 'transform' }}>
      <div ref={ref} className="flex flex-col gap-4">
        {all.map((card, i) => (
          <div
            key={i}
            className="relative h-[260px] w-[180px] shrink-0 overflow-hidden rounded-2xl"
          >
            <img
              src={card.src}
              alt={card.label}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 right-3 text-[10px] font-bold uppercase tracking-widest text-white/70">
              {card.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

type Props = {
  className?: string
}

export function DiagonalMarqueeCarousel({ className }: Props) {
  return (
    <div className={cn('overflow-hidden', className)}>
      {/* Diagonal rotation wrapper */}
      <div
        className="flex h-full w-full items-start gap-0"
        style={{ transform: 'rotate(-12deg) scale(1.35)', transformOrigin: 'center center' }}
      >
        {COLS.map((col, i) => (
          <Column key={i} cards={col.cards} speed={col.speed} dir={col.dir} />
        ))}
      </div>
    </div>
  )
}
