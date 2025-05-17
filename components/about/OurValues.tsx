'use client';

import { Leaf, Shield, Users, Award, Lightbulb, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      'We are committed to reducing waste and environmental impact through creative recycling and sustainable design practices.',
  },
  {
    icon: Award,
    title: 'Quality Craftsmanship',
    description:
      'We take pride in creating durable, well-crafted pieces that stand the test of time, combining function with beauty.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: `We constantly explore new techniques and designs to push the boundaries of what's possible with recycled materials.`,
  },
  {
    icon: Heart,
    title: 'Community Impact',
    description:
      'We create meaningful employment opportunities and share skills that empower local communities.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'We operate with transparency, honesty, and authenticity in all our relationships and business practices.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'We believe in the power of partnership and work closely with customers, suppliers, and communities.',
  },
];

const OurValues = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-gray-700">
            These core principles guide everything we do at TFA, from design and
            production to customer service and community engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-tfa-gray/5 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
