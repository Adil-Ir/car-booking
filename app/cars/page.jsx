'use client'

import { useState } from 'react'
import HowItsWorks from './components/HowItsWorks'
import CarHero from '../../components/car-component/CarHero'
import CarGrid from '../../components/car-component/CarGrid'
import WhyRent from '../../components/car-component/WhyRent'
import PopularCategories from '../../components/car-component/PopularCategories'
import CarFAQ from '../../components/car-component/CarFAQ'

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

export default function CarsPage() {
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
        {/* Search Bar section remains here due to state */}
        <section className='mb-10'>
          <CarHero />

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

        <CarGrid filteredCars={filteredCars} />
        <WhyRent />
        <PopularCategories />
        <HowItsWorks />
        <CarFAQ />
      </div>
    </main>
  )
}
