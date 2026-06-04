import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import aboutImage from '@/assets/about-image.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import luxuryLivingRoom from '@/assets/luxury_living_room.png';
import luxuryMansionExterior from '@/assets/luxury_mansion_exterior.png';
import luxuryBathroom from '@/assets/luxury_bathroom.png';
import luxuryKitchen from '@/assets/luxury_kitchen.png';
import engineersSunset from '@/assets/engineers-sunset.png';
import { HardHat, ShieldCheck, Zap, Diamond, Globe, Layers, ArrowRight, MoveHorizontal } from 'lucide-react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import constructionHero from '@/assets/construction-hero.png';
import chatGptHero from '@/assets/chatgpt_hero.png';
import luxuryMansion from '@/assets/luxury_mansion_exterior.png';

export default function Construction() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <>
      <Preloader />
      <Navbar />
      <main className="min-h-screen bg-black">
        
        {/* --- Hero Section --- */}
        <section className="relative min-h-[70vh] md:min-h-[85vh] flex flex-col justify-center overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0">
             <img src={engineersSunset} className="w-full h-full object-cover scale-105 animate-slow-zoom" alt="Engineers Planning at Sunset" />
             {/* Standard overlay for texture without merging to black */}
             <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div ref={headerRef} className={`container mx-auto px-6 relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 transition-all duration-1000 ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <p className="text-primary font-body text-sm tracking-[0.5em] uppercase mb-4 animate-pulse-slow">Artisan Engineering</p>
            <h1 className="font-heading text-6xl md:text-9xl font-bold mb-6 text-white drop-shadow-2xl italic-serif leading-tight">
              Building <br/> <span className="text-primary italic">Excellence</span>
            </h1>
            <p className="max-w-2xl text-white/60 font-body font-light text-lg md:text-xl leading-relaxed">
              Where visionary architecture meets flawless execution. We redefine the skyline through advanced structural engineering and meticulous craftsmanship.
            </p>
            <div className="mt-12 flex flex-wrap gap-6">
                <button className="btn-primary py-4 px-10 text-sm tracking-widest font-bold">START A BUILD</button>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-primary/40" />
                  <span className="text-xs tracking-widest text-primary font-bold whitespace-nowrap">EST. 1994</span>
                </div>
            </div>
          </div>
        </section>

        {/* --- Key Metrics Section --- */}
        <section className="py-20 border-b border-white/5 bg-secondary/5" ref={statsRef}>
            <div className="container mx-auto px-6">
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-12 text-center transition-all duration-700 ${statsVisible ? 'opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <div>
                        <p className="text-primary font-heading text-4xl md:text-5xl font-bold mb-2">250+</p>
                        <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Elite Projects</p>
                    </div>
                    <div>
                        <p className="text-primary font-heading text-4xl md:text-5xl font-bold mb-2">15M+</p>
                        <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Built area ft²</p>
                    </div>
                    <div>
                        <p className="text-primary font-heading text-4xl md:text-5xl font-bold mb-2">42</p>
                        <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Global Awards</p>
                    </div>
                    <div>
                        <p className="text-primary font-heading text-4xl md:text-5xl font-bold mb-2">0</p>
                        <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Safety Incidents</p>
                    </div>
                </div>
            </div>
        </section>

        {/* --- Engineering Services Section --- */}
        <section className="section-padding section-black relative overflow-hidden" ref={servicesRef}>
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div className="max-w-2xl">
                    <p className="text-primary font-body text-xs tracking-[0.4em] uppercase mb-4">Foundation of Trust</p>
                    <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">Structural <span className="italic italic-serif text-primary">Mastery</span></h2>
                </div>
                <p className="text-white/40 max-w-sm text-sm font-light leading-relaxed">
                    Our technical capabilities span from foundational earthworks to high-precision finishing, ensuring every square inch exceeds international standards.
                </p>
            </div>

            <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${servicesVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                {/* Construction Card 1 - Safety */}
                <div className="relative luxury-card p-12 group bg-secondary/10 hover:bg-secondary/20 transition-all duration-700 min-h-[400px] flex flex-col justify-between overflow-hidden">
                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-10 border border-primary/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(234,179,8,0.1)]">
                            <ShieldCheck className="text-primary" size={32} />
                        </div>
                        <h3 className="text-3xl font-heading font-bold text-white mb-6 group-hover:text-primary transition-colors">Unrivaled <br/><span className="italic italic-serif">Safety</span></h3>
                        <p className="text-white/50 font-body font-light leading-relaxed text-sm mb-6">
                            Our 'Zero-Harm' policy isn't just a slogan—it's a rigorous framework integrated into every structural calculation and site visit.
                        </p>
                    </div>
                    
                    {/* Background Watermark */}
                    <span className="absolute -bottom-8 -right-4 text-9xl font-heading font-black text-white/[0.03] select-none group-hover:text-primary/[0.05] transition-colors pointer-events-none">01</span>
                    
                    <div className="h-[1px] w-0 group-hover:w-full bg-primary/40 transition-all duration-700" />
                </div>

                {/* Construction Card 2 - Heritage */}
                <div className="relative luxury-card p-12 group bg-secondary/10 hover:bg-secondary/20 transition-all duration-700 min-h-[400px] flex flex-col justify-between overflow-hidden border border-primary/20">
                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-10 border border-primary/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(234,179,8,0.1)]">
                            <Layers className="text-primary" size={32} />
                        </div>
                        <h3 className="text-3xl font-heading font-bold text-white mb-6 group-hover:text-primary transition-colors">Heritage <br/><span className="italic italic-serif">Timeline</span></h3>
                        <p className="text-white/50 font-body font-light leading-relaxed text-sm mb-6">
                            Across three decades, we have never missed a delivery deadline. Our legacy is built on the foundation of professional punctuality.
                        </p>
                    </div>
                    
                    {/* Background Watermark */}
                    <span className="absolute -bottom-8 -right-4 text-9xl font-heading font-black text-white/[0.03] select-none group-hover:text-primary/[0.05] transition-colors pointer-events-none">02</span>
                    
                    <div className="h-[1px] w-0 group-hover:w-full bg-primary/40 transition-all duration-700" />
                </div>

                {/* Construction Card 3 - Finishing */}
                <div className="relative luxury-card p-12 group bg-secondary/10 hover:bg-secondary/20 transition-all duration-700 min-h-[400px] flex flex-col justify-between overflow-hidden">
                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-10 border border-primary/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(234,179,8,0.1)]">
                            <Diamond className="text-primary" size={32} />
                        </div>
                        <h3 className="text-3xl font-heading font-bold text-white mb-6 group-hover:text-primary transition-colors">Artisan <br/><span className="italic italic-serif">Finishing</span></h3>
                        <p className="text-white/50 font-body font-light leading-relaxed text-sm mb-6">
                            We source the world's most exclusive stone, timber, and glass, then hand-finish them to aerospace tolerances.
                        </p>
                    </div>
                    
                    {/* Background Watermark */}
                    <span className="absolute -bottom-8 -right-4 text-9xl font-heading font-black text-white/[0.03] select-none group-hover:text-primary/[0.05] transition-colors pointer-events-none">03</span>
                    
                    <div className="h-[1px] w-0 group-hover:w-full bg-primary/40 transition-all duration-700" />
                </div>
            </div>
          </div>
        </section>

        {/* --- Mastery In Motion (Before/After Slider) --- */}
        <section className="section-padding section-black bg-black relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p className="text-primary font-body text-xs tracking-[0.4em] uppercase mb-4 animate-pulse-slow">The Transformation</p>
              <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">Mastery in <span className="italic italic-serif text-primary">Motion</span></h2>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                Drag the interactive slider below to witness the seamless transition from our precise structural engineering to the finished luxury architectural masterpiece.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <BeforeAfterSlider 
                beforeImage={luxuryMansion} 
                afterImage={luxuryMansion} 
                beforeLabel="Architectural Concept"
                afterLabel="Completed Reality"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-20">
               {[
                 { title: "Precision Alignment", desc: "Laser-guided structural placement ensuring millimeter-perfect accuracy." },
                 { title: "Material Fusion", desc: "A flawless integration of aerospace-grade steel and hand-picked Italian marble." },
                 { title: "Enduring Finish", desc: "Cured by artisans to withstand environmental stress for over 100 years." }
               ].map((item, idx) => (
                 <div key={idx} className="flex flex-col gap-4 border-l border-primary/20 pl-8 group">
                    <h4 className="text-white font-bold text-lg group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed font-light">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* --- Process Section --- */}
        <section className="section-padding bg-background relative overflow-hidden" ref={processRef}>
           <div className="container mx-auto px-6 relative z-10">
             <div className="max-w-7xl mx-auto text-center mb-24">
                <p className="text-primary font-body text-xs tracking-[0.4em] uppercase mb-4">The Path To Perfection</p>
                <h2 className="font-heading text-5xl md:text-7xl font-bold mb-12">The <span className="italic italic-serif text-primary underline underline-offset-8 decoration-1">Apex</span> Journey</h2>
             </div>
             
             <div className={`grid md:grid-cols-4 gap-8 transition-all duration-1000 ${processVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full border border-primary/40 flex items-center justify-center text-primary font-heading text-2xl mb-8 bg-black group hover:bg-primary hover:text-black transition-all duration-500 shadow-[0_0_30px_rgba(234,179,8,0.1)]">01</div>
                    <h4 className="text-xl font-bold mb-4 text-white">Inception</h4>
                    <p className="text-white/40 text-sm font-light text-center leading-relaxed">Strategic planning and architectural fusion to ensure structural viability.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full border border-primary/40 flex items-center justify-center text-primary font-heading text-2xl mb-8 bg-black group hover:bg-primary hover:text-black transition-all duration-500 shadow-[0_0_30px_rgba(234,179,8,0.1)]">02</div>
                    <h4 className="text-xl font-bold mb-4 text-white">Substructure</h4>
                    <p className="text-white/40 text-sm font-light text-center leading-relaxed">Advanced earthworks and precision-poured foundations using grade A materials.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full border border-primary/40 flex items-center justify-center text-primary font-heading text-2xl mb-8 bg-black group hover:bg-primary hover:text-black transition-all duration-500 shadow-[0_0_30px_rgba(234,179,8,0.1)]">03</div>
                    <h4 className="text-xl font-bold mb-4 text-white">Artisan Build</h4>
                    <p className="text-white/40 text-sm font-light text-center leading-relaxed">Expert framing and artisan masonry executed with unwavering focus on quality.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full border border-primary/40 flex items-center justify-center text-primary font-heading text-2xl mb-8 bg-black group hover:bg-primary hover:text-black transition-all duration-500 shadow-[0_0_30px_rgba(234,179,8,0.1)]">04</div>
                    <h4 className="text-xl font-bold mb-4 text-white">The Reveal</h4>
                    <p className="text-white/40 text-sm font-light text-center leading-relaxed">Precision finishing and rigorous QA signaling a new landmark completion.</p>
                </div>
             </div>
           </div>
        </section>

        {/* --- Sustainability Section --- */}
        <section className="section-padding section-white bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                            <img src={gallery4} className="w-full h-full object-cover" alt="Sustainable build" />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary p-8 rounded-[2rem] flex flex-col justify-center">
                            <Globe className="text-black mb-4" size={40} />
                            <p className="text-black font-bold text-lg leading-tight uppercase">BREEAM <br/> Gold Standard</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-primary font-body text-xs tracking-[0.4em] uppercase mb-4">Future Conscious</p>
                        <h2 className="font-heading text-4xl md:text-6xl font-bold text-black mb-8 leading-tight">Eco-Luxe <br/> Engineering</h2>
                        <p className="text-black/60 font-body font-light text-lg mb-8 leading-relaxed">
                            Luxurious living shouldn't come at the cost of the environment. Our "Green Apex" initiative integrates solar-glass facades, geothermal climate control, and recycled luxury materials into every project.
                        </p>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center shrink-0">
                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                </div>
                                <p className="text-black font-medium">95% Recycled Structural Steel</p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center shrink-0">
                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                </div>
                                <p className="text-black font-medium">Passive Filtration HVAC Systems</p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center shrink-0">
                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                </div>
                                <p className="text-black font-medium">Smart Water Reclaim Integration</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* --- Final CTA Section --- */}
        <section className="py-32 bg-black relative overflow-hidden">
             <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="font-heading text-4xl md:text-7xl font-bold text-white mb-12">Ready to Forge a <span className="text-primary italic">Legend?</span></h2>
                <button className="btn-primary py-5 px-16 text-sm tracking-[0.3em] font-bold">CONSULT OUR ENGINEERS</button>
             </div>
             
             {/* Decorative Background Elements */}
             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1px] bg-primary rotate-45" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1px] bg-primary -rotate-45" />
             </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
