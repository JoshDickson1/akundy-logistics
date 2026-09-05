import { MapPin, TrendingUp, Wrench, Calendar, Globe2 } from 'lucide-react'
import { motion } from 'motion/react'
import { COMPANY, STATS } from '../../lib/data'
import { cn } from '../../lib/utils'

function DiagonalLines() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.08]"
      style={{
        backgroundImage:
          'repeating-linear-gradient(135deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 64px)',
      }}
      aria-hidden="true"
    />
  )
}

function StatCard({
  value,
  label,
  icon: Icon,
  className,
}: {
  value: string
  label: string
  icon: React.ElementType
  className?: string
}) {
  return (
    <div
      className={cn(
        'relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 text-white transition-transform duration-300 hover:-translate-y-0.5',
        className
      )}
    >
      <Icon className="size-5 opacity-60" />
      <div>
        <div className="text-4xl font-black tracking-tight">{value}</div>
        <div className="mt-1 text-sm font-medium text-white/70">{label}</div>
      </div>
    </div>
  )
}

export function StatsBento() {
  const [experience, services, incorporated, coverage] = STATS

  return (
    <section className="relative z-10 -mt-10">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {/* Large headline card */}
          <div className="relative row-span-3 flex flex-col justify-between overflow-hidden rounded-3xl bg-zinc-100 p-8 text-zinc-900 transition-transform duration-300 hover:-translate-y-0.5 dark:bg-[#141414] dark:text-white md:p-10">
            <DiagonalLines />
            <div className="relative z-10">
              <span className="inline-flex flex-row items-center gap-1.5 rounded-full bg-black px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white dark:bg-white dark:text-black">
                <Globe2 className="size-3 shrink-0" />
                <span>Global Reach</span>
              </span>
              <h2 className="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-5xl">
                Impact Without Boundaries.
              </h2>
            </div>
            <p className="relative z-10 mt-8 max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {COMPANY.name} delivers dependable marine logistics, offshore support,
              equipment leasing and fabrication services across Nigeria and
              international markets.
            </p>
          </div>

          {/* Stat cards */}
          <StatCard
            value={experience.value}
            label={experience.label}
            icon={TrendingUp}
            className="bg-zinc-900"
          />
          <StatCard
            value={services.value}
            label={services.label}
            icon={Wrench}
            className="bg-zinc-900"
          />
          <StatCard
            value={incorporated.value}
            label={incorporated.label}
            icon={Calendar}
            className="bg-zinc-900"
          />

          {/* Coverage card */}
          <div className="relative col-span-1 flex items-center justify-between overflow-hidden rounded-3xl bg-brand p-6 text-white transition-transform duration-300 hover:-translate-y-0.5 md:col-span-2 md:p-8">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/80">
                <MapPin className="size-4" />
                Coverage
              </div>
              <div className="mt-2 text-2xl font-black md:text-3xl">{coverage.value}</div>
              <div className="text-sm font-medium text-white/80">{coverage.label}</div>
            </div>
            <div className="hidden text-6xl font-black text-white/20 md:block">
              NG
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
