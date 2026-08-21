import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { SquiggleUnderline } from './Scribble'
import { asset } from '../lib/asset'
import { facts } from '../data/profile'

const history = [
  '元電気工事士から、モデル・MC・リポーターへ',
  '女優、マジックショーアシスタントとしても活動',
  'ホリエモンAI学校 マナビバ校 広報担当',
  '幼少期は器械体操 —— 今も活きるアクロバットが特技',
  '2022年「board girl contest in 表参道」グランプリ受賞',
]

export default function About() {
  return (
    <section id="about" className="bg-bg-raised py-[var(--section-pad-y)]">
      <SectionHead index="02" title="About" />
      <div className="px-[var(--container-pad)]">
        <Reveal>
          <p className="max-w-[26rem] font-display text-[clamp(1.9rem,4vw,3.2rem)] font-normal leading-[1.22] tracking-tight">
            元電気工事士から、
            <br />
            <span className="relative inline-block italic text-accent">
              伝える人
              <SquiggleUnderline className="absolute -bottom-1 left-0 h-2 w-full text-accent" />
            </span>{' '}
            へ。
          </p>
        </Reveal>

        <Reveal delay={1} className="mt-16 flex max-w-md gap-6">
          <div className="w-1/2 -rotate-3 rounded-sm bg-bg p-2 shadow-[0_8px_20px_-10px_rgba(24,20,15,.4)]">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={asset('/profile/photo-04.jpg')}
                alt="伊藤水晶のポートレート"
                className="h-full w-full object-cover grayscale-[20%]"
              />
            </div>
          </div>
          <div className="mt-8 w-1/2 rotate-2 rounded-sm bg-bg p-2 shadow-[0_8px_20px_-10px_rgba(24,20,15,.4)]">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={asset('/profile/photo-07.jpg')}
                alt="伊藤水晶のポートレート"
                className="h-full w-full object-cover grayscale-[20%]"
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-16 border-t border-line pt-12 md:grid-cols-2">
          <Reveal delay={2}>
            <ul className="grid gap-0 border-t border-line font-display text-[clamp(1.05rem,1.6vw,1.3rem)]">
              {history.map((item) => (
                <li key={item} className="border-b border-line py-4">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={3}>
            <dl className="grid gap-3 border-t border-line pt-6 md:border-t-0 md:pt-0">
              {facts.map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-line pb-3 font-mono text-[.82rem]">
                  <dt className="text-ink-faint">{k}</dt>
                  <dd className="m-0">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
