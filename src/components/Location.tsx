import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';
import {
  ADDRESS,
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_URL,
  HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '@/src/lib/site';

export default function Location() {
  return (
    <section id="location" className="pt-[4.2rem] pb-24 md:py-24 px-6 bg-dark border-t border-gold/10 scroll-mt-[calc(2.1rem+env(safe-area-inset-top,0px))] md:scroll-mt-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6">Локация</h2>
            <p className="text-xl text-cream/80 font-light normal-case leading-relaxed max-w-lg">
              Намираме се в центъра на София, на бул. „Княз Александър Дондуков“. Наминете за прясно изпечена пица направо от фурната на дърва.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <span
                className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-gold text-gold"
                aria-hidden="true"
              >
                <MapPin className="h-5 w-5" strokeWidth={2} />
              </span>
              <div>
                <h3 className="text-xl font-serif font-bold uppercase tracking-wide text-cream">Адрес</h3>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-gold transition-colors block normal-case focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-sm"
                >
                  {ADDRESS}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span
                className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-gold text-gold"
                aria-hidden="true"
              >
                <Phone className="h-5 w-5" strokeWidth={2} />
              </span>
              <div>
                <h3 className="text-xl font-serif font-bold uppercase tracking-wide text-cream">
                  Телефон за връзка
                </h3>
                <p className="text-cream/70">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="transition-colors hover:text-gold normal-case focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-sm"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span
                className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-gold text-gold"
                aria-hidden="true"
              >
                <Clock className="h-5 w-5" strokeWidth={2} />
              </span>
              <div className="flex-1">
                <h3 className="text-xl font-serif font-bold uppercase tracking-wide text-cream mb-3">Работно време</h3>
                <ul className="text-cream/70 normal-case space-y-1.5">
                  {HOURS.map(({ day, hours }) => (
                    <li key={day} className="flex items-center justify-between gap-6 max-w-xs">
                      <span>{day}</span>
                      <span className={hours === 'Затворено' ? 'text-cream/40' : 'text-cream font-semibold'}>
                        {hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Map Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[500px] w-full rounded-2xl overflow-hidden border-2 border-gold/20 shadow-xl"
        >
          <iframe
            title="Пецарията на картата"
            src={GOOGLE_MAPS_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
