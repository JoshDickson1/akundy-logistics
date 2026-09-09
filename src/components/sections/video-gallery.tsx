import { motion } from 'motion/react'

const VIDEOS = [
  { src: 'https://ik.imagekit.io/devDickson/Akundy%20Videos/VID-20260501-WA0000.mp4',                              label: 'Field Operations' },
  { src: 'https://ik.imagekit.io/devDickson/Akundy%20Videos/WhatsApp%20Video%202026-08-27%20at%2023.49.21.mp4',   label: 'Site Work' },
  { src: 'https://ik.imagekit.io/devDickson/Akundy%20Videos/WhatsApp%20Video%202026-08-27%20at%2023.39.56.mp4',   label: 'Equipment in Action' },
  { src: 'https://ik.imagekit.io/devDickson/Akundy%20Videos/WhatsApp%20Video%202026-08-27%20at%2023.39.55.mp4',   label: 'Team on Deck' },
  { src: 'https://ik.imagekit.io/devDickson/Akundy%20Videos/WhatsApp%20Video%202026-08-27%20at%2023.39.56%20(1).mp4', label: 'Offshore Support' },
]

function VideoCard({
  src,
  label,
  delay = 0,
  className = '',
}: {
  src: string
  label: string
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={`group relative overflow-hidden rounded-3xl bg-black ${className}`}
    >
      <video
        src={src}
        controls
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        aria-label={label}
      />
      {/* Label badge */}
      <div className="pointer-events-none absolute bottom-3 left-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/80 backdrop-blur-sm">
          <span className="size-1.5 rounded-full bg-brand" />
          {label}
        </span>
      </div>
    </motion.div>
  )
}

export function VideoGallery() {
  const [featured, ...rest] = VIDEOS

  return (
    <section className="bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/70">
              Our People
            </span>
            <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-[0.92] tracking-tighter text-white">
              Our Team.<br />In the Field.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/40 lg:text-right">
            A glimpse of our crew and equipment at work across marine, offshore and industrial sites.
          </p>
        </motion.div>

        {/* Bento grid: featured left + 2x2 right */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-rows-2">
          {/* Featured — full height on desktop */}
          <VideoCard
            src={featured.src}
            label={featured.label}
            delay={0}
            className="aspect-video lg:row-span-2 lg:aspect-auto lg:min-h-[480px]"
          />

          {/* 4 smaller videos in 2x2 */}
          <div className="grid grid-cols-2 gap-4 lg:row-span-2 lg:grid-rows-2">
            {rest.map((v, i) => (
              <VideoCard
                key={v.src}
                src={v.src}
                label={v.label}
                delay={i * 0.08 + 0.1}
                className="aspect-video"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
