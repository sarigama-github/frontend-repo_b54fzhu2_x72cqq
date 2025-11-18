import { Briefcase, FileText, Mail } from 'lucide-react'

export default function PreviewSections() {
  const cards = [
    {
      title: 'Services',
      desc: 'Full-spectrum tax, assurance, and advisory designed for growth and cross-border operations.',
      icon: <Briefcase className="h-6 w-6" />,
      href: '/services',
      cta: 'View Services'
    },
    {
      title: 'Blog',
      desc: 'Insights on U.S. taxation, regulatory updates, and global structuring strategies.',
      icon: <FileText className="h-6 w-6" />,
      href: '/blog',
      cta: 'Read Articles'
    },
    {
      title: 'Contact',
      desc: 'Speak with a specialist about your needs. We respond within one business day.',
      icon: <Mail className="h-6 w-6" />,
      href: '/contact',
      cta: 'Get in Touch'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <a key={card.title} href={card.href} className="group p-6 rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-700">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-black">{card.title}</h3>
              </div>
              <p className="mt-3 text-sm text-black/70 leading-relaxed">{card.desc}</p>
              <div className="mt-4 text-blue-700 font-medium">{card.cta} →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
