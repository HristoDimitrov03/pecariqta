import { motion } from 'motion/react';
import { useState } from 'react';
import { Flame } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useOrderModal } from './OrderModalContext';
import { CATEGORY_SIZE, MENU_DATA } from '@/src/data/menuData';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('Пица');
  const { openOrderModal } = useOrderModal();

  return (
    <section id="menu" className="pt-[4.2rem] pb-24 md:py-24 px-6 bg-dark scroll-mt-[calc(2.1rem+env(safe-area-inset-top,0px))] md:scroll-mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center mb-4 text-gold" aria-hidden="true">
            <Flame size={28} strokeWidth={2} />
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold text-cream mb-4"
          >
            Нашето меню
          </motion.h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-4" />
          <p className="text-cream/60 font-light max-w-xl mx-auto mb-8 normal-case">
            Нашето меню е приготвено за Вас с много внимание и специално отношение.
          </p>

          <div role="group" aria-label="Menu categories" className="grid grid-cols-2 gap-x-2 md:gap-x-4 gap-y-3 max-w-md mx-auto">
            {Object.keys(MENU_DATA).map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={cn(
                  "min-h-11 px-2 py-2 text-base md:text-lg font-serif transition-all duration-200 pb-1 border-b-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded-sm",
                  activeCategory === cat ? "text-gold border-gold" : "text-cream/40 border-transparent hover:text-cream"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          {CATEGORY_SIZE[activeCategory] && (
            <p className="mt-4 text-gold/80 text-sm font-bold uppercase tracking-[0.2em]">
              {CATEGORY_SIZE[activeCategory]}
            </p>
          )}
        </div>

        {/* Menu Items Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.28 }}
          className="grid md:grid-cols-2 gap-x-16 gap-y-10"
        >
          {MENU_DATA[activeCategory].map((item) => (
            <div key={item.name} className="group">
              <div className="flex justify-between items-start gap-4 mb-2">
                <h3 className="text-xl font-serif font-bold text-cream group-hover:text-gold transition-colors flex items-center gap-2 flex-wrap normal-case">
                  {item.name}
                  {item.popular && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 text-gold text-[0.65rem] font-bold uppercase tracking-widest px-2 py-0.5 border border-gold/30">
                      <Flame size={12} aria-hidden="true" />
                      Популярни
                    </span>
                  )}
                </h3>
                <span className="text-gold font-bold whitespace-nowrap shrink-0">{item.price}</span>
              </div>
              <div className="mt-4 border-b border-cream/10" />
            </div>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={openOrderModal}
            className="inline-block bg-gold text-white px-12 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-gold/90 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
          >
            Поръчай
          </button>
        </div>
      </div>
    </section>
  );
}
