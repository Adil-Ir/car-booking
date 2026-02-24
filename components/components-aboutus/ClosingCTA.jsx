export default function ClosingCTA() {
    return (
        <section className="mb-16 animate-scale-in rounded-3xl bg-gradient-to-r from-primary/20 via-emerald-500/20 to-sky-500/20 p-[1px]">
            <div className="rounded-[1.4rem] bg-slate-950/95 p-8 sm:p-12">
                <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                            Looking ahead
                        </p>
                        <h2 className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
                            Join us on the journey.
                        </h2>
                        <p className="mt-4 text-sm text-slate-300">
                            We're constantly adding new models, cities, and features to make your
                            next drive even smoother. Have feedback or ideas? We'd love to hear from you.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <a
                            href="/contact"
                            className="flex-1 rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-smooth hover:bg-primary-light hover-lift"
                        >
                            Get in touch
                        </a>
                        <a
                            href="/cars"
                            className="flex-1 rounded-full border border-slate-700 bg-slate-900/50 px-6 py-3 text-center text-sm font-semibold text-slate-200 transition-smooth hover:bg-slate-900 hover-lift"
                        >
                            Browse cars
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
