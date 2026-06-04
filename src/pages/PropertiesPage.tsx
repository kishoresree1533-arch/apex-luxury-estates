import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import PropertyListings from '@/components/PropertyListings';

export default function PropertiesPage() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main className="min-h-screen bg-black">
        {/* Properties Hero */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden border-b border-primary/10 bg-secondary/5">
           <div className="absolute inset-0 z-0">
             {/* Glowing visual effect behind bg */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />
             <div className="absolute inset-0 bg-black/60" />
           </div>
           
           <div className="container mx-auto px-6 relative z-10 text-center animate-fade-up pt-24 md:pt-32">
              <p className="text-primary font-body text-sm tracking-[0.4em] uppercase mb-4">Curated Residences</p>
              <h1 className="font-heading text-6xl md:text-9xl font-bold mb-6 text-white drop-shadow-2xl italic-serif leading-none">
                 Tamil Nadu <span className="text-primary italic">Estates</span>
              </h1>
              <p className="max-w-2xl mx-auto text-white/40 font-body font-light text-lg md:text-xl leading-relaxed">
                 Explore our exclusive inventory of premium properties in Salem, Coimbatore, and Chennai, each selected for its architectural excellence.
              </p>
              <div className="glow-line mt-12 mx-auto" />
           </div>
        </section>

        {/* Global Catalog Section */}
        <section className="section-padding overflow-visible section-black relative">
            <div className="container mx-auto px-6 relative z-10">
                 <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <p className="text-primary font-body text-xs tracking-[0.4em] uppercase mb-4">Full Catalog</p>
                        <h2 className="font-heading text-4xl md:text-6xl font-bold text-white">Elite <span className="italic italic-serif text-primary underline underline-offset-8 decoration-1">Inventory</span></h2>
                    </div>
                 </div>
                 <PropertyListings />
            </div>
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] opacity-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] opacity-20 pointer-events-none" />
        </section>

        {/* Exclusive Inquiry Section */}
        <section className="py-32 bg-secondary/10 border-t border-white/5 relative overflow-hidden text-center">
             <div className="container mx-auto px-6 relative z-10">
                 <h2 className="font-heading text-4xl md:text-7xl font-bold text-white mb-12">Looking for <span className="text-primary italic">Off-Market?</span></h2>
                 <p className="text-white/40 max-w-xl mx-auto mb-16 font-light">Contact our private group for access to properties not listed in our public inventory.</p>
                 <button className="btn-primary py-5 px-16 text-sm tracking-[0.3em] font-bold">PRIVATE INQUIRY</button>
             </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
