import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { journalEntries } from '../data/journal'

export default function Journal() {
  return (
    <section id="journal" className="bg-bg-raised py-[var(--section-pad-y)]">
      <SectionHead index="04" title="Journal" note="制作にまつわる、短い記録" />
      <ul className="px-[var(--container-pad)]">
        {journalEntries.map((entry, i) => (
          <Reveal
            as="li"
            delay={i}
            key={entry.title}
            className={`border-t border-line ${i === journalEntries.length - 1 ? 'border-b' : ''}`}
          >
            <a
              href="#"
              className="grid grid-cols-1 gap-y-2 py-7 transition-opacity duration-300 hover:opacity-60 sm:grid-cols-[7.5rem_1fr] sm:gap-x-8"
            >
              <span className="pt-1 font-mono text-[.78rem] text-ink-faint">{entry.date}</span>
              <span className="font-display text-[clamp(1.3rem,2.3vw,1.8rem)] sm:col-start-2">
                {entry.title}
              </span>
              <span className="max-w-[42em] text-[.92rem] text-ink-soft sm:col-start-2">
                {entry.excerpt}
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
