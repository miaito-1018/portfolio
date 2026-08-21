import Reveal from './Reveal'

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
          <Reveal delay={3}>
            <p className="mt-[clamp(1.6rem,4vw,2.6rem)] font-mono text-[clamp(.95rem,1.6vw,1.15rem)] text-ink-soft">
              Model <span className="mx-[.2em] text-accent">/</span> MC{' '}
              <span className="mx-[.2em] text-accent">/</span> Reporter
            </p>
          </Reveal>
          <Reveal delay={4}>
            <p className="mt-[.9rem] max-w-[26em] text-[clamp(1.05rem,2vw,1.4rem)]">
              伝えたいことを、まっすぐに届けたい。
            </p>
          </Reveal>
        </div>

        <Reveal delay={2} className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm md:max-w-none">
          <img
            src="/profile/photo-01.jpg"
            alt="伊藤水晶のポートレート"
            className="h-full w-full object-cover grayscale-[35%] contrast-[1.02] transition-all duration-[1200ms] ease-out hover:grayscale-0"
          />
        </Reveal>
      </div>

      <Reveal delay={5} className="mt-[clamp(3rem,7vw,5rem)] flex flex-col items-center gap-3 self-center">
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
