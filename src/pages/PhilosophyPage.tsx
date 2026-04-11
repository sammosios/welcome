import { useRef, useEffect, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import automateMeme from '../assets/automate-everything-meme.jpg'

const CARD_BG = '#1a1919' // surface-container

function AutomateCard({ step }: { step: { index: string; label: string; title: string; body: string; color: string } }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const fillCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const card = cardRef.current
    if (!canvas || !card) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    canvas.width = card.offsetWidth
    canvas.height = card.offsetHeight
    ctx.globalCompositeOperation = 'source-over'
    ctx.fillStyle = CARD_BG
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }, [])

  useEffect(() => {
    fillCanvas()
    const observer = new ResizeObserver(fillCanvas)
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [fillCanvas])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current
    const card = cardRef.current
    if (!canvas || !card) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    ctx.globalCompositeOperation = 'destination-out'
    for (let i = 0; i < 5; i++) {
      const r = 38 + Math.random() * 28
      const dx = (Math.random() - 0.5) * 22
      const dy = (Math.random() - 0.5) * 22
      const grad = ctx.createRadialGradient(x + dx, y + dy, 0, x + dx, y + dy, r)
      grad.addColorStop(0, 'rgba(0,0,0,1)')
      grad.addColorStop(0.55, 'rgba(0,0,0,0.85)')
      grad.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.beginPath()
      ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2)
      ctx.fillStyle = grad
      ctx.fill()
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    fillCanvas()
  }, [fillCanvas])

  return (
    <div
      ref={cardRef}
      className="relative border-t border-white/5 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Revealed layer */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${automateMeme})` }} />

      {/* Canvas overlay with wobble filter */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ filter: 'url(#paint-wobble)' }}
      />

      {/* Card content */}
      <div className="relative z-10 p-8">
        <div className={`font-label text-[10px] uppercase ${step.color} mb-4`}>
          {step.index} // {step.label}
        </div>
        <h4 className="font-headline text-lg font-bold mb-4">{step.title}</h4>
        <p className="text-sm text-on-surface-variant leading-relaxed">{step.body}</p>
      </div>
    </div>
  )
}

const approach = [
  {
    index: '01',
    label: 'EXPLORE',
    title: 'Understand the system first.',
    body: 'Before touching anything, I learn how the team works, where the friction is, and what is already working well. Understanding the system clearly is the fastest path to improving it.',
    color: 'text-primary',
  },
  {
    index: '02',
    label: 'RESOLVE',
    title: 'Remove what slows you down.',
    body: 'Flaky pipelines, manual steps, unclear runbooks. I find the friction and eliminate it. Fast feedback loops change how teams work.',
    color: 'text-secondary',
  },
  {
    index: '03',
    label: 'AMPLIFY',
    title: 'Scale what is working.',
    body: 'Good patterns already exist in every codebase. I find them, codify them, and make them the default so the whole team benefits automatically.',
    color: 'text-primary',
  },
  {
    index: '04',
    label: 'AUTOMATE',
    title: 'If you did it twice, it should be a script.',
    body: "And if it is a script, it should be a pipeline. And if it is a pipeline, it can be run, extended and reused by everyone.",
    color: 'text-secondary',
  },
]

const pillars = [
  {
    index: '01',
    name: 'Security',
    icon: 'lock',
    iconColor: 'text-primary',
    hoverBorder: 'hover:border-primary/40',
    body: 'A set of intentional defaults, applied consistently. Least-privilege IAM, secrets that rotate automatically, network boundaries that contain any incident. Built in from the start, security compounds quietly in your favor.',
    signals: [
      'Least-privilege IAM',
      'Zero-trust credential handling',
      'Secure cloud architecture',
    ],
  },
  {
    index: '02',
    name: 'Reliability',
    icon: 'verified_user',
    iconColor: 'text-secondary',
    hoverBorder: 'hover:border-secondary/40',
    body: 'Systems that degrade gracefully and recover quickly. I define SLOs early, design for failure containment, and build runbooks clear enough for anyone on the team to run under pressure.',
    signals: [
      'Uptime targets and failure budgets',
      'Graceful degradation patterns',
      'Automated recovery runbooks',
    ],
  },
  {
    index: '03',
    name: 'Observability',
    icon: 'visibility',
    iconColor: 'text-primary',
    hoverBorder: 'hover:border-primary/40',
    body: 'Metrics, logs, and traces that tell a coherent story. When something goes wrong, the answer is already in the dashboard. When something goes right, you can prove it to a stakeholder.',
    signals: [
      'Metrics, logs, and distributed traces',
      'Actionable alerting',
      'Visibility into what matters',
    ],
  },
  {
    index: '04',
    name: 'Scalability',
    icon: 'trending_up',
    iconColor: 'text-secondary',
    hoverBorder: 'hover:border-secondary/40',
    body: 'Systems designed to grow with load. Stateless services, horizontal scaling, and event-driven patterns baked in from the start so traffic growth becomes something to celebrate.',
    signals: ['Autoscaling policies', 'Stateless service design', 'Load testing at scale'],
  },
  {
    index: '05',
    name: 'Developer Experience',
    icon: 'code',
    iconColor: 'text-primary',
    hoverBorder: 'hover:border-primary/40',
    body: 'Shortening the distance between an idea and production. Fast CI, reproducible environments, and self-service deployments compound over time. The goal is a team that ships confidently, every day.',
    signals: [
      'Guardrails that protect velocity',
      'Consistent, shared tooling',
      'Deployment confidence',
    ],
  },
]

