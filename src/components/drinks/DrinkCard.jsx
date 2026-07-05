import { Link } from "react-router-dom";

export default function DrinkCard({ drink }) {
  return (
    <Link
      to={`/drinks/${drink.slug}`}
      className="group block overflow-hidden rounded-xl bg-white shadow-card border border-brand-border transition-all duration-300 hover:-translate-y-1 hover:shadow-hover"
    >
      <div className="relative h-64 overflow-hidden bg-brand-cream/50">
        <img
          src={drink.cardImage}
          alt={drink.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src =
              "https://placehold.co/800x600/F6F1E7/1F5C3A?text=Desi+Break";
          }}
        />

        {drink.featured && (
          <span className="absolute left-4 top-4 rounded-xl bg-brand-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-cream shadow-sm">
            Featured
          </span>
        )}
      </div>

      <div className="space-y-4 p-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-brand-secondary">
            {drink.region}
          </p>

          <h3 className="mt-2 text-2xl font-bold text-brand-primary font-heading">
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
          <span className="rounded-xl bg-brand-primary/10 px-3 py-1 text-sm font-medium text-brand-primary">
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