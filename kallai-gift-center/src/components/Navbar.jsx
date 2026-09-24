import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle, Instagram, Phone } from 'lucide-react'
import { contact } from '../data/contact'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Packages', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ivory/90 backdrop-blur-md shadow-card' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 py-3">
        <a href="#home" className="flex items-center gap-2 shrink-0" aria-label="Kallai Gift Center home">
          <img
            src="/images/logo.png"
            alt="Kallai Gift Center logo"
            className="w-12 h-12 rounded-full object-cover shadow-sm"
          />
          <span className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-plum">
            Kallai Gift Center
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 font-body text-sm font-medium text-ink/80">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-wine transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="grid place-items-center w-9 h-9 rounded-full border border-plum/15 text-plum hover:bg-plum hover:text-ivory transition-colors"
          >
            <MessageCircle size={17} />
          </a>
          <a
            href={contact.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram"
            className="grid place-items-center w-9 h-9 rounded-full border border-plum/15 text-plum hover:bg-plum hover:text-ivory transition-colors"
          >
            <Instagram size={17} />
          </a>
          <a
            href={contact.phoneHref}
            aria-label="Call Kallai Gift Center"
            className="grid place-items-center w-9 h-9 rounded-full border border-plum/15 text-plum hover:bg-plum hover:text-ivory transition-colors"
          >
            <Phone size={17} />
          </a>
          <a
            href="#contact"
            className="ml-1 px-5 py-2.5 rounded-full bg-wine text-ivory text-sm font-semibold hover:bg-plum transition-colors shadow-card"
          >
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden grid place-items-center w-10 h-10 rounded-full text-plum"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-ivory transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-8 font-display text-2xl text-plum">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 border-b border-plum/10"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 px-6">
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="grid place-items-center w-12 h-12 rounded-full bg-plum/5 text-plum"
          >
            <MessageCircle size={20} />
          </a>
          <a
            href={contact.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram"
            className="grid place-items-center w-12 h-12 rounded-full bg-plum/5 text-plum"
          >
            <Instagram size={20} />
          </a>
          <a
            href={contact.phoneHref}
            aria-label="Call Kallai Gift Center"
            className="grid place-items-center w-12 h-12 rounded-full bg-plum/5 text-plum"
          >
            <Phone size={20} />
          </a>
        </div>
      </div>
    </header>
  )
}
