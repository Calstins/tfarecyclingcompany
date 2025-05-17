import HeroSlider from '@/components/home/HeroSlider';
import FeaturedProducts from '@/components/home/FeaturedProduct';
import AboutPreview from '@/components/home/AboutPreview';
import CallToAction from '@/components/home/CallToAction';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ProcessSection from '@/components/home/ProcessSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TFA - Sustainable Furniture From Recycled Tyres',
  description:
    'TFA transforms waste tyres into beautiful, functional furniture for homes and workspaces. Explore our eco-friendly chairs, tables, and custom décor.',
};

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutPreview />
      <FeaturedProducts />
      <ProcessSection />
      <TestimonialsSection />
      <CallToAction />
    </>
  );
}
