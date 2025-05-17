import { Metadata } from 'next';
import ImageGallery from '@/components/gallery/ImageGallery';
import VideoGallery from '@/components/gallery/VideoGallery';

export const metadata: Metadata = {
  title: 'Gallery | TFA',
  description:
    'Explore our gallery showcasing beautiful furniture made from recycled tyres. See our innovative designs and craftsmanship in action.',
};

// Gallery image data
const galleryImages = [
  {
    src: 'https://barattini.coffee/wp-content/uploads/2025/05/20241212_101635-scaled.jpg',
    width: 2560,
    height: 1920,
    alt: 'Executive tyre furniture presented to Lagos State Commissioner',
  },
  {
    src: 'https://barattini.coffee/wp-content/uploads/2025/05/IMG-20230212-WA0086.jpg',
    width: 1280,
    height: 960,
    alt: 'Tyre furniture showroom display',
  },
  {
    src: 'https://barattini.coffee/wp-content/uploads/2025/05/WhatsApp-Image-2022-05-03-at-12.52.43-AM.jpeg',
    width: 1600,
    height: 1200,
    alt: 'Innovative tyre chair design',
  },
  {
    src: 'https://barattini.coffee/wp-content/uploads/2025/05/WhatsApp-Image-2023-05-16-at-14.17.23-2.jpeg',
    width: 1600,
    height: 1200,
    alt: 'Completed tyre furniture set',
  },
  {
    src: 'https://barattini.coffee/wp-content/uploads/2025/05/WhatsApp-Image-2023-12-21-at-02.35.05.jpeg',
    width: 1600,
    height: 1200,
    alt: 'TFA workshop and production',
  },
  {
    src: 'https://barattini.coffee/wp-content/uploads/2025/05/20241212_101004-scaled.jpg',
    width: 2560,
    height: 1920,
    alt: 'Tyre furniture in official setting',
  },
  {
    src: 'https://barattini.coffee/wp-content/uploads/2025/05/20241212_101731-scaled.jpg',
    width: 2560,
    height: 1920,
    alt: 'Elegant tyre table with glass top',
  },
  {
    src: 'https://barattini.coffee/wp-content/uploads/2025/05/20250224_121655-scaled.jpg',
    width: 2560,
    height: 1920,
    alt: 'Custom tyre furniture installation',
  },
  {
    src: 'https://barattini.coffee/wp-content/uploads/2025/05/20241212_100947-scaled.jpg',
    width: 2560,
    height: 1920,
    alt: 'Executive tyre chair presented to officials',
  },
  {
    src: 'https://barattini.coffee/wp-content/uploads/2025/05/20240914_133654-scaled.jpg',
    width: 2560,
    height: 1920,
    alt: 'Tyre furniture manufacturing process',
  },
  {
    src: 'https://barattini.coffee/wp-content/uploads/2025/05/20240831_140751-scaled.jpg',
    width: 2560,
    height: 1920,
    alt: 'Completed tyre furniture pieces',
  },
  {
    src: 'https://barattini.coffee/wp-content/uploads/2025/05/20220413_131306-2-scaled.jpg',
    width: 2560,
    height: 1920,
    alt: 'Tyre ottoman and seating',
  },
  {
    src: 'https://barattini.coffee/wp-content/uploads/2025/05/20221102_142605-scaled.jpg',
    width: 2560,
    height: 1920,
    alt: 'Decorative tyre planter',
  },
  {
    src: 'https://barattini.coffee/wp-content/uploads/2025/05/20221005_125557-scaled.jpg',
    width: 2560,
    height: 1920,
    alt: 'Tyre mirror frame',
  },
];

// Gallery video data
const galleryVideos = [
  {
    url: 'https://www.instagram.com/reel/ClnRbGLK1_r/?igsh=MTdzeXBrMWp1bTBz',
    title: 'Tyre furniture crafting process',
    thumbnail:
      'https://barattini.coffee/wp-content/uploads/2025/05/20220413_131306-2-scaled.jpg',
  },
  {
    url: 'https://www.instagram.com/p/Cdn18MloJIe/?igsh=MTEwN243bjNyenk0YQ%3D%3D',
    title: 'Finished tyre furniture showcase',
    thumbnail:
      'https://barattini.coffee/wp-content/uploads/2025/05/WhatsApp-Image-2022-05-03-at-12.52.43-AM.jpeg',
  },
  {
    url: 'https://www.instagram.com/reel/Cq-dVMYrOnK/?igsh=MWlzcG4yNWc0cG9weg%3D%3D',
    title: 'Tyre furniture transformation',
    thumbnail:
      'https://barattini.coffee/wp-content/uploads/2025/05/WhatsApp-Image-2023-05-16-at-14.17.23-2.jpeg',
  },
  {
    url: 'https://www.instagram.com/reel/CwNrK6_MUxS/?igsh=MmpoOTg1MHlrZngz',
    title: 'Behind the scenes at TFA workshop',
    thumbnail:
      'https://barattini.coffee/wp-content/uploads/2025/05/WhatsApp-Image-2023-12-21-at-02.35.05.jpeg',
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-tfa-black to-tfa-gray text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our collection of handcrafted sustainable furniture made
              from recycled tyres. See our innovative designs, craftsmanship
              process, and finished pieces.
            </p>
          </div>
        </div>
      </section>

      {/* Images Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Product Images
          </h2>
          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* Videos Gallery */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Videos</h2>
          <VideoGallery videos={galleryVideos} />
        </div>
      </section>
    </>
  );
}
