import { motion } from 'motion/react';
import { Star, Quote, Flame } from 'lucide-react';

import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from '@/src/lib/site';

function AggregateStars({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <div className="flex" role="img" aria-label={`${value} out of ${max} stars on Google`}>
      {Array.from({ length: max }, (_, i) => {
        const segment = value - i;
        if (segment >= 1) {
          return <Star key={i} size={20} className="text-gold" fill="currentColor" aria-hidden />;
        }
        if (segment <= 0) {
          return <Star key={i} size={20} className="text-gold/35" fill="none" stroke="currentColor" aria-hidden />;
        }
        return (
          <span key={i} className="relative inline-block h-5 w-5 shrink-0">
            <Star size={20} className="text-gold/35 absolute left-0 top-0" fill="none" stroke="currentColor" aria-hidden />
            <span className="absolute left-0 top-0 h-5 overflow-hidden" style={{ width: `${segment * 100}%` }}>
              <Star size={20} className="text-gold" fill="currentColor" aria-hidden />
            </span>
          </span>
        );
      })}
    </div>
  );
}

const REVIEWS = [
  {
    author: 'Мария Георгиева',
    platform: 'Google',
    rating: 5,
    text: 'Най-добрата неаполитанска пица в София! Тестото е тънко, хрупкаво и се усеща, че е квасено вкъщи. Пеперони пицата е абсолютен фаворит.',
    date: 'преди 3 седмици',
  },
  {
    author: 'Иван Тодоров',
    platform: 'Google',
    rating: 5,
    text: 'Малко място с голямо сърце. Пицата излиза направо от фурната гореща и уханна, а обслужването е бързо и приятелско. Определено ще се върна.',
    date: 'преди 1 месец',
  },
  {
    author: 'Десислава Николова',
    platform: 'Google',
    rating: 4,
    text: 'Пробвахме Формаджи и Крудо пицата — качеството на продуктите си личи. Приятна атмосфера и любезен екип, само мястата за сядане са малко.',
    date: 'преди 2 месеца',
  },
];

export default function Reviews() {
  return (
    <section className="py-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center mb-4 text-gold" aria-hidden="true">
            <Flame size={28} strokeWidth={2} />
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4"
          >
            Какво казват гостите
          </motion.h2>
          <div className="flex flex-wrap items-center justify-center gap-4 text-gold mb-8">
            <AggregateStars value={GOOGLE_RATING} />
            <span className="text-cream/70 font-bold normal-case">
              {GOOGLE_RATING} / 5.0 на базата на над {GOOGLE_REVIEW_COUNT} отзива в Google
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-blush p-8 rounded-2xl border border-gold/10 relative group hover:border-gold/30 transition-all shadow-sm"
            >
              <Quote className="absolute top-6 right-6 text-gold/25 w-12 h-12" aria-hidden="true" />

              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-gold">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={14} aria-hidden="true" />
                  ))}
                </div>
                <span className="text-xs text-cream/50 uppercase tracking-widest">{review.platform}</span>
              </div>

              <p className="text-cream/80 font-light normal-case mb-6 leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between border-t border-cream/10 pt-4">
                <span className="font-serif font-bold text-cream normal-case">{review.author}</span>
                <span className="text-xs text-cream/40 normal-case">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
