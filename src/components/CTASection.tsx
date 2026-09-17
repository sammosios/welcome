import { NavLink } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="py-32 px-8 md:px-16 text-center bg-gradient-to-b from-transparent to-primary/5">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-headline text-5xl font-bold mb-8 uppercase tracking-tighter">
          Let's look at
          <br />
          your system.
        </h2>
        <p className="text-on-surface-variant text-lg mb-12">
          I'm officially looking for my next thesis project in Site Reliability and Platform Engineering.
          If there's a fit, let's talk.
        </p>
        <NavLink
          to="/contact"
          className="bg-primary text-on-primary px-12 py-5 font-label font-black text-sm tracking-[0.2em] rounded hover:scale-105 active:scale-95 transition-all inline-block"
        >
          GET IN TOUCH
        </NavLink>
      </div>
    </section>
  )
}
