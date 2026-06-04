import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Premium3DGallery from './Premium3DGallery';

import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';
import heroVilla from '@/assets/hero-villa.jpg';
import aboutImage from '@/assets/about-image.jpg';
import ctaBg from '@/assets/cta-bg.jpg';
import luxuryLivingRoom from '@/assets/luxury_living_room.png';
import luxuryMansionExterior from '@/assets/luxury_mansion_exterior.png';
import luxuryBathroom from '@/assets/luxury_bathroom.png';
import luxuryKitchen from '@/assets/luxury_kitchen.png';

const galleryImages = [
  { 
    src: gallery1, 
    alt: 'Pool area at night',
    category: 'VILLA EXTERIOR',
    title: 'Salem Heights',
    description: 'Immaculate pools designed for evening tranquility in the heart of Salem.'
  },
  { 
    src: luxuryMansionExterior, 
    alt: 'Mansion exterior',
    category: 'ULTRA MODERN',
    title: 'The Apex Manor',
    description: 'Bold architectural lines meet sustainable luxury in our most exclusive residence in Chennai.'
  },
  { 
    src: gallery2, 
    alt: 'Luxury kitchen',
    category: 'CULINARY ART',
    title: 'Chef\'s Sanctuary',
    description: 'State-of-the-art kitchens crafted with Italian marble, perfect for Coimbatore homes.'
  },
  { 
    src: luxuryLivingRoom, 
    alt: 'Master bedroom with city view',
    category: 'CITY LIVING',
    title: 'Nungambakkam Penthouse',
    description: 'Breathtaking 360-degree city views from our crowning Chennai collection.'
  },
  { 
    src: property2, 
    alt: 'Beachfront villa',
    category: 'COASTAL RETREAT',
    title: 'ECR Breeze',
    description: 'Wake up to the sound of waves in perfectly integrated indoor-outdoor spaces in Chennai.'
  },
  { 
    src: luxuryBathroom, 
    alt: 'Spa bathroom',
    category: 'WELLNESS OASIS',
    title: 'The Ivory Spa',
    description: 'Private retreats designed for rejuvenation, featuring custom stone baths.'
  },
  { 
    src: heroVilla, 
    alt: 'Infinity pool at twilight',
    category: 'HILLSIDE RETREAT',
    title: 'Yercaud Pavilion',
    description: 'Where the horizon of Salem meets true peace at the edge of the hills.'
  },
];

export default function GallerySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="gallery" className="relative bg-background py-12 md:py-20 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(234,179,8,0.05),transparent_50%)] pointer-events-none" />
      
      <div ref={ref} className="container mx-auto relative z-10 mb-6 md:mb-12">
        <div className={`text-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-primary italic font-heading text-lg md:text-xl mb-1 md:mb-2 drop-shadow-md">Discover the Unparalleled</p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-8 text-white drop-shadow-2xl">
            Our <span className="text-primary">Elite</span> Collection
          </h2>
        </div>
      </div>
      
      <div className="w-full h-full">
        <Premium3DGallery images={galleryImages} />
      </div>
    </section>
  );
}