const startupFit = [
  {
    point: 'A clean slate to build on.',
    color: 'text-primary',
    detail:
      'Early-stage teams can adopt the right patterns from the start. Getting the foundations right compounds forward, and your infrastructure stays an asset as you scale.',
  },
  {
    point: 'Trade-offs are visible to everyone.',
    color: 'text-secondary',
    detail:
      'In a small team, engineering decisions affect the whole company. I make those decisions explicit: what we are optimising for, what we are deferring, and why.',
  },
  {
    point: 'DX has an outsized impact.',
    color: 'text-primary',
    detail:
      'A five-person team that deploys ten times a day moves faster than a fifty-person team that deploys once a week. Infrastructure can be a multiplier.',
  },
]

export default function PhilosophyPage() {
  return (
    <>
      {/* SVG filter for paint wobble effect */}
      <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
        <defs>
          <filter id="paint-wobble" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise">
              <animate attributeName="seed" values="0;20;0" dur="5s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="14" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Page header */}
      <section className="pt-32 pb-16 px-8 md:px-16 border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
            <span className="font-label text-xs text-secondary uppercase tracking-widest">
              Philosophy // Approach and Five Pillars
            </span>
          </div>
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-[-0.04em] mb-6">
            Philosophy
          </h1>
          <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed">
            How I approach a system, and what I focus on once I am inside it.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="font-label text-[10px] text-gray-500 uppercase mb-4">The Approach</div>
          <h2 className="font-headline text-3xl font-bold mb-12 uppercase tracking-tighter">
            Understand first. Then act.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            {approach.slice(0, 3).map((step) => (
              <div
                key={step.index}
                className="bg-surface-container border-t border-white/5 p-8 hover:bg-surface-container-high transition-all"
              >
                <div className={`font-label text-[10px] uppercase ${step.color} mb-4`}>
                  {step.index} // {step.label}
                </div>
                <h4 className="font-headline text-lg font-bold mb-4">{step.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{step.body}</p>
              </div>
            ))}
            <AutomateCard step={approach[3]} />
          </div>
        </div>
      </section>

      {/* Five pillars */}
      <section className="py-24 px-8 md:px-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="font-label text-[10px] text-gray-500 uppercase mb-4">Five Pillars</div>
          <h2 className="font-headline text-3xl font-bold mb-4 uppercase tracking-tighter">
            What I focus on
          </h2>
          <p className="text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
            Five areas I keep in balance. Each one competes for time and attention, which is why the
            trade-offs matter as much as the work itself.
          </p>

          <div className="space-y-1">
            {pillars.map((p) => (
              <div
                key={p.index}
                className={`group flex flex-col md:flex-row gap-8 p-10 bg-surface-container border-l-2 border-outline-variant/20 ${p.hoverBorder} hover:bg-surface-container-high transition-all`}
              >
                <div className="shrink-0 w-8 font-label text-2xl font-bold text-on-surface-variant/20 group-hover:text-on-surface-variant/60 transition-colors pt-1">
                  {p.index}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`material-symbols-outlined text-xl ${p.iconColor}`}>{p.icon}</span>
                    <h3 className="font-headline text-2xl font-bold">{p.name}</h3>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed mb-6">{p.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.signals.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 bg-surface-container-high border border-white/5 font-label text-[11px] uppercase text-gray-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade-offs note */}
      <section className="py-16 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="border-l-4 border-primary/40 pl-10 py-2">
            <h3 className="font-headline text-2xl font-bold mb-4">Trade-offs are the job.</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-3xl">
              Prioritising one pillar always has a cost somewhere else. Leaning into observability
              now might mean DX waits. Hardening security might slow a release. My job is making
              the right call for where your team is right now, and communicating those decisions
              clearly to everyone who needs to know.
            </p>
          </div>
        </div>
      </section>

      {/* Why startups */}
      <section className="py-24 px-8 md:px-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="font-label text-[10px] text-gray-500 uppercase mb-4">Why Startups</div>
            <h2 className="font-headline text-4xl font-bold mb-4 uppercase tracking-tighter">
              The five pillars hit harder
              <br />
              at the early stage.
            </h2>
            <div className="h-1 w-24 bg-secondary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {startupFit.map((item) => (
              <div
                key={item.point}
                className="bg-surface-container border-t border-white/5 p-8 hover:bg-surface-container-high transition-all"
              >
                <h4 className={`font-headline text-lg font-bold mb-4 ${item.color}`}>{item.point}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 md:px-16 text-center bg-gradient-to-b from-transparent to-primary/5">
        <h2 className="font-headline text-4xl font-bold mb-6 uppercase tracking-tighter">
          Want to talk through
          <br />
          your trade-offs?
        </h2>
        <p className="text-on-surface-variant mb-10">
          Every system has a different balance. Let's look at yours.
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
