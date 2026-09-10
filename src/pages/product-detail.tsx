import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, Check, ChevronLeft, ChevronRight, Phone } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { NotFoundPage } from './not-found'
import { EQUIPMENT, COMPANY } from '../lib/data'
import { Badge } from '../components/ui/badge'
import { SEO } from '../components/seo'

const PRODUCT_IMAGES: Record<string, string> = {
  '10ft-container':       '/images/container-10ft-1.jpg',
  '20ft-container':       '/images/container-20ft-1.jpg',
  '10ft-reefer':          '/images/reefer-10ft-1.jpg',
  '4m3-waste-skip':       '/images/NKgog.jpg',
  '6m3-waste-skip':       '/images/why-delivery.jpg',
  '8-drum-lube-rack':     '/images/lube-rack-8-1.jpg',
  '8-cylinder-gas-rack':  '/images/gas-rack-8-1.jpg',
  '12-cylinder-gas-rack': '/images/gas-rack-12-1.jpg',
  '16-cylinder-gas-rack': '/images/mission-worker.jpg',
}

// Products with more than one gallery image — overrides the single-image default
const PRODUCT_GALLERY: Record<string, string[]> = {
  '10ft-container': [
    '/images/container-10ft-1.jpg',
    '/images/container-10ft-2.jpg',
    '/images/container-10ft-3.jpg',
    '/images/container-10ft-4.jpg',
  ],
  '20ft-container': [
    '/images/container-20ft-1.jpg',
    '/images/container-20ft-2.jpg',
    '/images/container-20ft-3.jpg',
  ],
  '10ft-reefer': [
    '/images/reefer-10ft-1.jpg',
    '/images/reefer-10ft-2.jpg',
    '/images/reefer-10ft-3.jpg',
  ],
  '8-cylinder-gas-rack': [
    '/images/gas-rack-8-1.jpg',
    '/images/gas-rack-8-2.jpg',
    '/images/gas-rack-8-3.jpg',
  ],
  '12-cylinder-gas-rack': [
    '/images/gas-rack-12-1.jpg',
    '/images/gas-rack-12-2.jpg',
  ],
}

const IMAGES: Record<string, string[]> = Object.fromEntries(
  Object.entries(PRODUCT_IMAGES).map(([id, img]) => [id, PRODUCT_GALLERY[id] ?? [img]])
)

const TABS = ['Overview', 'Specifications', 'Applications'] as const
type Tab = (typeof TABS)[number]

