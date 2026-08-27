import { cn } from '../lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  light?: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-brand">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl',
          light ? 'text-white' : 'text-foreground'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-lg',
            light ? 'text-white/80' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
