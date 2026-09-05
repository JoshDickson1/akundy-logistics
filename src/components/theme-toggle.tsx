import { motion } from 'motion/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

function ContrastIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="ct-left">
          <rect x="0" y="0" width="12" height="24" />
        </clipPath>
        <clipPath id="ct-right">
          <rect x="12" y="0" width="12" height="24" />
        </clipPath>
      </defs>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="10" fill="currentColor" clipPath="url(#ct-left)" />
      <circle cx="12" cy="12" r="4.5" fill="var(--background)" clipPath="url(#ct-left)" />
      <circle cx="12" cy="12" r="4.5" fill="currentColor" clipPath="url(#ct-right)" />
    </svg>
  )
}

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const isDark = theme === 'dark'

  const toggle = () => setTheme(isDark ? 'light' : 'dark')

  if (!mounted) {
    return (
      <button className={`flex size-9 items-center justify-center rounded-full ${className ?? ''}`} aria-label="Toggle theme">
        <ContrastIcon />
      </button>
    )
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative flex size-9 items-center justify-center rounded-full border border-border/50 bg-background/60 backdrop-blur-xl transition-colors duration-200 hover:bg-muted/80 ${className ?? ''}`}
    >
      <motion.div
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{ display: 'flex' }}
      >
        <ContrastIcon size={18} />
      </motion.div>
    </button>
  )
}
