import { Link } from "react-router-dom";
import DrinkCard from "../drinks/DrinkCard";
import drinks from "../../data/drinks";
import { BRAND } from "../../config/brand";

export default function FeaturedDrinks() {
  const featuredDrinks = drinks.filter((drink) => drink.featured).slice(0, 3);

  return (
    <section className="py-32 bg-brand-light">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center mb-16">

          <p className="mb-3 font-semibold uppercase tracking-[0.35em] text-brand-secondary">
            DISCOVER SIGNATURE DRINKS
          </p>

          <h2 className="font-heading text-5xl text-brand-primary mb-6">
            Featured Regional Beverages
          </h2>

          <p className="text-lg leading-8 text-stone-600">
            Handpicked drinks that represent the diversity, authenticity and stories of India's regional beverage culture.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredDrinks.map((drink) => (
            <DrinkCard key={drink.slug} drink={drink} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/explore"
            className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold transition-all duration-300 bg-brand-primary text-brand-cream hover:bg-[#18482D] shadow-brand"
          >
            Explore Full Menu
          </Link>
        </div>

      </div>
    </section>
  );
}
