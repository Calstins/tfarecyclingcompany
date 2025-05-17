'use client';

import { useState } from 'react';
import { Product, ProductCategory } from '@/lib/types';
import ProductCard from './ProductCard';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductsProps {
  products: Product[];
  searchQuery: string;
  selectedCategory: ProductCategory | 'all';
}

export const Products = ({
  products,
  searchQuery,
  selectedCategory,
}: ProductsProps) => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setIsLoading(false);
    }, 800);
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-bold mb-4">No products found</h3>
        <p className="text-gray-600">
          {searchQuery
            ? `No products matching "${searchQuery}"`
            : selectedCategory !== 'all'
            ? `No products found in the "${selectedCategory}" category`
            : 'No products available at the moment'}
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-bold">
          {products.length} {products.length === 1 ? 'Product' : 'Products'}{' '}
          Found
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.slice(0, visibleCount).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {visibleCount < products.length && (
        <div className="mt-12 text-center">
          <Button onClick={loadMore} disabled={isLoading} className="px-8">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : (
              `Load More (${products.length - visibleCount} remaining)`
            )}
          </Button>
        </div>
      )}
    </div>
  );
};
