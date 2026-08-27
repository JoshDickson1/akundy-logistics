import { cn } from '../lib/utils'

interface LogoProps {
  className?: string
  showTagline?: boolean
}

export function Logo({ className, showTagline = false }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 shrink-0"
        aria-hidden="true"
      >
        <path
          d="M4 40L24 8L44 40H4Z"
          fill="#F97316"
          className="origin-center"
        />
        <path
          d="M14 40L24 24L34 40H14Z"
          fill="#0A0A0A"
          className="dark:fill-white"
        />
        <path
          d="M4 42C10 38 18 36 24 36C30 36 38 38 44 42"
          stroke="#F97316"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="38" cy="12" r="3" fill="#EF4444" />
        <circle cx="42" cy="16" r="2" fill="#EF4444" />
        <circle cx="34" cy="8" r="1.5" fill="#EF4444" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-black tracking-tight text-foreground">
          AKUNDY
        </span>
        <span className="text-[11px] font-bold tracking-[0.2em] text-red-500">
          LOGISTICS
        </span>
        {showTagline && (
          <span className="text-[9px] font-medium tracking-wide text-muted-foreground">
            Delivering Solutions. Building Value.
          </span>
        )}
      </div>
    </div>
  )
}
