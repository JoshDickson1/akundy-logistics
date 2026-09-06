import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import type { SERVICES } from '../../lib/data'

type Service = (typeof SERVICES)[number]

type Props = {
  services: Service[]
}

const SERVICE_IMAGES: Record<string, string> = {
  'equipment-leasing':  '/images/crane-containers.jpg',
  'marine-logistics':   '/images/marine-port.jpg',
  'offshore-support':   '/images/container-ship.jpg',
  'shipping-agency':    '/images/SP5u1.jpg',
  'ship-chandler':      '/images/AmSNA.jpg',
  'metal-fabrication':  '/images/NKgog.jpg',
  'facility-maintenance': '/images/why-delivery.jpg',
  'procurement':        '/images/why-quality.jpg',
  'general-contracts':  '/images/mission-worker.jpg',
}

export function VerticalTabs({ services }: Props) {
  const [active, setActive] = useState(0)
  const current = services[active]

  return (
    <div className="grid gap-0 lg:grid-cols-[320px_1fr] xl:grid-cols-[360px_1fr]">

      {/* Tab list */}
      <div className="relative border-r border-border/60 lg:sticky lg:top-24 lg:self-start">
        <ul className="py-2">
          {services.map((service, i) => {
            const isActive = i === active
            return (
              <li key={service.id} className="relative">
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 bg-foreground/5 dark:bg-foreground/8"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                {/* Active left bar */}
                {isActive && (
                  <motion.div
                    layoutId="tab-bar"
                    className="absolute inset-y-0 left-0 w-[3px] rounded-full bg-brand"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <button
                  onClick={() => setActive(i)}
                  className="relative flex w-full items-center gap-4 px-7 py-4 text-left transition-colors duration-150 hover:bg-muted/60"
                >
                  <span
                    className="shrink-0 font-black tabular-nums transition-colors duration-150"
                    style={{
                      fontSize: '0.7rem',
                      letterSpacing: '0.1em',
                      color: isActive ? '#f97316' : undefined,
                      opacity: isActive ? 1 : 0.35,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="text-sm font-semibold leading-snug transition-colors duration-150"
                    style={{ color: isActive ? 'var(--foreground)' : 'var(--muted-foreground)' }}
                  >
                    {service.title}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="tab-dot"
                      className="ml-auto size-1.5 shrink-0 rounded-full bg-brand"
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Content panel */}
      <div className="min-h-[540px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-full"
          >
            {/* Service image banner */}
            {SERVICE_IMAGES[current.id] && (
              <div className="relative h-52 w-full overflow-hidden lg:h-60">
                <img
                  src={SERVICE_IMAGES[current.id]}
                  alt={current.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-8 flex items-center gap-3">
                  <div className="inline-flex size-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                    <current.icon className="size-5 text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                    {String(active + 1).padStart(2, '0')} / {String(9).padStart(2, '0')}
                  </span>
                </div>
              </div>
            )}

            <div className="px-8 py-8 lg:px-14">
              {/* Title */}
              <h2 className="text-3xl font-black leading-tight tracking-tight lg:text-4xl">
                {current.title}
              </h2>

              {/* Divider */}
              <div className="my-6 h-px w-16 rounded-full bg-brand" />

              {/* Description */}
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                {current.description}
              </p>

              {/* Deliverables */}
              <div className="mt-8">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-foreground/50">
                  Key Deliverables
                </p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {current.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-border/50 bg-muted/40 px-4 py-3 text-sm font-medium text-foreground/80"
                    >
                      <span className="size-1.5 shrink-0 rounded-full bg-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
