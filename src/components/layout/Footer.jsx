import { Link } from "react-router-dom";
import { BRAND } from "../../config/brand";

const EXPLORE_LINKS = [
  { name: "Home", path: "/" },
  { name: "Explore Drinks", path: "/drinks" },
  { name: "Find a Store", path: "/stores" },
];

const ABOUT_LINKS = [
  { name: "Our Story", path: "/about/story" },
  { name: "Our Mission", path: "/about" },
];

const SOCIAL_ICONS = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  ),
  google: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z" />
      <path d="M5.84 14.1a7.18 7.18 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88L5.84 14.1Z" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52Z" />
    </svg>
  ),
};

export default function Footer() {
  const socialEntries = [
    { key: "instagram", url: BRAND.social.instagram, label: "Instagram" },
    { key: "google", url: "https://maps.google.com/?q=Desi+Break", label: "Google" },
  ];

  return (
    <footer
      className="relative overflow-hidden text-brand-cream"
      style={{
        backgroundColor: "#1F5C3A",
        backgroundImage: "url('/images/footer/footer-bg.png')",
        backgroundSize: "100% auto",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content container - matches the artwork aspect ratio so the
          block stays centered in the empty green area at any width */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:flex lg:aspect-[2157/729] lg:flex-col lg:justify-center lg:py-0 lg:pt-[1%]">
        {/* Main 4-column grid */}
        <div className="grid gap-12 lg:grid-cols-[260px_1fr_1fr_1fr] lg:gap-10">
          {/* Brand Column */}
          <div className="flex flex-col">
            <img
              src="/images/brand/secondary-horizontal.png"
              alt={BRAND.name}
              className="h-auto w-full max-w-[200px] object-contain"
            />
          </div>

          {/* Explore Column with divider */}
          <div className="lg:border-l lg:border-brand-cream/20 lg:pl-10">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
              Explore
            </h3>
            <ul className="space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-brand-cream transition-colors duration-200 hover:text-brand-cream/70"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column with divider */}
          <div className="lg:border-l lg:border-brand-cream/20 lg:pl-10">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
              About
            </h3>
            <ul className="space-y-3">
              {ABOUT_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-brand-cream transition-colors duration-200 hover:text-brand-cream/70"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + CTA Column with divider */}
          <div className="lg:border-l lg:border-brand-cream/20 lg:pl-10">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
              Follow Our Journey
            </h3>
            <div className="flex items-center gap-4">
              {socialEntries.map(({ key, url, label }) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-cream/50 text-brand-cream transition-colors duration-200 hover:border-brand-cream hover:bg-brand-cream/10"
                >
                  {SOCIAL_ICONS[key]}
                </a>
              ))}
            </div>

            <Link
              to="/stores"
              className="mt-8 inline-flex items-center gap-3 rounded-lg border border-[#B85C38] bg-[#B85C38] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-cream transition-colors duration-200 hover:bg-[#A04D2E]"
            >
              <span>
                Find Your Nearest
                <br />
                Desi Break
              </span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Horizontal divider */}
        <div className="mt-10 h-px bg-brand-cream/20 lg:mt-8" />

        {/* Closing signature */}
        <div className="mt-4 flex flex-col items-center gap-2 lg:mt-2">
          <span className="h-0.5 w-8 bg-[#D4A017]" />
          <p className="text-[0.8rem] font-semibold uppercase tracking-[0.4em] text-brand-cream/90">
            A Small Break for a Bigger India
          </p>
        </div>
      </div>
    </footer>
  );
}