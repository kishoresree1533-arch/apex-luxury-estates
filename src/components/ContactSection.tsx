import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="section-padding bg-background">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Get In Touch</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <div className="glow-line mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={isVisible ? 'animate-slide-left' : 'opacity-0'}>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-secondary/50 border border-border rounded-lg px-5 py-4 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-secondary/50 border border-border rounded-lg px-5 py-4 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-secondary/50 border border-border rounded-lg px-5 py-4 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-secondary/50 border border-border rounded-lg px-5 py-4 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
              <select className="w-full bg-secondary/50 border border-border rounded-lg px-5 py-4 text-sm font-body text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all">
                <option>I'm interested in...</option>
                <option>Buying a Property</option>
                <option>Selling a Property</option>
                <option>Investment Consultation</option>
                <option>General Inquiry</option>
              </select>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full bg-secondary/50 border border-border rounded-lg px-5 py-4 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
              />
              <button type="submit" className="btn-luxury rounded-sm w-full py-4">
                Send Message
              </button>
            </form>
          </div>

          <div className={isVisible ? 'animate-slide-right' : 'opacity-0'}>
            <div className="glass rounded-lg overflow-hidden mb-8 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977732232753!2d-122.3940638!3d37.7879235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a3e3dc43%3A0x97b40c038e4e1de7!2s1%20Market%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="w-full h-full border-0 grayscale opacity-70"
                loading="lazy"
                title="Office location"
              />
            </div>

            <div className="space-y-6">
              {[
                { icon: MapPin, label: 'Headquarters', value: '1 Market Street, Suite 4500\nSan Francisco, CA 94105' },
                { icon: Phone, label: 'Phone', value: '+1 (415) 555-0180' },
                { icon: Mail, label: 'Email', value: 'concierge@eliteestates.com' },
                { icon: Clock, label: 'Hours', value: 'Mon – Sat: 9AM – 7PM' },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-body tracking-wider uppercase">{info.label}</p>
                    <p className="text-sm font-body whitespace-pre-line">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
