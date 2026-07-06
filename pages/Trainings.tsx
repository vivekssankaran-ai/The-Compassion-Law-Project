import React from 'react';
import { Link } from 'react-router-dom';

const Trainings: React.FC = () => {
  return (
    <div className="bg-cream">
      {/* Full-Screen Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486728297118-82a07bc48a28?auto=format&fit=crop&w=2000&q=80"
            alt="Elegant conference space"
            className="w-full h-full object-cover"
            style={{ animation: 'slowZoom 20s ease-out forwards' }}
          />
          <div className="hero-overlay absolute inset-0"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-cream"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <span className="inline-block px-6 py-2 bg-cream/10 backdrop-blur-sm rounded-full text-cream/90 text-xs uppercase tracking-[0.3em] font-bold mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Professional Development
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-bold text-cream mb-6 leading-[0.95] animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Trainings &<br />
            <span className="italic font-normal text-cream/90">Keynotes</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="w-16 h-px bg-cream/40"></div>
            <div className="w-2 h-2 rounded-full bg-terracotta"></div>
            <div className="w-16 h-px bg-cream/40"></div>
          </div>
          <p className="text-lg md:text-xl lg:text-2xl font-serif italic text-cream/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
            Practical, evidence-informed tools for building human-centered legal cultures
          </p>
        </div>
      </section>

      {/* Formats Section */}
      <section className="py-24 md:py-40 px-6 bg-gradient-to-b from-cream-darker to-cream relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24 reveal">
            <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">Flexible Options</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-sage mt-4">Formats</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 stagger-children">
            {[
              { label: "Keynote", duration: "60–90 minutes", icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z", desc: "Inspiring talks for conferences and events" },
              { label: "Workshop", duration: "2–3 hours", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", desc: "Interactive skill-building sessions" },
              { label: "Half / Full Day", duration: "Customizable", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", desc: "Deep dives for comprehensive learning" },
              { label: "Multi-Day", duration: "Custom design", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", desc: "Tailored retreats for organizations" }
            ].map((f, i) => (
              <div key={i} className="group bg-cream p-8 md:p-10 text-center border border-sage/10 rounded-2xl shadow-lg hover:shadow-2xl hover:border-terracotta/20 transition-all duration-500 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl bg-sage/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-terracotta/10 transition-colors duration-500">
                  <svg className="w-8 h-8 text-sage group-hover:text-terracotta transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                  </svg>
                </div>
                <h4 className="font-serif text-2xl md:text-3xl font-bold text-sage mb-2 group-hover:text-terracotta transition-colors">{f.label}</h4>
                <p className="text-terracotta font-sans text-xs uppercase tracking-widest font-bold mb-4">{f.duration}</p>
                <p className="text-charcoal/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80"
          alt="Mountain sunrise"
          className="w-full h-full object-cover parallax-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sage/40 via-transparent to-terracotta/30"></div>
      </section>

      {/* Content Section */}
      <section className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* What Participants Gain */}
          <div className="reveal-left">
            <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">Outcomes</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-sage mt-4 mb-10 leading-tight">What Participants Gain</h2>
            <ul className="space-y-6">
              {[
                { text: "A practical framework for understanding the human cost of legal work.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
                { text: "Micro-practices for attention, regulation, and presence.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                { text: "Tools for healthier communication and institutional culture.", icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" },
                { text: "Clear next steps for implementation.", icon: "M9 5l7 7-7 7" }
              ].map((item, i) => (
                <li key={i} className="flex gap-5 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center flex-shrink-0 group-hover:bg-terracotta/10 transition-colors duration-300">
                    <svg className="w-6 h-6 text-sage group-hover:text-terracotta transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <span className="text-lg md:text-xl font-sans text-charcoal/70 leading-relaxed pt-2">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Sessions */}
          <div className="reveal-right">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-sage/10 to-terracotta/10 rounded-3xl blur-xl hidden lg:block"></div>
              <div className="relative bg-gradient-to-br from-cream to-cream-darker p-10 md:p-12 lg:p-14 rounded-2xl border border-sage/10 shadow-2xl">
                <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">Topics</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-sage mt-4 mb-10 leading-tight">Popular Sessions</h2>
                <ul className="space-y-6">
                  {[
                    "The Hidden Cost of Administering Justice",
                    "Professional PPE for Legal Work",
                    "The Art of Noticing",
                    "Empathy vs. Professional Compassion",
                    "Culture Change for Legal Systems"
                  ].map((topic, i) => (
                    <li key={i} className="flex items-center gap-5 group">
                      <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0 group-hover:bg-terracotta/20 transition-colors duration-300">
                        <span className="text-terracotta font-bold text-sm">{i + 1}</span>
                      </div>
                      <span className="text-charcoal/70 font-serif text-xl md:text-2xl italic group-hover:text-sage transition-colors duration-300">"{topic}"</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-cream-darker to-cream">
        <div className="max-w-4xl mx-auto text-center reveal">
          <svg className="w-16 h-16 text-terracotta/20 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-sage leading-relaxed mb-8">
            "This training transformed how our entire team approaches difficult cases. We now have a shared language for compassion."
          </blockquote>
          <cite className="text-charcoal/50 font-sans text-sm uppercase tracking-widest">— State Court Administrator</cite>
        </div>
      </section>

      {/* Full-Screen CTA */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2000&q=80"
            alt="Misty lake at dawn"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sage/70"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto reveal-scale">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-cream/10 flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-6">Book a Session</h2>
          <p className="text-cream/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            We design custom programming for organizations across the country. Let's discuss how we can support your team.
          </p>
          <Link to="/contact?interest=training" className="inline-flex items-center gap-3 px-10 py-5 bg-terracotta hover:bg-cream hover:text-sage transition-all duration-300 font-sans text-sm font-bold uppercase tracking-widest shadow-xl rounded-xl hover:shadow-2xl hover:-translate-y-1 text-cream">
            Inquire About Training
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Trainings;
