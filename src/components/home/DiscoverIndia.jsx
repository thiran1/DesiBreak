import regions from "../../data/regions";
import RegionCard from "./RegionCard";
import SectionHeading from "../common/SectionHeading";

export default function DiscoverIndia() {
  return (
    <section className="bg-brand-light py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="Explore India"
          title="Discover regional beverages from across India"
          description="Begin your journey with signature drinks rooted in climate, tradition, and local craftsmanship."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {regions.map((region) => (
            <RegionCard key={region.slug} region={region} />
          ))}

        </div>

      </div>
    </section>
  );
}