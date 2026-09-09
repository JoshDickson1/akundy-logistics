import { PageHeader } from '../components/page-header'
import { SEO } from '../components/seo'

const sections = [
  {
    title: 'Information We Collect',
    content:
      'We collect only the information you voluntarily provide: your name, company name, email address, phone number and project details when you submit a quote request or contact form on this website.',
  },
  {
    title: 'How We Use Your Information',
    items: [
      'To respond to your enquiries and prepare quotations.',
      'To communicate project updates and equipment availability relevant to your request.',
      'To improve our website and service offering.',
    ],
  },
  {
    title: 'Data Sharing',
    content:
      'We do not sell, trade or otherwise transfer your personal information to third parties. Information may be shared internally among our team members solely to process your request.',
  },
  {
    title: 'Data Retention',
    content:
      'We retain your information only for as long as necessary to fulfil the purpose for which it was collected, or as required by applicable law.',
  },
  {
    title: 'Security',
    content:
      'We implement reasonable technical and organisational measures to protect your information from unauthorised access, loss or misuse.',
  },
  {
    title: 'Your Rights',
    content:
      'You may request access to, correction of, or deletion of personal information we hold about you by contacting us at the email address below.',
  },
  {
    title: 'Contact',
    content:
      'For any questions about this privacy policy, please contact us at akundylogistics@gmail.com.',
  },
]

export function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy for Akundy Logistics and Development Company Limited. Understand how we collect, use and protect your information."
        path="/privacy"
        noindex
      />

      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use and protect your information."
        image="/images/why-quality.jpg"
        imagePosition="center 40%"
        badges={[{ value: 'Last updated', label: 'February 2025' }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <p className="text-muted-foreground">
            Akundy Logistics and Development Company Limited respects your privacy. This policy
            explains how we handle information you provide through our website and contact forms.
          </p>

          <div className="mt-10 space-y-10">
            {sections.map((s, i) => (
              <div key={s.title}>
                <div className="mb-1 flex items-center gap-3">
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-black text-brand">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-lg font-bold">{s.title}</h2>
                </div>
                <div className="ml-10">
                  {s.content && (
                    <p className="text-muted-foreground">{s.content}</p>
                  )}
                  {s.items && (
                    <ul className="mt-2 space-y-1.5 text-muted-foreground">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
