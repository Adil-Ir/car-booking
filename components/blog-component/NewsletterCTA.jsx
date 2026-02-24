import Link from "next/link";

export default function NewsletterCTA() {
    return (
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
    );
}
