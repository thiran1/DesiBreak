export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  const alignment =
    align === "left"
      ? "text-left items-start"
      : "text-center items-center";

  return (
    <div className={`flex flex-col ${alignment} mx-auto max-w-3xl`}>
      {eyebrow && (
        <span className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-brand-secondary">
          {eyebrow}
        </span>
      )}

      <h2 className="font-heading text-4xl md:text-5xl text-brand-primary leading-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-stone-600">
          {description}
        </p>
      )}
    </div>
  );
}