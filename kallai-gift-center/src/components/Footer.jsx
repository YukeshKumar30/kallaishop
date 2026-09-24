import { MessageCircle, Instagram, Phone, MapPin } from 'lucide-react'
import { contact } from '../data/contact'

export default function Footer() {
  return (
    <footer className="bg-plum-dark text-ivory/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img
                src="/images/logo.png"
                alt="Kallai Gift Center logo"
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="font-display text-xl font-semibold text-ivory">
                Kallai Gift Center
              </span>
            </div>
            <p className="text-sm text-ivory/60">
              Gifts • Photography • Videography • Events
            </p>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-ivory mb-3">Associated Services</h4>
            <ul className="space-y-2 text-sm text-ivory/60">
              <li>Maddy Photography &amp; Videography</li>
              <li>Bagavan Event Management</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-ivory mb-3">Location</h4>
            <p className="text-sm text-ivory/60 flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-champagne" />
              {contact.location}
            </p>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-ivory mb-3">Get in Touch</h4>
            <p className="text-sm text-ivory/60 mb-4">{contact.phoneDisplay}</p>
            <div className="flex items-center gap-3">
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="grid place-items-center w-10 h-10 rounded-full bg-ivory/10 hover:bg-champagne hover:text-plum transition-colors"
              >
                <MessageCircle size={17} />
              </a>
              <a
                href={contact.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram"
                className="grid place-items-center w-10 h-10 rounded-full bg-ivory/10 hover:bg-champagne hover:text-plum transition-colors"
              >
                <Instagram size={17} />
              </a>
              <a
                href={contact.phoneHref}
                aria-label="Call Kallai Gift Center"
                className="grid place-items-center w-10 h-10 rounded-full bg-ivory/10 hover:bg-champagne hover:text-plum transition-colors"
              >
                <Phone size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-ivory/10 text-xs text-ivory/50 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Kallai Gift Center. All rights reserved.</p>
          <p>Kallakurichi, Tamil Nadu, India</p>
        </div>
      </div>
    </footer>
  )
}
