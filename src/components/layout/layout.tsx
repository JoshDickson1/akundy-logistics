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
      <Navbar />
      <main id="main-content" className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
