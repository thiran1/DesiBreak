import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link to="/" className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-lg font-bold text-white">
            DB
          </div>

          <div>
            <h1 className="font-heading text-2xl font-bold text-brand-primary">
              Desi Break
            </h1>

            <p className="text-xs tracking-[0.3em] uppercase text-brand-secondary">
              Rooted in Tradition
            </p>
          </div>

        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition duration-200 ${
                  isActive
                    ? "text-brand-primary font-semibold"
                    : "text-stone-600 hover:text-brand-primary"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-border bg-brand-cream lg:hidden">
          <div className="flex flex-col px-6 py-5">

            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-4 text-stone-700 transition hover:bg-white"
              >
                {item.name}
              </NavLink>
            ))}

          </div>
        </div>
      )}
    </header>
  );
}