import Image from "next/image";
import Link from "next/link";

const featuredPosts = [
  {
    title: "10 Essential Tips for Your First Luxury Car Rental",
    excerpt: "Everything you need to know before booking your first premium vehicle rental experience.",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
    date: "March 15, 2024",
    category: "Tips & Guides"
  },
  {
    title: "The Ultimate Road Trip Planning Guide",
    excerpt: "Plan the perfect road trip with our comprehensive guide covering routes, stops, and must-see destinations.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    date: "March 10, 2024",
    category: "Travel"
  },
  {
    title: "Electric vs. Gas: Choosing the Right Rental Car",
    excerpt: "Compare electric and gas vehicles to find the perfect match for your travel needs and preferences.",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80",
    date: "March 5, 2024",
    category: "Comparison"
  }
];

export default function BlogPreview() {
  return (
    <section className="border-t border-slate-800/60 bg-slate-950 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="animate-fade-in">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
              Latest from our blog
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
              Travel tips, guides, and insights.
            </h2>
          </div>
          <Link
            href="/blog"
            className="animate-fade-in-up rounded-full border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-slate-200 transition-smooth hover:bg-slate-900 hover-lift"
            style={{ animationDelay: '200ms' }}
          >
            View all posts →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post, index) => (
            <article
              key={post.title}
              className="group glass-panel animate-fade-in-up relative overflow-hidden rounded-3xl transition-smooth hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/20" />
                <div className="absolute left-4 top-4 rounded-full bg-slate-950/90 px-3 py-1 text-[11px] font-medium text-emerald-300 backdrop-blur-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs text-slate-400">{post.date}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-50">{post.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{post.excerpt}</p>
                <Link
                  href="/blog"
                  className="mt-4 inline-block text-sm font-semibold text-primary-light hover:text-primary"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
