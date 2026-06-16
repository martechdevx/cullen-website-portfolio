import FadeIn from './FadeIn'
import ContactButton from './ContactButton'

const FEATURED = [
  { quote: 'Cullen quickly identified issues within our store structure that had been overlooked for months. The attention to detail and ability to explain improvements clearly made all the difference.', focus: 'Store Optimization' },
  { quote: 'Communication was smooth from start to finish. Every recommendation came with a clear reason behind it, which made the process far more valuable than generic advice.', focus: 'Consultation' },
  { quote: 'The product page improvements made our store feel significantly more professional. Navigation became clearer and the overall customer experience improved noticeably.', focus: 'Product Page Optimization' },
]

const GRID = [
  'Very responsive and easy to work with. Always willing to explain the reasoning behind changes.',
  'Helpful insights that immediately highlighted areas where our store experience could improve.',
  'Professional communication and practical recommendations throughout the project.',
  'Strong understanding of Shopify structure and customer journey optimization.',
  'Quick turnaround times and clear guidance whenever questions came up.',
  'The suggestions were realistic, actionable, and focused on long-term improvements.',
  'One of the few people who focuses on customer experience instead of chasing shortcuts.',
  'Great attention to detail, especially when reviewing product pages and navigation.',
]

function Stars() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ color: '#B600A8', fontSize: '0.95rem' }}>★</span>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn y={40}>
        <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-4"
          style={{ fontSize: 'clamp(2.5rem, 11vw, 140px)' }}>
          Testimonials
        </h2>
        <p className="text-center font-light mb-16 sm:mb-20 md:mb-24" style={{ color: '#D7E2EA', opacity: 0.4, fontSize: 'clamp(0.8rem, 1.4vw, 1.1rem)' }}>
          Client Feedback &amp; Experiences
        </p>
      </FadeIn>

      {/* Featured */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-16 md:mb-20">
        {FEATURED.map((t, i) => (
          <FadeIn key={i} delay={i * 0.12} y={30}>
            <div className="rounded-[2rem] border-2 border-[#D7E2EA]/15 p-6 md:p-8 flex flex-col gap-5 h-full">
              <div className="flex items-start justify-between gap-4">
                <span className="font-black leading-none select-none" style={{ color: '#D7E2EA', fontSize: 'clamp(2rem, 4vw, 3.5rem)', opacity: 0.1 }}>
                  0{i + 1}
                </span>
                <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-[#D7E2EA]/20 font-medium mt-2"
                  style={{ color: '#D7E2EA', opacity: 0.5 }}>
                  {t.focus}
                </span>
              </div>
              <p className="font-light leading-relaxed flex-1" style={{ color: '#D7E2EA', fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)', opacity: 0.85 }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <Stars />
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {GRID.map((q, i) => (
          <FadeIn key={i} delay={i * 0.06} y={20}>
            <div className="rounded-2xl border border-[#D7E2EA]/10 p-5 flex flex-col gap-3 h-full"
              style={{ background: 'rgba(255,255,255,0.02)' }}>
              <p className="font-light leading-relaxed text-sm" style={{ color: '#D7E2EA', opacity: 0.75 }}>
                &ldquo;{q}&rdquo;
              </p>
              <Stars />
            </div>
          </FadeIn>
        ))}
      </div>

      <p className="text-center font-light mt-8" style={{ color: '#D7E2EA', opacity: 0.3, fontSize: '0.75rem' }}>
        Testimonials shown are real reviews from clients, amongst others.
      </p>

      {/* CTA */}
      <FadeIn y={30} delay={0.1}>
        <div className="flex flex-col items-center mt-20 sm:mt-24 gap-6 text-center">
          <h3 className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2rem, 7vw, 80px)' }}>
            Let&apos;s Improve Your Store
          </h3>
          <p className="font-light max-w-xl" style={{ color: '#D7E2EA', opacity: 0.6, fontSize: 'clamp(0.9rem, 1.6vw, 1.2rem)' }}>
            If you&apos;re looking for a second opinion on your Shopify store, customer experience, or product pages, I&apos;d be happy to take a look.
          </p>
          <ContactButton />
        </div>
      </FadeIn>
    </section>
  )
}
