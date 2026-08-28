import { CORE_VALUES, COMPANY } from '../lib/data'
import { DiagonalAccent } from '../components/diagonal-divider'
import { SectionHeader } from '../components/section-header'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export function AboutPage() {
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
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
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
                  engineering, offshore support, procurement, and marine services that
                  consistently meet the expectations of our clients.
                </p>
                <p>
                  Our vision is to build a company recognised not only for the quality of its
                  services, but also for its integrity, innovation, and dedication to safety. We
                  understand that today's business environment demands efficiency, reliability,
                  and value, and we continuously invest in our people, systems, and operational
                  capabilities to meet those demands.
                </p>
                <p>
                  Whether supporting offshore operations, providing marine logistics, delivering
                  engineering solutions, leasing equipment, or managing procurement activities,
                  our objective is always the same — to deliver services that contribute
                  meaningfully to our clients' success.
                </p>
                <div className="border-l-4 border-brand bg-muted/50 p-6">
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

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Company at a Glance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between border-b pb-3 text-sm">
                    <span className="text-muted-foreground">Company Name</span>
                    <span className="font-medium">{COMPANY.name}</span>
                  </div>
                  <div className="flex justify-between border-b pb-3 text-sm">
                    <span className="text-muted-foreground">Year of Incorporation</span>
                    <span className="font-medium">{COMPANY.incorporated}</span>
                  </div>
                  <div className="flex justify-between border-b pb-3 text-sm">
                    <span className="text-muted-foreground">RC Number</span>
                    <span className="font-medium">{COMPANY.rcNumber}</span>
                  </div>
                  <div className="flex justify-between border-b pb-3 text-sm">
                    <span className="text-muted-foreground">Tax ID</span>
                    <span className="font-medium">{COMPANY.tin}</span>
                  </div>
                  <div className="flex justify-between border-b pb-3 text-sm">
                    <span className="text-muted-foreground">Headquarters</span>
                    <span className="font-medium">{COMPANY.headquarters}</span>
                  </div>
                  <div className="flex justify-between border-b pb-3 text-sm">
                    <span className="text-muted-foreground">Service Coverage</span>
                    <span className="font-medium">{COMPANY.coverage}</span>
                  </div>
                  <div className="flex justify-between border-b pb-3 text-sm">
                    <span className="text-muted-foreground">Corporate Colours</span>
                    <span className="font-medium">{COMPANY.colors}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Motto</span>
                    <span className="font-medium">{COMPANY.motto}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Quality */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-t-4 border-t-brand">
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To become a leading indigenous service provider in logistics, offshore support,
                  engineering, and procurement services across Nigeria and Africa.
                </p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-brand">
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To deliver dependable, cost-effective, and world-class solutions through
                  innovation, professionalism, safety compliance, and excellent service delivery.
                </p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-brand">
              <CardHeader>
                <CardTitle>Quality Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Provide excellent services in accordance with agreed requirements, on time and
                  within budget, without compromising acceptable industry standards and
                  regulations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            eyebrow="Culture"
            title="Our Core Values"
            description="The principles that guide every decision we make and every relationship we build."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map((value) => (
              <div
                key={value.title}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-sm"
              >
                <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <value.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-bold">{value.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
