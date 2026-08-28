import { CORE_VALUES, COMPANY } from '../lib/data'
import { DiagonalAccent } from '../components/diagonal-divider'
import { SectionHeader } from '../components/section-header'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export function AboutPage() {
  const topValues = CORE_VALUES.slice(0, 4)

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
              About Us
            </span>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Delivering Solutions.<br />Building Value.
            </h1>
          </div>
        </div>
      </section>

      {/* MD Message */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <DiagonalAccent className="mb-6" />
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Message from the Managing Director
              </h2>
              <div className="mt-8 space-y-6 text-muted-foreground">
                <p>
                  Welcome to {COMPANY.name}. It is my pleasure to introduce our company to you.
                </p>
                <p>
                  At Akundy, we believe that every successful project begins with trust,
                  professionalism, and an unwavering commitment to excellence. Since our
                  establishment, we have remained focused on providing dependable logistics,
                  engineering, offshore support, procurement, and marine services.
                </p>
                <div className="rounded-3xl border-l-4 border-brand bg-muted/30 p-8">
                  <p className="font-medium italic text-foreground">
                    "We value long-term partnerships and are committed to working closely with our
                    clients to understand their needs and provide practical, cost-effective, and
                    sustainable solutions."
                  </p>
                </div>
                <p className="text-foreground">
                  Yours faithfully,
                  <br />
                  <span className="font-bold">Andy Nwoha</span>
                  <br />
                  <span className="text-sm text-muted-foreground">
                    Managing Director / Chief Executive Officer
                  </span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card className="rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-xl">Company at a Glance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    ['Company Name', COMPANY.name],
                    ['Year of Incorporation', COMPANY.incorporated],
                    ['RC Number', COMPANY.rcNumber],
                    ['Tax ID', COMPANY.tin],
                    ['Headquarters', COMPANY.headquarters],
                    ['Service Coverage', COMPANY.coverage],
                    ['Corporate Colours', COMPANY.colors],
                    ['Motto', COMPANY.motto],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between border-b pb-3 text-sm last:border-0 last:pb-0">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="max-w-[55%] text-right font-medium">{value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Quality */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Our Vision',
                text: 'To become a leading indigenous service provider in logistics, offshore support, engineering, and procurement services across Nigeria and Africa.',
              },
              {
                title: 'Our Mission',
                text: 'To deliver dependable, cost-effective, and world-class solutions through innovation, professionalism, safety compliance, and excellent service delivery.',
              },
              {
                title: 'Quality Focus',
                text: 'Provide excellent services in accordance with agreed requirements, on time and within budget, without compromising acceptable industry standards and regulations.',
              },
            ].map((item) => (
              <Card key={item.title} className="rounded-3xl border-t-4 border-t-brand">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Culture"
            title="Our Core Values"
            description="The principles that guide every decision we make and every relationship we build."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {topValues.map((value) => (
              <div
                key={value.title}
                className="flex items-start gap-5 rounded-3xl border border-border bg-card p-8 transition-shadow hover:shadow-md"
              >
                <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <value.icon className="size-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{value.title}</h3>
                  <p className="mt-1 text-muted-foreground">{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
