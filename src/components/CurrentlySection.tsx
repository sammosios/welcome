const items = [
  {
    icon: 'school',
    title: 'MSc Software Engineering of Distributed Systems',
    meta: 'KTH Royal Institute of Technology · Final year',
  },
  {
    icon: 'diversity_3',
    title: 'KTH AI Society · Head of IT',
    meta: 'Building the platform engineering team that will enable the AI society to become an AI-driven society.',
  },
]

export default function CurrentlySection() {
  return (
    <section className="py-10 px-8 md:px-16 bg-surface-container-low border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-label text-[10px] text-gray-400 uppercase tracking-widest">
            Currently
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <span className="material-symbols-outlined text-2xl text-primary shrink-0">
                {item.icon}
              </span>
              <div>
                <div className="font-headline text-base font-bold mb-1">{item.title}</div>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
