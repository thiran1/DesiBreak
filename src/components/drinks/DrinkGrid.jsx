import DrinkCard from "./DrinkCard";

export default function DrinkGrid({
  drinks = [],
  title,
  subtitle,
  emptyMessage = "No drinks found."
}) {
  return (
    <section className="w-full">
      {(title || subtitle) && (
        <div className="mb-10 text-center">
          {title && (
            <h2 className="text-4xl font-bold text-[#12372A]">
              {title}
            </h2>
          )}

          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-stone-600">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {drinks.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-stone-300 py-20 text-center">
          <h3 className="text-xl font-semibold text-stone-600">
            {emptyMessage}
          </h3>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {drinks.map((drink) => (
            <DrinkCard
              key={drink.id}
              drink={drink}
            />
          ))}
        </div>
      )}
    </section>
  );
}