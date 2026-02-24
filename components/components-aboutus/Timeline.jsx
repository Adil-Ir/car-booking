import Image from "next/image";

const timeline = [
    {
        year: "2019",
        title: "The idea",
        description:
            "After a series of frustrating rental experiences, our founders sketched the first version of CarBook on a napkin in an airport lounge.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    },
    {
        year: "2020",
        title: "First city launch",
        description:
            "We launched in one city with 25 handpicked cars and a small team focused on delivering a boutique experience.",
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80"
    },
    {
        year: "2022",
        title: "Growing with our guests",
        description:
            "Word-of-mouth helped us expand to new cities while keeping our focus on quality over quantity.",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
    },
    {
        year: "Today",
        title: "Designing the future of rentals",
        description:
            "We're building tools and partnerships that make premium mobility as easy as opening an app.",
        image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=800&q=80"
    }
];

export default function Timeline() {
    return (
        <section className="mb-16">
            <div className="mb-8 animate-fade-in">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
                    Our journey
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                    How we got here.
                </h2>
            </div>
            <div className="space-y-8">
                {timeline.map((item, index) => (
                    <div
                        key={item.year}
                        className={`grid gap-6 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""
                            }`}
                    >
                        <div className={`relative animate-fade-in-up ${index % 2 === 1 ? "lg:col-start-2" : ""}`} style={{ animationDelay: `${index * 150}ms` }}>
                            <div className="glass-panel relative overflow-hidden rounded-3xl p-2 transition-smooth hover-lift">
                                <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition duration-300"
                                        sizes="(min-width: 1024px) 500px, 100vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-slate-950/0 to-primary/20" />
                                </div>
                            </div>
                        </div>
                        <div className={`animate-fade-in-up ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`} style={{ animationDelay: `${index * 150 + 50}ms` }}>
                            <div className="glass-panel rounded-3xl p-6 transition-smooth hover-lift">
                                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                                    <span className="text-xs font-semibold text-primary-light">{item.year}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-50">{item.title}</h3>
                                <p className="mt-3 text-sm text-slate-300">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
