import { Link } from "react-router-dom";
import DrinkCard from "../drinks/DrinkCard";
import SectionHeading from "../common/SectionHeading";
import drinks from "../../data/drinks";

export default function FeaturedDrinks() {
  const featuredDrinks = drinks.filter((drink) => drink.featured).slice(0, 3);

  return (
    <section className="bg-brand-light py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="Discover signature drinks"
          title="Featured regional beverages"
          description="Handpicked signature drinks that celebrate India's regional diversity through premium flavor, texture, and tradition."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredDrinks.map((drink) => (
            <DrinkCard key={drink.slug} drink={drink} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/explore"
            className="inline-flex items-center justify-center rounded-full bg-brand-primary px-8 py-4 text-base font-semibold text-brand-cream shadow-brand transition-colors duration-300 hover:bg-[#18482D]"
          >
            Explore full menu
          </Link>
        </div>

      </div>
    </section>
  );
}
