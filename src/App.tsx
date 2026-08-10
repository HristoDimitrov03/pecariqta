import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/Menu';
import Location from './components/Location';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import DeliveryBanner from './components/DeliveryBanner';
import OrderPlatformModal from './components/OrderPlatformModal';
import { OrderModalProvider } from './components/OrderModalContext';
import { motion, useScroll, useSpring } from 'motion/react';
import { useState } from 'react';
import { Flame } from 'lucide-react';
import { PHONE_TEL } from '@/src/lib/site';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <OrderModalProvider
      value={{
        openOrderModal: () => setIsOrderModalOpen(true),
        closeOrderModal: () => setIsOrderModalOpen(false),
      }}
    >
    <div id="top" className="relative min-h-dvh overflow-x-hidden bg-dark selection:bg-gold selection:text-dark">
      <a
        href="#main-content"
        className="pointer-events-none fixed left-4 top-0 z-[100] -translate-y-full rounded-md bg-gold px-4 py-3 font-semibold text-dark shadow-lg outline-none ring-2 ring-cream transition-transform duration-200 focus:pointer-events-auto focus:translate-y-4"
      >
        Skip to main content
      </a>
      {/* Progress Bar */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-1.5 bg-gold z-[60] origin-left shadow-[0_0_10px_rgba(211,47,47,0.6)]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main id="main-content" tabIndex={-1}>
        <Hero />
        
        {/* About Section */}
        <section id="about" className="pt-[4.2rem] pb-24 md:py-24 px-6 bg-dark flex flex-col md:flex-row items-center justify-center text-center md:text-left max-w-7xl mx-auto gap-12 scroll-mt-[calc(2.1rem+env(safe-area-inset-top,0px))] md:scroll-mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-bold mb-6 flex items-center gap-2 justify-center md:justify-start">
              <Flame size={16} aria-hidden="true" />
              За нас
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-8 leading-tight">
              Пицата е изкуство.
              <br />
              Ние сме майсторите.
            </h2>
            <p className="text-cream/80 text-lg leading-relaxed font-light normal-case pb-4">
              В Пецарията вярваме, че всяка пица заслужава да бъде шедьовър. Тестото ни е приготвено по автентична италианска рецепта — тънко, хрупкаво и с внимателно подбрани висококачествени съставки.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative w-full h-[400px] rounded-2xl overflow-hidden group shadow-md ring-1 ring-gold/10"
          >
            <img
              src="/images/about.png"
              alt="Пица от фурна на дърва в Пецарията"
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </section>

        <MenuSection />

        <DeliveryBanner />
        
        {/* Atmospheric Image Break — wood-fired oven & flames */}
        <div className="h-[400px] w-full relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
            alt="Пица на дърва във фурна"
            width={2070}
            height={1380}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover fixed-bg brightness-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gold/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
        </div>

        <Reviews />
        <Location />
        
        {/* Call CTA Section */}
        <section className="py-24 px-6 bg-gold text-white text-center relative overflow-hidden">
          <Flame className="absolute -top-6 -left-6 w-40 h-40 text-white/10 rotate-12" aria-hidden="true" />
          <Flame className="absolute -bottom-8 -right-8 w-48 h-48 text-white/10 -rotate-12" aria-hidden="true" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Гладни ли сте?</h2>
            <p className="text-xl md:text-2xl mb-12 font-medium normal-case opacity-90">
              Поръчайте прясна пица от фурната през Wolt — или се обадете директно.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={`tel:${PHONE_TEL}`}
                className="bg-cream text-gold px-12 py-5 rounded-full font-bold uppercase tracking-wide text-xl hover:bg-cream/90 transition-all shadow-2xl cursor-pointer focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-gold focus-visible:outline-none"
              >
                Обади се
              </a>
              <button
                type="button"
                onClick={() => setIsOrderModalOpen(true)}
                className="border-2 border-cream text-cream px-12 py-5 rounded-full font-bold uppercase tracking-wide text-xl hover:bg-cream hover:text-gold transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-gold focus-visible:outline-none"
              >
                Поръчай
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />

      <OrderPlatformModal open={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
    </div>
    </OrderModalProvider>
  );
}
