import { Check, ShieldCheck } from 'lucide-react'
import { CtaSection } from '../components/sections/cta-section'
import { PageHeader } from '../components/page-header'
import { SEO } from '../components/seo'
import { SectionHeader } from '../components/section-header'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

const HSE_POINTS = [
  'Safe work practices across all sites and vessels',
  'Risk assessment procedures before every operation',
  'Environmental protection and responsible waste management',
  'Personnel safety training and competency development',
  'Compliance with all applicable HSE standards and regulations',
]

const QUALITY_COMMITMENTS = [
  {
    title: 'Responsible & Cost-Effective',
    text: 'We balance quality delivery with practical, budget-conscious execution across every assignment.',
  },
  {
    title: 'Quality Non-Negotiable',
    text: 'Quality is embedded into every process. We do not compromise standards to meet schedules.',
  },
  {
    title: 'Client-Focused',
    text: 'Every decision is benchmarked against our clients\' business needs and operational requirements.',
  },
  {
    title: 'On Time, Within Budget',
    text: 'We meet agreed requirements by the specified time without exceeding approved budgets.',
  },
  {
    title: 'Superior Service Level',
    text: 'Our target is to provide a level of service that consistently exceeds that of our competitors.',
  },
  {
    title: 'Continuous Improvement',
    text: 'We continually improve our safety records, services, and performance through structured review.',
  },
]

const ETHICS_PILLARS = [
  {
    title: 'Shareholders',
    text: 'Safeguard their investment and assets, and provide targeted returns through disciplined operations.',
  },
  {
    title: 'Customers',
    text: 'Deliver services safely, competitively, reliably and to the desired quality on every assignment.',
  },
  {
    title: 'Employees',
    text: 'Provide safe work environments, good conditions of employment, and promote development of human resources.',
  },
  {
    title: 'Contractors',
    text: 'Seek and promote mutually beneficial relationships and principles with all service providers.',
  },
  {
    title: 'Society',
    text: 'Conduct business in a socially responsible manner with high regard for safety, health and environment.',
  },
]

export function HseQualityPage() {
  return (
    <>
      <SEO
        title="HSE & Quality"
        description="Our health, safety, environment and quality management standards. Akundy Logistics operates with a zero-compromise safety culture across all marine, offshore and industrial operations."
        path="/hse-quality"
        ogImage="/images/why-safety.jpg"
      />

      <PageHeader
        eyebrow="HSE & Quality"
        title="Safety. Quality. Ethics."
        description="Our operations are built on professionalism, safety, integrity, efficiency and customer satisfaction."
        image="/images/why-safety.jpg"
        badges={[
          { value: 'Zero', label: 'Compromise on Safety' },
          { value: 'HSE', label: 'Certified Operations' },
          { value: 'ISO Aligned', label: 'Quality System' },
        ]}
      />

      {/* HSE Policy */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="HSE Policy"
            title="Health, Safety & Environment"
            description="Safety is a core part of our operations. We are committed to maintaining a safe and healthy working environment for employees, clients, contractors and host communities."
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <Card className="rounded-3xl border-l-4 border-l-brand">
              <CardHeader>
                <CardTitle className="text-2xl">Our HSE Commitment</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-5">
                  {HSE_POINTS.map((point) => (
                    <li key={point} className="flex items-start gap-4">
                      <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <Check className="size-3.5" />
                      </span>
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="brand-section overflow-hidden rounded-3xl p-8 lg:p-12">
              <div>
                <div className="mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-foreground/10 dark:bg-white/10">
                  <ShieldCheck className="size-7 text-brand" />
                </div>
                <h3 className="text-2xl font-black">Safety Culture</h3>
                <p className="mt-4 leading-relaxed text-foreground/80 dark:text-white/80">
                  Every employee, contractor and partner is expected to take responsibility for
                  safety. We embed hazard awareness into daily briefings, equipment checks and
                  operational planning so that everyone returns home safely.
                </p>
                <blockquote className="mt-6 border-l-2 border-brand pl-4 text-sm italic text-foreground/70 dark:text-white/70">
                  "Partnering for safe and successful operations offshore."
                </blockquote>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-foreground/5 p-5 text-center dark:bg-white/5">
                    <div className="text-3xl font-black text-brand">Zero</div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-foreground/60 dark:text-white/60">
                      Compromise on Safety
                    </div>
                  </div>
                  <div className="rounded-2xl bg-foreground/5 p-5 text-center dark:bg-white/5">
                    <div className="text-3xl font-black text-brand">24/7</div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-foreground/60 dark:text-white/60">
                      HSE Awareness
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed image break */}
      <section className="relative h-64 overflow-hidden lg:h-80">
        <img
          src="/images/9HKlQ.jpg"
          alt="Safety operations"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand">Our Commitment</p>
            <h3 className="mt-3 max-w-lg text-3xl font-black leading-tight text-white lg:text-4xl">
              Every person returns home safely. No exceptions.
            </h3>
          </div>
        </div>
      </section>

      {/* Quality Management */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Quality Management"
            title="Consistent Quality, Continuous Improvement"
            description="Our quality management system focuses on customer satisfaction through precision, process discipline and a culture of doing it right the first time."
          />

          <div className="mt-8 rounded-3xl border border-border/50 bg-card p-8 lg:p-12">
            <p className="text-muted-foreground">
              Our business procedures and processes ensure that all physical, human, and financial resources are
              utilised in an efficient and environment-friendly manner. Our Quality Management System focuses on
              customer satisfaction through an in-depth understanding of our operating conditions, precision in
              inspection and examination processes, and continually improving the quality of our service and product
              delivery in accordance with client needs.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {QUALITY_COMMITMENTS.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-3xl border border-border bg-card p-7 shadow-soft"
              >
                <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Check className="size-4" />
                </span>
                <div>
                  <p className="font-bold text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Business Ethics */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Business Ethics"
            title="Our Responsibilities"
            description="We conduct business safely, efficiently, effectively and profitably, with integrity towards all stakeholders."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ETHICS_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-border/50 bg-card p-8 transition-shadow hover:shadow-soft"
              >
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-2xl bg-brand/10">
                  <span className="size-2.5 rounded-full bg-brand" />
                </div>
                <h3 className="text-lg font-bold">{pillar.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{pillar.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-muted/40 p-8 lg:p-12">
            <p className="text-center text-sm text-muted-foreground">
              All employees, approved agents and representatives of Akundy Logistics and Development Company Limited
              conduct business honestly, ethically, fairly and with integrity at all times. This principle applies
              to every person and organisation we do business with.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
