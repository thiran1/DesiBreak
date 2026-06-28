import { Link } from "react-router-dom";
import regions from "../../data/regions";

export default function DiscoverIndia() {
  return (
    <section className="bg-brand-light py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 font-semibold uppercase tracking-[0.35em] text-brand-secondary">
            EXPLORE INDIA
          </p>

          <h2 className="font-heading text-5xl text-brand-primary">
            Taste India,
            <br />
            One Region At A Time.
          </h2>

          <p className="mt-8 text-lg leading-8 text-stone-600">
            Every region has its own climate, traditions and forgotten beverages.
            Begin your journey by selecting a state.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {regions.map((region) => (

            <Link
              key={region.slug}
              to={`/regions/${region.slug}`}
              className="group rounded-3xl border border-brand-border bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-hover"
            >

              <div className="mb-8 h-48 overflow-hidden rounded-2xl bg-stone-100">

                <img
                  src={region.heroImage}
                  alt={region.state}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/800x600/F8F4EC/12372A?text=" +
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

                <span className="rounded-full bg-brand-light px-4 py-2 text-sm text-brand-primary">
                  {region.drinkCount} Drink
                  {region.drinkCount > 1 ? "s" : ""}
                </span>

                <span className="font-semibold text-brand-primary">
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