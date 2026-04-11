const footerLinks = [
  { label: 'GITHUB', href: 'https://github.com/sammosios' },
  { label: 'LINKEDIN', href: 'https://linkedin.com/in/sam-mosios' },
]

export default function Footer() {
  return (
    <footer className="md:ml-20 flex justify-between px-8 md:px-16 py-6 border-t border-[#494847]/10 bg-[#0e0e0e]">
      <div className="text-[10px] font-label text-gray-400 uppercase tracking-widest">
        ©2026 SAM MOSIOS
      </div>
      <div className="flex gap-6">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-label text-gray-400 hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
