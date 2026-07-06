
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const Contact: React.FC = () => {
  const { search } = useLocation();

  const selectedInterest = useMemo(() => {
    const params = new URLSearchParams(search);
    const interest = params.get('interest');
    if (interest === 'retreat') return 'Attending a retreat';
    if (interest === 'training') return 'Interested in a training or keynote';
    if (interest === 'custom') return 'Designing a retreat for an organization';
    return '';
  }, [search]);

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80"
            alt="Mountain at sunrise"
            className="w-full h-full object-cover"
            style={{ animation: 'slowZoom 20s ease-out forwards' }}
          />
          <div className="hero-overlay absolute inset-0"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-cream"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <span className="inline-block px-6 py-2 bg-cream/10 backdrop-blur-sm rounded-full text-cream/90 text-xs uppercase tracking-[0.3em] font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Get Started
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-cream mb-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Let's Connect
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="w-16 h-px bg-cream/40"></div>
            <div className="w-2 h-2 rounded-full bg-terracotta"></div>
            <div className="w-16 h-px bg-cream/40"></div>
          </div>
          <p className="text-lg md:text-xl font-serif italic text-cream/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
            Interested in bringing a more human-centered approach to your legal environment?
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="lg:col-span-2 reveal-left">
              <div className="space-y-8">
                <div className="group p-8 md:p-10 bg-gradient-to-br from-cream to-cream-darker rounded-2xl border border-sage/10 hover:border-terracotta/20 hover:shadow-2xl transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-sage/10 flex items-center justify-center mb-6 group-hover:bg-terracotta/10 transition-colors duration-500">
                    <svg className="w-7 h-7 text-sage group-hover:text-terracotta transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="font-sans font-bold uppercase tracking-widest text-xs text-terracotta mb-3">Email Us Directly</p>
                  <a href="mailto:compassionatelawproject@gmail.com" className="text-lg md:text-xl font-serif text-sage hover:text-terracotta transition-colors duration-300">
                    compassionatelawproject<wbr />@gmail.com
                  </a>
                </div>

                {/* Additional info card */}
                <div className="p-8 md:p-10 bg-gradient-to-br from-sage/5 to-terracotta/5 rounded-2xl border border-sage/10">
                  <h3 className="font-serif text-2xl font-bold text-sage mb-4">We're Here to Help</h3>
                  <p className="text-charcoal/60 leading-relaxed">
                    Whether you're exploring options for your organization or ready to schedule, we're happy to discuss how compassion-centered training might support your team.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 reveal-right">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-sage/10 to-terracotta/10 rounded-3xl blur-xl opacity-50 hidden lg:block"></div>
                <form
                  action="https://formspree.io/f/mlgbezwe"
                  method="POST"
                  className="relative bg-cream p-8 md:p-10 lg:p-12 shadow-2xl border border-sage/10 rounded-2xl space-y-8"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-sage">Send a Message</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-sage/60">I'm interested in...</label>
                      <div className="relative">
                        <select
                          name="interest"
                          defaultValue={selectedInterest}
                          className="w-full bg-cream-darker border border-sage/20 p-4 rounded-xl focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 appearance-none transition-all text-charcoal/80"
                        >
                          <option value="">General Inquiry</option>
                          <option value="Attending a retreat">Attending a retreat</option>
                          <option value="Interested in a training or keynote">Interested in a training or keynote</option>
                          <option value="Designing a retreat for an organization">Designing a retreat for an organization</option>
                        </select>
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sage/40 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-sage/60">Name</label>
                        <input
                          name="name"
                          placeholder="Your name"
                          required
                          className="w-full bg-cream-darker border border-sage/20 p-4 rounded-xl focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all text-charcoal/80 placeholder-charcoal/30"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-sage/60">Email</label>
                        <input
                          name="email"
                          placeholder="your@email.com"
                          type="email"
                          required
                          className="w-full bg-cream-darker border border-sage/20 p-4 rounded-xl focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all text-charcoal/80 placeholder-charcoal/30"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-sage/60">Message</label>
                      <textarea
                        name="message"
                        placeholder="How can we help you?"
                        required
                        className="w-full bg-cream-darker border border-sage/20 p-4 rounded-xl focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 h-36 resize-none transition-all text-charcoal/80 placeholder-charcoal/30"
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="group flex items-center justify-center gap-3 w-full bg-sage text-cream py-5 font-sans text-sm font-bold uppercase tracking-widest hover:bg-terracotta transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl hover:-translate-y-0.5"
                      >
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
