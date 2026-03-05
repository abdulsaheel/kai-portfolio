export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-end pb-20 md:pb-28"
      style={{ paddingTop: '120px' }}
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
            fontSize: 'clamp(2.8rem, 8vw, 7rem)',
            color: '#F2F2F2',
          }}
        >
          <div>FRONTEND DEVELOPER</div>
          <div style={{ color: '#F2F2F2', opacity: 0.35 }}>BASED IN INDIA</div>
        </div>

        {/* Divider */}
        <div
          style={{ borderTop: '1px solid #2A2A2A', marginTop: '3rem', marginBottom: '2rem' }}
        />

        {/* Subtext */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: '#F2F2F2',
            opacity: 0.7,
            lineHeight: 1.6,
            maxWidth: '520px',
          }}
        >
          Kai builds what needs to be built.
          <br />
          Fast, clean, and without excuses.
        </p>

      </div>
    </section>
  )
}
