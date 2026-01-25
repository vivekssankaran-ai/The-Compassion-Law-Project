
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000" 
            alt="Serene landscape" 
            className="w-full h-full object-cover grayscale-[30%] opacity-80"
          />
          <div className="absolute inset-0 bg-sage/20 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cream/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-7xl font-serif italic mb-8 leading-tight text-sage drop-shadow-sm">
            "Some experiences don't just stay with you—they quietly reshape you."
          </h2>
          <div className="w-12 h-1 bg-terracotta mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-sans text-charcoal/80 font-light uppercase tracking-[0.3em] max-w-2xl mx-auto">
            Human-centered leadership for law students, lawyers, and judges
          </p>
        </div>
      </section>

      {/* Main Blurb */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <p className="text-2xl md:text-3xl font-serif leading-relaxed text-sage mb-12 italic">
          The Compassionate Law Project develops human-centered leaders across the legal profession through evidence-informed trainings and retreats that nurture well-being, enhance decision quality, and build healthier cultures.
        </p>
        <div className="grid md:grid-cols-2 gap-12 text-left items-start mt-20">
          <div>
            <h3 className="text-terracotta font-sans uppercase tracking-[0.2em] text-sm font-bold mb-6">Why This Matters</h3>
            <p className="font-sans leading-relaxed text-charcoal/80 text-lg">
              Legal professionals face cumulative exposure to conflict, trauma, and high-stakes decisions—often without tools to sustain them. Burnout, isolation, and decision fatigue are widespread. We offer a different path.
            </p>
          </div>
          <div className="bg-sage/5 p-10 border-l-4 border-sage">
            <h3 className="text-sage font-serif text-2xl font-bold mb-6">What We Do</h3>
            <ul className="space-y-4">
              {[
                "Stay grounded and present under pressure",
                "Lead with clarity and humanity",
                "Reduce isolation and strengthen culture",
                "Translate compassion into practical habits"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start font-sans text-charcoal/70">
                  <span className="text-terracotta font-bold">●</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-cream-darker px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center font-serif text-4xl font-bold text-sage mb-16">Who We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Courts & Judges", icon: "🏛️" },
              { title: "Lawyers & Law Firms", icon: "⚖️" },
              { title: "Law Schools & Students", icon: "🎓" }
            ].map((item, i) => (
              <div key={i} className="bg-cream p-12 text-center rounded-sm shadow-sm border border-sage/5 hover:border-terracotta transition-colors group">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-sage mb-4">{item.title}</h3>
                <div className="h-px w-8 bg-sage/20 mx-auto transition-all group-hover:w-16 group-hover:bg-terracotta"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get In Touch */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-sage mb-4">Get In Touch</h2>
          <p className="text-charcoal/50 font-sans tracking-widest uppercase text-xs mb-12">How can we support your work?</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/contact?interest=retreat" className="bg-sage text-cream p-10 text-center hover:bg-terracotta transition-all shadow-md group">
              <h3 className="font-serif text-xl font-bold mb-2">Interested in attending a retreat</h3>
              <p className="text-sm opacity-60">Join an upcoming immersive experience</p>
            </Link>
            <Link to="/contact?interest=training" className="bg-sage text-cream p-10 text-center hover:bg-terracotta transition-all shadow-md group">
              <h3 className="font-serif text-xl font-bold mb-2">Interested in a training or keynote</h3>
              <p className="text-sm opacity-60">Practical tools for your team</p>
            </Link>
            <Link to="/contact?interest=custom" className="bg-sage text-cream p-10 text-center hover:bg-terracotta transition-all shadow-md group">
              <h3 className="font-serif text-xl font-bold mb-2">Custom program design</h3>
              <p className="text-sm opacity-60">Tailored solutions for your organization</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-24 bg-sage/5 px-6 border-t border-sage/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-sage mb-12">Resources</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="flex items-center gap-3 px-8 py-4 border border-sage/20 font-sans text-xs uppercase tracking-widest font-bold hover:bg-sage hover:text-cream transition-all">
              Program Menu (PDF)
            </button>
            <button className="flex items-center gap-3 px-8 py-4 border border-sage/20 font-sans text-xs uppercase tracking-widest font-bold hover:bg-sage hover:text-cream transition-all">
              Retreat Agenda (PDF)
            </button>
            <a href="https://viveksankaran.substack.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-terracotta text-cream font-sans text-xs uppercase tracking-widest font-bold hover:shadow-lg transition-all">
              More Time To Be Human
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
