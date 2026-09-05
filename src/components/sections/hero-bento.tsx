import { ArrowRight, MapPin, Phone, TrendingUp } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { COMPANY, STATS } from '../../lib/data'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const } },
}

export function HeroBento() {
  const [experience, , , coverage] = STATS

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background py-16 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white dark:bg-white dark:text-black">
              <span className="size-2 rounded-full bg-brand" />
              One Company. Total Solutions.
            </span>
            <h1 className="mt-8 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Marine & Industrial Logistics, Simplified.
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
          </motion.div>

          {/* Bento grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 gap-4"
          >
            <motion.div variants={itemVariants} className="col-span-2">
              <Card className="relative h-56 overflow-hidden rounded-3xl border-0 p-0">
                <img
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1600&auto=format&fit=crop"
                  alt="Container operations"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <CardContent className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                    {coverage.label}
                  </p>
                  <p className="text-2xl font-black">{coverage.value}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="flex h-full flex-col justify-between rounded-3xl bg-black p-5 text-white dark:bg-white dark:text-black">
                <TrendingUp className="size-6 opacity-60" />
                <div>
                  <p className="text-3xl font-black">{experience.value}</p>
                  <p className="text-xs font-medium text-white/70 dark:text-black/70">
                    {experience.label}
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="flex h-full flex-col justify-between rounded-3xl p-5">
                <MapPin className="size-6 text-brand" />
                <div>
                  <p className="text-sm font-bold">Port Harcourt</p>
                  <p className="text-xs text-muted-foreground">Rivers State, Nigeria</p>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="col-span-2">
              <Link
                to="/contact"
                className="group flex items-center justify-between rounded-3xl bg-brand p-5 text-white transition-colors hover:bg-brand/90"
              >
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider">Request a Quote</p>
                  <p className="text-xs text-white/80">Response within 24 hours</p>
                </div>
                <Phone className="size-5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
