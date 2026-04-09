const problems = [
  {
    problem: 'Nobody knows how the infrastructure is actually configured.',
    response:
      'Infrastructure as Code from day one. If it is not in version control, it does not exist. Environment drift, unreproducible bugs, and slow debugging all trace back to this.',
    icon: 'dns',
  },
  {
    problem: 'Deploys are manual and everyone is scared to touch production.',
    response:
      'Automated pipelines with clear promotion gates. Deploying becomes routine, not an event. Shipping velocity is one of the few advantages a startup has — protect it.',
    icon: 'rocket_launch',
  },
  {
    problem: 'The cloud bill spiked and nobody knows why.',
    response:
      'Observability covers cost too. Resources get tagged, dashboards get built, and burn rate becomes an intentional decision.',
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
              className="bg-surface-container border-t border-white/5 p-8 hover:bg-surface-container-high transition-all group"
            >
              <span className="material-symbols-outlined text-xl text-primary mb-6 block">
                {p.icon}
              </span>
              <p className="font-headline text-base font-bold mb-4 text-on-surface-variant group-hover:text-on-surface transition-colors">
                {p.problem}
              </p>
              <p className="text-sm text-primary/80 leading-relaxed">{p.response}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
