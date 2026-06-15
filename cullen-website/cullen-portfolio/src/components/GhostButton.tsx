interface GhostButtonProps {
  label?: string
  href?: string
}

export default function GhostButton({ label = 'Live Project', href = '#' }: GhostButtonProps) {
  return (
    <a
      href={href}
      target={href.startsWith('http') || href.startsWith('mailto') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="inline-block rounded-full font-medium uppercase tracking-widest border-2 transition-colors duration-200 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base"
      style={{ color: '#D7E2EA', borderColor: '#D7E2EA' }}
      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(215,226,234,0.1)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
    >
      {label}
    </a>
  )
}
