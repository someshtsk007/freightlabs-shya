import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Spotlight } from '@/components/aceternity/spotlight';
import { FAQSearch } from '@/components/faq/FAQSearch';
import { FAQCategoryFilter } from '@/components/faq/FAQCategoryFilter';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import { FeaturedFAQs } from '@/components/faq/FeaturedFAQs';
import { faqData, getFAQsByCategory, getFeaturedFAQs, searchFAQs } from '@/data/faqData';
import { Separator } from '@/components/ui/separator';
import { Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GradientText } from '@/components/aceternity/gradient-text';

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = useMemo(() => {
    if (searchQuery) {
      return searchFAQs(searchQuery);
    }
    return getFAQsByCategory(selectedCategory);
  }, [selectedCategory, searchQuery]);

  const featuredFAQs = getFeaturedFAQs(6);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <section className="relative py-24 overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="rgba(59, 130, 246, 0.5)"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <GradientText>How Can We Help?</GradientText>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12">
              Find answers to common questions about FreightLabs and our services
            </p>
            <FAQSearch onSearch={setSearchQuery} />
          </motion.div>

          {searchQuery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-8"
            >
              <p className="text-slate-600 dark:text-slate-400">
                Found <span className="font-semibold text-blue-600 dark:text-blue-400">{filteredFAQs.length}</span> result{filteredFAQs.length !== 1 ? 's' : ''} for "{searchQuery}"
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {!searchQuery && featuredFAQs.length > 0 && (
        <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                Most Asked Questions
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Quick answers to our most popular questions
              </p>
            </motion.div>
            <FeaturedFAQs faqs={featuredFAQs} />
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {!searchQuery && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-slate-900 dark:text-white">
                  Browse by Category
                </h2>
                <FAQCategoryFilter
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  {(category) => (
                    <FAQAccordion faqs={getFAQsByCategory(category)} showCategory />
                  )}
                </FAQCategoryFilter>
              </motion.div>
            )}

            {searchQuery && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <FAQAccordion faqs={filteredFAQs} showCategory />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
              Still Have Questions?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Support
              </Link>
              <a
                href="mailto:support@freightlabs.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
