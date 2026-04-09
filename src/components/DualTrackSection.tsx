const tracks = [
  {
    id: 'PILLAR_SET_01',
    color: 'text-primary',
    dotColor: 'bg-primary',
    title: 'Prevention',
    subtitle: 'Reliability & Security',
    description:
      'The pillars you only notice when they fail. Reliability means systems degrade gracefully and recover fast. Security means the blast radius of any failure, human or technical, stays small.',
    items: [
      'SLO design and error budget policy',
      'Secrets management and least-privilege IAM',
      'Secure cloud architecture patterns',
      'Incident response and runbook automation',
    ],
  },
  {
    id: 'PILLAR_SET_02',
    color: 'text-secondary',
    dotColor: 'bg-secondary',
    title: 'Amplification',
    subtitle: 'Scalability, Observability & DX',
    description:
      'The pillars with measurable impact on how fast your team moves. Observability tells you what is actually happening. Scalability means growth does not require rewrites. Good DX means engineers ship confidently.',
    items: [
      'Distributed systems design and autoscaling',
      'Metrics, logs, and tracing with Grafana Cloud',
      'CI/CD pipelines that give fast, honest feedback',
      'Developer tooling and local-prod parity',
    ],
  },
]

export default function DualTrackSection() {
  return (
    <section className="py-24 px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-1 bg-outline-variant/10 rounded-xl overflow-hidden">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="bg-surface p-12 hover:bg-surface-container transition-all cursor-default"
          >
            <div className={`${track.color} font-label mb-2 text-sm`}>{track.id}</div>
            <h3 className="font-headline text-3xl font-bold mb-1">{track.title}</h3>
            <div className={`font-label text-xs uppercase ${track.color} opacity-60 mb-6`}>
              {track.subtitle}
            </div>
            <p className="text-on-surface-variant mb-8 leading-relaxed">{track.description}</p>
            <ul className="space-y-4 font-label text-xs uppercase text-gray-500">
              {track.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className={`w-1.5 h-1.5 ${track.dotColor} rounded-full shrink-0`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
