import { PageHeader } from '../components/page-header'

export function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use and protect your information."
      />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="space-y-8">
            <p className="text-muted-foreground">
              Akundy Logistics and Development Company Limited respects your privacy. This policy explains how we handle information you provide through our website and contact forms.
            </p>
            <div>
              <h2 className="text-xl font-bold">Information We Collect</h2>
              <p className="mt-3 text-muted-foreground">
                We collect only the information you voluntarily provide, such as your name, company, email address, phone number and project details when you request a quote or subscribe to updates.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold">How We Use Your Information</h2>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li>To respond to enquiries and provide quotes.</li>
                <li>To communicate project updates and equipment availability.</li>
                <li>To improve our services and customer experience.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold">Data Protection</h2>
              <p className="mt-3 text-muted-foreground">
                We do not sell or share your personal information with third parties. Information is stored securely and retained only for as long as necessary to fulfil the purposes for which it was collected.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Contact Us</h2>
              <p className="mt-3 text-muted-foreground">
                If you have any questions about this privacy policy, please contact us at akundylogistics@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
