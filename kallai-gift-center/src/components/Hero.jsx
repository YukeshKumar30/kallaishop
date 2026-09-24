import { MessageCircle, Instagram, Phone, ArrowRight } from 'lucide-react'
import { contact } from '../data/contact'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-gradient-to-b from-ivory-soft to-ivory"
    >
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-peach/40 blur-3xl animate-floatSlow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -left-16 w-72 h-72 rounded-full bg-champagne/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <div className="animate-fadeUp">
          <p className="uppercase tracking-[0.2em] text-xs font-semibold text-wine mb-5">
            Kallakurichi, Tamil Nadu
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.02] text-plum text-balance">
            Kallai Gift Center
          </h1>
          <p className="mt-5 font-display text-2xl sm:text-3xl text-wine text-balance">
            Gifts That Make Moments Special.
          </p>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-ink/70 leading-relaxed">
            Premium gifts, personalized creations, photography, videography and
            event management — all under one trusted name in Kallakurichi.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="px-7 py-3.5 rounded-full bg-wine text-ivory font-semibold shadow-soft hover:bg-plum transition-colors inline-flex items-center gap-2"
            >
              Explore Our Services
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full border-2 border-plum text-plum font-semibold hover:bg-plum hover:text-ivory transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="grid place-items-center w-11 h-11 rounded-full bg-plum/5 text-plum hover:bg-plum hover:text-ivory transition-colors"
            >
              <MessageCircle size={19} />
            </a>
            <a
              href={contact.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram"
              className="grid place-items-center w-11 h-11 rounded-full bg-plum/5 text-plum hover:bg-plum hover:text-ivory transition-colors"
            >
              <Instagram size={19} />
            </a>
            <a
              href={contact.phoneHref}
              aria-label="Call Kallai Gift Center"
              className="grid place-items-center w-11 h-11 rounded-full bg-plum/5 text-plum hover:bg-plum hover:text-ivory transition-colors"
            >
              <Phone size={19} />
            </a>
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-4 sm:gap-5">
          <img
            src="/images/gifts/hero-gift-1.jpg"
            alt="Curated gift box from Kallai Gift Center"
            className="rounded-4xl shadow-soft col-span-2 h-48 sm:h-56 w-full object-cover"
            loading="eager"
          />
          <img
            src="/images/photography/hero-photography-1.jpg"
            alt="Wedding photography by Maddy Photography & Videography"
            className="rounded-4xl shadow-card h-40 sm:h-48 w-full object-cover"
            loading="lazy"
          />
          <img
            src="/images/events/hero-events-1.jpg"
            alt="Celebration decoration by Bagavan Event Management"
            className="rounded-4xl shadow-card h-40 sm:h-48 w-full object-cover"
            loading="lazy"
          />
          <img
            src="/images/gifts/hero-gift-2.jpg"
            alt="Fresh flowers and gifting decor"
            className="rounded-4xl shadow-card col-span-2 h-32 sm:h-36 w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
