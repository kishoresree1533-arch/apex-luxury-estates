import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const links = {
  'Quick Links': ['Home', 'Projects', 'Properties', 'About Us', 'Contact'],
  'Services': ['Cost Calculator', 'Buying', 'Selling', 'Investment', 'Consultation', 'Property Management'],
  'Locations': ['Salem', 'Coimbatore', 'Chennai', 'Bangalore', 'Kochi'],
};

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="font-heading text-2xl font-bold tracking-wider mb-4">
              <span className="text-white">Apex</span>
              <span className="text-white/60 ml-1 text-[10px] font-body font-light tracking-[0.4em] uppercase">Luxury Estates</span>
            </div>
            <p className="text-white/50 font-body font-light text-sm leading-relaxed max-w-sm mb-6">
              Redefining luxury real estate with unparalleled service, exclusive properties, and a commitment to excellence since 2001.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-primary transition-all duration-300 bg-white/5"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-heading text-sm font-semibold mb-5 tracking-wider uppercase text-white">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => {
                  const href = item === 'Cost Calculator' ? '/calculator' : 
                               item === 'Projects' ? '/#projects' : 
                               item === 'Properties' ? '/properties-catalog' : 
                               item === 'Home' ? '/' : 
                               item === 'About Us' ? '/about' : '#';
                  return (
                    <li key={item}>
                      <a href={href} className="text-sm text-white/50 font-body font-light hover:text-primary transition-colors duration-300">
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40 font-body">
            © {new Date().getFullYear()} Apex Luxury Estates. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <a key={link} href="#" className="text-xs text-white/40 font-body hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
