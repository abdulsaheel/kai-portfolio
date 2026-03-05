import { useState } from 'react'

const projects = [
  {
    num: '01',
    name: 'VANGUARDS STUDIO',
    desc: 'Studio website for a creative digital studio.\nEight rounds of design review. Shipped clean.',
    stack: ['Next.js', 'Tailwind', 'Framer Motion'],
    link: 'https://vanguards.studio',
  },
  {
    num: '02',
    name: 'BHAGO MOBILITY',
    desc: 'Indian cultural redesign for a mobility platform.\nIdentity-forward. Performance-first.',
    stack: ['React', 'Tailwind', 'TypeScript'],
    link: '#',
  },
  {
    num: '03',
    name: 'MSQUARE MARKETING',
    desc: 'Gen Z brutalist rebuild for a marketing agency.\nNo nostalgia. All edge.',
    stack: ['Next.js', 'Tailwind', 'CSS'],
    link: '#',
  },
]

export default function Work() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="work" className="py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Section label */}
        <div
          className="mb-14"
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        >
          <span
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              color: '#F2F2F2',
              opacity: 0.35,
            }}
          >
            WORK
          </span>
        </div>

        {/* Project rows */}
        <div>
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target={p.link !== '#' ? '_blank' : undefined}
              rel="noreferrer"
              className="project-row block py-8 md:py-10"
              style={{ textDecoration: 'none' }}
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
                    paddingTop: '0.35rem',
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
                      fontSize: 'clamp(1.4rem, 4vw, 2.8rem)',
                      fontWeight: 500,
                      color: hovered === i ? '#C8FF00' : '#F2F2F2',
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
                      opacity: 0.45,
                      marginTop: '0.6rem',
                      lineHeight: 1.6,
                      fontWeight: 300,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {p.desc}
                  </div>
                </div>

                {/* Stack */}
                <div
                  className="flex flex-wrap md:flex-col gap-2 md:gap-1 md:items-end md:ml-8"
                  style={{ minWidth: '160px', paddingTop: '0.35rem' }}
                >
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '0.65rem',
                        letterSpacing: '0.1em',
                        color: '#F2F2F2',
                        opacity: 0.35,
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
