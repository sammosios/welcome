import { NavLink } from 'react-router-dom'
import Terminal from './Terminal'

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 px-8 md:px-16 flex flex-col md:flex-row items-center gap-12">
      {/* Background fiber optic lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="fiber-optic-line absolute top-1/4 left-0 w-full animate-pulse" />
        <div className="fiber-optic-line absolute top-2/4 left-0 w-full opacity-5" />
        <div
          className="fiber-optic-line absolute top-3/4 left-0 w-full animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Left: copy */}
      <div className="w-full md:w-3/5 relative">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
          <span className="font-label text-xs text-secondary uppercase tracking-widest">
            SRE & Platform Engineering
          </span>
        </div>

        <h1 className="font-headline text-5xl md:text-8xl font-bold leading-tight tracking-[-0.04em] mb-8">
          Good infrastructure
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            gets out of the way.
          </span>
        </h1>

        <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
          I work across five pillars: scalability, reliability, security, observability, and
          developer experience. My job is making the right trade-offs between them so your team can
          focus on shipping, not firefighting.
        </p>

        <div className="flex flex-wrap gap-4">
          <NavLink
            to="/consult"
            className="bg-primary text-on-primary px-8 py-4 font-label font-bold text-sm tracking-widest rounded glow-primary hover:brightness-110 active:scale-95 transition-all"
          >
            GET IN TOUCH
          </NavLink>
          <NavLink
            to="/philosophy"
            className="bg-transparent border border-secondary/40 text-secondary px-8 py-4 font-label font-bold text-sm tracking-widest rounded hover:bg-secondary/10 transition-all"
          >
            VIEW PHILOSOPHY
          </NavLink>
        </div>
      </div>

      {/* Right: interactive terminal */}
      <div className="w-full md:w-2/5 aspect-square max-w-lg">
        <Terminal />
      </div>
    </section>
  )
}
