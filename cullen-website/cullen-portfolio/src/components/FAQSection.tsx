import { useState } from 'react'
import FadeIn from './FadeIn'

const FAQS = [
  { q: 'What platforms do you work with?', a: 'Primarily Shopify and eCommerce-focused websites.' },
  { q: 'Do you help with existing stores?', a: 'Yes. I frequently work with store owners looking to improve an existing store rather than building from scratch.' },
  { q: 'Can you help identify conversion issues?', a: 'Yes. Reviewing customer experience and identifying potential friction points is a core part of the process.' },
  { q: 'Do you provide ongoing support?', a: 'Depending on the project scope, ongoing support can be discussed during our initial conversation.' },
  { q: 'How long does a typical project take?', a: 'It depends on scope — a store audit can be quick, while full setups or redesigns take longer. Timelines are agreed upfront.' },
  { q: 'How do we get started?', a: 'Reach out via Telegram, email, or Discord and we\'ll talk through your store, goals, and the best way forward.' },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32" style={{ background: '#FFFFFF' }}>
      <FadeIn y={40}>
        <h2 className="font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-24"
          style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          FAQ
        </h2>
      </FadeIn>

      <div className="max-w-3xl mx-auto">
        {FAQS.map((faq, i) => (
          <FadeIn key={i} delay={i * 0.08} y={20}>
            <div
              className="cursor-pointer py-6 sm:py-7"
              style={{ borderTop: i === 0 ? '1px solid rgba(12,12,12,0.12)' : undefined, borderBottom: '1px solid rgba(12,12,12,0.12)' }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-center gap-4">
                <h3 className="font-medium uppercase tracking-wide" style={{ color: '#0C0C0C', fontSize: 'clamp(0.95rem, 1.8vw, 1.4rem)' }}>
                  {faq.q}
                </h3>
                <span className="font-light text-2xl shrink-0 transition-transform duration-300"
                  style={{ color: '#0C0C0C', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </span>
              </div>
              {open === i && (
                <p className="mt-3 font-light leading-relaxed" style={{ color: '#0C0C0C', opacity: 0.6, fontSize: 'clamp(0.85rem, 1.5vw, 1.15rem)' }}>
                  {faq.a}
                </p>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
