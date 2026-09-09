import { COMPANY, TEAM } from '../lib/data'
import { CtaSection } from '../components/sections/cta-section'
import { MissionSection } from '../components/sections/mission-section'
import { DiagonalAccent } from '../components/diagonal-divider'
import { PageHeader } from '../components/page-header'
import { SEO } from '../components/seo'
import { SectionHeader } from '../components/section-header'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { ImageExpansionSlider, type ExpansionImage } from '../components/ui/image-expansion'
import { Timeline, type TimelineEntry } from '../components/ui/timeline'

const ABOUT_IMAGES: ExpansionImage[] = [
  { src: '/images/marine-port.jpg', label: 'Offshore Operations', tag: 'Marine' },
  { src: '/images/container-ship.jpg', label: 'Port Terminal Logistics', tag: 'Logistics' },
  { src: '/images/NKgog.jpg', label: 'Metal Fabrication', tag: 'Engineering' },
  { src: '/images/9HKlQ.jpg', label: 'Our People', tag: 'Team' },
  { src: '/images/why-safety.jpg', label: 'Safety Culture', tag: 'HSE' },
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
          <TimelineImage src="/images/marine-port.jpg" alt="Port Harcourt" />
          <TimelineImage src="/images/why-customer.jpg" alt="Company offices" />
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
            'Nigerian Ports Authority: Registered Ship Agent',
            'Nigeria Customs Service: Ship Chandler Licence',
            'NUPRC / DPR: Oil Industry Permit',
            'Federal Inland Revenue Service: TIN Registered',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
              {item}
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-3 pt-2">
          <TimelineImage src="/images/SP5u1.jpg" alt="Port authority" />
          <TimelineImage src="/images/AmSNA.jpg" alt="Certifications" />
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
          <TimelineImage src="/images/container-ship.jpg" alt="Marine vessel" />
          <TimelineImage src="/images/crane-containers.jpg" alt="Containers" />
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
          <TimelineImage src="/images/NKgog.jpg" alt="Fabrication works" />
          <TimelineImage src="/images/why-quality.jpg" alt="Management team" />
        </div>
      </div>
    ),
  },
  {
    title: 'Today',
    content: (
      <div className="space-y-5">
        <h3 className="text-xl font-black tracking-tight">Growing Across West Africa and Internationally</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Akundy Logistics now serves oil and gas operators, marine companies, construction
          firms, government agencies and industrial clients across Nigeria, West Africa and
          internationally. The company remains committed to long-term partnerships, safety-first
          operations and practical solutions that build real value for every client.
        </p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: '9+', label: 'Service Lines' },
            { value: '40+', label: 'Yrs Combined Exp.' },
            { value: 'W. Africa & Intl.', label: 'Coverage' },
          ].map(({ value, label }) => (
            <div key={label} className="rounded-2xl border border-brand/20 bg-brand/5 p-4 text-center">
              <p className="text-2xl font-black text-brand">{value}</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 pt-2">
          <TimelineImage src="/images/why-delivery.jpg" alt="Offshore operations" />
          <TimelineImage src="/images/why-safety.jpg" alt="West Africa" />
        </div>
      </div>
    ),
  },
]

export function AboutPage() {
  const founder = TEAM[0]

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Akundy Logistics and Development Company Limited: our story, mission, values and leadership team. Incorporated in Nigeria in 2023, serving oil and gas, marine and industrial clients."
        path="/about"
        ogImage="/images/marine-port.jpg"
      />

      <PageHeader
        eyebrow="About Us"
        title="Delivering Solutions. Building Value."
        description="An indigenous Nigerian company built on trust, professionalism and a relentless commitment to excellence across marine, offshore and industrial sectors."
        image="/images/marine-port.jpg"
        badges={[
          { value: 'Est. 2023', label: 'Incorporated' },
          { value: 'RC 6891533', label: 'CAC Registered' },
          { value: 'W. Africa & Intl.', label: 'Coverage' },
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

      <MissionSection />

      {/* Our Journey timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Our Journey"
            title="From Incorporation to Impact"
            description="How Akundy Logistics grew from a registered entity to an active, multi-service partner across Nigeria, West Africa and internationally."
          />
          <div className="mt-16">
            <Timeline data={JOURNEY} />
          </div>
        </div>
      </section>

      {/* About Our Founder */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl bg-muted shadow-soft-xl">
                <img
                  src="/images/executive-director.jpg"
                  alt={founder.name}
                  className="h-[480px] w-full object-cover object-top"
                />
              </div>
              {/* Floating name card */}
              <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-border/50 bg-card px-6 py-4 shadow-soft-lg">
                <p className="text-lg font-black tracking-tight">{founder.name}</p>
                <p className="text-sm text-muted-foreground">{founder.role}</p>
              </div>
            </div>

            {/* Text */}
            <div className="lg:pt-4">
              <span className="inline-flex items-center rounded-full bg-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-background">
                Meet Our Executive Director
              </span>
              <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight lg:text-5xl">
                Leadership.<br />Purpose.<br />Results.
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-brand" />
              <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                {founder.name} serves as Executive Director of Akundy Logistics and Development Company Limited, providing strategic oversight across the company's operations, partnerships and growth initiatives in Nigeria, West Africa and international markets.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Her leadership brings structure, discipline and a client-first approach to every aspect of the business, from business development and relationship management to ensuring operational standards are met across all service lines.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                {['Executive Director', 'Port Harcourt, Nigeria'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-semibold text-brand"
                  >
                    <span className="size-1.5 rounded-full bg-brand" />
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-10 border-t border-border pt-8">
                <p className="text-sm italic leading-relaxed text-muted-foreground">
                  "Our commitment is simple: deliver on every promise, protect every relationship, and build something our clients can depend on for years to come."
                </p>
                <p className="mt-3 text-sm font-black">{founder.name}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Leadership"
            title="Our Management Team"
            description="The experienced professionals who lead Akundy Logistics across operations, engineering and strategy."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-xl"
              >
                {/* Photo */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-brand/10">
                      <span className="text-5xl font-black text-brand/30">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="mb-1 h-px w-8 rounded-full bg-brand" />
                  <h3 className="mt-3 font-black leading-snug tracking-tight">{member.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {member.role}
                  </p>
                  <a
                    href={`tel:${member.phone}`}
                    className="mt-3 inline-block text-sm font-medium text-brand transition-opacity hover:opacity-70"
                  >
                    {member.phone}
                  </a>
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
