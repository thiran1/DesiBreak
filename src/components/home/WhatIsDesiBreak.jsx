import { BRAND } from "../../config/brand";
import SectionHeading from "../common/SectionHeading";

export default function WhatIsDesiBreak() {
  return (
    <section className="bg-white py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="Who we are"
          title="A celebration of Indian heritage"
          description="Desi Break makes authentic regional beverages accessible while honoring the stories and craft behind every sip."
          align="left"
        />

        <div className="mt-16 grid gap-12 xl:grid-cols-[1.2fr_0.8fr] xl:items-start">

          <div className="space-y-8">
            <p className="text-lg leading-8 text-stone-600">
              Every corner of India has beverages with stories—traditions passed down through generations, recipes shaped by climate and culture, and flavors unique to their regions.
            </p>

            <p className="text-lg leading-8 text-stone-600">
              <strong>Desi Break exists to celebrate and preserve these authentic regional beverages.</strong> We source directly from artisans, honor traditional preparation methods, and bring these signature drinks to a modern, accessible platform.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {BRAND.values.map((value) => (
                <div key={value} className="rounded-3xl border border-brand-border bg-brand-light p-5">
                  <p className="text-sm uppercase tracking-[0.35em] text-brand-secondary">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-brand-border bg-brand-light p-10 shadow-card">
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-brand-secondary mb-3">
                  Our mission
                </p>
                <p className="text-xl leading-8 text-brand-primary font-semibold">
                  {BRAND.mission}
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-brand-secondary mb-3">
                  Our vision
                </p>
                <p className="text-xl leading-8 text-brand-primary font-semibold">
                  {BRAND.vision}
                </p>
              </div>

              <div className="rounded-[24px] border border-brand-border bg-white p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-brand-secondary mb-3">
                  What we stand for
                </p>
                <p className="text-base leading-7 text-stone-600">
                  We preserve culture, support artisans, and bring authentic tastes from across India closer to modern drinkers.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
