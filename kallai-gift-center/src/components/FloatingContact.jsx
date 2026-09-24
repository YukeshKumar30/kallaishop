import { MessageCircle, Instagram, Phone } from 'lucide-react'
import { contact } from '../data/contact'

const buttons = [
  {
    label: 'Chat on WhatsApp',
    href: contact.whatsappHref,
    icon: MessageCircle,
    className: 'bg-[#25D366] hover:bg-[#1DA851]',
    external: true,
  },
  {
    label: 'Visit our Instagram',
    href: contact.instagramHref,
    icon: Instagram,
    className: 'bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90',
    external: true,
  },
  {
    label: 'Call Kallai Gift Center',
    href: contact.phoneHref,
    icon: Phone,
    className: 'bg-plum hover:bg-wine',
    external: false,
  },
]

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-4 sm:bottom-7 sm:right-7 z-40 flex flex-col items-end gap-3">
      {buttons.map(({ label, href, icon: Icon, className, external }) => (
        <a
          key={label}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          aria-label={label}
          className={`group relative grid place-items-center w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white shadow-soft transition-transform hover:scale-110 ${className}`}
        >
          <Icon size={22} />
          <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-plum-dark text-ivory text-xs font-medium px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            {label}
          </span>
        </a>
      ))}
    </div>
  )
}
