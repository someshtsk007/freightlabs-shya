import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { FAQ } from '@/types/faq';

interface FAQAccordionProps {
  faqs: FAQ[];
  showCategory?: boolean;
}

const categoryColors: Record<string, 'blue' | 'amber' | 'green' | 'orange'> = {
  general: 'blue',
  shipper: 'blue',
  '3pl-broker': 'amber',
  carrier: 'green',
  platform: 'blue',
  support: 'orange',
};

export function FAQAccordion({ faqs, showCategory = false }: FAQAccordionProps) {
  if (faqs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500 dark:text-slate-400">No FAQs found</p>
      </div>
    );
  }

  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={faq.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
        >
          <AccordionItem
            value={faq.id}
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-6 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
          >
            <AccordionTrigger className="text-left hover:no-underline py-6">
              <div className="flex flex-col gap-2 w-full pr-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {faq.question}
                </h3>
                {showCategory && faq.subcategory && (
                  <Badge variant={categoryColors[faq.category]} className="w-fit">
                    {faq.subcategory}
                  </Badge>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 dark:text-slate-300 pb-6 pt-2">
              <div className="prose dark:prose-invert max-w-none">
                <p className="whitespace-pre-line leading-relaxed">{faq.answer}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  );
}
