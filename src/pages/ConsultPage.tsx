const process = [
  {
    step: '01',
    title: 'Understand',
    body: 'Before anything else, I want to know how your system actually works: architecture, team size, pain points, and what is already going well.',
    icon: 'search',
    color: 'text-primary',
  },
  {
    step: '02',
    title: 'Diagnose',
    body: 'A focused session to map where the five pillars stand today. What is creating friction, what is working, and where the highest-leverage interventions are.',
    icon: 'analytics',
    color: 'text-secondary',
  },
  {
    step: '03',
    title: 'Propose',
    body: 'A scoped proposal with clear deliverables, explicit trade-offs, and expected outcomes. You know exactly what you are getting and what is being prioritised.',
    icon: 'description',
    color: 'text-primary',
  },
  {
    step: '04',
    title: 'Build',
    body: 'Work begins. You get working infrastructure, clear documentation, and a clean handoff. I communicate clearly throughout, and the goal is simple: your team should be fully capable of owning this without me.',
    icon: 'rocket_launch',
    color: 'text-secondary',
  },
]

const faqs = [
  {
    q: 'What kind of teams do you work with?',
    a: 'Primarily early-stage startups and scale-ups, where the infrastructure decisions made now will either compound positively or become a liability. I have also worked with larger organisations and am open to it. The right fit matters more than the company size.',
  },
  {
    q: 'What does "understanding first" actually mean in practice?',
    a: 'It means the first thing I do is talk to the team, read the codebase, and map where the friction actually lives. Solutions follow understanding.',
  },
  {
    q: 'Do you work with a specific cloud provider?',
    a: 'My primary hands-on experience is with AWS. The underlying concepts transfer across providers, and I am transparent about where my direct experience ends and where I am working from first principles.',
  },
  {
    q: 'How are engagements structured?',
    a: 'Fixed-scope projects with defined deliverables are my preference. This keeps the trade-offs honest: you know what you are getting, and I know what I am responsible for.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes. If it matters enough to ask for one, it matters enough to sign.',
  },
]

export default function ConsultPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 px-8 md:px-16 border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span className="font-label text-xs text-primary uppercase tracking-widest">
              Consult // Limited Availability
            </span>
          </div>
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-[-0.04em] mb-6">
            Let's talk.
          </h1>
          <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed">
            I take on a small number of engagements at a time. The first step is always the same:
            understand your system before suggesting anything.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-headline text-3xl font-bold uppercase tracking-tighter mb-4">
              How it works
            </h2>
            <div className="h-1 w-24 bg-primary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            {process.map((step) => (
              <div
                key={step.step}
                className="bg-surface-container p-8 border-t border-white/5 hover:bg-surface-container-high transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className={`material-symbols-outlined ${step.color}`}>{step.icon}</span>
                  <span className={`font-label text-[10px] ${step.color} uppercase`}>
                    STEP_{step.step}
                  </span>
                </div>
                <h4 className="font-headline text-lg font-bold mb-4">{step.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-8 md:px-16 bg-surface-container-low">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="font-headline text-3xl font-bold uppercase tracking-tighter mb-4">
              Get in touch
            </h2>
            <div className="h-1 w-24 bg-primary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="mailto:contact@sammosios.com"
              className="group bg-surface-container border-t-2 border-primary/20 p-8 hover:bg-surface-container-high transition-all"
            >
              <span className="material-symbols-outlined text-2xl text-primary mb-4 block">
                mail
              </span>
              <div className="font-headline text-xl font-bold mb-2">Send an email</div>
              <div className="font-label text-xs text-primary mb-6">contact@sammosios.com</div>
              <div className="font-label text-[10px] text-gray-400 uppercase group-hover:text-primary transition-colors">
                Compose →
              </div>
            </a>

            <a
              href="https://calendly.com/sam-mosios/60-min"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-surface-container border-t-2 border-secondary/20 p-8 hover:bg-surface-container-high transition-all"
            >
              <span className="material-symbols-outlined text-2xl text-secondary mb-4 block">
                calendar_month
              </span>
              <div className="font-headline text-xl font-bold mb-2">Book a call</div>
              <div className="font-label text-xs text-secondary mb-6">60-minute intro session</div>
              <div className="font-label text-[10px] text-gray-400 uppercase group-hover:text-secondary transition-colors">
                Open Calendly →
              </div>
            </a>
          </div>

          <div className="flex items-center gap-2 mt-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#8eff71]" />
            <span className="font-label text-[10px] text-gray-400 uppercase">
              Response within 48h
            </span>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="font-headline text-3xl font-bold uppercase tracking-tighter mb-4">
              Common questions
            </h2>
            <div className="h-1 w-24 bg-primary" />
          </div>

          <div className="space-y-1">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-surface-container p-8 border-t border-white/5 hover:bg-surface-container-high transition-all"
              >
                <h4 className="font-headline text-lg font-bold mb-3">{faq.q}</h4>
                <p className="text-on-surface-variant leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
