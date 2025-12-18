import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fluidRevealTransition } from '@/lib/animation';

interface MaskedTextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  useViewportTrigger?: boolean;
}

export function MaskedTextReveal({
  children,
  className = '',
  delay = 0,
  useViewportTrigger = false
}: MaskedTextRevealProps) {
  const animationProps = useViewportTrigger
    ? {
        initial: { y: '100%', opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true, amount: 0.2 },
      }
    : {
        initial: { y: '100%', opacity: 0 },
        animate: { y: 0, opacity: 1 },
      };

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        {...animationProps}
        transition={{
          ...fluidRevealTransition,
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
