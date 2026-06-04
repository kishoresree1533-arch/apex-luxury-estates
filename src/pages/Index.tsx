import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import AboutSection from '@/components/AboutSection';
import PropertyListings from '@/components/PropertyListings';
import AmenitiesSection from '@/components/AmenitiesSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';

const Index = () => {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <div className="section-black">
          <HeroSection />
        </div>
        <div className="section-black">
          <FeaturedProjects />
        </div>
        <div className="section-white">
          <AboutSection />
        </div>
        <div className="section-black">
          <PropertyListings />
        </div>
        <div className="section-white">
          <AmenitiesSection />
        </div>
        <div className="section-black">
          <GallerySection />
        </div>
        <div className="section-white">
          <TestimonialsSection />
        </div>
        <div className="section-black">
          <CTASection />
        </div>
        <div className="section-white">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
