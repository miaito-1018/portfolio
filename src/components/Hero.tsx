import Reveal from './Reveal'
import { asset } from '../lib/asset'
import { SquiggleUnderline, CircleScribble } from './Scribble'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-[var(--container-pad)] pb-[clamp(4rem,8vw,6rem)] pt-[clamp(6rem,12vw,9rem)]"
    >
      <div className="notebook-dots pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative grid items-center gap-12 md:grid-cols-[1.3fr_1fr] md:gap-10">
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

          <Reveal delay={2} className="mt-4 ml-[.3em] inline-block -rotate-3">
            <span className="relative inline-block font-hand text-[clamp(1.4rem,3.4vw,2rem)] text-accent">
              Mia Ito
              <SquiggleUnderline className="absolute -bottom-1.5 left-0 h-2 w-full text-accent" />
            </span>
          </Reveal>

          <Reveal delay={3}>
            <p className="mt-[clamp(1.8rem,4vw,2.8rem)] -rotate-1 font-mono text-[clamp(.95rem,1.6vw,1.15rem)] text-ink-soft">
              Model <span className="mx-[.2em] text-accent">/</span>
              <span className="relative mx-[.15em] inline-block">
                MC
                <CircleScribble className="pointer-events-none absolute -inset-x-2 -inset-y-2 text-accent" />
              </span>
              <span className="mx-[.2em] text-accent">/</span> Reporter
            </p>
          </Reveal>

          <Reveal delay={4}>
            <p className="mt-[1.1rem] max-w-[26em] text-[clamp(1.05rem,2vw,1.4rem)]">
              伝えたいことを、まっすぐに届けたい。
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={2}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm rotate-2 overflow-hidden rounded-sm bg-bg p-2 shadow-[0_10px_30px_-12px_rgba(24,20,15,.35)] md:max-w-none"
        >
          <div className="h-full w-full overflow-hidden">
            <img
              src={asset('/profile/photo-01.jpg')}
              alt="伊藤水晶のポートレート"
              className="h-full w-full object-cover grayscale-[35%] contrast-[1.02] transition-all duration-[1200ms] ease-out hover:grayscale-0"
            />
          </div>
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
