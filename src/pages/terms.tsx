import { PageHeader } from '../components/page-header'
import { SEO } from '../components/seo'

const sections = [
  {
    title: 'Use of This Website',
    content:
      'By accessing this website, you accept these terms of service in full. The content is provided for general information and marketing purposes and is subject to change without notice. Access is granted on a temporary basis; we reserve the right to withdraw or amend the service at any time.',
  },
  {
    title: 'Quotations and Contracts',
    content:
      'Enquiries and requests submitted through this website are invitations to begin a commercial conversation. They do not constitute a binding offer or contract. Formal quotations, agreements and service contracts are governed by separate written terms signed by authorised representatives of both parties.',
  },
  {
    title: 'Accuracy of Information',
    content:
      'We make every effort to ensure the information on this website is accurate and up to date. However, we do not warrant the completeness or accuracy of any content. Equipment specifications, availability and pricing are subject to change; please contact us directly for current details.',
  },
  {
    title: 'Intellectual Property',
    content:
      'All logos, brand assets, content, images and materials on this website are the property of Akundy Logistics and Development Company Limited and may not be reproduced, distributed or used without prior written permission.',
  },
  {
    title: 'Limitation of Liability',
    content:
      'Akundy Logistics is not liable for any direct, indirect or consequential loss arising from your use of, or inability to use, this website. All service delivery obligations are governed exclusively by the specific contract terms agreed in writing with each client.',
  },
  {
    title: 'Governing Law',
    content:
      'These terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes shall be subject to the exclusive jurisdiction of the courts of Rivers State, Nigeria.',
  },
  {
    title: 'Changes to These Terms',
    content:
      'We may revise these terms at any time by updating this page. Continued use of the website after any changes constitutes acceptance of the updated terms.',
  },
]

export function TermsPage() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Terms and conditions governing use of the Akundy Logistics website and services."
        path="/terms"
        noindex
      />

      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        description="The terms and conditions governing use of our website and services."
        image="/images/why-delivery.jpg"
        imagePosition="center 40%"
        badges={[{ value: 'Last updated', label: 'February 2025' }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <p className="text-muted-foreground">
            These terms of service outline the rules and regulations for use of the Akundy
            Logistics and Development Company Limited website. Please read them carefully before
            using this site.
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
                <p className="ml-10 text-muted-foreground">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
