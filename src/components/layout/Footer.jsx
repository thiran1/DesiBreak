import { Link } from "react-router-dom";
import { BRAND } from "../../config/brand";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-brand-border bg-brand-primary text-brand-cream">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-3">

          <div>

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-secondary text-xl font-bold text-brand-cream shadow-sm">
                DB
              </div>

              <div>
                <h2 className="font-heading text-3xl text-brand-cream">
                  {BRAND.name}
                </h2>

                <p className="text-sm text-brand-cream/70">
                  {BRAND.positioning}
                </p>
              </div>

            </div>

            <p className="mt-8 max-w-md leading-8 text-brand-cream/80">
              {BRAND.footer.description}
            </p>

          </div>

          <div>

            <h3 className="mb-6 text-xl font-semibold text-brand-cream">
              Explore
            </h3>

            <div className="flex flex-col gap-4">

              {BRAND.navigation.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-brand-cream/80 transition hover:text-brand-cream"
                >
                  {link.name}
                </Link>
              ))}

            </div>

          </div>

          <div>

            <h3 className="mb-6 text-xl font-semibold text-brand-cream">
              Our Mission
            </h3>

            <p className="leading-8 text-brand-cream/80">
              {BRAND.mission}
            </p>

          </div>

        </div>

        <div className="my-12 h-px bg-brand-cream/10"></div>

        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

          <p className="text-sm text-brand-cream/60">
            {BRAND.footer.copyright}
          </p>

          <p className="text-center font-heading text-xl text-brand-highlight">
            {BRAND.tagline}
          </p>

        </div>

      </div>

    </footer>
  );
}