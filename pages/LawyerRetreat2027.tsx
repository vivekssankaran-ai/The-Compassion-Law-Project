import React from 'react';
import { Link } from 'react-router-dom';

const LawyerRetreat2027: React.FC = () => {
  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-sage via-sage to-sage-light text-cream text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-cream blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-terracotta blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto relative">
          <span className="inline-block px-6 py-2 bg-cream/10 rounded-full text-cream/80 text-xs uppercase tracking-[0.3em] font-bold mb-6 backdrop-blur-sm">
            January 27-29, 2027
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            Reconnect, Recharge, and Lead with Purpose
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-cream/30"></div>
            <div className="w-2 h-2 rounded-full bg-terracotta"></div>
            <div className="w-12 h-px bg-cream/30"></div>
          </div>
          <p className="text-xl md:text-2xl font-serif italic text-cream/80 tracking-wide max-w-3xl mx-auto">
            Join Our 3-Day Compassion Retreat for Lawyers
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl md:text-2xl font-sans leading-relaxed text-charcoal/80 mb-8">
            The practice of law demands intellectual rigor, long hours, and emotional resilience. Too often, the human side of the profession—your well-being, clarity, and sense of purpose—gets pushed aside.
          </p>
          <p className="text-lg md:text-xl font-sans leading-relaxed text-charcoal/70">
            We invite you to step away from the daily pressures and join us for a transformative <strong className="text-sage">Three-Day Compassion Retreat for Lawyers</strong>—a restorative experience designed exclusively for legal professionals seeking renewed focus, resilience, and meaningful connection.
          </p>
        </div>
      </section>

      {/* Why This Retreat */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-cream-darker to-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">The Experience</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-sage mt-4">Why This Retreat?</h2>
          </div>
          <p className="text-lg text-charcoal/70 text-center mb-10 max-w-3xl mx-auto">
            Over three immersive days, you will:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { text: "Reconnect with your purpose in the practice of law", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              { text: "Develop practical tools to manage stress and prevent burnout", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
              { text: "Strengthen emotional intelligence and client relationships", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
              { text: "Cultivate clarity for leadership and decision-making", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
              { text: "Build authentic connections with fellow attorneys in a confidential, supportive environment", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-cream rounded-xl border border-sage/10">
                <div className="w-10 h-10 rounded-lg bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <p className="text-charcoal/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We'll Explore */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="relative p-8 md:p-12 bg-gradient-to-br from-sage/5 to-sage/10 rounded-2xl border-l-4 border-sage">
          <p className="text-lg md:text-xl font-sans leading-relaxed text-charcoal/80">
            This retreat will reflect on the toll of practice including the constant exposure to suffering, conflict and high client expectations. It will explore why well-being and civility are not luxuries but professional skills. Most importantly, it will allow you to <strong className="text-sage">return to your practice grounded, energized, and inspired</strong>.
          </p>
        </div>
      </section>

      {/* Location and Details */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-cream to-cream-darker">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">Details</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-sage mt-4">Retreat Location and Dates</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cream p-8 rounded-xl border border-sage/10 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-sage mb-3">Location</h3>
              <p className="text-charcoal/70 mb-4">
                <a href="https://maryvilleretreatcenter.org/lodging/" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline font-semibold">
                  Maryville Retreat Center
                </a><br />
                Holly, Michigan
              </p>
              <p className="text-charcoal/60 text-sm">
                Space is intentionally limited to preserve an intimate and confidential experience. Early registration is recommended.
              </p>
            </div>

            <div className="bg-cream p-8 rounded-xl border border-sage/10 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-sage mb-3">Dates</h3>
              <p className="text-charcoal/70 mb-4">
                <span className="font-semibold">January 27-29, 2027</span>
              </p>
              <p className="text-charcoal/60 text-sm">
                The retreat begins with dinner on Day 1 and concludes after lunch on Day 3.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-terracotta/10 p-8 rounded-xl text-center">
            <h3 className="font-serif text-2xl font-bold text-sage mb-3">Retreat Fee</h3>
            <p className="text-4xl font-serif font-bold text-terracotta mb-2">$750</p>
            <p className="text-charcoal/60">
              An extremely discounted rate that includes all meals, lodging, and retreat materials.
            </p>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">Is This For You?</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-sage mt-4">Who Should Attend?</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "Attorneys experiencing stress or burnout",
            "Law firm leaders seeking sustainable leadership tools",
            "In-house counsel navigating complex demands",
            "Legal professionals committed to personal growth and professional excellence"
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start p-5 bg-cream-darker rounded-xl">
              <div className="w-6 h-6 rounded-full bg-terracotta/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-charcoal/70">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-sage via-sage to-sage-light text-cream text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cream blur-3xl"></div>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-cream/80 mb-6 leading-relaxed">
            The legal profession needs strong advocates—but it also needs healthy, centered leaders. This retreat is an opportunity to invest in the most important asset of your practice: <strong>you</strong>.
          </p>
          <p className="text-2xl md:text-3xl font-serif italic text-cream mb-10">
            We would be honored to have you join us.
          </p>
          <a
            href="https://blocksurvey.io/compassion-retreat-registration-Jrfr_lG.RJ.IqDzWQlLtJA?v=l"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-terracotta hover:bg-cream hover:text-sage transition-all duration-300 font-sans text-sm font-bold uppercase tracking-widest shadow-xl rounded-lg"
          >
            Register Now
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <div className="mt-10">
            <Link to="/retreats" className="text-cream/60 hover:text-cream transition-colors text-sm">
              ← Back to All Retreats
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LawyerRetreat2027;
