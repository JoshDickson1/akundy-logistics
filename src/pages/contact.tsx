import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { COMPANY, TEAM } from '../lib/data'
import { PageHeader } from '../components/page-header'
import { SEO } from '../components/seo'
import { SectionHeader } from '../components/section-header'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'

// Replace with your Formspree form ID once created at formspree.io
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xppzkdej'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function ContactPage() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const data = {
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      email:   (form.elements.namedItem('email')   as HTMLInputElement).value,
      phone:   (form.elements.namedItem('phone')   as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        e.currentTarget.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Akundy Logistics. Request a quote, ask about equipment availability, or arrange a meeting with our team in Port Harcourt, Nigeria."
        path="/contact"
      />

      <PageHeader
        eyebrow="Contact"
        title="Let's Talk About Your Project"
        description="Request a quote, ask about equipment availability, or arrange a meeting with our team in Port Harcourt."
        image="/images/why-customer.jpg"
        imagePosition="center 30%"
      />

      {/* Contact Content */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Details */}
            <div className="space-y-10">
              <SectionHeader
                align="left"
                eyebrow="Get in Touch"
                title="Contact Information"
                description="Reach us directly or visit our base location."
              />

              <div className="space-y-5">
                <Card className="rounded-3xl">
                  <CardContent className="flex items-start gap-5 p-7">
                    <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                      <MapPin className="size-6" />
                    </div>
                    <div>
                      <h3 className="font-bold">Base Location</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {COMPANY.address.street}
                        <br />
                        {COMPANY.address.city}, {COMPANY.address.state}
                        <br />
                        {COMPANY.address.country}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl">
                  <CardContent className="flex items-start gap-5 p-7">
                    <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                      <Phone className="size-6" />
                    </div>
                    <div>
                      <h3 className="font-bold">Phone Numbers</h3>
                      <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                        {COMPANY.phones.slice(0, 2).map((phone) => (
                          <li key={phone}>
                            <a
                              href={`tel:${phone.replace(/\s/g, '')}`}
                              className="hover:text-brand"
                            >
                              {phone}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl">
                  <CardContent className="flex items-start gap-5 p-7">
                    <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                      <Mail className="size-6" />
                    </div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        <a
                          href={`mailto:${COMPANY.email}`}
                          className="hover:text-brand"
                        >
                          {COMPANY.email}
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="mb-5 text-lg font-bold">Company Representatives</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {TEAM.slice(0, 2).map((member) => (
                    <Card key={member.name} className="rounded-3xl">
                      <CardHeader className="p-6">
                        <CardTitle className="text-base font-bold">{member.name}</CardTitle>
                        <CardContent className="p-0 pt-2">
                          <p className="text-xs text-muted-foreground">{member.role}</p>
                          <p className="mt-1 text-sm font-medium text-brand">{member.phone}</p>
                        </CardContent>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="rounded-3xl border-border/50">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl">Request a Quote</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  {status === 'success' ? (
                    <div className="rounded-3xl bg-brand/10 p-10 text-center">
                      <h3 className="text-xl font-bold text-brand">Message Received</h3>
                      <p className="mt-2 text-muted-foreground">
                        Thank you for contacting Akundy Logistics. A member of our team will
                        respond shortly.
                      </p>
                      <Button
                        variant="outline"
                        className="mt-6"
                        onClick={() => setStatus('idle')}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" name="name" required placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input id="company" name="company" placeholder="Your organisation" />
                        </div>
                      </div>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="you@company.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" name="phone" placeholder="+234 ..." />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service of Interest</Label>
                        <Input
                          id="service"
                          name="service"
                          placeholder="e.g. Equipment Leasing, Marine Logistics"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          placeholder="Tell us about your project or requirements..."
                        />
                      </div>

                      {status === 'error' && (
                        <p className="rounded-2xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
                          Something went wrong. Please try again or email us directly at {COMPANY.email}.
                        </p>
                      )}

                      <Button
                        type="submit"
                        className="w-full bg-brand text-brand-foreground hover:bg-brand/90"
                        size="lg"
                        disabled={status === 'loading'}
                      >
                        {status === 'loading' ? 'Sending…' : 'Send Message'}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-soft-lg">
            <div className="grid lg:grid-cols-3">
              <div className="p-10 lg:p-12">
                <h3 className="text-2xl font-black">Find Our Base</h3>
                <p className="mt-4 text-muted-foreground">
                  We are located opposite Pamo University Hospital on the Port Harcourt/Aba
                  Expressway, with easy access to the city's industrial and port zones.
                </p>
                <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <p>Opposite Pamo University Hospital</p>
                  <p>KM 17, Port Harcourt/Aba Expressway</p>
                  <p>Port Harcourt, Rivers State, Nigeria</p>
                </div>
              </div>
              <div className="relative min-h-[320px] overflow-hidden lg:col-span-2">
                <iframe
                  src="https://maps.google.com/maps?q=KM+17+Port+Harcourt+Aba+Expressway+Rivers+State+Nigeria&output=embed&z=14"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '320px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Akundy Logistics location map"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
