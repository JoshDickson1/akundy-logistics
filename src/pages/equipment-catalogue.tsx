import { useMemo } from 'react'
import { EQUIPMENT } from '../lib/data'
import { PageHeader } from '../components/page-header'
import { SEO } from '../components/seo'
import { SectionHeader } from '../components/section-header'
import { GalleryGrid, type GalleryItem } from '../components/ui/gallery-grid'

/**
 * Image map: picsum seeds per equipment ID.
 * Swap these URLs for real product photos when available.
 *
 * Good real-photo briefs:
 *   10ft-container        compact steel container on a yard
 *   20ft-container        ISO container at a port terminal
 *   10ft-reefer           refrigerated unit with open door, stainless interior
 *   4m3-waste-skip        painted basket skip on an offshore deck
 *   6m3-waste-skip        larger basket skip, crane visible above
 *   8-drum-lube-rack      drums loaded in rack, workshop background
 *   8-cylinder-gas-rack   gas cylinders secured in rack, fab yard
 *   12-cylinder-gas-rack  medium rack, orange cylinders, industrial site
 *   16-cylinder-gas-rack  full rack of cylinders, wide shot
 */
const IMAGES: Record<string, string> = {
  '10ft-container':       '/images/container-10ft-1.jpg',
  '20ft-container':       '/images/container-20ft-1.jpg',
  '10ft-cargo-basket':    '/images/cargo-basket-10ft-1.jpg',
  '20ft-cargo-basket':    '/images/cargo-basket-20ft-2.jpg',
  '40ft-cargo-basket':    '/images/cargo-basket-20ft-1.jpg',
  '10ft-reefer':          '/images/reefer-10ft-1.jpg',
  // '4m3-waste-skip':    '/images/NKgog.jpg',
  '6m3-waste-skip':       '/images/waste-skip-6m3-1.jpg',
  '8-drum-lube-rack':     '/images/lube-rack-8-1.jpg',
  '8-cylinder-gas-rack':  '/images/gas-rack-8-1.jpg',
  '12-cylinder-gas-rack': '/images/gas-rack-12-1.jpg',
  '16-cylinder-gas-rack': '/images/gas-rack-16-1.jpg',
}

export function EquipmentCataloguePage() {
  const categories = useMemo(
    () => Array.from(new Set(EQUIPMENT.map((item) => item.category))),
    [],
  )

  const galleryItems: GalleryItem[] = useMemo(
    () =>
      EQUIPMENT.map((item) => ({
        id: item.id,
        title: item.title,
        category: item.category,
        shortDescription: item.shortDescription,
        description: item.description,
        features: item.features,
        specs: item.specs as unknown as Record<string, string>,
        image: IMAGES[item.id] ?? `https://picsum.photos/seed/${item.id}/800/600`,
      })),
    [],
  )

  return (
    <>
      <SEO
        title="Equipment Catalogue"
        description="Browse our full equipment catalogue: ISO containers, reefer units, waste basket skips, gas cylinder racks, lube drum racks and more. Available for leasing in Nigeria and West Africa."
        path="/equipment"
        ogImage="/images/crane-containers.jpg"
      />

      <PageHeader
        eyebrow="Equipment Leasing"
        title="Equipment Catalogue"
        description="Modern, dependable and regularly inspected equipment for marine, offshore, construction and industrial projects."
      />

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Inventory"
            title="Leasing Assets Available Now"
            description="Quality equipment, flexible leasing periods, prompt delivery and technical support."
          />

          <div className="mt-14">
            <GalleryGrid items={galleryItems} categories={categories} />
          </div>
        </div>
      </section>
    </>
  )
}
