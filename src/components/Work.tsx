import { useState } from 'react'

const projects = [
  {
    num: '01',
    name: 'VANGUARDS STUDIO WEBSITE',
    desc: 'Dark, structured, production-ready.\nEight rounds of review. Shipped in one session.',
    stack: ['Next.js', 'Tailwind', 'Framer Motion'],
    status: null,
    link: 'https://vanguards.studio',
  },
  {
    num: '02',
    name: 'BHAGO MOBILITY',
    desc: 'Indian culturally-rooted mobility brand redesign.',
    stack: [],
    status: 'In progress',
    link: '#',
  },
  {
    num: '03',
    name: 'MSQUARE MARKETING AGENCY',
    desc: 'Gen Z brutalist direction. High energy, controlled chaos.',
    stack: [],
    status: 'In progress',
    link: '#',
  },
]

export default function Work() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="work" className="py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Section label */}
        <div className="mb-14" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#F2F2F2', opacity: 0.35 }}>
            WORK
          </span>
        </div>

        <div>
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target={p.link !== '#' ? '_blank' : undefined}
              rel="noreferrer"
              className="project-row block py-8 md:py-10"
              style={{ textDecoration: 'none', cursor: p.link === '#' ? 'default' : 'pointer' }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-0">

                {/* Number */}
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.72rem',
                    color: '#F2F2F2',
                    opacity: 0.3,
                    minWidth: '80px',
                    paddingTop: '0.4rem',
                    letterSpacing: '0.08em',
                  }}
                >
                  {p.num}
                </div>

                {/* Name + desc */}
                <div className="flex-1">
                  <div
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 'clamp(1.3rem, 3.5vw, 2.6rem)',
                      fontWeight: 500,
                      color: hovered === i && p.link !== '#' ? '#C8FF00' : '#F2F2F2',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.1,
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9rem',
                      color: '#F2F2F2',
                      opacity: 0.4,
                      marginTop: '0.6rem',
                      lineHeight: 1.65,
                      fontWeight: 300,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {p.desc}
                  </div>
                </div>

                {/* Stack / status */}
                <div
                  className="flex flex-wrap md:flex-col gap-2 md:gap-1 md:items-end md:ml-8"
                  style={{ minWidth: '160px', paddingTop: '0.4rem' }}
                >
                  {p.status && (
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '0.65rem',
                        letterSpacing: '0.1em',
                        color: '#C8FF00',
                        opacity: 0.6,
                        border: '1px solid #2A2A2A',
                        padding: '2px 8px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {p.status}
                    </span>
                  )}
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '0.65rem',
                        letterSpacing: '0.1em',
                        color: '#F2F2F2',
                        opacity: 0.3,
                        border: '1px solid #2A2A2A',
                        padding: '2px 8px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
