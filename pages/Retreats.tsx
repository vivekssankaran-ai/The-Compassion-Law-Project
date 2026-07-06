import React from 'react';
import { Link } from 'react-router-dom';

const Retreats: React.FC = () => {
  return (
    <div className="bg-cream">
      {/* Full-Screen Hero with Nature Imagery */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Slow Zoom */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80"
            alt="Serene mountain lake at sunrise"
            className="w-full h-full object-cover"
            style={{ animation: 'slowZoom 20s ease-out forwards' }}
          />
          <div className="hero-overlay absolute inset-0"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/30"></div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full border border-cream/10 animate-float hidden lg:block" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/3 right-16 w-24 h-24 rounded-full border border-cream/10 animate-float hidden lg:block" style={{ animationDelay: '2s' }}></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <span className="inline-block px-6 py-2 bg-cream/10 backdrop-blur-sm rounded-full text-cream/90 text-xs uppercase tracking-[0.3em] font-bold mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Immersive Experiences
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-bold text-cream mb-6 leading-[0.95] animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Compassionate<br />
            <span className="italic font-normal text-cream/90">Leadership</span> Retreats
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="w-16 h-px bg-cream/40"></div>
            <div className="w-2 h-2 rounded-full bg-terracotta"></div>
            <div className="w-16 h-px bg-cream/40"></div>
          </div>
          <p className="text-lg md:text-xl lg:text-2xl font-serif italic text-cream/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
            Immersive experiences that restore your capacity for compassion—toward yourself and those you serve
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-cream/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-cream/50 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Why Retreats Section */}
      <section className="py-24 md:py-40 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-2 reveal-left">
            <div className="lg:sticky lg:top-32">
              <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">The Need</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-sage mt-4 leading-tight">Why Retreats?</h2>
              <div className="w-16 h-1 bg-terracotta/30 mt-6"></div>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-10 reveal-right">
            <p className="text-xl md:text-2xl font-sans leading-relaxed text-charcoal/70">
              Compassion fatigue is real. When you spend your days absorbing others' pain and making weighty decisions, your capacity for care—including self-care—becomes depleted.
            </p>
            <p className="text-lg md:text-xl font-sans leading-relaxed text-charcoal/60">
              Our retreats create sacred space to replenish your compassion reserves, reconnect with your purpose, and build a community of professionals who understand what you carry.
            </p>
            <div className="relative p-10 md:p-12 bg-gradient-to-br from-sage/5 via-sage/10 to-sage/5 rounded-2xl border-l-4 border-sage">
              <svg className="absolute top-6 left-8 w-12 h-12 text-sage/15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="italic text-sage text-xl md:text-2xl leading-relaxed pl-10 font-serif">
                Unlike a typical CLE, our retreats are grounded in the science of compassion. You'll learn evidence-based practices for self-compassion, emotional resilience, and sustainable care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=2000&q=80"
          alt="Peaceful forest path"
          className="w-full h-full object-cover parallax-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sage/40 via-transparent to-terracotta/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-cream text-2xl md:text-4xl lg:text-5xl font-serif italic text-center px-6 max-w-4xl animate-parallax-float">
            "A great reset to continue our work with integrity, compassion, and renewed passion."
          </p>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-24 md:py-40 bg-gradient-to-b from-cream-darker via-cream to-cream px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24 reveal">
            <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">The Experience</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-sage mt-4">What to Expect</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 stagger-children">
            {[
              { title: "Confidential Space", desc: "A supportive environment with peers who understand the weight of your work.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
              { title: "Guided Reflection", desc: "Evidence-informed skill-building and opportunities for deep introspection.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
              { title: "Practical Tools", desc: "Techniques you can use immediately in the courtroom or office.", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
              { title: "Lasting Community", desc: "Connection that reduces professional isolation long after the retreat ends.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }
            ].map((item, i) => (
              <div key={i} className="group p-8 md:p-10 bg-cream rounded-2xl border border-sage/10 hover:border-terracotta/30 hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-terracotta/20 to-terracotta/5 flex items-center justify-center mb-6 group-hover:from-terracotta group-hover:to-terracotta/80 transition-all duration-500">
                  <svg className="w-8 h-8 text-terracotta group-hover:text-cream transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h4 className="font-serif text-2xl md:text-3xl font-bold text-sage mb-3 group-hover:text-terracotta transition-colors">{item.title}</h4>
                <p className="text-charcoal/60 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Sample Themes */}
          <div className="mt-20 md:mt-32 reveal">
            <div className="relative bg-gradient-to-br from-sage/5 to-terracotta/5 p-10 md:p-16 rounded-3xl">
              <div className="text-center mb-12">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-sage">Sample Retreat Themes</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {[
                  { title: "Self-Compassion", desc: "Sustainable resilience without self-judgment" },
                  { title: "Attention & Presence", desc: "The science of noticing in high-stakes settings" },
                  { title: "Emotional Agility", desc: "Moving from reaction to purposeful response" },
                  { title: "Boundaries", desc: "Responding to suffering without losing authority" }
                ].map((theme, i) => (
                  <div key={i} className="text-center p-6 bg-cream/50 rounded-xl border border-sage/10 hover:border-terracotta/20 hover:shadow-lg transition-all duration-300">
                    <div className="w-3 h-3 rounded-full bg-terracotta mx-auto mb-4"></div>
                    <h4 className="font-serif text-xl font-bold text-sage mb-2">{theme.title}</h4>
                    <p className="text-charcoal/50 text-sm">{theme.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Retreats Section */}
      <section className="py-24 md:py-40 px-6 bg-cream relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-24 reveal">
            <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">On the Horizon</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-sage mt-4">Upcoming Retreats</h2>
          </div>
          <div className="space-y-8 stagger-children">
            {[
              { date: "June 2026", name: "Texas Judicial Compassion Retreat (Private)", location: "Sage Hill Retreat Center, Kyle, Texas" },
              { date: "September 2026", name: "Michigan Judicial Compassion Retreat (Private)", location: "Butzel Retreat Center, Ortonville, Michigan" },
              { date: "October 15-18, 2026", name: "Michigan Lawyer Well-Being Retreat", location: "Treetops Resort, Gaylord, Michigan", signUpLink: "https://www.eventbrite.com/e/2026-lawyer-wellness-retreat-tickets-1983968548335?aff=oddtdtcreator" }
            ].map((retreat, i) => (
              <div key={i} className="group p-8 md:p-10 bg-gradient-to-br from-cream to-cream-darker rounded-2xl border border-sage/10 hover:border-terracotta/20 hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="lg:w-44 flex-shrink-0">
                    <span className="text-terracotta font-sans text-sm font-bold uppercase tracking-wider">{retreat.date}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-sage group-hover:text-terracotta transition-colors">{retreat.name}</h3>
                    <p className="text-charcoal/60 mt-2 text-lg">{retreat.location}</p>
                  </div>
                  {retreat.signUpLink && (
                    <a
                      href={retreat.signUpLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-terracotta text-cream font-sans text-sm font-bold uppercase tracking-widest hover:bg-sage transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                      Sign Up
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Retreats Section */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-cream to-cream-darker relative">
        <div className="max-w-5xl mx-auto reveal">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sage/50 font-sans text-xs uppercase tracking-[0.3em] font-bold">Our Journey</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-sage/70 mt-4">Past Retreats</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {[
              { date: "April 2026", name: "North Dakota Judicial Compassion Retreat", location: "Coteau des Prairies Lodge, Rutland, North Dakota" },
              { date: "December 2025", name: "Georgia Juvenile Court Compassion Retreat", location: "Atlanta Evergreen Lakeside Resort, Stone Mountain, Georgia" },
              { date: "September 2025", name: "Juvenile Court Referee Compassion Retreat", location: "Butzel Retreat Center, Ortonville, Michigan" },
              { date: "October 2025", name: "ICWA Judicial Compassion Retreat", location: "Skamania Lodge, Stevenson, Washington" },
              { date: "October 2024", name: "ICWA Judicial Compassion Retreat", location: "The Colorado Chautauqua, Boulder, Colorado" },
              { date: "September 2024", name: "Michigan Judicial Compassion Retreat", location: "Butzel Retreat Center, Ortonville, Michigan" }
            ].map((retreat, i) => (
              <div key={i} className="p-6 bg-sage/5 rounded-xl border border-sage/10 hover:bg-sage/10 transition-all duration-300">
                <span className="text-sage/50 font-sans text-xs font-semibold uppercase tracking-wider">{retreat.date}</span>
                <h3 className="font-serif text-lg text-sage/80 mt-2">{retreat.name}</h3>
                <p className="text-charcoal/40 text-sm mt-1">{retreat.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-40 px-6 bg-cream relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24 reveal">
            <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">From the Bench</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-sage mt-4">What Judges Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 stagger-children">
            {[
              "I highly recommend this retreat for anyone working in a child welfare capacity. Even after 27 years as a jurist, this retreat opened my eyes and heart in so many ways. You will leave a better person and jurist because of it.",
              "To feel seen and heard by others in a similar situation has granted me a sense of peace that I have not felt in a long time.",
              "This retreat reminded me why I became a judge in the first place. It gave me tools to carry the weight of this work without losing myself.",
              "For the first time in years, I felt like I could breathe. The retreat gave me permission to be human.",
              "The connections I made with other judges who truly understand this work have been invaluable. I no longer feel so alone.",
              "A great reset to continue our work with integrity, compassion, and renewed passion."
            ].map((quote, i) => (
              <blockquote key={i} className="group relative p-8 md:p-10 bg-gradient-to-br from-cream to-cream-darker rounded-2xl border border-sage/10 hover:border-terracotta/20 hover:shadow-2xl transition-all duration-500">
                <svg className="absolute top-6 left-6 w-10 h-10 text-terracotta/10 group-hover:text-terracotta/20 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xl md:text-2xl font-serif italic text-sage leading-relaxed pl-8">
                  "{quote}"
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Screen CTA */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80"
            alt="Mountain sunrise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sage/70"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto reveal-scale">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-cream/10 flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-terracotta" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-6">Ready to restore your compassion?</h2>
          <p className="text-cream/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join our community of legal professionals who believe that caring for yourself is essential to caring for others.
          </p>
          <Link to="/contact?interest=retreat" className="inline-flex items-center gap-3 px-10 py-5 bg-terracotta hover:bg-cream hover:text-sage transition-all duration-300 font-sans text-sm font-bold uppercase tracking-widest shadow-xl rounded-xl hover:shadow-2xl hover:-translate-y-1 text-cream">
            Get in Touch
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Retreats;
