import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const team = [
    {
      name: "Vivek Sankaran",
      image: "/Vivek.jpg",
      bio: "Vivek Sankaran is a clinical professor of law at the University of Michigan Law School, where he champions the rights of children and parents involved in child welfare proceedings. His work centers on transforming the child welfare system by empowering families, advancing justice through thoughtful legal reform, and building more compassionate legal institutions.\n\nSankaran directs both the Child Advocacy Law Clinic and the Child Welfare Appellate Clinic, where students represent clients in trial and appellate proceedings. He also co-directs Michigan Law's AI Law and Policy Clinic, equipping students to tackle critical justice challenges at the intersection of emerging technology, law, and ethics.\n\nNationally recognized for both his teaching and advocacy, Sankaran is the recipient of the John W. Reed Michigan Lawyer Legacy Award from the State Bar of Michigan and Michigan Law's Teaching Award for Support of Student Community and Well-Being. His appellate litigation has helped shape Michigan law on the rights of families.\n\nBeyond the courtroom and classroom, Sankaran is leading a national movement to bring compassion into legal practice. After completing the Applied Compassion Training at Stanford University, he now designs and facilitates compassion retreats across the country for judges, lawyers, and law students.\n\nIn 2009, he founded the Detroit Center for Family Advocacy, the first legal model in the nation to use multidisciplinary teams to prevent unnecessary foster care placements. He has worked closely with the American Bar Association, Casey Family Programs, and the National Center for State Courts on initiatives to promote justice and family preservation."
    },
    {
      name: "Bridgette Carr",
      image: "/Bridgette.jpg",
      bio: "Bridgette Carr is a clinical professor of law at the University of Michigan. For more than fifteen years, she has built spaces where people feel seen and heard. She founded Michigan Law's Human Trafficking Clinic, where she learned that small acts of human attention—making sure a client has clean clothes, returning a phone call when no one else would—can be as important as any legal victory. She co-created Designing a Fulfilling Life in the Law, a course that helps law students align their values with their daily practice.\n\nNow she co-leads the Compassionate Leadership Retreat with Vivek Sankaran and Rick Barinbaum: a phones-down, nature-based intensive that helps lawyers and judges carry heavy work with steadier presence, without burning out. She also co-directs Michigan Law's AI Law & Policy Clinic, exploring how technology might create more room for the human work that matters most.\n\nBridgette also serves as a Title IX hearing officer and as an expert witness in human trafficking matters. She has trained courts, law firms, and health systems nationwide on human trafficking.\n\nAcross all of her work runs a simple belief: when we create room for people to be fully human, the hardest work becomes possible."
    },
    {
      name: "Rick Barinbaum",
      image: "/Rick.png",
      bio: "Rick Barinbaum, LMSW, is a clinical social worker who supports practitioners to flourish in hard, human-centered work. Rick brings a compassion lens that recognizes suffering, makes space for tension and contradiction, and helps people stay connected to purpose and meaning in work that is both demanding and deeply fulfilling.\n\nHe teaches at the University of Michigan Schools of Social Work and Law and serves as an expert consultant for students and faculty in the Law School's clinical program, teaching select classes alongside clinical faculty and consulting with students on active cases. His work focuses on supporting the well-being of law students, trauma-informed practice, client engagement, biopsychosocial assessment, and interdisciplinary strategy in practice areas including child advocacy, human trafficking, juvenile justice, and civil legal advocacy.\n\nIn addition to his teaching, Rick's compassion-focused work spans individual consultation, support to agencies and organizations, local and national speaking engagements, and co-facilitating compassion-focused retreats and trainings with colleagues in multiple states. He is also a facilitator with Michigan's Commission on Well-Being in the Law, a statewide initiative focused on strengthening well-being and resilience across the legal profession."
    }
  ];

  return (
    <div className="bg-cream">
      {/* Full-Screen Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80"
            alt="Mountain peaks at golden hour"
            className="w-full h-full object-cover"
            style={{ animation: 'slowZoom 20s ease-out forwards' }}
          />
          <div className="hero-overlay absolute inset-0"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-cream"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <span className="inline-block px-6 py-2 bg-cream/10 backdrop-blur-sm rounded-full text-cream/90 text-xs uppercase tracking-[0.3em] font-bold mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Our Team
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-cream mb-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            About Us
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="w-16 h-px bg-cream/40"></div>
            <div className="w-2 h-2 rounded-full bg-terracotta"></div>
            <div className="w-16 h-px bg-cream/40"></div>
          </div>
          <p className="text-xl md:text-2xl font-serif italic text-cream/80 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
            United by a shared belief: compassion is not a soft skill—it's the foundation of effective, sustainable legal practice.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
        <div className="space-y-32 md:space-y-48">
          {team.map((member, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${i % 2 === 1 ? 'reveal-right' : 'reveal-left'}`}>
              {/* Image */}
              <div className={`relative group ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="absolute -inset-6 bg-gradient-to-br from-sage/20 to-terracotta/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden lg:block"></div>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-sage/10 max-w-md mx-auto lg:max-w-none">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sage/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Decorative elements */}
                <div className={`absolute -z-10 w-32 h-32 rounded-full bg-terracotta/10 hidden lg:block ${i % 2 === 0 ? '-top-8 -right-8' : '-top-8 -left-8'}`}></div>
                <div className={`absolute -z-10 w-20 h-20 rounded-full bg-sage/10 hidden lg:block ${i % 2 === 0 ? '-bottom-6 -left-6' : '-bottom-6 -right-6'}`}></div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <div className="w-12 h-1 bg-terracotta mb-6"></div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-sage">{member.name}</h2>
                </div>
                <div className="font-sans text-charcoal/70 leading-relaxed text-lg space-y-6">
                  {member.bio.split('\n\n').map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Break with Quote */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2000&q=80"
          alt="Foggy mountain valley at dawn"
          className="w-full h-full object-cover parallax-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sage/50 via-sage/30 to-terracotta/30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-cream text-2xl md:text-4xl lg:text-5xl font-serif italic text-center px-6 max-w-4xl animate-parallax-float">
            "When we create room for people to be fully human, the hardest work becomes possible."
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 md:py-40 px-6 bg-gradient-to-b from-cream-darker to-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center reveal">
            <div>
              <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">Our Mission</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage mt-4 mb-8 leading-tight">Bringing Compassion to Legal Practice</h2>
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p>
                  We believe that the legal profession's greatest strength lies not in detachment, but in the capacity to hold space for human complexity while maintaining professional excellence.
                </p>
                <p>
                  Through evidence-based training and immersive retreats, we help legal professionals develop sustainable practices that honor both their commitment to justice and their own humanity.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "15+", label: "Years of Experience" },
                { number: "500+", label: "Legal Professionals Trained" },
                { number: "20+", label: "Retreats Facilitated" },
                { number: "12", label: "States Reached" }
              ].map((stat, i) => (
                <div key={i} className="p-6 md:p-8 bg-cream rounded-2xl border border-sage/10 text-center hover:shadow-xl transition-all duration-300 hover:border-terracotta/20">
                  <div className="text-4xl md:text-5xl font-serif font-bold text-terracotta mb-2">{stat.number}</div>
                  <div className="text-charcoal/50 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-Screen CTA */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=80"
            alt="Starlit mountain landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sage/70"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto reveal-scale">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-6">Ready to bring compassion to your practice?</h2>
          <p className="text-cream/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Let's explore how compassion-centered training can transform your organization and support your people.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-terracotta hover:bg-cream hover:text-sage transition-all duration-300 font-sans text-sm uppercase tracking-widest font-bold shadow-xl rounded-xl hover:shadow-2xl hover:-translate-y-1 text-cream"
          >
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

export default About;
