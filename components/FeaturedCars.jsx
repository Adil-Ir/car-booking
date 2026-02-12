import Image from "next/image";

const cars = [
  {
    name: "Tesla Model S",
    type: "Electric • Luxury",
    price: "$189/day",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
    badge: "Most booked"
  },
  {
    name: "BMW M4 Coupe",
    type: "Sport • Performance",
    price: "$219/day",
    image:
      "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3",
    badge: "New arrival"
  },
  {
    name: "Range Rover Sport",
    type: "SUV • Comfort",
    price: "$199/day",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3",
    badge: "Family favorite"
  },
  {
    name: "Mercedes C-Class",
    type: "Sedan • Executive",
    price: "$159/day",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
    badge: "Best value"
  }
];

export default function FeaturedCars() {
  return (
    <section
      id="featured-cars"
      className="bg-slate-950/70 py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between animate-fade-in">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
              Featured cars
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Curated for every kind of trip.
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-400">
              Hand-picked models with full insurance, flexible mileage, and
              concierge-level support included.
            </p>
          </div>
          <p className="text-xs text-slate-400">
            Transparent pricing • No surprises at pickup
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {cars.map((car, index) => (
            <article
              key={car.name}
              className="group flex flex-col overflow-hidden rounded-3xl bg-slate-950/80 shadow-soft transition-smooth hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-40 w-full overflow-hidden sm:h-44 lg:h-40">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(min-width: 1024px) 260px, (min-width: 768px) 45vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/0 to-slate-950/10" />
                <span className="absolute left-3 top-3 rounded-full bg-slate-950/80 px-2.5 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/40">
                  {car.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3 px-4 pb-4 pt-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    {car.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">{car.type}</p>
                </div>

                <div className="mt-auto flex items-center justify-between text-xs">
                  <div className="space-y-1">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                      From
                    </p>
                    <p className="text-sm font-semibold text-slate-50">
                      {car.price}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      All-inclusive • per day
                    </p>
                  </div>
                  <button className="rounded-full bg-slate-900 px-3 py-2 text-[11px] font-semibold text-slate-100 transition group-hover:bg-primary group-hover:text-white">
                    View details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

