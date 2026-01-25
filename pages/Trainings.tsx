import React from 'react';

const Trainings: React.FC = () => {
  return (
    <div className="bg-cream">
      <section className="py-32 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-sage mb-6">Trainings & Keynotes</h1>
        <p className="text-xl font-sans text-charcoal/50 uppercase tracking-[0.3em] font-light">Practical tools for the legal profession</p>
      </section>

      <section className="py-24 bg-sage/5 px-6 border-y border-sage/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-sage mb-16 text-center">Formats</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "Keynote", duration: "60–90 minutes" },
              { label: "Workshop", duration: "2–3 hours" },
              { label: "Half-Day / Full-Day", duration: "Customizable" },
              { label: "Multi-Day Retreat", duration: "Custom for your org" }
            ].map((f, i) => (
              <div key={i} className="bg-cream p-10 text-center border border-sage/10 shadow-sm rounded-sm">
                <h4 className="font-serif text-2xl font-bold text-sage mb-2">{f.label}</h4>
                <p className="text-terracotta font-sans text-xs uppercase tracking-widest font-bold">{f.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-serif font-bold text-sage mb-8">What Participants Gain</h2>
          <ul className="space-y-6 text-lg font-sans text-charcoal/80 leading-relaxed">
            <li>A practical framework for understanding the human cost of legal work.</li>
            <li>Micro-practices for attention, regulation, and presence.</li>
            <li>Tools for healthier communication and institutional culture.</li>
            <li>Clear next steps for implementation.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-serif font-bold text-sage mb-8">Popular Topics</h2>
          <ul className="space-y-4 text-charcoal/70 italic font-serif text-xl">
            <li>"The Hidden Cost of Administering Justice"</li>
            <li>"Professional PPE for Legal Work"</li>
            <li>"The Art of Noticing"</li>
            <li>"Empathy vs. Professional Compassion"</li>
            <li>"Culture Change for Legal Systems"</li>
          </ul>
        </div>
      </section>

      <section className="py-24 bg-cream-darker text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-sage mb-8">Book a session</h2>
          <p className="mb-12 text-charcoal/60 leading-relaxed">We design custom programming for organizations across the country.</p>
          <a href="mailto:vivekssankaran@gmail.com" className="inline-block px-12 py-5 bg-sage text-cream font-sans font-bold uppercase tracking-widest hover:bg-terracotta transition-all">
            Inquire About Training
          </a>
        </div>
      </section>
    </div>
  );
};

export default Trainings;