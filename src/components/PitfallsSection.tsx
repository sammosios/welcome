const pitfalls = [
  {
    type: 'ERROR_TYPE_01',
    title: 'Success Tax',
    description:
      'Scaling infrastructure costs at a higher rate than user growth due to inefficient resource allocation.',
    hoverBorder: 'hover:border-primary/50',
  },
  {
    type: 'ERROR_TYPE_02',
    title: 'Refactor Trap',
    description:
      'Designing "clever" solutions that require a specialist and a rewrite within 12 months.',
    hoverBorder: 'hover:border-secondary/50',
  },
  {
    type: 'ERROR_TYPE_03',
    title: 'Manual Ceiling',
    description:
      'Operational debt where every new service adds linear hours of manual maintenance work.',
    hoverBorder: 'hover:border-error/50',
  },
  {
    type: 'ERROR_TYPE_04',
    title: 'Observability Gaps',
    description:
      'Knowing the system is down only after the customer emails support. Reactive vs Proactive.',
    hoverBorder: 'hover:border-primary/50',
  },
]

export default function PitfallsSection() {
  return (
    <section className="py-24 px-8 md:px-16 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-headline text-4xl font-bold mb-4 uppercase tracking-tighter">
            Common Pitfalls I Prevent
          </h2>
          <div className="h-1 w-24 bg-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {pitfalls.map((pitfall) => (
            <div
              key={pitfall.type}
              className={`bg-surface-container border-t border-white/5 p-8 group ${pitfall.hoverBorder} transition-all`}
            >
              <div className="font-label text-[10px] text-gray-400 mb-8 uppercase">
                {pitfall.type}
              </div>
              <h4 className="font-headline text-xl font-bold mb-4">{pitfall.title}</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {pitfall.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
