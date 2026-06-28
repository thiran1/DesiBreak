import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary:
      "bg-brand-primary text-white hover:bg-brand-primary/90",

    secondary:
      "border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
  };

  if (to) {
    return (
      <Link
        to={to}
        className={`inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold transition-all duration-300 ${styles[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`rounded-full px-8 py-4 font-semibold transition-all duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}