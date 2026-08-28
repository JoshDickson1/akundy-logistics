import { CERTIFICATIONS, COMPANY } from '../lib/data'
import { SectionHeader } from '../components/section-header'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export function CertificationsPage() {
  const topCerts = CERTIFICATIONS.slice(0, 4)

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
              Certifications
            </span>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Registered. Licensed. Trusted.
            </h1>
            <p className="mt-6 text-lg text-foreground/80">
              We maintain the registrations, licences and compliance records that give our
              clients confidence in every contract.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Credentials"
            title="Regulatory & Compliance Standing"
            description={`Key registrations and certifications held by ${COMPANY.shortName}.`}
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {topCerts.map((cert) => (
              <Card
                key={cert.title}
                className="group relative overflow-hidden rounded-3xl border-border/50 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y-[-50%] rounded-full bg-brand/10 transition-transform group-hover:scale-150" />
                <CardHeader>
                  <div className="mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <cert.icon className="size-7" />
                  </div>
                  <CardTitle className="text-base leading-tight">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand">
                    {cert.issuer}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 overflow-hidden rounded-[2.5rem] border border-border bg-card">
            <div className="grid lg:grid-cols-2">
              <div className="bg-muted/30 p-8 lg:p-12">
                <h3 className="text-2xl font-black">Certificate of Incorporation</h3>
                <p className="mt-4 text-muted-foreground">
                  {COMPANY.name} is a private company limited by shares, incorporated in Nigeria
                  under the Companies and Allied Matters Act 2020.
                </p>
                <dl className="mt-8 space-y-5">
                  {[
                    ['Company Registration Number', COMPANY.rcNumber],
                    ['Date of Incorporation', '28 February 2023'],
                    ['Tax Identification Number', COMPANY.tin],
                  ].map(([dt, dd]) => (
                    <div key={dt}>
                      <dt className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        {dt}
                      </dt>
                      <dd className="mt-1 text-xl font-bold text-foreground">{dd}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="brand-section flex items-center justify-center p-8 lg:p-12">
                <div className="relative text-center">
                  <div className="mx-auto inline-flex size-24 items-center justify-center rounded-full bg-brand/10">
                    <span className="text-4xl font-black text-brand">CAC</span>
                  </div>
                  <p className="mt-6 text-lg font-bold">Corporate Affairs Commission</p>
                  <p className="mt-2 text-sm text-foreground/70">
                    Certificate issued under the hand of the Registrar-General at Abuja.
                  </p>
                  <p className="mt-6 text-xs uppercase tracking-widest text-foreground/50">
                    Original documents available on request
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
