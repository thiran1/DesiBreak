import { BRAND } from "../../config/brand";

export default function WhatIsDesiBreak() {
  return (
    <section className="py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left: Brand Story */}
          <div>
            <p className="mb-4 font-semibold uppercase tracking-[0.35em] text-brand-secondary">
              WHO WE ARE
            </p>
            
            <h2 className="font-heading text-5xl text-brand-primary mb-8">
              A Celebration of 
              <br />
              Indian Heritage
            </h2>
            
            <p className="text-lg leading-8 text-stone-600 mb-6">
              Every corner of India has beverages with stories—traditions passed down through generations, recipes shaped by climate and culture, and flavors unique to their regions.
            </p>
            
            <p className="text-lg leading-8 text-stone-600 mb-8">
              <strong>Desi Break exists to celebrate and preserve these authentic regional beverages.</strong> We source directly from artisans, honor traditional preparation methods, and bring these signature drinks to a modern, accessible platform.
            </p>
            
            <div className="pt-6 border-t border-brand-border">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-secondary mb-6">
                Our Core Values
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {BRAND.values.map((value) => (
                  <div key={value} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-brand-highlight rounded-full mt-2.5" />
                    <span className="font-semibold text-brand-primary">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right: Visual with stats or key message */}
          <div className="bg-gradient-to-br from-brand-light to-white rounded-2xl p-12 border border-brand-border shadow-md">
            
            <div className="space-y-12">
              
              {/* Mission */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-secondary mb-3">
                  Our Mission
                </p>
                <p className="text-xl leading-8 text-brand-primary font-semibold">
                  {BRAND.mission}
                </p>
              </div>
              
              {/* Vision */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-secondary mb-3">
                  Our Vision
                </p>
                <p className="text-xl leading-8 text-brand-primary font-semibold">
                  {BRAND.vision}
                </p>
              </div>
              
              {/* Positioning */}
              <div className="pt-8 border-t border-brand-border">
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-secondary mb-3">
                  What We Stand For
                </p>
                <p className="text-lg leading-8 text-stone-600">
                  We're not just serving drinks. We're preserving culture, supporting artisans, and bringing the authentic tastes of India closer to you—one sip at a time.
                </p>
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
