import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  Anchor,
  ArrowRight,
  Box,
  ChevronDown,
  Container,
  Factory,
  Ship,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { cn } from '../../lib/utils'
import { Logo } from '../logo'
import { ThemeToggle } from '../theme-toggle'

// ─── Data ─────────────────────────────────────────────────────────────────────

type NavItem = {
  label: string
  href?: string
  panelId?: 'services' | 'equipment' | 'company'
}

type PanelCard = {
  title: string
  description?: string
  href?: string
  featured?: boolean
  preview?: React.ReactNode
}

type MenuPanel = {
  id: NonNullable<NavItem['panelId']>
  cards: PanelCard[]
  viewAllHref: string
  viewAllLabel: string
}

const navItems: NavItem[] = [
  { label: 'Services',  panelId: 'services' },
  { label: 'Equipment', panelId: 'equipment' },
  { label: 'About',     href: '/about' },
  { label: 'Company',   panelId: 'company' },
]

const menuPanels: MenuPanel[] = [
  {
    id: 'services',
    viewAllHref: '/services',
    viewAllLabel: 'Browse all 9 service lines',
    cards: [
      { title: 'Equipment Leasing', description: 'Flexible leasing for marine, offshore and industrial projects.', href: '/services#equipment-leasing', featured: true },
      { title: 'Marine Logistics',  description: 'Crew boats, supply vessels, cargo and barge operations.',       href: '/services#marine-logistics' },
      { title: 'Offshore Support',  description: 'Manpower, logistics and vessel support for oil & gas.',         href: '/services#offshore-support' },
      { title: 'Shipping Agency',   description: 'Port representation, clearance and documentation.',             href: '/services#shipping-agency' },
      { title: 'Ship Chandler',     description: 'Provisions, stores, safety gear and consumables.',             href: '/services#ship-chandler' },
      { title: 'Metal Fabrication', description: 'Custom steel, tanks, pipes and platform structures.',           href: '/services#metal-fabrication' },
    ],
  },
  {
    id: 'equipment',
    viewAllHref: '/equipment',
    viewAllLabel: 'View full equipment catalogue',
    cards: [
      { title: 'Shipping Containers', description: '10ft & 20ft dry containers for offshore storage and transport.', href: '/equipment/20ft-container', featured: true },
      { title: 'Reefer Container',    description: 'Temperature-controlled cold-chain storage.',                     href: '/equipment/10ft-reefer' },
      { title: 'Waste Skips',         description: '4m³ and 6m³ certified basket skips.',                            href: '/equipment/4m3-waste-skip' },
      { title: 'Lube Rack',           description: '8-drum rack for safe lubricant storage.',                        href: '/equipment/8-drum-lube-rack' },
      { title: 'Gas Cylinder Racks',  description: '8, 12 and 16-cylinder racks for industrial gases.',              href: '/equipment/8-cylinder-gas-rack' },
      { title: 'Generators & Tools',  description: 'Power equipment, welding and lifting gear.',                     href: '/equipment' },
    ],
  },
  {
    id: 'company',
    viewAllHref: '/about',
    viewAllLabel: 'Learn more about Akundy',
    cards: [
      { title: 'About Us',       description: 'Our story, mission, values and leadership.',        href: '/about' },
      { title: 'HSE & Quality',  description: 'Health, safety, environment and quality standards.', href: '/hse-quality' },
      { title: 'Certifications', description: 'Licences, permits and regulatory registrations.',    href: '/certifications' },
      { title: 'Clients',        description: 'Trusted by oil, gas and marine operators.',          href: '/clients' },
    ],
  },
]

function getPanel(id: string | null) {
  return menuPanels.find((p) => p.id === id) ?? null
}

// ─── Dropdown Cards ────────────────────────────────────────────────────────────

