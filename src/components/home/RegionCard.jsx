import { Link } from "react-router-dom";

export default function RegionCard({ region }) {
  return (
    <Link
      to={`/regions/${region.slug}`}
      aria-label={`Explore ${region.state}`}
      className="group flex flex-col overflow-hidden rounded-[28px] border border-brand-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-hover"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <img
          src={region.heroImage}
          alt={region.state}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src =
              `https://placehold.co/800x600/F6F1E7/1F5C3A?text=${encodeURIComponent(region.state)}`;
          }}
        />
      </div>

      <div className="flex flex-1 flex-col gap-5 p-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-brand-secondary">
            {region.direction || "India"}
          </p>

          <h3 className="mt-4 text-3xl font-heading font-semibold text-brand-primary">
            {region.state}
          </h3>

          <p className="mt-4 text-base leading-7 text-stone-600">
            {region.description}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-4">
          <span className="inline-flex rounded-full bg-brand-light px-4 py-2 text-sm font-semibold text-brand-primary">
            {region.drinkCount} Drink{region.drinkCount > 1 ? "s" : ""}
          </span>
          <span className="font-semibold text-brand-primary transition-transform duration-300 group-hover:translate-x-1">
            Explore →
          </span>
        </div>
      </div>
    </Link>
  );
}
