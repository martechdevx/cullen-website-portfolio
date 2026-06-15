import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from './FadeIn'
import GhostButton from './GhostButton'

interface FocusArea {
  num: string
  category: string
  name: string
  tags: string[]
}

const AREAS: FocusArea[] = [
  { num: '01', category: 'Store Optimization', name: 'Friction-Free Navigation', tags: ['UX Audit', 'Structure', 'Navigation'] },
  { num: '02', category: 'Product Pages', name: 'Trust & Clarity Layouts', tags: ['Hierarchy', 'Trust Signals', 'Imagery'] },
  { num: '03', category: 'Conversion Design', name: 'Built-to-Convert Storefronts', tags: ['CRO', 'Layout', 'Testing'] },
]

function VisualBlock({ index, label }: { index: number; label: string }) {
  // Placeholder visual blocks (gradient + label) — no fake project screenshots
  const tones = [
    'linear-gradient(135deg, rgba(182,0,168,0.18), rgba(118,33,176,0.10))',
    'linear-gradient(135deg, rgba(118,33,176,0.16), rgba(190,76,0,0.08))',
    'linear-gradient(135deg, rgba(190,76,0,0.14), rgba(182,0,168,0.10))',
  ]
  return (
    <div
      className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-[#D7E2EA]/10 flex items-center justify-center w-full"
      style={{ background: tones[index % tones.length] }}
    >
      <span className="font-light uppercase tracking-[0.3em] text-[#D7E2EA]/30 text-center px-4" style={{ fontSize: 'clamp(0.6rem, 1vw, 0.85rem)' }}>
        {label}
      </span>
    </div>
  )
}

function StackCard({ area, index, total }: { area: FocusArea; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start start'] })
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      ref={ref}
      className="sticky h-[85vh] flex items-center"
      style={{ top: `calc(6rem + ${index * 28}px)` }}
    >
      <motion.div
        style={{ scale, background: '#0C0C0C', transformOrigin: 'top center' }}
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 flex flex-col gap-4 md:gap-6"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 md:gap-6">
            <span className="font-black leading-none" style={{ color: '#D7E2EA', fontSize: 'clamp(2.5rem, 8vw, 100px)', opacity: 0.15 }}>
              {area.num}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-widest font-medium" style={{ color: '#D7E2EA', opacity: 0.4 }}>
                {area.category}
              </span>
              <span className="font-medium uppercase" style={{ color: '#D7E2EA', fontSize: 'clamp(1.1rem, 2.5vw, 2rem)' }}>
                {area.name}
              </span>
            </div>
          </div>
          <GhostButton label="Get In Touch" href="#contact" />
        </div>

        {/* Bottom row — image grid */}
        <div className="flex gap-3 flex-1 min-h-0">
          <div className="flex flex-col gap-3 w-2/5">
            <div style={{ height: 'clamp(130px, 16vw, 230px)' }}>
              <VisualBlock index={index} label={area.tags[0]} />
            </div>
            <div className="flex-1" style={{ minHeight: 'clamp(160px, 22vw, 340px)' }}>
              <VisualBlock index={index + 1} label={area.tags[1]} />
            </div>
          </div>
          <div className="w-3/5">
            <div className="h-full">
              <VisualBlock index={index + 2} label={area.tags[2]} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn y={40}>
        <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Focus Area
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto flex flex-col" style={{ gap: '6vh' }}>
        {AREAS.map((area, i) => (
          <StackCard key={area.num} area={area} index={i} total={AREAS.length} />
        ))}
      </div>
    </section>
  )
}
