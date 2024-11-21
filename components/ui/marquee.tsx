import { cn } from '@/lib/utils';

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  slowOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  slowOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        'group flex overflow-x-auto scrollbar-none overflow-y-hidden scroll-smooth p-2 [--duration:80s] [--gap:1rem] [gap:var(--gap)]',
        {
          'flex-row': !vertical,
          'flex-col': vertical,
        },
        className
      )}
    >
      <div
        className={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
          'animate-marquee flex-row': !vertical,
          'animate-marquee-vertical flex-col': vertical,
          'group-hover:[animation-play-state:paused]': pauseOnHover,
          '[animation-direction:reverse]': reverse,
        })}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
          'animate-marquee flex-row': !vertical,
          'animate-marquee-vertical flex-col': vertical,
          'group-hover:[animation-play-state:paused]': pauseOnHover,
          '[animation-direction:reverse]': reverse,
        })}
      >
        {children}
      </div>
    </div>
  );
}
