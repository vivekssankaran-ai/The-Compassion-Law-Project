import React from 'react';
import { Link } from 'react-router-dom';

const Retreats: React.FC = () => {
  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="py-20 md:py-40 px-4 sm:px-6 bg-gradient-to-br from-sage via-sage to-sage-light text-cream text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-cream blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-terracotta blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto relative">
          <span className="inline-block px-6 py-2 bg-cream/10 rounded-full text-cream/80 text-xs uppercase tracking-[0.3em] font-bold mb-8 backdrop-blur-sm">
            Immersive Experiences
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 md:mb-8 leading-tight">Compassionate Leadership Retreats</h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-cream/30"></div>
            <div className="w-2 h-2 rounded-full bg-terracotta"></div>
            <div className="w-12 h-px bg-cream/30"></div>
          </div>
          <p className="text-xl md:text-2xl font-serif italic text-cream/80 tracking-wide max-w-3xl mx-auto">
            Immersive experiences that restore your capacity for compassion—toward yourself and those you serve
          </p>
        </div>
      </section>

      {/* Why Retreats Section */}
      <section className="py-16 md:py-28 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1">
            <div className="sticky top-32">
              <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">The Need</span>
              <h2 className="text-4xl font-serif font-bold text-sage mt-3">Why Retreats?</h2>
            </div>
          </div>
          <div className="md:col-span-2 space-y-8 text-lg font-sans leading-relaxed text-charcoal/80">
            <p className="text-xl">
              Compassion fatigue is real. When you spend your days absorbing others' pain and making weighty decisions, your capacity for care—including self-care—becomes depleted. Our retreats create sacred space to replenish your compassion reserves, reconnect with your purpose, and build a community of professionals who understand what you carry.
            </p>
            <div className="relative p-8 md:p-10 bg-gradient-to-br from-sage/5 to-sage/10 rounded-xl border-l-4 border-sage">
              <svg className="absolute top-4 left-6 w-8 h-8 text-sage/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="italic text-sage text-lg md:text-xl pl-8">
                Unlike a typical CLE, our retreats are grounded in the science of compassion. You'll learn evidence-based practices for self-compassion, emotional resilience, and sustainable care—then experience them in a community of peers who truly understand your work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 md:py-28 bg-gradient-to-b from-cream-darker to-cream px-4 sm:px-6 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-start">
          <div className="space-y-12">
            <div>
              <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">The Experience</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-sage mt-3">What to Expect</h2>
            </div>
            <div className="grid gap-6">
              {[
                { title: "Confidential Space", desc: "A supportive environment with peers who understand your work.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
                { title: "Guided Reflection", desc: "Evidence-informed skill-building and deep introspection.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
                { title: "Practical Tools", desc: "Techniques you can use immediately in the courtroom or office.", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
                { title: "Community", desc: "Connection that reduces professional isolation.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }
              ].map((item, i) => (
                <div key={i} className="group flex gap-5 p-6 bg-cream rounded-xl border border-sage/10 hover:border-terracotta/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-terracotta/20 to-terracotta/10 flex items-center justify-center flex-shrink-0 group-hover:from-terracotta group-hover:to-terracotta/80 transition-all duration-300">
                    <svg className="w-6 h-6 text-terracotta group-hover:text-cream transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-sage mb-2 group-hover:text-terracotta transition-colors">{item.title}</h4>
                    <p className="text-charcoal/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-sage/10 to-terracotta/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-cream p-10 md:p-12 shadow-2xl rounded-xl border border-sage/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-sage">Sample Retreat Themes</h3>
              </div>
              <ul className="space-y-6 font-sans text-charcoal/80">
                {[
                  { title: "Self-Compassion", desc: "Sustainable resilience without self-judgment." },
                  { title: "Attention & Presence", desc: "The science of noticing in high-stakes settings." },
                  { title: "Emotional Agility", desc: "Moving from reaction to purposeful response." },
                  { title: "Boundaries", desc: "Responding to suffering without losing authority." }
                ].map((theme, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2.5 flex-shrink-0"></div>
                    <div>
                      <strong className="text-terracotta font-semibold">{theme.title}</strong>
                      <span className="text-charcoal/50"> — </span>
                      <span>{theme.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Retreats Section */}
      <section className="py-16 md:py-28 px-4 sm:px-6 bg-cream relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-terracotta/30 to-transparent"></div>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">On the Horizon</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-sage mt-4">Upcoming Retreats</h2>
          </div>
          <div className="space-y-6">
            {[
              { date: "April 2025", name: "North Dakota Judicial Compassion Retreat", location: "Coteau des Prairies Lodge, Rutland, North Dakota" },
              { date: "June 2025", name: "Texas Judicial Compassion Retreat", location: "Sage Hill Retreat Center, Kyle, Texas" },
              { date: "September 2025", name: "Michigan Judicial Compassion Retreat", location: "Butzel Retreat Center, Ortonville, Michigan" },
              { date: "October 2025", name: "Michigan Lawyer Well-Being Retreat", location: "The Homestead, Glen Arbor, Michigan" }
            ].map((retreat, i) => (
              <div key={i} className="group p-6 md:p-8 bg-gradient-to-br from-cream to-cream-darker rounded-xl border border-sage/10 hover:border-terracotta/20 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-32 flex-shrink-0">
                    <span className="text-terracotta font-sans text-sm font-bold uppercase tracking-wider">{retreat.date}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-sage group-hover:text-terracotta transition-colors">{retreat.name}</h3>
                    <p className="text-charcoal/60 mt-1">{retreat.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Retreats Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-cream to-cream-darker relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-sage/60 font-sans text-xs uppercase tracking-[0.3em] font-bold">Our Journey</span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-sage/80 mt-4">Past Retreats</h2>
          </div>
          <div className="space-y-4">
            {[
              { date: "December 2025", name: "Georgia Juvenile Court Compassion Retreat", location: "Atlanta Evergreen Lakeside Resort, Stone Mountain, Georgia" },
              { date: "September 2025", name: "Juvenile Court Referee Compassion Retreat", location: "Butzel Retreat Center, Ortonville, Michigan" },
              { date: "October 2025", name: "ICWA Judicial Compassion Retreat", location: "Skamania Lodge, Stevenson, Washington" },
              { date: "October 2024", name: "ICWA Judicial Compassion Retreat", location: "The Colorado Chautauqua, Boulder, Colorado" },
              { date: "September 2024", name: "Michigan Judicial Compassion Retreat", location: "Butzel Retreat Center, Ortonville, Michigan" }
            ].map((retreat, i) => (
              <div key={i} className="p-5 md:p-6 bg-sage/5 rounded-lg border border-sage/10">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <div className="md:w-36 flex-shrink-0">
                    <span className="text-sage/70 font-sans text-sm font-semibold">{retreat.date}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg text-sage/80">{retreat.name}</h3>
                    <p className="text-charcoal/50 text-sm">{retreat.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-28 px-4 sm:px-6 bg-cream relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">From the Bench</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-sage mt-4">What Judges Say</h2>
          </div>
          <div className="grid gap-8 md:gap-10">
            {[
              "I highly recommend this retreat for anyone working in a child welfare capacity. Even after 27 years as a jurist, this retreat opened my eyes and heart in so many ways. You will leave a better person and jurist because of it.",
              "To feel seen and heard by others in a similar situation has granted me a sense of peace that I have not felt in a long time.",
              "A great reset to continue our work with integrity, compassion, and renewed passion.",
              "This retreat reminded me why I became a judge in the first place. It gave me tools to carry the weight of this work without losing myself.",
              "For the first time in years, I felt like I could breathe. The retreat gave me permission to be human.",
              "The connections I made with other judges who truly understand this work have been invaluable. I no longer feel so alone."
            ].map((quote, i) => (
              <blockquote key={i} className="group relative p-6 md:p-8 lg:p-10 bg-gradient-to-br from-cream to-cream-darker rounded-xl border border-sage/10 hover:border-terracotta/20 hover:shadow-xl transition-all duration-500">
                <svg className="absolute top-4 left-4 md:top-6 md:left-6 w-8 h-8 md:w-10 md:h-10 text-terracotta/10 group-hover:text-terracotta/20 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg md:text-xl lg:text-2xl font-serif italic text-sage leading-relaxed pl-6 md:pl-8">
                  "{quote}"
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-28 bg-gradient-to-br from-sage via-sage to-sage-light text-cream text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cream blur-3xl"></div>
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-cream/10 flex items-center justify-center mx-auto mb-6 md:mb-8">
            <svg className="w-7 h-7 md:w-8 md:h-8 text-terracotta" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 md:mb-6">Ready to restore your compassion?</h2>
          <p className="text-cream/70 text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto">
            Join our community of legal professionals who believe that caring for yourself is essential to caring for others.
          </p>
          <Link to="/contact?interest=retreat" className="inline-flex items-center gap-2 md:gap-3 px-8 md:px-10 py-4 md:py-5 bg-terracotta hover:bg-cream hover:text-sage transition-all duration-300 font-sans text-sm md:text-base font-bold uppercase tracking-widest shadow-xl rounded-lg hover:shadow-2xl hover:-translate-y-1">
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
