import { motion } from 'motion/react'
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
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <span className="mb-4 inline-flex items-center rounded-full bg-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-background">
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
            'mt-4 text-lg leading-relaxed',
            light ? 'text-white/80' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
