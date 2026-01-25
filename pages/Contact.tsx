
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const Contact: React.FC = () => {
  const { search } = useLocation();
  
  // Parse the query parameter: ?interest=retreat
  const selectedInterest = useMemo(() => {
    const params = new URLSearchParams(search);
    const interest = params.get('interest');
    if (interest === 'retreat') return 'Attending a retreat';
    if (interest === 'training') return 'Interested in a training or keynote';
    if (interest === 'custom') return 'Designing a retreat for an organization';
    return '';
  }, [search]);

  const emailSubject = "Inquiry for The Compassionate Law Project";
  const mailtoLink = `mailto:vivekssankaran@gmail.com?subject=${encodeURIComponent(emailSubject)}`;

  return (
    <div className="bg-cream min-h-[80vh] flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h1 className="text-5xl font-serif font-bold text-sage">Let's Connect</h1>
          <p className="text-xl font-sans text-charcoal/70 leading-relaxed">
            Interested in bringing a more human-centered approach to your legal environment? We look forward to hearing from you.
          </p>
          <div className="space-y-4">
            <p className="font-sans font-bold uppercase tracking-widest text-xs text-terracotta">Email Us</p>
            <a href={mailtoLink} className="text-2xl font-serif text-sage border-b border-sage/20 hover:border-terracotta transition-all block">
              vivekssankaran@gmail.com
            </a>
          </div>
        </div>

        <div className="bg-cream-darker p-10 shadow-xl border border-sage/10 space-y-6">
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest font-bold text-sage/60">I'm interested in...</label>
              <select 
                defaultValue={selectedInterest}
                className="w-full bg-cream border border-sage/20 p-4 rounded-sm focus:outline-none focus:border-terracotta appearance-none"
              >
                <option value="">General Inquiry</option>
                <option value="Attending a retreat">Attending a retreat</option>
                <option value="Interested in a training or keynote">Interested in a training or keynote</option>
                <option value="Designing a retreat for an organization">Designing a retreat for an organization</option>
              </select>
            </div>
             <input placeholder="Name" className="w-full bg-cream border border-sage/20 p-4 rounded-sm focus:outline-none focus:border-terracotta" />
             <input placeholder="Email" type="email" className="w-full bg-cream border border-sage/20 p-4 rounded-sm focus:outline-none focus:border-terracotta" />
             <textarea placeholder="How can we help?" className="w-full bg-cream border border-sage/20 p-4 rounded-sm focus:outline-none focus:border-terracotta h-32 resize-none"></textarea>
             
             <div className="pt-2">
                <p className="text-[10px] text-center text-sage/40 mb-4 italic leading-tight">Note: This form is a visual guide. Clicking below will open your email client to send your message directly to us.</p>
                <a href={mailtoLink} className="block w-full bg-sage text-cream py-4 font-sans font-bold uppercase tracking-widest hover:bg-terracotta transition-all shadow-md text-center">
                  Send Email
                </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
