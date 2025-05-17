import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { products } from '@/data/products';
import ProductDetail from '@/components/products/ProductDetail';
import RelatedProducts from '@/components/products/RelatedProducts';
import { any } from 'zod';

type ProductPageProps = {
  params: {
    slug: string;
  } & any;
};

// Generate metadata for each product page
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = products.find(
    (p) => (p.slug as any) === (params.slug as any)
  );

  if (!product) {
    return {
      title: 'Product Not Found | TFA',
      description: 'The product you are looking for could not be found.',
    };
  }

  return {
    title: `${product.name} | TFA`,
    description: product.description,
    openGraph: {
      title: `${product.name} | TFA`,
      description: product.description,
      images: [
        {
          url: product.images[0],
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(
    (p) => (p.slug as any) === (params.slug as any)
  );

  if (!product) {
    notFound();
  }

  // Find related products based on category and tags
  const relatedProducts = products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.category === product.category ||
          p.tags.some((tag) => product.tags.includes(tag)))
    )
    .slice(0, 3);

  return (
    <>
      <ProductDetail product={product} />
      <RelatedProducts products={relatedProducts} />
    </>
  );
}

// Generate static params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}
