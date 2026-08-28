import { ArrowLeft, Check } from 'lucide-react'
import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { NotFoundPage } from './not-found'
import { EQUIPMENT } from '../lib/data'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

function PlaceholderImage({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-3xl bg-gradient-to-br from-muted to-muted/50 ${className}`}
    >
      <div className="text-center">
        <span className="text-4xl font-black text-brand/20">{label.split(' ')[0]}</span>
        <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Image placeholder
        </p>
      </div>
    </div>
  )
}

export function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>()

  const product = useMemo(
    () => EQUIPMENT.find((item) => item.id === productId),
    [productId]
  )

  const relatedProducts = useMemo(
    () =>
      product
        ? EQUIPMENT.filter((item) => product.related?.includes(item.id))
        : [],
    [product]
  )

  if (!product) {
    return <NotFoundPage />
  }

  const specEntries = Object.entries(product.specs || {})

  return (
    <>
      {/* Page Header */}
      <section className="brand-section py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Button
              asChild
              variant="ghost"
              className="mb-6 -ml-3 text-muted-foreground hover:text-foreground"
            >
              <Link to="/equipment">
                <ArrowLeft className="mr-2 size-4" /> Back to Catalogue
              </Link>
            </Button>
            <Badge variant="brand" className="mb-4">
              {product.category}
            </Badge>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              {product.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-foreground/80">
              {product.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Product Content */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Images */}
            <div className="space-y-6">
              <PlaceholderImage
                label={product.title}
                className="aspect-[4/3] w-full"
              />
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1, 4).map((img, idx) => (
                  <PlaceholderImage
                    key={img}
                    label={`${product.title} ${idx + 2}`}
                    className="aspect-square w-full"
                  />
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-8">
              <Card className="rounded-3xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-black">Overview</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-black">Specifications</h2>
                  <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                    {specEntries.map(([key, value]) => (
                      <div
                        key={key}
                        className="rounded-2xl bg-muted/50 p-4"
                      >
                        <dt className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                          {key}
                        </dt>
                        <dd className="mt-1 font-semibold text-foreground">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </CardContent>
              </Card>

              <Card className="rounded-3xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-black">Applications</h2>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {product.applications.map((app) => (
                      <li
                        key={app}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <span className="inline-flex size-5 items-center justify-center rounded-full bg-brand/10 text-brand">
                          <Check className="size-3" />
                        </span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand text-brand-foreground hover:bg-brand/90"
                >
                  <Link to="/contact">Request Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/equipment">Browse More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-muted/30 py-20">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <h2 className="text-center text-3xl font-black tracking-tight">
              Related Products
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((item) => (
                <Card
                  key={item.id}
                  className="group overflow-hidden rounded-3xl border-border/50 transition-all hover:-translate-y-1 hover:shadow-soft-xl"
                >
                  <PlaceholderImage
                    label={item.title}
                    className="h-48 w-full rounded-b-none"
                  />
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {item.category}
                    </Badge>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {item.shortDescription}
                    </p>
                    <Button
                      asChild
                      variant="link"
                      className="mt-4 h-auto p-0 text-brand"
                    >
                      <Link to={`/equipment/${item.id}`}>View details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
