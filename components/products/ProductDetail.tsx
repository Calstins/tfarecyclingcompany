'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Share2,
  Truck,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatCurrency, capitalizeWords } from '@/lib/utils';
import QuoteRequestModal from './QuoteRequestModal';
import { Product } from '@/lib/types';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <section className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <nav className="text-sm text-gray-500">
            <ol className="flex flex-wrap items-center">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <span className="mx-2">/</span>
              <li>
                <Link
                  href="/products"
                  className="hover:text-primary transition-colors"
                >
                  Products
                </Link>
              </li>
              <span className="mx-2">/</span>
              <li>
                <Link
                  href={`/products?category=${product.category}`}
                  className="hover:text-primary transition-colors"
                >
                  {capitalizeWords(product.category)}
                </Link>
              </li>
              <span className="mx-2">/</span>
              <li className="text-gray-900 font-medium">{product.name}</li>
            </ol>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            {/* Main Image */}
            <div className="relative rounded-lg overflow-hidden bg-gray-100 h-[500px] mb-4">
              <Image
                src={product.images[currentImageIndex]}
                alt={product.name}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />

              {/* Image Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              {/* Tags */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {product.featured && (
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 text-xs font-medium rounded-full">
                    Featured
                  </span>
                )}
                {!product.inStock && (
                  <span className="bg-destructive text-destructive-foreground px-3 py-1 text-xs font-medium rounded-full">
                    Out of Stock
                  </span>
                )}
              </div>

              {/* Share Button */}
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: product.name,
                      text: product.description,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  }
                }}
                className="absolute bottom-4 right-4 bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Share product"
              >
                <Share2 className="h-5 w-5" />
              </button>
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-5 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative rounded-md overflow-hidden h-20 ${
                      currentImageIndex === index
                        ? 'ring-2 ring-primary'
                        : 'hover:opacity-80'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - Image ${index + 1}`}
                      fill
                      sizes="(min-width: 1024px) 10vw, 20vw"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-bold text-primary">
                {formatCurrency(product.price)}
              </span>
              {product.inStock ? (
                <span className="flex items-center text-green-600 text-sm font-medium">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  In Stock
                </span>
              ) : (
                <span className="text-red-600 text-sm font-medium">
                  Out of Stock
                </span>
              )}
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Product Details */}
            <div className="border-t border-b border-gray-200 py-6 mb-6">
              <h2 className="text-lg font-bold mb-4">Product Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Category
                  </h3>
                  <p className="text-gray-900">
                    {capitalizeWords(product.category)}
                  </p>
                </div>

                {Object.entries(product.dimensions).map(([key, value]) => (
                  <div key={key}>
                    <h3 className="text-sm font-medium text-gray-500">
                      {capitalizeWords(key.replace(/([A-Z])/g, ' $1'))}
                    </h3>
                    <p className="text-gray-900">{value}</p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                Features
              </h3>
              <ul className="list-disc pl-5 text-gray-900 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={() => setIsQuoteModalOpen(true)}
                className="flex-1"
                size="lg"
              >
                Request Quote
              </Button>

              <Button asChild variant="outline" className="flex-1" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Shipping Info */}
            <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
              <Truck className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium text-gray-900">
                  Shipping & Delivery
                </h3>
                <p className="text-sm text-gray-600">
                  We offer delivery throughout Lagos and can arrange shipping
                  nationwide. Contact us for more information on delivery
                  options and rates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">About This Product</h2>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: product.longDescription }}
          />
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-4">
            Interested in this product?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get in touch for pricing details, customization options, or to
            discuss your specific requirements.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => setIsQuoteModalOpen(true)} className="group">
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button asChild variant="outline">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Quote Request Modal */}
      <QuoteRequestModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        product={product}
      />
    </section>
  );
};

export default ProductDetail;
