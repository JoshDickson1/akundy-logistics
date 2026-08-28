import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { COMPANY, TEAM } from '../lib/data'
import { SectionHeader } from '../components/section-header'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    // Form handler integration point (e.g. Formspree, Netlify, email service)
  }

  return (
    <>
      {/* Page Header */}
      <section className="brand-section py-24">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)',
          }}
          aria-hidden="true"
        />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-brand">
              Contact
            </span>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Let's Talk About Your Project
            </h1>
            <p className="mt-6 text-lg text-foreground/80">
              Request a quote, ask about equipment availability, or arrange a meeting with our
              team in Port Harcourt.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Details */}
            <div className="space-y-8">
              <SectionHeader
                align="left"
                eyebrow="Get in Touch"
                title="Contact Information"
                description="Reach us directly or visit our base location."
              />

              <div className="space-y-4">
                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <MapPin className="size-5" />
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

                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Phone className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Phone Numbers</h3>
                      <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                        {COMPANY.phones.map((phone) => (
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

                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Mail className="size-5" />
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
                <h3 className="mb-4 text-lg font-bold">Company Representatives</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {TEAM.map((member) => (
                    <Card key={member.name}>
                      <CardHeader className="p-4">
                        <CardTitle className="text-sm font-bold">{member.name}</CardTitle>
                        <CardContent className="p-0 pt-1">
                          <p className="text-xs text-muted-foreground">{member.role}</p>
                          <p className="mt-1 text-xs font-medium text-brand">{member.phone}</p>
                        </CardContent>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Request a Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="rounded-xl bg-brand/10 p-8 text-center">
                      <h3 className="text-xl font-bold text-brand">Message Received</h3>
                      <p className="mt-2 text-muted-foreground">
                        Thank you for contacting Akundy Logistics. A member of our team will
                        respond shortly.
                      </p>
                      <Button
                        variant="outline"
                        className="mt-4"
                        onClick={() => setSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" name="name" required placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input id="company" name="company" placeholder="Your organisation" />
                        </div>
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2">
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
                          rows={5}
                          required
                          placeholder="Tell us about your project or requirements..."
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-brand text-brand-foreground hover:bg-brand/90"
                        size="lg"
                      >
                        Send Message
                      </Button>
                      <p className="text-xs text-muted-foreground">
                        This form is a demo. Connect it to your preferred form-to-email service
                        (Formspree, Netlify Forms, Resend, etc.) before going live.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="grid lg:grid-cols-3">
              <div className="p-8 lg:p-12">
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
              <div className="brand-section relative min-h-[300px] lg:col-span-2">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative text-center">
                    <MapPin className="mx-auto size-10 text-brand" />
                    <p className="mt-4 font-bold">Map Integration Placeholder</p>
                    <p className="text-sm text-foreground/60">
                      Embed Google Maps or Mapbox here for exact location.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
