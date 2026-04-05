import { MapPin, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';

const projects = [
  {
    image: property1,
    name: 'The Pinnacle Tower',
    location: 'Manhattan, New York',
    highlight: 'Sky-high penthouses with panoramic city views',
  },
  {
    image: property2,
    name: 'Azure Shores',
    location: 'Maldives',
    highlight: 'Exclusive beachfront villas on private islands',
  },
  {
    image: property3,
    name: 'Solaris Heights',
    location: 'Dubai, UAE',
    highlight: 'Ultra-modern residences in the heart of downtown',
  },
];

export default function FeaturedProjects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="section-padding bg-background">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Portfolio</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="glow-line mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className={`group luxury-card hover-lift cursor-pointer transition-all duration-700 ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(i + 1) * 0.15}s` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight size={18} className="text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2">{project.name}</h3>
                <p className="flex items-center gap-1.5 text-primary text-sm font-body mb-2">
                  <MapPin size={14} /> {project.location}
                </p>
                <p className="text-muted-foreground text-sm font-body font-light">{project.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
