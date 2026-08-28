import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { EQUIPMENT, NAV_LINKS, SERVICES } from '../../lib/data'
import { cn } from '../../lib/utils'
import { Logo } from '../logo'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { ThemeToggle } from '../theme-toggle'

const groupedEquipment = EQUIPMENT.slice(0, 5)

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="relative flex h-5 w-6 flex-col justify-between">
      <span
        className={cn(
          'block h-0.5 w-full origin-left rounded-full bg-current transition-transform duration-300',
          open && 'translate-x-0.5 translate-y-[-1px] rotate-45'
        )}
      />
      <span
        className={cn(
          'block h-0.5 w-full rounded-full bg-current transition-opacity duration-300',
          open && 'opacity-0'
        )}
      />
      <span
        className={cn(
          'block h-0.5 w-full origin-left rounded-full bg-current transition-transform duration-300',
          open && 'translate-x-0.5 translate-y-[1px] -rotate-45'
        )}
      />
    </div>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2">
          <Logo />
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                'relative rounded-xl px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-brand',
                isActive ? 'bg-brand/10 text-brand' : 'text-muted-foreground'
              )
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              cn(
                'relative rounded-xl px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-brand',
                isActive ? 'bg-brand/10 text-brand' : 'text-muted-foreground'
              )
            }
          >
            About
          </NavLink>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  'inline-flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-brand data-[state=open]:bg-brand/10 data-[state=open]:text-brand',
                  'text-muted-foreground'
                )}
              >
                Services <ChevronDown className="size-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <NavLink to="/services" className="w-full cursor-pointer">
                  All Services
                </NavLink>
              </DropdownMenuItem>
              <div className="my-1 h-px bg-border" />
              {SERVICES.map((service) => (
                <DropdownMenuItem key={service.id} asChild>
                  <NavLink
                    to={`/services#${service.id}`}
                    className="w-full cursor-pointer"
                  >
                    {service.title}
                  </NavLink>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  'inline-flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-brand data-[state=open]:bg-brand/10 data-[state=open]:text-brand',
                  'text-muted-foreground'
                )}
              >
                Equipment <ChevronDown className="size-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <NavLink to="/equipment" className="w-full cursor-pointer">
                  Equipment Catalogue
                </NavLink>
              </DropdownMenuItem>
              <div className="my-1 h-px bg-border" />
              {groupedEquipment.map((item) => (
                <DropdownMenuItem key={item.id} asChild>
                  <NavLink
                    to={`/equipment/${item.id}`}
                    className="w-full cursor-pointer"
                  >
                    {item.title}
                  </NavLink>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {NAV_LINKS.filter(
            (link) => !['/', '/about', '/services', '/equipment'].includes(link.href)
          ).map((link) => (
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
                <HamburgerIcon open={open} />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col rounded-none sm:max-w-sm">
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
                        'rounded-none px-5 py-3.5 text-base font-medium transition-colors',
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
