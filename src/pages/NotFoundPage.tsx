import { NavLink } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-8 text-center overflow-hidden">
      {/* Ghost 404 — decorative, does not affect layout */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-headline font-bold leading-none tracking-tight text-[30vw] md:text-[22rem] text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary opacity-10">
          404
        </span>
      </div>

      {/* Fiber optic line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="fiber-optic-line absolute top-2/3 left-0 w-full motion-safe:animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center gap-6">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
          Nothing here.
        </h1>
        <p className="text-on-surface-variant text-lg">
          This page doesn't exist.
        </p>
        <NavLink
          to="/"
          className="bg-primary text-on-primary px-8 py-4 font-label font-bold text-sm tracking-widest rounded glow-primary hover:brightness-110 active:scale-95 transition-all"
        >
          TAKE ME HOME
        </NavLink>
      </div>
    </section>
  )
}
