import Image from "next/image";
import Link from "next/link";

export default function BlogGrid({ blogPosts }) {
    return (
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
    );
}
