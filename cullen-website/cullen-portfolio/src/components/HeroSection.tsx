import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ContactButton from './ContactButton'
import Magnet from './Magnet'
import myPhoto from '../Assets/cullen.png'

const NAV = ['About', 'Services', 'Process', 'Testimonials', 'FAQ', 'Contact']

const fade = (delay: number, y = 0, x = 0) => ({
  initial: { opacity: 0, y, x },
  animate: { opacity: 1, y: 0, x: 0 },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  },
})

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false) 
      } else {
        setShowHeader(true) 
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <section
      id="home"
      className="h-screen flex flex-col overflow-x-clip relative pt-20"
      style={{ background: '#0C0C0C' }}
    >
      {/* ── Navbar ── */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showHeader ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 bg-[#0C0C0C] z-50 shadow-md"
      >
      <a
        href="#home"
        className="text-lg md:text-2xl font-bold text-[#D7E2EA] hover:opacity-70"
        >
        Benedict Cullen
      </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {NAV.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm md:text-lg font-medium uppercase tracking-wider hover:opacity-70"
              style={{ color: '#D7E2EA' }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#D7E2EA] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </motion.nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0C0C0C] flex flex-col items-center gap-4 py-6 md:hidden z-20">
          {NAV.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-lg uppercase tracking-wider text-[#D7E2EA] hover:opacity-70"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}

      {/* ── Massive heading ── */}
      <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5 px-2">
        <motion.h1
          {...fade(0.15, 40)}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center"
          style={{ fontSize: 'clamp(3rem, 16vw, 200px)' }}
        >
          Ecom Cullen
        </motion.h1>
      </div>

      {/* ── Bottom bar ── */}
      <div className="mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <motion.p
          {...fade(0.35, 20)}
          className="font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          style={{ color: '#D7E2EA', fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          eCommerce growth specialist helping brands build Shopify stores that convert
        </motion.p>

        <motion.div {...fade(0.5, 20)}>
          <ContactButton />
        </motion.div>
      </div>

      {/* ── Portrait / Hero Visual ── */}
      <motion.div
        {...fade(0.6, 30)}
        className="absolute left-1/2 -translate-x-1/2 z-10 bottom-0 sm:bottom-0 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0"
        style={{ width: 'clamp(220px, 30vw, 480px)' }}
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <div
            className="flex flex-col items-center justify-end"
            style={{ height: 'clamp(300px, 42vw, 560px)' }}
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
              {/* Purple glow */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle at 50% 60%, rgba(182,0,168,0.2) 0%, transparent 65%)',
                  filter: 'blur(40px)',
                }}
              />

              {/* Card */}
              <div
                className="relative flex flex-col items-center justify-center gap-3 rounded-[2rem] border border-[#D7E2EA]/15 px-10 py-10"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <span
                  className="font-light uppercase tracking-[0.3em] text-xs"
                  style={{ color: '#D7E2EA', opacity: 0.45 }}
                >
                  Shopify Expert
                </span>
                <div
                  className="hero-heading font-black uppercase leading-none text-center"
                  style={{ fontSize: 'clamp(2.2rem, 6vw, 5.5rem)' }}
                >
                  eCom<br />Growth
                </div>
                <span
                  className="font-light uppercase tracking-[0.3em] text-xs mt-1"
                  style={{ color: '#D7E2EA', opacity: 0.45 }}
                >
                  Specialist
                </span>
                <div className="flex gap-2 mt-2 flex-wrap justify-center">
                  {['CRO', 'UX', 'Design', 'Shopify'].map(t => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-[#D7E2EA]/20"
                      style={{ color: '#D7E2EA', opacity: 0.5 }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Magnet>
      </motion.div>
    </section>
  )
}
