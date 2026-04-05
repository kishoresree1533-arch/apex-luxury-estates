import { Waves, TreePine, ShieldCheck, Car, Dumbbell, Wifi, Utensils, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const amenities = [
  { icon: Waves, title: 'Infinity Pools', desc: 'Resort-style pools with breathtaking views' },
  { icon: TreePine, title: 'Private Gardens', desc: 'Lush landscaped grounds and terraces' },
  { icon: ShieldCheck, title: '24/7 Security', desc: 'State-of-the-art surveillance systems' },
  { icon: Car, title: 'Valet Parking', desc: 'Underground parking with concierge service' },
  { icon: Dumbbell, title: 'Fitness Center', desc: 'World-class gym and wellness facilities' },
  { icon: Wifi, title: 'Smart Home', desc: 'Integrated home automation technology' },
  { icon: Utensils, title: 'Private Chef', desc: 'Gourmet dining experiences at home' },
  { icon: Sparkles, title: 'Spa & Wellness', desc: 'In-residence spa and sauna facilities' },
];

export default function AmenitiesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-secondary/30">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Lifestyle</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Luxury Amenities</h2>
          <div className="glow-line mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((item, i) => (
            <div
              key={item.title}
              className={`group glass rounded-lg p-6 text-center hover-lift cursor-pointer transition-all duration-500 hover:border-primary/30 ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-sm font-semibold mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground font-body font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
