import { Check } from 'lucide-react'
import { SectionHeader } from '../components/section-header'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

const HSE_POINTS = [
  'Safe work practices across all sites and vessels',
  'Risk assessment procedures before every operation',
  'Environmental protection and waste management',
  'Personnel safety training and competency development',
]

const QUALITY_POINTS = [
  'Deliver services in accordance with agreed requirements',
  'Meet client timelines and budgets without compromise',
  'Maintain precision in inspection and examination processes',
  'Continually improve service and product delivery',
]

export function HseQualityPage() {
  return (
    <>
      {/* Page Header */}
      <section className="brand-section py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-brand">
              HSE & Quality
            </span>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Safety & Quality First
            </h1>
            <p className="mt-6 text-lg text-foreground/80">
              Our operations are built on professionalism, safety, integrity, efficiency and
              customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Policy"
            title="Health, Safety & Environment"
            description="Safety is a core part of our operations. We are committed to maintaining a safe and healthy working environment for employees, clients, contractors and host communities."
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <Card className="rounded-3xl border-l-4 border-l-brand">
              <CardHeader>
                <CardTitle className="text-2xl">HSE Commitment</CardTitle>
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
                <h3 className="text-2xl font-black">Safety Culture</h3>
                <p className="mt-4 leading-relaxed text-foreground/80">
                  Every employee, contractor and partner is expected to take responsibility for
                  safety. We embed hazard awareness into daily briefings, equipment checks and
                  operational planning so that everyone returns home safely.
                </p>
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

      {/* Quality */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Quality Management"
            title="Consistent Quality, Continuous Improvement"
            description="Our quality management system focuses on customer satisfaction through precision, process discipline and a culture of doing it right the first time."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {QUALITY_POINTS.map((point) => (
              <div
                key={point}
                className="flex items-start gap-4 rounded-3xl border border-border bg-card p-7 shadow-soft"
              >
                <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Check className="size-4" />
                </span>
                <span className="text-muted-foreground">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
