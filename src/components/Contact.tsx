import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { socials } from '../data/profile'

const EMAIL = 'ia56.b1018@gmail.com'

export default function Contact() {
  return (
    <section id="contact" className="pb-[calc(var(--section-pad-y)*0.6)] pt-[var(--section-pad-y)]">
      <SectionHead index="05" title="Contact" />
      <div className="px-[var(--container-pad)]">
        <Reveal>
          <p className="max-w-[30em] text-[clamp(1.1rem,2vw,1.4rem)] text-ink-soft">
            お仕事のご相談、取材のご依頼、
            <br className="hidden md:block" />
            どちらもお気軽にどうぞ。
          </p>
        </Reveal>

        <Reveal delay={1}>
          <a
            href={`mailto:${EMAIL}`}
            className="group mt-[clamp(2rem,5vw,3rem)] inline-flex items-center gap-[clamp(.8rem,2vw,1.5rem)] font-display text-[clamp(3.2rem,11vw,8rem)] font-medium leading-none tracking-tight"
          >
            <span className="transition-colors duration-300 group-hover:text-accent">LET'S TALK</span>
            <span
              aria-hidden
              className="text-[.5em] text-accent transition-transform duration-300 group-hover:translate-x-[.3em] group-hover:-rotate-[8deg]"
            >
              →
            </span>
          </a>
        </Reveal>

        <Reveal delay={2}>
          <div className="mt-[clamp(3rem,6vw,5rem)] flex flex-wrap items-center justify-between gap-6 border-t border-line pt-6">
            <a
              href={`mailto:${EMAIL}`}
              className="relative font-mono text-[.95rem] after:absolute after:inset-x-0 after:-bottom-[.2em] after:h-px after:bg-ink after:content-['']"
            >
              {EMAIL}
            </a>
            <ul className="flex gap-6">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[.82rem] text-ink-soft transition-colors duration-300 hover:text-accent"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
