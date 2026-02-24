import Image from 'next/image';

export default function CarGrid({ filteredCars }) {
    return (
        <section>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {filteredCars.map((car, index) => (
                    <article
                        key={car.id}
                        className='group flex flex-col overflow-hidden rounded-3xl bg-slate-950/80 shadow-soft transition-smooth hover-lift animate-fade-in-up'
                        style={{ animationDelay: `${index * 50}ms` }}
                    >
                        <div className='relative h-48 w-full overflow-hidden sm:h-52'>
                            <Image
                                src={car.image}
                                alt={car.name}
                                fill
                                className='object-cover transition duration-300 group-hover:scale-105'
                                sizes='(min-width: 1280px) 280px, (min-width: 1024px) 240px, (min-width: 768px) 45vw, 100vw'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/0 to-slate-950/10' />
                            {car.badge && (
                                <span className='absolute left-3 top-3 rounded-full bg-slate-950/90 px-2.5 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/40'>
                                    {car.badge}
                                </span>
                            )}
                            <div className='absolute right-3 top-3 flex items-center gap-1 rounded-full bg-slate-950/90 px-2 py-1 text-[11px] text-slate-200'>
                                <span className='text-emerald-400'>★</span>
                                <span className='font-semibold'>{car.rating}</span>
                                <span className='text-slate-500'>({car.reviews})</span>
                            </div>
                        </div>

                        <div className='flex flex-1 flex-col gap-3 px-4 pb-4 pt-3'>
                            <div>
                                <h3 className='text-base font-semibold text-slate-50'>
                                    {car.name}
                                </h3>
                                <p className='mt-1 text-xs text-slate-400'>{car.type}</p>
                            </div>

                            <div className='flex items-center gap-4 text-[11px] text-slate-400'>
                                <div className='flex items-center gap-1'>
                                    <span>👥</span>
                                    <span>{car.seats}</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <span>⚙️</span>
                                    <span>{car.transmission}</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <span>⛽</span>
                                    <span>{car.fuel}</span>
                                </div>
                            </div>

                            <div className='mt-auto flex items-center justify-between'>
                                <div className='space-y-0.5'>
                                    <p className='text-[11px] uppercase tracking-[0.16em] text-slate-500'>
                                        From
                                    </p>
                                    <p className='text-lg font-semibold text-slate-50'>
                                        ${car.price}
                                        <span className='text-xs font-normal text-slate-400'>
                                            /day
                                        </span>
                                    </p>
                                </div>
                                <button className='rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition hover:bg-primary-light'>
                                    Book now
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {filteredCars.length === 0 && (
                <div className='glass-panel rounded-3xl p-12 text-center'>
                    <p className='text-sm font-semibold text-slate-50'>
                        No cars found matching your criteria
                    </p>
                    <p className='mt-2 text-xs text-slate-400'>
                        Try adjusting your search or filters
                    </p>
                </div>
            )}
        </section>
    );
}
