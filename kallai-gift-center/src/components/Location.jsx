import { MapPin, Navigation } from 'lucide-react'
import Reveal from './Reveal'
import { contact } from '../data/contact'

export default function Location() {
  return (
    <section className="py-20 sm:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-plum text-balance">
            Visit Kallai Gift Center
          </h2>
          <p className="mt-5 flex items-center gap-2 text-lg text-ink/75">
            <MapPin size={20} className="text-wine shrink-0" />
            {contact.location}
          </p>
          <p className="mt-4 max-w-md text-ink/60 leading-relaxed">
            Drop by our store in Kallakurichi to browse gifts in person, or reach
            out online — we're happy to help you plan from anywhere.
          </p>
          <a
            href={contact.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-plum text-ivory font-semibold hover:bg-wine transition-colors shadow-card"
          >
            <Navigation size={18} />
            Get Directions
          </a>
        </Reveal>

        <Reveal>
          {/* Placeholder location card — swap for a Google Maps embed with your exact address when ready */}
          <div className="relative rounded-5xl overflow-hidden shadow-soft aspect-[4/3] bg-gradient-to-br from-plum to-wine flex items-center justify-center">
            <div className="absolute inset-0 bg-grain opacity-30" aria-hidden="true" />
            <div className="relative text-center text-ivory px-8">
              <MapPin size={40} className="mx-auto mb-4 text-champagne" />
              <p className="font-display text-2xl font-semibold">Kallakurichi</p>
              <p className="mt-1 text-ivory/70 text-sm">Tamil Nadu, India</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
