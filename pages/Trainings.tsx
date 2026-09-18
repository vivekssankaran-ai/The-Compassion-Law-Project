import React from 'react';
import { Link } from 'react-router-dom';

const Trainings: React.FC = () => {
  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="py-16 md:py-32 lg:py-40 px-4 sm:px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-sage blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-terracotta blur-3xl"></div>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">Professional Development</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-sage mt-4 mb-6 md:mb-8">Trainings & Keynotes</h1>
          <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
            <div className="w-12 h-px bg-terracotta/40"></div>
            <div className="w-2 h-2 rounded-full bg-terracotta/30"></div>
            <div className="w-12 h-px bg-terracotta/40"></div>
          </div>
          <p className="text-base md:text-lg lg:text-xl font-sans text-charcoal/60 max-w-2xl mx-auto">
            Practical, evidence-informed tools for building human-centered legal cultures
          </p>
        </div>
      </section>

      {/* Formats Section */}
      <section className="py-16 md:py-28 bg-gradient-to-b from-cream-darker to-cream px-4 sm:px-6 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">Flexible Options</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-sage mt-4">Formats</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {[
              { label: "Keynote", duration: "60–90 minutes", icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z", desc: "Inspiring talks for conferences and events" },
              { label: "Workshop", duration: "2–3 hours", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", desc: "Interactive skill-building sessions" },
              { label: "Half / Full Day", duration: "Customizable", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", desc: "Deep dives for comprehensive learning" },
              { label: "Multi-Day", duration: "Custom design", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", desc: "Tailored retreats for organizations" }
            ].map((f, i) => (
              <div key={i} className="bg-cream p-5 sm:p-6 md:p-8 lg:p-10 text-center border border-sage/10 rounded-xl shadow-md">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-sage/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <svg className="w-5 h-5 md:w-7 md:h-7 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                  </svg>
                </div>
                <h4 className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-sage mb-1 md:mb-2">{f.label}</h4>
                <p className="text-terracotta font-sans text-[10px] md:text-xs uppercase tracking-widest font-bold mb-2 md:mb-3">{f.duration}</p>
                <p className="text-charcoal/50 text-xs md:text-sm hidden sm:block">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          <div>
            <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">Outcomes</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-sage mt-3 mb-8 md:mb-10">What Participants Gain</h2>
            <ul className="space-y-4 md:space-y-6">
              {[
                { text: "A practical framework for understanding the human cost of legal work.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
                { text: "Micro-practices for attention, regulation, and presence.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                { text: "Tools for healthier communication and institutional culture.", icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" },
                { text: "Clear next steps for implementation.", icon: "M9 5l7 7-7 7" }
              ].map((item, i) => (
                <li key={i} className="flex gap-3 md:gap-4 items-start group">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-sage/10 flex items-center justify-center flex-shrink-0 group-hover:bg-terracotta/10 transition-colors">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-sage group-hover:text-terracotta transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <span className="text-base md:text-lg font-sans text-charcoal/80 leading-relaxed pt-1">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-sage/5 to-terracotta/5 rounded-2xl blur-xl hidden md:block"></div>
            <div className="relative bg-gradient-to-br from-cream to-cream-darker p-6 md:p-10 lg:p-12 rounded-xl border border-sage/10 shadow-xl">
              <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">Topics</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-sage mt-3 mb-8 md:mb-10">Popular Sessions</h2>
              <ul className="space-y-4 md:space-y-5">
                {[
                  "The Hidden Cost of Administering Justice",
                  "Professional PPE for Legal Work",
                  "The Art of Noticing",
                  "Empathy vs. Professional Compassion",
                  "Culture Change for Legal Systems"
                ].map((topic, i) => (
                  <li key={i} className="flex items-center gap-3 md:gap-4 group">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0 group-hover:bg-terracotta/20 transition-colors">
                      <span className="text-terracotta font-bold text-xs md:text-sm">{i + 1}</span>
                    </div>
                    <span className="text-charcoal/70 font-serif text-base md:text-lg lg:text-xl italic group-hover:text-sage transition-colors">"{topic}"</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-28 bg-gradient-to-b from-cream-darker to-cream text-center px-4 sm:px-6 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent"></div>
        <div className="max-w-3xl mx-auto">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-6 md:mb-8">
            <svg className="w-7 h-7 md:w-8 md:h-8 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-sage mb-4 md:mb-6">Book a Session</h2>
          <p className="mb-8 md:mb-12 text-charcoal/60 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            We design custom programming for organizations across the country. Let's discuss how we can support your team.
          </p>
          <Link to="/contact?interest=training" className="inline-flex items-center gap-2 md:gap-3 px-8 md:px-10 py-4 md:py-5 bg-sage text-cream font-sans text-sm md:text-base font-bold uppercase tracking-widest hover:bg-terracotta hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-lg shadow-lg">
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