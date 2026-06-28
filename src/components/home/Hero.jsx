import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-light">

      {/* Background Decoration */}

      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-secondary/10 blur-3xl"></div>

      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl"></div>

      <div className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">

        <div className="max-w-3xl">

          <p className="mb-4 font-semibold uppercase tracking-[0.35em] text-brand-secondary">
            India's Regional Beverage House
          </p>

          <h1 className="font-heading text-5xl leading-tight text-brand-primary md:text-7xl">

            Rediscover
            <br />

            India's
            <br />

            Forgotten Drinks.

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-stone-600">

            Every region in India has beverages that tell stories of
            its people, traditions and climate.

            Desi Break is bringing those forgotten drinks back —
            one sip at a time.

          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              to="/discover"
              className="flex items-center gap-3 rounded-full bg-brand-primary px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Discover India's Drinks

              <ArrowRight size={20} />
            </Link>

            <Link
              to="/franchise"
              className="rounded-full border border-brand-primary px-8 py-4 font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white"
            >
              Franchise With Us
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}