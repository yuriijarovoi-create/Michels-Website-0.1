import { motion } from 'framer-motion'
import './SectionHeader.css'

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = 'left',
  light = false,
  className = '',
}) {
  return (
    <motion.div
      className={`section-header section-header--${align} ${className}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {label && (
        <span className={`section-label ${light ? 'section-label--light' : ''}`}>
          {label}
        </span>
      )}
      <h2 className={`section-title ${light ? 'section-title--light' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`section-subtitle ${light ? 'section-subtitle--light' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
