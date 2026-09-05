import { HeroBento } from '../components/sections/hero-bento'
import { HeroCinematic } from '../components/sections/hero-cinematic'
import { HeroDarkIndustrial } from '../components/sections/hero-dark-industrial'

export function HeroPreviewPage() {
  const options = [
    { label: 'Option 1: Cinematic Split-Screen', Component: HeroCinematic },
    { label: 'Option 2: Bento-Grid Hero', Component: HeroBento },
    { label: 'Option 3: Dark Industrial Hero', Component: HeroDarkIndustrial },
  ]

  return (
    <div className="divide-y divide-border">
      {options.map(({ label, Component }) => (
        <section key={label} className="relative">
          <div className="absolute left-0 right-0 top-0 z-20 bg-background/80 px-4 py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground backdrop-blur-sm sm:px-6 lg:px-8">
            {label}
          </div>
          <Component />
        </section>
      ))}
    </div>
  )
}
