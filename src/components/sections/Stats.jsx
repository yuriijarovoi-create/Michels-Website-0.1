import { motion } from 'framer-motion'
import { stats } from '../../data/content'
import AnimatedCounter from '../ui/AnimatedCounter'
import './Stats.css'

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__bg" aria-hidden="true" />
      <div className="container">
        <div className="stats__grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stats__item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="stats__value">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <span className="stats__label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
