import { useParams, Link } from "react-router-dom";
import regions from "../data/regions";
import drinks from "../data/drinks";
import DrinkGrid from "../components/drinks/DrinkGrid";

export default function RegionDetails() {
  const { slug } = useParams();

  const region = regions.find((r) => r.slug === slug);

  if (!region) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-32 text-center">
        <h1 className="font-heading text-5xl text-brand-primary">
          Region Not Found
        </h1>

        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-brand-primary px-8 py-4 text-white"
        >
          Back Home
        </Link>
      </div>
    );
  }

  const regionDrinks = drinks.filter((drink) =>
    region.drinks.includes(drink.slug)
  );

  return (
    <>
      <section className="bg-brand-light py-24">

        <div className="mx-auto max-w-7xl px-6">

          <p className="uppercase tracking-[0.35em] text-brand-secondary font-semibold">
            DISCOVER INDIA
          </p>

          <h1 className="mt-4 font-heading text-6xl text-brand-primary">
            {region.state}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-600">
            {region.description}
          </p>

        </div>

      </section>

      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <DrinkGrid
            title="Traditional Drinks"
            subtitle={`Explore authentic beverages from ${region.state}.`}
            drinks={regionDrinks}
          />

        </div>

      </section>
    </>
  );
}