import { useRef, useEffect, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import aboutImage from '@/assets/about-image.jpg';
import ctaBg from '@/assets/cta-bg.jpg';
import luxuryMansionExterior from '@/assets/luxury_mansion_exterior.png';
import luxuryLivingRoom from '@/assets/luxury_living_room.png';

const baseProjects = [
  {
    image: property1,
    name: 'Apex Skyline Tower',
    location: 'Salem, Tamil Nadu',
    highlight: 'Ultra-modern 3BHK residences with city view',
  },
  {
    image: property2,
    name: 'Coimbatore Green Enclave',
    location: 'Saravanampatti, Coimbatore',
    highlight: 'Sustainable luxury villas in a gated community',
  },
  {
    image: property3,
    name: 'Chennai Ocean Breeze',
    location: 'Besant Nagar, Chennai',
    highlight: 'Exclusive beachfront apartments with infinity pool',
  },
  {
    image: luxuryMansionExterior,
    name: 'The Elite Mansion',
    location: 'Anna Nagar, Chennai',
    highlight: 'Architectural masterpiece with glass facade',
  },
  {
    image: gallery1,
    name: 'Salem Hilltop Retreat',
    location: 'Yercaud Road, Salem',
    highlight: 'Premium 2BHK units with mountain views',
  },
  {
    image: gallery2,
    name: 'Peelamedu Tech Park Residencies',
    location: 'Coimbatore',
    highlight: 'Smart homes for top-tier professionals',
  },
  {
    image: luxuryLivingRoom,
    name: 'Nungambakkam Sky Penthouse',
    location: 'Chennai',
    highlight: 'The ultimate in urban luxury living',
  },
  {
    image: gallery4,
    name: 'Hasthampatti Heritage Towers',
    location: 'Salem',
    highlight: 'A blend of traditional and modern architecture',
  },
  {
    image: aboutImage,
    name: 'RS Puram Grand Estate',
    location: 'Coimbatore',
    highlight: 'Palatial villas in the heart of the city',
  },
  {
    image: ctaBg,
    name: 'Guindy Business Gate Residences',
    location: 'Chennai',
    highlight: 'Premium living connected to the business hub',
  },
];

const projects = [...baseProjects, ...baseProjects];

export default function FeaturedProjects() {
  const { ref, isVisible } = useScrollAnimation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const autoScroll = (time: number) => {
      const container = scrollContainerRef.current;
      if (container && !isHovered) {
        // Delta time handling for consistent smooth speed regardless of frame rate
        const delta = time - lastTime;
        lastTime = time;
        
        // roughly 60px per second / 60 frames = 1px per frame. Using 0.04 per elapsed ms.
        container.scrollLeft += delta * 0.06;
        
        // Reset scroll when reaching the halfway point (the exact end of the first array clone)
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      } else {
        lastTime = time; // keep it updated while paused
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth * 0.8;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="pt-10 pb-20 md:pt-16 md:pb-32 bg-background overflow-hidden relative">
      <div ref={ref} className="max-w-7xl mx-auto px-6 mb-16">
        <div className={`text-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Portfolio</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="glow-line mt-4" />
        </div>
      </div>

      <div 
        className="relative w-full group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <button 
          onClick={() => scroll('left')}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 backdrop-blur border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80 hover:scale-105 active:scale-95"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 backdrop-blur border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80 hover:scale-105 active:scale-95"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-hidden gap-6 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-6 lg:px-12 pointer-events-auto"
        >
          {projects.map((project, i) => (
            <div
              key={`${project.name}-${i}`}
              className={`group/card relative overflow-hidden rounded-[1.5rem] cursor-pointer aspect-[4/5] w-[260px] md:w-[300px] lg:w-[320px] shrink-0 bg-background shadow-lg`}
            >
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform [transition-duration:1.2s] ease-out group-hover/card:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-700 opacity-90 group-hover/card:opacity-100" />

              {/* Premium Hover Popup (Top Right) */}
              <div className="absolute top-4 right-4 z-30 transition-all duration-500 ease-out opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0">
                <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                  <span className="text-white text-[10px] sm:text-xs font-semibold tracking-widest uppercase">Explore</span>
                  <ArrowUpRight size={14} className="text-primary" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 text-left z-10 flex flex-col justify-end">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white transition-colors duration-500 group-hover/card:text-primary mb-1 drop-shadow-md">
                  {project.name}
                </h3>
                <p className="text-white/80 text-sm font-body font-light line-clamp-2 drop-shadow-md">
                  {project.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
