import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { faqCategories } from '@/data/faqData';
import {
  HelpCircle,
  Package,
  Building2,
  Truck,
  Layers,
  LifeBuoy,
} from 'lucide-react';

const iconMap = {
  HelpCircle,
  Package,
  Building2,
  Truck,
  Layers,
  LifeBuoy,
};

interface FAQCategoryFilterProps {
  value: string;
  onValueChange: (value: string) => void;
  children: (category: string) => React.ReactNode;
}

export function FAQCategoryFilter({
  value,
  onValueChange,
  children,
}: FAQCategoryFilterProps) {
  return (
    <Tabs value={value} onValueChange={onValueChange} className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList className="inline-flex flex-wrap gap-2 h-auto p-2 bg-slate-100 dark:bg-slate-800">
          <TabsTrigger value="all" className="gap-2">
            <HelpCircle className="w-4 h-4" />
            All
          </TabsTrigger>
          {faqCategories.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <TabsTrigger key={category.id} value={category.id} className="gap-2">
                {Icon && <Icon className="w-4 h-4" />}
                {category.name}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </div>

      <TabsContent value="all" className="mt-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {children('all')}
        </motion.div>
      </TabsContent>

      {faqCategories.map((category) => (
        <TabsContent key={category.id} value={category.id} className="mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {children(category.id)}
          </motion.div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
