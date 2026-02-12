import Image from "next/image";

const services = [
  {
    title: "Premium Fleet",
    description: "Hand-selected luxury and premium vehicles from trusted partners, all verified and maintained to the highest standards.",
    icon: "🚗",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Flexible Rentals",
    description: "From hourly to monthly rentals, choose the duration that fits your needs. No long-term commitments required.",
    icon: "⏰",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance for booking changes, roadside help, or any questions. Real humans, real support.",
    icon: "📞",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Airport Delivery",
    description: "Meet us at the airport for seamless pickup and drop-off. We coordinate with your flight schedule.",
    icon: "✈️",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Digital Experience",
    description: "Complete your booking, upload documents, and manage your rental entirely through our platform. No paperwork.",
    icon: "📱",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Insurance Options",
    description: "Comprehensive coverage options to protect your trip. Choose the level of protection that gives you peace of mind.",
    icon: "🛡️",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
  }
];

export default function OurServices() {
  return (
    <section className="border-t border-slate-800/60 bg-slate-950 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center animate-fade-in">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
            Our services
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Everything you need for a perfect rental experience.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400">
            From premium vehicles to exceptional support, we've designed every service with your comfort and convenience in mind.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-panel animate-fade-in-up relative overflow-hidden rounded-3xl transition-smooth hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/20" />
                <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950/90 text-2xl backdrop-blur-sm">
                  {service.icon}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-50">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
