export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 px-8 md:px-16 border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span className="font-label text-xs text-primary uppercase tracking-widest">
              Open to thesis projects
            </span>
          </div>
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-[-0.04em] mb-6">
            Let's talk.
          </h1>
          <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed">
            I'm officially looking for my next thesis project in Site Reliability and Platform
            Engineering. If you're hiring, or just want to talk shop, get in touch below.
          </p>
        </div>
      </section>

      {/* Contact methods */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="mailto:contact@sammosios.com"
              className="group bg-surface-container border-t-2 border-primary/20 p-8 hover:bg-surface-container-high transition-all"
            >
              <span className="material-symbols-outlined text-2xl text-primary mb-4 block">
                mail
              </span>
              <div className="font-headline text-xl font-bold mb-2">Send an email</div>
              <div className="font-label text-xs text-primary mb-6">contact@sammosios.com</div>
              <div className="font-label text-[10px] text-gray-400 uppercase group-hover:text-primary transition-colors">
                Compose →
              </div>
            </a>

            <a
              href="https://calendly.com/sam-mosios/45-min"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-surface-container border-t-2 border-secondary/20 p-8 hover:bg-surface-container-high transition-all"
            >
              <span className="material-symbols-outlined text-2xl text-secondary mb-4 block">
                calendar_month
              </span>
              <div className="font-headline text-xl font-bold mb-2">Book a call</div>
              <div className="font-label text-xs text-secondary mb-6">45-minute intro session</div>
              <div className="font-label text-[10px] text-gray-400 uppercase group-hover:text-secondary transition-colors">
                Open Calendly →
              </div>
            </a>

            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-surface-container border-t-2 border-primary/20 p-8 hover:bg-surface-container-high transition-all"
            >
              <span className="material-symbols-outlined text-2xl text-primary mb-4 block">
                description
              </span>
              <div className="font-headline text-xl font-bold mb-2">Read my résumé</div>
              <div className="font-label text-xs text-primary mb-6">Experience & background</div>
              <div className="font-label text-[10px] text-gray-400 uppercase group-hover:text-primary transition-colors">
                Open résumé →
              </div>
            </a>
          </div>

          <div className="flex items-center gap-2 mt-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#8eff71]" />
            <span className="font-label text-[10px] text-gray-400 uppercase">
              Response within 48h
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
