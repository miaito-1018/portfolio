import Reveal from './Reveal'
import { asset } from '../lib/asset'
import { SquiggleUnderline } from './Scribble'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-[var(--container-pad)] pb-[clamp(4rem,8vw,6rem)] pt-[clamp(6rem,12vw,9rem)]"
    >
      <div className="grid items-center gap-12 md:grid-cols-[1.3fr_1fr] md:gap-10">
        <div className="max-w-[40rem]">
          <Reveal>
            <p className="mb-[clamp(1rem,3vw,1.8rem)] font-mono text-[.82rem] text-ink-soft">Profile — 2026</p>
          </Reveal>
          <h1 className="flex flex-col font-display text-[clamp(3rem,11vw,7rem)] font-medium leading-[0.94] tracking-tight">
            <Reveal as="span" delay={1} className="block">
              伊藤
            </Reveal>
            <Reveal as="span" delay={2} className="block italic text-accent">
              水晶
            </Reveal>
          </h1>

          <Reveal delay={2} className="ml-[.4em] mt-3 inline-block -rotate-2">
            <span className="relative inline-block font-hand text-[clamp(1.8rem,4.4vw,2.6rem)] font-semibold text-accent">
              Mia Ito
              <SquiggleUnderline className="absolute -bottom-1 left-0 h-1.5 w-full text-accent" />
            </span>
          </Reveal>

          <Reveal delay={3}>
            <p className="mt-[clamp(1.8rem,4vw,2.8rem)] font-mono text-[clamp(.95rem,1.6vw,1.15rem)] text-ink-soft">
              <span className="inline-block">Model</span>{' '}
              <span className="mx-[.1em] text-accent">/</span>{' '}
              <span className="inline-block -translate-y-[.15em]">MC</span>{' '}
              <span className="mx-[.1em] text-accent">/</span>{' '}
              <span className="inline-block translate-y-[.1em]">Reporter</span>
            </p>
          </Reveal>

          <Reveal delay={4}>
            <p className="mt-[1.1rem] max-w-[26em] text-[clamp(1.05rem,2vw,1.4rem)]">
              伝えたいことを、まっすぐに届けたい。
            </p>
          </Reveal>
        </div>

        <Reveal delay={2} className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm md:max-w-none">
          <img
            src={asset('/profile/photo-01.jpg')}
            alt="伊藤水晶のポートレート"
            className="h-full w-full object-cover"
          />
        </Reveal>
      </div>

      <Reveal delay={5} className="relative mt-[clamp(3rem,7vw,5rem)] flex flex-col items-center gap-3 self-center">
        <a
          href="#works"
          aria-label="Worksセクションへスクロール"
          className="flex flex-col items-center gap-3"
        >
          <span className="scroll-cue-line h-[3.2rem] w-px bg-gradient-to-b from-ink-faint to-transparent" />
          <span className="font-mono text-[.72rem] uppercase tracking-[.12em] text-ink-faint">Scroll</span>
        </a>
      </Reveal>
    </section>
  )
}
