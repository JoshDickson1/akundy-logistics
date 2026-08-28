import { Menu } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NAV_LINKS } from '../../lib/data'
import { cn } from '../../lib/utils'
import { Logo } from '../logo'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { ThemeToggle } from '../theme-toggle'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2">
          <Logo />
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  'relative rounded-xl px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-brand',
                  isActive ? 'bg-brand/10 text-brand' : 'text-muted-foreground'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden bg-brand text-brand-foreground hover:bg-brand/90 sm:inline-flex">
            <NavLink to="/contact">Request Quote</NavLink>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col sm:max-w-sm">
              <div className="flex items-center justify-between">
                <Logo />
              </div>
              <nav className="mt-8 flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                    <NavLink
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'rounded-2xl px-5 py-3.5 text-base font-medium transition-colors',
                        isActive
                          ? 'bg-brand/10 text-brand'
                          : 'text-foreground hover:bg-muted'
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
              <div className="mt-auto pt-6">
                <Button asChild className="w-full bg-brand text-brand-foreground hover:bg-brand/90">
                  <NavLink to="/contact" onClick={() => setOpen(false)}>
                    Request Quote
                  </NavLink>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
