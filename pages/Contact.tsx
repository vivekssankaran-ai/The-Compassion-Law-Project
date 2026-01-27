
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
    <div className="bg-cream min-h-[80vh] py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sage/5 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-terracotta/5 blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">Get Started</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-sage mt-4 mb-4 md:mb-6">Let's Connect</h1>
          <div className="flex items-center justify-center gap-4 mb-4 md:mb-6">
            <div className="w-12 h-px bg-terracotta/40"></div>
            <div className="w-2 h-2 rounded-full bg-terracotta/30"></div>
            <div className="w-12 h-px bg-terracotta/40"></div>
          </div>
          <p className="text-base md:text-lg lg:text-xl font-sans text-charcoal/60 max-w-2xl mx-auto">
            Interested in bringing a more human-centered approach to your legal environment? We look forward to hearing from you.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-10 lg:gap-16 items-start">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6 md:space-y-10">
            <div className="group p-6 md:p-8 bg-gradient-to-br from-cream to-cream-darker rounded-xl border border-sage/10 hover:border-terracotta/20 hover:shadow-xl transition-all duration-500">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-sage/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-terracotta/10 transition-colors">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-sage group-hover:text-terracotta transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="font-sans font-bold uppercase tracking-widest text-xs text-terracotta mb-2 md:mb-3">Email Us Directly</p>
              <a href="mailto:compassionatelawproject@gmail.com" className="text-lg md:text-xl lg:text-2xl font-serif text-sage hover:text-terracotta transition-colors break-all">
                compassionatelawproject@gmail.com
              </a>
            </div>

            <div className="p-5 md:p-8 bg-sage/5 rounded-xl border border-sage/10">
              <h3 className="font-serif text-lg md:text-xl font-bold text-sage mb-3 md:mb-4">What to expect</h3>
              <ul className="space-y-4 text-charcoal/60">
                {[
                  "Response within 2-3 business days",
                  "Initial consultation call to understand your needs",
                  "Customized proposal based on your goals"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <svg className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-sage/10 to-terracotta/10 rounded-2xl blur-xl opacity-50 hidden md:block"></div>
            <form
              action="https://formspree.io/f/mlgbezwe"
              method="POST"
              className="relative bg-cream p-5 sm:p-6 md:p-8 lg:p-10 shadow-xl md:shadow-2xl border border-sage/10 rounded-xl space-y-5 md:space-y-6"
            >
              <div className="flex items-center gap-3 mb-1 md:mb-2">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-terracotta/10 flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h2 className="font-serif text-xl md:text-2xl font-bold text-sage">Send a Message</h2>
              </div>

              <div className="space-y-4 md:space-y-5">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-sage/60">I'm interested in...</label>
                  <div className="relative">
                    <select
                      name="interest"
                      defaultValue={selectedInterest}
                      className="w-full bg-cream-darker border border-sage/20 p-3 md:p-4 rounded-lg focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 appearance-none transition-all text-sm md:text-base"
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
                <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-sage/60">Name</label>
                    <input
                      name="name"
                      placeholder="Your name"
                      required
                      className="w-full bg-cream-darker border border-sage/20 p-3 md:p-4 rounded-lg focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all text-sm md:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-sage/60">Email</label>
                    <input
                      name="email"
                      placeholder="your@email.com"
                      type="email"
                      required
                      className="w-full bg-cream-darker border border-sage/20 p-3 md:p-4 rounded-lg focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all text-sm md:text-base"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-sage/60">Message</label>
                  <textarea
                    name="message"
                    placeholder="How can we help you?"
                    required
                    className="w-full bg-cream-darker border border-sage/20 p-3 md:p-4 rounded-lg focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 h-28 md:h-32 resize-none transition-all text-sm md:text-base"
                  ></textarea>
                </div>

                <div className="pt-2 md:pt-4">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 md:gap-3 w-full bg-sage text-cream py-4 md:py-5 font-sans text-sm md:text-base font-bold uppercase tracking-widest hover:bg-terracotta transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg hover:-translate-y-0.5"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
  );
};

export default Contact;
