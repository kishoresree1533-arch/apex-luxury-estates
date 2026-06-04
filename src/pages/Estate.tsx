import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import PropertyListings from '@/components/PropertyListings';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import heroVilla from '@/assets/hero-villa.jpg';
import luxuryMansionExterior from '@/assets/luxury_mansion_exterior.png';

export default function Estate() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      <Preloader />
      <Navbar />
      <main className="min-h-screen bg-black">
        <section className="section-padding overflow-visible pb-12 section-black pt-24 md:pt-32">
          <div className="max-w-7xl mx-auto px-6">
            <div ref={ref} className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Tamil Nadu Elite Real Estate</p>
              <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 text-gradient-gold">Luxury Estate</h1>
              <p className="max-w-2xl mx-auto text-muted-foreground font-body font-light text-lg">
                Exclusive access to the most coveted luxury residences across Salem, Coimbatore, and Chennai.
              </p>
              <div className="glow-line mt-8 mx-auto" />
            </div>

            <div className="relative group overflow-hidden rounded-[3rem] h-[350px] md:h-[500px] mb-24 shadow-2xl">
               <img src={heroVilla} className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" alt="Luxury estate" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
               <div className="absolute bottom-12 left-12">
                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">Curated Listings</h2>
                 <p className="text-white/70 max-w-lg font-light">Only the most exclusive properties make it onto our list. We prioritize location, design, and investment potential.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Reusing existing PropertyListings component as a base, but specialized for this page */}
        <section className="bg-black/20">
          <PropertyListings />
        </section>

        <section className="section-padding">
           <div className="max-w-7xl mx-auto px-6">
             <div className="grid md:grid-cols-2 gap-20 items-center">
               <div className="space-y-10 order-2 md:order-1">
                 <div className="p-8 luxury-card border-l-4 border-l-primary group">
                    <h3 className="text-2xl font-bold mb-3">Private Acquisitions</h3>
                    <p className="text-muted-foreground font-light">Working as your dedicated partner for off-market treasures and sensitive transactions.</p>
                 </div>
                 <div className="p-8 luxury-card border-l-4 border-l-primary group">
                    <h3 className="text-2xl font-bold mb-3">Investment Consulting</h3>
                    <p className="text-muted-foreground font-light">Sophisticated market analysis to ensure your high-net-worth real estate portfolio continues to appreciate.</p>
                 </div>
                 <div className="p-8 luxury-card border-l-4 border-l-primary group">
                    <h3 className="text-2xl font-bold mb-3">Premier Network</h3>
                    <p className="text-muted-foreground font-light">Connected with the most elite real estate partners across Tamil Nadu and beyond.</p>
                 </div>
               </div>
               <div className="order-1 md:order-2">
                 <div className="relative group rounded-[2.5rem] overflow-hidden aspect-square border border-white/5">
                   <img src={luxuryMansionExterior} className="absolute inset-0 w-full h-full object-cover transition-transform [transition-duration:2s] group-hover:scale-110" alt="Mansion detail" />
                   <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 </div>
               </div>
             </div>
           </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
