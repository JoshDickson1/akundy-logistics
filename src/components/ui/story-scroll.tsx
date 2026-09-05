'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Anchor, ArrowRight, Globe, HardHat, Ship } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/**
 * images: [primary, secondary] per section.
 * primary  = larger card, tilted slightly counter-clockwise
 * secondary = smaller card, tilted clockwise, overlapping primary
 *
 * Recommended real shots:
 *  01  [aerial of offshore platform at golden hour, port cranes at dusk]
 *  02  [arc welding sparks in fab yard, welder close-up portrait]
 *  03  [Port Harcourt terminal aerial, supply vessel at berth]
 *  04  [workers in full PPE on platform, safety signage / toolbox talk]
 *  05  [crew handshake on vessel deck, wide shot of supply boat underway]
 */
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
    body: 'Akundy Logistics is an integrated marine and industrial services company rooted in Nigeria, delivering offshore support, equipment leasing, fabrication and procurement across West Africa.',
    pills: ['Est. 2023', 'RC 6891533', 'Rivers State, Nigeria'],
    icon: Anchor,
    images: [
      '/images/marine-port.jpg',
      '/images/container-ship.jpg',
    ],
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
    images: [
      '/images/NKgog.jpg',
      '/images/AmSNA.jpg',
    ],
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
    images: [
      '/images/why-delivery.jpg',
      '/images/crane-containers.jpg',
    ],
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
    images: [
      '/images/why-safety.jpg',
      '/images/9HKlQ.jpg',
    ],
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
    images: [
      '/images/why-customer.jpg',
      '/images/mission-worker.jpg',
    ],
    tilt: [-3, 7] as [number, number],
  },
]

