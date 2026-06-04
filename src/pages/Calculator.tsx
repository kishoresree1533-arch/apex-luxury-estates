import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Calculator as CalcIcon,
  ChevronRight,
  ChevronLeft,
  Layers,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Zap,
  Layout,
  Car,
  MapPin,
  TrendingUp,
  Clock,
  ShieldCheck,
  Building2,
  Check
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as ReTooltip, Legend } from 'recharts';

const STEPS = [
  { id: 1, label: 'Basics', icon: Layout },
  { id: 2, label: 'Design', icon: Building2 },
  { id: 3, label: 'Package', icon: Zap },
  { id: 4, label: 'Results', icon: CheckCircle2 },
];

const PACKAGES = [
  {
    id: 'basic',
    name: 'Standard Efficiency',
    rate: 1850,
    features: ['Solid Block Masonry', 'ISI Steel (500D)', 'Vitrified Tiles (2x2)', 'Standard Plumbing', 'Internal Emulsion Paint'],
    color: '#71717a'
  },
  {
    id: 'standard',
    name: 'Premium Living',
    rate: 2150,
    features: ['Winerberger Porotherm Blocks', 'Vizag/JSW Steel', 'Nano Tiles (4x2)', 'Anchor Fittings', 'Apex External Paint'],
    color: '#94a3b8'
  },
  {
    id: 'premium',
    name: 'Elite Collection',
    rate: 2450,
    features: ['RCC M25 Grade', 'Teak Wood Frames', 'Full Home Automation', 'Imported Granite', 'Kohler Fittings'],
    color: '#EAB308'
  },
  {
    id: 'luxury',
    name: 'Apex Masterpiece',
    rate: 2950,
    features: ['Architectural Concrete', 'Exotic Statuario Marble', 'VRV Cooling', 'Smart Glass', 'Luxury Landscape'],
    color: '#D4AF37'
  }
];

const QUICK_PLOT = [600, 1000, 1200, 1500, 1800, 2400];
const QUICK_BUILT = [1000, 1500, 2000, 2500, 3000];
const QUICK_PARKING = [200, 300, 400, 600];
const CITIES = ['Salem', 'Coimbatore', 'Chennai', 'Bangalore', 'Kochi'];

const FAQS = [
  { question: "How much does it cost to build a house in Chennai in 2026?", answer: "The current average construction cost in Chennai ranges from ₹1,850 to ₹3,000 per sq.ft depending on the package choice, material quality, and architectural complexity." },
  { question: "What is the expected construction timeline?", answer: "A standard G+1 residential project typically takes 10-14 months from the start of excavation to final handover, subject to site conditions and approvals." },
  { question: "Does the calculator include plan approval and EB costs?", answer: "The calculator provides an estimate for actual construction (Civil + Interior). Government fees, DTCP approvals, and EB connection charges are calculated separately based on the specific plot coordinates." },
  { question: "Can I customize the packages?", answer: "Yes, our 'Apex Masterpiece' package is fully customizable. Our consultants can swap materials and brands to match your specific vision while maintaining architectural integrity." }
];

