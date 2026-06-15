const LINKS = ['Home', 'About', 'Services', 'Testimonials', 'FAQ', 'Contact']

const SOCIALS = [
  { label: 'Telegram', href: 'https://t.me/ecomcullen', icon: '✈' },
  { label: 'X', href: 'https://x.com/ecomcullen', icon: '✕' },
  { label: 'Email', href: 'mailto:cullenbenedict01@gmail.com', icon: '✉' },
  { label: 'Discord', href: 'https://discord.com/users/1168067747255689286', icon: '◈' },
]

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-12 md:py-16 border-t border-[#D7E2EA]/10" style={{ background: '#0C0C0C' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <div className="font-black uppercase tracking-tight" style={{ color: '#D7E2EA', fontSize: 'clamp(1.2rem, 3vw, 2rem)' }}>
            Benedict Cullen
          </div>
          <div className="font-light uppercase tracking-widest mt-1 text-sm" style={{ color: '#D7E2EA', opacity: 0.4 }}>
            eCommerce Growth Specialist
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {LINKS.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="text-sm font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
              style={{ color: '#D7E2EA', opacity: 0.5 }}>
              {l}
            </a>
          ))}
        </div>

        <div className="flex gap-4">
          {SOCIALS.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              className="w-9 h-9 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center transition-all duration-200 hover:border-[#B600A8]/60 hover:bg-[#B600A8]/10"
              style={{ color: '#D7E2EA', opacity: 0.6 }}>
              <span style={{ fontSize: '0.85rem' }}>{s.icon}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[#D7E2EA]/10">
        <p className="text-xs font-light uppercase tracking-widest text-center" style={{ color: '#D7E2EA', opacity: 0.25 }}>
          © 2026 Cullen Benedict. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
