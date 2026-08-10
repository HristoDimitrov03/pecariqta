import { ExternalLink, Phone, Truck } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, WOLT_URL } from '@/src/lib/site';

type Props = {
  className?: string;
  showPhone?: boolean;
};

export default function DeliveryPlatforms({ className, showPhone = true }: Props) {
  return (
    <div className={className}>
      <a
        href={WOLT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#009DE0]/10 p-5 rounded-2xl border border-[#009DE0]/20 hover:border-[#009DE0]/50 transition-colors flex items-center gap-4 group"
      >
        <div className="bg-[#009DE0] w-12 h-12 rounded-full flex items-center justify-center shrink-0">
          <Truck className="text-white" size={22} aria-hidden="true" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-serif font-bold text-cream group-hover:text-[#009DE0] transition-colors normal-case">
            Wolt
          </h3>
          <p className="text-cream/50 text-sm normal-case">Поръчай през Wolt</p>
        </div>
        <ExternalLink
          className="text-cream/30 group-hover:text-[#009DE0] transition-colors"
          size={18}
          aria-hidden="true"
        />
      </a>

      {showPhone && (
        <a
          href={`tel:${PHONE_TEL}`}
          className="bg-gold/10 p-5 rounded-2xl border border-gold/20 hover:border-gold/50 transition-colors flex items-center gap-4 group"
        >
          <div className="bg-gold w-12 h-12 rounded-full flex items-center justify-center shrink-0">
            <Phone className="text-white" size={22} aria-hidden="true" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-serif font-bold text-cream group-hover:text-gold transition-colors normal-case">
              {PHONE_DISPLAY}
            </h3>
            <p className="text-cream/50 text-sm normal-case">Обади се за поръчка</p>
          </div>
          <Phone
            className="text-cream/30 group-hover:text-gold transition-colors"
            size={18}
            aria-hidden="true"
          />
        </a>
      )}
    </div>
  );
}
