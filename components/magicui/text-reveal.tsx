import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  text?: string;
  className?: string;
  duration?: number;
  delay?: number;
  characterDelay?: number;
  lineDelay?: number;
  characterClass?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text = 'Text Reveal',
  className,
  duration = 0.75,
  delay = 0,
  characterDelay = 0.05,
  lineDelay = 0.2,
  characterClass,
}) => {
  const mainControls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const lines = text.split('\\n'); // Split text into lines

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className={cn('relative w-fit overflow-hidden', className)}>
      {lines.map((line, lineIndex) => (
        <div
          key={lineIndex}
          className="leading-[1] text-[40px] sm:text-[68px] font-semibold overflow-hidden"
        >
          {line.split('').map((char, charIndex) => {
            return (
              <motion.span
                key={charIndex}
                variants={{
                  hidden: { y: 75 },
                  visible: { y: 0 },
                }}
                className={cn('font-display inline-block', characterClass)}
                initial="hidden"
                animate={mainControls}
                transition={{
                  duration: duration,
                  delay:
                    delay + characterDelay * charIndex + lineIndex * lineDelay,
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </div>
      ))}
    </div>
  );
};
