import { Search, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-villa.jpg';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury modern villa with infinity pool at twilight"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="animate-fade-up text-primary font-body text-sm tracking-[0.4em] uppercase mb-6">
          Redefining Luxury Real Estate
        </p>
        <h1 className="animate-fade-up delay-100 font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          Discover Luxury
          <br />
          <span className="text-gradient-gold">Living</span>
        </h1>
        <p className="animate-fade-up delay-200 font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Experience the pinnacle of architectural excellence and timeless elegance.
          Your dream home awaits in the world's most prestigious locations.
        </p>
        <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#projects" className="btn-luxury rounded-sm flex items-center justify-center gap-2">
            Explore Projects <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn-outline-luxury rounded-sm flex items-center justify-center gap-2">
            Contact Us
          </a>
        </div>

        <div className="animate-fade-up delay-400 glass rounded-lg p-3 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Search by location, project, or type..."
              className="flex-1 bg-secondary/50 border-0 rounded px-5 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <select className="bg-secondary/50 rounded px-4 py-3 text-sm font-body text-muted-foreground focus:outline-none">
              <option>All Types</option>
              <option>Villa</option>
              <option>Penthouse</option>
              <option>Mansion</option>
            </select>
            <button className="btn-luxury rounded flex items-center justify-center gap-2 px-6">
              <Search size={16} /> Search
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
