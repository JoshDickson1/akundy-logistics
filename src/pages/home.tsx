import { ArrowRight, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeader } from '../components/section-header'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { COMPANY, SERVICES, STATS, WHY_CHOOSE_US } from '../lib/data'

export function HomePage() {
  const featuredServices = SERVICES.slice(0, 6)
  const highlights = WHY_CHOOSE_US.slice(0, 4)

  return (
    <>
      {/* Hero */}
      <section className="brand-section flex min-h-[85vh] items-center">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)',
          }}
          aria-hidden="true"
        />

        <div className="container relative mx-auto px-4 py-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand">
              <span className="size-2 rounded-full bg-brand" />
              Incorporated {COMPANY.incorporated} · RC {COMPANY.rcNumber}
            </div>
            <h1 className="mt-8 text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              {COMPANY.tagline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
              {COMPANY.name} delivers dependable marine logistics, offshore support,
              equipment leasing, fabrication and procurement services across Nigeria
              and West Africa.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
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
                className="border-foreground/20 bg-transparent text-foreground hover:bg-foreground/10 hover:text-foreground"
              >
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
            <p className="mt-10 text-sm font-semibold uppercase tracking-widest text-brand">
              {COMPANY.motto}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-10">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-border bg-card p-7 text-center shadow-sm"
              >
                <div className="text-3xl font-black text-brand">{stat.value}</div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="Integrated Marine & Industrial Solutions"
            description="Nine service lines designed to keep your projects moving — from offshore platforms to fabrication yards and port operations."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <Card
                key={service.id}
                className="group relative overflow-hidden border-border/50 bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y-[-50%] rounded-full bg-brand/10 transition-transform group-hover:scale-150" />
                <CardHeader>
                  <div className="mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <service.icon className="size-7" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center text-sm font-semibold text-brand hover:underline"
                  >
                    Learn more <ChevronRight className="ml-1 size-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button asChild variant="outline" className="border-2">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="brand-section py-24">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)',
          }}
          aria-hidden="true"
        />
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Why Akundy"
            title="Built for Demanding Projects"
            description="We combine technical know-how, safety discipline and responsive service to become a reliable extension of your operations team."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-foreground/10 bg-white/60 p-7 shadow-sm backdrop-blur transition-colors hover:border-brand/50 dark:bg-white/5"
              >
                <item.icon className="size-8 text-brand" />
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand px-8 py-20 text-center text-white sm:px-12">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(-45deg, transparent, transparent 20px, #000 20px, #000 21px)',
              }}
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-2xl space-y-6">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Ready to Move Your Project Forward?
              </h2>
              <p className="text-lg text-white/90">
                Tell us what you need. We will respond with a practical, cost-effective
                solution backed by real offshore and industrial experience.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  <Link to="/contact">Request a Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white bg-transparent text-white hover:bg-white/10"
                >
                  <Link to="/about">Meet the Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
