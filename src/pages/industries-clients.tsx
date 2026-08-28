import { Building2, Users } from 'lucide-react'
import { CLIENTS, INDUSTRIES } from '../lib/data'
import { SectionHeader } from '../components/section-header'
import { Card, CardContent, CardTitle } from '../components/ui/card'

export function IndustriesClientsPage() {
  const featuredIndustries = INDUSTRIES.slice(0, 6)

  return (
    <>
      {/* Page Header */}
      <section className="brand-section py-24">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)',
          }}
          aria-hidden="true"
        />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-brand">
              Industries & Clients
            </span>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Who We Serve
            </h1>
            <p className="mt-6 text-lg text-foreground/80">
              Trusted by operators, contractors and agencies across Nigeria's most demanding
              industrial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Industries"
            title="Sectors We Support"
            description="Our capabilities are built around the needs of Nigeria's oil & gas, marine, construction and industrial ecosystem."
          />

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredIndustries.map((industry) => (
              <Card
                key={industry}
                className="flex items-center gap-5 rounded-3xl border-border/50 p-7 transition-all hover:-translate-y-0.5 hover:border-brand/50"
              >
                <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <Building2 className="size-6" />
                </div>
                <CardTitle className="text-base font-bold">{industry}</CardTitle>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Clients"
            title="Organisations We Have Worked With"
            description="A selection of clients with whom we have secured contracts and delivered services."
          />

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {CLIENTS.map((client) => (
              <Card
                key={client}
                className="flex items-center gap-5 rounded-3xl border-l-4 border-l-brand p-7"
              >
                <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Users className="size-6" />
                </div>
                <CardContent className="p-0">
                  <p className="text-sm font-bold leading-snug text-foreground">{client}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="brand-section mt-16 rounded-[2.5rem] p-10 text-center lg:p-14">
            <div className="relative mx-auto max-w-2xl">
              <h3 className="text-2xl font-black">Become a Partner</h3>
              <p className="mt-4 text-foreground/80">
                We are always open to building long-term relationships with operators,
                contractors and suppliers who share our commitment to safety, quality and
                reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
