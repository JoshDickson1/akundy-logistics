import { useEffect, useRef } from 'react'
import { CLIENTS, INDUSTRIES } from '../lib/data'
import { PageHeader } from '../components/page-header'
import { SectionHeader } from '../components/section-header'
import { ScrollReelTestimonials } from '../components/ui/scroll-reel-testimonials'
import { CtaSection } from '../components/sections/cta-section'

const INDUSTRY_IMAGES: string[] = [
  '/images/marine-port.jpg',
  '/images/container-ship.jpg',
  '/images/crane-containers.jpg',
  '/images/NKgog.jpg',
  '/images/why-delivery.jpg',
  '/images/SP5u1.jpg',
  '/images/why-safety.jpg',
]

function ClientMarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const pos = useRef(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf: number
    const speed = reverse ? -0.4 : 0.4

    const tick = () => {
      pos.current += speed
      const half = el.scrollWidth / 2
      if (pos.current >= half) pos.current = 0
      if (pos.current < 0) pos.current = half - 1
      el.style.transform = `translateX(${-pos.current}px)`
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reverse])

  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
      <div ref={ref} className="flex gap-3 will-change-transform" style={{ width: 'max-content' }}>
        {doubled.map((client, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-3 rounded-full border border-border/60 bg-card px-6 py-3 shadow-soft"
          >
            <span className="size-2 shrink-0 rounded-full bg-brand" />
            <span className="whitespace-nowrap text-sm font-semibold text-foreground">{client}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function IndustriesClientsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries & Clients"
        title="Who We Serve"
        description="Trusted by operators, contractors and agencies across Nigeria's most demanding industrial sectors."
        image="/images/crane-containers.jpg"
        badges={[
          { value: '7+', label: 'Industries' },
          { value: 'Nigeria', label: 'Primary Market' },
          { value: 'W. Africa & Intl.', label: 'Coverage' },
        ]}
      />

      {/* Industries */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Industries"
            title="Sectors We Support"
            description="Our capabilities are built around the needs of Nigeria's oil & gas, marine, construction and industrial ecosystem."
          />

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {INDUSTRIES.map((industry, i) => (
              <div
                key={industry}
                className="group relative overflow-hidden rounded-3xl"
                style={{ aspectRatio: i < 4 ? '4/3' : '16/9' }}
              >
                <img
                  src={INDUSTRY_IMAGES[i % INDUSTRY_IMAGES.length]}
                  alt={industry}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-brand">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-1 text-base font-black leading-tight text-white">{industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="overflow-hidden bg-muted/30 py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Clients"
            title="Organisations We Have Worked With"
            description="A selection of the clients with whom we have secured contracts and delivered services."
          />
        </div>

        <div className="mt-16 space-y-4">
          <ClientMarqueeRow items={CLIENTS} />
          <ClientMarqueeRow items={[...CLIENTS].reverse()} reverse />
        </div>

        {/* Featured client cards */}
        <div className="mx-auto mt-16 max-w-6xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {CLIENTS.map((client, i) => (
              <div
                key={client}
                className="relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 shadow-soft"
              >
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-brand/10" />
                <div className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl bg-brand/10">
                  <span className="text-lg font-black text-brand">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className="text-base font-bold leading-snug text-foreground">{client}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-brand" />
                  <span className="text-xs text-muted-foreground">Active Partner</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <ScrollReelTestimonials />

      {/* Become a Partner CTA */}
      <CtaSection />
    </>
  )
}
