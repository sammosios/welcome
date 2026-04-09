import { NavLink } from 'react-router-dom'

const toolGroups = [
  {
    pillar: 'Infrastructure & Scalability',
    icon: 'dns',
    color: 'text-primary',
    border: 'border-primary/20',
    note: 'I have hands-on experience with Terraform and AWS. The underlying concepts (declarative infra, idempotent provisioning, cloud networking) transfer across providers and tools.',
    tools: [
      { name: 'Terraform', note: 'Primary IaC tool' },
      { name: 'AWS', note: 'Primary cloud provider' },
      { name: 'Kubernetes', note: 'Container orchestration' },
      { name: 'AWS Fargate', note: 'Serverless containers' },
      { name: 'IaC concepts', note: 'Provider-agnostic' },
    ],
  },
  {
    pillar: 'Observability',
    icon: 'monitoring',
    color: 'text-secondary',
    border: 'border-secondary/20',
    note: 'Hands-on with Grafana Cloud. The principles behind good observability (meaningful metrics, structured logs, distributed traces) apply regardless of the vendor.',
    tools: [
      { name: 'Grafana Cloud', note: 'Primary observability stack' },
      { name: 'Prometheus', note: 'Metrics collection' },
      { name: 'Loki', note: 'Log aggregation' },
      { name: 'OpenTelemetry', note: 'Vendor-neutral instrumentation' },
    ],
  },
  {
    pillar: 'CI/CD & Developer Experience',
    icon: 'rocket_launch',
    color: 'text-primary',
    border: 'border-primary/20',
    note: 'GitHub Actions is my primary CI tool. The concepts (pipeline design, artifact management, environment promotion) are transferable to any platform.',
    tools: [
      { name: 'GitHub Actions', note: 'Primary CI/CD platform' },
      { name: 'Shell scripting', note: 'Automation and tooling' },
      { name: 'Docker', note: 'Containerisation' },
      { name: 'CI/CD concepts', note: 'Platform-agnostic' },
    ],
  },
  {
    pillar: 'Security & Reliability',
    icon: 'shield',
    color: 'text-secondary',
    border: 'border-secondary/20',
    note: 'Security defaults I apply regardless of the stack: least-privilege IAM, secrets management, network segmentation. The patterns matter more than the specific tooling.',
    tools: [
      { name: 'AWS IAM', note: 'Least-privilege access' },
      { name: 'Secrets management', note: 'Rotation and scoping' },
      { name: 'Secure cloud architecture', note: 'Network segmentation' },
      { name: 'SLO design', note: 'Reliability contracts' },
    ],
  },
]

export default function StackPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 px-8 md:px-16 border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
            <span className="font-label text-xs text-secondary uppercase tracking-widest">
              Stack // Concepts First
            </span>
          </div>
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-[-0.04em] mb-6">
            Stack
          </h1>
          <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed">
            I have worked deeply with one or two tools per category. I think that is the right way
            to learn: understand why a tool exists before reaching for another. The concepts behind
            each category transfer; the specifics are just syntax.
          </p>
        </div>
      </section>

      {/* Distributed systems callout */}
      <section className="py-10 px-8 md:px-16 bg-surface-container-low border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-start md:items-center">
          <span className="material-symbols-outlined text-3xl text-primary shrink-0">school</span>
          <div>
            <div className="font-label text-[10px] text-gray-500 uppercase mb-1">
              Academic Background
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              I am currently completing a Master's in Distributed Systems. This is not incidental.
              It is why I care about understanding how the tools I use actually work, not just how
              to configure them. Consensus protocols, fault tolerance, consistency models: these
              come up in production, and I want to know why, not just what to do when they do.
            </p>
          </div>
        </div>
      </section>

      {/* Tool groups */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto space-y-20">
          {toolGroups.map((group) => (
            <div key={group.pillar}>
              {/* Group heading */}
              <div className="flex items-center gap-4 mb-4">
                <span className={`material-symbols-outlined text-2xl ${group.color}`}>
                  {group.icon}
                </span>
                <h2 className="font-headline text-2xl font-bold">{group.pillar}</h2>
                <div className="flex-1 h-px bg-outline-variant/20 ml-4" />
              </div>

              <p className="text-on-surface-variant text-sm mb-8 max-w-2xl">{group.note}</p>

              {/* Tool cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {group.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className={`bg-surface-container border-t-2 ${group.border} p-5 hover:bg-surface-container-high transition-all`}
                  >
                    <div className="font-label text-sm font-bold text-on-surface mb-1 uppercase">
                      {tool.name}
                    </div>
                    <div className="text-[11px] text-on-surface-variant">{tool.note}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy tie-in */}
      <section className="py-20 px-8 md:px-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto border-l-4 border-secondary/40 pl-10 py-2">
          <h3 className="font-headline text-2xl font-bold mb-4">The stack is never the goal.</h3>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-3xl">
            I do not chase new tools. I choose based on what the problem actually requires, what the
            team can maintain without me, and what has a clear upgrade path. New is not better.
            Understood is better.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 md:px-16 text-center bg-gradient-to-b from-transparent to-primary/5">
        <h2 className="font-headline text-4xl font-bold mb-6 uppercase tracking-tighter">
          Want to know what fits
          <br />
          your system?
        </h2>
        <p className="text-on-surface-variant mb-10">
          Stack decisions are context-dependent. Let's look at yours.
        </p>
        <NavLink
          to="/consult"
          className="bg-primary text-on-primary px-12 py-5 font-label font-black text-sm tracking-[0.2em] rounded hover:scale-105 active:scale-95 transition-all inline-block"
        >
          GET IN TOUCH
        </NavLink>
      </section>
    </>
  )
}
