import { Sparkles, BadgeCheck, Wand2, Handshake, MapPin, Heart } from 'lucide-react'
import Reveal from './Reveal'
import { whyChooseUs } from '../data/services'

const icons = { Sparkles, BadgeCheck, Wand2, Handshake, MapPin, Heart }

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-ivory-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-plum text-balance">
            Why Choose Kallai Gift Center?
          </h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[item.icon]
            return (
              <Reveal key={item.title} delay={(i % 3) * 100}>
                <div className="h-full bg-white/70 border border-plum/10 rounded-4xl p-7 shadow-card hover:-translate-y-1 transition-transform">
                  <span className="grid place-items-center w-12 h-12 rounded-2xl bg-peach/50 text-wine mb-5">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-plum">{item.title}</h3>
                  <p className="mt-2 text-ink/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
