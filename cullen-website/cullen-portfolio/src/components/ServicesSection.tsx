import FadeIn from './FadeIn'

const SERVICES = [
  { num: '01', name: 'Shopify Store Setup', desc: 'Store creation, structure planning, theme setup, navigation, product organization, and launch preparation for new stores.' },
  { num: '02', name: 'Store Optimization', desc: 'Identifying friction points, improving user experience, and making stores easier for customers to navigate and trust.' },
  { num: '03', name: 'Product Page Improvements', desc: 'Improving product presentation, trust signals, information hierarchy, and the overall customer buying experience.' },
  { num: '04', name: 'Conversion-Focused Design', desc: 'Creating store layouts that support clarity, engagement, and purchasing decisions through intentional design.' },
  { num: '05', name: 'eCommerce Consultation', desc: 'Practical guidance for store owners looking to improve performance and identify meaningful growth opportunities.' },
  { num: '06', name: 'Technical Support', desc: 'Theme adjustments, Shopify configuration, app integrations, and troubleshooting assistance.' },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn y={40}>
        <h2
          className="font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.1} y={30}>
            <div
              className="flex gap-6 md:gap-10 items-start py-8 sm:py-10 md:py-12"
              style={{
                borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : undefined,
                borderBottom: '1px solid rgba(12,12,12,0.15)',
              }}
            >
              {/* Big number */}
              <span
                className="font-black leading-none shrink-0 select-none"
                style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
              >
                {s.num}
              </span>

              {/* Name + desc */}
              <div className="flex flex-col justify-center pt-1 md:pt-3">
                <h3
                  className="font-medium uppercase mb-2 md:mb-3"
                  style={{ color: '#0C0C0C', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {s.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{ color: '#0C0C0C', fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
