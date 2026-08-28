import { cn } from '../lib/utils'

interface MarqueeProps {
  children: React.ReactNode
  direction?: 'up' | 'down'
  speed?: 'slow' | 'normal' | 'fast'
  className?: string
  pauseOnHover?: boolean
}

export function Marquee({
  children,
  direction = 'up',
  speed = 'normal',
  className,
  pauseOnHover = false,
}: MarqueeProps) {
  const duration = {
    slow: '40s',
    normal: '28s',
    fast: '18s',
  }[speed]

  return (
    <div
      className={cn(
        'group relative flex h-full flex-col overflow-hidden',
        className
      )}
    >
      <div
        className={cn(
          'flex flex-col gap-4',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
        style={{
          animation: `marquee-vertical ${duration} linear infinite`,
          animationDirection: direction === 'down' ? 'reverse' : 'normal',
        }}
      >
        {children}
        {children}
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />
      <style>{`
        @keyframes marquee-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </div>
  )
}
