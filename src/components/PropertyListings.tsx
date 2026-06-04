import { useState } from 'react';
import { MapPin, BedDouble, Bath, Maximize, Heart } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import ctaBg from '@/assets/cta-bg.jpg';
import aboutImage from '@/assets/about-image.jpg';

const allProperties = [
  { id: 1, image: property1, title: 'Salem Heights Penthouse', location: 'Hasthampatti, Salem', price: '₹2.5 Crore', type: 'Penthouse', beds: 4, baths: 4, sqft: '4,200' },
  { id: 2, image: property2, title: 'Palm Grove Villa', location: 'Saravanampatti, Coimbatore', price: '₹1.8 Crore', type: 'Villa', beds: 4, baths: 5, sqft: '3,500' },
  { id: 3, image: property3, title: 'Marina Vista Apartment', location: 'Adyar, Chennai', price: '₹3.2 Crore', type: 'Premium Apartment', beds: 3, baths: 3, sqft: '2,800' },
  { id: 4, image: gallery1, title: 'Orchard Retreat', location: 'Yercaud, Salem', price: '₹1.5 Crore', type: 'Villa', beds: 3, baths: 3, sqft: '2,500' },
  { id: 5, image: gallery3, title: 'Coimbatore Heritage Bungalow', location: 'RS Puram, Coimbatore', price: '₹4.5 Crore', type: 'Villa', beds: 5, baths: 5, sqft: '5,000' },
  { id: 6, image: ctaBg, title: 'The Royal Residency', location: 'Nungambakkam, Chennai', price: '₹12.0 Crore', type: 'Mansion', beds: 6, baths: 8, sqft: '8,500' },
  { id: 7, image: gallery2, title: 'Emerald Hill Estates', location: 'Steel Plant Road, Salem', price: '₹85 Lakhs', type: '3BHK', beds: 3, baths: 3, sqft: '1,800' },
  { id: 8, image: gallery4, title: 'Modern Zen Apartment', location: 'Peelamedu, Coimbatore', price: '₹1.2 Crore', type: 'Premium Apartment', beds: 2, baths: 2, sqft: '1,500' },
  { id: 9, image: aboutImage, title: 'Coastal Breeze Villa', location: 'ECR, Chennai', price: '₹7.5 Crore', type: 'Villa', beds: 4, baths: 4, sqft: '4,000' },
];

const types = ['All', 'Villa', '3BHK', 'Mansion', 'Premium Apartment', 'Penthouse'];

export default function PropertyListings() {
  const [activeType, setActiveType] = useState('All');
  const { ref, isVisible } = useScrollAnimation();

  const filtered = activeType === 'All' ? allProperties : allProperties.filter(p => p.type === activeType);

  return (
    <section id="properties" className="section-padding bg-background">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Exclusive Listings</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Premium Properties</h2>
          <div className="glow-line mt-4" />
        </div>

        <div className={`flex justify-center gap-3 mb-12 flex-wrap ${isVisible ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-6 py-2.5 text-xs font-body tracking-[0.15em] uppercase rounded-full transition-all duration-300 ${
                activeType === type
                  ? 'btn-luxury'
                  : 'glass text-muted-foreground hover:text-foreground'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((property, i) => (
            <div
              key={property.id}
              className={`luxury-card hover-lift group transition-all duration-700 ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(i + 1) * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={property.image}
                  alt={property.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width={800}
                  height={600}
                />
                <div className="absolute top-4 left-4 glass rounded px-3 py-1 text-xs font-body tracking-wider uppercase text-primary">
                  {property.type}
                </div>
                <button className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Save property">
                  <Heart size={16} className="text-foreground" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading text-lg font-semibold">{property.title}</h3>
                  <p className="text-primary font-heading font-bold text-lg">{property.price}</p>
                </div>
                <p className="flex items-center gap-1.5 text-muted-foreground text-sm font-body mb-4">
                  <MapPin size={14} className="text-primary" /> {property.location}
                </p>
                <div className="flex gap-4 text-xs text-muted-foreground font-body border-t border-border pt-4">
                  <span className="flex items-center gap-1.5"><BedDouble size={14} /> {property.beds} Beds</span>
                  <span className="flex items-center gap-1.5"><Bath size={14} /> {property.baths} Baths</span>
                  <span className="flex items-center gap-1.5"><Maximize size={14} /> {property.sqft} sqft</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
