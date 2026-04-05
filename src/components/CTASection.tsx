import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ctaBg from '@/assets/cta-bg.jpg';

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" loading="lazy" className="w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div ref={ref} className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <div className={isVisible ? 'animate-fade-up' : 'opacity-0'}>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Your Future Awaits</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Find Your Dream <span className="text-gradient-gold">Property</span> Today
          </h2>
          <p className="text-muted-foreground font-body font-light text-lg mb-10 max-w-xl mx-auto">
            Let our expert team guide you to the extraordinary residence you deserve.
          </p>
          <a href="#contact" className="btn-luxury rounded-sm inline-flex items-center gap-2 text-sm">
            Schedule a Consultation <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
