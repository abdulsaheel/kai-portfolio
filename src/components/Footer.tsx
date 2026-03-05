export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #2A2A2A',
        padding: '2rem 0',
      }}
    >
      <div
        className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-2"
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.65rem',
          letterSpacing: '0.1em',
          color: '#F2F2F2',
          opacity: 0.25,
        }}
      >
        <span>KAI © 2026</span>
        <span>BUILT BY KAI</span>
        <span>DIRECTED BY VOSS / VANGUARDS STUDIO</span>
      </div>
    </footer>
  )
}
