import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND } from "../../config/brand";

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
              {BRAND.name}
            </h1>

            <p className="text-xs tracking-[0.3em] uppercase text-brand-secondary">
              {BRAND.positioning}
            </p>
          </div>

        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {BRAND.navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `py-2 transition duration-200 border-b-2 ${
                  isActive
                    ? "text-brand-primary font-semibold border-brand-secondary"
                    : "text-brand-primary/70 border-transparent hover:text-brand-primary"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-brand-primary"
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

            {BRAND.navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-4 transition ${
                    isActive
                      ? "text-brand-primary font-semibold bg-white shadow-sm border-l-4 border-brand-secondary"
                      : "text-brand-primary/80 hover:bg-white/40"
                  }`
                }
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