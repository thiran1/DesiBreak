import { Link } from "react-router-dom";

export default function DrinkCard({ drink }) {
  return (
    <Link
      to={`/drinks/${drink.slug}`}
      className="group block overflow-hidden rounded-3xl bg-white shadow-sm border border-stone-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative h-64 overflow-hidden bg-stone-100">
        <img
          src={drink.cardImage}
          alt={drink.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src =
              "https://placehold.co/800x600/F8F4EC/12372A?text=Desi+Break";
          }}
        />

        {drink.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-brand-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Featured
          </span>
        )}
      </div>

      <div className="space-y-4 p-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-brand-secondary">
            {drink.region}
          </p>

          <h3 className="mt-2 text-2xl font-bold text-brand-primary">
            {drink.name}
          </h3>

          <p className="mt-2 italic text-stone-600">
            {drink.tagline}
          </p>
        </div>

        <p className="line-clamp-3 leading-7 text-stone-600">
          {drink.shortDescription}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700">
            {drink.category}
          </span>

          <span className="font-semibold text-brand-primary transition-all group-hover:translate-x-1">
            Discover →
          </span>
        </div>
      </div>
    </Link>
  );
}