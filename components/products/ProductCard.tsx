'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatCurrency } from '@/lib/utils';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <Link
        href={`/products/${product.slug}`}
        className="block relative h-64 overflow-hidden"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className={`object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              Out of Stock
            </span>
          </div>
        )}
        {product.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
              Featured
            </span>
          </div>
        )}
      </Link>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-900">
          <Link
            href={`/products/${product.slug}`}
            className="hover:text-primary transition-colors"
          >
            {product.name}
          </Link>
        </h3>

        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {product.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-primary">
            {formatCurrency(product.price)}
          </span>

          <Link
            href={`/products/${product.slug}`}
            className="flex items-center text-sm font-medium text-gray-600 hover:text-primary transition-colors group"
          >
            View Details
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Category Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
            {product.category}
          </span>
          {product.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
