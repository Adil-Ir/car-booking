const values = [
    {
        title: "Trust first",
        icon: "🛡️",
        description:
            "Clear pricing, honest policies, and verified partners so you always know exactly what you're getting."
    },
    {
        title: "Design every detail",
        icon: "✨",
        description:
            "From the booking flow to the pickup experience, we obsess over small details that make your drive feel effortless."
    },
    {
        title: "People over cars",
        icon: "❤️",
        description:
            "We're here to make memories, not just rentals. Our support team is trained to understand real travel needs."
    }
];

export default function Values() {
    return (
        <section className="mb-16">
            <div className="mb-8 text-center animate-fade-in">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
                    Our values
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                    What drives us every day.
                </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
                {values.map((value, index) => (
                    <div
                        key={value.title}
                        className="glass-panel group animate-fade-in-up rounded-3xl p-6 transition-smooth hover-lift"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="mb-4 text-4xl">{value.icon}</div>
                        <h3 className="text-lg font-semibold text-slate-50">{value.title}</h3>
                        <p className="mt-2 text-sm text-slate-300">{value.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
