import { ArrowRight } from "lucide-react";
import Button from "../common/Button";
import { BRAND } from "../../config/brand";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-light py-10 md:py-20">

      <div className="mx-auto flex min-h-[75vh] max-w-7xl items-center px-6">

        <div className="max-w-3xl">

          <p className="mb-4 font-semibold uppercase tracking-[0.35em] text-brand-secondary">
            {BRAND.positioning}
          </p>

          <h1 className="font-heading text-5xl leading-tight text-brand-primary md:text-7xl">

            Discover
            <br />

            India's Regional
            <br />

            Beverages.

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-stone-600">

            {BRAND.description}

          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Button
              to="/explore"
              variant="primary"
              className="flex items-center gap-3"
            >
              {BRAND.cta.primary}

              <ArrowRight size={20} />
            </Button>

            <Button
              to="/about"
              variant="secondary"
            >
              {BRAND.cta.secondary}
            </Button>

          </div>

        </div>

      </div>

    </section>
  );
}