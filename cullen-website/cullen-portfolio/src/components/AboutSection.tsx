import FadeIn from './FadeIn'
import ContactButton from './ContactButton'
import AnimatedText from './AnimatedText'

const ABOUT_TEXT =
  'With a focused background in eCommerce and Shopify, I help online businesses create better customer experiences and stronger-performing stores. My work combines store design, conversion thinking, user experience improvements, and practical growth strategies. Rather than chasing trends or shortcuts, I focus on creating systems and store experiences that are easier for customers to navigate, understand, and trust. The goal is always the same: make it easier for visitors to become customers.'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      {/* ── Corner decorative elements (mirror of Jack's 3D icons) ── */}

      {/* Top-left */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]">
        <div
          className="flex items-center justify-center rounded-[2rem] border border-[#D7E2EA]/10 w-[100px] sm:w-[140px] md:w-[180px] aspect-square"
          style={{ background: 'rgba(182,0,168,0.06)' }}
        >
          <span className="font-black uppercase text-center leading-tight text-[#D7E2EA]/25" style={{ fontSize: 'clamp(0.6rem, 1.2vw, 1rem)' }}>
            Shopify<br />Expert
          </span>
        </div>
      </FadeIn>

      {/* Bottom-left */}
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]">
        <div
          className="flex items-center justify-center rounded-full border border-[#D7E2EA]/10 w-[80px] sm:w-[110px] md:w-[150px] aspect-square"
          style={{ background: 'rgba(118,33,176,0.07)' }}
        >
          <span className="font-black uppercase text-[#D7E2EA]/25" style={{ fontSize: 'clamp(0.55rem, 1vw, 0.9rem)' }}>CRO</span>
        </div>
      </FadeIn>

      {/* Top-right */}
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]">
        <div
          className="flex items-center justify-center rounded-[2rem] border border-[#D7E2EA]/10 w-[100px] sm:w-[140px] md:w-[180px] aspect-square"
          style={{ background: 'rgba(255,255,255,0.02)' }}
        >
          <span className="font-black uppercase text-center leading-tight text-[#D7E2EA]/25" style={{ fontSize: 'clamp(0.6rem, 1.2vw, 1rem)' }}>
            Web<br />Design
          </span>
        </div>
      </FadeIn>

      {/* Bottom-right */}
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]">
        <div
          className="flex items-center justify-center rounded-full border border-[#D7E2EA]/10 w-[80px] sm:w-[110px] md:w-[150px] aspect-square"
          style={{ background: 'rgba(190,76,0,0.06)' }}
        >
          <span className="font-black uppercase text-[#D7E2EA]/25" style={{ fontSize: 'clamp(0.55rem, 1vw, 0.9rem)' }}>UX</span>
        </div>
      </FadeIn>

      {/* ── Main content ── */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 relative z-10">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About Me
          </h2>
        </FadeIn>

        <AnimatedText
          text={ABOUT_TEXT}
          className="font-medium text-center leading-relaxed"
          style={{ color: '#D7E2EA', fontSize: 'clamp(1rem, 2vw, 1.35rem)', maxWidth: 560 }}
        />

        <div className="mt-16 sm:mt-20 md:mt-24">
          <ContactButton />
        </div>
      </div>
    </section>
  )
}
