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
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
      }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <motion.div
      className={className}
      {...animationProps}
      transition={{
        ...fluidRevealTransition,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
