import { motion, useReducedMotion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useOrderModal } from './OrderModalContext';

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { openOrderModal } = useOrderModal();

  return (
    <section id="top" className="relative min-h-dvh w-full overflow-hidden flex items-start md:items-center justify-center pt-[calc(120px+env(safe-area-inset-top,0px))] md:pt-0 bg-dark scroll-mt-0">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--color-blush)_0%,_var(--color-dark)_65%)]" />
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gold/10 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-gold/10 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 text-center px-6 max-w-4xl mt-2 md:mt-0">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif font-extrabold text-cream mb-3 tracking-tight leading-[0.95] text-pop-shadow"
        >
          Пецарията
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gold font-sans font-semibold tracking-[0.35em] uppercase mb-8"
        >
          Pecariqta
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-cream/80 mb-10 font-normal normal-case tracking-normal max-w-2xl mx-auto"
        >
          Автентични пици, приготвени с пресни, висококачествени продукти. Истинско пътешествие из вкусовете на Италия!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="w-full sm:w-auto bg-gold text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide text-lg hover:bg-gold/90 transition-all transform hover:scale-105 shadow-xl cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
          >
            Виж менюто
          </a>
          <button
            type="button"
            onClick={openOrderModal}
            className="w-full sm:w-auto border-2 border-cream text-cream px-8 py-4 rounded-full font-bold uppercase tracking-wide text-lg hover:bg-cream hover:text-dark transition-all transform hover:scale-105 cursor-pointer focus-visible:ring-2 focus-visible:ring-cream focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-gold"
          >
            Поръчай
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={
          reduceMotion
            ? { delay: 0.2, duration: 0.25 }
            : { delay: 1.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }
        }
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs uppercase tracking-widest text-cream/50">Виж повече</span>
        <ChevronDown className="text-gold w-6 h-6" aria-hidden="true" />
      </motion.div>
    </section>
  );
}
