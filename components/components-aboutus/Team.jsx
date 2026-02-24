import Image from "next/image";

const team = [
    {
        name: "Amira Patel",
        role: "Co-founder & CEO",
        bio: "Leads strategy and product direction, with a background in hospitality and mobility startups.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "Liam Chen",
        role: "Co-founder & CXO",
        bio: "Owns the customer experience, ensuring every touchpoint feels considered and human.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "Jordan Rivera",
        role: "Head of Operations",
        bio: "Coordinates our city launches and partner network to keep our fleet running smoothly.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
    }
];

export default function Team() {
    return (
        <section className="mb-16">
            <div className="mb-8 animate-fade-in">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
                    Meet the team
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                    The people behind CarBook.
                </h2>
                <p className="mt-4 max-w-2xl text-sm text-slate-300">
                    We're a small, multi-disciplinary team spread across a few time zones,
                    united by a love of travel and thoughtful design.
                </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
                {team.map((member, index) => (
                    <div
                        key={member.name}
                        className="glass-panel group relative animate-fade-in-up overflow-hidden rounded-3xl transition-smooth hover-lift"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="relative h-64 w-full overflow-hidden">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover transition duration-300 group-hover:scale-105"
                                sizes="(min-width: 768px) 300px, 100vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/0" />
                        </div>
                        <div className="p-5">
                            <p className="text-lg font-semibold text-slate-50">{member.name}</p>
                            <p className="mt-1 text-sm text-primary-light">{member.role}</p>
                            <p className="mt-3 text-xs text-slate-300">{member.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