export function StoryScroll() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const allSections = gsap.utils.toArray<HTMLElement>('.story-section')

      allSections.forEach((section) => {
        const headlines = section.querySelectorAll<HTMLElement>('.story-headline-line')
        const meta = section.querySelector<HTMLElement>('.story-meta')
        const dividers = section.querySelectorAll<HTMLElement>('.story-divider')
        const body = section.querySelector<HTMLElement>('.story-body')
        const extras = section.querySelectorAll<HTMLElement>('.story-extra')
        const imgPrimary = section.querySelector<HTMLElement>('.story-img-primary')
        const imgSecondary = section.querySelector<HTMLElement>('.story-img-secondary')
        const accentBlock = section.querySelector<HTMLElement>('.story-img-accent')

        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: '+=100%',
          pin: true,
          pinSpacing: true,
        })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=100%',
            scrub: 1.2,
          },
        })

        // Accent block drifts in from below
        if (accentBlock) {
          tl.fromTo(
            accentBlock,
            { opacity: 0, y: 40, rotate: -20 },
            { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' },
            0,
          )
        }

        // Primary image: slides up from below, extra tilt settles into resting tilt
        if (imgPrimary) {
          const restingRotate = parseFloat(imgPrimary.dataset.tilt ?? '0')
          tl.fromTo(
            imgPrimary,
            { opacity: 0, y: 80, rotate: restingRotate - 12, scale: 0.92 },
            { opacity: 1, y: 0, rotate: restingRotate, scale: 1, duration: 0.45, ease: 'power3.out' },
            0.05,
          )
        }

        // Secondary image: comes in slightly later, from opposite side
        if (imgSecondary) {
          const restingRotate = parseFloat(imgSecondary.dataset.tilt ?? '0')
          tl.fromTo(
            imgSecondary,
            { opacity: 0, y: 60, x: 20, rotate: restingRotate + 10, scale: 0.9 },
            { opacity: 1, y: 0, x: 0, rotate: restingRotate, scale: 1, duration: 0.4, ease: 'power3.out' },
            0.18,
          )
        }

        tl.fromTo(
          meta,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.15, ease: 'power2.out' },
          0.08,
        )

        tl.fromTo(
          dividers,
          { scaleX: 0, transformOrigin: 'left center' },
          { scaleX: 1, duration: 0.2, ease: 'power2.out', stagger: 0.05 },
          0.12,
        )

        tl.fromTo(
          headlines,
          { opacity: 0, y: 80, skewY: 8, transformOrigin: 'left bottom' },
          { opacity: 1, y: 0, skewY: 0, duration: 0.35, ease: 'power3.out', stagger: 0.08 },
          0.15,
        )

        tl.fromTo(
          body,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' },
          0.52,
        )

        tl.fromTo(
          extras,
          { opacity: 0, y: 16, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: 'power2.out', stagger: 0.06 },
          0.64,
        )
      })
    },
    { scope: containerRef },
  )

  return (
    <div ref={containerRef}>
      {sections.map((section) => (
        <section
          key={section.id}
          className="story-section relative flex min-h-screen overflow-hidden"
          style={{ backgroundColor: section.bg, color: section.color }}
        >
          {/* Noise */}
          <div
            className="pointer-events-none absolute inset-0 z-10 opacity-[0.035]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* ── Left: text ── */}
          <div className="relative z-20 flex w-full flex-col justify-center px-6 py-24 sm:px-12 lg:w-[54%] lg:px-16 xl:px-20">
            <div className="mx-auto w-full max-w-[720px]">
              {/* Meta */}
              <div
                className="story-meta mb-6 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.25em]"
                style={{ color: section.color, opacity: 0 }}
              >
                <span style={{ opacity: 0.45 }}>{section.index}</span>
                <span className="h-px w-8 shrink-0" style={{ backgroundColor: section.divider }} />
                <span style={{ opacity: 0.65 }}>{section.label}</span>
              </div>

              {/* Top divider */}
              <div
                className="story-divider mb-8 h-px w-full"
                style={{ backgroundColor: section.divider, transformOrigin: 'left center' }}
              />

              {/* Headline */}
              <h2
                className="font-black uppercase leading-[0.85] tracking-tight"
                style={{ fontSize: 'clamp(3rem, 8vw, 10.5rem)', color: section.color }}
              >
                {section.headline.map((line, i) => (
                  <div key={i} className="story-headline-line block overflow-hidden" style={{ opacity: 0 }}>
                    {line}
                  </div>
                ))}
              </h2>

              {/* Bottom divider */}
              <div
                className="story-divider my-10 h-px w-full"
                style={{ backgroundColor: section.divider, transformOrigin: 'left center' }}
              />

              {/* Body + extras */}
              <div className="flex flex-col gap-8">
                <p
                  className="story-body max-w-sm text-base leading-relaxed lg:text-lg"
                  style={{ color: section.color, opacity: 0 }}
                >
                  {section.body}
                </p>

                <div className="flex flex-wrap gap-3">
                  {'pills' in section &&
                    section.pills?.map((pill) => (
                      <span
                        key={pill}
                        className="story-extra inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold"
                        style={{ borderColor: section.divider, color: section.color, backgroundColor: 'rgba(255,255,255,0.12)', opacity: 0 }}
                      >
                        {pill}
                      </span>
                    ))}

                  {'stats' in section &&
                    section.stats?.map((stat) => (
                      <div key={stat.label} className="story-extra flex flex-col" style={{ minWidth: '6.5rem', opacity: 0 }}>
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
                        className="story-extra inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium"
                        style={{ borderColor: section.divider, color: section.color, opacity: 0 }}
                      >
                        <span className="size-1.5 rounded-full" style={{ backgroundColor: '#f97316' }} />
                        {region}
                      </span>
                    ))}

                  {'pillsDark' in section &&
                    section.pillsDark?.map((pill) => (
                      <span
                        key={pill}
                        className="story-extra inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold"
                        style={{ backgroundColor: 'rgba(249,115,22,0.15)', color: '#f97316', border: '1px solid rgba(249,115,22,0.3)', opacity: 0 }}
                      >
                        {pill}
                      </span>
                    ))}

                  {'cta' in section && section.cta && (
                    <div className="story-extra flex flex-wrap gap-4" style={{ opacity: 0 }}>
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
              </div>
            </div>
          </div>

          {/* ── Right: floating image collage ── */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-[48%] lg:block">
            <div className="relative h-full w-full">

              {/* Accent block: large rotated rectangle behind the photos */}
              <div
                className="story-img-accent absolute"
                style={{
                  width: '55%',
                  aspectRatio: '3/4',
                  top: '18%',
                  left: '22%',
                  borderRadius: '1.5rem',
                  backgroundColor: section.accent,
                  opacity: 0,
                }}
              />

              {/* Primary photo: tall portrait, tilted */}
              <div
                className="story-img-primary absolute overflow-hidden rounded-2xl"
                data-tilt={section.tilt[0]}
                style={{
                  width: '52%',
                  aspectRatio: '3/4',
                  top: '10%',
                  left: '8%',
                  rotate: `${section.tilt[0]}deg`,
                  boxShadow: '0 24px 64px -12px rgba(0,0,0,0.45)',
                  opacity: 0,
                }}
              >
                <img
                  src={section.images[0]}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {/* Subtle inner vignette */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.3))' }} />
              </div>

              {/* Secondary photo: landscape, tilted opposite, overlapping */}
              <div
                className="story-img-secondary absolute overflow-hidden rounded-2xl"
                data-tilt={section.tilt[1]}
                style={{
                  width: '46%',
                  aspectRatio: '4/3',
                  bottom: '12%',
                  right: '4%',
                  rotate: `${section.tilt[1]}deg`,
                  boxShadow: '0 20px 56px -10px rgba(0,0,0,0.5)',
                  opacity: 0,
                  border: '3px solid rgba(255,255,255,0.12)',
                }}
              >
                <img
                  src={section.images[1]}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Section number watermark */}
              <span
                className="absolute bottom-8 left-6 font-black leading-none select-none"
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
