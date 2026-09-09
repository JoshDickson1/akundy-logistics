import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Loader2, Mail, MapPin, Phone, Send, X } from 'lucide-react'
import { COMPANY, SERVICES } from '../../lib/data'
import { Logo } from '../logo'
import { Input } from '../ui/input'
import { ThemeToggle } from '../theme-toggle'
import { AnimatePresence, motion } from 'motion/react'

const gridLight = {
  backgroundImage:
    'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
  backgroundSize: '80px 80px',
}

const gridDark = {
  backgroundImage:
    'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
  backgroundSize: '80px 80px',
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      window.location.href = `mailto:${COMPANY.email}?subject=Newsletter Signup&body=Please add this email to your newsletter list: ${encodeURIComponent(email)}`
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'HSE & Quality', href: '/hse-quality' },
        { label: 'Certifications', href: '/certifications' },
        { label: 'Clients', href: '/clients' },
      ],
    },
    {
      title: 'Services',
      links: SERVICES.slice(0, 5).map((s) => ({ label: s.title, href: `/services#${s.id}` })),
    },
    {
      title: 'Equipment',
      links: [
        { label: 'Containers', href: '/equipment/20ft-container' },
        { label: 'Reefer Units', href: '/equipment/10ft-reefer' },
        { label: 'Waste Skips', href: '/equipment/4m3-waste-skip' },
        { label: 'Gas Racks', href: '/equipment/8-cylinder-gas-rack' },
      ],
    },
  ]

  const statusText = {
    idle: 'Get project updates, equipment availability and industry insights.',
    loading: 'Submitting your request…',
    success: 'Thanks for subscribing.',
    error: 'Something went wrong. Please try again.',
  }

  return (
    <footer className="relative w-full overflow-hidden border-t border-border bg-white transition-colors duration-300 dark:bg-[#080808]">
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 dark:opacity-0" style={gridLight} />
        <div className="absolute inset-0 opacity-0 dark:opacity-100" style={gridDark} />
        <div
          className="absolute inset-0 dark:opacity-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255,255,255,1) 0%, transparent 15%, transparent 85%, rgba(255,255,255,1) 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-0 dark:opacity-100"
          style={{
            background:
              'linear-gradient(to bottom, rgba(8,8,8,1) 0%, transparent 15%, transparent 85%, rgba(8,8,8,1) 100%)',
          }}
        />
      </div>

      <div className="container relative mx-auto px-6 pb-6 pt-12 md:px-12 md:pb-8 md:pt-16">
        {/* Top bento: brand statement + newsletter */}
        <div className="mb-10 grid grid-cols-1 gap-6 md:mb-12 lg:grid-cols-12">
          {/* Brand card */}
          <div className="rounded-[28px] border border-border bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.05)] backdrop-blur-sm dark:border-white/[0.06] dark:bg-[#141414]/60 dark:shadow-[0_4px_24px_rgba(0,0,0,0.35)] md:p-10 lg:col-span-7">
            <div className="mb-6">
              <Logo className="h-20" />
            </div>
            <h3 className="mb-4 text-3xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white md:text-4xl">
              Delivering <span className="text-zinc-600 dark:text-zinc-400">Solutions</span>.
              <br />
              Building <span className="text-brand">Value</span>.
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              {COMPANY.name} delivers marine logistics, offshore support, equipment leasing,
              fabrication, procurement and general contracts across Nigeria and international markets.
            </p>
          </div>

          {/* Newsletter card */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-border bg-white p-8 text-zinc-900 shadow-[0_4px_24px_rgba(0,0,0,0.05)] dark:border-white/[0.06] dark:bg-[#141414]/60 dark:text-white md:p-10 lg:col-span-5">
            <div className="relative z-10">
              <h3 className="mb-2 text-2xl font-black uppercase tracking-tighter md:text-3xl">
                Stay Updated
              </h3>
              <AnimatePresence mode="wait">
                <motion.div
                  key={status}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400"
                >
                  {status === 'success' && (
                    <span className="inline-flex size-5 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Check className="size-3" />
                    </span>
                  )}
                  {status === 'error' && (
                    <span className="inline-flex size-5 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                      <X className="size-3" />
                    </span>
                  )}
                  <span>{statusText[status]}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="relative z-10 mt-6">
              <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 p-1.5 transition-all focus-within:ring-2 focus-within:ring-ring/50 dark:border-zinc-800 dark:bg-zinc-900">
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  autoComplete="off"
                  disabled={status === 'loading' || status === 'success'}
                  className="h-11 border-none bg-transparent px-5 text-[13px] text-foreground shadow-none placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                  aria-label="Subscribe"
                >
                  {status === 'loading' ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Middle: links + contact */}
        <div className="mb-10 grid grid-cols-1 gap-8 md:mb-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {/* Link columns */}
          <div className="flex flex-wrap gap-8 md:gap-12 lg:col-span-8 lg:gap-16">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="mb-4 text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        to={href}
                        className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact column */}
          <div className="lg:col-span-4 lg:text-right">
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Contact
            </h4>
            <div className="flex flex-col gap-3 lg:items-end">
              {[
                {
                  Icon: Mail,
                  href: `mailto:${COMPANY.email}`,
                  label: COMPANY.email,
                },
                {
                  Icon: Phone,
                  href: `tel:${COMPANY.phones[0].replace(/\s/g, '')}`,
                  label: COMPANY.phones[0],
                },
                {
                  Icon: MapPin,
                  href: '#',
                  label: `${COMPANY.address.city}, ${COMPANY.address.state}`,
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={href + label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white py-1.5 pl-1.5 pr-5 shadow-sm transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-zinc-600 shadow-sm dark:bg-zinc-800 dark:text-zinc-300">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="whitespace-nowrap text-xs text-zinc-600 transition-colors group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-white">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-zinc-200 pt-8 dark:border-white/[0.08] md:flex-row">
          <p className="text-center text-xs text-zinc-400 dark:text-zinc-600 md:text-left">
            © {currentYear} {COMPANY.shortName}. RC No. {COMPANY.rcNumber}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link
              to="/privacy"
              className="text-xs text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white"
            >
              Terms of Service
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
