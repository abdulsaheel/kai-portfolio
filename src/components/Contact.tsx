const links = [
  { label: 'hello@vanguards.studio', href: 'mailto:hello@vanguards.studio' },
  { label: 'GitHub', href: 'https://github.com/abdulsaheel' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/abdulsaheel' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36" style={{ borderTop: '1px solid #2A2A2A' }}>
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
              CONTACT
            </span>
          </div>

          {/* Content */}
          <div className="md:col-span-7">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                color: '#F2F2F2',
                opacity: 0.75,
                lineHeight: 1.8,
              }}
            >
              If the work is interesting, get in touch.
              <br />
              If it isn't, don't.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              {links.map((l, i) => (
                <a
                  key={i}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.8rem',
                    letterSpacing: '0.05em',
                    color: '#F2F2F2',
                    textDecoration: 'none',
                    opacity: 0.55,
                    transition: 'opacity 0.15s ease, color 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1'
                    e.currentTarget.style.color = '#C8FF00'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.55'
                    e.currentTarget.style.color = '#F2F2F2'
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
