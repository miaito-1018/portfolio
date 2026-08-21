import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { nowItems } from '../data/profile'

export default function Now() {
  return (
    <section id="now" className="py-[var(--section-pad-y)]">
      <SectionHead index="03" title="Now" note="2026年8月時点の記録" />
      <ul className="px-[var(--container-pad)]">
        {nowItems.map((item, i) => (
          <Reveal
            as="li"
            delay={i}
            key={item.label}
            className={`grid grid-cols-1 gap-1 border-t border-line py-6 sm:grid-cols-[9rem_1fr] sm:gap-6 ${
              i === nowItems.length - 1 ? 'border-b' : ''
            }`}
          >
            <span className="pt-1 font-mono text-[.78rem] uppercase tracking-wide text-accent">
              {item.label}
            </span>
            <span className="max-w-[30em] font-display text-[clamp(1.15rem,2.2vw,1.6rem)]">
              {item.value}
            </span>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
