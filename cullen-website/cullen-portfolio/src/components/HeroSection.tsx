import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ContactButton from './ContactButton'
import myPhoto from '../Assets/cullen.png'
import myLogo from '../Assets/Bc-logo.png'

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Work With Me', href: '#work-with-me' },
]

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
      className="h-screen flex flex-col overflow-x-clip relative "
    >
      {/* Background image */}
      <img
        src={myPhoto}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* ── Navbar ── */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showHeader ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 bg-[#0C0C0C]/80 backdrop-blur-sm z-50 shadow-md"
      >
        <a href="#home" className="hover:opacity-70 transition-opacity duration-200">
          <img src={myLogo} alt="Cullen Benedict" className="h-12 md:h-12 w-auto" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {NAV.map(link => (
            <a
              key={link.label}  
              href={link.href}
              className="text-sm md:text-lg font-medium uppercase tracking-wider hover:opacity-70 text-[#D7E2EA]"
            >
              {link.label}
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
        <div className="fixed top-16 left-0 w-full bg-[#0C0C0C] flex flex-col items-center gap-4 py-6 md:hidden z-[9999]">
          {NAV.map(link => (
            <a
              key={link.label}  
              href={link.href}
              className="text-lg uppercase tracking-wider text-[#D7E2EA] hover:opacity-70"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.h1
          {...fade(0.15, 40)}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center"
          style={{ fontSize: 'clamp(3rem, 16vw, 200px)' }}
        >
         Ecom Cullen
        </motion.h1>

        <motion.p
          {...fade(0.35, 20)}
          className="mt-6 max-w-xl font-light uppercase tracking-wide text-[#D7E2EA]"
          style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.5rem)' }}
        >
          eCommerce growth specialist helping brands build Shopify stores that convert
        </motion.p>

        <motion.div {...fade(0.5, 20)} className="mt-8">
          <ContactButton />
        </motion.div>
      </div>
    </section>
  )
}
