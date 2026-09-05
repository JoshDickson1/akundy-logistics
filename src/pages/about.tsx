import { CORE_VALUES, COMPANY } from '../lib/data'
import { CtaSection } from '../components/sections/cta-section'
import { DiagonalAccent } from '../components/diagonal-divider'
import { PageHeader } from '../components/page-header'
import { SectionHeader } from '../components/section-header'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { ImageExpansionSlider, type ExpansionImage } from '../components/ui/image-expansion'
import { Timeline, type TimelineEntry } from '../components/ui/timeline'

const ABOUT_IMAGES: ExpansionImage[] = [
  { src: 'https://picsum.photos/seed/about-offshore/900/600', label: 'Offshore Operations', tag: 'Marine' },
  { src: 'https://picsum.photos/seed/about-terminal/900/600', label: 'Port Terminal Logistics', tag: 'Logistics' },
  { src: 'https://picsum.photos/seed/about-fabrication/900/600', label: 'Metal Fabrication', tag: 'Engineering' },
  { src: 'https://picsum.photos/seed/about-team/900/600', label: 'Our People', tag: 'Team' },
  { src: 'https://picsum.photos/seed/about-safety/900/600', label: 'Safety Culture', tag: 'HSE' },
]

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-semibold text-brand">
      <span className="size-1.5 rounded-full bg-brand" />
      {children}
    </span>
  )
}

function TimelineImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
    </div>
  )
}

