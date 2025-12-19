import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { FAQAccordion } from './FAQAccordion';
import { FAQ } from '@/types/faq';
import { AnimatedHeading } from '@/components/shared/AnimatedHeading';

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
  className?: string;
}

export function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle,
  showViewAll = true,
  className = '',
}: FAQSectionProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <AnimatedHeading as="h2" className="text-3xl md:text-4xl mb-4">
              {title}
            </AnimatedHeading>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 dark:text-slate-300"
              >
                {subtitle}
              </motion.p>
            )}
          </div>

          <FAQAccordion faqs={faqs} />

          {showViewAll && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center mt-12"
            >
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all text-lg group"
              >
                View All FAQs
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