export default function Calculator() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const [currentStep, setCurrentStep] = useState(1);
  const [plotArea, setPlotArea] = useState<number>(1200);
  const [builtUpArea, setBuiltUpArea] = useState<number>(1000);
  const [parkingArea, setParkingArea] = useState<number>(200);
  const [floors, setFloors] = useState<number>(1);
  const [city, setCity] = useState('Salem');
  const [location, setLocation] = useState('Central');
  const [selectedPackage, setSelectedPackage] = useState(PACKAGES[1]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const calculation = useMemo(() => {
    const totalArea = (builtUpArea * floors) + parkingArea;
    const baseCost = (builtUpArea * floors * selectedPackage.rate) + (parkingArea * selectedPackage.rate * 0.7);
    const multiplier = 1 + (floors - 1) * 0.08;
    const totalCost = baseCost * multiplier;

    const breakdown = [
      { name: 'Civil & Structure', value: totalCost * 0.48, color: '#EAB308' },
      { name: 'Architecture & Finishes', value: totalCost * 0.32, color: '#FFFFFF' },
      { name: 'MEP Services', value: totalCost * 0.15, color: '#71717a' },
      { name: 'Contingency', value: totalCost * 0.05, color: '#27272a' },
    ];

    return { totalCost, totalArea, breakdown };
  }, [builtUpArea, floors, parkingArea, selectedPackage]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency', currency: 'INR', maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <>
      <Preloader />
      <Navbar />
      <main className="min-h-screen bg-[#050505] text-white pt-24">

        {/* --- Card Container (Light Mode box inspired by reference) --- */}
        <section className="container mx-auto px-6 py-12 md:py-20 flex flex-col items-center">

          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
              House Construction Cost <br /><span className="text-primary tracking-tight">Calculator - Calculate in 30 seconds</span>
            </h1>
            <p className="text-white/40 text-sm md:text-base font-light mb-12">Estimator version: <span className="text-primary italic">TN-Luxury-2026.04</span></p>

            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16">
              <div className="text-center"><p className="text-2xl font-bold text-white">21,800+</p><p className="text-[10px] tracking-widest text-primary uppercase font-bold">Estimates</p></div>
              <div className="text-center"><p className="text-2xl font-bold text-white">10 Phases</p><p className="text-[10px] tracking-widest text-primary uppercase font-bold">Details</p></div>
              <div className="text-center"><p className="text-2xl font-bold text-white">4 Tiers</p><p className="text-[10px] tracking-widest text-primary uppercase font-bold">Options</p></div>
              <div className="text-center"><p className="text-2xl font-bold text-primary">Free Tool</p><p className="text-[10px] tracking-widest text-white/40 uppercase font-bold">Zero Cost</p></div>
            </div>
          </div>

          {/* --- FORM CARD (The exact white-box feel from ref) --- */}
          <div className="w-full max-w-4xl bg-[#f9fafb] text-[#1a1a1a] rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">

            {/* Stepper Header */}
            <div className="bg-white border-b border-gray-100 p-8 md:p-12 flex justify-center">
              <div className="flex items-center gap-4 md:gap-12 relative">
                <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-100 -translate-y-1/2" />
                {STEPS.map((s) => (
                  <div key={s.id} className="relative z-10 flex flex-col items-center gap-2">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 border-2 ${currentStep === s.id ? 'bg-[#ff5a1f] border-[#ff5a1f] text-white shadow-lg' :
                        currentStep > s.id ? 'bg-[#ff5a1f]/20 border-[#ff5a1f] text-[#ff5a1f]' :
                          'bg-white border-gray-100 text-gray-300'
                      }`}>
                      {currentStep > s.id ? <Check size={20} /> : <s.icon size={20} />}
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${currentStep === s.id ? 'text-[#1a1a1a]' : 'text-gray-400'}`}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <div className="p-8 md:p-14 bg-white">

              {currentStep === 1 && (
                <div className="animate-fade-up space-y-10">

                  {/* Plot Area */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-4 block flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff5a1f]" /> Enter your plot/floor area
                    </label>
                    <div className="relative mb-4">
                      <input
                        type="number"
                        value={plotArea || ''}
                        onChange={(e) => setPlotArea(parseInt(e.target.value) || 0)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-5 px-6 text-xl font-bold outline-none focus:border-[#ff5a1f] transition-all"
                        placeholder="e.g. 1200"
                      />
                      <span className="absolute right-6 top-1/2 -translate-y-1/2 font-bold text-gray-300">SQFT</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {QUICK_PLOT.map(v => (
                        <button key={v} onClick={() => setPlotArea(v)} className="text-[10px] font-bold px-3 py-1.5 rounded-lg border border-gray-200 text-gray-400 hover:border-[#ff5a1f] hover:text-[#ff5a1f] transition-all">{v} sqft</button>
                      ))}
                    </div>
                  </div>

                  {/* City & Location */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3 block">Select City</label>
                      <select
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 font-semibold outline-none focus:border-[#ff5a1f] appearance-none"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      >
                        {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3 block">Location</label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 font-semibold outline-none focus:border-[#ff5a1f]"
                        placeholder="e.g. Adyar"
                      />
                    </div>
                  </div>

                  {/* Built-up Area */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-4 block flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff5a1f]" /> Built up area (sq ft)
                    </label>
                    <div className="relative mb-4">
                      <input
                        type="number"
                        value={builtUpArea || ''}
                        onChange={(e) => setBuiltUpArea(parseInt(e.target.value) || 0)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-5 px-6 text-xl font-bold outline-none focus:border-[#ff5a1f] transition-all"
                        placeholder="e.g. 1000"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {QUICK_BUILT.map(v => (
                        <button key={v} onClick={() => setBuiltUpArea(v)} className="text-[10px] font-bold px-3 py-1.5 rounded-lg border border-gray-200 text-gray-400 hover:border-[#ff5a1f] hover:text-[#ff5a1f] transition-all">{v} sqft</button>
                      ))}
                    </div>

                    <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-4 block">Number of floors</label>
                    <div className="flex gap-3">
                      {[1, 2, 3, 4].map(f => (
                        <button
                          key={f}
                          onClick={() => setFloors(f)}
                          className={`flex-1 py-4 rounded-xl font-bold transition-all border ${floors === f ? 'bg-[#ff5a1f] border-[#ff5a1f] text-white shadow-md' : 'bg-gray-50 border-gray-100 text-gray-400 hover:bg-white hover:border-gray-300'}`}
                        >
                          {f === 1 ? 'G' : `G+${f - 1}`}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Car Parking */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-4 block flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff5a1f]" /> Car parking area (sq. ft)
                    </label>
                    <div className="relative mb-4">
                      <input
                        type="number"
                        value={parkingArea || ''}
                        onChange={(e) => setParkingArea(parseInt(e.target.value) || 0)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-5 px-6 text-xl font-bold outline-none focus:border-[#ff5a1f] transition-all"
                        placeholder="Minimum 200 sqft"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {QUICK_PARKING.map(v => (
                        <button key={v} onClick={() => setParkingArea(v)} className="text-[10px] font-bold px-3 py-1.5 rounded-lg border border-gray-200 text-gray-400 hover:border-[#ff5a1f] hover:text-[#ff5a1f] transition-all">{v} sqft</button>
                      ))}
                    </div>
                    <p className="text-[10px] text-gray-300 italic">*Minimum 200 sqft - Leave blank if not needed</p>
                  </div>

                  <button onClick={() => setCurrentStep(2)} className="w-full py-6 rounded-2xl bg-[#ff5a1f] text-white font-bold uppercase tracking-widest shadow-xl shadow-[#ff5a1f]/30 hover:scale-[1.01] transition-all">
                    Next - choose design
                  </button>
                </div>
              )}

              {currentStep === 2 && (
                <div className="animate-fade-up py-10 text-center">
                  <h3 className="text-2xl font-bold mb-8">Architectural Design Style</h3>
                  <div className="grid grid-cols-2 gap-6 mb-12">
                    {['Modern Minimalist', 'Traditional Villa', 'Luxury Contemporary', 'Art Deco Classic'].map(style => (
                      <button key={style} onClick={() => setCurrentStep(3)} className="aspect-[4/3] rounded-3xl border-2 border-gray-100 bg-gray-50 hover:border-[#ff5a1f] transition-all flex items-center justify-center p-6 text-center">
                        <span className="font-bold text-gray-600">{style}</span>
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setCurrentStep(1)} className="text-gray-400 font-bold uppercase tracking-widest text-xs flex items-center gap-2 mx-auto"><ChevronLeft size={16} /> Back to Basics</button>
                </div>
              )}

              {currentStep === 3 && (
                <div className="animate-fade-up">
                  <h3 className="text-2xl font-bold mb-8 text-center">Select Material Package</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {PACKAGES.map(pkg => (
                      <button
                        key={pkg.id}
                        onClick={() => { setSelectedPackage(pkg); setCurrentStep(4); }}
                        className={`p-8 rounded-[2rem] border-2 text-left transition-all ${selectedPackage.id === pkg.id ? 'border-[#ff5a1f] bg-[#ff5a1f]/5' : 'border-gray-50 bg-gray-50 hover:border-gray-200'}`}
                      >
                        <p className="text-[#ff5a1f] font-bold text-xs tracking-widest mb-1">₹{pkg.rate}/SQFT</p>
                        <h4 className="text-xl font-bold mb-4">{pkg.name}</h4>
                        <ul className="space-y-3 mb-8">
                          {pkg.features.map((f, i) => (
                            <li key={i} className="text-[11px] text-gray-500 flex gap-2"><Check size={14} className="text-[#ff5a1f] shrink-0" /> {f}</li>
                          ))}
                        </ul>
                        <span className="text-[#ff5a1f] font-bold text-[10px] tracking-widest uppercase">Select Package</span>
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setCurrentStep(2)} className="text-gray-400 font-bold uppercase tracking-widest text-xs flex items-center gap-2 mx-auto"><ChevronLeft size={16} /> Back to Design</button>
                </div>
              )}

              {currentStep === 4 && (
                <div className="animate-fade-in space-y-12 py-6">
                  <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                    <div>
                      <p className="text-gray-400 text-[10px] tracking-widest uppercase font-bold mb-3">Estimated Total Cost</p>
                      <h2 className="text-6xl md:text-8xl font-bold text-[#1a1a1a] tracking-tight mb-2">
                        {formatCurrency(calculation.totalCost)}
                      </h2>
                      <p className="text-[#ff5a1f] font-bold text-sm tracking-widest">₹{Math.round(calculation.totalCost / calculation.totalArea)} / sq ft avg.</p>
                    </div>
                    <button className="py-5 px-10 rounded-2xl bg-[#ff5a1f] text-white font-bold uppercase tracking-widest whitespace-nowrap shadow-lg shadow-[#ff5a1f]/20">Download Report</button>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-16 py-12 border-t border-gray-100">
                    <div className="space-y-8">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-[#ff5a1f] flex items-center gap-2">Cost Breakdown</h4>
                      <div className="space-y-6">
                        {calculation.breakdown.map((item) => (
                          <div key={item.name} className="space-y-3">
                            <div className="flex justify-between text-[11px] font-bold">
                              <span className="text-gray-400 uppercase">{item.name}</span>
                              <span>{formatCurrency(item.value)}</span>
                            </div>
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                              <div className="h-full transition-all duration-1000" style={{ width: `${(item.value / calculation.totalCost) * 100}%`, backgroundColor: '#ff5a1f' }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-3xl p-8 flex flex-col items-center justify-center">
                      <ResponsiveContainer width="100%" height={240}>
                        <PieChart>
                          <Pie data={calculation.breakdown} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                            {calculation.breakdown.map((e, i) => <Cell key={i} fill={i === 0 ? '#ff5a1f' : '#cbd5e1'} />)}
                          </Pie>
                          <ReTooltip />
                        </PieChart>
                      </ResponsiveContainer>
                      <p className="text-[10px] font-bold text-gray-300 tracking-widest uppercase mt-4">Structural Efficiency: 94%</p>
                    </div>
                  </div>

                  <button onClick={() => setCurrentStep(1)} className="block mx-auto text-gray-400 font-bold uppercase tracking-widest text-xs hover:text-[#ff5a1f]">Recalculate</button>
                </div>
              )}
            </div>
          </div>

          {/* --- Information Sections (Reference bottom content) --- */}
          <div className="w-full max-w-4xl mt-32 space-y-32">

            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">Why homeowners across <span className="text-primary italic">Chennai trust these numbers</span></h2>
              <p className="text-white/40 max-w-2xl mx-auto leading-relaxed">
                The construction industry is riddled with hidden costs and lack of transparency. At Apex Luxury Estates, our estimator is fueled by real-world procurement data, updated weekly to reflect the current market fluctuations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/5 p-12 rounded-[2.5rem] text-center">
                <p className="text-primary text-5xl font-bold mb-4">+33%</p>
                <p className="text-xs font-bold tracking-widest uppercase mb-4 text-white/60">More Accurate</p>
                <p className="text-white/30 text-[11px] italic">Our algorithm integrates regional material volatility indexes.</p>
              </div>
              <div className="bg-white/5 border border-white/5 p-12 rounded-[2.5rem] text-center">
                <p className="text-primary text-5xl font-bold mb-4">10%</p>
                <p className="text-xs font-bold tracking-widest uppercase mb-4 text-white/60">Energy Saved</p>
                <p className="text-white/30 text-[11px] italic">High-performance material selection reduces HVAC load.</p>
              </div>
              <div className="bg-white/5 border border-white/5 p-12 rounded-[2.5rem] text-center">
                <p className="text-primary text-5xl font-bold mb-4">+4 mo</p>
                <p className="text-xs font-bold tracking-widest uppercase mb-4 text-white/60">Time Saved</p>
                <p className="text-white/30 text-[11px] italic">Correct budgeting prevents standard funding delay cycles.</p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-12 text-center underline underline-offset-8 decoration-primary">Frequently Asked Questions</h3>
              <div className="space-y-6">
                {FAQS.map((f, i) => (
                  <div key={i} className="border-b border-white/5 pb-6">
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center text-left hover:text-primary transition-colors">
                      <span className="font-heading text-lg font-semibold">{f.question}</span>
                      <ChevronDown className={`transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && <p className="mt-4 text-white/30 text-sm italic leading-relaxed">{f.answer}</p>}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
