import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Award, 
  History, 
  Target, 
  Eye, 
  ShieldCheck, 
  Gem, 
  Users, 
  Building2, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';
import luxuryMansion from '@/assets/luxury_mansion_exterior.png';
import luxuryLivingRoom from '@/assets/luxury_living_room.png';
import chatGptHero from '@/assets/chatgpt_hero.png';
import gallery4 from '@/assets/gallery-4.jpg';

const faqs = [
  {
    question: "How long has Apex been operating?",
    answer: "Apex has been a leader in luxury construction and estate management for over 30 years, originally founded in 1994 in Salem."
  },
  {
    question: "Do you provide turnkey solutions?",
    answer: "Yes, we specialize in complete turnkey projects—from initial architectural concepts in Chennai to luxury villa construction in Coimbatore."
  },
  {
    question: "What is your commitment to sustainability?",
    answer: "Our 'Green Apex' initiative ensures that we integrate solar power and rainwater harvesting in every modern build across Tamil Nadu."
  },
  {
    question: "Where are your primary project locations?",
    answer: "While headquartered in Salem, our portfolio spans across regional luxury hubs including Chennai and Coimbatore."
  }
];

export default function About() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: philosophyRef, isVisible: philosophyVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Preloader />
      <Navbar />
      <main className="bg-black text-white min-h-screen">
        
        {/* --- Premium Hero Section (Full Screen & User Requested High-Res Image) --- */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-white/5 bg-black">
          <div className="absolute inset-0 z-0">
            <img src={chatGptHero} className="w-full h-full object-cover scale-110 animate-slow-zoom" alt="About Apex" />
            {/* Standard subtle overlay for readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div ref={heroRef} className={`container mx-auto px-6 relative z-10 text-center pt-32 pb-12 md:pt-40 md:pb-20 transition-all duration-1000 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <span className="text-primary font-body text-xs tracking-[0.5em] uppercase font-bold mb-6 block">Our Heritage</span>
            <h1 className="font-heading text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Crafting The <br /> <span className="text-gradient-gold italic">Skyline of Excellence</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </section>

        {/* --- High Impact Stats --- */}
        <section className="pt-12 pb-20 border-b border-white/5" ref={statsRef}>
          <div className="container mx-auto px-6">
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-12 transition-all duration-1000 delay-300 ${statsVisible ? 'opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="text-center group">
                <p className="text-5xl md:text-7xl font-heading font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-500">30+</p>
                <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold">Years of Engineering</p>
              </div>
              <div className="text-center group">
                <p className="text-5xl md:text-7xl font-heading font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-500">500+</p>
                <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold">Luxury Residences</p>
              </div>
              <div className="text-center group">
                <p className="text-5xl md:text-7xl font-heading font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-500">15M+</p>
                <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold">Sq.Ft Developed</p>
              </div>
              <div className="text-center group">
                <p className="text-5xl md:text-7xl font-heading font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-500">12</p>
                <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold">Luxury Design Awards</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- The Philosophy (Story) --- */}
        <section className="py-32 overflow-hidden" ref={philosophyRef}>
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className={`lg:w-1/2 transition-all duration-1000 ${philosophyVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                <p className="text-primary font-body text-xs tracking-[0.4em] uppercase mb-6 font-bold">The Apex Journey</p>
                <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  Where Visionary Art <br /> Meets <span className="italic text-white underline decoration-primary/30">Structural Mastery</span>
                </h2>
                <p className="text-white/60 font-body font-light text-lg leading-relaxed mb-8">
                  Founded in 1994, Apex Luxury Estates began in Salem with a singular mission: to redefine the parameters of luxury living through uncompromising engineering. We don't just build homes; we curate lifestyles for the region's most discerning individuals.
                </p>
                <p className="text-white/60 font-body font-light text-lg leading-relaxed mb-10">
                  Our team of 200+ world-class architects, structural engineers, and interior designers work in perfect synergy to bring your dream homes to life. From hill-side villas in Yercaud to urban penthouses in Chennai, every project is a masterpiece of precision.
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-secondary flex items-center justify-center text-[10px] font-bold overflow-hidden">
                        <Users className="text-white opacity-40" size={18} />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs tracking-widest text-primary font-bold uppercase">Join 200+ Elite Clients</p>
                </div>
              </div>
              
              <div className={`lg:w-1/2 relative transition-all duration-1000 delay-300 ${philosophyVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border border-white/5">
                  <img src={luxuryLivingRoom} className="w-full h-auto" alt="Apex Mastery" />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 blur-[100px] -z-10 rounded-full" />
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 blur-[80px] -z-10 rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* --- Our Vision & Mission --- */}
        <section className="py-32 bg-secondary/5 relative" ref={valuesRef}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-24">
              <p className="text-primary font-body text-xs tracking-[0.4em] uppercase mb-4 font-bold">Purpose Driven</p>
              <h2 className="font-heading text-4xl md:text-6xl font-bold">Our <span className="italic-serif text-primary">Core Pillars</span></h2>
            </div>

            <div className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 ${valuesVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="luxury-card p-12 group hover:bg-secondary/20 transition-all duration-700 h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                  <Eye className="text-primary" size={32} />
                </div>
                <h3 className="text-3xl font-heading font-bold mb-6">Our Vision</h3>
                <p className="text-white/50 font-light leading-relaxed mb-8 text-lg">
                  To be the regional benchmark for architectural luxury, where our name is synonymous with engineering perfection and generational legacy.
                </p>
                <ul className="space-y-4">
                  {["Regional Growth", "Tectonic Innovation", "Generational Design"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-white/30">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="luxury-card p-12 group hover:bg-secondary/20 transition-all duration-700 h-full border-primary/30">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                  <Target className="text-primary" size={32} />
                </div>
                <h3 className="text-3xl font-heading font-bold mb-6">Our Mission</h3>
                <p className="text-white/50 font-light leading-relaxed mb-8 text-lg">
                  To execute every project with surgical precision, utilizing aerospace-grade materials to deliver enduring value and unparalleled aesthetic brilliance.
                </p>
                <ul className="space-y-4">
                  {["Customer Obsession", "Material Integrity", "Absolute Safety"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-white/30">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- Why Choose Apex (Expertise) --- */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-16">
              <div className="flex flex-col gap-6">
                 <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <ShieldCheck className="text-primary" size={24} />
                 </div>
                 <h4 className="text-xl font-bold">Unrivaled Safety</h4>
                 <p className="text-white/40 font-light text-sm leading-relaxed">Our 'Zero-Harm' policy isn't just a slogan—it's a rigorous framework integrated into every structural calculation and site visit.</p>
              </div>
              <div className="flex flex-col gap-6">
                 <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <History className="text-primary" size={24} />
                 </div>
                 <h4 className="text-xl font-bold">Heritage Timeline</h4>
                 <p className="text-white/40 font-light text-sm leading-relaxed">Across three decades, we have never missed a delivery deadline. Our legacy is built on the foundation of professional punctuality.</p>
              </div>
              <div className="flex flex-col gap-6">
                 <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Gem className="text-primary" size={24} />
                 </div>
                 <h4 className="text-xl font-bold">Artisan Finishing</h4>
                 <p className="text-white/40 font-light text-sm leading-relaxed">We source the world's most exclusive stone, timber, and glass, then hand-finish them to aerospace tolerances.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- FAQ Section (Accordion Style) --- */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-20">
               <p className="text-primary font-body text-xs tracking-[0.4em] uppercase mb-4 font-bold">Information Hub</p>
               <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Frequently Asked <span className="italic-serif text-primary">Questions</span></h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-white/10 rounded-2xl overflow-hidden mb-4 group transition-all duration-300">
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-8 text-left bg-secondary/5 hover:bg-secondary/20 transition-colors"
                  >
                    <span className="font-heading text-lg md:text-xl font-semibold">{faq.question}</span>
                    <ChevronDown className={`text-primary transition-transform duration-500 ${openFaq === index ? 'rotate-180' : ''}`} size={24} />
                  </button>
                  <div 
                    className={`transition-all duration-500 overflow-hidden ${openFaq === index ? 'max-h-96 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'}`}
                  >
                    <div className="p-8 pt-0 text-white/50 font-light leading-relaxed">
                       {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Premium CTA Section --- */}
        <section className="py-32 border-t border-white/5 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center relative z-10">
             <h2 className="font-heading text-4xl md:text-7xl font-bold mb-12">Ready to Build Your <br /> <span className="text-primary italic italic-serif">Apex Legacy?</span></h2>
             <div className="flex flex-wrap justify-center gap-6">
                <button className="btn-luxury py-5 px-16 group">
                  <span className="flex items-center gap-3">
                    CONSULT OUR ENGINEERS <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
                <button className="btn-outline-luxury py-5 px-16">VIEW OUR CATALOG</button>
             </div>
          </div>
          
          {/* Abstract Background Blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] -z-10 rounded-full animate-pulse-slow" />
        </section>

      </main>
      <Footer />
    </>
  );
}
