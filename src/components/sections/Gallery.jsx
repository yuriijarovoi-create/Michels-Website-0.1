import { useState } from 'react'
import { motion } from 'framer-motion'
import { galleryItems } from '../../data/content'
import SectionHeader from '../ui/SectionHeader'
import '../ui/SectionHeader.css'
import './Gallery.css'

export default function Gallery() {
  const [activeSlide, setActiveSlide] = useState({})

  const handleSlide = (id, value) => {
    setActiveSlide((prev) => ({ ...prev, [id]: value }))
  }

  return (
    <section className="gallery section-dark" id="gallery">
      <div className="container">
        <SectionHeader
          label="Galerie"
          title="Vorher & Nachher"
          subtitle="Sehen Sie selbst, was präzise Karosserie- und Lackierarbeit bewirkt — echte Ergebnisse aus unserer Werkstatt."
          align="center"
          light
        />

        <div className="gallery__grid">
          {galleryItems.map((item, index) => {
            const slidePos = activeSlide[item.id] ?? 50

            return (
              <motion.div
                key={item.id}
                className="gallery-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="gallery-card__compare">
                  <img src={item.after} alt={`${item.title} — Nachher`} className="gallery-card__after" />
                  <div
                    className="gallery-card__before-wrap"
                    style={{ clipPath: `inset(0 ${100 - slidePos}% 0 0)` }}
                  >
                    <img src={item.before} alt={`${item.title} — Vorher`} className="gallery-card__before" />
                  </div>
                  <div className="gallery-card__slider-line" style={{ left: `${slidePos}%` }}>
                    <div className="gallery-card__slider-handle">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M8 9l4-4 4 4M8 15l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="95"
                    value={slidePos}
                    onChange={(e) => handleSlide(item.id, Number(e.target.value))}
                    className="gallery-card__range"
                    aria-label={`Vorher/Nachher Vergleich für ${item.title}`}
                  />
                  <span className="gallery-card__label gallery-card__label--before">Vorher</span>
                  <span className="gallery-card__label gallery-card__label--after">Nachher</span>
                </div>
                <div className="gallery-card__info">
                  <span className="gallery-card__category">{item.category}</span>
                  <h3 className="gallery-card__title">{item.title}</h3>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
