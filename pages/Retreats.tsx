import React from 'react';

const Retreats: React.FC = () => {
  return (
    <div className="bg-cream">
      <section className="py-32 px-6 bg-sage text-cream text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Compassionate Leadership Retreats</h1>
          <p className="text-2xl font-serif italic text-cream/70 tracking-wide">Professional "PPE" for doing difficult legal work well</p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-terracotta font-sans uppercase tracking-[0.2em] text-sm font-bold mb-8">Why Retreats?</h2>
        <div className="space-y-8 text-xl font-sans leading-relaxed text-charcoal/80">
          <p>
            Legal work is demanding and cumulative. Conflict, trauma exposure, and high-stakes decisions add up over time—often invisibly. Retreats create rare space to step back, restore capacity, and build the skills and community that sustain us for the long haul.
          </p>
          <p className="italic border-l-4 border-sage pl-8 py-4 bg-sage/5">
            Unlike a typical CLE, our retreats are immersive experiences designed to help you reconnect with why you entered this work—and develop practical tools to protect your well-being while doing it well.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream-darker px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl font-serif font-bold text-sage">What to Expect</h2>
            <div className="grid gap-8">
              {[
                { title: "Confidential Space", desc: "A supportive environment with peers who understand your work." },
                { title: "Guided Reflection", desc: "Evidence-informed skill-building and deep introspection." },
                { title: "Practical Tools", desc: "Techniques you can use immediately in the courtroom or office." },
                { title: "Community", desc: "Connection that reduces professional isolation." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-terracotta/20 flex items-center justify-center text-terracotta font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-sage">{item.title}</h4>
                    <p className="text-charcoal/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-cream p-12 shadow-xl border border-sage/10">
            <h3 className="font-serif text-2xl font-bold text-sage mb-8 italic">Sample Retreat Themes</h3>
            <ul className="space-y-6 font-sans text-charcoal/80">
              <li><strong className="text-terracotta">Self-Compassion</strong> — Sustainable resilience without self-judgment.</li>
              <li><strong className="text-terracotta">Attention & Presence</strong> — The science of noticing in high-stakes settings.</li>
              <li><strong className="text-terracotta">Emotional Agility</strong> — Moving from reaction to purposeful response.</li>
              <li><strong className="text-terracotta">Boundaries</strong> — Responding to suffering without losing authority.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-cream">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-sage mb-16">What Participants Say</h2>
          <div className="space-y-12 text-left">
            {[
              "I highly recommend this retreat for anyone working in a child welfare capacity. Even after 27 years as a jurist, this retreat opened my eyes and heart in so many ways. You will leave a better person and jurist because of it.",
              "To feel seen and heard by others in a similar situation has granted me a sense of peace that I have not felt in a long time.",
              "A great reset to continue our work with integrity, compassion, and renewed passion."
            ].map((quote, i) => (
              <blockquote key={i} className="text-2xl font-serif italic text-sage leading-relaxed border-b border-sage/10 pb-12 last:border-0">
                "{quote}"
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-sage text-cream text-center">
        <h2 className="text-3xl font-serif font-bold mb-8">Ready for a reset?</h2>
        <a href="mailto:vivekssankaran@gmail.com" className="inline-block px-12 py-5 bg-terracotta hover:bg-cream hover:text-sage transition-all font-sans font-bold uppercase tracking-widest shadow-lg">
          Get notified about upcoming retreats
        </a>
      </section>
    </div>
  );
};

export default Retreats;