function ServiceIcons() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-2xl bg-gradient-to-br from-brand/10 to-brand/5 p-4">
      <div className="flex items-center gap-3">
        {[Ship, Anchor, Container].map((Icon, i) => (
          <span key={i} className="flex size-11 items-center justify-center rounded-2xl bg-brand/10 text-brand ring-1 ring-brand/20">
            <Icon className="size-5" />
          </span>
        ))}
      </div>
      <p className="text-center text-[10px] font-bold uppercase tracking-widest text-brand/60">
        Marine · Offshore · Industrial
      </p>
    </div>
  )
}

function EquipmentIcons() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-2xl bg-gradient-to-br from-brand/10 to-brand/5 p-4">
      <div className="flex items-center gap-3">
        {[Box, Factory, Container].map((Icon, i) => (
          <span key={i} className="flex size-11 items-center justify-center rounded-2xl bg-brand/10 text-brand ring-1 ring-brand/20">
            <Icon className="size-5" />
          </span>
        ))}
      </div>
      <p className="text-center text-[10px] font-bold uppercase tracking-widest text-brand/60">
        Containers · Racks · Skips
      </p>
    </div>
  )
}

function DropdownCard({ card, className = '' }: { card: PanelCard; className?: string }) {
  return (
    <NavLink
      to={card.href || '#'}
      className={cn(
        'group relative flex flex-col justify-between gap-3 overflow-hidden rounded-2xl border border-border/50 bg-card p-4 transition-all duration-200 hover:border-brand/30',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/0 to-brand/0 transition-all duration-300 group-hover:from-brand/[0.04] group-hover:to-transparent" />
      {card.preview && (
        <div className="relative mb-1 h-28 w-full">{card.preview}</div>
      )}
      <div className="relative">
        <p className="text-sm font-bold text-foreground">{card.title}</p>
        {card.description && (
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground group-hover:text-foreground/70">
            {card.description}
          </p>
        )}
      </div>
      <span className="relative flex items-center gap-1 text-[11px] font-semibold text-muted-foreground/60 transition-colors group-hover:text-brand">
        Explore <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
      </span>
    </NavLink>
  )
}

function DropdownPanel({ panel }: { panel: MenuPanel }) {
  const featured = panel.cards.find((c) => c.featured) ?? panel.cards[0]
  const rest = panel.cards.filter((c) => c !== featured)
  const preview = panel.id === 'services' ? <ServiceIcons /> : panel.id === 'equipment' ? <EquipmentIcons /> : null

  if (panel.id === 'company') {
    return (
      <div className="p-4">
        <p className="mb-3 px-1 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40">Company</p>
        <div className="grid grid-cols-2 gap-2.5">
          {panel.cards.map((card) => <DropdownCard key={card.title} card={card} />)}
        </div>
        <ViewAllBar panel={panel} />
      </div>
    )
  }

  return (
    <div className="p-4">
      <p className="mb-3 px-1 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40">
        {panel.id === 'services' ? 'Our Services' : 'Equipment Catalogue'}
      </p>
      <div className="grid grid-cols-3 gap-2.5">
        <DropdownCard card={{ ...featured, preview: preview ?? undefined }} className="col-span-1 row-span-2" />
        {rest.slice(0, 4).map((card) => <DropdownCard key={card.title} card={card} />)}
      </div>
      <ViewAllBar panel={panel} />
    </div>
  )
}

function ViewAllBar({ panel }: { panel: MenuPanel }) {
  return (
    <NavLink
      to={panel.viewAllHref}
      className="group mt-3 flex items-center justify-between rounded-full border border-dashed border-border/60 bg-muted/20 px-5 py-3 transition-all hover:border-brand/30 hover:bg-brand/5"
    >
      <span className="text-xs font-bold text-muted-foreground transition-colors group-hover:text-brand">
        {panel.viewAllLabel}
      </span>
      <ArrowRight className="size-3.5 text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-brand" />
    </NavLink>
  )
}


// ─── Animated hamburger icon ──────────────────────────────────────────────────

function HamburgerIcon({ open }: { open: boolean }) {
  const spring = { type: 'spring' as const, stiffness: 400, damping: 32 }
  return (
    <div className="flex w-5 flex-col items-end justify-center gap-[5px]">
      <motion.span
        animate={open ? { rotate: 45, y: 10, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
        transition={spring}
        className="block h-[2px] rounded-full bg-foreground origin-left"
      />
      <motion.span
        animate={open ? { opacity: 0, x: 6 } : { opacity: 1, x: 0, width: '65%' }}
        transition={{ duration: 0.18 }}
        className="block h-[2px] rounded-full bg-foreground"
        style={{ width: '65%' }}
      />
      <motion.span
        animate={open ? { rotate: -45, y: -10, width: '100%' } : { rotate: 0, y: 0, width: '80%' }}
        transition={spring}
        className="block h-[2px] rounded-full bg-foreground origin-left"
        style={{ width: '80%' }}
      />
    </div>
  )
}

// ─── Navbar ────────────────────────────────────────────────────────────────────

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  const activePanel = getPanel(activeMenu)

  const toggle = (id: string) => {
    setActiveMenu((prev) => (prev === id ? null : id))
    setMobileOpen(false)
  }

  const close = () => { setActiveMenu(null); setMobileOpen(false) }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!activeMenu && !mobileOpen) return
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) close()
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    document.addEventListener('mousedown', handler)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('keydown', onKey)
    }
  }, [activeMenu, mobileOpen])

  // Lock body scroll when mobile sheet is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navPill = cn(
    'rounded-full border transition-all duration-300',
    'border-border/30 bg-background/40 backdrop-blur-2xl',
    scrolled && 'border-border/50 bg-background/70 shadow-soft',
  )

  return (
    <header className="sticky top-0 z-50 w-full">

      {/* ── Main row ── */}
      <div ref={navRef} className="relative px-4 py-2.5">
        <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3">

          {/* Logo */}
          <NavLink to="/" onClick={close} className="flex items-center">
            <Logo variant="mark" className="h-20" />
          </NavLink>

          {/* ── Center nav island (desktop) ── */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
            <div className={cn(navPill, 'flex items-center gap-0.5 px-2 py-2')}>
              {navItems.map((item) =>
                item.panelId ? (
                  <button
                    key={item.label}
                    onClick={() => toggle(item.panelId!)}
                    className={cn(
                      'relative flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold outline-none transition-colors duration-150',
                      activeMenu === item.panelId
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {activeMenu === item.panelId && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-foreground/[0.07] backdrop-blur-sm"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                    <ChevronDown
                      className={cn(
                        'relative size-3 opacity-40 transition-transform duration-200',
                        activeMenu === item.panelId && 'rotate-180 opacity-80',
                      )}
                    />
                  </button>
                ) : (
                  <NavLink
                    key={item.label}
                    to={item.href!}
                    onClick={close}
                    className={({ isActive }) =>
                      cn(
                        'relative rounded-full px-4 py-2 text-[13px] font-semibold outline-none transition-colors duration-150',
                        isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <motion.span
                            layoutId="nav-active"
                            className="absolute inset-0 rounded-full bg-foreground/[0.07] backdrop-blur-sm"
                            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                          />
                        )}
                        <span className="relative">{item.label}</span>
                      </>
                    )}
                  </NavLink>
                )
              )}
            </div>

            {/* Dropdown */}
            <AnimatePresence>
              {activePanel && (
                <motion.div
                  key={activePanel.id}
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 340, damping: 30 }}
                  className={cn(
                    'absolute left-1/2 top-[calc(100%+10px)] -translate-x-1/2 overflow-hidden',
                    'rounded-3xl border border-border/50 bg-background/95 shadow-soft-xl backdrop-blur-2xl',
                    activePanel.id === 'company' ? 'w-[420px]' : 'w-[620px]',
                  )}
                >
                  <DropdownPanel panel={activePanel} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Right side ── */}
          <div className="flex items-center gap-2">

            {/* Theme toggle */}
            <ThemeToggle />

            {/* CTA desktop */}
            <NavLink
              to="/contact"
              onClick={close}
              className={cn(
                navPill,
                'hidden items-center gap-2 px-6 py-2.5 text-sm font-bold text-white sm:flex',
                'bg-brand border-brand/80 hover:bg-brand/90',
              )}
            >
              Request Quote
              <ArrowRight className="size-3.5" />
            </NavLink>

            {/* Hamburger mobile */}
            <button
              onClick={() => { setMobileOpen((o) => !o); setActiveMenu(null) }}
              className="flex size-10 items-center justify-center rounded-full border border-border/30 bg-background/40 backdrop-blur-2xl transition-colors hover:bg-background/60 lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <HamburgerIcon open={mobileOpen} />
            </button>

          </div>

        </div>
      </div>

      {/* ── Mobile full-screen sheet from right ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={close}
            />

            {/* Sheet panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 340, damping: 36 }}
              className="fixed right-0 top-0 z-50 flex h-full w-full flex-col bg-background shadow-2xl lg:hidden"
            >
              {/* Sheet header */}
              <div className="flex items-center justify-between border-b border-border/40 px-6 py-4">
                <Logo variant="mark" className="h-14" />
                <button
                  onClick={close}
                  className="flex size-10 items-center justify-center rounded-full border border-border/40 bg-muted/40 transition-colors hover:bg-muted"
                  aria-label="Close menu"
                >
                  <HamburgerIcon open={true} />
                </button>
              </div>

              {/* Sheet body scrollable */}
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <nav className="space-y-1">
                  {navItems.map((item, idx) => {
                    const panel = item.panelId ? getPanel(item.panelId) : null
                    if (!item.panelId) {
                      return (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: 24 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.06 + 0.1, duration: 0.3 }}
                        >
                          <NavLink
                            to={item.href!}
                            onClick={close}
                            className={({ isActive }) =>
                              cn(
                                'flex items-center justify-between rounded-2xl px-5 py-4 text-base font-black transition-colors',
                                isActive
                                  ? 'bg-brand/10 text-brand'
                                  : 'text-foreground hover:bg-muted/60',
                              )
                            }
                          >
                            {item.label}
                            <ArrowRight className="size-4 opacity-30" />
                          </NavLink>
                        </motion.div>
                      )
                    }
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.06 + 0.1, duration: 0.3 }}
                      >
                        <NavLink
                          to={panel?.viewAllHref || '#'}
                          onClick={close}
                          className="flex items-center justify-between rounded-2xl px-5 py-4 text-base font-black text-foreground transition-colors hover:bg-muted/60"
                        >
                          {item.label}
                          <ArrowRight className="size-4 opacity-30" />
                        </NavLink>
                        <div className="ml-5 mt-1 space-y-0.5 border-l-2 border-border/40 pl-4">
                          {panel?.cards.slice(0, 4).map((c) => (
                            <NavLink
                              key={c.title}
                              to={c.href || '#'}
                              onClick={close}
                              className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-muted/50"
                            >
                              <span className="block text-sm font-semibold text-foreground">{c.title}</span>
                              {c.description && (
                                <span className="mt-0.5 block line-clamp-1 text-xs text-muted-foreground">{c.description}</span>
                              )}
                            </NavLink>
                          ))}
                        </div>
                      </motion.div>
                    )
                  })}
                </nav>
              </div>

              {/* Sheet footer */}
              <div className="border-t border-border/40 px-6 py-6">
                <NavLink
                  to="/contact"
                  onClick={close}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-brand py-4 text-base font-black uppercase tracking-wide text-white transition-all hover:bg-brand/90"
                  style={{ filter: 'drop-shadow(0 4px 16px rgba(249,115,22,0.35))' }}
                >
                  Request a Quote <ArrowRight className="size-4" />
                </NavLink>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  RC 6891533 · Port Harcourt, Nigeria
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </header>
  )
}
