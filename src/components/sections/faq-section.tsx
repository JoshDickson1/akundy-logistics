import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'

const FAQS = [
  {
    q: 'What types of equipment do you lease?',
    a: 'We lease 10ft and 20ft dry containers, 10ft reefer containers, 4m³ and 6m³ basket waste skips, 8/12/16-cylinder gas racks, 8-drum lube racks, generators, welding equipment and lifting gear for marine, offshore, construction and industrial projects.',
  },
  {
    q: 'How do I request a quote or engage your services?',
    a: 'Contact us directly via phone or email with your project requirements. Our team will respond within 24 hours with a tailored proposal covering scope, pricing and delivery timelines.',
  },
  {
    q: 'Are you licensed to operate in Nigeria\'s oil and gas sector?',
    a: 'Yes. We hold a NUPRC Oil Industry Permit (Major Category) — Permit No. NUPRC/OGISP/26/5131560/N451240, valid to March 2027 — covering Rehabilitation, Fabrication Works and Overhead Tanks. We are also registered with the NPA and licensed by Nigeria Customs Service as a ship chandler.',
  },
  {
    q: 'What areas do you cover?',
    a: 'Our primary base is at KM 17, Port Harcourt/Aba Expressway, Rivers State. We operate across Nigeria and extend services to West Africa, supporting clients at offshore platforms, ports, and industrial facilities throughout the region.',
  },
  {
    q: 'Do you provide offshore manpower and support services?',
    a: 'Yes. Our offshore support services include manpower supply, project logistics coordination, vessel support, safety and operational assistance, and maintenance support for offshore facilities. All personnel operate in compliance with industry safety standards.',
  },
  {
    q: 'Can you handle both short-term and long-term contracts?',
    a: 'Absolutely. We offer flexible leasing periods and contract structures tailored to your project timeline — from single-mobilisation jobs to multi-year service agreements. We work closely with clients to align on cost, scope and delivery.',
  },
]

function TopoLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <path
          key={i}
          d={`M ${-100 + i * 80} ${300 + i * 60} Q ${300 + i * 60} ${100 + i * 40} ${900 + i * 50} ${250 + i * 55} T ${1400 + i * 40} ${180 + i * 50}`}
          fill="none"
          stroke="white"
          strokeWidth="1"
        />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <path
          key={`b${i}`}
          d={`M ${-50 + i * 100} ${500 + i * 40} Q ${200 + i * 80} ${350 + i * 30} ${700 + i * 60} ${420 + i * 45} T ${1400} ${380 + i * 35}`}
          fill="none"
          stroke="white"
          strokeWidth="0.8"
        />
      ))}
    </svg>
  )
}

function AccordionItem({ q, a }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="overflow-hidden rounded-2xl bg-white/[0.07] transition-colors hover:bg-white/[0.10]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-4 px-5 py-4 text-left"
      >
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="minus"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Minus className="size-3.5 text-brand" />
              </motion.span>
            ) : (
              <motion.span
                key="plus"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Plus className="size-3.5 text-white/70" />
              </motion.span>
            )}
          </AnimatePresence>
        </span>
        <span className="text-sm font-bold text-white sm:text-base">{q}</span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="px-5 pb-5 pl-[4.25rem] text-sm leading-relaxed text-white/55">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FaqSection() {
  return (
    <section className="px-4 py-20 lg:px-8">
      <div
        className="relative mx-auto max-w-6xl overflow-hidden bg-[#0e0e0e]"
        style={{
          borderRadius: '28px',
          clipPath: 'polygon(0 0, calc(100% - 72px) 0, 100% 72px, 100% 100%, 0 100%)',
        }}
      >
        <TopoLines />

        {/* Scattered geo decoration bottom-left */}
        <svg className="pointer-events-none absolute bottom-8 left-8 opacity-[0.08]" width="120" height="120" viewBox="0 0 120 120">
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="white" strokeWidth="1.5" transform="rotate(20 50 50)" />
          <rect x="35" y="35" width="30" height="30" fill="none" stroke="white" strokeWidth="1" transform="rotate(20 50 50)" />
        </svg>

        <div className="relative z-10 grid gap-10 p-8 lg:grid-cols-[1fr,1.4fr] lg:gap-16 lg:p-14">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <span className="mb-6 inline-flex w-fit items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-black">
              FAQ
            </span>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
              Frequently Asked<br />Questions
            </h2>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Have a question about our services, licensing, or how to get started? Find answers below or contact our team directly.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex w-fit items-center rounded-xl bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand/90"
            >
              Get in Touch
            </Link>
          </div>

          {/* Right — accordion */}
          <div className="flex flex-col gap-2.5">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
