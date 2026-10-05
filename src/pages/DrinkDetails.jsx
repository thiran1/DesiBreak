import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import Container from "../components/common/Container";
import DrinkGrid from "../components/drinks/DrinkGrid";
import drinks from "../data/drinks";

export function DrinkDetails() {
  const { slug } = useParams()


  const drink = drinks.find((item) => item.slug === slug);

  if (!drink) {
    return (
      <Container className="py-32 text-center">
        <h1 className="font-heading text-5xl text-brand-primary">Drink not found</h1>
        <Link to="/drinks" className="mt-8 inline-flex rounded-xl bg-brand-primary px-6 py-3 font-semibold text-brand-cream">
          Back to drinks
        </Link>
      </Container>
    );
  }

  const recommendations = [...drinks]
    .filter((item) => item.slug !== drink.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div className="bg-brand-light">
      <section className="py-8">
        <Container>
          <Link to="/drinks" className="inline-flex items-center gap-2 font-semibold text-brand-primary">
            <ArrowLeft aria-hidden="true" size={18} />
            Back to drinks
          </Link>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <div className="overflow-hidden rounded-[28px] bg-white shadow-card">
              <img src={drink.heroImage} alt={drink.name} className="aspect-[4/3] h-full w-full object-cover" />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-secondary">{drink.region}</p>
              <h1 className="mt-4 font-heading text-5xl font-bold text-brand-primary md:text-6xl">{drink.name}</h1>
              <p className="mt-5 text-xl italic leading-8 text-stone-600">{drink.tagline}</p>
              <p className="mt-6 text-lg leading-8 text-stone-600">{drink.shortDescription}</p>
              <p className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-primary">
                <MapPin aria-hidden="true" size={18} />
                {[drink.city, drink.state].filter(Boolean).join(", ")}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-4">
        <Container>
          <div className="mx-auto max-w-3xl">
            <DetailSection title="The story">
              <p>{drink.story}</p>
              {drink.culturalSignificance && <p className="mt-4">{drink.culturalSignificance}</p>}
            </DetailSection>

            <DetailSection title="Ingredients">
              <ul className="grid gap-3 sm:grid-cols-2">
                {drink.ingredients.map((ingredient) => (
                  <li key={ingredient} className="rounded-xl bg-brand-light px-4 py-3 text-brand-primary">{ingredient}</li>
                ))}
              </ul>
            </DetailSection>

            <DetailSection title="Traditional preparation"><p>{drink.preparation}</p></DetailSection>

            <DetailSection title="Taste profile">
              <div className="flex flex-wrap gap-3">
                {drink.tasteProfile.map((taste) => (
                  <span key={taste} className="rounded-full bg-brand-primary/10 px-4 py-2 font-semibold text-brand-primary">{taste}</span>
                ))}
              </div>
            </DetailSection>

            <DetailSection title="When it is enjoyed"><p>{drink.bestTime}</p></DetailSection>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-secondary">Keep discovering</p>
              <h2 className="mt-3 font-heading text-4xl font-bold text-brand-primary">Where will your next stop be?</h2>
            </div>
            <Link to="/stores" className="font-semibold text-brand-primary">Find Your Nearest Desi Break →</Link>
          </div>
          <DrinkGrid drinks={recommendations} />
        </Container>
      </section>
    </div>
  );
}
