export default function CarFAQ() {
    const faqs = [
        {
            question: 'What happens if I damage the car?',
            answer:
                'All rentals include basic insurance. For additional peace of mind, you can purchase our premium protection plan which covers most damages with zero deductible.'
        },
        {
            question: 'Can I add additional drivers?',
            answer:
                "Yes, you can add up to 2 additional drivers at booking. Each driver must meet age requirements and have a valid license. There's a small daily fee per additional driver."
        },
        {
            question: "What's your fuel policy?",
            answer:
                'We provide the car with a full tank and expect it returned full. You can prepay for fuel at booking for convenience, or refuel yourself before returning.'
        },
        {
            question: 'Do you deliver cars to airports?',
            answer:
                "Yes! We offer airport delivery and pickup at most major airports. Select your flight details during booking and we'll coordinate the timing."
        },
        {
            question: 'What if I need to extend my rental?',
            answer:
                'You can extend your rental directly through our app or by calling support. As long as the car is available, extensions are usually approved instantly.'
        },
        {
            question: 'Are pets allowed in rental cars?',
            answer:
                'Pets are welcome in most vehicles. We charge a small cleaning fee and recommend booking an SUV or larger vehicle for comfort. Please mention pets during booking.'
        }
    ];

    return (
        <section className='mt-14 border-t border-slate-800/60 pt-10'>
            <div className='mb-8 animate-fade-in'>
                <p className='text-xs font-semibold uppercase tracking-[0.18em] text-primary-light'>
                    FAQs
                </p>
                <h2 className='mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl'>
                    Everything you need to know about renting.
                </h2>
            </div>
            <div className='mx-auto space-y-3'>
                {faqs.map((item, index) => (
                    <details
                        key={index}
                        className='group glass-panel animate-fade-in-up rounded-3xl p-4 text-sm transition-smooth hover-lift'
                        style={{ animationDelay: `${index * 50}ms` }}
                    >
                        <summary className='flex cursor-pointer list-none items-start justify-between gap-3'>
                            <span className='font-semibold text-slate-50 pr-4'>
                                {item.question}
                            </span>
                            <span className='flex-shrink-0 text-xl text-slate-500 transition-transform duration-300 group-open:rotate-90'>
                                ›
                            </span>
                        </summary>
                        <p className='mt-3 text-xs text-slate-300'>{item.answer}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}
