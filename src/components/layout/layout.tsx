import { Outlet } from 'react-router-dom'
import { Footer } from './footer'
import { Navbar } from './navbar'

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
