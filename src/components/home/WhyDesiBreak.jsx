import { Heart, Leaf, MapPinned } from "lucide-react";
import { BRAND } from "../../config/brand";

const features = [
  {
    icon: MapPinned,
    title: "Regional Excellence",
    description:
      "Every beverage is rooted in a real region with a real story, celebrating the incredible diversity of Indian culture and tradition."
  },
  {
    icon: Leaf,
    title: "Authentically Crafted",
    description:
      "Traditional recipes prepared with carefully selected ingredients, honoring the heritage and expertise of local craftspeople."
  },
  {
    icon: Heart,
    title: "Stories Worth Sharing",
    description:
      "Every sip connects you to the people, places, and traditions that make India's beverage culture truly unique and remarkable."
  }
];

export default function WhyDesiBreak() {
  return (
    <section className="bg-white py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 uppercase tracking-[0.35em] text-brand-secondary font-semibold">
            WHY DESI BREAK
          </p>

          <h2 className="font-heading text-5xl text-brand-primary">
            More Than a Beverage Brand
          </h2>

          <p className="mt-8 text-lg leading-8 text-stone-600">
            {BRAND.mission}
          </p>

        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-xl border border-brand-border bg-brand-light p-10 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-hover"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <Icon size={30} />
                </div>

                <h3 className="font-heading text-2xl text-brand-primary">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-stone-600">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}