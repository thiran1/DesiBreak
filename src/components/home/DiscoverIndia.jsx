import { Link } from "react-router-dom";
import regions from "../../data/regions";
import { BRAND } from "../../config/brand";

export default function DiscoverIndia() {
  return (
    <section className="bg-brand-light py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 font-semibold uppercase tracking-[0.35em] text-brand-secondary">
            EXPLORE INDIA
          </p>

          <h2 className="font-heading text-5xl text-brand-primary">
            Discover Regional
            <br />
            Beverages from Across India.
          </h2>

          <p className="mt-8 text-lg leading-8 text-stone-600">
            Every region has its own unique climate, traditions and authentic beverages.
            Begin your journey by exploring a state.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {regions.map((region) => (

            <Link
              key={region.slug}
              to={`/regions/${region.slug}`}
              className="group rounded-xl border border-brand-border bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-hover"
            >

              <div className="mb-8 h-48 overflow-hidden rounded-xl bg-stone-100">

                <img
                  src={region.heroImage}
                  alt={region.state}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/800x600/F6F1E7/1F5C3A?text=" +
                      region.state;
                  }}
                />

              </div>

              <p className="text-sm uppercase tracking-widest text-brand-secondary">
                INDIA
              </p>

              <h3 className="mt-2 font-heading text-3xl text-brand-primary">
                {region.state}
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                {region.description}
              </p>

              <div className="mt-8 flex items-center justify-between">

                <span className="rounded-xl bg-brand-light px-4 py-2 text-sm text-brand-primary font-medium">
                  {region.drinkCount} Drink
                  {region.drinkCount > 1 ? "s" : ""}
                </span>

                <span className="font-semibold text-brand-primary transition-transform group-hover:translate-x-1">
                  Explore →
                </span>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}