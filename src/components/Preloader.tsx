import { useState, useEffect } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 1500);
    const t2 = setTimeout(() => setVisible(false), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] bg-background flex items-center justify-center transition-opacity duration-700 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <div className="font-heading text-4xl font-bold tracking-wider mb-2 animate-fade-up">
          <span className="text-gradient-gold">ÉLITE</span>
        </div>
        <p className="text-xs font-body tracking-[0.4em] uppercase text-muted-foreground animate-fade-up delay-200">
          Estates
        </p>
        <div className="mt-6 w-32 h-0.5 bg-secondary rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-primary rounded-full" style={{ animation: 'loadBar 1.5s ease-in-out forwards' }} />
        </div>
      </div>
      <style>{`
        @keyframes loadBar {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
