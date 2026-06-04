import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import GallerySection from '@/components/GallerySection';
import DomeGallery from '@/components/DomeGallery';
import AccordGallery from '@/components/AccordGallery';
import aboutImage from '@/assets/about-image.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import luxuryLivingRoom from '@/assets/luxury_living_room.png';
import luxuryMansion from '@/assets/luxury_mansion_exterior.png';
import luxuryKitchen from '@/assets/luxury_kitchen.png';
import luxuryBathroom from '@/assets/luxury_bathroom.png';
import { LayoutGrid, Box, Camera, Maximize2, Sparkles } from 'lucide-react';

export default function GalleryPage() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main className="min-h-screen bg-black">
        
        {/* --- Multi-Layer Premium Hero --- */}
        <section className="relative min-h-screen flex items-center overflow-hidden border-b border-white/5">
           <div className="absolute inset-0 z-0">
             <img src={aboutImage} className="w-full h-full object-cover animate-slow-zoom" alt="Gallery Hero" />
             <div className="absolute inset-0 bg-black/40" />
           </div>
           
           <div className="container mx-auto px-6 relative z-10 pt-24 md:pt-32">
              <div className="max-w-4xl">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="h-[1px] w-12 bg-primary/40" />
                    <p className="text-primary font-body text-[10px] tracking-[0.5em] uppercase font-bold">Curated Architectural Mastery</p>
                 </div>
                 <h1 className="font-heading text-6xl md:text-9xl font-bold mb-8 text-white drop-shadow-2xl italic-serif leading-none">
                    Visual <br/> <span className="text-primary italic">Symphony</span>
                 </h1>
                 <p className="max-w-xl text-white/50 font-body font-light text-lg md:text-xl leading-relaxed mb-12">
                    An exhibition of structural art, interior precision, and visionary landscapes. Each frame tells a story of unparalleled luxury.
                 </p>
                 <div className="flex gap-8">
                     <div className="flex flex-col">
                        <span className="text-primary font-heading text-2xl font-bold">128</span>
                        <span className="text-[9px] tracking-[0.2em] text-white/40 uppercase">Captures</span>
                     </div>
                     <div className="w-[1px] h-10 bg-white/10" />
                     <div className="flex flex-col">
                        <span className="text-primary font-heading text-2xl font-bold">360°</span>
                        <span className="text-[9px] tracking-[0.2em] text-white/40 uppercase">Immersion</span>
                     </div>
                 </div>
              </div>
           </div>

           {/* Floating architectural lines */}
           <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
               <div className="absolute h-[1px] w-full top-1/3 bg-primary/20 rotate-12 origin-right" />
               <div className="absolute h-[1px] w-full bottom-1/4 bg-primary/10 -rotate-6 origin-left" />
           </div>
        </section>

        {/* --- Discover the Unparalleled: Accordion Gallery --- */}
        <section className="section-padding bg-black relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-4 mb-4">
                            <Sparkles className="text-primary animate-pulse" size={20} />
                            <p className="text-primary font-body text-[10px] tracking-[0.5em] uppercase font-bold">Discover the Unparalleled</p>
                        </div>
                        <h2 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight">
                            Our <span className="italic italic-serif text-primary underline underline-offset-8 decoration-1">Elite</span> Collection
                        </h2>
                    </div>
                    <p className="text-white/30 max-w-sm text-sm font-light leading-relaxed italic">
                        Step into a realm of bespoke architectural wonders. Our curated collection redefines the limits of structural artistry.
                    </p>
                </div>

                <div className="mt-12">
                    <AccordGallery 
                      items={[
                        { 
                          id: '01', 
                          title: 'Apex Salem Heights', 
                          subtitle: 'A high-altitude structural masterpiece overlooking the Salem skyline.', 
                          image: luxuryMansion, 
                          category: 'ESTATE' 
                        },
                        { 
                          id: '02', 
                          title: 'Chennai Sanctuary', 
                          subtitle: 'Bespoke minimalist interior precision crafted for total immersion in Adyar.', 
                          image: luxuryLivingRoom, 
                          category: 'INTERIOR' 
                        },
                        { 
                          id: '03', 
                          title: 'Coimbatore Oasis', 
                          subtitle: 'Award-winning bathroom engineering where light meets pure crystalline form.', 
                          image: luxuryBathroom, 
                          category: 'FIXTURES' 
                        },
                        { 
                          id: '04', 
                          title: 'Salem Culinary Tech', 
                          subtitle: 'High-tech kitchen integration where tech-fusion meets elegance.', 
                          image: luxuryKitchen, 
                          category: 'ENGINEERING' 
                        },
                        { 
                          id: '05', 
                          title: 'Chennai Foundation', 
                          subtitle: 'Surgical attention to detail in high-end structural framing in Chennai.', 
                          image: gallery1, 
                          category: 'FOUNDATION' 
                        }
                      ]} 
                    />
                </div>
            </div>
        </section>

        {/* --- 3D Collective Section --- */}
        <section className="relative py-20 border-b border-white/5">
            <div className="container mx-auto px-6 mb-16">
                 <h2 className="text-5xl font-heading font-bold text-white italic-serif">3D <span className="text-primary italic">Collective</span></h2>
                 <p className="text-white/30 font-light italic mt-4">Exploring architectural depth through our high-end 3D visualizers.</p>
            </div>
            <div className="animate-fade-in">
                <GallerySection />
            </div>
        </section>

        {/* --- 360° Immersive Section --- */}
        <section className="relative py-32 bg-secondary/5">
            <div className="container mx-auto px-6 text-center mb-16">
                <h2 className="text-5xl font-heading font-bold mb-6 text-white italic-serif">Spherical <span className="text-primary italic">Reality</span></h2>
                <p className="text-white/30 font-light max-w-xl mx-auto italic">Step inside our visionary spaces through a high-definition 360° interactive view.</p>
            </div>
            <DomeGallery />
            
            <div className="mt-12 container mx-auto px-6 flex justify-center">
                 <div className="glass px-8 py-4 rounded-full border border-white/10 flex items-center gap-6">
                     <div className="flex items-center gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                         <span className="text-[9px] tracking-widest text-white/50 uppercase">DRAG TO EXPLORE</span>
                     </div>
                     <Maximize2 size={14} className="text-white/50" />
                 </div>
            </div>
        </section>

        {/* --- Curated Grid Showcase --- */}
        <section className="section-padding bg-black border-t border-white/5">
             <div className="container mx-auto px-6">
                 <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <p className="text-primary font-body text-[10px] tracking-[0.5em] uppercase mb-4">The Collective</p>
                        <h2 className="font-heading text-4xl md:text-6xl font-bold text-white">Artisan <span className="italic italic-serif text-primary underline underline-offset-8 decoration-1">Grid</span></h2>
                    </div>
                    <p className="text-white/30 max-w-sm text-sm font-light leading-relaxed text-right italic">
                        A detailed look into the materials, lighting, and textures that define our unique architectural identity.
                    </p>
                 </div>

                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                     {/* Item 1 */}
                     <div className="relative group overflow-hidden rounded-[2rem] aspect-[4/5] border border-white/5 transition-all duration-700 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(234,179,8,0.2)]">
                        <img 
                          src={gallery3} 
                          className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-110" 
                          alt="Precision Marble" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-700" />
                        <div className="absolute bottom-6 left-6 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                            <span className="text-primary text-[9px] tracking-[0.4em] font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">Detailing — 01</span>
                            <h4 className="text-white font-bold mt-2 text-lg md:text-xl drop-shadow-2xl">Precision Marble</h4>
                        </div>
                        {/* Premium Shine Layer */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                           <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-in-out" />
                        </div>
                     </div>

                     {/* Item 2 */}
                     <div className="relative group overflow-hidden rounded-[2rem] aspect-[4/5] border border-white/5 md:translate-y-12 transition-all duration-700 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(234,179,8,0.2)]">
                        <img 
                          src={gallery4} 
                          className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-110" 
                          alt="Facade Glass" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-700" />
                        <div className="absolute bottom-6 left-6 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                            <span className="text-primary text-[9px] tracking-[0.4em] font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">Detailing — 02</span>
                            <h4 className="text-white font-bold mt-2 text-lg md:text-xl drop-shadow-2xl">Facade Glass</h4>
                        </div>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                           <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-in-out" />
                        </div>
                     </div>

                     {/* Item 3 */}
                     <div className="relative group overflow-hidden rounded-[2rem] aspect-[4/5] border border-white/5 transition-all duration-700 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(234,179,8,0.2)]">
                        <img 
                          src={aboutImage} 
                          className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-110" 
                          alt="Lighting Design" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-700" />
                        <div className="absolute bottom-6 left-6 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                            <span className="text-primary text-[9px] tracking-[0.4em] font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">Detailing — 03</span>
                            <h4 className="text-white font-bold mt-2 text-lg md:text-xl drop-shadow-2xl">Lighting Design</h4>
                        </div>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                           <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-in-out" />
                        </div>
                     </div>

                     {/* Item 4 */}
                     <div className="relative group overflow-hidden rounded-[2rem] aspect-[4/5] border border-white/5 md:translate-y-12 transition-all duration-700 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(234,179,8,0.2)]">
                        <img 
                          src={gallery3} 
                          className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-110" 
                          alt="Master Tailoring" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-700" />
                        <div className="absolute bottom-6 left-6 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                            <span className="text-primary text-[9px] tracking-[0.4em] font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">Detailing — 04</span>
                            <h4 className="text-white font-bold mt-2 text-lg md:text-xl drop-shadow-2xl">Master Tailoring</h4>
                        </div>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                           <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-in-out" />
                        </div>
                     </div>
                 </div>
             </div>
        </section>

        {/* --- Final CTA Section --- */}
        <section className="py-32 bg-black relative overflow-hidden text-center border-t border-white/5 mt-20">
             <div className="container mx-auto px-6 relative z-10">
                 <h2 className="font-heading text-4xl md:text-7xl font-bold text-white mb-12 italic-serif">Inspired by our <span className="text-primary italic">Vision?</span></h2>
                 <p className="text-white/30 max-w-xl mx-auto mb-16 font-light italic">Let's craft your personal masterpiece together.</p>
                 <button className="btn-primary py-5 px-16 text-sm tracking-[0.3em] font-bold">CONSULT OUR TEAM</button>
             </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
