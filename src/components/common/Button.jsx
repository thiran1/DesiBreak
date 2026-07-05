import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  variant = "primary",
  className = "",
  ...props
}) {
  const styles = {
    primary:
      "bg-brand-primary text-brand-cream hover:bg-[#18482D] shadow-brand",

    secondary:
      "bg-brand-cream border border-brand-primary text-brand-primary hover:bg-brand-primary/5 shadow-brand",
      
    accent:
      "bg-brand-terracotta text-brand-cream hover:bg-[#A04D2E] shadow-brand",
  };

  const baseClasses = `inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold transition-all duration-300 ${styles[variant]} ${className}`;

  if (to) {
    return (
      <Link
        to={to}
        className={baseClasses}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={baseClasses}
      {...props}
    >
      {children}
    </button>
  );
}