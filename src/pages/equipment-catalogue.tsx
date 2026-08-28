import { useMemo, useState } from 'react'
import { EQUIPMENT } from '../lib/data'
import { SectionHeader } from '../components/section-header'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

export function EquipmentCataloguePage() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(EQUIPMENT.map((item) => item.category)))],
    []
  )
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? EQUIPMENT : EQUIPMENT.filter((item) => item.category === active)),
    [active]
  )

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
              Equipment Leasing
            </span>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Equipment Catalogue
            </h1>
            <p className="mt-6 text-lg text-foreground/80">
              Modern, dependable and regularly inspected equipment for marine, offshore,
              construction and industrial projects.
            </p>
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            eyebrow="Inventory"
            title="Leasing Assets Available Now"
            description="Quality equipment, flexible leasing periods, prompt delivery and technical support."
          />

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={active === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActive(category)}
                className={
                  active === category
                    ? 'bg-brand text-brand-foreground hover:bg-brand/90'
                    : ''
                }
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <Card
                key={item.id}
                className="flex flex-col overflow-hidden border-border/50 bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                  <div className="text-center">
                    <span className="text-5xl font-black text-brand/20">
                      {item.title.split(' ')[0]}
                    </span>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {item.category}
                    </p>
                  </div>
                </div>
                <CardHeader className="flex-1">
                  <Badge variant="secondary" className="mb-3 w-fit">
                    {item.category}
                  </Badge>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-foreground">
                        Applications
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.applications.slice(0, 3).map((app) => (
                          <span
                            key={app}
                            className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-foreground">
                        Features
                      </h4>
                      <ul className="space-y-1">
                        {item.features.slice(0, 3).map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-xs text-muted-foreground"
                          >
                            <span className="size-1 rounded-full bg-brand" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
