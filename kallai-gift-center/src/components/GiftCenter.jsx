import { Gift, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { featuredGifts, giftServicesList } from '../data/services'
import { contact } from '../data/contact'

export default function GiftCenter() {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-plum text-ivory overflow-hidden">
      <div
        className="absolute -top-32 right-0 w-[28rem] h-[28rem] rounded-full bg-wine/40 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-champagne/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="grid place-items-center w-11 h-11 rounded-2xl bg-champagne text-plum">
              <Gift size={20} />
            </span>
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-champagne">
              Kallai Gift Center
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-balance max-w-2xl">
                Discover Kallai Gift Center
              </h2>
              <p className="mt-3 max-w-xl text-ivory/75 text-lg font-display italic">
                Find the perfect gift for every celebration &amp; milestone.
              </p>
            </div>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start md:self-auto px-6 py-3 rounded-full bg-champagne text-plum font-semibold hover:bg-ivory transition-colors shadow-card"
            >
              Order Custom Gift
              <ArrowRight size={17} />
            </a>
          </div>
        </Reveal>

        {/* 2 Featured Gifts Section */}
        <div className="mt-12">
          <Reveal>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={18} className="text-champagne" />
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-champagne">
                Featured Collections
              </h3>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredGifts.map((gift, i) => (
              <Reveal key={gift.id} delay={i * 120}>
                <div className="group relative rounded-3xl overflow-hidden bg-plum-dark/50 border border-ivory/10 shadow-card flex flex-col sm:flex-row h-full">
                  <div className="relative sm:w-1/2 h-64 sm:h-auto overflow-hidden shrink-0">
                    <img
                      src={gift.image}
                      alt={gift.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-plum-dark/80 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-champagne text-plum uppercase tracking-wider">
                      {gift.badge}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                    <div>
                      <h4 className="font-display text-xl sm:text-2xl font-semibold text-ivory group-hover:text-champagne transition-colors">
                        {gift.title}
                      </h4>
                      <p className="mt-3 text-ivory/70 text-sm leading-relaxed">
                        {gift.subtitle}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-ivory/10 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-widest text-champagne/80 font-medium">
                        Custom Orders Available
                      </span>
                      <a
                        href={contact.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-ivory hover:text-champagne transition-colors inline-flex items-center gap-1"
                      >
                        Enquire <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Gifting Services Listed by Words */}
        <div className="mt-14 pt-12 border-t border-ivory/10">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-champagne font-semibold mb-1">
                  Complete Catalogue
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ivory">
                  Gifting Services &amp; Categories
                </h3>
              </div>
              <p className="text-sm text-ivory/60 max-w-md">
                Handcrafted, curated and customized to your exact requirements in Kallakurichi.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {giftServicesList.map((service, i) => (
              <Reveal key={service.id} delay={(i % 4) * 60}>
                <div className="h-full p-5 rounded-2xl bg-ivory/5 border border-ivory/10 hover:border-champagne/40 hover:bg-ivory/10 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-champagne shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display text-base font-semibold text-ivory">
                        {service.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-ivory/65 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex justify-center">
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-champagne text-plum font-semibold hover:bg-ivory transition-colors shadow-card"
            >
              Enquire on WhatsApp
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
