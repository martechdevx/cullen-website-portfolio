import { useState, FormEvent } from 'react'
import FadeIn from './FadeIn'
import GhostButton from './GhostButton'

const CONTACTS = [
  { icon: <i className="fa-brands fa-telegram"></i>, label: 'Telegram', href: 'https://t.me/ecomcullen', btn: 'Message on Telegram' },
  { icon: <i className="fa-regular fa-envelope"></i>, label: 'Email', href: 'mailto:cullenbenedict01@gmail.com', btn: 'Send Email' },
  { icon: <i className="fa-brands fa-x-twitter"></i>, label: 'X / Twitter', href: 'https://x.com/ecomcullen', btn: 'View Profile' },
  { icon: <i className="fa-brands fa-discord"></i>, label: 'Discord', href: 'https://discord.com/users/1168067747255689286', btn: 'Connect on Discord' },
]

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section
      id="work-with-me"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-4"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Let&apos;s Talk
        </h2>
        <p
          className="text-center font-light mx-auto mb-16 sm:mb-20 max-w-lg"
          style={{ color: '#D7E2EA', opacity: 0.5, fontSize: 'clamp(0.9rem, 1.6vw, 1.2rem)' }}
        >
          Whether you&apos;re launching a new Shopify store or improving an existing one, feel free to reach out.
        </p>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col gap-5">

        {/* ── Work With Me — centered full-width card ── */}
        <FadeIn y={30} delay={0}>
          <div
            className="w-full rounded-[2rem] border border-[#D7E2EA]/15 p-8 md:p-10 flex flex-col items-center gap-4 text-center"
            style={{ background: 'rgba(255,255,255,0.02)' }}
          >
            <span
              className="font-light uppercase tracking-widest text-xs"
              style={{ color: '#D7E2EA', opacity: 0.4 }}
            >
              Ready to grow your store?
            </span>
            <p
              className="font-black uppercase tracking-tight"
              style={{ color: '#D7E2EA', fontSize: 'clamp(1.2rem, 2.5vw, 2rem)' }}
            >
              Let&apos;s build something that converts
            </p>
            <a
              href="https://workwithcullen.figma.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block rounded-full font-medium uppercase tracking-widest text-white cursor-pointer transition-opacity duration-200 hover:opacity-90 px-12 py-4 text-sm"
              style={{
                background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                boxShadow: '0px 4px 4px rgba(181,1,167,0.25), inset 4px 4px 12px #7721B1',
                outline: '2px solid white',
                outlineOffset: '-3px',
              }}
            >
              Work With Me
            </a>
          </div>
        </FadeIn>

        {/* ── 4 contact cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CONTACTS.map((c, i) => (
            <FadeIn key={i} delay={i * 0.1 + 0.1} y={30}>
              <div
                className="rounded-[2rem] border border-[#D7E2EA]/15 p-7 md:p-8 flex flex-col gap-5 h-full"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl" style={{ color: '#B600A8' }}>{c.icon}</span>
                  <div>
                    <div
                      className="font-medium uppercase tracking-widest text-xs mb-1"
                      style={{ color: '#D7E2EA', opacity: 0.4 }}
                    >
                      {c.label}
                    </div>
                    <div
                      className="font-medium break-all"
                      style={{ color: '#D7E2EA', fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)' }}
                    >
                      {c.display}
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <GhostButton label={c.btn} href={c.href} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>

      {/* ── Form ── */}
      <FadeIn y={30} delay={0.3}>
        <div
          className="max-w-2xl mx-auto mt-5 rounded-[2rem] border border-[#D7E2EA]/15 p-8 md:p-10"
          style={{ background: 'rgba(255,255,255,0.02)' }}
        >
          <h3
            className="font-black uppercase tracking-wide mb-8 text-center"
            style={{ color: '#D7E2EA', fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)' }}
          >
            Send a Message
          </h3>
          {sent ? (
            <p className="text-center font-medium py-6" style={{ color: '#D7E2EA', opacity: 0.7 }}>
              Message sent — I&apos;ll get back to you soon.
            </p>
          ) : (
            <form
              action="https://formspree.io/f/xpqenqeo"
              method="POST"
              className="flex flex-col gap-4"
            >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-2xl border border-[#D7E2EA]/15 px-5 py-3.5 font-light outline-none focus:border-[#B600A8]/50 transition-colors duration-200 bg-transparent"
              style={{ color: '#D7E2EA', fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-2xl border border-[#D7E2EA]/15 px-5 py-3.5 font-light outline-none focus:border-[#B600A8]/50 transition-colors duration-200 bg-transparent"
              style={{ color: '#D7E2EA', fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full rounded-2xl border border-[#D7E2EA]/15 px-5 py-3.5 font-light outline-none focus:border-[#B600A8]/50 transition-colors duration-200 bg-transparent resize-none"
              style={{ color: '#D7E2EA', fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}
            />
            <button
              type="submit"
              className="mt-2 rounded-full font-medium uppercase tracking-widest text-white cursor-pointer px-10 py-4 text-sm transition-opacity duration-200 hover:opacity-90"
              style={{
                background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                boxShadow: '0px 4px 4px rgba(181,1,167,0.25), inset 4px 4px 12px #7721B1',
                outline: '2px solid white',
                outlineOffset: '-3px',
              }}
            >
              Send Message
            </button>
          </form>
          )}
        </div>
      </FadeIn>
    </section>
  )
}