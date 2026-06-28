import { Heart, Leaf, MapPinned } from "lucide-react";

const features = [
  {
    icon: MapPinned,
    title: "Rooted Across India",
    description:
      "Every beverage comes from a real region with a real story, celebrating India's incredible diversity."
  },
  {
    icon: Leaf,
    title: "Authentic Ingredients",
    description:
      "Traditional recipes prepared with carefully selected ingredients while respecting their original heritage."
  },
  {
    icon: Heart,
    title: "More Than A Drink",
    description:
      "Every sip carries memories, culture and traditions that deserve to be preserved for future generations."
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
            We're Not Just Serving Drinks.
          </h2>

          <p className="mt-8 text-lg leading-8 text-stone-600">
            India has hundreds of regional beverages that once formed part of
            everyday life. Many of them are slowly disappearing.

            Desi Break exists to rediscover these forgotten drinks and bring
            them back with authenticity, respect and pride.
          </p>

        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-brand-border bg-brand-light p-10 transition duration-300 hover:-translate-y-2 hover:shadow-hover"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary text-white">
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