import { Download, ExternalLink } from 'lucide-react'
import { CERTIFICATIONS, COMPANY } from '../lib/data'
import { PageHeader } from '../components/page-header'
import { SectionHeader } from '../components/section-header'

export function CertificationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Certifications"
        title="Registered. Licensed. Trusted."
        description="We maintain the registrations, licences and compliance records that give our clients confidence in every contract."
        image="/images/why-quality.jpg"
        imagePosition="center 30%"
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

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((cert, idx) => {
              const isLight = idx % 2 === 0
              const isCurrent = cert.validity === 'Current' || cert.validity.includes('2023')
              return (
                <div
                  key={cert.title}
                  className={
                    isLight
                      ? 'group relative overflow-hidden rounded-3xl border border-border/50 bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-xl'
                      : 'group relative overflow-hidden rounded-3xl bg-[#0a0a0a] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-12px_rgba(249,115,22,0.18)]'
                  }
                >
                  {/* Orange top bar */}
                  <div className="absolute left-0 top-0 h-[3px] w-full bg-brand" />

                  {/* Faded watermark */}
                  <span
                    className={`pointer-events-none absolute right-5 top-4 select-none font-black leading-none ${isLight ? 'text-foreground/[0.06]' : 'text-white/[0.04]'}`}
                    style={{ fontSize: 'clamp(3rem,6vw,4rem)' }}
                  >
                    {cert.ref.replace(/[^A-Z0-9]/g, '').slice(0, 4)}
                  </span>

                  {/* Icon */}
                  <div className="relative mb-6 inline-flex size-12 items-center justify-center rounded-2xl bg-brand/15">
                    <cert.icon className="size-6 text-brand" />
                  </div>

                  {/* Issuer */}
                  <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isLight ? 'text-muted-foreground/60' : 'text-white/35'}`}>
                    {cert.issuer}
                  </p>

                  {/* Title */}
                  <h3 className={`mt-2 text-base font-black leading-snug tracking-tight ${isLight ? 'text-foreground' : 'text-white'}`}>
                    {cert.title}
                  </h3>

                  {/* Divider */}
                  <div className={`my-5 h-px ${isLight ? 'bg-border' : 'bg-white/10'}`} />

                  {/* Reference */}
                  <div className={`rounded-xl px-4 py-3 ${isLight ? 'bg-muted/60' : 'bg-white/[0.05]'}`}>
                    <p className={`text-[9px] font-bold uppercase tracking-widest ${isLight ? 'text-muted-foreground/50' : 'text-white/25'}`}>Reference</p>
                    <p className={`mt-1 font-mono text-xs font-bold ${isLight ? 'text-foreground/80' : 'text-white/70'}`}>{cert.ref}</p>
                  </div>

                  {/* Validity */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className={`size-2 shrink-0 rounded-full ${isCurrent ? 'bg-emerald-400' : 'bg-brand'}`} />
                    <p className={`text-xs font-medium ${isLight ? 'text-muted-foreground' : 'text-white/40'}`}>{cert.validity}</p>
                  </div>

                  {/* Description */}
                  <p className={`mt-5 text-sm leading-relaxed ${isLight ? 'text-muted-foreground' : 'text-white/35'}`}>{cert.description}</p>
                </div>
              )
            })}
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

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
