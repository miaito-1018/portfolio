import Reveal from './Reveal'

interface SectionHeadProps {
  index: string
  title: string
  note?: string
}

export default function SectionHead({ index, title, note }: SectionHeadProps) {
  return (
    <div className="mb-[clamp(2.5rem,6vw,5rem)] flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 px-[var(--container-pad)]">
      <Reveal>
        <h2 className="flex items-baseline gap-3 font-display text-[clamp(2rem,5vw,3.4rem)] font-medium tracking-tight">
          <span className="font-mono text-[.95rem] font-medium text-accent">{index}</span>
          {title}
        </h2>
      </Reveal>
      {note && (
        <Reveal delay={1}>
          <p className="font-mono text-[.8rem] tracking-wide text-ink-soft">{note}</p>
        </Reveal>
      )}
    </div>
  )
}
