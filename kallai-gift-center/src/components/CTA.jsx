import { MessageCircle, Phone, Instagram } from 'lucide-react'
import Reveal from './Reveal'
import { contact } from '../data/contact'

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-24 bg-wine text-ivory overflow-hidden">
      <div
        className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-plum/50 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-balance">
            Planning Something Special?
          </h2>
          <p className="mt-4 text-ivory/80 max-w-xl mx-auto leading-relaxed">
            From the perfect gift to unforgettable events, we're here to make
            your moments memorable.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-champagne text-plum font-semibold hover:bg-ivory transition-colors shadow-card"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
            <a
              href={contact.phoneHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-ivory/60 text-ivory font-semibold hover:bg-ivory hover:text-wine transition-colors"
            >
              <Phone size={18} /> Call Now
            </a>
            <a
              href={contact.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-ivory/60 text-ivory font-semibold hover:bg-ivory hover:text-wine transition-colors"
            >
              <Instagram size={18} /> Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
