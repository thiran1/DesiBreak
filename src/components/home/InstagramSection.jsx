import { Share2 } from "lucide-react";
import { BRAND } from "../../config/brand";
import SectionHeading from "../common/SectionHeading";

export default function InstagramSection() {
  const instagramPosts = [
    {
      id: 1,
      image: "https://placehold.co/600x600/B85C38/F6F1E7?text=Ragi+Ambali",
      caption: "Authentic regional beverage"
    },
    {
      id: 2,
      image: "https://placehold.co/600x600/1F5C3A/F6F1E7?text=Jigarthanda",
      caption: "Sip your way across India"
    },
    {
      id: 3,
      image: "https://placehold.co/600x600/D4A017/F6F1E7?text=Regional+Discovery",
      caption: "Heritage in every sip"
    },
    {
      id: 4,
      image: "https://placehold.co/600x600/B85C38/F6F1E7?text=Craft+Stories",
      caption: "Preserving traditions"
    },
    {
      id: 5,
      image: "https://placehold.co/600x600/1F5C3A/F6F1E7?text=Indian+Heritage",
      caption: "Authentic and crafted"
    },
    {
      id: 6,
      image: "https://placehold.co/600x600/D4A017/F6F1E7?text=Discovery+Journey",
      caption: "Every region tells a story"
    }
  ];

  return (
    <section className="bg-white py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="Join our community"
          title={`Follow ${BRAND.name}`}
          description="Discover stories, recipes, and behind-the-scenes moments from India's regional beverage culture."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-3 md:gap-6 mb-12">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={BRAND.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${post.caption} on Instagram`}
              className="group relative overflow-hidden rounded-[28px] border border-brand-border bg-brand-light shadow-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-hover"
            >
              <div className="aspect-square w-full overflow-hidden bg-brand-cream">
                <img
                  src={post.image}
                  alt={post.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-primary/90 to-transparent px-4 py-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-semibold text-brand-cream">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href={BRAND.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-secondary px-8 py-4 text-base font-semibold text-white shadow-brand transition-colors duration-300 hover:bg-[#A04D2E]"
          >
            <Share2 size={20} aria-hidden />
            Follow on Instagram
          </a>
        </div>

      </div>
    </section>
  );
}
