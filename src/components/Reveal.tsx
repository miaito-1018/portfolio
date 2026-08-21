import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'span' | 'li'
}

const eases = [0.16, 1, 0.3, 1] as const

export default function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    if (as === 'span') return <span className={className}>{children}</span>
    if (as === 'li') return <li className={className}>{children}</li>
    return <div className={className}>{children}</div>
  }

  const MotionTag = as === 'span' ? motion.span : as === 'li' ? motion.li : motion.div

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.8, delay: delay * 0.09, ease: eases }}
    >
      {children}
    </MotionTag>
  )
}
