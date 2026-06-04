import { useState } from 'react';
import { Maximize2, ArrowRight } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
}

interface AccordGalleryProps {
  items: AccordionItem[];
}

export default function AccordGallery({ items }: AccordGalleryProps) {
  const [expandedId, setExpandedId] = useState<string | null>(items[0]?.id || null);

  return (
    <div className="flex flex-col md:flex-row gap-4 h-[480px] w-full select-none">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => setExpandedId(item.id)}
          className={`relative overflow-hidden rounded-[2.5rem] transition-all [transition-duration:800ms] cubic-bezier(0.4, 0, 0.2, 1) cursor-pointer group
            ${expandedId === item.id ? 'flex-[4]' : 'flex-[1] opacity-60 hover:opacity-80 md:opacity-40'}
          `}
        >
          {/* Background Image */}
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform [transition-duration:2s] group-hover:scale-110"
          />
          
          {/* Overlays */}
          <div className={`absolute inset-0 transition-opacity duration-700 ${expandedId === item.id ? 'bg-black/40' : 'bg-black/60'}`} />
          
          {/* Vertical Title (When Collapsed) */}
          <div className={`absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-500 ${expandedId === item.id ? 'opacity-0' : 'opacity-100 hidden md:flex'}`}>
            <p className="text-white/60 font-bold tracking-[0.5em] uppercase whitespace-nowrap -rotate-90 text-[10px]">
              {item.category}
            </p>
          </div>

          {/* Expanded Content */}
          <div className={`absolute bottom-0 left-0 w-full p-8 md:p-12 transition-all duration-700 ${expandedId === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="text-primary font-bold text-xs tracking-widest uppercase">{item.category}</span>
                <div className="h-[1px] w-12 bg-primary/40" />
              </div>
              <h3 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
                {item.title}
              </h3>
              <p className="text-white/60 max-w-md text-sm md:text-base font-light mb-6">
                {item.subtitle}
              </p>
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-3 text-[10px] tracking-[0.3em] font-bold text-primary uppercase group/btn">
                  VIEW CASE <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" size={14} />
                </button>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:bg-white hover:text-black transition-all">
                  <Maximize2 size={16} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Side Border Shine */}
          <div className="absolute inset-y-0 left-0 w-[1px] bg-white/10 group-hover:bg-primary/20 transition-colors" />
        </div>
      ))}
    </div>
  );
}
