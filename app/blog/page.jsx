import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Your First Luxury Car Rental",
    excerpt: "Everything you need to know before booking your first premium vehicle rental experience. From insurance to inspection, we cover it all.",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
    date: "March 15, 2024",
    category: "Tips & Guides",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Ultimate Road Trip Planning Guide",
    excerpt: "Plan the perfect road trip with our comprehensive guide covering routes, stops, and must-see destinations across North America.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    date: "March 10, 2024",
    category: "Travel",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Electric vs. Gas: Choosing the Right Rental Car",
    excerpt: "Compare electric and gas vehicles to find the perfect match for your travel needs, budget, and environmental preferences.",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
    date: "March 5, 2024",
    category: "Comparison",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Top 5 Scenic Drives in California",
    excerpt: "Discover the most breathtaking routes California has to offer, from coastal highways to mountain passes that will leave you in awe.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80",
    date: "February 28, 2024",
    category: "Travel",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Understanding Car Rental Insurance: A Complete Guide",
    excerpt: "Navigate the complexities of rental car insurance with our detailed guide. Learn what's covered, what's not, and how to choose the right plan.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    date: "February 20, 2024",
    category: "Tips & Guides",
    readTime: "10 min read"
  },
  {
    id: 6,
    title: "How to Save Money on Your Next Car Rental",
    excerpt: "Smart strategies and insider tips to get the best deals on premium car rentals without compromising on quality or service.",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=80",
    date: "February 15, 2024",
    category: "Tips & Guides",
    readTime: "6 min read"
  }
];

export const metadata = {
  title: "Blog | CarBook",
  description: "Travel tips, guides, and insights from the CarBook team."
};

export default function BlogPage() {
  return (
    <main className="bg-slate-950 pb-10 pt-6 sm:pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <div className="animate-fade-in">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
              Our blog
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
              Travel tips, guides, and insights.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400">
              Discover expert advice, destination guides, and everything you need to know about premium car rentals.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="group glass-panel animate-fade-in-up relative overflow-hidden rounded-3xl transition-smooth hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/20" />
                  <div className="absolute left-4 top-4 rounded-full bg-slate-950/90 px-3 py-1 text-[11px] font-medium text-emerald-300 backdrop-blur-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3 text-xs text-slate-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-slate-50">{post.title}</h2>
                  <p className="mt-3 text-sm text-slate-300">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="mt-4 inline-block text-sm font-semibold text-primary-light transition-colors hover:text-primary"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-16">
          <div className="glass-panel animate-scale-in rounded-3xl p-8 text-center sm:p-12">
            <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
              Never miss a post
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-slate-400">
              Subscribe to our newsletter and get the latest travel tips, car guides, and exclusive deals delivered straight to your inbox.
            </p>
            <Link
              href="/"
              className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-smooth hover:bg-primary-light hover-lift"
            >
              Subscribe now
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
