import { Award, Users, Globe, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import aboutImage from '@/assets/about-image.jpg';

const stats = [
  { icon: Award, value: '25+', label: 'Years Experience' },
  { icon: Users, value: '3,000+', label: 'Happy Clients' },
  { icon: Globe, value: '40+', label: 'Global Locations' },
  { icon: TrendingUp, value: '$12B+', label: 'Property Value' },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={isVisible ? 'animate-slide-left' : 'opacity-0'}>
            <div className="relative">
              <img
                src={aboutImage}
                alt="Luxury real estate office"
                loading="lazy"
                className="rounded-lg w-full object-cover aspect-[4/5]"
                width={800}
                height={900}
              />
              <div className="absolute -bottom-6 -right-6 glass-strong rounded-lg p-6 hidden md:block">
                <p className="text-3xl font-heading font-bold text-gradient-gold">25+</p>
                <p className="text-sm text-muted-foreground font-body">Years of Excellence</p>
              </div>
            </div>
          </div>

          <div className={isVisible ? 'animate-slide-right' : 'opacity-0'}>
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Our Story</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Crafting Legacies in <span className="text-gradient-gold">Luxury</span>
            </h2>
            <p className="text-muted-foreground font-body font-light leading-relaxed mb-6">
              For over two decades, Élite Estates has been the trusted name in ultra-luxury real estate.
              We curate the world's most extraordinary properties, connecting discerning individuals
              with residences that transcend the ordinary.
            </p>
            <p className="text-muted-foreground font-body font-light leading-relaxed mb-10">
              Our commitment to excellence, unparalleled market knowledge, and bespoke concierge service
              ensure every client experience is nothing short of exceptional.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-lg p-5 text-center hover-lift transition-all duration-500">
                  <stat.icon className="mx-auto mb-2 text-primary" size={24} />
                  <p className="text-2xl font-heading font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-body tracking-wider uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
