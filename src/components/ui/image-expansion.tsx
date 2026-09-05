import { motion } from 'motion/react'
import { useState } from 'react'

export type ExpansionImage = {
  src: string
  label: string
  tag: string
}

type Props = {
  images: ExpansionImage[]
  height?: number
}

export function ImageExpansionSlider({ images, height = 440 }: Props) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <>
      {/* Desktop: horizontal expansion strip */}
      <div
        className="hidden overflow-hidden rounded-3xl md:flex"
        style={{ height, gap: '6px' }}
        onMouseLeave={() => setHovered(null)}
      >
        {images.map((img, i) => {
          const isActive = hovered === i
          const isIdle = hovered === null

          return (
            <motion.div
              key={i}
              className="relative cursor-pointer overflow-hidden rounded-2xl"
              animate={{
                flex: isActive ? 3.8 : isIdle ? 1 : 0.55,
              }}
              transition={{ type: 'spring', stiffness: 220, damping: 28 }}
              style={{ flex: 1, minWidth: 0 }}
              onHoverStart={() => setHovered(i)}
            >
              {/* Photo */}
              <motion.img
                src={img.src}
                alt={img.label}
                className="h-full w-full object-cover"
                loading="lazy"
                animate={{ scale: isActive ? 1.04 : 1 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              />

              {/* Always-visible dark base gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Tag badge: top left, visible on expansion */}
              <motion.div
                className="absolute left-4 top-4"
                animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -6 }}
                transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <span className="rounded-full bg-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider text-background">
                  {img.tag}
                </span>
              </motion.div>

              {/* Label: bottom, slides up on expansion */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-5"
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 12,
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1], delay: isActive ? 0.05 : 0 }}
              >
                <p className="text-base font-bold text-white">{img.label}</p>
              </motion.div>

              {/* Collapsed: vertical label so it's readable even when thin */}
              <motion.div
                className="absolute inset-0 flex items-end justify-center pb-5"
                animate={{ opacity: isActive || isIdle ? 0 : 0.7 }}
                transition={{ duration: 0.2 }}
              >
                <p
                  className="whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-white"
                  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
                >
                  {img.label}
                </p>
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Mobile: 2-col masonry-style grid */}
      <div className="grid grid-cols-2 gap-3 md:hidden">
        {images.map((img, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-2xl ${i === 0 ? 'col-span-2' : ''}`}
            style={{ height: i === 0 ? 220 : 160 }}
          >
            <img src={img.src} alt={img.label} className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3">
              <span className="rounded-full bg-foreground px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-background">
                {img.tag}
              </span>
              <p className="mt-1 text-xs font-bold text-white">{img.label}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
