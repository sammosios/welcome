import { NavLink } from 'react-router-dom'

const pillars = [
  {
    name: 'Security',
    icon: 'lock',
    color: 'text-primary',
    summary: 'Least privilege by default. Mistakes stay small.',
  },
  {
    name: 'Reliability',
    icon: 'verified_user',
    color: 'text-secondary',
    summary: 'Graceful degradation. Fast recovery. SLOs that mean something.',
  },
  {
    name: 'Observability',
    icon: 'visibility',
    color: 'text-primary',
    summary: 'Dashboards that answer questions, not generate new ones.',
  },
  {
    name: 'Scalability',
    icon: 'trending_up',
    color: 'text-secondary',
    summary: 'Systems that grow with load, not against it.',
  },
  {
    name: 'Developer Experience',
    icon: 'code',
    color: 'text-primary',
    summary:
      'Shortening the distance between an idea and production. Good DX makes shipping boring.',
  },
]

export default function PillarsOverview() {
  return (
    <section className="py-24 px-8 md:px-16 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-label text-[10px] text-gray-500 uppercase mb-4">Five Pillars</div>
            <h2 className="font-headline text-4xl font-bold uppercase tracking-tighter">
              What I focus on
            </h2>
          </div>
          <NavLink
            to="/philosophy"
            className="font-label text-xs text-primary uppercase tracking-widest hover:opacity-70 transition-opacity shrink-0"
          >
            Full breakdown on Philosophy →
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-1">
          {pillars.map((p) => (
            <div
              key={p.name}
              className="bg-surface-container border-t border-white/5 p-8 hover:bg-surface-container-high transition-all"
            >
              <span className={`material-symbols-outlined text-xl ${p.color} mb-4 block`}>
                {p.icon}
              </span>
              <div className="font-headline text-lg font-bold mb-3">{p.name}</div>
              <p className="text-xs text-on-surface-variant leading-relaxed">{p.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
