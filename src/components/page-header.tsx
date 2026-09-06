import { motion } from 'motion/react'
import { cn } from '../lib/utils'

interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  children?: React.ReactNode
  className?: string
  image?: string
  badges?: { label: string; value: string }[]
}

const DEFAULT_BADGES = [
  { value: 'RC 6891533', label: 'CAC Registered' },
  { value: 'Est. 2023', label: 'Port Harcourt' },
  { value: 'W. Africa', label: 'Coverage' },
]

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  className,
  image = '/images/marine-port.jpg',
  badges = DEFAULT_BADGES,
}: PageHeaderProps) {
  return (
    <section className={cn('relative overflow-hidden bg-background', className)}>
      {/* Grid with edge fade via mask */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.055) 1px, transparent 1px)',
          backgroundSize: '96px 96px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '96px 96px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 mx-auto max-w-6xl px-4 pb-0 pt-10 lg:px-8 lg:pt-12"
      >
        {eyebrow && (
          <div className="mb-5">
            <span className="inline-flex items-center rounded-full bg-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-background">
              {eyebrow}
            </span>
          </div>
        )}

        <h1 className="text-[clamp(2.4rem,5.5vw,4.25rem)] font-black uppercase leading-[0.92] tracking-tighter">
          {title}
        </h1>

        {description && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}

        {children}
      </motion.div>

      {/* Image panel — max-w-6xl, dark overlay always */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
        className="relative z-10 mx-auto mt-10 max-w-6xl overflow-hidden rounded-3xl px-4 lg:px-8"
      >
        <div className="relative h-56 overflow-hidden rounded-3xl sm:h-72 lg:h-80">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
          {/* Always-dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

          {/* Ghost watermark — page name */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <span className="select-none whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-tighter text-white/[0.07]">
              {eyebrow ?? title.split(' ')[0]}
            </span>
          </div>

          {/* Badges — always solid black border */}
          <div className="absolute bottom-5 left-5 flex flex-wrap gap-2.5">
            {badges.map((b) => (
              <div
                key={b.label}
                className="rounded-full border-2 border-black bg-black px-4 py-2"
              >
                <span className="text-sm font-black text-white">{b.value}</span>
                <span className="ml-2 text-xs text-white/60">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom spacing */}
      <div className="h-12 lg:h-16" />
    </section>
  )
}
