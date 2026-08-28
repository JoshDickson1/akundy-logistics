import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { COMPANY, NAV_LINKS } from '../../lib/data'
import { Logo } from '../logo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="brand-section relative overflow-hidden">
      <div className="container relative mx-auto px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm leading-relaxed text-foreground/70">
              {COMPANY.name} is a Port Harcourt-based marine, offshore and industrial
              services company delivering equipment leasing, logistics, fabrication,
              procurement and general contracts across Nigeria and West Africa.
            </p>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              {COMPANY.motto}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-foreground/70 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-foreground/70 hover:text-brand">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="text-sm text-foreground/70 hover:text-brand">
                  Equipment Leasing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-foreground/70">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                <span>
                  {COMPANY.address.street}
                  <br />
                  {COMPANY.address.city}, {COMPANY.address.state}, {COMPANY.address.country}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/70">
                <Phone className="size-4 shrink-0 text-brand" />
                <a href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`} className="hover:text-brand">
                  {COMPANY.phones[0]}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/70">
                <Mail className="size-4 shrink-0 text-brand" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-brand">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-foreground/50">
            © {currentYear} {COMPANY.name}. RC No. {COMPANY.rcNumber}. All rights reserved.
          </p>
          <p className="text-xs text-foreground/50">
            Incorporated {COMPANY.incorporated} · TIN {COMPANY.tin}
          </p>
        </div>
      </div>
    </footer>
  )
}
