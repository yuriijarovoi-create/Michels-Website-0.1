import { motion } from 'framer-motion'
import { services } from '../../data/content'
import SectionHeader from '../ui/SectionHeader'
import '../ui/SectionHeader.css'
import './Services.css'

const icons = {
  body: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M5 17h14v-5H5v5zM5 12l2-4h10l2 4M7 8V6m10 2V6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  build: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  glass: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 3v18" />
    </svg>
  ),
  paint: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M19 11H5m14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m14 0V9a2 2 0 0 0-2-2M5 11V9a2 2 0 0 1 2-2m0 0V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  repair: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  smart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  dent: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14c2-3 6-3 8 0" strokeLinecap="round" />
    </svg>
  ),
  corrosion: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  cavity: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  insurance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 2v6h6M9 15l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

export default function Services() {
  return (
    <section className="services section-light" id="services">
      <div className="container">
        <SectionHeader
          label="Leistungen"
          title="Alles aus einer Hand"
          subtitle="Vom kleinen Kratzer bis zur Unfallinstandsetzung — Ihre Karosserie- und Lackierwerkstatt in Cochem-Brauheck mit dem vollen Leistungsspektrum."
        />

        <div className="services__grid">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              className={`service-card ${index === 0 ? 'service-card--featured' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="service-card__image-wrap">
                <img src={service.image} alt="" loading="lazy" className="service-card__image" />
                <div className="service-card__overlay" />
              </div>
              <div className="service-card__content">
                <div className="service-card__icon">{icons[service.icon]}</div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
                <a href="#contact" className="service-card__link">
                  Anfrage stellen
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
