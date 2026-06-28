import { Link } from "react-router-dom";

const quickLinks = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Discover India",
    path: "/discover"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Franchise",
    path: "/franchise"
  },
  {
    name: "Contact",
    path: "/contact"
  }
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-brand-border bg-brand-primary text-white">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-3">

          <div>

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-secondary text-xl font-bold text-white">
                DB
              </div>

              <div>
                <h2 className="font-heading text-3xl">
                  Desi Break
                </h2>

                <p className="text-sm text-stone-300">
                  Rooted in Tradition. Made for Today.
                </p>
              </div>

            </div>

            <p className="mt-8 max-w-md leading-8 text-stone-300">
              Desi Break is reviving India's forgotten beverages by bringing
              together regional recipes, timeless traditions and authentic
              flavours from every corner of the country.
            </p>

          </div>

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Explore
            </h3>

            <div className="flex flex-col gap-4">

              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-stone-300 transition hover:text-white"
                >
                  {link.name}
                </Link>
              ))}

            </div>

          </div>

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Our Mission
            </h3>

            <p className="leading-8 text-stone-300">
              Every region in India has a forgotten drink with a story worth
              preserving. Our mission is to rediscover, revive and reintroduce
              those beverages for future generations.
            </p>

          </div>

        </div>

        <div className="my-12 h-px bg-white/10"></div>

        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

          <p className="text-sm text-stone-400">
            © {new Date().getFullYear()} Desi Break. All Rights Reserved.
          </p>

          <p className="text-center font-heading text-xl text-brand-secondary">
            Every Sip Tells A Story.
          </p>

        </div>

      </div>

    </footer>
  );
}