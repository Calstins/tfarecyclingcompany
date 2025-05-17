import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import OurTeam from '@/components/about/OurTeam';
import OurValues from '@/components/about/OurValues';
import OurProcess from '@/components/about/OurProcess';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | TFA',
  description:
    'Learn about TFA, our mission, values, and the team behind our sustainable furniture made from recycled tyres. Discover our journey from waste to wonder.',
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-tfa-black to-tfa-gray text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About TFA
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              At TFA, we believe in turning waste into wonder. Our mission is to
              give used tyres a new lease on life by transforming them into
              innovative, stylish, and sustainable furniture.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  TFA was born from a simple yet powerful idea: that discarded
                  materials hold untapped potential for beauty and function.
                  What started as a small experiment with a single tyre has
                  grown into a passionate commitment to eco-conscious design and
                  creative craftsmanship.
                </p>
                <p>
                  Our founder recognized the growing problem of tyre waste in
                  Nigeria and saw an opportunity to make a difference. By
                  applying innovative design thinking and skilled artisanship,
                  we began creating furniture pieces that were not just
                  sustainable, but genuinely desirable.
                </p>
                <p>
                  Today, TFA has grown into a recognized leader in sustainable
                  furniture design. Our pieces have been featured in prestigious
                  locations and presented to government officials, showcasing
                  the transformative potential of creative recycling.
                </p>
                <p>
                  Every product we craft is a reflection of our dedication to
                  the environment and our love for bold, meaningful design. At
                  TFA, we don't just recycle; we reimagine.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://barattini.coffee/wp-content/uploads/2025/05/WhatsApp-Image-2023-12-21-at-02.35.05.jpeg"
                  alt="TFA workshop and furniture"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-tfa-gray/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-gray-700">
              We're on a mission to transform waste into wonder while creating
              positive environmental and social impact through innovative
              design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Our Mission
              </h3>
              <p className="text-gray-700 mb-4">
                To transform discarded tyres into beautiful, functional
                furniture that reduces waste, promotes sustainability, and
                creates meaningful employment in our communities.
              </p>
              <ul className="space-y-2 text-gray-700 list-disc pl-5">
                <li>Divert tyres from landfills and give them new purpose</li>
                <li>
                  Create sustainable, durable furniture with minimal
                  environmental impact
                </li>
                <li>
                  Inspire others to see the potential in materials often
                  considered waste
                </li>
                <li>
                  Provide skills training and employment in sustainable
                  craftsmanship
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Our Vision
              </h3>
              <p className="text-gray-700 mb-4">
                A world where waste materials are valued as resources, where
                sustainable design is accessible to all, and where creative
                recycling transforms both environments and lives.
              </p>
              <ul className="space-y-2 text-gray-700 list-disc pl-5">
                <li>
                  To be the leading brand in upcycled furniture across Africa
                </li>
                <li>
                  To demonstrate that sustainability and luxury can go hand in
                  hand
                </li>
                <li>
                  To expand our impact through training programs and knowledge
                  sharing
                </li>
                <li>
                  To create a circular economy model that others can replicate
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <OurValues />

      {/* Our Process Section */}
      <section id="process">
        <OurProcess />
      </section>

      {/* Our Team Section */}
      <OurTeam />

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience TFA
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to bring sustainable style into your space? Explore our
            collection or get in touch for custom creations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="group text-base"
            >
              <Link href="/products">
                Browse Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="group text-base bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
