import { motion } from 'framer-motion'
import { timeline } from '../../data/content'
import SectionHeader from '../ui/SectionHeader'
import '../ui/SectionHeader.css'
import './Timeline.css'

export default function Timeline() {
  return (
    <section className="timeline-section section-light">
      <div className="container">
        <SectionHeader
          label="Unsere Geschichte"
          title="Meilensteine der Meisterschaft"
          subtitle="Seit 1913 in Cochem-Brauheck — eine Tradition präziser Karosserie- und Lackierarbeiten."
          align="center"
        />

        <div className="timeline">
          <div className="timeline__line" aria-hidden="true" />
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              className={`timeline__item ${index % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="timeline__dot">
                <span>{item.year}</span>
              </div>
              <div className="timeline__card">
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
