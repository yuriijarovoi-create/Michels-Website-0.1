import { useEffect, useState } from 'react'
import { useInView } from '../../hooks/useInView'

function formatNumber(value) {
  if (value >= 1000) {
    return value.toLocaleString('de-DE')
  }
  return String(value)
}

export default function AnimatedCounter({ value, suffix = '', duration = 2000 }) {
  const [ref, isInView] = useInView({ threshold: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.floor(eased * value)
      setCount(start)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className="animated-counter">
      {formatNumber(count)}
      {suffix}
    </span>
  )
}
