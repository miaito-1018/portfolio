import Reveal from './Reveal'
import { CircleScribble } from './Scribble'

interface SectionHeadProps {
  index: string
  title: string
  note?: string
}

export default function SectionHead({ index, title, note }: SectionHeadProps) {
  return (
    <div className="mb-[clamp(2.5rem,6vw,5rem)] flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 px-[var(--container-pad)]">
      <Reveal>
        <h2 className="flex items-baseline gap-4 font-hand text-[clamp(1.7rem,4.4vw,2.9rem)] tracking-tight">
          <span className="relative inline-flex items-center justify-center font-mono text-[.85rem] text-accent">
            <CircleScribble className="pointer-events-none absolute -inset-x-2.5 -inset-y-2 text-accent" />
            {index}
          </span>
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
