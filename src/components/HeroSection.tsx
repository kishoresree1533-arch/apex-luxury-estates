import { ArrowRight, ChevronDown } from 'lucide-react';
import heroImage from '@/assets/construction-hero.png';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-white/5 bg-black">
      {/* Background with advanced gradient and cinematic zoom */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium architectural estate by Apex"
          className="w-full h-full object-cover transition-transform [transition-duration:3s] scale-105"
        />
        {/* Consistent overlay without bottom merging */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between pointer-events-none pt-32 pb-12 md:pt-40 md:pb-20">
        
        <div className="md:w-3/5 text-left pointer-events-auto">
          <div className="animate-fade-in mb-6">
            <span className="text-primary font-body text-sm tracking-[0.5em] uppercase font-bold border-l-2 border-primary pl-4">
              Apex Elite Portfolio
            </span>
          </div>

          <h1 className="animate-fade-up delay-100 font-heading text-6xl md:text-8xl font-bold leading-[1.1] mb-8 text-white drop-shadow-2xl">
            Where <span className="text-gradient-gold italic">Construction</span>
            <br />
            Meets <span className="text-white opacity-90 underline underline-offset-[12px] decoration-primary/30">Estate</span>
          </h1>
          
          <p className="animate-fade-up delay-200 font-body text-lg md:text-xl text-white/70 max-w-xl mb-10 font-light leading-relaxed">
            Crafting architectural masterpieces and managing the world's most 
            exclusive estates. Experience the synergy of fine engineering and 
            luxury sales.
          </p>

          <div className="animate-fade-up delay-300 flex flex-wrap gap-6 items-center">
            <a href="#projects" className="bg-primary text-navy font-bold text-xs tracking-[0.2em] uppercase rounded-full px-10 py-5 hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(234,179,8,0.3)]">
               Explore Collections
            </a>
            <a href="/estate" className="text-white hover:text-primary transition-all text-xs tracking-[0.2em] uppercase font-bold flex items-center gap-2 group">
              View Estate Listings <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

        {/* Floating Architectural Badge (Construction & Estate reference) */}
        <div className="hidden lg:flex flex-col items-center gap-4 animate-fade-in delay-500 opacity-60">
           <div className="w-[1px] h-32 bg-gradient-to-b from-transparent to-primary" />
           <div className="rotate-90 origin-center translate-y-12 whitespace-nowrap">
             <span className="text-[10px] tracking-[0.6em] uppercase text-primary font-bold">Engineering Excellence • 2026</span>
           </div>
        </div>
      </div>

      {/* Modern Scrolling Indicator - Tightened bottom position */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[8px] tracking-[0.5em] uppercase text-white/40 font-bold">Scroll to discover</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary via-primary/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