export function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>()
  const [activeImage, setActiveImage] = useState(0)
  const [activeTab, setActiveTab] = useState<Tab>('Overview')

  const product = useMemo(() => EQUIPMENT.find((item) => item.id === productId), [productId])
  const relatedProducts = useMemo(
    () => (product ? EQUIPMENT.filter((item) => product.related?.includes(item.id)) : []),
    [product],
  )

  if (!product) return <NotFoundPage />

  const images = IMAGES[product.id] ?? ['/images/crane-containers.jpg']
  const specEntries = Object.entries(product.specs || {})

  const prev = () => setActiveImage((i) => (i - 1 + images.length) % images.length)
  const next = () => setActiveImage((i) => (i + 1) % images.length)

  return (
    <>
      <SEO
        title={product.title}
        description={`${product.title} available for leasing in Nigeria and West Africa. ${product.shortDescription ?? product.description.slice(0, 120)}`}
        path={`/equipment/${product.id}`}
        ogImage={PRODUCT_IMAGES[product.id] ?? '/images/crane-containers.jpg'}
      />

      <div className="mx-auto max-w-6xl px-4 py-10 lg:px-8">

        {/* Back */}
        <Link
          to="/equipment"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Back to Catalogue
        </Link>

        {/* Main grid */}
        <div className="grid gap-10 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_460px]">

          {/* ── Image gallery ── */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={images[activeImage]}
                  alt={product.title}
                  className="h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </AnimatePresence>

              {/* Category badge overlay */}
              <div className="absolute left-5 top-5">
                <Badge className="bg-foreground text-background shadow-soft">{product.category}</Badge>
              </div>

              {/* Prev/Next arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2.5 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-black/60"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2.5 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-black/60"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </>
              )}

              {/* Position dots */}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className="transition-all duration-300"
                    style={{
                      height: '4px',
                      width: i === activeImage ? '1.5rem' : '0.4rem',
                      borderRadius: '9999px',
                      backgroundColor: i === activeImage ? '#f97316' : 'rgba(255,255,255,0.5)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className="relative overflow-hidden rounded-2xl"
                  style={{ aspectRatio: '4/3' }}
                >
                  <img src={src} alt="" className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
                  {i === activeImage && (
                    <div className="absolute inset-0 rounded-2xl ring-2 ring-brand ring-offset-2 ring-offset-background" />
                  )}
                  {i !== activeImage && (
                    <div className="absolute inset-0 bg-background/40 transition-opacity hover:bg-transparent" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ── Product info ── */}
          <div className="flex flex-col gap-7">

            {/* Title + short desc */}
            <div>
              <h1 className="text-3xl font-black leading-tight tracking-tight lg:text-4xl">
                {product.title}
              </h1>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {product.shortDescription}
              </p>
            </div>

            {/* Key features pills */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Key Features
              </p>
              <div className="flex flex-wrap gap-2">
                {product.features.map((f) => (
                  <span
                    key={f}
                    className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-3 py-1.5 text-xs font-medium"
                  >
                    <span className="size-1.5 rounded-full bg-brand" />
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft">
              {/* Tab bar */}
              <div className="relative flex border-b border-border/60">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="relative flex-1 px-4 py-3.5 text-sm font-semibold transition-colors duration-150"
                    style={{ color: activeTab === tab ? 'var(--foreground)' : 'var(--muted-foreground)' }}
                  >
                    {activeTab === tab && (
                      <motion.div
                        layoutId="product-tab-indicator"
                        className="absolute inset-0 bg-foreground/5"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="product-tab-bar"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{tab}</span>
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                  className="p-6"
                >
                  {activeTab === 'Overview' && (
                    <p className="text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                  )}

                  {activeTab === 'Specifications' && (
                    <dl className="grid gap-3 sm:grid-cols-2">
                      {specEntries.map(([key, value]) => (
                        <div key={key} className="rounded-2xl bg-muted/50 px-4 py-3">
                          <dt className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                            {key}
                          </dt>
                          <dd className="mt-1 text-sm font-semibold">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  {activeTab === 'Applications' && (
                    <ul className="grid gap-2.5 sm:grid-cols-2">
                      {product.applications.map((app) => (
                        <li key={app} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
                            <Check className="size-3" />
                          </span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <Link
                to="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-4 text-sm font-bold text-white transition-all duration-200 hover:bg-brand/90 hover:shadow-soft-lg"
              >
                Request a Leasing Quote
              </Link>
              <a
                href={`tel:${COMPANY.phones[0]}`}
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-border/60 bg-card px-6 py-4 text-sm font-bold transition-all duration-200 hover:border-brand/40 hover:bg-muted/50"
              >
                <Phone className="size-4 text-brand" />
                {COMPANY.phones[0]}
              </a>
            </div>

          </div>
        </div>

        {/* Related Equipment */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="mb-10 text-2xl font-black tracking-tight">You May Also Need</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((item) => (
                <div
                  key={item.id}
                  className="group relative rounded-3xl border border-border/50 border-t-[3px] border-t-brand bg-card shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-brand-glow"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-[calc(1.5rem-3px)]">
                    <img
                      src={PRODUCT_IMAGES[item.id] ?? '/images/crane-containers.jpg'}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-brand/0 to-brand/0 transition-all duration-500 group-hover:from-brand/20 group-hover:to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="px-5 pt-4 pb-3">
                    <Badge className="mb-3 bg-foreground text-background">{item.category}</Badge>
                    <h3 className="font-bold leading-snug">{item.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{item.shortDescription}</p>
                  </div>

                  {/* Concave ticket cut + button */}
                  <div className="relative px-5 pb-5">
                    {/* Left scoop */}
                    <div className="pointer-events-none absolute -left-3 top-0 size-6 -translate-y-1/2 rounded-full bg-background" />
                    {/* Right scoop */}
                    <div className="pointer-events-none absolute -right-3 top-0 size-6 -translate-y-1/2 rounded-full bg-background" />
                    {/* Perforated line */}
                    <div className="mb-4 border-t border-dashed border-border/70" />
                    {/* Button */}
                    <Link
                      to={`/equipment/${item.id}`}
                      className="flex items-center justify-between rounded-2xl bg-foreground px-4 py-2.5 text-sm font-bold text-background transition-all duration-200 hover:bg-foreground/85"
                    >
                      View Details
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand">
                        <ChevronRight className="size-3.5 text-white" />
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </>
  )
}
