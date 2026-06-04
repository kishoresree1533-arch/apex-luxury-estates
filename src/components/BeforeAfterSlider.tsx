import { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({ 
  beforeImage, 
  afterImage, 
  beforeLabel = "Before", 
  afterLabel = "After" 
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[2rem] md:rounded-[3rem] cursor-ew-resize select-none border border-white/10 shadow-2xl group"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onTouchMove={handleTouchMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Before Image (Overlay with Clip Path) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className={`absolute inset-0 w-full h-full object-cover scale-105 ${beforeImage === afterImage ? 'pencil-sketch' : ''}`}
        />
        {/* Sketch Texture Overlay (Only in single-image mode) */}
        {beforeImage === afterImage && (
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-30 pointer-events-none" />
        )}
        {/* Label Overlay */}
        <div className="absolute top-8 left-8 bg-black/40 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full">
          <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/80">{beforeLabel}</p>
        </div>
      </div>

      {/* After Label Overlay (Fixed Right) */}
      <div className="absolute top-8 right-8 bg-black/40 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full">
        <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/80">{afterLabel}</p>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute inset-y-0 w-1 bg-primary/80 backdrop-blur-sm z-20 transition-shadow group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full shadow-2xl flex items-center justify-center border-4 border-black group-hover:scale-110 transition-transform duration-300">
           <MoveHorizontal className="text-black" size={20} />
        </div>
      </div>

      {/* Glassmorphism Instruction Overlay (Only visible initially) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
         <div className="glass px-8 py-3 rounded-full flex items-center gap-4 border border-white/10">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-[10px] tracking-[0.2em] font-bold text-white/60 uppercase">Drag to explore mastery</span>
         </div>
      </div>
    </div>
  );
}
