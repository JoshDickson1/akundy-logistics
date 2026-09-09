import { BadgeCheck, Download, ExternalLink } from 'lucide-react'
import { CERTIFICATIONS, COMPANY } from '../lib/data'
import { PageHeader } from '../components/page-header'
import { SectionHeader } from '../components/section-header'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export function CertificationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Certifications"
        title="Registered. Licensed. Trusted."
        description="We maintain the registrations, licences and compliance records that give our clients confidence in every contract."
        image="/images/SP5u1.jpg"
        badges={[
          { value: 'RC 6891533', label: 'CAC Registered' },
          { value: 'NPA', label: 'Ship Agent' },
          { value: 'NCS', label: 'Ship Chandler' },
        ]}
      />

      {/* Cert grid */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Credentials"
            title="Regulatory & Compliance Standing"
            description={`All active licences and registrations held by ${COMPANY.shortName}.`}
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((cert) => (
              <Card
                key={cert.title}
                className="group relative overflow-hidden rounded-3xl border-border/50 transition-all hover:-translate-y-1 hover:shadow-soft-xl"
              >
                <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-brand/10 transition-transform group-hover:scale-150" />
                <CardHeader>
                  <div className="mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <cert.icon className="size-7" />
                  </div>
                  <CardTitle className="text-base leading-tight">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand">
                    {cert.issuer}
                  </p>
                  <div className="space-y-1.5 rounded-xl bg-muted/50 px-3 py-2.5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/70">Reference</p>
                    <p className="text-xs font-semibold text-foreground">{cert.ref}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="size-4 shrink-0 text-brand" />
                    <p className="text-xs font-medium text-muted-foreground">{cert.validity}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate of Incorporation detail */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] border border-border bg-card">
            <div className="grid lg:grid-cols-2">
              <div className="bg-muted/30 p-8 lg:p-12">
                <h3 className="text-2xl font-black">Certificate of Incorporation</h3>
                <p className="mt-4 text-muted-foreground">
                  {COMPANY.name} is a private company limited by shares, incorporated in Nigeria
                  under the Companies and Allied Matters Act 2020.
                </p>
                <dl className="mt-8 space-y-5">
                  {[
                    ['Company Name', COMPANY.name],
                    ['Company Registration Number', `RC ${COMPANY.rcNumber}`],
                    ['Date of Incorporation', '28 February 2023'],
                    ['Tax Identification Number', COMPANY.tin],
                    ['Registered Office', 'Opposite Pamo University Hospital, KM 17, Port Harcourt/Aba Expressway, Rivers State'],
                    ['Type', 'Private Company Limited by Shares'],
                  ].map(([dt, dd]) => (
                    <div key={dt}>
                      <dt className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        {dt}
                      </dt>
                      <dd className="mt-1 font-bold text-foreground">{dd}</dd>
                    </div>
                  ))}
                </dl>

                {/* Download / View actions */}
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href="/documents/cac-certificate.pdf"
                    download="Akundy-CAC-Certificate.pdf"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-bold text-background transition-opacity hover:opacity-80"
                  >
                    <Download className="size-4" /> Download PDF
                  </a>
                  <a
                    href="/documents/cac-certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-border px-5 py-2.5 text-sm font-bold text-foreground transition-colors hover:border-brand hover:text-brand"
                  >
                    <ExternalLink className="size-4" /> View in Browser
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-0">
                {/* Certificate image preview */}
                <div className="relative flex-1 overflow-hidden bg-muted/20">
                  <a
                    href="/documents/cac-certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full"
                    title="View CAC Certificate"
                  >
                    <img
                      src="/cac-certificate.png"
                      alt="CAC Certificate of Incorporation"
                      className="h-full max-h-[500px] w-full object-contain object-top p-4 transition-opacity group-hover:opacity-90 lg:max-h-none"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-full bg-black/70 px-5 py-2.5 text-sm font-bold text-white backdrop-blur-sm">
                        <ExternalLink className="size-4" /> View Full Document
                      </span>
                    </div>
                  </a>
                </div>

                {/* Regulatory coverage */}
                <div className="brand-section p-8 lg:p-10">
                  <p className="text-xs font-bold uppercase tracking-widest text-foreground/60">Regulatory Coverage</p>
                  <div className="mt-5 grid grid-cols-3 gap-2.5">
                    {[
                      ['CAC', 'Corporate Affairs Commission'],
                      ['FIRS', 'Fed. Inland Revenue'],
                      ['NCS', 'Nigeria Customs'],
                      ['NPA', 'Nigerian Ports Authority'],
                      ['NUPRC', 'Upstream Petroleum Reg.'],
                      ['CAMA 2020', 'Companies Act'],
                    ].map(([abbr, full]) => (
                      <div key={abbr} className="rounded-2xl bg-foreground/5 p-3 dark:bg-white/5">
                        <p className="text-base font-black text-brand">{abbr}</p>
                        <p className="mt-0.5 text-[9px] font-semibold leading-tight text-foreground/60 dark:text-white/60">{full}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
