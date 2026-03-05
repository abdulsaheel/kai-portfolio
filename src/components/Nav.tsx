export default function Nav() {
  return (
    <nav
      style={{
        borderBottom: '1px solid #2A2A2A',
        fontFamily: "'IBM Plex Mono', monospace",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        style={{ background: '#0A0A0A' }}
        className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between"
      >
        <span
          style={{ color: '#F2F2F2', letterSpacing: '0.12em', fontSize: '0.85rem' }}
          className="font-medium uppercase"
        >
          KAI
        </span>

        <div className="flex items-center gap-8">
          {['WORK', 'ABOUT', 'CONTACT'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: '#F2F2F2',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textDecoration: 'none',
                opacity: 0.6,
                transition: 'opacity 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
