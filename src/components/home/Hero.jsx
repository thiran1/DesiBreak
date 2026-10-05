import { ArrowRight } from "lucide-react";
import Button from "../common/Button";
import { BRAND } from "../../config/brand";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-light">

      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center px-6 lg:grid-cols-2">

        {/* Left: Content */}
        <div className="order-2 mt-12 lg:order-1 lg:mt-0">
          <p className="mb-4 font-semibold uppercase tracking-[0.35em] text-brand-secondary">
            {BRAND.positioning}
          </p>

          <h1 className="font-heading text-6xl leading-tight text-brand-primary md:text-8xl lg:text-[96px] lg:leading-[0.9]">
            <span className="block font-black tracking-tight">{BRAND.name.toUpperCase()}</span>
            <span className="mt-4 block text-3xl font-semibold md:text-4xl text-brand-primary">{BRAND.tagline}</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-stone-600">
            {BRAND.description}
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button to="/explore" variant="primary" className="flex items-center gap-3 px-6 py-3 text-lg">
              {BRAND.cta.primary}
              <ArrowRight size={18} aria-hidden />
            </Button>

            <Button to="/about" variant="secondary" className="px-5 py-3">
              {BRAND.cta.secondary}
            </Button>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="order-1 flex items-center justify-center lg:order-2">
          <div className="flex aspect-square w-full max-w-2xl items-center justify-center overflow-hidden rounded-2xl bg-brand-cream shadow-lg">
            <img
              src="/images/brand/vertical.png"
              alt="Desi Break - Sip Your Way Across India"
              className="h-full w-full object-contain"
              loading="eager"
            />
          </div>
        </div>

      </div>

    </section>
  );
}