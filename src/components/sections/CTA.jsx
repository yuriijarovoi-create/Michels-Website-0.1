import { motion } from 'framer-motion'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta__bg">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80"
          alt=""
        />
        <div className="cta__overlay" />
      </div>
      <div className="container cta__content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="cta__title">
            Bereit für makellose
            <br />
            <span className="metallic-text">Karosserie & Lack?</span>
          </h2>
          <p className="cta__subtitle">
            Fordern Sie jetzt ein unverbindliches Angebot an — wir beraten Sie persönlich zu Reparatur, Lackierung und Versicherungsabwicklung.
          </p>
          <div className="cta__actions">
            <a href="#contact" className="btn btn-primary">
              Kostenloses Angebot anfragen
            </a>
            <a href="tel:+49267191490" className="btn btn-outline">
              Jetzt anrufen
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
