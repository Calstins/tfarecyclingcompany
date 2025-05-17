import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://barattini.coffee/wp-content/uploads/2025/05/20221005_132835-scaled.jpg"
              alt="TFA furniture crafting process"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Sustainable Design
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Turning Waste into Wonder
              </h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>

            <p className="text-lg text-gray-700">
              At TFA, we believe in the transformative power of creative
              recycling. Our mission is to give used tyres a new lease on life
              by transforming them into innovative, stylish, and sustainable
              furniture.
            </p>

            <p className="text-lg text-gray-700">
              What started as a simple idea has grown into a passionate
              commitment to eco-conscious design and creative craftsmanship.
              Every product we craft is a reflection of our dedication to the
              environment and our love for bold, meaningful design.
            </p>

            <p className="text-lg text-gray-700">
              At TFA, we don't just recycle; we reimagine. Through our
              innovative process, we create furniture that tells a story of
              transformation and purpose, while providing exceptional quality
              and durability.
            </p>

            <Button asChild className="mt-4 group">
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
