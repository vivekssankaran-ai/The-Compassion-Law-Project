
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000"
            alt="Serene landscape"
            className="w-full h-full object-cover scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/70"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 py-16 md:py-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif italic mb-6 md:mb-10 leading-tight text-cream drop-shadow-2xl">
            Compassion is not a weakness—it's the courage to remain human while doing difficult work.
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6 md:mb-10">
            <div className="w-12 md:w-16 h-px bg-cream/40"></div>
            <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-terracotta"></div>
            <div className="w-12 md:w-16 h-px bg-cream/40"></div>
          </div>
          <p className="text-xs sm:text-sm md:text-lg font-sans text-cream/80 font-medium uppercase tracking-[0.15em] md:tracking-[0.25em] max-w-2xl mx-auto mb-8 md:mb-12">
            Transforming legal practice through compassion, connection, and care
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-10 py-3 md:py-4 bg-terracotta text-cream font-sans text-xs md:text-sm uppercase tracking-widest font-bold hover:bg-cream hover:text-sage hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-sm shadow-lg"
          >
            Begin Your Journey
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-5 h-5 md:w-6 md:h-6 text-cream/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Main Blurb */}
      <section className="py-16 md:py-28 px-4 sm:px-6 max-w-5xl mx-auto text-center relative">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-terracotta/5 blur-3xl"></div>
        <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-serif leading-relaxed text-sage mb-10 md:mb-16 italic relative">
          We believe that compassion belongs at the heart of legal practice. The Compassionate Law Project helps legal professionals develop the skills and resilience to sustain their commitment to justice—while caring deeply for themselves and those they serve.
        </p>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 text-left items-stretch mt-20">
          <div className="group p-8 md:p-10 rounded-lg bg-gradient-to-br from-cream to-cream-darker border border-sage/10 hover:border-terracotta/30 hover:shadow-xl transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-terracotta font-sans uppercase tracking-[0.2em] text-sm font-bold">Why This Matters</h3>
            </div>
            <p className="font-sans leading-relaxed text-charcoal/80 text-lg">
              The legal profession asks people to carry enormous weight—conflict, trauma, and life-altering decisions accumulate over time. Without intentional practices of self-compassion and community support, even the most dedicated professionals burn out. We offer evidence-based tools rooted in compassion science to help you thrive.
            </p>
          </div>
          <div className="group p-8 md:p-10 rounded-lg bg-sage/5 border-l-4 border-sage hover:bg-sage/10 transition-all duration-500">
            <h3 className="text-sage font-serif text-2xl font-bold mb-6">What We Do</h3>
            <ul className="space-y-5">
              {[
                "Cultivate self-compassion as a foundation for sustainable practice",
                "Lead with both clarity and deep humanity",
                "Build communities of care that reduce professional isolation",
                "Transform compassion from aspiration into daily practice"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start font-sans text-charcoal/70 group/item hover:text-charcoal transition-colors">
                  <span className="w-6 h-6 rounded-full bg-terracotta/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-terracotta" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-28 bg-gradient-to-b from-cream-darker to-cream px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">Our Community</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sage mt-4">Who We Serve</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              { title: "Courts & Judges", icon: "🏛️", desc: "Nurturing compassionate decision-making on the bench" },
              { title: "Lawyers & Law Firms", icon: "⚖️", desc: "Building cultures where compassion and excellence thrive together" },
              { title: "Law Schools & Students", icon: "🎓", desc: "Shaping compassionate advocates from the start" }
            ].map((item, i) => (
              <div key={i} className="group bg-cream p-10 md:p-12 text-center rounded-xl shadow-md border border-sage/10 hover:border-terracotta/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-terracotta/0 to-terracotta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-2xl font-serif font-bold text-sage mb-3 group-hover:text-terracotta transition-colors duration-300">{item.title}</h3>
                  <p className="text-charcoal/50 text-sm mb-6">{item.desc}</p>
                  <div className="h-1 w-12 bg-sage/20 mx-auto rounded-full transition-all duration-500 group-hover:w-20 group-hover:bg-terracotta"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get In Touch */}
      <section className="py-28 px-6 bg-cream relative">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">Start Today</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-sage mt-4 mb-4">Get In Touch</h2>
          <p className="text-charcoal/50 font-sans tracking-wide text-base mb-16 max-w-lg mx-auto">How can we support your work?</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { to: "/contact?interest=retreat", title: "Attend a Retreat", desc: "Join an upcoming immersive experience", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              { to: "/contact?interest=training", title: "Book a Training", desc: "Practical tools for your team", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { to: "/contact?interest=custom", title: "Custom Programs", desc: "Tailored solutions for your organization", icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" }
            ].map((item, i) => (
              <Link key={i} to={item.to} className="group bg-sage text-cream p-10 md:p-12 rounded-xl text-center hover:bg-terracotta transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-cream/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-cream/20 transition-colors">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm opacity-70">{item.desc}</p>
                  <div className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <section className="py-28 bg-gradient-to-b from-sage/5 to-cream px-6 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent"></div>
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">Stay Connected</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-sage mt-4 mb-6">Follow Our Substack</h2>
          <p className="text-charcoal/60 text-lg mb-12 max-w-2xl mx-auto">
            Join our community for reflections on compassion, resilience, and what it means to do hard work with humanity.
          </p>
          <a href="https://viveksankaran.substack.com/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-4 px-10 py-5 bg-terracotta text-cream font-sans text-sm uppercase tracking-widest font-bold hover:bg-sage hover:shadow-xl transition-all duration-300 rounded-lg shadow-lg hover:-translate-y-1">
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
