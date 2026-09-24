import { Camera, CheckCircle2, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { featuredPhotography, photographyServicesList } from '../data/services'
import { contact } from '../data/contact'

export default function Photography() {
  return (
    <section className="py-20 sm:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="grid place-items-center w-11 h-11 rounded-2xl bg-plum/10 text-plum">
              <Camera size={20} />
            </span>
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-wine">
              Associated Service
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-plum text-balance">
                Maddy Photography &amp; Videography
              </h2>
              <p className="mt-3 max-w-xl text-ink/70 leading-relaxed">
                Professional photography and cinematic memories, offered alongside
                Kallai Gift Center for a complete celebration experience.
              </p>
            </div>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 self-start md:self-auto px-6 py-3 rounded-full border-2 border-plum text-plum font-semibold hover:bg-plum hover:text-ivory transition-colors"
            >
              View Portfolio
              <ArrowRight size={17} />
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-center">
          {/* 1 Featured High-Quality Photography Showcase Frame */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="group relative rounded-4xl overflow-hidden shadow-soft aspect-[4/5] bg-plum-dark">
                <img
                  src={featuredPhotography.image}
                  alt={featuredPhotography.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/90 via-plum-dark/20 to-transparent" />
                <span className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-xs font-semibold bg-champagne text-plum uppercase tracking-wider shadow">
                  {featuredPhotography.badge}
                </span>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-display text-2xl font-semibold text-ivory">
                    {featuredPhotography.title}
                  </h3>
                  <p className="mt-2 text-ivory/80 text-sm leading-relaxed">
                    {featuredPhotography.caption}
                  </p>
                  <p className="mt-2 text-xs text-champagne/90 italic">
                    {featuredPhotography.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Photography Services Listed by Words */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest text-wine font-semibold mb-1">
                  Our Expertise
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-plum">
                  Photography &amp; Videography Services
                </h3>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {photographyServicesList.map((item, i) => (
                <Reveal key={item.id} delay={(i % 4) * 60}>
                  <div className="h-full p-4 sm:p-5 rounded-2xl bg-white border border-plum/10 shadow-sm hover:shadow-card hover:border-wine/30 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-wine shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-display text-base font-semibold text-plum">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-xs text-ink/70 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={contact.phoneHref}
                className="px-7 py-3 rounded-full bg-wine text-ivory font-semibold hover:bg-plum transition-colors shadow-card text-sm"
              >
                Book Photography
              </a>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full border border-plum/20 text-plum font-semibold hover:bg-plum/5 transition-colors text-sm"
              >
                Check Availability on WhatsApp
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
