const stack = [
  'REACT', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND',
  'FRAMER MOTION', 'VITE', 'VERCEL', 'GIT',
]

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center"
      style={{ paddingTop: '80px' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">

        {/* Available label */}
        <div
          className="flex items-center gap-2 mb-10"
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        >
          <span
            className="blink"
            style={{ color: '#C8FF00', fontSize: '1rem', lineHeight: 1 }}
          >
            ●
          </span>
          <span
            style={{
              color: '#C8FF00',
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              fontWeight: 500,
            }}
          >
            AVAILABLE FOR PROJECT WORK
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: 500,
            letterSpacing: '-0.01em',
            lineHeight: 1.05,
            fontSize: 'clamp(2.2rem, 6.5vw, 6rem)',
            color: '#F2F2F2',
          }}
        >
          FRONTEND. FAST. CLEAN. DONE.
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #2A2A2A', marginTop: '3rem', marginBottom: '2rem' }} />

        {/* Subtext */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: '#F2F2F2',
            opacity: 0.65,
            lineHeight: 1.75,
            maxWidth: '560px',
          }}
        >
          Kai is a frontend developer at Vanguards Studio.
          He takes a design brief and ships it.
          No over-engineering. No missed deadlines.
          <br />
          Performs at 375px. Scales up from there.
        </p>

        {/* Stack ticker */}
        <div
          className="mt-12 flex flex-wrap gap-x-5 gap-y-2 items-center"
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        >
          {stack.map((s, i) => (
            <span key={s} className="flex items-center gap-5">
              <span
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  color: '#F2F2F2',
                  opacity: 0.3,
                }}
              >
                {s}
              </span>
              {i < stack.length - 1 && (
                <span style={{ color: '#2A2A2A', fontSize: '0.65rem' }}>·</span>
              )}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
