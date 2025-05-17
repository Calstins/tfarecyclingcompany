'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    content:
      "The quality and creativity of TFA's furniture is truly impressive. My tyre coffee table gets compliments from every guest. It's both a beautiful piece and a conversation starter about sustainability.",
    author: 'Adebayo Johnson',
    role: 'Interior Designer',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    content:
      "I was skeptical about how comfortable recycled tyre furniture would be, but TFA's lounge chair exceeded all my expectations. It's not just eco-friendly—it's genuinely comfortable and stylish!",
    author: 'Chioma Okafor',
    role: 'Homeowner',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    content:
      "As a business focused on sustainability, furnishing our office with TFA's products was a perfect choice. The executive set in our reception area showcases our values while providing exceptional quality.",
    author: 'Michael Ade',
    role: 'CEO, GreenTech Solutions',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 4,
    content:
      'The custom planters TFA created for our restaurant patio are beautiful, durable, and align perfectly with our eco-friendly brand. I appreciate that each piece is unique and has its own character.',
    author: 'Funmi Adeyemi',
    role: 'Restaurant Owner',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-zinc-950 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hear from people who have experienced the quality and uniqueness of
            our sustainable furniture solutions.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-12 left-0 md:-left-10 opacity-20">
            <Quote className="h-24 w-24 text-secondary" />
          </div>

          {/* Testimonials */}
          <div className="relative h-80">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 30,
                }}
                transition={{ duration: 0.5 }}
                className={cn(
                  'absolute inset-0 p-6 md:p-10 rounded-lg bg-tfa-gray/10 backdrop-blur-sm',
                  activeIndex === index ? 'z-10' : 'z-0'
                )}
              >
                <div className="flex flex-col h-full justify-between">
                  <p className="text-lg md:text-xl text-gray-200 italic">
                    &ldquo;{testimonial.content}&ldquo;
                  </p>

                  <div className="flex items-center gap-4 mt-6">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.author}</h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'h-2 w-2 rounded-full transition-all',
                  activeIndex === index ? 'w-8 bg-secondary' : 'bg-gray-500'
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
