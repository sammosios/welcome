import { NavLink } from 'react-router-dom'
import {
  siTerraform,
  siKubernetes,
  siDocker,
  siFlux,
  siGithubactions,
  siGnubash,
  siGrafana,
  siOpentelemetry,
} from 'simple-icons'
interface Tool {
  name: string
  note: string
  simpleIcon?: { path: string }
  materialIcon?: string
}

function ToolIcon({ tool, colorClass }: { tool: Tool; colorClass: string }) {
  if (tool.simpleIcon) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className={`w-5 h-5 mb-3 ${colorClass}`}
        fill="currentColor"
      >
        <path d={tool.simpleIcon.path} />
      </svg>
    )
  }
  if (tool.materialIcon) {
    return (
      <span className={`material-symbols-outlined text-xl mb-3 block ${colorClass}`}>
        {tool.materialIcon}
      </span>
    )
  }
  return null
}

const toolGroups = [
  {
    pillar: 'Infrastructure as Code',
    icon: 'dns',
    color: 'text-primary',
    border: 'border-primary/20',
    note: 'Declarative infrastructure that can be reviewed, versioned, and reproduced. The concepts transfer across providers: idempotent provisioning, state management, cloud networking.',
    tools: [
      { name: 'Terraform', note: 'Primary IaC tool', simpleIcon: siTerraform },
      { name: 'AWS', note: 'Primary cloud provider', materialIcon: 'cloud' },
    ] as Tool[],
  },
  {
    pillar: 'Container Orchestration',
    icon: 'deployed_code',
    color: 'text-secondary',
    border: 'border-secondary/20',
    note: 'Running containers at scale means understanding scheduling, networking, and failure domains.',
    tools: [
      { name: 'Docker', note: 'Containerisation', simpleIcon: siDocker },
      { name: 'Kubernetes', note: 'Container orchestration', simpleIcon: siKubernetes },
      { name: 'Flux', note: 'GitOps', simpleIcon: siFlux },
      { name: 'AWS Fargate', note: 'Serverless containers', materialIcon: 'memory' },
    ] as Tool[],
  },
  {
    pillar: 'CI/CD',
    icon: 'rocket_launch',
    color: 'text-primary',
    border: 'border-primary/20',
    note: 'Pipelines are the enforcement layer for everything else: tests, security checks, release conventions. Good scripting is key.',
    tools: [
      { name: 'GitHub Actions', note: 'Primary CI/CD platform', simpleIcon: siGithubactions },
      { name: 'Scripting', note: 'Bash, Python, JavaScript', simpleIcon: siGnubash },
      { name: 'Release tracking', note: 'Semantic versioning, changelogs, tagging', materialIcon: 'new_releases' },
    ] as Tool[],
  },
  {
    pillar: 'Observability',
    icon: 'monitoring',
    color: 'text-secondary',
    border: 'border-secondary/20',
    note: 'Observability is only useful if it reduces time to understand. OTel handles instrumentation; distributed tracing connects the dots across service boundaries.',
    tools: [
      { name: 'Grafana', note: 'Dashboards and alerting', simpleIcon: siGrafana },
      { name: 'OpenTelemetry', note: 'Vendor-neutral instrumentation', simpleIcon: siOpentelemetry },
      { name: 'Distributed tracing', note: 'End-to-end request visibility', materialIcon: 'account_tree' },
    ] as Tool[],
  },
  {
    pillar: 'Security & Reliability',
    icon: 'shield',
    color: 'text-primary',
    border: 'border-primary/20',
    note: 'Defaults matter more than tooling. The goal is systems with a contained blast radius, fast recovery, and access scoped precisely to what each service needs.',
    tools: [
      { name: 'Network segmentation', note: 'Blast radius control', materialIcon: 'hub' },
      { name: 'IAM', note: 'Least-privilege access', materialIcon: 'manage_accounts' },
      { name: 'Secrets management', note: 'Scoping and rotation', materialIcon: 'key' },
      { name: 'SLA/SLO design', note: 'Reliability contracts', materialIcon: 'speed' },
    ] as Tool[],
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
            Tools are learnable. What takes time is the judgment to know when and how to use them,
            and how to read them when things get interesting. That judgment is what this page is
            really about.
          </p>
        </div>
      </section>

      {/* Distributed systems callout */}
      <section className="py-10 px-8 md:px-16 bg-surface-container-low border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-start md:items-center">
          <span className="material-symbols-outlined text-3xl text-primary shrink-0">school</span>
          <div>
            <div className="font-label text-[10px] text-gray-400 uppercase mb-1">
              Academic Background
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              MSc in Distributed Systems: specializing in building scalable systems while
              balancing fault-tolerance and performance. The program covers concepts like consensus
              protocols, replicated state machines, CRDTs, and distributed shared memory.
              Understanding these changes how you reason about consistency, resilience, and
              trade-offs when designing systems that hold up under real load.
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
                    <ToolIcon tool={tool} colorClass={group.color} />
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
            Most problems are solved by using existing tools well. I default to what the team
            already knows, and introduce something new only when there is a clear reason for it and
            a clear path to full ownership.
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
