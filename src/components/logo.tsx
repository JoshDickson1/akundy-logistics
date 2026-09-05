import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { cn } from '../lib/utils'

interface LogoProps {
  className?: string
  variant?: 'full' | 'mark'
}

export function Logo({ className, variant = 'full' }: LogoProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  // Before mount, render a spacer of the same size to avoid layout shift
  if (!mounted) {
    return <span className={cn('inline-block h-10 w-auto', className)} />
  }

  const isDark = resolvedTheme === 'dark'

  if (variant === 'mark') {
    // Icon-only: use whichever version clips well at small size
    return (
      <img
        src={isDark ? '/logo-dark.png' : '/logo-light.png'}
        alt="Akundy Logistics"
        className={cn('h-10 w-auto object-contain', className)}
        draggable={false}
      />
    )
  }

  // Full horizontal logo
  return (
    <img
      src={isDark ? '/logo-dark.png' : '/logo-light.png'}
      alt="Akundy Logistics"
      className={cn('h-10 w-auto object-contain', className)}
      draggable={false}
    />
  )
}
