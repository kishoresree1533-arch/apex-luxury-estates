import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';

const images = [
  { src: gallery1, alt: 'Pool area at night', span: 'md:col-span-2' },
  { src: gallery2, alt: 'Luxury kitchen', span: 'md:row-span-2' },
  { src: gallery3, alt: 'Master bedroom with ocean view', span: '' },
  { src: gallery4, alt: 'Spa bathroom', span: 'md:row-span-2' },
  { src: property1, alt: 'Penthouse living room', span: '' },
  { src: property2, alt: 'Beachfront villa', span: 'md:col-span-2' },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      <section id="gallery" className="section-padding bg-background">
        <div ref={ref} className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Showcase</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Gallery</h2>
            <div className="glow-line mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {images.map((img, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-lg cursor-pointer ${img.span} ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-500 flex items-center justify-center">
                  <ZoomIn size={28} className="text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-6 animate-fade-in" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors" onClick={() => setLightbox(null)} aria-label="Close">
            <X size={32} />
          </button>
          <img src={lightbox} alt="Gallery preview" className="max-w-full max-h-[85vh] object-contain rounded-lg" />
        </div>
      )}
    </>
  );
}
