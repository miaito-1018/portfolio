/** Resolves a public/ asset path against Vite's base URL (e.g. '/portfolio/'). */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
