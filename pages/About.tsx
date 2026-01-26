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
      bio: "Bridgette Carr is a Clinical Professor of Law at the University of Michigan and co-founder of The Compassionate Law Project.\n\nFor more than fifteen years, she has built spaces where people feel seen and heard. She founded Michigan Law's Human Trafficking Clinic, where she learned that small acts of human attention—making sure a client has clean clothes, returning a phone call when no one else would—can be as important as any legal victory. She co-created Designing a Fulfilling Life in the Law, a course that helps law students align their values with their daily practice.\n\nNow she co-leads the Compassionate Leadership Retreat with Vivek Sankaran and Rick Barinbaum: a phones-down, nature-based intensive that helps lawyers and judges carry heavy work with steadier presence, without burning out. She also co-directs Michigan Law's AI Law & Policy Clinic, exploring how technology might create more room for the human work that matters most.\n\nBridgette also serves as a Title IX hearing officer and as an expert witness in human trafficking matters. She has trained courts, law firms, and health systems nationwide on human trafficking.\n\nAcross all of her work runs a simple belief: when we create room for people to be fully human, the hardest work becomes possible."
    },
    {
      name: "Rick Barinbaum, LMSW",
      image: "/Rick.png",
      bio: "Rick Barinbaum, LMSW, is a clinical social worker who supports practitioners to flourish in hard, human-centered work. Rick brings a compassion lens that recognizes suffering, makes space for tension and contradiction, and helps people stay connected to purpose and meaning in work that is both demanding and deeply fulfilling.\n\nHe teaches at the University of Michigan Schools of Social Work and Law and serves as an expert consultant for students and faculty in the Law School's clinical program, teaching select classes alongside clinical faculty and consulting with students on active cases. His work focuses on supporting the well-being of law students, trauma-informed practice, client engagement, biopsychosocial assessment, and interdisciplinary strategy in practice areas including child advocacy, human trafficking, juvenile justice, and civil legal advocacy.\n\nIn addition to his teaching, Rick's compassion-focused work spans individual consultation, support to agencies and organizations, local and national speaking engagements, and co-facilitating compassion-focused retreats and trainings with colleagues in multiple states. He is also a facilitator with Michigan's Commission on Well-Being in the Law, a statewide initiative focused on strengthening well-being and resilience across the legal profession."
    }
  ];

  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="py-16 md:py-36 px-4 sm:px-6 text-center max-w-5xl mx-auto relative">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-sage/5 blur-3xl"></div>
        <span className="text-terracotta font-sans text-xs uppercase tracking-[0.3em] font-bold">Our Team</span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-sage mt-4 mb-8">About Us</h1>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px bg-terracotta/40"></div>
          <div className="w-2 h-2 rounded-full bg-terracotta/30"></div>
          <div className="w-12 h-px bg-terracotta/40"></div>
        </div>
        <p className="text-xl md:text-2xl font-serif italic text-charcoal/70 leading-relaxed max-w-3xl mx-auto">
          United by a shared belief: compassion is not a soft skill—it's the foundation of effective, sustainable legal practice.
        </p>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="space-y-20 md:space-y-40">
          {team.map((member, i) => (
            <div key={i} className={`grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {/* Image */}
              <div className={`relative group ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="absolute -inset-4 bg-gradient-to-br from-sage/20 to-terracotta/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden md:block"></div>
                <div className="relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden shadow-xl md:shadow-2xl border border-sage/10 max-w-xs mx-auto md:max-w-none">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Decorative elements - hidden on mobile */}
                <div className={`absolute -z-10 w-24 h-24 rounded-full bg-terracotta/10 hidden md:block ${i % 2 === 0 ? '-top-6 -right-6' : '-top-6 -left-6'}`}></div>
                <div className={`absolute -z-10 w-16 h-16 rounded-full bg-sage/10 hidden md:block ${i % 2 === 0 ? '-bottom-4 -left-4' : '-bottom-4 -right-4'}`}></div>
              </div>

              {/* Content */}
              <div className={`space-y-4 md:space-y-6 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-sage text-center md:text-left">{member.name}</h2>
                <div className="font-sans text-charcoal/70 leading-relaxed text-base md:text-lg whitespace-pre-line">{member.bio}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-cream to-cream-darker">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-sage mb-4 md:mb-6">Ready to bring compassion to your practice?</h2>
          <p className="text-charcoal/60 text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto">
            Let's explore how compassion-centered training can transform your organization and support your people.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-10 py-4 md:py-5 bg-sage text-cream font-sans text-xs md:text-sm uppercase tracking-widest font-bold hover:bg-terracotta hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-lg shadow-lg"
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