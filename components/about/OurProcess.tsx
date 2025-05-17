'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Truck,
  FilterX,
  Scissors,
  PaintBucket,
  Hammer,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const processSteps = [
  {
    id: 'collection',
    title: 'Collection',
    icon: Truck,
    description:
      'We source discarded tyres from various locations, diverting them from landfills where they would otherwise contribute to environmental issues.',
    details: [
      'Partnership with local garages and tyre centers',
      'Community collection drives',
      'Careful selection of tyres based on condition and suitability',
      'Sustainable transportation practices',
    ],
    image:
      'https://barattini.coffee/wp-content/uploads/2025/05/20241212_100947-scaled.jpg',
  },
  {
    id: 'sorting',
    title: 'Cleaning & Sorting',
    icon: FilterX,
    description:
      'Each tyre undergoes thorough cleaning and inspection. We sort them based on size, condition, and suitability for different furniture types.',
    details: [
      'Eco-friendly cleaning methods',
      'Removal of all contaminants',
      'Quality assessment of each tyre',
      'Categorization by potential use',
    ],
    image:
      'https://barattini.coffee/wp-content/uploads/2025/05/20240914_133654-scaled.jpg',
  },
  {
    id: 'cutting',
    title: 'Cutting & Shaping',
    icon: Scissors,
    description:
      'Skilled craftspeople cut and shape the tyres according to design specifications, transforming raw materials into the building blocks of beautiful furniture.',
    details: [
      'Precision cutting techniques',
      'Custom shaping for specific designs',
      'Structural reinforcement where needed',
      'Zero-waste approach to offcuts',
    ],
    image:
      'https://barattini.coffee/wp-content/uploads/2025/05/20221005_125557-scaled.jpg',
  },
  {
    id: 'finishing',
    title: 'Finishing & Painting',
    icon: PaintBucket,
    description:
      'Tyres are sanded, sealed, and finished with eco-friendly paints and coatings that ensure durability while maintaining our commitment to sustainability.',
    details: [
      'Non-toxic, low-VOC finishes',
      'Multiple layers for durability',
      'Custom color matching',
      'Weather-resistant sealants for outdoor pieces',
    ],
    image:
      'https://barattini.coffee/wp-content/uploads/2025/05/WhatsApp-Image-2023-05-16-at-14.17.23-2.jpeg',
  },
  {
    id: 'assembly',
    title: 'Assembly & Upholstery',
    icon: Hammer,
    description:
      'Components are carefully assembled and, where appropriate, enhanced with high-quality upholstery to create comfortable, functional, and beautiful furniture.',
    details: [
      'Robust joinery techniques',
      'Premium, durable upholstery materials',
      'Addition of glass, metal, or wood elements',
      'Ergonomic considerations for seating',
    ],
    image:
      'https://barattini.coffee/wp-content/uploads/2025/05/20220413_131306-2-scaled.jpg',
  },
  {
    id: 'quality',
    title: 'Quality Control',
    icon: CheckCircle,
    description:
      'Every piece undergoes rigorous quality checks to ensure it meets our high standards for durability, safety, comfort, and aesthetic appeal.',
    details: [
      'Weight-bearing tests for seating',
      'Stability assessment',
      'Visual inspection for finishing quality',
      'Functional testing for movable parts',
    ],
    image:
      'https://barattini.coffee/wp-content/uploads/2025/05/20240831_140751-scaled.jpg',
  },
];

const OurProcess = () => {
  const [expandedStep, setExpandedStep] = useState<string | null>(null);

  const toggleExpand = (stepId: string) => {
    if (expandedStep === stepId) {
      setExpandedStep(null);
    } else {
      setExpandedStep(stepId);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-tfa-gray/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-lg text-gray-700">
            From discarded tyres to beautiful furniture, our meticulous process
            transforms waste into functional art. Each step is guided by our
            commitment to quality, sustainability, and innovative design.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                'mb-6 overflow-hidden rounded-lg border bg-white transition-all',
                expandedStep === step.id ? 'shadow-md' : ''
              )}
            >
              {/* Step Header */}
              <button
                onClick={() => toggleExpand(step.id)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-gray-600 line-clamp-1 md:line-clamp-none">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  {expandedStep === step.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>

              {/* Step Content */}
              <div
                className={cn(
                  'transition-all duration-300 ease-in-out',
                  expandedStep === step.id
                    ? 'max-h-[1000px] opacity-100'
                    : 'max-h-0 opacity-0'
                )}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 pt-0">
                  <div>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start gap-2"
                        >
                          <span className="mt-1 text-primary">•</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative h-48 md:h-64 rounded-md overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(min-width: 768px) 384px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
