import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { BRAND } from "../../config/brand";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const location = useLocation();

  const aboutIsActive = location.pathname === "/about";

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileAboutOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-brand-primary/20 bg-brand-primary">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link to="/" className="flex items-center" aria-label={`${BRAND.name} home`}>
          <span className="h-16 w-16 overflow-hidden rounded-full border border-brand-badge bg-brand-cream">
            <img
              src="/images/brand/badge.png"
              alt={BRAND.name}
              className="h-full w-full scale-[1.42] object-cover object-center mix-blend-darken"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {BRAND.navigation.map((item) => (
            item.name === "About" ? (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={aboutOpen}
                  aria-haspopup="menu"
                  onClick={() => setAboutOpen((isOpen) => !isOpen)}
                  className={`flex items-center gap-1 border-b-2 py-2 text-brand-cream transition duration-200 hover:text-brand-cream/80 ${
                    aboutIsActive ? "border-brand-secondary font-semibold" : "border-transparent"
                  }`}
                >
                  About
                  <ChevronDown size={16} aria-hidden="true" />
                </button>

                {aboutOpen && (
                  <div
                    role="menu"
                    className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-2"
                  >
                    <div className="rounded-xl border border-brand-border bg-brand-primary p-2 shadow-lg">
                      <Link
                        to="/about"
                        role="menuitem"
                        onClick={() => setAboutOpen(false)}
                        className="block rounded-lg px-4 py-3 text-brand-cream hover:bg-brand-cream/10"
                      >
                        About Desi Break
                      </Link>
                      <Link
                        to="/about/story"
                        role="menuitem"
                        onClick={() => setAboutOpen(false)}
                        className="block rounded-lg px-4 py-3 text-brand-cream hover:bg-brand-cream/10"
                      >
                        Our Story
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `border-b-2 py-2 transition duration-200 ${
                    isActive
                      ? "border-brand-secondary font-semibold text-brand-cream"
                      : "border-transparent text-brand-cream hover:text-brand-cream/80"
                  }`
                }
              >
                {item.name}
              </NavLink>
            )
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="text-brand-cream lg:hidden"
        >
          {open ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-cream/15 bg-brand-primary lg:hidden">
          <div className="flex flex-col px-6 py-5">

            {BRAND.navigation.map((item) => (
              item.name === "About" ? (
                <div key={item.path}>
                  <button
                    type="button"
                    aria-expanded={mobileAboutOpen}
                    onClick={() => setMobileAboutOpen((isOpen) => !isOpen)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-4 text-left text-brand-cream transition hover:bg-brand-cream/10 ${
                      aboutIsActive ? "border-l-4 border-brand-secondary font-semibold" : ""
                    }`}
                  >
                    About
                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      className={`transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {mobileAboutOpen && (
                    <div className="ml-4 border-l border-brand-cream/25 pl-3">
                      <Link
                        to="/about"
                        onClick={closeMobileMenu}
                        className="block rounded-lg px-4 py-3 text-brand-cream hover:bg-brand-cream/10"
                      >
                        About Desi Break
                      </Link>
                      <Link
                        to="/about/story"
                        onClick={closeMobileMenu}
                        className="block rounded-lg px-4 py-3 text-brand-cream hover:bg-brand-cream/10"
                      >
                        Our Story
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-4 transition ${
                      isActive
                        ? "border-l-4 border-brand-secondary bg-brand-cream/10 font-semibold text-brand-cream shadow-sm"
                        : "text-brand-cream hover:bg-brand-cream/10"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )
            ))}

          </div>
        </div>
      )}
    </header>
  );
}