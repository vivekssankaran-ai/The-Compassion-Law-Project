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
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-terracotta/20 font-sans text-charcoal bg-cream">
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/95 backdrop-blur-lg shadow-md' : 'bg-cream/80 backdrop-blur-sm'}`}>
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-sage to-sage-light flex items-center justify-center text-cream transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:from-terracotta group-hover:to-terracotta">
              <HeartIcon className="w-6 h-6" />
            </div>
            <h1 className="text-lg md:text-xl font-serif font-bold text-sage leading-tight group-hover:text-terracotta transition-colors">
              The Compassionate <br className="md:hidden" /> Law Project
            </h1>
          </Link>

          <div className="hidden md:flex gap-8 lg:gap-10 text-charcoal/70 font-sans tracking-[0.12em] uppercase text-xs font-bold items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/retreats">Retreats</NavLink>
            <NavLink to="/trainings">Trainings</NavLink>
            <NavLink to="/about">About</NavLink>
            <Link to="/contact" className="px-6 py-2.5 bg-sage text-cream rounded-lg hover:bg-terracotta hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-sm flex items-center gap-2">
              Contact
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <button
            className="md:hidden text-sage p-2 hover:bg-sage/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute right-4 top-16 bg-sage rounded-lg shadow-xl z-50 min-w-48 py-2 border border-sage-light">
            {[
              { to: "/", label: "Home" },
              { to: "/retreats", label: "Retreats" },
              { to: "/trainings", label: "Trainings" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" }
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block px-5 py-3 text-base font-sans text-cream hover:bg-sage-light/20 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gradient-to-b from-sage to-sage-light text-cream/90 pt-24 pb-12 px-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent"></div>
        <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-cream/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-48 h-48 rounded-full bg-terracotta/10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 border-b border-cream/10 pb-16 mb-12">
            {/* Brand */}
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center">
                  <HeartIcon className="w-7 h-7 text-terracotta" />
                </div>
                <h2 className="text-2xl font-serif font-bold">The Compassionate Law Project</h2>
              </div>
              <p className="font-sans leading-relaxed text-cream/60 max-w-md text-lg">
                Developing human-centered leaders across the legal profession—from law students to the bench.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="mailto:compassionatelawpractice@gmail.com" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-terracotta hover:text-cream transition-all duration-300">
                  <MailIcon className="w-5 h-5" />
                </a>
                <a href="https://viveksankaran.substack.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-terracotta hover:text-cream transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Connect */}
            <div className="md:col-span-4">
              <h3 className="font-serif text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-terracotta"></span>
                Connect
              </h3>
              <div className="space-y-4">
                <a href="mailto:compassionatelawpractice@gmail.com" className="group flex items-center gap-3 hover:text-terracotta transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-cream/5 flex items-center justify-center group-hover:bg-terracotta/20 transition-colors">
                    <MailIcon className="w-4 h-4" />
                  </div>
                  <span className="text-sm">compassionatelawpractice@gmail.com</span>
                </a>
                <a href="https://compassionatelawproject.com" className="group flex items-center gap-3 hover:text-terracotta transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-cream/5 flex items-center justify-center group-hover:bg-terracotta/20 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <span className="text-sm">compassionatelawproject.com</span>
                </a>
                <a href="https://viveksankaran.substack.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 hover:text-terracotta transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-cream/5 flex items-center justify-center group-hover:bg-terracotta/20 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="text-sm italic">"More Time To Be Human"</span>
                </a>
              </div>
            </div>

            {/* Resources */}
            <div className="md:col-span-3">
              <h3 className="font-serif text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-terracotta"></span>
                Resources
              </h3>
              <div className="space-y-3">
                <a href="/Handout.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-left hover:text-terracotta transition-colors text-sm">
                  <svg className="w-4 h-4 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Program Menu (PDF)
                </a>
                <a href="/retreat_agenda.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-left hover:text-terracotta transition-colors text-sm">
                  <svg className="w-4 h-4 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Sample Retreat Agenda (PDF)
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs font-sans text-cream/40 text-center md:text-left gap-4">
            <p>© {new Date().getFullYear()} Wolverine Advocacy and Design Solutions, LLC (d/b/a The Compassionate Law Project)</p>
            <p className="italic text-cream/30">
              Educational programming only; not therapy or legal advice.
            </p>
          </div>
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
      className={`relative py-2 transition-colors hover:text-terracotta ${isActive ? 'text-terracotta' : ''}`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-terracotta transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'}`}></span>
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