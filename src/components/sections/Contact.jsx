import { useState } from 'react'
import { motion } from 'framer-motion'
import { company } from '../../data/content'
import SectionHeader from '../ui/SectionHeader'
import '../ui/SectionHeader.css'
import './Contact.css'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <SectionHeader
          label="Kontakt"
          title="Sprechen Sie mit uns"
          subtitle="Wir sind für Sie da — ob Unfallschaden, Lackierung, Smart Repair oder ein unverbindliches Angebot."
        />

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact__card">
              <ContactIcon />
              <div>
                <h3>Adresse</h3>
                <p>{company.address.street}</p>
                <p>{company.address.city}</p>
                <p>{company.address.country}</p>
              </div>
            </div>

            <div className="contact__card">
              <PhoneIcon />
              <div>
                <h3>Telefon</h3>
                <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phoneDisplay}</a>
              </div>
            </div>

            <div className="contact__card">
              <MailIcon />
              <div>
                <h3>E-Mail</h3>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </div>
            </div>

            <div className="contact__hours">
              <h3>Öffnungszeiten</h3>
              <ul>
                {company.hours.map((h) => (
                  <li key={h.days}>
                    <span>{h.days}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="contact__form-wrap"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="contact__success">
                <SuccessIcon />
                <h3>Vielen Dank!</h3>
                <p>Ihre Nachricht wurde gesendet. Wir melden uns schnellstmöglich bei Ihnen.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="email">E-Mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="ihre@email.de"
                    />
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="phone">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="Optional"
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Nachricht</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Beschreiben Sie Ihren Schaden oder Ihr Anliegen..."
                  />
                </div>
                <button type="submit" className="btn btn-primary contact__submit">
                  Nachricht senden
                </button>
              </form>
            )}
          </motion.div>
        </div>

        <motion.div
          className="contact__map"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact__map-placeholder">
            <iframe
              title="Standort Karosserie Michels"
              src="https://maps.google.com/maps?q=Industriering+19,+56812+Cochem-Brauheck,+Germany&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ContactIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SuccessIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" strokeWidth="2" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
