import { MessageCircle, Instagram, Phone, MapPin } from 'lucide-react'
import Reveal from './Reveal'
import { contact } from '../data/contact'

const cards = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    action: 'Chat With Us',
    href: contact.whatsappHref,
    external: true,
  },
  {
    icon: Instagram,
    title: 'Instagram',
    action: 'Follow Our Work',
    href: contact.instagramHref,
    external: true,
  },
  {
    icon: Phone,
    title: 'Phone',
    action: 'Call Us',
    href: contact.phoneHref,
    external: false,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-ivory-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-plum text-balance">
            Let's Create Something Special
          </h2>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-ink/70">
            <span className="flex items-center gap-2">
              <MapPin size={18} className="text-wine" /> {contact.location}
            </span>
            <span className="flex items-center gap-2">
              <Phone size={18} className="text-wine" /> {contact.phoneDisplay}
            </span>
            <span className="flex items-center gap-2">
              <Instagram size={18} className="text-wine" /> {contact.instagramHandle}
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, action, href, external }, i) => (
            <Reveal key={title} delay={i * 100}>
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="group flex flex-col items-start gap-4 h-full bg-white/70 border border-plum/10 rounded-4xl p-8 shadow-card hover:-translate-y-1 hover:shadow-soft transition-all"
              >
                <span className="grid place-items-center w-14 h-14 rounded-2xl bg-plum text-champagne group-hover:bg-wine transition-colors">
                  <Icon size={24} />
                </span>
                <h3 className="font-display text-xl font-semibold text-plum">{title}</h3>
                <span className="text-wine font-semibold text-sm">{action}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
