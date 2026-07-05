import { Link } from "react-router-dom";
import { Coffee, Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-brand-light px-6 text-center">
      <div className="relative mx-auto max-w-md rounded-xl border border-brand-border bg-white p-10 shadow-card transition-all duration-300 hover:shadow-hover">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
          <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-brand-primary text-brand-secondary shadow-brand">
            <Coffee className="h-12 w-12" />
          </div>
        </div>

        <h1 className="mt-8 font-heading text-8xl font-bold text-brand-primary">404</h1>
        <h2 className="mt-4 font-heading text-2xl font-bold text-brand-secondary">Oops! Cup is Empty</h2>
        <p className="mt-4 text-stone-600 leading-relaxed">
          The page you are looking for has spilled or never existed. Let's get you back to a warm cup of chai.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-6 py-3 font-semibold text-brand-cream transition hover:bg-[#18482D] shadow-brand"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link
            to="/explore"
            className="flex items-center justify-center gap-2 rounded-xl border border-brand-primary px-6 py-3 font-semibold text-brand-primary transition hover:bg-brand-primary/5"
          >
            <ArrowLeft className="h-4 w-4" />
            Explore Drinks
          </Link>
        </div>
      </div>
    </div>
  );
}