const JOURNEY: TimelineEntry[] = [
  {
    title: 'Feb 2023',
    content: (
      <div className="space-y-5">
        <h3 className="text-xl font-black tracking-tight">Incorporated and Ready</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {COMPANY.name} was formally incorporated on 28 February 2023 as a private company
          limited by shares. Headquarters were established at KM 17, Port Harcourt/Aba
          Expressway, Rivers State, placing the company at the heart of Nigeria's oil and gas
          supply chain.
        </p>
        <div className="flex flex-wrap gap-2">
          <Pill>RC No. {COMPANY.rcNumber}</Pill>
          <Pill>TIN {COMPANY.tin}</Pill>
          <Pill>Port Harcourt, Nigeria</Pill>
        </div>
        <div className="grid grid-cols-2 gap-3 pt-2">
          <TimelineImage src="https://picsum.photos/seed/tl-phc/480/360" alt="Port Harcourt" />
          <TimelineImage src="https://picsum.photos/seed/tl-office/480/360" alt="Company offices" />
        </div>
      </div>
    ),
  },
  {
    title: '2023',
    content: (
      <div className="space-y-5">
        <h3 className="text-xl font-black tracking-tight">Regulatory Framework Secured</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Within months of incorporation, Akundy obtained all major regulatory licences required
          to operate across Nigeria's marine and energy sectors: NPA ship agent registration,
          Nigeria Customs ship chandler licence, and the NUPRC/DPR oil industry permit.
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {[
            'Nigerian Ports Authority — Registered Ship Agent',
            'Nigeria Customs Service — Ship Chandler Licence',
            'NUPRC / DPR — Oil Industry Permit',
            'Federal Inland Revenue Service — TIN Registered',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
              {item}
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-3 pt-2">
          <TimelineImage src="https://picsum.photos/seed/tl-npa/480/360" alt="Port authority" />
          <TimelineImage src="https://picsum.photos/seed/tl-docs/480/360" alt="Certifications" />
        </div>
      </div>
    ),
  },
  {
    title: '2023',
    content: (
      <div className="space-y-5">
        <h3 className="text-xl font-black tracking-tight">First Contracts, First Deliveries</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Akundy launched operations across marine logistics, equipment leasing and ship chandler
          services. Early contracts in Port Harcourt and surrounding offshore zones established
          the company's reputation for reliability and rapid response.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Marine Logistics', detail: 'Crew boats, cargo, port coordination' },
            { label: 'Equipment Leasing', detail: 'Containers, skips, gas racks' },
            { label: 'Ship Chandler', detail: 'Provisions, stores and safety supply' },
            { label: 'Offshore Support', detail: 'Manpower and operational logistics' },
          ].map(({ label, detail }) => (
            <div key={label} className="rounded-2xl border border-border/50 bg-muted/40 p-4">
              <p className="text-xs font-bold text-foreground">{label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 pt-1">
          <TimelineImage src="https://picsum.photos/seed/tl-vessel/480/360" alt="Marine vessel" />
          <TimelineImage src="https://picsum.photos/seed/tl-container/480/360" alt="Containers" />
        </div>
      </div>
    ),
  },
  {
    title: '2024',
    content: (
      <div className="space-y-5">
        <h3 className="text-xl font-black tracking-tight">Nine Service Lines, One Team</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          The full suite of nine service lines became operational: metal fabrication, facility
          maintenance and procurement were added alongside the founding marine and logistics
          capabilities. A technical and base management team led by experienced industry
          professionals was formalised under the leadership of Andy Nwoha.
        </p>
        <div className="flex flex-wrap gap-2">
          <Pill>Metal Fabrication</Pill>
          <Pill>Facility Maintenance</Pill>
          <Pill>Procurement & Supply</Pill>
          <Pill>General Contracts</Pill>
        </div>
        <div className="grid grid-cols-2 gap-3 pt-2">
          <TimelineImage src="https://picsum.photos/seed/tl-fab/480/360" alt="Fabrication works" />
          <TimelineImage src="https://picsum.photos/seed/tl-team/480/360" alt="Management team" />
        </div>
      </div>
    ),
  },
  {
    title: 'Today',
    content: (
      <div className="space-y-5">
        <h3 className="text-xl font-black tracking-tight">Growing Across West Africa</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Akundy Logistics now serves oil and gas operators, marine companies, construction
          firms, government agencies and industrial clients across Nigeria and West Africa.
          The company remains committed to long-term partnerships, safety-first operations
          and practical solutions that build real value for every client.
        </p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: '9+', label: 'Service Lines' },
            { value: '40+', label: 'Yrs Combined Exp.' },
            { value: 'W. Africa', label: 'Coverage' },
          ].map(({ value, label }) => (
            <div key={label} className="rounded-2xl border border-brand/20 bg-brand/5 p-4 text-center">
              <p className="text-2xl font-black text-brand">{value}</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 pt-2">
          <TimelineImage src="https://picsum.photos/seed/tl-offshore/480/360" alt="Offshore operations" />
          <TimelineImage src="https://picsum.photos/seed/tl-westaf/480/360" alt="West Africa" />
        </div>
      </div>
    ),
  },
]

export function AboutPage() {
  const topValues = CORE_VALUES.slice(0, 4)

  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Delivering Solutions. Building Value."
        description="An indigenous Nigerian company built on trust, professionalism and a relentless commitment to excellence across marine, offshore and industrial sectors."
        image="https://picsum.photos/seed/about-hero-offshore/1400/600"
        badges={[
          { value: 'Est. 2023', label: 'Incorporated' },
          { value: 'RC 6891533', label: 'CAC Registered' },
          { value: 'W. Africa', label: 'Coverage' },
        ]}
      />

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

      {/* Image strip */}
      <section className="pb-2 pt-0">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <ImageExpansionSlider images={ABOUT_IMAGES} height={460} />
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

      {/* Our Journey timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Our Journey"
            title="From Incorporation to Impact"
            description="How Akundy Logistics grew from a registered entity to an active, multi-service partner across Nigeria and West Africa."
          />
          <div className="mt-16">
            <Timeline data={JOURNEY} />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-muted/30 py-24">
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
                className="flex items-start gap-5 rounded-3xl border border-border bg-card p-8 transition-shadow hover:shadow-soft"
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

      <CtaSection />
    </>
  )
}
