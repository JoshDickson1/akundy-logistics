import { SERVICES } from '../lib/data'
import { PageHeader } from '../components/page-header'
import { SectionHeader } from '../components/section-header'
import { CtaSection } from '../components/sections/cta-section'
import { VerticalTabs } from '../components/ui/vertical-tabs'

export function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="One Company. Total Solutions."
        description="Integrated marine, offshore, engineering and industrial services delivered with safety, precision and reliability."
        image="/images/crane-containers.jpg"
        badges={[
          { value: '9', label: 'Service Lines' },
          { value: 'Marine & Offshore', label: 'Core Sectors' },
          { value: 'NPA Licensed', label: 'Shipping Agent' },
        ]}
      />

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Capabilities"
            title="Nine Service Lines. One Reliable Partner."
          />
          <div className="mt-16 overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft">
            <VerticalTabs services={SERVICES} />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
