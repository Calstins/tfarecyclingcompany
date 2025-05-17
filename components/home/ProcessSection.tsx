'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Recycle, Pencil, Hammer, CheckCircle } from 'lucide-react';

const steps = [
  {
    id: 'collect',
    title: 'Collection',
    description:
      'We collect discarded tyres from various sources, diverting them from landfills and giving them a new purpose.',
    icon: Recycle,
    image:
      'https://barattini.coffee/wp-content/uploads/2025/05/20241212_100947-scaled.jpg',
  },
  {
    id: 'design',
    title: 'Design',
    description:
      'Our designers create functional, beautiful concepts that transform waste material into desirable furniture.',
    icon: Pencil,
    image:
      'https://barattini.coffee/wp-content/uploads/2025/05/WhatsApp-Image-2022-05-03-at-12.52.43-AM.jpeg',
  },
  {
    id: 'craft',
    title: 'Craftsmanship',
    description:
      'Skilled artisans carefully clean, cut, shape, and finish each tyre, turning raw materials into refined pieces.',
    icon: Hammer,
    image:
      'https://barattini.coffee/wp-content/uploads/2025/05/20220413_131306-2-scaled.jpg',
  },
  {
    id: 'result',
    title: 'Final Product',
    description:
      'The completed furniture combines sustainability with style, creating unique pieces that make a statement.',
    icon: CheckCircle,
    image:
      'https://barattini.coffee/wp-content/uploads/2025/05/WhatsApp-Image-2023-05-16-at-14.17.23-2.jpeg',
  },
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState('collect');

  const activeStepData = steps.find((step) => step.id === activeStep);

  return (
    <section className="py-16 md:py-24 bg-tfa-gray/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From waste to wonder - discover how we transform discarded tyres
            into beautiful, functional furniture through our meticulous process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Process Steps */}
          <div className="space-y-6">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <button
                  onClick={() => setActiveStep(step.id)}
                  className={cn(
                    'w-full flex items-start gap-4 p-4 text-left rounded-lg transition-all',
                    activeStep === step.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white hover:bg-gray-50'
                  )}
                >
                  <div
                    className={cn(
                      'p-2 rounded-full',
                      activeStep === step.id ? 'bg-white/20' : 'bg-primary/10'
                    )}
                  >
                    <step.icon
                      className={cn(
                        'h-6 w-6',
                        activeStep === step.id ? 'text-white' : 'text-primary'
                      )}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p
                      className={
                        activeStep === step.id
                          ? 'text-white/80'
                          : 'text-gray-600'
                      }
                    >
                      {step.description}
                    </p>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            {activeStepData && (
              <Image
                src={activeStepData.image}
                alt={activeStepData.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-all duration-500"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium">
                {activeStepData?.title}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
