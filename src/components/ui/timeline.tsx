import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

export type TimelineEntry = {
  title: string
  content: React.ReactNode
}

export function Timeline({ data }: { data: TimelineEntry[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const [lineHeight, setLineHeight] = useState(0)

  useEffect(() => {
    const measure = () => {
      if (lineRef.current) setLineHeight(lineRef.current.scrollHeight)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 15%', 'end 60%'],
  })

  const beamHeight = useTransform(scrollYProgress, [0, 1], [0, lineHeight])
  const beamOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])

  return (
    <div ref={containerRef} className="relative w-full font-sans">
      {/* Entries */}
      <div ref={lineRef} className="relative">
        {data.map((item, i) => (
          <div key={i} className="flex gap-6 pt-12 first:pt-0 md:gap-14 md:pt-20">

            {/* Left: date + dot (sticky) */}
            <div className="sticky top-28 flex shrink-0 flex-col items-center self-start">
              {/* Dot */}
              <div className="relative z-10 flex size-9 items-center justify-center rounded-full border border-border/60 bg-card shadow-soft">
                <div className="size-3 rounded-full bg-brand" />
              </div>
              {/* Year label — desktop */}
              <span className="mt-4 hidden -rotate-0 whitespace-nowrap text-xs font-black uppercase tracking-[0.18em] text-muted-foreground/40 md:block">
                {item.title}
              </span>
            </div>

            {/* Right: content */}
            <div className="flex-1 pb-16">
              {/* Year label — mobile */}
              <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-brand md:hidden">
                {item.title}
              </p>
              {item.content}
            </div>
          </div>
        ))}

        {/* Vertical track line */}
        <div className="absolute left-[17px] top-0 w-[2px] h-full bg-border/30">
          <motion.div
            style={{ height: beamHeight, opacity: beamOpacity }}
            className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-brand via-brand/40 to-transparent"
          />
        </div>
      </div>
    </div>
  )
}
