'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SlideContent } from '@/lib/types';

const slides: SlideContent[] = [
  {
    image:
      'https://barattini.coffee/wp-content/uploads/2025/05/20220512_215908-scaled.jpg',
    title: 'Sustainable Furniture for Modern Living',
    description:
      'Experience the perfect blend of eco-conscious design and functional beauty with our handcrafted tyre furniture.',
    buttonText: 'Explore Products',
    buttonLink: '/products',
  },
  {
    image:
      'https://barattini.coffee/wp-content/uploads/2025/05/table-and-chair.jpeg',
    title: 'Transform Waste Into Wonder',
    description:
      'We breathe new life into discarded tyres, creating unique pieces that tell a story of environmental responsibility.',
    buttonText: 'Our Process',
    buttonLink: '/about#process',
  },
  {
    image:
      'https://barattini.coffee/wp-content/uploads/2025/05/20220413_131306-2-scaled.jpg',
    title: 'Distinctive Design, Sustainable Materials',
    description:
      'Our handcrafted furniture combines bold design with eco-friendly practices for truly unique living spaces.',
    buttonText: 'View Gallery',
    buttonLink: '/gallery',
  },
  {
    image:
      'https://barattini.coffee/wp-content/uploads/2025/05/20241212_101640-scaled.jpg',
    title: 'Recognized Excellence',
    description:
      'Our innovative furniture has been presented to government officials and organizations committed to sustainability.',
    buttonText: 'Learn More',
    buttonLink: '/about',
  },
  {
    image:
      'https://barattini.coffee/wp-content/uploads/2025/05/20250224_121655-scaled.jpg',
    title: 'Custom Creations For Every Space',
    description:
      'From home lounges to executive offices, we create bespoke eco-friendly furniture for your unique needs.',
    buttonText: 'Request Quote',
    buttonLink: '/contact#quote',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500); // match transition duration
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500); // match transition duration
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000',
            currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          )}
        >
          {/* Image with overlay */}
          <div className="relative h-full w-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h1
                className={cn(
                  'text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-700 transform',
                  currentSlide === index
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                )}
              >
                {slide.title}
              </h1>
              <p
                className={cn(
                  'text-lg md:text-xl max-w-3xl mx-auto mb-8 transition-all duration-700 delay-300 transform',
                  currentSlide === index
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                )}
              >
                {slide.description}
              </p>
              {slide.buttonText && (
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className={cn(
                    'transition-all duration-700 delay-500 transform',
                    currentSlide === index
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0'
                  )}
                >
                  <Link href={slide.buttonLink || '#'}>{slide.buttonText}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              'h-2 w-2 rounded-full transition-all',
              currentSlide === index
                ? 'w-8 bg-secondary'
                : 'bg-white/50 hover:bg-white/80'
            )}
            onClick={() => {
              if (isAnimating) return;
              setIsAnimating(true);
              setCurrentSlide(index);
              setTimeout(() => setIsAnimating(false), 500);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
