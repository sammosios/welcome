import { useRef, useEffect, useCallback, useState } from 'react'
import { NavLink } from 'react-router-dom'
import automateMeme from '../assets/automate-everything-meme.jpg'

const CHAR_SIZE = 14
const BG = '#1a1919'
const TRAIL = 16

function randChar() { return Math.random() < 0.5 ? '0' : '1' }

interface RainCol {
  x: number
  y: number
  speed: number
  chars: string[]
}

function makeColumns(w: number, _h: number): RainCol[] {
  const count = Math.floor(w / CHAR_SIZE)
  return Array.from({ length: count }, (_, i) => ({
    x: i * CHAR_SIZE,
    y: -CHAR_SIZE * (1 + Math.floor(Math.random() * 14)),
    speed: 2 + Math.random() * 3,
    chars: Array.from({ length: TRAIL + 20 }, randChar),
  }))
}

function AutomateCard({ step }: { step: { index: string; label: string; title: string; body: string; color: string } }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const maskRef     = useRef<HTMLCanvasElement>(null)
  const rainRef     = useRef<HTMLCanvasElement>(null)
  const rafRef      = useRef<number>(0)
  const fadeRef     = useRef<number>(0)
  const textTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const colsRef     = useRef<RainCol[]>([])
  const activeRef   = useRef(false)
  const [textVisible, setTextVisible] = useState(true)

  const resize = useCallback(() => {
    const el   = containerRef.current
    const mask = maskRef.current
    const rain = rainRef.current
    if (!el || !mask || !rain) return
    const w = el.offsetWidth, h = el.offsetHeight
    mask.width = w; mask.height = h
    rain.width = w; rain.height = h
    const ctx = mask.getContext('2d')
    if (!ctx) return
    ctx.fillStyle = BG
    ctx.fillRect(0, 0, w, h)
  }, [])

  useEffect(() => {
    resize()
    const ro = new ResizeObserver(resize)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [resize])

  useEffect(() => () => {
    cancelAnimationFrame(rafRef.current)
    cancelAnimationFrame(fadeRef.current)
  }, [])

  const tick = useCallback(() => {
    const mask = maskRef.current
    const rain = rainRef.current
    if (!mask || !rain || !activeRef.current) return

    const mCtx = mask.getContext('2d')
    const rCtx = rain.getContext('2d')
    if (!mCtx || !rCtx) return
    const w = mask.width, h = mask.height

    rCtx.clearRect(0, 0, w, h)
    rCtx.font = `${CHAR_SIZE}px 'JetBrains Mono', monospace`
    rCtx.textBaseline = 'top'

    for (const col of colsRef.current) {
      col.y += col.speed

      // Punch through mask at head — reveals image below
      if (col.y >= 0) {
        mCtx.clearRect(col.x, Math.max(0, col.y - col.speed - 1), CHAR_SIZE, col.speed + 2)
      }

      // Draw trail characters on rain canvas
      for (let i = 0; i < TRAIL; i++) {
        const cy = col.y - i * CHAR_SIZE
        if (cy < -CHAR_SIZE || cy > h) continue
        const char = col.chars[(Math.floor(col.y / CHAR_SIZE) - i + 999) % col.chars.length]

        if (i === 0) {
          rCtx.fillStyle = '#ffffff'; rCtx.globalAlpha = 1
        } else if (i < 3) {
          rCtx.fillStyle = '#8eff71'; rCtx.globalAlpha = 1 - i * 0.25
        } else if (i < 9) {
          rCtx.fillStyle = '#4db840'; rCtx.globalAlpha = 0.65 - (i - 3) * 0.08
        } else {
          rCtx.fillStyle = '#1f6615'; rCtx.globalAlpha = Math.max(0, 0.25 - (i - 9) * 0.07)
        }
        rCtx.fillText(char, col.x, cy)
      }
      rCtx.globalAlpha = 1

      // Wrap when off-screen bottom
      if (col.y > h + CHAR_SIZE * TRAIL) {
        col.y = -CHAR_SIZE * (1 + Math.floor(Math.random() * 8))
        col.speed = 2 + Math.random() * 3
      }
    }

    rafRef.current = requestAnimationFrame(tick)
  }, [])

  const handleMouseEnter = useCallback(() => {
    cancelAnimationFrame(fadeRef.current)
    if (textTimerRef.current) clearTimeout(textTimerRef.current)
    activeRef.current = true
    textTimerRef.current = setTimeout(() => setTextVisible(false), 1500)
    const mask = maskRef.current
    const rain = rainRef.current
    if (!mask || !rain) return
    colsRef.current = makeColumns(mask.width, mask.height)
    rafRef.current = requestAnimationFrame(tick)
  }, [tick])

  const handleMouseLeave = useCallback(() => {
    activeRef.current = false
    if (textTimerRef.current) clearTimeout(textTimerRef.current)
    setTextVisible(true)
    cancelAnimationFrame(rafRef.current)
    const mask = maskRef.current
    const rain = rainRef.current
    if (!mask || !rain) return

    const rainCtx = rain.getContext('2d')
    const mCtx = mask.getContext('2d')
    if (!rainCtx || !mCtx) return
    rainCtx.clearRect(0, 0, rain.width, rain.height)

    // Gradually fill mask back to dark
    const w = mask.width, h = mask.height
    let frame = 0
    const fade = () => {
      frame++
      mCtx.fillStyle = 'rgba(26,25,25,0.09)'
      mCtx.fillRect(0, 0, w, h)
      if (frame < 45) {
        fadeRef.current = requestAnimationFrame(fade)
      } else {
        mCtx.fillStyle = BG
        mCtx.fillRect(0, 0, w, h)
      }
    }
    fadeRef.current = requestAnimationFrame(fade)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative border-t border-white/5 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
    >
      {/* Morpheus image — revealed through mask */}
      <div className="absolute inset-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${automateMeme})` }} />

      {/* Mask canvas — starts dark, clearRect reveals image as rain falls */}
      <canvas ref={maskRef} className="absolute inset-0" />

      {/* Rain canvas — green characters, transparent background */}
      <canvas ref={rainRef} className="absolute inset-0" />

      {/* Card content */}
      <div className={`relative z-10 p-8 transition-opacity duration-700 ${textVisible ? 'opacity-100' : 'opacity-0'}`}>
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
          <div className="font-label text-[10px] text-gray-400 uppercase mb-4">The Approach</div>
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
          <div className="font-label text-[10px] text-gray-400 uppercase mb-4">Five Pillars</div>
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
            <div className="font-label text-[10px] text-gray-400 uppercase mb-4">Why Startups</div>
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
