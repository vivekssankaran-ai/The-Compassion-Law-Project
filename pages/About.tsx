import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-cream">
      <section className="py-32 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-sage mb-8">About</h1>
        <p className="text-2xl font-serif italic text-charcoal/70 leading-relaxed">
          We help people in legal systems do difficult work without losing their humanity.
        </p>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto space-y-32">
        {/* Vivek */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="bg-sage/5 aspect-[4/5] rounded-sm flex items-center justify-center border border-sage/10 overflow-hidden shadow-lg bg-center bg-cover" style={{backgroundImage: 'url(/vivek.jpg)'}}>
             {!window.location.href.includes('vivek.jpg') && <span className="text-sage/20 font-serif italic text-2xl">Vivek Sankaran</span>}
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold text-sage">Vivek Sankaran</h2>
            <p className="font-sans leading-relaxed text-charcoal/80 text-lg italic">Clinical Professor of Law, University of Michigan</p>
            <div className="space-y-4 font-sans text-charcoal/70 leading-relaxed">
              <p>Vivek is a certified Ambassador of Applied Compassion through Stanford University's CCARE. At Michigan Law, he directs the Child Advocacy Law Clinic and has litigated numerous cases before the Michigan Supreme Court.</p>
            </div>
          </div>
        </div>

        {/* Bridgette */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-4xl font-serif font-bold text-sage">Bridgette Carr</h2>
            <p className="font-sans leading-relaxed text-charcoal/80 text-lg italic">Associate Dean, University of Michigan Law School</p>
            <div className="space-y-4 font-sans text-charcoal/70 leading-relaxed">
              <p>Bridgette founded the nation's first Human Trafficking Clinic. Her drive for creating compassionate systems is fueled by her belief that if work can harm, work can also heal.</p>
            </div>
          </div>
          <div className="bg-sage/5 aspect-[4/5] rounded-sm flex items-center justify-center border border-sage/10 overflow-hidden shadow-lg bg-center bg-cover" style={{backgroundImage: 'url(/bridgette.jpg)'}}>
            {!window.location.href.includes('bridgette.jpg') && <span className="text-sage/20 font-serif italic text-2xl">Bridgette Carr</span>}
          </div>
        </div>

        {/* Rick */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="bg-sage/5 aspect-[4/5] rounded-sm flex items-center justify-center border border-sage/10 overflow-hidden shadow-lg bg-center bg-cover" style={{backgroundImage: 'url(/rick.png)'}}>
            {!window.location.href.includes('rick.png') && <span className="text-sage/20 font-serif italic text-2xl">Rick Barinbaum</span>}
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold text-sage">Rick Barinbaum, LMSW</h2>
            <p className="font-sans leading-relaxed text-charcoal/80 text-lg italic">Clinical Social Worker & Consultant</p>
            <div className="space-y-4 font-sans text-charcoal/70 leading-relaxed">
              <p>Rick focuses on building resilient teams in high-stress environments. He provides consulting on compassion-based practice and team well-being across the country.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;