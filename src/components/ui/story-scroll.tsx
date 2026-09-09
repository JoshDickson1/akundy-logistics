'use client'

import { Anchor, ArrowRight, Globe, HardHat, Ship } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const sections = [
  {
    id: 'who',
    index: '01',
    label: 'Who We Are',
    bg: '#f97316',
    color: '#ffffff',
    divider: 'rgba(255,255,255,0.25)',
    accent: 'rgba(255,255,255,0.15)',
    headline: ['Built', 'For The', 'Deep.'],
    body: 'Akundy Logistics is an integrated marine and industrial services company rooted in Nigeria, delivering offshore support, equipment leasing, fabrication and procurement across West Africa and internationally.',
    pills: ['Est. 2023', 'RC 6891533', 'Rivers State, Nigeria'],
    icon: Anchor,
    images: ['/images/marine-port.jpg', '/images/container-ship.jpg'],
    tilt: [-5, 6] as [number, number],
  },
  {
    id: 'what',
    index: '02',
    label: 'What We Do',
    bg: '#0a0a0a',
    color: '#fafafa',
    divider: 'rgba(255,255,255,0.12)',
    accent: 'rgba(249,115,22,0.12)',
    headline: ['Nine', 'Services.', 'One Team.'],
    body: 'Marine logistics, offshore support, metal fabrication, ship chandling and general contracting. Every capability in-house, every time.',
    stats: [
      { value: '9', label: 'Core Services' },
      { value: '40+', label: 'Years Combined Exp.' },
      { value: '3+', label: 'Active Certifications' },
      { value: '0', label: 'Compromise on Safety' },
    ],
    icon: Ship,
    images: ['/images/NKgog.jpg', '/images/AmSNA.jpg'],
    tilt: [4, -7] as [number, number],
  },
  {
    id: 'where',
    index: '03',
    label: 'Where We Work',
    bg: '#fdf6ee',
    color: '#0a0a0a',
    divider: 'rgba(10,10,10,0.12)',
    accent: 'rgba(249,115,22,0.1)',
    headline: ['Nigeria', '& West', 'Africa.'],
    body: "Headquartered in Port Harcourt, the heart of Nigeria's oil and gas industry, with reach across terminals, platforms, yards and ports throughout the region.",
    regions: ['Port Harcourt', 'Lagos', 'Warri', 'Onne', 'Bonny', 'West Africa'],
    icon: Globe,
    images: ['/images/why-delivery.jpg', '/images/crane-containers.jpg'],
    tilt: [-4, 8] as [number, number],
  },
  {
    id: 'how',
    index: '04',
    label: 'How We Deliver',
    bg: '#0f1f3d',
    color: '#fafafa',
    divider: 'rgba(255,255,255,0.12)',
    accent: 'rgba(249,115,22,0.08)',
    headline: ['Safety', 'First.', 'Always.'],
    body: 'Every operation is governed by strict HSE protocols, quality management systems, and a culture where no job is worth a single injury.',
    pillsDark: ['ISO-Aligned QMS', 'HSE Compliant', 'NUPRC Registered', 'CAC Certified'],
    icon: HardHat,
    images: ['/images/why-safety.jpg', '/images/9HKlQ.jpg'],
    tilt: [5, -6] as [number, number],
  },
  {
    id: 'cta',
    index: '05',
    label: "Let's Work Together",
    bg: '#f97316',
    color: '#ffffff',
    divider: 'rgba(255,255,255,0.25)',
    accent: 'rgba(255,255,255,0.15)',
    headline: ['Ready', 'To Move?'],
    body: "Tell us what you need. We'll respond with a practical, cost-effective solution backed by real offshore and industrial experience.",
    cta: true,
    icon: ArrowRight,
    images: ['/images/why-customer.jpg', '/images/mission-worker.jpg'],
    tilt: [-3, 7] as [number, number],
  },
]

const ease = [0.25, 0.1, 0.25, 1] as const

