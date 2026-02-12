'use client'

import { useState } from 'react'
import Image from 'next/image'
import HowItsWorks from './components/HowItsWorks'

const allCars = [
  {
    id: 1,
    name: 'Tesla Model S',
    type: 'Electric • Luxury',
    price: 189,
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80',
    badge: 'Most booked',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Electric',
    rating: 4.9,
    reviews: 234
  },
  {
    id: 2,
    name: 'BMW M4 Coupe',
    type: 'Sport • Performance',
    price: 219,
    image:
      'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3',
    badge: 'New arrival',
    seats: 4,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    rating: 4.8,
    reviews: 189
  },
  {
    id: 3,
    name: 'Range Rover Sport',
    type: 'SUV • Comfort',
    price: 199,
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3',
    badge: 'Family favorite',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Hybrid',
    rating: 4.9,
    reviews: 312
  },
  {
    id: 4,
    name: 'Mercedes C-Class',
    type: 'Sedan • Executive',
    price: 159,
    image:
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
    badge: 'Best value',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    rating: 4.7,
    reviews: 198
  },
  {
    id: 5,
    name: 'Audi A5 Sportback',
    type: 'Sedan • Premium',
    price: 179,
    image:
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80',
    badge: null,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    rating: 4.8,
    reviews: 156
  },
  {
    id: 6,
    name: 'Porsche 911 Carrera',
    type: 'Sport • Luxury',
    price: 349,
    image:
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
    badge: 'Premium',
    seats: 4,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    rating: 5.0,
    reviews: 89
  },
  {
    id: 7,
    name: 'Ford Mustang GT',
    type: 'Sport • Classic',
    price: 169,
    image:
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80',
    badge: null,
    seats: 4,
    transmission: 'Manual',
    fuel: 'Gasoline',
    rating: 4.6,
    reviews: 142
  },
  {
    id: 8,
    name: 'Jeep Wrangler',
    type: 'SUV • Adventure',
    price: 149,
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3',
    badge: null,
    seats: 5,
    transmission: 'Manual',
    fuel: 'Gasoline',
    rating: 4.7,
    reviews: 203
  },
  {
    id: 9,
    name: 'Lexus RX 350',
    type: 'SUV • Luxury',
    price: 189,
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3',
    badge: null,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Hybrid',
    rating: 4.8,
    reviews: 167
  },
  {
    id: 10,
    name: 'Volvo XC90',
    type: 'SUV • Family',
    price: 179,
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3',
    badge: 'Safety first',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Hybrid',
    rating: 4.9,
    reviews: 245
  },
  {
    id: 11,
    name: 'Honda Accord',
    type: 'Sedan • Reliable',
    price: 99,
    image:
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
    badge: 'Economy',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    rating: 4.5,
    reviews: 278
  },
  {
    id: 12,
    name: 'Chevrolet Corvette',
    type: 'Sport • Iconic',
    price: 299,
    image:
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80',
    badge: 'Limited',
    seats: 2,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    rating: 4.9,
    reviews: 67
  }
]

const carTypes = ['All', 'Sedan', 'SUV', 'Sport', 'Electric', 'Luxury']
const priceRanges = [
  { label: 'All prices', min: 0, max: 1000 },
  { label: 'Under $150', min: 0, max: 150 },
  { label: '$150 - $200', min: 150, max: 200 },
  { label: '$200 - $300', min: 200, max: 300 },
  { label: 'Over $300', min: 300, max: 1000 }
]

export default function CarsPage () {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('All')
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0])

  const filteredCars = allCars.filter(car => {
    const matchesSearch =
      car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.type.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType =
      selectedType === 'All' ||
      car.type.toLowerCase().includes(selectedType.toLowerCase())

    const matchesPrice =
      car.price >= selectedPriceRange.min && car.price <= selectedPriceRange.max

    return matchesSearch && matchesType && matchesPrice
  })

  return (
    <main className='bg-slate-950 pb-10 pt-6 sm:pt-8'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Hero / Search Section */}
        <section className='mb-10'>
          <div className='mb-6 animate-fade-in-down'>
            <p className='text-xs font-semibold uppercase tracking-[0.18em] text-primary-light'>
              Our fleet
            </p>
            <h1 className='mt-2 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl'>
              Find your perfect ride.
            </h1>
            <p className='mt-2 text-sm text-slate-400'>
              Browse our curated collection of premium vehicles, all verified
              and ready to drive.
            </p>
          </div>

          {/* Search Bar */}
          <div
            className='glass-panel animate-scale-in rounded-2xl p-4'
            style={{ animationDelay: '100ms' }}
          >
            <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
              <div className='flex-1'>
                <input
                  type='text'
                  placeholder='Search by name or type...'
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className='w-full rounded-xl bg-slate-950/60 px-4 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50'
                />
              </div>
              <div className='flex gap-2 sm:flex-1'>
                <select
                  value={selectedType}
                  onChange={e => setSelectedType(e.target.value)}
                  className='flex-1 rounded-xl bg-slate-950/60 px-4 py-2.5 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/50'
                >
                  {carTypes.map(type => (
                    <option key={type} value={type} className='bg-slate-950'>
                      {type}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedPriceRange.label}
                  onChange={e => {
                    const range = priceRanges.find(
                      r => r.label === e.target.value
                    )
                    if (range) setSelectedPriceRange(range)
                  }}
                  className='flex-1 rounded-xl bg-slate-950/60 px-4 py-2.5 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/50'
                >
                  {priceRanges.map(range => (
                    <option
                      key={range.label}
                      value={range.label}
                      className='bg-slate-950'
                    >
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <p className='mt-3 text-xs text-slate-400'>
              Showing {filteredCars.length}{' '}
              {filteredCars.length === 1 ? 'car' : 'cars'} available
            </p>
          </div>
        </section>

        {/* Cars Grid */}
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

        {/* Why Rent With Us */}
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
            {[
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
            ].map((item, index) => (
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

        {/* Popular Categories */}
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
            {[
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
            ].map((category, index) => (
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

        {/* How It Works */}
        <HowItsWorks />

        {/* FAQs */}
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
            {[
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
            ].map((item, index) => (
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
      </div>
    </main>
  )
}
