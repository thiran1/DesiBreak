import { Heart, Leaf, MapPinned } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const metrics = [
  {
    value: "1",
    label: "destination",
    description: "One home for authentic regional beverages."
  },
  {
    value: "22",
    label: "signature drinks",
    description: "Curated selections from across India's tasting regions."
  },
  {
    value: "11",
    label: "states",
    description: "Distinct recipes from the north, south, east, and west."
  },
  {
    value: "100%",
    label: "authentic recipes",
    description: "Traditional preparation, real ingredients, regional flavor."
  }
];

const features = [
  {
    icon: MapPinned,
    title: "Rooted in region",
    description:
      "Each drink is sourced from the region where it originated, preserving place, flavor, and story."
  },
  {
    icon: Leaf,
    title: "Crafted with care",
    description:
      "Recipes are made using traditional methods and thoughtfully chosen ingredients."
  },
  {
    icon: Heart,
    title: "Celebrated together",
    description:
      "A shared beverage experience that elevates culture without overselling it."
  }
];

export default function WhyDesiBreak() {
  return (
    <section className="bg-white py-28 lg:py-32">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="Why Desi Break"
          title="One destination for authentic regional beverages"
          description="Experience a premium collection of signature drinks, rooted in tradition and designed for modern discovery."
        />

        <div className="mt-16 grid gap-8 xl:grid-cols-[1.4fr_1fr] xl:items-start">
          <div className="grid gap-6 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[28px] border border-brand-border bg-brand-light p-8 shadow-card"
              >
                <span className="text-5xl font-heading font-semibold text-brand-primary">
                  {metric.value}
                </span>
                <p className="mt-3 text-sm uppercase tracking-[0.35em] text-brand-secondary">
                  {metric.label}
                </p>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-[28px] border border-brand-border bg-brand-light p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-hover"
                >
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-brand-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-stone-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
}