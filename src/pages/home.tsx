import { ArrowRight, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { DiagonalDivider } from '../components/diagonal-divider'
import { SectionHeader } from '../components/section-header'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { COMPANY, SERVICES, STATS, WHY_CHOOSE_US } from '../lib/data'

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-foreground text-background">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, #f97316 0%, transparent 40%), radial-gradient(circle at 80% 70%, #ef4444 0%, transparent 35%)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)',
          }}
          aria-hidden="true"
        />
        <DiagonalDivider fill="#0a0a0a" className="dark:fill-[#0a0a0a]" />

        <div className="container relative mx-auto px-4 py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand">
                <span className="size-2 rounded-full bg-brand" />
                Incorporated {COMPANY.incorporated} · RC {COMPANY.rcNumber}
              </div>
              <h1 className="text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                {COMPANY.tagline}
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-white/80">
                {COMPANY.name} delivers dependable marine logistics, offshore support,
                equipment leasing, fabrication and procurement services across Nigeria
                and West Africa.
              </p>
              <div className="flex flex-wrap gap-4">
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
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <Link to="/contact">Request a Quote</Link>
                </Button>
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">
                {COMPANY.motto}
              </p>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-red-500/10" />
                <div className="relative grid h-full grid-cols-2 gap-4">
                  {SERVICES.slice(0, 4).map((service) => (
                    <div
                      key={service.id}
                      className="flex flex-col justify-between rounded-xl bg-foreground/80 p-5 backdrop-blur"
                    >
                      <service.icon className="size-8 text-brand" />
                      <span className="text-sm font-bold">{service.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full border-8 border-brand/20" />
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-lg bg-brand/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-6 text-center shadow-sm"
              >
                <div className="text-3xl font-black text-brand">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="Integrated Marine & Industrial Solutions"
            description="Nine service lines designed to keep your projects moving — from offshore platforms to fabrication yards and port operations."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Card
                key={service.id}
                className="group relative overflow-hidden border-border/50 bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y-[-50%] rounded-full bg-brand/10 transition-transform group-hover:scale-150" />
                <CardHeader>
                  <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <service.icon className="size-6" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
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
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative overflow-hidden bg-foreground py-24 text-background">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)',
          }}
          aria-hidden="true"
        />
        <div className="container relative mx-auto px-4 lg:px-8">
          <SectionHeader
            eyebrow="Why Akundy"
            title="Built for Demanding Projects"
            description="We combine technical know-how, safety discipline and responsive service to become a reliable extension of your operations team."
            light
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-brand/50"
              >
                <item.icon className="size-8 text-brand" />
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-brand px-6 py-16 text-center text-white sm:px-12 lg:py-20">
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
