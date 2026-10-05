import Container from "../components/common/Container";
import StorySection from "../components/story/StorySection";
import usePageMeta from "../hooks/usePageMeta";

const storySections = [
  {
    number: "01",
    label: "THE BEGINNING",
    title: "Two friends. One weekend. A newly bought car.",
    body: [
      "What began as an impulsive weekend drive soon transformed into a deeper conversation about the beverages, stories, and flavours people carry with them across every region.",
      "There was no grand plan, only curiosity and a desire to taste what each stop had to offer.",
    ],
    highlight: "The road became our first classroom.",
    image: "/images/story/point1.png",
  },
  {
    number: "02",
    label: "THE ROAD TRIP",
    title: "A journey through landscapes and flavours.",
    body: [
      "Temporary paragraph for the editorial section template review.",
      "This placeholder will later be replaced with the final story copy and artwork.",
    ],
    image: "/images/story/point2.png",
  },
];

export function OurStory() {
  usePageMeta({
    title: "Our Story",
    description:
      "Follow the road trip, the Jigarthanda, and the idea that became Desi Break.",
    image: "https://desibreak.in/images/story/story_hero_bg.png",
    path: "/about/story",
  });

  return (
    <div className="overflow-hidden bg-[#F6F1E7] text-[#1F5C3A]">
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#F6F1E7]">

        {/* Background photograph */}
        <div
          data-image-key="story-hero"
          className="absolute inset-0 z-0"
        >
          <img
            src="/images/story/story_hero_bg.png"
            alt="Three friends overlooking the Western Ghats during a road trip"
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
        </div>

        {/* Cream editorial wash */}
        <div
          className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
          style={{
            background: `
              radial-gradient(
                ellipse 48% 95% at 8% 50%,
                rgba(246,241,231,1) 0%,
                rgba(246,241,231,1) 35%,
                rgba(246,241,231,0.96) 48%,
                rgba(246,241,231,0.72) 60%,
                rgba(246,241,231,0.30) 70%,
                rgba(246,241,231,0) 80%
              ),
              linear-gradient(
                90deg,
                #F6F1E7 0%,
                #F6F1E7 22%,
                rgba(246,241,231,0.98) 32%,
                rgba(246,241,231,0.82) 40%,
                rgba(246,241,231,0.42) 47%,
                rgba(246,241,231,0.08) 53%,
                rgba(246,241,231,0) 58%
              )
            `,
          }}
        />

        {/* Desktop content */}
        <Container className="relative z-20 hidden min-h-[calc(100vh-5rem)] items-center lg:flex">
          <div className="w-[44%] max-w-[32rem] -ml-20 py-20 pr-8 xl:-ml-16">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B85C38]">
              Our Story
            </p>

            <h1 className="mt-6 max-w-[15ch] font-heading text-5xl leading-[0.98] text-[#1F5C3A] sm:text-6xl lg:text-[4.3rem]">
              A journey across India,
              <br />
              one drink at a time.
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-stone-600 lg:text-xl lg:leading-9">
              What started as a road trip and a few unforgettable drinks slowly
              became the idea behind Desi Break.
            </p>

          </div>
        </Container>

        {/* Mobile */}
        <div className="relative z-20 lg:hidden">

          {/* Mobile photograph */}
          <div
            data-image-key="story-hero"
            className="h-[55vh] min-h-[22rem] w-full overflow-hidden"
          >
            <img
              src="/images/story/story_hero_bg.png"
              alt="Three friends overlooking the Western Ghats during a road trip"
              className="h-full w-full object-cover object-center"
              loading="eager"
            />
          </div>

          {/* Mobile cream content */}
          <div className="bg-[#F6F1E7] px-6 py-12 sm:px-10 sm:py-16">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B85C38]">
              Our Story
            </p>

            <h1 className="mt-5 max-w-[15ch] font-heading text-5xl leading-[0.98] text-[#1F5C3A] sm:text-6xl">
              A journey across India,
              <br />
              one drink at a time.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">
              What started as a road trip and a few unforgettable drinks slowly
              became the idea behind Desi Break.
            </p>

          </div>
        </div>

      </section>

      {storySections.map((section) => (
        <StorySection key={section.number} section={section} layout="normal" />
      ))}
    </div>
  );
}