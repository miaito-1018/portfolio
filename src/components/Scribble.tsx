interface ScribbleProps {
  className?: string
}

/** A loose, hand-drawn wavy underline. */
export function SquiggleUnderline({ className = '' }: ScribbleProps) {
  return (
    <svg viewBox="0 0 200 16" className={className} preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M2 10 Q 28 2, 52 9 T 100 8 T 150 10 T 198 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** A rough, hand-drawn circle for highlighting a word or number. */
export function CircleScribble({ className = '' }: ScribbleProps) {
  return (
    <svg viewBox="0 0 100 60" className={className} aria-hidden="true">
      <path
        d="M52 5 C 24 2, 5 16, 6 31 C 7 47, 25 57, 51 56 C 78 55, 96 43, 93 27 C 91 13, 71 3, 46 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** A hand-drawn arrow with a slightly wobbly shaft. */
export function HandArrow({ className = '' }: ScribbleProps) {
  return (
    <svg viewBox="0 0 60 24" className={className} aria-hidden="true">
      <path
        d="M2 13 C 18 8, 34 17, 48 11"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M40 4 L51 11 L39 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
