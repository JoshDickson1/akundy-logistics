import { Outlet } from 'react-router-dom'
import { Footer } from './footer'
import { Navbar } from './navbar'

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-2xl focus:bg-brand focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      {/* Ticker bar — sits above the sticky navbar as a normal block element.
          It scrolls away naturally so the sticky header never changes height. */}
      <div className="flex h-8 items-center overflow-hidden bg-foreground/[0.04] backdrop-blur-sm">
        <div
          className="flex shrink-0 items-center"
          style={{ animation: 'marquee-horiz 28s linear infinite', willChange: 'transform' }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="shrink-0 whitespace-nowrap px-10 text-[10px] font-bold uppercase tracking-[0.22em] text-foreground/35"
            >
              Delivering Solutions · Building Value · RC 6891533 · Nigeria, West Africa &amp; International
            </span>
          ))}
        </div>
      </div>

      <Navbar />
      <main id="main-content" className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
