import Container from "../common/Container";

export default function StorySection({ section, layout = "normal" }) {
  const isReverse = layout === "reverse";

  return (
    <section className="relative bg-[#F6F1E7] py-12 md:py-16 lg:min-h-[26rem] lg:py-8">
      <Container className="max-w-[1800px] px-6 md:px-10 lg:px-[5%]">
        <div
          className={`grid items-center gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:gap-6 ${
            isReverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
          }`}
        >
          <div className="order-1 max-w-[38rem] lg:pr-2">
            <div className="mb-5 flex items-center gap-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#B85C38]/55 bg-[#B85C38] text-[0.64rem] font-semibold tracking-[0.2em] text-[#FFFFFF]">
                {section.number}
              </span>
              <span className="text-[0.88rem] font-semibold uppercase tracking-[0.38em] text-[#1F5C3A] text-[#B85C38]">
                {section.label}
              </span>
            </div>

            {section.title ? (
              <h2 className="max-w-[18ch]  font-heading text-[2.5rem] leading-[0.96] text-[#1F5C3A] sm:text-[1.5rem] md:text-[1.7rem] lg:text-[2.0rem]">
                {section.title}
              </h2>
            ) : null}

            {section.body ? (
              <div className="mt-5 max-w-[36rem] space-y-3 text-[0.98rem] leading-[1.45] text-stone-600 md:text-[1rem]">
                {Array.isArray(section.body) ? (
                  section.body.map((paragraph, index) => (
                    <p key={`${section.number}-body-${index}`}>{paragraph}</p>
                  ))
                ) : (
                  <p>{section.body}</p>
                )}
              </div>
            ) : null}

            {section.highlight ? (
              <p className="mt-8 max-w-[24rem] text-[1.02rem] italic leading-7 text-[#1F5C3A] md:text-[1.1rem]">
                “{section.highlight}”
              </p>
            ) : null}

            {section.quote ? (
              <blockquote className="mt-8 border-l border-[#B85C38]/40 pl-4 text-[0.76rem] uppercase tracking-[0.22em] text-[#B85C38] md:text-[0.8rem]">
                {section.quote}
              </blockquote>
            ) : null}
          </div>

          <div className="order-2 w-full lg:justify-self-end">
            <div
              data-image-key={`story-${section.number.toLowerCase()}`}
              className="relative overflow-hidden bg-[#F6F1E7]"
            >
              {section.image ? (
                <img
                  src={section.image}
                  alt=""
                  className="h-auto w-full object-contain object-right"
                />
              ) : (
                <div className="flex h-[360px] items-center justify-center border border-[#1F5C3A]/10 bg-[linear-gradient(135deg,rgba(31,92,58,0.08),rgba(246,241,231,0.94),rgba(166,120,81,0.12))] md:h-[420px] lg:h-[460px]">
                  <div className="text-[0.7rem] uppercase tracking-[0.3em] text-[#1F5C3A]/60">
                    Story Image
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
