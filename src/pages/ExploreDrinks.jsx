import { useMemo, useState } from "react";
import { Filter, Search } from "lucide-react";
import DrinkGrid from "../components/drinks/DrinkGrid";
import Container from "../components/common/Container";
import drinks from "../data/drinks";

export function ExploreDrinks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: "All drinks" },
    ...Array.from(new Set(drinks.map((drink) => drink.category))).map((category) => ({
      value: category,
      label: category,
    })),
  ];

  const filteredDrinks = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return drinks.filter((drink) => {
      const searchableText = [
        drink.name,
        drink.region,
        drink.state,
        drink.city,
        drink.shortDescription,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch = !query || searchableText.includes(query);
      const matchesCategory =
        selectedCategory === "all" || drink.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-brand-light">
      <section className="bg-brand-primary py-16 text-brand-cream">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-highlight">
            The beverage encyclopedia
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-5xl font-bold text-brand-cream md:text-6xl">
            Explore drinks from across India
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-cream/85">
            Start with a region, follow a story, and find your next favourite sip.
          </p>
        </Container>
      </section>

      <section className="sticky top-20 z-40 border-b border-brand-border bg-white/95 py-5 shadow-sm backdrop-blur">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <label className="relative flex-1">
              <span className="sr-only">Search by drink or region</span>
              <Search
                aria-hidden="true"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-primary/60"
                size={20}
              />
              <input
                type="search"
                placeholder="Search a drink or region..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="w-full rounded-xl border border-brand-border py-3 pl-12 pr-4"
              />
            </label>

            <label className="flex items-center gap-3 md:min-w-56">
              <Filter aria-hidden="true" size={20} className="text-brand-primary" />
              <span className="sr-only">Filter by category</span>
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="w-full rounded-xl border border-brand-border bg-white px-4 py-3"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <DrinkGrid
            title={`${filteredDrinks.length} ${filteredDrinks.length === 1 ? "drink" : "drinks"} to discover`}
            subtitle="Every drink has a place, a story, and a way of being enjoyed."
            drinks={filteredDrinks}
            emptyMessage="No drinks match that search yet. Try a different drink or region."
          />
        </Container>
      </section>
    </div>
  );
}