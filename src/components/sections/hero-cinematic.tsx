import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { COMPANY } from '../../lib/data'

export function HeroCinematic() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-background">
      <div className="mx-auto grid h-full min-h-[90vh] w-full max-w-[1600px] grid-cols-1 items-center gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-12 lg:py-0">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 order-2 text-center lg:order-1 lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white dark:bg-white dark:text-black">
            <span className="size-2 rounded-full bg-brand" />
            Incorporated {COMPANY.incorporated} · RC {COMPANY.rcNumber}
          </span>
          <h1 className="mt-8 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            {COMPANY.tagline}
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground lg:mx-0">
            {COMPANY.name} delivers dependable marine logistics, offshore support,
            equipment leasing and fabrication services across Nigeria and West Africa.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button
              asChild
              size="lg"
              className="bg-brand text-brand-foreground hover:bg-brand/90"
            >
              <Link to="/services">
                Explore Services <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-foreground/20 bg-transparent text-foreground hover:bg-foreground/5"
            >
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-brand">
            {COMPANY.motto}
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative order-1 h-[50vh] w-full overflow-hidden rounded-[2.5rem] lg:order-2 lg:h-[80vh]"
        >
          <img
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2400&auto=format&fit=crop"
            alt="Aerial view of a container port"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent lg:via-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:hidden" />
        </motion.div>
      </div>
    </section>
  )
}
