import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { company, navLinks } from '../../data/content'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="navbar__inner container">
          <a href="#" className="navbar__logo" aria-label={company.fullName}>
            <span className="navbar__logo-mark">M</span>
            <span className="navbar__logo-text">
              <strong>Michels</strong>
              <small>Karosserie & Lackierung</small>
            </span>
          </a>

          <nav className="navbar__nav" aria-label="Hauptnavigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="navbar__link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="navbar__actions">
            <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="navbar__phone">
              <PhoneIcon />
              <span>{company.phoneDisplay}</span>
            </a>
            <a href="#contact" className="btn btn-primary navbar__cta">
              Angebot anfragen
            </a>
          </div>

          <button
            type="button"
            className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.nav
              className="mobile-menu__nav"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="mobile-menu__link"
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="btn btn-primary mobile-menu__cta"
                onClick={handleNavClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Angebot anfragen
              </motion.a>
              <motion.a
                href={`tel:${company.phone.replace(/\s/g, '')}`}
                className="mobile-menu__phone"
                onClick={handleNavClick}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {company.phoneDisplay}
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
