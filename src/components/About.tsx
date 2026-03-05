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
          <div className="md:col-span-7">
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                color: '#F2F2F2',
                opacity: 0.7,
                lineHeight: 1.85,
              }}
            >
              <p>
                Frontend developer. Currently at{' '}
                <a
                  href="https://vanguards.studio"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#C8FF00', textDecoration: 'none' }}
                >
                  Vanguards Studio
                </a>
                ,{' '}
                building client work under creative direction from Voss.
              </p>
              <p className="mt-6">
                Component architecture. Mobile-first builds.
                Performance, accessibility, pixel-accurate design-to-code.
                Preview deploys on every PR.
              </p>
              <p className="mt-6">
                He doesn't fight the tools. He doesn't miss deadlines.
                He writes code that holds.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
