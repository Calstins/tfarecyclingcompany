'use client';

import { useRouter } from 'next/navigation';
import { capitalizeWords } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { formatCurrency } from '@/lib/utils';
import { ProductCategory } from '@/lib/types';
import { useCallback } from 'react';
import { Search, X } from 'lucide-react';

interface ProductFiltersProps {
  categories: ProductCategory[];
  selectedCategory: ProductCategory | 'all';
  setSelectedCategory: (category: ProductCategory | 'all') => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  minPrice: number;
  maxPrice: number;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

export const ProductFilters = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  minPrice,
  maxPrice,
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
}: ProductFiltersProps) => {
  const router = useRouter();

  const handleCategoryChange = useCallback(
    (category: ProductCategory | 'all') => {
      setSelectedCategory(category);

      // Update URL query parameters
      if (category === 'all') {
        const url = new URL(window.location.href);
        url.searchParams.delete('category');
        router.push(url.pathname + url.search);
      } else {
        router.push(`/products?category=${category}`);
      }
    },
    [router, setSelectedCategory]
  );

  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange([minPrice, maxPrice]);
    setSearchQuery('');
    setSortBy('featured');

    // Clear URL parameters
    router.push('/products');
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 sticky top-24">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold">Filters</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="text-gray-500 hover:text-gray-900"
        >
          Reset
        </Button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <Label htmlFor="search" className="text-sm font-medium mb-2 block">
          Search
        </Label>
        <div className="relative">
          <Input
            id="search"
            type="search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 flex items-center pr-8"
            >
              <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <Label htmlFor="category" className="text-sm font-medium mb-2 block">
          Category
        </Label>
        <Select
          value={selectedCategory}
          onValueChange={(value: any) => handleCategoryChange(value)}
        >
          <SelectTrigger id="category">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {capitalizeWords(category)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <Label htmlFor="price-range" className="text-sm font-medium">
            Price Range
          </Label>
          <span className="text-xs text-gray-500">
            {formatCurrency(priceRange[0])} - {formatCurrency(priceRange[1])}
          </span>
        </div>
        <Slider
          id="price-range"
          min={minPrice}
          max={maxPrice}
          step={1000}
          value={[priceRange[0], priceRange[1]]}
          onValueChange={handlePriceChange}
          className="my-4"
        />
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>{formatCurrency(minPrice)}</span>
          <span>{formatCurrency(maxPrice)}</span>
        </div>
      </div>

      {/* Sort By */}
      <div className="mb-6">
        <Label htmlFor="sort-by" className="text-sm font-medium mb-2 block">
          Sort By
        </Label>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger id="sort-by">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="name-asc">Name: A to Z</SelectItem>
            <SelectItem value="name-desc">Name: Z to A</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
