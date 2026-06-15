import FadeIn from './FadeIn'

const STEPS = [
  { num: '01', name: 'Discovery', desc: 'Understanding the business, goals, and current challenges before anything else.' },
  { num: '02', name: 'Analysis', desc: 'Reviewing store structure, customer experience, and identifying potential bottlenecks.' },
  { num: '03', name: 'Implementation', desc: 'Applying improvements and refining the store experience with precision.' },
  { num: '04', name: 'Optimization', desc: 'Testing, reviewing, and making ongoing improvements where needed for long-term growth.' },
]

export default function ProcessSection() {
  return (
    <section id="process" className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32" style={{ background: '#0C0C0C' }}>
      <FadeIn y={40}>
        <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          How I Work
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {STEPS.map((step, i) => (
          <FadeIn key={step.num} delay={i * 0.1} y={30}>
            <div className="rounded-[2rem] border border-[#D7E2EA]/10 p-6 md:p-8 flex flex-col gap-4 h-full"
              style={{ background: 'rgba(255,255,255,0.02)' }}>
              <span className="font-black leading-none" style={{ color: '#D7E2EA', fontSize: 'clamp(2.5rem, 6vw, 5rem)', opacity: 0.12 }}>
                {step.num}
              </span>
              <h3 className="font-medium uppercase tracking-wide" style={{ color: '#D7E2EA', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}>
                {step.name}
              </h3>
              <p className="font-light leading-relaxed" style={{ color: '#D7E2EA', fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)', opacity: 0.55 }}>
                {step.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
