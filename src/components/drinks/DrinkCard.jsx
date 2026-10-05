import { Link } from "react-router-dom";

export default function DrinkCard({ drink }) {
  return (
    <Link
      to={`/drinks/${drink.slug}`}
      aria-label={`Discover ${drink.name}`}
      className="group block overflow-hidden rounded-[28px] bg-white border border-brand-border shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-hover"
    >
      <div className="relative overflow-hidden bg-brand-cream/50">
        <div className="aspect-[4/5] w-full overflow-hidden bg-brand-cream/40">
          <img
            src={drink.cardImage}
            alt={drink.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.src =
                "https://placehold.co/800x1000/F6F1E7/1F5C3A?text=Desi+Break";
            }}
          />
        </div>

        {drink.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-brand-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-cream shadow-sm">
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

          <p className="mt-3 text-base italic text-stone-600">{drink.tagline}</p>
        </div>

        <p className="line-clamp-3 leading-7 text-stone-600">
          {drink.shortDescription}
        </p>

        <div className="flex items-center justify-between pt-3">
          <span className="rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-semibold text-brand-primary">
            {drink.category}
          </span>

          <span className="font-semibold text-brand-primary transition-transform duration-300 group-hover:translate-x-1">
            Discover →
          </span>
        </div>
      </div>
    </Link>
  );
}