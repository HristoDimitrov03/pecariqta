import { X } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import DeliveryPlatforms from './DeliveryPlatforms';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function OrderPlatformModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center px-6"
      role="dialog"
      aria-modal="true"
      aria-label="Поръчка"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-default"
        onClick={onClose}
        aria-label="Затвори"
      />

      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        className="relative w-full max-w-xl rounded-3xl bg-dark border border-gold/20 shadow-2xl overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/10 blur-[90px] rounded-full pointer-events-none" />

        <div className="relative p-6 sm:p-8">
          <div className="flex items-start justify-between gap-6 mb-6">
            <div>
              <span className="text-gold uppercase tracking-[0.3em] text-sm font-bold mb-3 block">
                Поръчка
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-cream leading-tight normal-case">
                Как желаете да поръчате?
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-full p-3 border border-gold/20 text-cream/70 hover:text-cream hover:border-gold/40 transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
              aria-label="Затвори"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <DeliveryPlatforms className="grid sm:grid-cols-1 gap-4 w-full" />
        </div>
      </motion.div>
    </div>
  );
}
