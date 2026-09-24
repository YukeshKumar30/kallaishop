import { Gift, Camera, PartyPopper } from 'lucide-react'
import Reveal from './Reveal'
import { aboutCards } from '../data/services'

const icons = { Gift, Camera, PartyPopper }

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-plum max-w-2xl text-balance">
            More Than Gifts. We Create Memories.
          </h2>
          <p className="mt-5 max-w-2xl text-ink/70 leading-relaxed">
            Kallai Gift Center provides premium and personalized gifting solutions
            while also offering professional photography, videography and event
            management through its associated services.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {aboutCards.map((card, i) => {
            const Icon = icons[card.icon]
            return (
              <Reveal key={card.id} delay={i * 100}>
                <div
                  className={`h-full rounded-4xl p-8 flex flex-col gap-5 transition-transform hover:-translate-y-1 ${
                    card.primary
                      ? 'bg-plum text-ivory shadow-soft md:scale-105 md:col-span-1'
                      : 'bg-white/70 border border-plum/10 text-ink shadow-card'
                  }`}
                >
                  <span
                    className={`grid place-items-center w-14 h-14 rounded-2xl ${
                      card.primary ? 'bg-champagne text-plum' : 'bg-peach/50 text-wine'
                    }`}
                  >
                    <Icon size={26} />
                  </span>
                  <h3 className={`font-display text-xl sm:text-2xl font-semibold ${card.primary ? 'text-ivory' : 'text-plum'}`}>
                    {card.title}
                  </h3>
                  <p className={card.primary ? 'text-ivory/80' : 'text-ink/70'}>{card.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
