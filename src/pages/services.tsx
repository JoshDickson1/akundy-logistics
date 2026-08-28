import { SERVICES } from '../lib/data'
import { SectionHeader } from '../components/section-header'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="brand-section py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-brand">
              Our Services
            </span>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              One Company. Total Solutions.
            </h1>
            <p className="mt-6 text-lg text-foreground/80">
              Integrated marine, offshore, engineering and industrial services delivered with
              safety, precision and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Capabilities"
            title="Nine Service Lines. One Reliable Partner."
          />
          <div className="mt-16 grid gap-10">
            {SERVICES.map((service, index) => (
              <Card
                key={service.id}
                id={service.id}
                className="scroll-mt-28 overflow-hidden rounded-3xl border-border/50"
              >
                <div className="grid md:grid-cols-[220px_1fr]">
                  <div className="flex items-center justify-center bg-brand/5 p-8 md:p-10">
                    <div className="text-center">
                      <service.icon className="mx-auto size-14 text-brand" />
                      <span className="mt-4 block text-5xl font-black text-brand/20">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:p-10">
                    <CardHeader className="p-0">
                      <CardTitle className="text-2xl font-black">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 pt-4">
                      <p className="max-w-3xl text-muted-foreground">{service.description}</p>
                      <div className="mt-8">
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground">
                          Key Deliverables
                        </h4>
                        <ul className="grid gap-3 sm:grid-cols-2">
                          {service.items.slice(0, 4).map((item) => (
                            <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                              <span className="size-2 rounded-full bg-brand" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
