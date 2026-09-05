import { PageHeader } from '../components/page-header'

export function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        description="The terms governing use of our website and services."
      />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="space-y-8">
            <p className="text-muted-foreground">
              These terms of service outline the rules and regulations for the use of the Akundy Logistics and Development Company Limited website.
            </p>
            <div>
              <h2 className="text-xl font-bold">Use of the Website</h2>
              <p className="mt-3 text-muted-foreground">
                By accessing this website, you accept these terms of service. The content is for general information and marketing purposes only and is subject to change without notice.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Quotations and Contracts</h2>
              <p className="mt-3 text-muted-foreground">
                Requests submitted through the website are invitations to begin a conversation. Formal quotations, agreements and contracts are subject to separate written terms signed by both parties.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Intellectual Property</h2>
              <p className="mt-3 text-muted-foreground">
                All logos, content and materials on this website are the property of Akundy Logistics and may not be reproduced or used without prior written permission.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Limitation of Liability</h2>
              <p className="mt-3 text-muted-foreground">
                Akundy Logistics is not liable for any damages arising from the use or inability to use this website. All service delivery is governed by the specific contract terms agreed with each client.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
