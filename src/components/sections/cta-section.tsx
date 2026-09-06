import { motion } from 'motion/react'
import { ArrowRight, Briefcase, MapPin, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { COMPANY } from '../../lib/data'

const STATS = [
  { value: '9+', label: 'Service Lines', icon: Briefcase },
  { value: '5+', label: 'Industry Sectors', icon: Users },
  { value: 'W. Africa & Intl.', label: 'Coverage', icon: MapPin },
]

const IMAGES = [
  {
    src: '/images/marine-port.jpg',
    alt: 'Marine vessel operations',
    className: 'absolute left-0 top-8 h-64 w-48 lg:h-80 lg:w-60',
    rotate: -6,
    delay: 0.15,
  },
  {
    src: '/images/why-delivery.jpg',
    alt: 'Offshore platform support',
    className: 'absolute left-32 top-0 h-72 w-52 lg:h-96 lg:w-64',
    rotate: 4,
    delay: 0.25,
  },
  {
    src: '/images/crane-containers.jpg',
    alt: 'Port and logistics operations',
    className: 'absolute right-0 bottom-0 h-56 w-44 lg:h-72 lg:w-56',
    rotate: -3,
    delay: 0.35,
  },
]

const ease = [0.25, 0.1, 0.25, 1] as const

export function CtaSection() {
  return (
    <section className="overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

          {/* Left: text */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, ease }}
              className="inline-flex items-center rounded-full bg-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-background"
            >
              Work With Us
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease, delay: 0.08 }}
              className="mt-6 text-4xl font-black leading-[1.05] tracking-tight lg:text-5xl xl:text-6xl"
            >
              Ready to Move{' '}
              <span className="text-brand">Your Project</span>{' '}
              Forward?
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease, delay: 0.16 }}
              className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground lg:text-lg"
            >
              Tell us what you need. We respond with a practical, cost-effective
              solution backed by real offshore and industrial experience across
              {' '}{COMPANY.coverage}.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease, delay: 0.24 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-brand/90 hover:shadow-brand-glow"
              >
                Request a Quote
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-7 py-3.5 text-sm font-bold transition-all duration-200 hover:border-foreground/30 hover:bg-muted/60"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease, delay: 0.34 }}
              className="mt-12 flex flex-wrap gap-6"
            >
              {STATS.map(({ value, label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-muted/50">
                    <Icon className="size-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-lg font-black leading-none">{value}</p>
                    <p className="mt-0.5 text-xs font-medium text-muted-foreground">{label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: floating image collage */}
          <div className="relative hidden h-[420px] lg:block xl:h-[500px]">
            {IMAGES.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24, rotate: img.rotate * 0.3 }}
                whileInView={{ opacity: 1, y: 0, rotate: img.rotate }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease, delay: img.delay }}
                className={`${img.className} overflow-hidden rounded-2xl shadow-soft-xl ring-1 ring-black/5`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {/* Subtle brand tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand/10" />
              </motion.div>
            ))}

            {/* Orange accent blob behind collage */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl" />

            {/* Floating tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease, delay: 0.5 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-2xl border border-border/50 bg-card px-5 py-3 shadow-soft-lg"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-brand">
                {COMPANY.motto}
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
