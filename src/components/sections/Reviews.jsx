import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { reviews } from '../../data/content'
import SectionHeader from '../ui/SectionHeader'
import '../ui/SectionHeader.css'
import './Reviews.css'

export default function Reviews() {
  const [active, setActive] = useState(0)

  const next = () => setActive((prev) => (prev + 1) % reviews.length)
  const prev = () => setActive((prev) => (prev - 1 + reviews.length) % reviews.length)

  return (
    <section className="reviews section-light" id="reviews">
      <div className="container">
        <SectionHeader
          label="Referenzen"
          title="Was unsere Kunden sagen"
          subtitle="Vertrauen entsteht durch Ergebnisse — lesen Sie, was Autofahrer über unsere Reparatur- und Lackierarbeiten berichten."
          align="center"
        />

        <div className="reviews__carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="reviews__card"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="reviews__stars" aria-label={`${reviews[active].rating} von 5 Sternen`}>
                {Array.from({ length: reviews[active].rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <blockquote className="reviews__text">&ldquo;{reviews[active].text}&rdquo;</blockquote>
              <div className="reviews__author">
                <div className="reviews__avatar">{reviews[active].avatar}</div>
                <div>
                  <strong>{reviews[active].name}</strong>
                  <span>{reviews[active].role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="reviews__nav">
            <button type="button" onClick={prev} className="reviews__nav-btn" aria-label="Vorherige Bewertung">
              <ChevronLeft />
            </button>
            <div className="reviews__dots">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`reviews__dot ${i === active ? 'reviews__dot--active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Bewertung ${i + 1}`}
                />
              ))}
            </div>
            <button type="button" onClick={next} className="reviews__nav-btn" aria-label="Nächste Bewertung">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="reviews__grid">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className={`reviews__mini ${index === active ? 'reviews__mini--active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onClick={() => setActive(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActive(index)}
            >
              <div className="reviews__mini-stars">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <StarIcon key={i} small />
                ))}
              </div>
              <p className="reviews__mini-text">{review.text.slice(0, 80)}…</p>
              <span className="reviews__mini-name">{review.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StarIcon({ small }) {
  return (
    <svg width={small ? 12 : 18} height={small ? 12 : 18} viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
