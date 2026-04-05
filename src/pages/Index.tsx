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
        <HeroSection />
        <FeaturedProjects />
        <AboutSection />
        <PropertyListings />
        <AmenitiesSection />
        <GallerySection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
