import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/', isHash: false },
  { label: 'About Us', href: '/about', isHash: false },
  { label: 'Construction', href: '/construction', isHash: false },
  { label: 'Estate', href: '/estate', isHash: false },
  { label: 'Interiors', href: '/interiors', isHash: false },
  { label: 'Gallery', href: '/gallery', isHash: false },
  { label: 'Properties', href: '/properties-catalog', isHash: false },
  { label: 'Calculator', href: '/calculator', isHash: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isHash: boolean) => {
    if (isHash && location.pathname === '/') {
      e.preventDefault();
      const targetId = href.split('#')[1];
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileOpen(false);
    } else if (isHash) {
        navigate(href);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-navy/95 backdrop-blur-xl py-3 shadow-2xl border-b border-white/5' : 'bg-navy py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="font-heading text-2xl font-bold tracking-wider group">
          <span className="text-white group-hover:text-primary transition-all">Apex</span>
          <span className="text-white/60 ml-1 text-[10px] font-body font-light tracking-[0.4em] uppercase hidden sm:inline-block border-l border-white/10 pl-2">Luxury Estates</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            link.isHash ? (
               <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href, true)}
                className="text-[11px] font-body font-bold tracking-[0.25em] uppercase text-white/70 hover:text-white transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`text-[11px] font-body font-bold tracking-[0.25em] uppercase transition-all duration-300 relative group ${
                  location.pathname === link.href ? 'text-primary' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-primary transition-all duration-300 ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            )
          ))}
          <a href="/#contact" onClick={(e) => handleNavLinkClick(e, '/#contact', true)} className="bg-primary text-navy font-bold text-[10px] rounded-full px-6 py-2.5 hover:bg-white hover:scale-105 transition-all">
            Get In Touch
          </a>
        </div>

        <button
          className="lg:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy mt-2 mx-4 rounded-3xl p-8 border border-white/5 animate-fade-in shadow-2xl">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
               link.isHash ? (
                 <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    handleNavLinkClick(e, link.href, true);
                    setMobileOpen(false);
                  }}
                  className="block py-2 text-xs font-body font-bold tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
               ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 text-xs font-body font-bold tracking-[0.2em] uppercase transition-colors ${
                    location.pathname === link.href ? 'text-primary' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
               )
            ))}
            <a 
              href="/#contact" 
              onClick={(e) => {
                handleNavLinkClick(e, '/#contact', true);
                setMobileOpen(false);
              }} 
              className="bg-primary text-navy font-bold text-[10px] rounded-full mt-4 py-3 text-center"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
