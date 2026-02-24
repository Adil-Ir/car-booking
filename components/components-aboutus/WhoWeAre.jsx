import Image from "next/image";

export default function WhoWeAre() {
    return (
        <section className="mb-16">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div className="relative order-2 animate-slide-in-left lg:order-1">
                    <div className="glass-panel relative overflow-hidden rounded-3xl p-2 transition-smooth hover-lift">
                        <div className="relative h-80 w-full overflow-hidden rounded-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1100&q=80"
                                alt="Team collaboration"
                                fill
                                className="object-cover transition duration-300"
                                sizes="(min-width: 1024px) 500px, 100vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/60 via-slate-950/0 to-primary/20" />
                        </div>
                    </div>
                </div>
                <div className="order-1 animate-slide-in-right lg:order-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
                        Who are we
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                        A team of travelers, designers, and car enthusiasts.
                    </h2>
                    <p className="mt-4 text-sm text-slate-300">
                        CarBook was born from a simple frustration: why does renting a car have to be so complicated?
                        We're a diverse group of people who love to travel, appreciate good design, and believe
                        that every journey deserves a great vehicle.
                    </p>
                    <p className="mt-4 text-sm text-slate-400">
                        Our team combines decades of experience in hospitality, technology, and automotive industries.
                        We've worked at major rental companies, built consumer apps, and managed fleets—but we
                        wanted to create something different. Something that puts the traveler first, not the paperwork.
                    </p>
                </div>
            </div>
        </section>
    );
}
