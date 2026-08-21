import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const navItems = [
  { href: '#works', index: '01', label: 'Works' },
  { href: '#about', index: '02', label: 'About' },
  { href: '#now', index: '03', label: 'Now' },
  { href: '#journal', index: '04', label: 'Journal' },
  { href: '#contact', index: '05', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-[var(--container-pad)] py-[clamp(1.1rem,3vw,1.6rem)]">
        <div className="absolute inset-0 -z-10 bg-bg/82 backdrop-blur-[10px]" />
        <div className="flex items-center justify-between">
          <a
            href="#top"
            className="-rotate-2 inline-block font-hand text-[1.15rem] font-semibold leading-[1.05] tracking-wide"
          >
            <span className="block">Who is</span>
            <span className="block">Mia？</span>
          </a>
          <nav aria-label="サイト内メニュー" className="flex items-center">
            <ul className="hidden gap-6 sm:flex md:gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-baseline gap-1.5 py-1 font-mono text-[.82rem] tracking-wide"
                  >
                    <span className="text-accent">{item.index}</span>
                    <span className="relative">
                      {item.label}
                      <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="font-mono text-[.82rem] sm:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? 'Close' : 'Menu'}
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-40 flex flex-col items-start justify-center gap-8 bg-bg px-8 sm:hidden"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-display text-2xl"
                onClick={() => setOpen(false)}
              >
                <span className="mr-3 align-middle font-mono text-base text-accent">{item.index}</span>
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
