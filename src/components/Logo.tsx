import { cn } from '@/src/lib/utils';

type Props = {
  className?: string;
  variant?: 'nav' | 'footer';
};

export default function Logo({ className, variant = 'footer' }: Props) {
  if (variant === 'nav') {
    return (
      <img
        src="/images/logo.png"
        alt=""
        className={cn(
          'm-0 block h-14 w-auto max-w-[13rem] shrink-0 object-contain p-0 leading-none transition-transform group-hover:scale-105 sm:h-[3.75rem]',
          className
        )}
      />
    );
  }

  return (
    <span className="inline-flex items-center rounded-xl bg-dark px-3 py-1.5">
      <img
        src="/images/logo.png"
        alt=""
        className={cn(
          'm-0 block h-11 w-auto max-w-[11rem] shrink-0 object-contain p-0 leading-none transition-transform group-hover:scale-105 sm:h-12',
          className
        )}
      />
    </span>
  );
}
