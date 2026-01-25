import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Retreats from './pages/Retreats';
import Trainings from './pages/Trainings';
import About from './pages/About';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-terracotta/20 font-sans text-charcoal bg-cream">
      <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-sage/10">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-cream transition-transform group-hover:scale-110">
              <HeartIcon className="w-6 h-6" />
            </div>
            <h1 className="text-xl md:text-2xl font-serif font-bold text-sage leading-tight">
              The Compassionate <br className="md:hidden" /> Law Project
            </h1>
          </Link>

          <div className="hidden md:flex gap-10 text-charcoal/80 font-sans tracking-[0.15em] uppercase text-xs font-bold items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/retreats">Retreats</NavLink>
            <NavLink to="/trainings">Trainings</NavLink>
            <NavLink to="/about">About</NavLink>
            <Link to="/contact" className="px-5 py-2 bg-sage text-cream rounded-sm hover:bg-terracotta transition-all shadow-sm">Contact</Link>
          </div>

          <button 
            className="md:hidden text-sage p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-20 bg-cream z-40 flex flex-col p-8 gap-8 animate-in slide-in-from-top duration-300">
            <Link to="/" className="text-2xl font-serif font-bold text-sage">Home</Link>
            <Link to="/retreats" className="text-2xl font-serif font-bold text-sage">Retreats</Link>
            <Link to="/trainings" className="text-2xl font-serif font-bold text-sage">Trainings</Link>
            <Link to="/about" className="text-2xl font-serif font-bold text-sage">About</Link>
            <Link to="/contact" className="text-2xl font-serif font-bold text-sage text-terracotta">Contact</Link>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-sage text-cream/90 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 border-b border-cream/10 pb-16 mb-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold">The Compassionate Law Project</h2>
            <p className="font-sans leading-relaxed text-cream/60 max-w-sm">
              Developing human-centered leaders across the legal profession—from law students to the bench.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-xl font-bold mb-2">Connect</h3>
            <a href="mailto:vivekssankaran@gmail.com" className="hover:text-terracotta transition-colors flex items-center gap-2">
              <MailIcon className="w-4 h-4" /> vivekssankaran@gmail.com
            </a>
            <a href="https://compassionatelawproject.com" className="hover:text-terracotta transition-colors">compassionatelawproject.com</a>
            <a href="https://viveksankaran.substack.com/" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta transition-colors italic">
              Read "More Time To Be Human" (Substack)
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-xl font-bold mb-2">Resources</h3>
            <button className="text-left hover:text-terracotta transition-colors text-sm">Download Program Menu (PDF)</button>
            <button className="text-left hover:text-terracotta transition-colors text-sm">Download Sample Retreat Agenda (PDF)</button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs font-sans text-cream/40 uppercase tracking-widest text-center md:text-left gap-6">
          <p>© {new Date().getFullYear()} Wolverine Advocacy and Design Solutions, LLC (d/b/a The Compassionate Law Project)</p>
          <p className="italic lowercase tracking-normal text-sm opacity-60">
            Educational programming only; not therapy or legal advice.
          </p>
        </div>
      </footer>
    </div>
  );
};

const NavLink: React.FC<{ to: string, children: React.ReactNode }> = ({ to, children }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;
  return (
    <Link 
      to={to} 
      className={`transition-colors hover:text-terracotta ${isActive ? 'text-terracotta' : ''}`}
    >
      {children}
    </Link>
  );
};

const HeartIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const MenuIcon = ({ className }: { className?: string }) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
  </svg>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/retreats" element={<Retreats />} />
          <Route path="/trainings" element={<Trainings />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;