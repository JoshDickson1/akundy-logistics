import { cn } from '../lib/utils'

interface DiagonalDividerProps {
  flip?: boolean
  className?: string
  fill?: string
}

export function DiagonalDivider({
  flip = false,
  className,
  fill = 'var(--background)',
}: DiagonalDividerProps) {
  return (
    <div
      className={cn(
        'absolute left-0 right-0 h-16 w-full overflow-hidden leading-[0]',
        flip ? 'bottom-0 rotate-180' : 'top-0',
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path d="M1200 120L0 120 0 0 1200 120z" fill={fill} />
      </svg>
    </div>
  )
}

export function DiagonalAccent({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'h-1.5 w-20 bg-gradient-to-r from-brand to-red-500',
        className
      )}
      aria-hidden="true"
    />
  )
}
