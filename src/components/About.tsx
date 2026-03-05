const stack = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
  'Framer Motion', 'Vite', 'Git', 'Vercel',
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36" style={{ borderTop: '1px solid #2A2A2A' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-0">

          {/* Label */}
          <div className="md:col-span-2">
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                color: '#F2F2F2',
                opacity: 0.35,
              }}
            >
              ABOUT
            </span>
          </div>

          {/* Copy */}
          <div className="md:col-span-6">
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                color: '#F2F2F2',
                opacity: 0.75,
                lineHeight: 1.8,
              }}
            >
              <p>
                Kai is a frontend developer who operates at the intersection
                of precision and speed. He reads the brief, asks one question
                if needed, and ships.
              </p>
              <p className="mt-6">
                He works with React, Next.js, Tailwind, and whatever
                the project demands. He doesn't fight the tools.
              </p>
              <p className="mt-6">
                Currently at{' '}
                <a
                  href="https://vanguards.studio"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#C8FF00', textDecoration: 'none' }}
                >
                  Vanguards Studio
                </a>
                .
              </p>
            </div>

            {/* Stack grid */}
            <div className="mt-12 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.68rem',
                    letterSpacing: '0.08em',
                    color: '#F2F2F2',
                    opacity: 0.4,
                    border: '1px solid #2A2A2A',
                    padding: '4px 10px',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
