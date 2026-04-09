const process = [
  {
    step: '01',
    title: 'Understand',
    body: 'Before anything else, I want to know how your system actually works: architecture, team size, pain points, and what is already going well. This is not a sales call.',
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
    body: 'A scoped proposal with clear deliverables, explicit trade-offs, and expected outcomes. No vague retainers. You know exactly what you are getting and what is being deprioritised.',
    icon: 'description',
    color: 'text-primary',
  },
  {
    step: '04',
    title: 'Build',
    body: 'Work begins. You get working infrastructure, clear documentation, and a handoff. Not a dependency on me being available next time something breaks.',
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
    a: 'It means I do not show up with a pre-written solution. The first thing I do is read the codebase, talk to the team, and understand where the real pain is. Not the pain that looks most dramatic from the outside.',
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
    a: 'Yes, standard practice before any diagnostic conversation.',
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

      {/* Contact form */}
      <section className="py-24 px-8 md:px-16 bg-surface-container-low">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="font-headline text-3xl font-bold uppercase tracking-tighter mb-4">
              Get in touch
            </h2>
            <div className="h-1 w-24 bg-primary" />
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-label text-[10px] text-gray-500 uppercase mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full bg-surface-container border border-outline-variant/30 text-on-surface px-4 py-3 font-label text-sm rounded focus:outline-none focus:border-primary/60 transition-colors"
                />
              </div>
              <div>
                <label className="font-label text-[10px] text-gray-500 uppercase mb-2 block">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Acme Corp"
                  className="w-full bg-surface-container border border-outline-variant/30 text-on-surface px-4 py-3 font-label text-sm rounded focus:outline-none focus:border-primary/60 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="font-label text-[10px] text-gray-500 uppercase mb-2 block">
                Work Email
              </label>
              <input
                type="email"
                placeholder="jane@acme.com"
                className="w-full bg-surface-container border border-outline-variant/30 text-on-surface px-4 py-3 font-label text-sm rounded focus:outline-none focus:border-primary/60 transition-colors"
              />
            </div>

            <div>
              <label className="font-label text-[10px] text-gray-500 uppercase mb-2 block">
                Current stack / cloud
              </label>
              <input
                type="text"
                placeholder="e.g. AWS, Kubernetes, Terraform, team of 4 engineers"
                className="w-full bg-surface-container border border-outline-variant/30 text-on-surface px-4 py-3 font-label text-sm rounded focus:outline-none focus:border-primary/60 transition-colors"
              />
            </div>

            <div>
              <label className="font-label text-[10px] text-gray-500 uppercase mb-2 block">
                What is the actual problem?
              </label>
              <textarea
                rows={5}
                placeholder="Describe what is slowing your team down, or what you are worried will break as you grow..."
                className="w-full bg-surface-container border border-outline-variant/30 text-on-surface px-4 py-3 font-label text-sm rounded focus:outline-none focus:border-primary/60 transition-colors resize-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#8eff71]" />
              <span className="font-label text-[10px] text-gray-500 uppercase">
                Response within 48h // NDA available on request
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-on-primary py-4 font-label font-black text-sm tracking-[0.2em] rounded glow-primary hover:brightness-110 active:scale-[0.99] transition-all"
            >
              SEND
            </button>
          </form>
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
