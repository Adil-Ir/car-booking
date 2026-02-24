import BlogHero from "../../components/blog-component/BlogHero";
import BlogGrid from "../../components/blog-component/BlogGrid";
import NewsletterCTA from "../../components/blog-component/NewsletterCTA";

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
    title: "How to Save Money on Your N  ext Car Rental",
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
        <BlogHero />
        <BlogGrid blogPosts={blogPosts} />
        <NewsletterCTA />
      </div>
    </main>
  );
}
