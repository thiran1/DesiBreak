import { Share2 } from "lucide-react";
import { BRAND } from "../../config/brand";

export default function InstagramSection() {
  // Sample Instagram posts - In a real app, you would fetch these from Instagram API
  const instagramPosts = [
    {
      id: 1,
      image: "https://placehold.co/400x400/B85C38/F6F1E7?text=Ragi+Ambali",
      caption: "Authentic regional beverage"
    },
    {
      id: 2,
      image: "https://placehold.co/400x400/1F5C3A/F6F1E7?text=Jigarthanda",
      caption: "Sip your way across India"
    },
    {
      id: 3,
      image: "https://placehold.co/400x400/D4A017/F6F1E7?text=Regional+Discovery",
      caption: "Heritage in every sip"
    },
    {
      id: 4,
      image: "https://placehold.co/400x400/B85C38/F6F1E7?text=Craft+Stories",
      caption: "Preserving traditions"
    },
    {
      id: 5,
      image: "https://placehold.co/400x400/1F5C3A/F6F1E7?text=Indian+Heritage",
      caption: "Authentic and crafted"
    },
    {
      id: 6,
      image: "https://placehold.co/400x400/D4A017/F6F1E7?text=Discovery+Journey",
      caption: "Every region tells a story"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center mb-16">

          <div className="flex items-center justify-center gap-3 mb-4">
            <Share2 size={32} className="text-brand-secondary" />
            <p className="font-semibold uppercase tracking-[0.35em] text-brand-secondary text-lg">
              Join Our Community
            </p>
          </div>

          <h2 className="font-heading text-5xl text-brand-primary mb-6">
            Follow {BRAND.name}
          </h2>

          <p className="text-lg leading-8 text-stone-600">
            Discover stories, recipes, and behind-the-scenes moments from India's regional beverage culture.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={BRAND.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <p className="font-semibold text-sm">{post.caption}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href={BRAND.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold transition-all duration-300 bg-brand-secondary text-white hover:bg-[#A04D2E] shadow-brand"
          >
            <Share2 size={20} />
            Follow on Instagram
          </a>
        </div>

      </div>
    </section>
  );
}
