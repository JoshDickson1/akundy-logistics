import { motion } from 'motion/react'
import { COMPANY, TEAM } from '../../lib/data'

const easeOut = [0.25, 0.1, 0.25, 1] as const

function RotatingRingBadge() {
  const text = 'KNOW MORE ABOUT US · KNOW MORE ABOUT US · '
  return (
    <div className="relative size-36">
      {/* Outer dashed ring */}
      <svg viewBox="0 0 144 144" className="absolute inset-0 h-full w-full">
        <circle
          cx="72" cy="72" r="68"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 6"
          className="text-border"
        />
      </svg>

      {/* Rotating text path */}
      <motion.svg
        viewBox="0 0 144 144"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
      >
        <defs>
          <path
            id="mission-ring"
            d="M72,72 m-54,0 a54,54 0 1,1 108,0 a54,54 0 1,1 -108,0"
          />
        </defs>
        <text
          fontSize="8.5"
          fontWeight="700"
          letterSpacing="2"
          className="fill-foreground/30 font-sans uppercase"
        >
          <textPath href="#mission-ring">{text}</textPath>
        </text>
      </motion.svg>

      {/* Center logo mark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/logo-light.png"
          alt="Akundy"
          className="block h-10 w-auto object-contain dark:hidden"
          draggable={false}
        />
        <img
          src="/logo-dark.png"
          alt="Akundy"
          className="hidden h-10 w-auto object-contain dark:block"
          draggable={false}
        />
      </div>
    </div>
  )
}

export function MissionSection() {
  const md = TEAM.find((m) => m.name === 'Lovelyn Nwoha') ?? TEAM[0]

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr_0.85fr] lg:gap-8">

          {/* Left copy + MD */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="flex flex-col"
          >
            <span className="mb-4 inline-flex w-fit items-center rounded-full bg-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-background">
              About Akundy
            </span>

            <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-black uppercase leading-[0.92] tracking-tighter">
              What We<br />Stand For
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              At {COMPANY.name}, we bring together{' '}
              <strong className="font-bold text-foreground">Marine expertise, Offshore capability, Engineering precision, Logistics reliability and Safety discipline</strong>{' '}
              to deliver integrated solutions that keep your operations running on time and within budget.
            </p>

            {/* MD info */}
            <div className="mt-10 flex items-center gap-4 border-t border-border pt-7">
              <div className="size-12 overflow-hidden rounded-full bg-muted ring-2 ring-brand/20">
                <img
                  src="/images/executive-director.jpg"
                  alt={md.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-black text-foreground">{md.name}</p>
                <p className="text-xs text-muted-foreground">{md.role}</p>
              </div>
              {/* Decorative signature line */}
              <div className="ml-auto">
                <svg viewBox="0 0 120 36" className="h-8 w-auto opacity-20" fill="none">
                  <path
                    d="M4 28 C20 8, 36 32, 52 16 S84 4, 116 20"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M60 20 C70 14, 80 26, 90 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Center image */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/images/mission-worker.jpg"
                alt="Akundy operations"
                className="h-[420px] w-full object-cover lg:h-[500px]"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating stat */}
            <div className="absolute bottom-5 left-5 rounded-2xl border border-white/20 bg-black/50 px-5 py-3.5 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-widest text-white/60">Est.</p>
              <p className="text-2xl font-black text-white">{COMPANY.incorporated}</p>
            </div>
          </motion.div>

          {/* Right rotating badge + mission + vision */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Rotating badge top right */}
            <div className="flex justify-end">
              <RotatingRingBadge />
            </div>

            {/* Mission */}
            <div>
              <h3 className="text-lg font-black tracking-tight">Our Mission</h3>
              <div className="mt-1 h-px w-8 bg-brand" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                To deliver dependable, cost-effective and world-class solutions through innovation, professionalism, safety compliance and excellent service delivery.
              </p>
            </div>

            <div className="h-px bg-border" />

            {/* Vision */}
            <div>
              <h3 className="text-lg font-black tracking-tight">Our Vision</h3>
              <div className="mt-1 h-px w-8 bg-brand" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                To become a leading indigenous service provider in logistics, offshore support, engineering and procurement across Nigeria and Africa.
              </p>
            </div>

            <div className="h-px bg-border" />

            {/* Quality */}
            <div>
              <h3 className="text-lg font-black tracking-tight">Quality Focus</h3>
              <div className="mt-1 h-px w-8 bg-brand" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Excellent services delivered in accordance with agreed requirements, on time and within budget, without compromising industry standards.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
