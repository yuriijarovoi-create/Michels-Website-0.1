import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { company } from '../../data/content'
import './Hero.css'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <section ref={ref} className="hero" id="hero">
      <motion.div className="hero__bg" style={{ y: bgY }}>
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=85"
          alt=""
          className="hero__bg-image"
        />
        <div className="hero__bg-overlay" />
        <div className="hero__bg-grain" aria-hidden="true" />
      </motion.div>

      <motion.div className="hero__content container" style={{ opacity, y: textY }}>
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="hero__badge-dot" />
          Premium Karosserie & Lackierung
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Perfekte Karosserie- &
          <br />
          <span className="hero__title-accent">Lackierarbeiten in Cochem</span>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {company.description}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <a href="#contact" className="btn btn-primary">
            Kostenloses Angebot anfragen
            <ArrowIcon />
          </a>
          <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="btn btn-outline">
            Jetzt anrufen
          </a>
        </motion.div>

        <motion.div
          className="hero__location"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <LocationIcon />
          <span>
            {company.address.street}, {company.address.city}
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span>Scrollen</span>
        <div className="hero__scroll-line">
          <motion.div
            className="hero__scroll-dot"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      <div className="hero__stats-bar">
        <div className="container hero__stats-inner">
          {[
            { value: '110+', label: 'Jahre Erfahrung' },
            { value: '10', label: 'Leistungen' },
            { value: '98%', label: 'Zufriedenheit' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="hero__stat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.1, duration: 0.6 }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
