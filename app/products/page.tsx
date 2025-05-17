'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Products } from '@/components/products/Products';
import { ProductFilters } from '@/components/products/ProductFilter';
import { Product, ProductCategory } from '@/lib/types';
import { products } from '@/data/products';

export default function ProductsPage() {
  const searchParams = useSearchParams();

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<
    ProductCategory | 'all'
  >('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300000]);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const category = searchParams?.get('category') as ProductCategory | null;
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by price range
    result = result.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Sort products
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    setFilteredProducts(result);
  }, [selectedCategory, priceRange, sortBy, searchQuery]);

  // Unique categories
  const categories = [
    ...new Set(products.map((product) => product.category)),
  ] as ProductCategory[];

  // Min/Max prices
  const minPrice = Math.min(...products.map((p) => p.price));
  const maxPrice = Math.max(...products.map((p) => p.price));

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-tfa-black to-tfa-gray text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover our collection of handcrafted, sustainable furniture
              pieces made from recycled tyres. Each piece tells a unique story
              of transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full lg:w-64 shrink-0">
              <ProductFilters
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                minPrice={minPrice}
                maxPrice={maxPrice}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <Products
                products={filteredProducts}
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
