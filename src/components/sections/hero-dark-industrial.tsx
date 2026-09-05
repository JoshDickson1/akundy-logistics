import { ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { COMPANY } from '../../lib/data'

export function HeroDarkIndustrial() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2400&auto=format&fit=crop"
          alt="Container ship at sea"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(249,115,22,0.15),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-24 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand backdrop-blur-sm">
            <span className="size-2 rounded-full bg-brand" />
            Marine · Offshore · Industrial
          </span>
          <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {COMPANY.tagline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            {COMPANY.name} delivers dependable marine logistics, offshore support,
            equipment leasing and fabrication services across Nigeria and West Africa.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-brand text-brand-foreground hover:bg-brand/90"
            >
              <Link to="/services">
                Explore Services <ChevronRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10"
            >
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm font-medium uppercase tracking-wider text-white/60">
            <span>Equipment Leasing</span>
            <span className="hidden size-1.5 rounded-full bg-white/40 sm:inline-block" />
            <span>Marine Logistics</span>
            <span className="hidden size-1.5 rounded-full bg-white/40 sm:inline-block" />
            <span>Offshore Support</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient to page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
