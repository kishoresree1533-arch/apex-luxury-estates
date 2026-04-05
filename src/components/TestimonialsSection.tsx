import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Alexander Chen',
    role: 'CEO, Meridian Capital',
    text: 'Élite Estates delivered an extraordinary experience. From the first consultation to the keys in hand, every detail was handled with impeccable precision. Our penthouse in Manhattan exceeded every expectation.',
    rating: 5,
  },
  {
    name: 'Isabella Rosetti',
    role: 'Fashion Designer',
    text: 'The level of personalized service is unmatched. They understood our vision for a Mediterranean villa perfectly and found us a property that feels like it was built just for us.',
    rating: 5,
  },
  {
    name: 'James Wellington III',
    role: 'Private Investor',
    text: 'Having worked with numerous luxury brokerages worldwide, Élite Estates stands apart. Their market insight, discretion, and dedication to client satisfaction are truly world-class.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="section-padding bg-secondary/30">
      <div ref={ref} className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Testimonials</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Client Voices</h2>
          <div className="glow-line mt-4" />
        </div>

        <div className={`glass rounded-xl p-8 md:p-12 text-center relative ${isVisible ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
          <Quote size={40} className="text-primary/20 mx-auto mb-6" />
          <p className="font-body text-lg md:text-xl font-light leading-relaxed text-foreground/90 mb-8 min-h-[100px]">
            "{t.text}"
          </p>
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={16} className="fill-primary text-primary" />
            ))}
          </div>
          <p className="font-heading text-lg font-semibold">{t.name}</p>
          <p className="text-sm text-muted-foreground font-body">{t.role}</p>

          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
