import { motion } from 'framer-motion'
import { whyChooseUs } from '../../data/content'
import SectionHeader from '../ui/SectionHeader'
import '../ui/SectionHeader.css'
import './WhyChooseUs.css'

const icons = {
  craft: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  tech: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" strokeLinecap="round" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

export default function WhyChooseUs() {
  return (
    <section className="why section-dark" id="about">
      <div className="why__bg-image" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80"
          alt=""
        />
      </div>
      <div className="why__overlay" aria-hidden="true" />

      <div className="container why__inner">
        <div className="why__header">
          <SectionHeader
            label="Warum Michels"
            title="Exzellenz ist kein Zufall"
            subtitle="Traditionelles Handwerk seit 1913 — kombiniert mit modernster Lackier- und Reparaturtechnik für Ergebnisse, die überzeugen."
            light
          />
        </div>

        <div className="why__grid">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              className="why-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="why-card__icon">{icons[item.icon]}</div>
              <h3 className="why-card__title">{item.title}</h3>
              <p className="why-card__desc">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
