import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { works, type Work } from '../data/works'

const layout: Record<Work['span'], { grid: string; aspect: string }> = {
  a: { grid: 'md:col-[1/8]', aspect: 'aspect-[4/5]' },
  b: { grid: 'md:col-[8/13] md:mt-[clamp(0px,8vw,5rem)]', aspect: 'aspect-square' },
  c: { grid: 'md:col-[1/6]', aspect: 'aspect-[3/2]' },
  d: { grid: 'md:col-[6/13] md:mt-[clamp(0px,5vw,3rem)]', aspect: 'aspect-video' },
  e: { grid: 'md:col-[1/8]', aspect: 'aspect-[3/2]' },
  f: { grid: 'md:col-[8/13] md:mt-[clamp(0px,6vw,4rem)]', aspect: 'aspect-[4/5]' },
  g: { grid: 'md:col-[1/13]', aspect: 'aspect-[21/9]' },
}

function WorkCard({ work, delay }: { work: Work; delay: number }) {
  const { grid, aspect } = layout[work.span]
  const featured = work.span === 'g'

  return (
    <Reveal delay={delay} className={grid}>
      <article className="group">
        <a
          href="#"
          aria-label={`${work.name}の詳細（準備中）`}
          className={`block overflow-hidden rounded-sm bg-bg-raised ${aspect}`}
        >
          <img
            src={work.image}
            alt={`${work.name} — ${work.description}`}
            loading="lazy"
            className="h-full w-full origin-center scale-[1.01] object-cover grayscale-[45%] contrast-[1.02] transition-all duration-[1100ms] ease-out group-hover:scale-[1.06] group-hover:grayscale-0 group-focus-within:scale-[1.06] group-focus-within:grayscale-0"
          />
        </a>
        <div className="mt-[1.1rem]">
          <h3
            className={`font-display font-medium transition-colors duration-300 group-hover:text-accent ${
              featured ? 'text-[clamp(1.8rem,3.4vw,2.6rem)]' : 'text-[clamp(1.3rem,2vw,1.7rem)]'
            }`}
          >
            {work.name}
          </h3>
          <p
            className={`mt-[.35rem] text-ink-soft ${featured ? 'max-w-[40em] text-[1.05rem]' : 'max-w-[32em] text-[.92rem]'}`}
          >
            {work.description}
          </p>
          <p className="mt-[.6rem] flex flex-wrap gap-4 font-mono text-[.74rem] text-ink-faint">
            <span>{work.category}</span>
            <span>{work.year}</span>
          </p>
        </div>
      </article>
    </Reveal>
  )
}

export default function Works() {
  return (
    <section id="works" className="py-[var(--section-pad-y)]">
      <SectionHead index="01" title="Selected Works" note="2022 — 2026 / 主な活動より抜粋" />
      <div className="grid grid-cols-1 gap-x-5 gap-y-10 px-[var(--container-pad)] md:grid-cols-12 md:gap-x-8 md:gap-y-10">
        {works.map((work, i) => (
          <WorkCard key={work.slug} work={work} delay={i % 3} />
        ))}
      </div>
    </section>
  )
}
