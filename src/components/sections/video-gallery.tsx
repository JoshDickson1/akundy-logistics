import { motion } from 'motion/react'

const VIDEOS = [
  { src: 'https://ik.imagekit.io/devDickson/Akundy%20Videos/VID-20260501-WA0000.mp4',                                  label: 'Field Operations' },
  { src: 'https://ik.imagekit.io/devDickson/Akundy%20Videos/WhatsApp%20Video%202026-08-27%20at%2023.49.21.mp4',       label: 'Site Work' },
  { src: 'https://ik.imagekit.io/devDickson/Akundy%20Videos/WhatsApp%20Video%202026-08-27%20at%2023.39.56.mp4',       label: 'Equipment in Action' },
  { src: 'https://ik.imagekit.io/devDickson/Akundy%20Videos/WhatsApp%20Video%202026-08-27%20at%2023.39.55.mp4',       label: 'Team on Deck' },
  { src: 'https://ik.imagekit.io/devDickson/Akundy%20Videos/WhatsApp%20Video%202026-08-27%20at%2023.39.56%20(1).mp4', label: 'Offshore Support' },
]

const ease = [0.25, 0.1, 0.25, 1] as const

function VideoCard({ src, label, delay = 0, className = '' }: { src: string; label: string; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease, delay }}
      className={`group relative overflow-hidden rounded-3xl bg-black shadow-soft-lg ${className}`}
    >
      <video
        src={src}
        controls
        playsInline
        preload="metadata"
        className="aspect-video w-full object-cover"
        aria-label={label}
      />
      <div className="pointer-events-none absolute bottom-3 left-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/80 backdrop-blur-sm">
          <span className="size-1.5 shrink-0 rounded-full bg-brand" />
          {label}
        </span>
      </div>
    </motion.div>
  )
}

export function VideoGallery() {
  return (
    <section className="bg-[#fdf6ee] py-24 dark:bg-[#0a0a0a]">
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
            <span className="inline-flex items-center rounded-full bg-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-background">
              Our People
            </span>
            <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-[0.92] tracking-tighter">
              Our Team.<br />In the Field.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground lg:text-right">
            A glimpse of our crew and equipment at work across marine, offshore and industrial sites.
          </p>
        </motion.div>

        {/* 6-col grid so top 3 (×2 cols each) and bottom 2 (×2 cols each, centred) align perfectly */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {/* Top row — 3 equal cards */}
          <VideoCard src={VIDEOS[0].src} label={VIDEOS[0].label} delay={0}    className="lg:col-span-2" />
          <VideoCard src={VIDEOS[1].src} label={VIDEOS[1].label} delay={0.08} className="lg:col-span-2" />
          <VideoCard src={VIDEOS[2].src} label={VIDEOS[2].label} delay={0.16} className="lg:col-span-2" />

          {/* Bottom row — 2 cards centred (col 2–3 and 4–5 of the 6-col grid) */}
          <VideoCard src={VIDEOS[3].src} label={VIDEOS[3].label} delay={0.24} className="lg:col-span-2 lg:col-start-2" />
          <VideoCard src={VIDEOS[4].src} label={VIDEOS[4].label} delay={0.32} className="lg:col-span-2" />
        </div>

      </div>
    </section>
  )
}
