import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
  title?: string;
  description?: string;
}

interface Premium3DGalleryProps {
  images: GalleryImage[];
}

export default function Premium3DGallery({ images }: Premium3DGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, 5000);
    } else {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  const getNormalizedDiff = (index: number) => {
    let diff = index - activeIndex;
    if (Math.abs(diff) > images.length / 2) {
      diff = diff > 0 ? diff - images.length : diff + images.length;
    }
    return diff;
  };

  const getSlideStyles = (index: number): React.CSSProperties => {
    const normalizedDiff = getNormalizedDiff(index);
    const absDiff = Math.abs(normalizedDiff);

    // Only show 5 cards: center + 2 on each side
    if (absDiff > 2) {
      return {
        opacity: 0,
        visibility: 'hidden',
        pointerEvents: 'none',
        position: 'absolute',
        transform: `translateX(${normalizedDiff > 0 ? 300 : -300}%) scale(0.3)`,
        transition: 'all 0.5s ease',
      };
    }

    const isActive = normalizedDiff === 0;
    const direction = normalizedDiff > 0 ? 1 : -1;

    let rotateY = 0;
    let translateX = 0;
    let scale = 1;
    let opacity = 1;
    let brightness = 1;
    let blur = 0;

    switch (absDiff) {
      case 0: // Center card
        rotateY = 0;
        translateX = 0;
        scale = 1;
        opacity = 1;
        brightness = 1;
        blur = 0;
        break;
      case 1: // Side cards (L/R)
        rotateY = direction === -1 ? 25 : -25;
        translateX = 75 * direction;
        scale = 0.82;
        opacity = 0.75;
        brightness = 0.6;
        blur = 1;
        break;
      case 2: // Far side cards
        rotateY = direction === -1 ? 40 : -40;
        translateX = 140 * direction;
        scale = 0.65;
        opacity = 0.4;
        brightness = 0.3;
        blur = 3;
        break;
    }

    const zIndex = 50 - absDiff * 10;

    return {
      position: 'absolute',
      transform: `perspective(1200px) translateX(${translateX}%) rotateY(${rotateY}deg) scale(${scale})`,
      transformStyle: 'preserve-3d',
      filter: `blur(${blur}px) brightness(${brightness})`,
      opacity,
      zIndex,
      pointerEvents: isActive ? 'auto' : 'none',
      visibility: 'visible',
      transition: 'all 0.5s ease',
    } as React.CSSProperties;
  };

  return (
    <div 
      className="w-full max-w-[1600px] mx-auto px-4 relative select-none overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3D Card Showcase Container - Using vh for better screen fit */}
      <div 
        className="relative h-[450px] sm:h-[500px] md:h-[550px] lg:h-[650px] xl:h-[70vh] flex items-center justify-center pt-4"
        style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {images.map((image, index) => {
          const normalizedDiff = getNormalizedDiff(index);
          const absDiff = Math.abs(normalizedDiff);
          const isActive = normalizedDiff === 0;
          
          return (
            <div
              key={index}
              className="absolute cursor-pointer"
              style={{
                ...getSlideStyles(index),
                width: 'clamp(240px, 20vw, 380px)',
                aspectRatio: '9/13',
                transformOrigin: 'center center',
              }}
              onClick={() => {
                if (!isActive && absDiff <= 2) {
                  setActiveIndex(index);
                }
              }}
            >
              {/* Card Container */}
              <div 
                className={`
                  relative w-full h-full overflow-hidden group
                  transition-all duration-500 ease-in-out
                  ${isActive 
                    ? 'shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8),0_0_40px_rgba(234,179,8,0.2)]' 
                    : 'shadow-[0_15px_40px_-10px_rgba(0,0,0,0.7)]'
                  }
                `}
                style={{ borderRadius: '24px', transformStyle: 'preserve-3d' }}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform [transition-duration:1.5s] ease-out group-hover:scale-110"
                  draggable={false}
                />
                
                {/* Gradient overlay */}
                <div 
                  className="absolute inset-0 transition-opacity duration-700 bg-gradient-to-b from-black/20 via-transparent to-black/90" 
                  style={{ borderRadius: '24px' }}
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col z-10 h-full" style={{ transform: 'translateZ(30px)' }}>
                  
                  {/* Top Content: Category & Title */}
                  <div className={`transition-all duration-500 ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                    <p className="text-primary font-body text-[10px] tracking-[0.4em] uppercase mb-1 drop-shadow-md">
                      {image.category || 'Luxury Elite'}
                    </p>
                    <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight drop-shadow-xl">
                      {image.title || image.alt}
                    </h3>
                  </div>

                  {/* Spacer */}
                  <div className="flex-grow" />

                  {/* Bottom Content: Description & Explorer */}
                  <div className={`transition-all duration-500 delay-100 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                     <p className="text-white/80 text-xs sm:text-sm font-body font-light line-clamp-2 mb-6 drop-shadow-md leading-relaxed italic max-w-[90%]">
                      "{image.description}"
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] uppercase tracking-[0.35em] font-bold text-primary group-hover:text-white transition-colors duration-300">Explorer</span>
                        <div className="w-4 h-4 rounded-full border border-primary/40 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#EAB308]" />
                        </div>
                      </div>
                      
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-500 shadow-lg">
                        <ArrowUpRight size={18} className="text-white group-hover:text-black" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inner Border Glow */}
                <div className="absolute inset-0 border border-white/5 rounded-[24px] pointer-events-none" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-10 md:gap-14 mt-4 relative z-50">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 active:scale-90 bg-black/20 backdrop-blur-md shadow-xl"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Pagination Dots */}
        <div className="flex gap-4 items-center">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-500 ease-out cursor-pointer rounded-full h-1.5 ${
                index === activeIndex 
                  ? 'w-10 bg-primary shadow-[0_0_15px_rgba(234,179,8,0.6)]' 
                  : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 active:scale-90 bg-black/20 backdrop-blur-md shadow-xl"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
