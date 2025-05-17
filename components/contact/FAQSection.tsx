'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'How durable is furniture made from recycled tyres?',
    answer:
      'Our furniture is exceptionally durable. Tyres are designed to withstand extreme conditions, and we enhance this natural durability through our crafting process. With proper care, our pieces can last for many years, even in high-traffic environments or outdoor settings.',
  },
  {
    question: 'Is tyre furniture safe and non-toxic?',
    answer:
      'Yes, all our furniture is safe for home and office use. We thoroughly clean and treat each tyre to remove any contaminants. Our finishing processes use non-toxic, eco-friendly materials that seal the surface and eliminate any rubber odor. All upholstery materials are also selected for both safety and comfort.',
  },
  {
    question: 'Can I request custom designs or modifications?',
    answer:
      'Absolutely! We specialize in custom creations and can work with you to design furniture that meets your specific needs, space requirements, and aesthetic preferences. Whether you need custom dimensions, colors, or entirely unique designs, our team is ready to bring your vision to life.',
  },
  {
    question: 'How much weight can your furniture support?',
    answer:
      'Our seating pieces are engineered to comfortably support weights of 120-150kg per seat, depending on the specific design. Tables and other furniture items are equally robust. If you have specific weight capacity requirements, please mention this when ordering, and we can reinforce pieces accordingly.',
  },
  {
    question: 'Do you offer delivery services?',
    answer:
      'Yes, we offer delivery throughout Lagos at a standard rate. For deliveries outside Lagos, we work with reliable logistics partners to ensure your furniture arrives safely. Delivery fees are calculated based on distance and the size of your order. We also offer installation services for an additional fee.',
  },
  {
    question: 'How do I clean and maintain tyre furniture?',
    answer:
      'Our furniture is designed for easy maintenance. For routine cleaning, simply wipe with a damp cloth using mild soap if needed. For upholstered pieces, we recommend regular vacuuming and prompt cleaning of spills. We provide specific care instructions with each purchase to ensure your furniture remains beautiful for years.',
  },
  {
    question: 'What is your return/exchange policy?',
    answer:
      'We stand behind the quality of our products. If you receive a piece with manufacturing defects, we will repair, replace, or refund it within 14 days of delivery. For custom orders, we confirm all specifications before production to ensure your satisfaction, as these items cannot be returned unless defective.',
  },
  {
    question: 'Do you offer bulk pricing for businesses?',
    answer:
      'Yes, we offer special pricing for bulk orders for businesses, hotels, restaurants, and other commercial clients. The discount depends on the quantity and types of products ordered. Please contact us directly for a customized quote for your business needs.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700">
            Have questions about our products or services? Find answers to
            common inquiries below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                'border rounded-lg overflow-hidden transition-all duration-200',
                openIndex === index
                  ? 'shadow-md border-primary/50'
                  : 'border-gray-200'
              )}
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <div
                  className={cn(
                    'flex-shrink-0 ml-4 p-1 rounded-full transition-colors',
                    openIndex === index ? 'bg-primary/10' : 'bg-gray-100'
                  )}
                >
                  {openIndex === index ? (
                    <ChevronUp
                      className={cn(
                        'h-5 w-5',
                        openIndex === index ? 'text-primary' : 'text-gray-500'
                      )}
                    />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-700">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700">
            Still have questions?{' '}
            <a href="#" className="text-primary font-medium hover:underline">
              Contact our team
            </a>{' '}
            for more information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
