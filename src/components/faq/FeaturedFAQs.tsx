import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQ } from '@/types/faq';
import { faqCategories } from '@/data/faqData';

interface FeaturedFAQsProps {
  faqs: FAQ[];
}

const categoryColors: Record<string, 'blue' | 'amber' | 'green' | 'orange'> = {
  general: 'blue',
  shipper: 'blue',
  '3pl-broker': 'amber',
  carrier: 'green',
  platform: 'blue',
  support: 'orange',
};

export function FeaturedFAQs({ faqs }: FeaturedFAQsProps) {
  const getCategoryName = (categoryId: string) => {
    const category = faqCategories.find((c) => c.id === categoryId);
    return category?.name || categoryId;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {faqs.map((faq, index) => (
        <motion.div
          key={faq.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700">
            <CardContent className="p-6">
              <div className="flex flex-col h-full gap-4">
                <Badge
                  variant={categoryColors[faq.category]}
                  className="w-fit"
                >
                  {getCategoryName(faq.category)}
                </Badge>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white leading-tight">
                  {faq.question}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3 flex-grow">
                  {faq.answer}
                </p>
                <Link
                  to="/faq"
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:gap-2 transition-all mt-auto"
                >
                  Read more
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
