import FadeIn from './FadeIn'
import ContactButton from './ContactButton'
import AnimatedText from './AnimatedText'

const ABOUT_TEXT =
  "Benedict Cullen is an Ecom Mentor/Founder, dedicated , to helping brands build high-performing digital ecosystems. His work sits at the intersection of aesthetic design, technical development, and data-driven marketing. For years, he has helped businesses bridge the gap between their vision and their bottom line. Whether it is architecting a seamless website, optimizing user experience (UI/UX), or deploying technical solutions that automate operations, his focus remains singular: creating digital environments that convert. His approach isn't just about making things look good, it is about making them work harder for you. He combine a technical foundation in development with a deep understanding of customer behavior to ensure that every touchpoint a user has with your brand is intentional, efficient, and profitable."

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
            About BC
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
