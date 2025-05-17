'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/products';
import { ProductCategory } from '@/lib/types';

const categories: { value: ProductCategory; label: string }[] = [
  { value: 'tables', label: 'Tables' },
  { value: 'chairs', label: 'Chairs' },
  { value: 'sets', label: 'Sets' },
  { value: 'decor', label: 'Decor' },
];

const FeaturedProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    ProductCategory | 'all'
  >('all');
  const [visibleProducts, setVisibleProducts] = useState(
    products.filter((product) => product.featured)
  );

  useEffect(() => {
    if (selectedCategory === 'all') {
      setVisibleProducts(products.filter((product) => product.featured));
    } else {
      setVisibleProducts(
        products.filter(
          (product) => product.category === selectedCategory && product.featured
        )
      );
    }
  }, [selectedCategory]);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handcrafted eco-friendly furniture, where innovation
            meets sustainability. Each piece tells a unique story of
            transformation.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('all')}
            className="rounded-full"
          >
            All Products
          </Button>
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={
                selectedCategory === category.value ? 'default' : 'outline'
              }
              onClick={() => setSelectedCategory(category.value)}
              className="rounded-full"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProducts.length > 0 ? (
            visibleProducts
              .slice(0, 6)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500">
                No featured products in this category yet.
              </p>
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="group">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
