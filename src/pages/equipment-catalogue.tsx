import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { EQUIPMENT } from '../lib/data'
import { SectionHeader } from '../components/section-header'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

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
        <div className="container mx-auto px-4 lg:px-8">
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
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Inventory"
            title="Leasing Assets Available Now"
            description="Quality equipment, flexible leasing periods, prompt delivery and technical support."
          />

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={active === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActive(category)}
                className={
                  active === category
                    ? 'rounded-xl bg-brand text-brand-foreground hover:bg-brand/90'
                    : 'rounded-xl'
                }
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <Card
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-3xl border-border/50 bg-card transition-all hover:-translate-y-1 hover:shadow-soft-xl"
              >
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                  <div className="text-center">
                    <span className="text-5xl font-black text-brand/20">
                      {item.title.split(' ')[0]}
                    </span>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {item.category}
                    </p>
                  </div>
                </div>
                <CardHeader className="flex-1">
                  <Badge variant="secondary" className="mb-3 w-fit">
                    {item.category}
                  </Badge>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                    {item.shortDescription}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    asChild
                    variant="link"
                    className="h-auto p-0 text-brand"
                  >
                    <Link to={`/equipment/${item.id}`}>View details & specs</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
