import { motion, AnimatePresence } from 'motion/react';
import { X, Facebook, Instagram } from 'lucide-react';
import Logo from './Logo';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';
import { useOrderModal } from './OrderModalContext';
import { FACEBOOK_URL, INSTAGRAM_URL } from '@/src/lib/site';

function HamburgerIcon() {
  return (
    <span className="flex w-7 flex-col items-end gap-[7px]" aria-hidden="true">
      <span className="block h-px w-full bg-cream" />
      <span className="block h-px w-full bg-cream" />
      <span className="block h-px w-full bg-cream" />
    </span>
  );
}

export default function Navbar() {
  const { openOrderModal } = useOrderModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Начало', href: '#top' },
    { name: 'За нас', href: '#about' },
    { name: 'Меню', href: '#menu' },
    { name: 'Доставка', href: '#delivery' },
    { name: 'Локация', href: '#location' },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const brandMark = <Logo variant="nav" />;

  return (
    <>
      <nav
        aria-label="Primary"
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
          isScrolled ? 'bg-dark/90 backdrop-blur-md border-b border-gold/20 py-3' : 'bg-transparent',
          isMobileMenuOpen && 'md:bg-transparent md:backdrop-blur-none md:border-b-0'
        )}
      >
        <motion.div
          className={cn(
            'max-w-7xl mx-auto flex items-center justify-between',
            isMobileMenuOpen && 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto'
          )}
          aria-hidden={isMobileMenuOpen}
        >
          <motion.a
            href="#top"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex min-w-0 items-center p-0 cursor-pointer select-none group focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded-sm"
            aria-label="Пецарията — Начало"
            onClick={closeMobileMenu}
          >
            {brandMark}
          </motion.a>

          <motion.div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-cream/80 hover:text-gold transition-colors font-medium tracking-wide uppercase text-sm focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded-sm px-2 py-1"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              type="button"
              onClick={openOrderModal}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gold text-white px-6 py-2 rounded-full font-bold uppercase tracking-wide hover:bg-gold/90 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
            >
              Поръчай
            </motion.button>
          </motion.div>

          <button
            type="button"
            className="md:hidden inline-flex min-h-11 min-w-11 items-center justify-center text-cream hover:text-gold transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded-sm"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Отвори менюто"
            aria-expanded={isMobileMenuOpen}
          >
            <HamburgerIcon />
          </button>
        </motion.div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Навигация"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex flex-col bg-dark md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="flex flex-1 flex-col"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.25 }}
                className="flex items-center justify-between px-6 py-4"
              >
                <a
                  href="#top"
                  className="flex min-w-0 items-center gap-2 select-none"
                  aria-label="Пецарията — Начало"
                  onClick={closeMobileMenu}
                >
                  {brandMark}
                </a>
                <button
                  type="button"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center text-cream hover:text-gold transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded-sm"
                  onClick={closeMobileMenu}
                  aria-label="Затвори менюто"
                >
                  <X size={36} strokeWidth={1} aria-hidden="true" />
                </button>
              </motion.div>

              <nav className="flex flex-1 flex-col items-center justify-center gap-7 px-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ delay: 0.22 + i * 0.04, duration: 0.3 }}
                    className="text-cream font-sans text-sm font-medium uppercase tracking-[0.25em] hover:text-gold transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded-sm py-1"
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.button
                  type="button"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ delay: 0.22 + navLinks.length * 0.04, duration: 0.3 }}
                  className="mt-2 w-full max-w-xs bg-gold text-white px-6 py-3 rounded-full font-bold uppercase tracking-wide text-center hover:bg-gold/90 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
                  onClick={() => {
                    closeMobileMenu();
                    openOrderModal();
                  }}
                >
                  Поръчай
                </motion.button>
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="border-t border-cream/10 px-6 pt-8 pb-10"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.4, duration: 0.25 }}
                  className="flex items-center justify-center gap-8"
                >
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-cream hover:text-gold transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded-sm"
                  >
                    <Facebook size={22} strokeWidth={1.25} aria-hidden="true" />
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-cream hover:text-gold transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded-sm"
                  >
                    <Instagram size={22} strokeWidth={1.25} aria-hidden="true" />
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
