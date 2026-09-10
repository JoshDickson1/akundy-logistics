import { ArrowRight, ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { StatsBento } from '../components/sections/stats-bento'
import { Button } from '../components/ui/button'
import { StoryScroll } from '../components/ui/story-scroll'
import { CtaSection } from '../components/sections/cta-section'
import { FaqSection } from '../components/sections/faq-section'
import { MissionSection } from '../components/sections/mission-section'
import { VideoGallery } from '../components/sections/video-gallery'
import { SEO } from '../components/seo'
import { WHY_CHOOSE_US, EQUIPMENT } from '../lib/data'

const PRODUCT_IMAGES: Record<string, string> = {
  '10ft-container':       '/images/container-10ft-1.jpg',
  '20ft-container':       '/images/container-20ft-1.jpg',
  '10ft-cargo-basket':    '/images/cargo-basket-10ft-1.jpg',
  '20ft-cargo-basket':    '/images/cargo-basket-20ft-1.jpg',
  '10ft-reefer':          '/images/reefer-10ft-1.jpg',
  '4m3-waste-skip':       '/images/NKgog.jpg',
  '6m3-waste-skip':       '/images/waste-skip-6m3-1.jpg',
  '8-drum-lube-rack':     '/images/lube-rack-8-1.jpg',
  '8-cylinder-gas-rack':  '/images/gas-rack-8-1.jpg',
  '12-cylinder-gas-rack': '/images/gas-rack-12-1.jpg',
  '16-cylinder-gas-rack': '/images/mission-worker.jpg',
}


const easeOut = [0.25, 0.1, 0.25, 1] as const

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
}

const WHY_CARD_IMAGES = [
  '/images/9HKlQ.jpg',
  '/images/why-delivery.jpg',
  '/images/why-quality.jpg',
  '/images/why-customer.jpg',
  '/images/why-safety.jpg',
  '/images/why-pricing.jpg',
]

const WHY_SHORT_TEXT = [
  '40+ years combined experience across marine, offshore and industrial sectors.',
  'Prompt mobilisation and reliable logistics keep your operations moving.',
  'We meet agreed requirements on time and within budget, every time.',
  'Long-term partnerships built on trust and practical solutions.',
  'HSE compliance embedded in every operation we undertake.',
  'Premium service at rates that protect your project economics.',
]

const GAP = 16
const DESKTOP_VISIBLE = 3
const MOBILE_CARD_H = 340

function WhyChooseCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const desktopCardRef = useRef<HTMLDivElement>(null)
  const [cardW, setCardW] = useState(0)
  const total = WHY_CHOOSE_US.length
  const desktopMax = total - DESKTOP_VISIBLE

  useEffect(() => {
    const measure = () => {
      if (desktopCardRef.current) setCardW(desktopCardRef.current.offsetWidth)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setActiveIndex(i => (i + 1) % total), 3800)
    return () => clearInterval(t)
  }, [paused, total])

  const desktopOffset = activeIndex % (desktopMax + 1)
  const prev = () => setActiveIndex(i => (i - 1 + total) % total)
  const next = () => setActiveIndex(i => (i + 1) % total)

  const chevronBtn = 'flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white'

  return (
    <div
      className="relative mx-auto max-w-6xl overflow-hidden bg-[#111]"
      style={{
        borderRadius: '28px',
        clipPath: 'polygon(0 0, calc(100% - 0px) 0, 100% 0, 100% 100%, 72px 100%, 0 calc(100% - 72px))',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 px-8 pb-10 pt-12 lg:px-14 lg:pt-16">
        {/* Header */}
        <div className="mb-10 text-center">
          {/* Badge */}
          <div className="mb-5 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-black">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Why Choose <span className="text-brand">Akundy?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/45">
            Six reasons operators across Nigeria, West Africa and internationally trust us to deliver, every time.
          </p>
        </div>

        {/* Desktop carousel horizontal, 3 visible */}
        <div className="hidden overflow-hidden lg:block">
          <motion.div
            className="flex"
            style={{ gap: GAP }}
            animate={{ x: cardW > 0 ? -(desktopOffset * (cardW + GAP)) : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          >
            {WHY_CHOOSE_US.map((item, i) => (
              <div
                key={item.title}
                ref={i === 0 ? desktopCardRef : undefined}
                className="group relative shrink-0 overflow-hidden rounded-2xl"
                style={{
                  width: `calc((100% - ${(DESKTOP_VISIBLE - 1) * GAP}px) / ${DESKTOP_VISIBLE})`,
                  aspectRatio: '3/4',
                }}
              >
                <img
                  src={WHY_CARD_IMAGES[i]}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="mb-2 inline-flex size-8 items-center justify-center rounded-lg bg-brand/20 backdrop-blur-sm">
                    <item.icon className="size-4 text-brand" />
                  </div>
                  <h3 className="text-base font-black leading-snug text-white">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/55">{WHY_SHORT_TEXT[i]}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile carousel vertical, 1 visible */}
        <div className="overflow-hidden lg:hidden" style={{ height: MOBILE_CARD_H }}>
          <motion.div
            className="flex flex-col"
            style={{ gap: GAP }}
            animate={{ y: -(activeIndex * (MOBILE_CARD_H + GAP)) }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          >
            {WHY_CHOOSE_US.map((item, i) => (
              <div
                key={item.title}
                className="group relative shrink-0 overflow-hidden rounded-2xl"
                style={{ height: MOBILE_CARD_H }}
              >
                <img
                  src={WHY_CARD_IMAGES[i]}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="mb-2 inline-flex size-8 items-center justify-center rounded-lg bg-brand/20 backdrop-blur-sm">
                    <item.icon className="size-4 text-brand" />
                  </div>
                  <h3 className="text-base font-black leading-snug text-white">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/55">{WHY_SHORT_TEXT[i]}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-between">
          {/* Progress dots */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: total }).map((_, i) => {
              const active = i === activeIndex
              return (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${active ? 'w-8 bg-brand' : 'w-1.5 bg-white/20 hover:bg-white/35'}`}
                />
              )
            })}
          </div>

          {/* Chevron buttons */}
          <div className="flex gap-2">
            {/* Desktop left/right */}
            <button onClick={prev} className={`${chevronBtn} hidden lg:flex`} aria-label="Previous">
              <ChevronLeft className="size-4" />
            </button>
            <button onClick={next} className={`${chevronBtn} hidden lg:flex`} aria-label="Next">
              <ChevronRight className="size-4" />
            </button>
            {/* Mobile up/down */}
            <button onClick={prev} className={`${chevronBtn} lg:hidden`} aria-label="Previous">
              <ChevronUp className="size-4" />
            </button>
            <button onClick={next} className={`${chevronBtn} lg:hidden`} aria-label="Next">
              <ChevronDown className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ease = [0.25, 0.1, 0.25, 1] as const


function ProductOverlayCard({ item, delay = 0 }: { item: typeof EQUIPMENT[number]; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease, delay }}
      className="group relative flex-1 overflow-hidden rounded-3xl"
    >
      <div className="relative h-48 overflow-hidden lg:h-full">
        <img
          src={PRODUCT_IMAGES[item.id] ?? '/images/crane-containers.jpg'}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <span className="mb-2 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
            {item.category}
          </span>
          <h3 className="text-base font-black leading-tight tracking-tight text-white lg:text-lg">
            {item.title}
          </h3>
          <Link
            to={`/equipment/${item.id}`}
            className="mt-3 inline-flex w-fit items-center gap-1.5 text-xs font-bold text-brand transition-colors hover:text-brand/80"
          >
            View Details <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

function ProductsVisibleGrid() {
  const featured = EQUIPMENT[0]
  const right = EQUIPMENT.slice(1, 4)
  return (
    <div className="flex flex-col gap-4 lg:h-[750px] lg:flex-row">
      {/* Left: featured big card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
        className="group relative overflow-hidden rounded-3xl lg:flex-1"
      >
        <div className="relative h-72 overflow-hidden lg:h-full">
          <img
            src={PRODUCT_IMAGES[featured.id] ?? '/images/crane-containers.jpg'}
            alt={featured.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
          <div className="absolute inset-0 flex flex-col justify-end p-7">
            <span className="mb-3 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
              {featured.category}
            </span>
            <h3 className="text-2xl font-black leading-tight tracking-tight text-white lg:text-3xl">
              {featured.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{featured.shortDescription}</p>
            <Link
              to={`/equipment/${featured.id}`}
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-brand/90"
            >
              View Details <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Right: 3 stacked overlay cards in a flex-col */}
      <div className="flex flex-col gap-4 lg:flex-1">
        {right.map((item, i) => (
          <ProductOverlayCard key={item.id} item={item} delay={i * 0.1} />
        ))}
      </div>
    </div>
  )
}

function ProductsSeeMore() {
  const [open, setOpen] = useState(false)
  const items = EQUIPMENT.slice(3)

  return (
    <div className="mt-4">
      <AnimatePresence>
        {open && (
          <motion.div
            key="more"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-4 pb-4 sm:grid-cols-2">
              {items.map((item, i) => (
                <div key={item.id} className="flex h-56 flex-col">
                  <ProductOverlayCard item={item} delay={i * 0.06} />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        className="mx-auto mt-2 flex items-center gap-2 rounded-full border-2 border-border/60 bg-card px-6 py-3 text-sm font-bold text-foreground transition-all hover:border-brand/40 hover:text-brand"
      >
        {open ? 'See Less' : 'See More'}
        {open ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
      </button>
    </div>
  )
}

export function HomePage() {
  return (
    <>
      <SEO
        title="Equipment Leasing, Marine & Offshore Logistics in Nigeria"
        description="Akundy Logistics delivers equipment leasing, marine logistics, offshore support, shipping agency, ship chandling, metal fabrication and procurement across Nigeria and West Africa. RC 6891533."
        path="/"
        ogImage="/images/crane-containers.jpg"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-background pb-16 pt-8 lg:pb-24 lg:pt-10">
        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 dark:hidden"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.055) 1px, transparent 1px)',
            backgroundSize: '96px 96px',
            maskImage: 'radial-gradient(ellipse 100% 70% at 50% 0%, black 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 100% 70% at 50% 0%, black 30%, transparent 100%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 hidden dark:block"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '96px 96px',
            maskImage: 'radial-gradient(ellipse 100% 70% at 50% 0%, black 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 100% 70% at 50% 0%, black 30%, transparent 100%)',
          }}
        />

        {/* Hidden SVG defs for hero clip-path */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="hero-butterfly" clipPathUnits="objectBoundingBox">
              {/*
                Rounded trapezoid corners using Q beziers at each turn.
                Bottom-left trap: (0,0.82)→(0.44,0.82)→(0.62,1), all corners softened.
                Top notch trap: symmetric, all 4 corners softened.
              */}
              <path d="
                M 0.029,0
                C 0.013,0 0,0.044 0,0.08
                L 0,0.92
                C 0,0.956 0.013,1 0.029,1
                L 0.971,1
                C 0.987,1 1,0.956 1,0.92
                L 1,0.08
                C 1,0.044 0.987,0 0.971,0
                L 0.722,0
                Q 0.70,0 0.684,0.013
                L 0.585,0.087
                Q 0.57,0.10 0.548,0.10
                L 0.452,0.10
                Q 0.43,0.10 0.415,0.087
                L 0.316,0.013
                Q 0.30,0 0.278,0
                Z
              " />
            </clipPath>
          </defs>
        </svg>

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">

          {/* Headline row 1 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="flex items-baseline gap-6"
          >
            {/* Inline label */}
            <p className="hidden shrink-0 pb-3 text-sm leading-snug text-muted-foreground lg:block lg:w-44">
              <span className="font-black text-foreground">Marine &amp; Offshore</span><br />
              Services Company,<br />
              Nigeria
            </p>
            <h1 className="text-[clamp(3.2rem,8.5vw,9rem)] font-black uppercase leading-[0.88] tracking-tighter">
              <span className="text-brand">One</span> Company,
            </h1>
          </motion.div>

          {/* Headline row 2 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.08 }}
            className="flex items-baseline justify-between gap-8"
          >
            <h2 className="text-[clamp(3.2rem,8.5vw,9rem)] font-black uppercase leading-[0.88] tracking-tighter">
              Total <span className="text-brand">Solutions.</span>
            </h2>
            <p className="hidden max-w-[260px] shrink-0 pb-3 text-sm leading-relaxed text-muted-foreground lg:block">
              Marine logistics, offshore support, equipment leasing, fabrication and
              procurement across Nigeria, West Africa and internationally.
            </p>
          </motion.div>

          {/* Mobile description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-sm leading-relaxed text-muted-foreground lg:hidden"
          >
            Marine logistics, offshore support, equipment leasing, fabrication and procurement across Nigeria, West Africa and internationally.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut, delay: 0.18 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Button asChild size="lg" className="rounded-full bg-brand px-8 text-white hover:bg-brand/90">
              <Link to="/services">
                Explore Services <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-2 px-8">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </motion.div>

          {/* Butterfly image */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.3 }}
            className="relative mt-10 h-[60vh] min-h-[380px] lg:h-[74vh]"
            style={{ clipPath: 'url(#hero-butterfly)' }}
          >
            <img
              src="/images/marine-port.jpg"
              alt="Akundy Logistics operations"
              className="h-full w-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            {/* Ghost watermark */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <span className="select-none whitespace-nowrap text-[18vw] font-black uppercase leading-none tracking-tighter text-white/[0.06]">
                AKUNDY
              </span>
            </div>
          </motion.div>

          {/* Stat badges outside, below image, left-aligned */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut, delay: 0.5 }}
            className="relative z-10 mt-4 flex flex-wrap gap-3"
          >
            {[
              ['40+', 'Yrs Combined Exp.'],
              ['9', 'Service Lines'],
              ['W. Africa & Intl.', 'Coverage'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-full border border-border bg-foreground px-6 py-3">
                <span className="text-base font-black text-background">{value}</span>
                <span className="ml-2 text-sm text-background/50">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Scroll: brand narrative */}
      <StoryScroll />

      {/* Stats */}
      <StatsBento />

      {/* Mission / Vision */}
      <MissionSection />

      {/* Featured Services */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          {/* Split header */}
          <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-5">
                <span className="inline-flex items-center rounded-full bg-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-background">What We Do</span>
              </div>
              <h2 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Integrated<br />
                <span className="text-brand">Solutions</span><br />
                for the Deep.
              </h2>
            </div>
            <div className="lg:pb-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Nine specialised service lines designed to keep your projects moving across
                offshore platforms, fabrication yards, port terminals and industrial sites in
                Nigeria and West Africa.
              </p>
              <div className="mt-8">
                <Button asChild variant="outline" className="border-2">
                  <Link to="/services">View All Services <ArrowRight className="ml-2 size-4" /></Link>
                </Button>
              </div>
            </div>
          </div>

          {/* 3-card grid glued, flat inner edges, outer corners only rounded */}
          <div className="mt-16 flex flex-col overflow-hidden rounded-3xl border border-border/50 shadow-soft lg:flex-row">
            {/* Card 1 Marine Logistics */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="group flex flex-1 flex-col overflow-hidden border-b border-border/50 bg-card last:border-b-0 lg:border-b-0 lg:border-r"
            >
              <div className="flex flex-1 flex-col p-8">
                <span className="inline-flex w-fit items-center rounded-full border border-border/50 px-3 py-1 text-xs font-semibold text-muted-foreground">
                  Marine
                </span>
                <h3 className="mt-5 text-2xl font-black leading-tight tracking-tight">
                  Marine Logistics
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Crew boat operations, supply vessel support, cargo handling and port coordination for offshore and onshore operations.
                </p>
                <div className="mt-6 h-px bg-border" />
                <Link
                  to="/services#marine-logistics"
                  className="mt-4 inline-flex items-center text-sm font-bold text-foreground hover:text-brand"
                >
                  View Service <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/marine-port.jpg"
                  alt="Marine Logistics"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Card 2 Offshore Support (featured, brand orange) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              className="group flex flex-1 flex-col overflow-hidden border-b border-white/20 bg-brand last:border-b-0 lg:border-b-0 lg:border-r"
            >
              <div className="flex flex-1 flex-col p-8">
                <span className="inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                  Offshore
                </span>
                <h3 className="mt-5 text-2xl font-black leading-tight tracking-tight text-white">
                  Offshore Support Services
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  Reliable operational support, manpower supply and logistics coordination for oil and gas operators across Nigeria, West Africa and internationally.
                </p>
                <div className="mt-6 h-px bg-white/20" />
                <Link
                  to="/services#offshore-support"
                  className="mt-4 inline-flex items-center text-sm font-bold text-white hover:text-white/80"
                >
                  View Service <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/container-ship.jpg"
                  alt="Offshore Support"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: 'center 65%' }}
                />
              </div>
            </motion.div>

            {/* Card 3 Equipment Leasing */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              className="group flex flex-1 flex-col overflow-hidden bg-card"
            >
              <div className="flex flex-1 flex-col p-8">
                <span className="inline-flex w-fit items-center rounded-full border border-border/50 px-3 py-1 text-xs font-semibold text-muted-foreground">
                  Equipment
                </span>
                <h3 className="mt-5 text-2xl font-black leading-tight tracking-tight">
                  Equipment Leasing
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Flexible leasing of containers, waste skips, gas racks and industrial equipment for marine and offshore projects.
                </p>
                <div className="mt-6 h-px bg-border" />
                <Link
                  to="/services#equipment-leasing"
                  className="mt-4 inline-flex items-center text-sm font-bold text-foreground hover:text-brand"
                >
                  View Service <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/crane-containers.jpg"
                  alt="Equipment Leasing"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="bg-[#fdf6ee] py-24 dark:bg-[#111] lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          {/* Header */}
          <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-background">
                  Our Products
                </span>
              </div>
              <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black uppercase leading-[0.92] tracking-tighter">
                Equipment<br />Available to Lease
              </h2>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <p className="max-w-sm text-base leading-relaxed text-muted-foreground lg:text-right">
                Regularly inspected, well-maintained equipment for marine, offshore, construction
                and industrial projects. Flexible terms, prompt delivery.
              </p>
              <Link
                to="/equipment"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-all hover:bg-brand/90"
              >
                Browse Full Catalogue <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* Always-visible grid: featured left + 2 stacked right */}
          <ProductsVisibleGrid />

          {/* See More toggle */}
          <ProductsSeeMore />
        </div>
      </section>

      {/* Why Choose Akundy carousel */}
      <section className="px-4 pb-20 pt-6 lg:px-8">
        <WhyChooseCarousel />
      </section>

      {/* Why Akundy */}
      <section className="relative overflow-hidden py-28">
        {/* Grid same style as hero */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)',
            backgroundSize: '96px 96px',
            maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 40%, transparent 100%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 hidden dark:block"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px)',
            backgroundSize: '96px 96px',
            maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 40%, transparent 100%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-8">
          {/* Header */}
          <div className="mb-16 flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-background">Why Akundy</span>
              </div>
              <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black uppercase leading-[0.92] tracking-tighter">
                Built for<br />Demanding<br />Projects.
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground lg:text-right">
              Technical know-how, safety discipline and responsive service a reliable extension of your operations team.
            </p>
          </div>

          {/* Bento grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {WHY_CHOOSE_US.map((item, i) => {
              const isFeatured = i === 1
              const isBlack = i === 3 || i === 5
              const num = String(i + 1).padStart(2, '0')
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className={
                    isFeatured
                      ? 'group relative flex flex-col overflow-hidden rounded-3xl bg-brand p-8 shadow-soft-xl transition-all duration-300 hover:-translate-y-1'
                      : isBlack
                        ? 'group relative flex flex-col overflow-hidden rounded-3xl bg-[#111] p-8 shadow-soft-xl transition-all duration-300 hover:-translate-y-1'
                        : 'group relative flex flex-col overflow-hidden rounded-3xl border border-border/50 bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft-xl'
                  }
                >
                  {/* Decorative number */}
                  <span
                    className={
                      'pointer-events-none absolute right-6 top-5 select-none text-7xl font-black leading-none ' +
                      (isFeatured || isBlack ? 'text-white/10' : 'text-foreground/[0.06]')
                    }
                  >
                    {num}
                  </span>

                  {/* Icon */}
                  <div
                    className={
                      'relative mb-6 inline-flex size-12 items-center justify-center rounded-2xl ' +
                      (isFeatured ? 'bg-white/15' : isBlack ? 'bg-white/10' : 'bg-brand/10')
                    }
                  >
                    <item.icon className={isFeatured || isBlack ? 'size-6 text-brand' : 'size-6 text-brand'} />
                  </div>

                  {/* Content */}
                  <h3 className={
                    'relative text-xl font-black leading-tight tracking-tight ' +
                    (isFeatured || isBlack ? 'text-white' : 'text-foreground')
                  }>
                    {item.title}
                  </h3>
                  <p className={
                    'relative mt-3 text-sm leading-relaxed ' +
                    (isFeatured || isBlack ? 'text-white/60' : 'text-muted-foreground')
                  }>
                    {item.text}
                  </p>

                  {/* Bottom accent line */}
                  <div className={
                    'mt-auto pt-7 ' +
                    (isFeatured ? '' : 'group-hover:opacity-100')
                  }>
                    <div className={
                      'h-px w-10 transition-all duration-300 group-hover:w-16 ' +
                      (isFeatured ? 'bg-white/30' : isBlack ? 'bg-brand/50' : 'bg-brand/40')
                    } />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Video gallery */}
      <VideoGallery />

      {/* FAQ */}
      <FaqSection />

      {/* CTA */}
      <CtaSection />
    </>
  )
}
