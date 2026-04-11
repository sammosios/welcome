const problems = [
  {
    problem: 'Nobody knows how the infrastructure is actually configured.',
    response:
      'Infrastructure as Code from day one. Every environment is reproducible, every change is traceable.',
    icon: 'dns',
  },
  {
    problem: 'Deploys are manual and everyone is scared to touch production.',
    response:
      'Automated pipelines with clear promotion gates. Shipping velocity is a key advantage of your startup. Protect it.',
    icon: 'rocket_launch',
  },
  {
    problem: 'The cloud bill spiked and nobody knows why.',
    response:
      'Full visibility into where every dollar goes. Burn rate becomes a deliberate, informed decision.',
    icon: 'receipt_long',
  },
]

export default function StartupProblems() {
  return (
    <section className="py-24 px-8 md:px-16 bg-[#0A0A0A] border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto">
        {/* Success Tax intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="font-headline text-5xl md:text-6xl font-bold tracking-[-0.03em]">
              The{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Success Tax.
              </span>
            </h2>
          </div>
          <div className="space-y-4 text-on-surface-variant text-lg leading-relaxed">
            <p>
              The Success Tax is what you pay when your infrastructure can't keep up with your
              growth. More users means more incidents. More features means slower deploys. More
              engineers means more confusion about how anything works. Each of those costs you
              runway.
            </p>
            <p>
              It compounds quietly, and by the time you feel it, it's expensive to fix. My job is to
              make sure it never catches you off guard.
            </p>
          </div>
        </div>

        {/* Problems */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {problems.map((p) => (
            <div
              key={p.problem}
              className="relative bg-surface-container border-t border-white/5 overflow-hidden group cursor-default h-72"
            >
              {/* Problem statement — centered, shifts up on hover */}
              <div className="absolute inset-x-8 inset-y-0 flex items-center transition-transform duration-500 ease-out group-hover:-translate-y-14">
                <p className="font-headline text-2xl font-bold leading-snug text-on-surface transition-colors duration-500 ease-out group-hover:text-on-surface-variant">
                  {p.problem}
                </p>
              </div>

              {/* Response text — slides up from below on hover */}
              <div className="absolute inset-x-8 bottom-8 opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-base text-primary/80 leading-relaxed">{p.response}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
