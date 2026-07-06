
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  useEffect(() => {
    // Re-observe elements after component mounts
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-cream">
      {/* Hero Section - Full Viewport */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Slow Zoom */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=2400"
            alt="Misty mountains at dawn"
            className="w-full h-full object-cover animate-[slowZoom_30s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 hero-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/30"></div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-terracotta/10 blur-3xl animate-parallax-float"></div>
        <div className="absolute bottom-1/3 right-10 w-48 h-48 rounded-full bg-sage/10 blur-3xl animate-parallax-float" style={{ animationDelay: '-4s' }}></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center px-6 md:px-8">
          <div className="animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <span className="inline-block px-6 py-2 bg-cream/10 backdrop-blur-sm rounded-full text-cream/90 text-xs uppercase tracking-[0.4em] font-sans font-semibold mb-8 border border-cream/20">
              Human-Centered Legal Leadership
            </span>
          </div>

          <h1 className="animate-fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-cream leading-[1.1] mb-8 drop-shadow-2xl" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            Compassion is the courage<br className="hidden sm:block" /> to remain human
          </h1>

          <div className="animate-fade-in flex items-center justify-center gap-6 mb-10" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-cream/50 to-transparent"></div>
            <div className="w-3 h-3 rounded-full bg-terracotta shadow-lg shadow-terracotta/50"></div>
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-cream/50 to-transparent"></div>
          </div>

          <p className="animate-fade-in-up text-lg sm:text-xl md:text-2xl font-serif italic text-cream/80 max-w-3xl mx-auto mb-12 leading-relaxed" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
            while doing the most difficult work
          </p>

          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
            <Link
              to="/retreats"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-terracotta text-cream font-sans text-sm uppercase tracking-[0.2em] font-bold hover:bg-cream hover:text-sage transition-all duration-500 rounded-sm shadow-2xl hover:shadow-terracotta/20"
            >
              Explore Retreats
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-cream/10 backdrop-blur-sm text-cream border border-cream/30 font-sans text-sm uppercase tracking-[0.2em] font-bold hover:bg-cream hover:text-sage transition-all duration-500 rounded-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-3 text-cream/50">
            <span className="text-xs uppercase tracking-[0.3em] font-sans">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-cream/50 to-transparent animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Mission Statement - Editorial Style */}
      <section className="py-32 md:py-48 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream-darker/50 to-cream"></div>
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-sage/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full bg-terracotta/5 blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative">
          <div className="reveal text-center">
            <span className="text-terracotta font-sans text-xs uppercase tracking-[0.4em] font-bold">Our Purpose</span>
            <div className="w-12 h-px bg-terracotta mx-auto mt-6 mb-12"></div>
          </div>

          <blockquote className="reveal text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.4] text-sage mb-12">
              We believe that compassion belongs at the heart of legal practice. The Compassionate Law Project helps legal professionals develop the skills and resilience to sustain their commitment to justice—
              <span className="text-terracotta">while caring deeply for themselves and those they serve.</span>
            </p>
          </blockquote>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2400"
          alt="Foggy forest landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-sage/10"></div>
      </section>

      {/* Why This Matters / What We Do */}
      <section className="py-32 md:py-40 px-6 bg-cream relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Why This Matters */}
            <div className="reveal-left">
              <div className="sticky top-32">
                <span className="text-terracotta font-sans text-xs uppercase tracking-[0.4em] font-bold">The Challenge</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-sage mt-4 mb-8 leading-tight">
                  Why This<br />Matters
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-terracotta to-terracotta/0 mb-10"></div>
                <p className="text-xl md:text-2xl font-sans text-charcoal/70 leading-relaxed">
                  The legal profession asks people to carry enormous weight—conflict, trauma, and life-altering decisions accumulate over time.
                </p>
                <p className="text-lg font-sans text-charcoal/60 leading-relaxed mt-6">
                  Without intentional practices of self-compassion and community support, even the most dedicated professionals burn out. We offer evidence-based tools rooted in compassion science to help you thrive.
                </p>
              </div>
            </div>

            {/* What We Do */}
            <div className="reveal-right space-y-6">
              <div className="p-10 md:p-12 bg-gradient-to-br from-sage to-sage-light rounded-2xl text-cream">
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-8">What We Do</h3>
                <ul className="space-y-6">
                  {[
                    "Cultivate self-compassion as a foundation for sustainable practice",
                    "Lead with both clarity and deep humanity",
                    "Build communities of care that reduce professional isolation",
                    "Transform compassion from aspiration into daily practice"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <span className="w-8 h-8 rounded-full bg-cream/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-terracotta" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-lg md:text-xl text-cream/90 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats or Quote */}
              <div className="p-8 md:p-10 bg-cream-darker rounded-2xl border border-sage/10">
                <svg className="w-10 h-10 text-terracotta/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xl md:text-2xl font-serif italic text-sage leading-relaxed">
                  "This retreat reminded me why I became a judge in the first place."
                </p>
                <p className="text-sm font-sans text-charcoal/50 mt-4 uppercase tracking-widest">— Retreat Participant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-cream-darker via-cream to-cream-darker px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="reveal text-center mb-20 md:mb-28">
            <span className="text-terracotta font-sans text-xs uppercase tracking-[0.4em] font-bold">Our Community</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-sage mt-4">Who We Serve</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-terracotta to-transparent mx-auto mt-8"></div>
          </div>

          <div className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Courts & Judges",
                desc: "Nurturing compassionate decision-making on the bench through evidence-based practices",
                image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Lawyers & Law Firms",
                desc: "Building cultures where compassion and professional excellence thrive together",
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Law Schools & Students",
                desc: "Shaping compassionate advocates from the very start of their legal journey",
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800"
              }
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-cream mb-3">{item.title}</h3>
                  <p className="text-cream/70 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  <div className="w-12 h-1 bg-terracotta mt-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get In Touch - Refined */}
      <section className="py-32 md:py-40 px-6 bg-cream relative">
        <div className="max-w-7xl mx-auto">
          <div className="reveal text-center mb-16 md:mb-24">
            <span className="text-terracotta font-sans text-xs uppercase tracking-[0.4em] font-bold">Start Today</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-sage mt-4 mb-6">Get In Touch</h2>
            <p className="text-charcoal/50 font-sans text-lg max-w-xl mx-auto">How can we support your work?</p>
          </div>

          <div className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { to: "/contact?interest=retreat", title: "Attend a Retreat", desc: "Join an upcoming immersive experience designed to restore and renew", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              { to: "/contact?interest=training", title: "Book a Training", desc: "Practical, evidence-informed tools for your team or organization", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { to: "/contact?interest=custom", title: "Custom Programs", desc: "Tailored solutions designed specifically for your organization's needs", icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" }
            ].map((item, i) => (
              <Link key={i} to={item.to} className="group relative bg-sage text-cream p-10 md:p-12 lg:p-14 rounded-2xl text-center hover:bg-terracotta transition-all duration-700 shadow-xl hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-cream/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-cream/20 transition-colors duration-500">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
                  <p className="text-sm md:text-base opacity-70 leading-relaxed">{item.desc}</p>
                  <div className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Follow Our Substack */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&q=80&w=2400"
            alt="Peaceful forest"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sage/90"></div>
        </div>

        <div className="reveal relative z-10 max-w-4xl mx-auto text-center px-6">
          <span className="text-terracotta font-sans text-xs uppercase tracking-[0.4em] font-bold">Stay Connected</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mt-4 mb-8">Follow Our Substack</h2>
          <p className="text-cream/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Join our community for reflections on compassion, resilience, and what it means to do hard work with humanity.
          </p>
          <a
            href="https://viveksankaran.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-12 py-6 bg-cream text-sage font-sans text-sm uppercase tracking-[0.2em] font-bold hover:bg-terracotta hover:text-cream transition-all duration-500 rounded-sm shadow-2xl"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            More Time To Be Human
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
