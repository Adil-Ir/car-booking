import Image from 'next/image';

export default function PopularCategories() {
    const categories = [
        {
            name: 'Luxury Sedans',
            count: '24 cars',
            description:
                'Premium comfort for business trips and special occasions.',
            image:
                'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80'
        },
        {
            name: 'Sport Cars',
            count: '18 cars',
            description:
                'High-performance vehicles for the ultimate driving experience.',
            image:
                'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80'
        },
        {
            name: 'Family SUVs',
            count: '32 cars',
            description:
                'Spacious and safe vehicles perfect for family adventures.',
            image:
                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
        }
    ];

    return (
        <section className='mt-14 border-t border-slate-800/60 pt-10'>
            <div className='mb-8 animate-fade-in'>
                <p className='text-xs font-semibold uppercase tracking-[0.18em] text-primary-light'>
                    Popular categories
                </p>
                <h2 className='mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl'>
                    Find the perfect car for your journey.
                </h2>
            </div>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {categories.map((category, index) => (
                    <div
                        key={category.name}
                        className='group relative overflow-hidden rounded-3xl bg-slate-900/70 shadow-soft transition-smooth hover-lift animate-fade-in-up'
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className='relative h-48 w-full overflow-hidden'>
                            <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className='object-cover transition duration-300 group-hover:scale-105'
                                sizes='(min-width: 1024px) 320px, (min-width: 768px) 45vw, 100vw'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/20' />
                        </div>
                        <div className='p-5'>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-base font-semibold text-slate-50'>
                                    {category.name}
                                </h3>
                                <span className='text-xs text-slate-400'>
                                    {category.count}
                                </span>
                            </div>
                            <p className='mt-2 text-xs text-slate-300'>
                                {category.description}
                            </p>
                            <button className='mt-4 text-xs font-semibold text-primary-light hover:text-primary'>
                                Browse {category.name} →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
