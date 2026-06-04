import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import gallery2 from '@/assets/gallery-2.jpg';
import luxuryLivingRoom from '@/assets/luxury_living_room.png';
import luxuryBathroom from '@/assets/luxury_bathroom.png';
import luxuryKitchen from '@/assets/luxury_kitchen.png';

export default function Interiors() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      <Preloader />
      <Navbar />
      <main className="min-h-screen bg-black">
        <section className="section-padding overflow-visible pb-12 section-black pt-24 md:pt-32">
          <div className="max-w-7xl mx-auto px-6">
            <div ref={ref} className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Bespoke Aesthetic Interiors</p>
              <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 text-gradient-gold">Luxury Interiors</h1>
              <p className="max-w-2xl mx-auto text-muted-foreground font-body font-light text-lg">
                Crafting intimate sanctuaries that reflect your personality and elevate your everyday experience.
              </p>
              <div className="glow-line mt-8 mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-20 items-center mt-20">
              <div className="relative group overflow-hidden rounded-[2.5rem] aspect-square shadow-2xl">
                 <img src={luxuryLivingRoom} className="absolute inset-0 w-full h-full object-cover transition-transform [transition-duration:2s] group-hover:scale-105" alt="Luxury living room" />
                 <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all duration-700" />
                 <div className="absolute inset-0 border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="space-y-12">
                 <div className="group">
                    <span className="text-primary uppercase tracking-[0.2em] text-xs font-bold font-body">01</span>
                    <h3 className="text-3xl font-heading font-bold mb-4">Space Harmonization</h3>
                    <p className="text-muted-foreground font-light text-lg leading-relaxed">We optimize every inch of your residence to achieve a perfect flow of energy, light, and movement throughout the space.</p>
                 </div>
                 <div className="group">
                    <span className="text-primary uppercase tracking-[0.2em] text-xs font-bold font-body">02</span>
                    <h3 className="text-3xl font-heading font-bold mb-4">Material Excellence</h3>
                    <p className="text-muted-foreground font-light text-lg leading-relaxed">From rare Italian marble to exotic hardwoods and bespoke textiles, we source only the finest materials globally.</p>
                 </div>
                 <div className="group">
                    <span className="text-primary uppercase tracking-[0.2em] text-xs font-bold font-body">03</span>
                    <h3 className="text-3xl font-heading font-bold mb-4">Digital Pre-Visualization</h3>
                    <p className="text-muted-foreground font-light text-lg leading-relaxed">Experience your future interior in immersive photorealistic 3D before a single piece of furniture is placed.</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-black/40">
           <div className="max-w-7xl mx-auto px-6 text-center">
             <h2 className="text-4xl font-heading font-bold mb-16">Design Showcases</h2>
             <div className="grid md:grid-cols-3 gap-8">
               <div className="group relative overflow-hidden rounded-[2rem] aspect-[3/4] shadow-xl">
                 <img src={luxuryKitchen} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Luxury kitchen" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                 <div className="absolute bottom-6 left-6 text-left">
                   <h4 className="text-xl font-bold text-white mb-2 underline underline-offset-8 decoration-primary">Gourmet Cuisines</h4>
                 </div>
               </div>
               <div className="group relative overflow-hidden rounded-[2rem] aspect-[3/4] shadow-xl">
                 <img src={gallery2} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Luxury suite" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                 <div className="absolute bottom-6 left-6 text-left">
                   <h4 className="text-xl font-bold text-white mb-2 underline underline-offset-8 decoration-primary">Royal Suites</h4>
                 </div>
               </div>
               <div className="group relative overflow-hidden rounded-[2rem] aspect-[3/4] shadow-xl">
                 <img src={luxuryBathroom} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Luxury spa" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                 <div className="absolute bottom-6 left-6 text-left">
                   <h4 className="text-xl font-bold text-white mb-2 underline underline-offset-8 decoration-primary">Private Spas</h4>
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
