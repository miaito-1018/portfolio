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
        <h2 className="flex items-baseline gap-3 font-hand text-[clamp(2.1rem,5.2vw,3.4rem)] font-semibold tracking-tight">
          <span className="font-mono text-[.85rem] font-normal text-accent">{index}</span>
          <span className="-rotate-1 inline-block">{title}</span>
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
