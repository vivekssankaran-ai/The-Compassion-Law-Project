import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const team = [
    {
      name: "Vivek Sankaran",
      title: "Clinical Professor of Law, University of Michigan",
      image: "/vivek.jpg",
      bio: "Vivek is a certified Ambassador of Applied Compassion through Stanford University's CCARE. At Michigan Law, he directs the Child Advocacy Law Clinic and has litigated numerous cases before the Michigan Supreme Court.",
      credentials: ["Stanford CCARE Ambassador", "Child Advocacy Expert", "Michigan Supreme Court Litigator"]
    },
    {
      name: "Bridgette Carr",
      title: "Associate Dean, University of Michigan Law School",
      image: "/bridgette.jpg",
      bio: "Bridgette founded the nation's first Human Trafficking Clinic. Her drive for creating compassionate systems is fueled by her belief that if work can harm, work can also heal.",
      credentials: ["Human Trafficking Clinic Founder", "Associate Dean", "Systems Change Leader"]
    },
    {
      name: "Rick Barinbaum, LMSW",
      title: "Clinical Social Worker & Consultant",
      image: "/rick.png",
      bio: "Rick focuses on building resilient teams in high-stress environments. He provides consulting on compassion-based practice and team well-being across the country.",
      credentials: ["Licensed Clinical Social Worker", "Team Resilience Expert", "National Consultant"]
    }
  ];

  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="py-28 md:py-36 px-6 text-center max-w-5xl mx-auto relative">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-sage/5 blur-3xl"></div>
        <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">Our Team</span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-sage mt-4 mb-8">About Us</h1>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px bg-terracotta/40"></div>
          <div className="w-2 h-2 rounded-full bg-terracotta/30"></div>
          <div className="w-12 h-px bg-terracotta/40"></div>
        </div>
        <p className="text-xl md:text-2xl font-serif italic text-charcoal/70 leading-relaxed max-w-3xl mx-auto">
          We help people in legal systems do difficult work without losing their humanity.
        </p>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="space-y-32 md:space-y-40">
          {team.map((member, i) => (
            <div key={i} className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {/* Image */}
              <div className={`relative group ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="absolute -inset-4 bg-gradient-to-br from-sage/20 to-terracotta/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-sage/10">
                  <div
                    className="absolute inset-0 bg-sage/10 bg-center bg-cover transform group-hover:scale-105 transition-transform duration-700"
                    style={{backgroundImage: `url(${member.image})`}}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-sage/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-cream opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <p className="font-serif text-lg font-bold">{member.name}</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className={`absolute -z-10 w-24 h-24 rounded-full bg-terracotta/10 ${i % 2 === 0 ? '-top-6 -right-6' : '-top-6 -left-6'}`}></div>
                <div className={`absolute -z-10 w-16 h-16 rounded-full bg-sage/10 ${i % 2 === 0 ? '-bottom-4 -left-4' : '-bottom-4 -right-4'}`}></div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-terracotta/10 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-terracotta"></div>
                  <span className="text-terracotta text-xs font-bold uppercase tracking-wider">Team Member</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage">{member.name}</h2>
                <p className="font-sans leading-relaxed text-charcoal/60 text-lg italic border-l-4 border-terracotta/30 pl-4">{member.title}</p>
                <p className="font-sans text-charcoal/70 leading-relaxed text-lg">{member.bio}</p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {member.credentials.map((cred, j) => (
                    <span key={j} className="px-4 py-2 bg-sage/5 border border-sage/10 rounded-full text-sm font-sans text-sage/80 hover:bg-sage/10 transition-colors">
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-cream to-cream-darker">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-sage mb-6">Ready to work with us?</h2>
          <p className="text-charcoal/60 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss how we can bring human-centered leadership to your organization.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-sage text-cream font-sans text-sm uppercase tracking-widest font-bold hover:bg-terracotta hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-lg shadow-lg"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;