export function StoryScroll() {
  return (
    <div>
      {sections.map((section) => (
        <section
          key={section.id}
          className="relative overflow-hidden"
          style={{ backgroundColor: section.bg, color: section.color }}
        >
          {/* Noise */}
          <div
            className="pointer-events-none absolute inset-0 z-10 opacity-[0.035]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-20 mx-auto max-w-[1400px] px-6 py-20 sm:px-12 lg:grid lg:min-h-[90vh] lg:grid-cols-[54%_46%] lg:items-center lg:py-0 xl:px-20">

            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease }}
              className="flex flex-col py-16 lg:py-24"
            >
              {/* Meta */}
              <div
                className="mb-6 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.25em]"
                style={{ color: section.color }}
              >
                <span style={{ opacity: 0.45 }}>{section.index}</span>
                <span className="h-px w-8 shrink-0" style={{ backgroundColor: section.divider }} />
                <span style={{ opacity: 0.65 }}>{section.label}</span>
              </div>

              {/* Top divider */}
              <div className="mb-8 h-px w-full" style={{ backgroundColor: section.divider }} />

              {/* Headline */}
              <h2
                className="font-black uppercase leading-[0.85] tracking-tight"
                style={{ fontSize: 'clamp(3rem, 8vw, 10.5rem)', color: section.color }}
              >
                {section.headline.map((line, i) => (
                  <motion.span
                    key={i}
                    className="block"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.55, ease, delay: i * 0.08 }}
                  >
                    {line}
                  </motion.span>
                ))}
              </h2>

              {/* Bottom divider */}
              <div className="my-10 h-px w-full" style={{ backgroundColor: section.divider }} />

              {/* Body */}
              <p
                className="max-w-sm text-base leading-relaxed lg:text-lg"
                style={{ color: section.color }}
              >
                {section.body}
              </p>

              {/* Extras */}
              <div className="mt-8 flex flex-wrap gap-3">
                {'pills' in section &&
                  section.pills?.map((pill) => (
                    <span
                      key={pill}
                      className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold"
                      style={{ borderColor: section.divider, color: section.color, backgroundColor: 'rgba(255,255,255,0.12)' }}
                    >
                      {pill}
                    </span>
                  ))}

                {'stats' in section &&
                  section.stats?.map((stat) => (
                    <div key={stat.label} className="flex flex-col" style={{ minWidth: '6.5rem' }}>
                      <span className="text-4xl font-black" style={{ color: '#f97316' }}>{stat.value}</span>
                      <span className="mt-1 text-xs font-semibold uppercase tracking-widest" style={{ color: section.color, opacity: 0.45 }}>
                        {stat.label}
                      </span>
                    </div>
                  ))}

                {'regions' in section &&
                  section.regions?.map((region) => (
                    <span
                      key={region}
                      className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium"
                      style={{ borderColor: section.divider, color: section.color }}
                    >
                      <span className="size-1.5 rounded-full" style={{ backgroundColor: '#f97316' }} />
                      {region}
                    </span>
                  ))}

                {'pillsDark' in section &&
                  section.pillsDark?.map((pill) => (
                    <span
                      key={pill}
                      className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold"
                      style={{ backgroundColor: 'rgba(249,115,22,0.15)', color: '#f97316', border: '1px solid rgba(249,115,22,0.3)' }}
                    >
                      {pill}
                    </span>
                  ))}

                {'cta' in section && section.cta && (
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#f97316] transition-all duration-200 hover:scale-[1.02] hover:bg-white/90"
                    >
                      Request a Quote <ArrowRight className="size-4" />
                    </Link>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-bold text-white transition-all duration-200 hover:bg-white/10"
                    >
                      Explore Services
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile images: shown below text on small screens */}
              <div className="mt-12 grid grid-cols-2 gap-3 lg:hidden">
                <div
                  className="overflow-hidden rounded-2xl"
                  style={{
                    aspectRatio: '3/4',
                    boxShadow: '0 16px 40px -8px rgba(0,0,0,0.4)',
                    rotate: `${section.tilt[0]}deg`,
                  }}
                >
                  <img src={section.images[0]} alt="" aria-hidden="true" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div
                  className="mt-6 overflow-hidden rounded-2xl"
                  style={{
                    aspectRatio: '3/4',
                    boxShadow: '0 16px 40px -8px rgba(0,0,0,0.4)',
                    rotate: `${section.tilt[1]}deg`,
                    border: '3px solid rgba(255,255,255,0.12)',
                  }}
                >
                  <img src={section.images[1]} alt="" aria-hidden="true" className="h-full w-full object-cover" loading="lazy" />
                </div>
              </div>
            </motion.div>

            {/* Right: floating image collage desktop only */}
            <div className="pointer-events-none relative hidden h-full min-h-[600px] lg:block">

              {/* Accent block */}
              <motion.div
                className="absolute"
                initial={{ opacity: 0, y: 40, rotate: -20 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease }}
                style={{
                  width: '55%',
                  aspectRatio: '3/4',
                  top: '18%',
                  left: '22%',
                  borderRadius: '1.5rem',
                  backgroundColor: section.accent,
                }}
              />

              {/* Primary photo */}
              <motion.div
                className="absolute overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 80, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease, delay: 0.1 }}
                style={{
                  width: '52%',
                  aspectRatio: '3/4',
                  top: '10%',
                  left: '8%',
                  rotate: `${section.tilt[0]}deg`,
                  boxShadow: '0 24px 64px -12px rgba(0,0,0,0.45)',
                }}
              >
                <img src={section.images[0]} alt="" aria-hidden="true" className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.3))' }} />
              </motion.div>

              {/* Secondary photo */}
              <motion.div
                className="absolute overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 60, x: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease, delay: 0.2 }}
                style={{
                  width: '46%',
                  aspectRatio: '4/3',
                  bottom: '12%',
                  right: '4%',
                  rotate: `${section.tilt[1]}deg`,
                  boxShadow: '0 20px 56px -10px rgba(0,0,0,0.5)',
                  border: '3px solid rgba(255,255,255,0.12)',
                }}
              >
                <img src={section.images[1]} alt="" aria-hidden="true" className="h-full w-full object-cover" loading="lazy" />
              </motion.div>

              {/* Section number watermark */}
              <span
                className="absolute bottom-8 left-6 select-none font-black leading-none"
                style={{ fontSize: 'clamp(6rem, 10vw, 12rem)', color: section.color, opacity: 0.04 }}
              >
                {section.index}
              </span>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
