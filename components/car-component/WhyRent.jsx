export default function WhyRent() {
    const reasons = [
        {
            title: 'Verified fleet',
            description:
                'Every car passes a 50+ point inspection before it reaches you.'
        },
        {
            title: 'Transparent pricing',
            description:
                'No hidden fees. What you see is exactly what you pay.'
        },
        {
            title: '24/7 support',
            description:
                'Real humans available around the clock for any questions.'
        },
        {
            title: 'Flexible cancellation',
            description:
                'Change or cancel your booking up to 24 hours before pickup.'
        }
    ];

    return (
        <section className='mt-14 border-t border-slate-800/60 pt-10'>
            <div className='mb-8 animate-fade-in'>
                <p className='text-xs font-semibold uppercase tracking-[0.18em] text-primary-light'>
                    Why rent with CarBook
                </p>
                <h2 className='mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl'>
                    Everything you need for a perfect trip.
                </h2>
            </div>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                {reasons.map((item, index) => (
                    <div
                        key={item.title}
                        className='glass-panel animate-fade-in-up rounded-3xl p-4 transition-smooth hover-lift'
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <h3 className='text-sm font-semibold text-slate-50'>
                            {item.title}
                        </h3>
                        <p className='mt-2 text-xs text-slate-400'>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
