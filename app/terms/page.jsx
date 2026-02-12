export const metadata = {
  title: "Terms of Service | CarBook",
  description: "CarBook terms of service and rental agreement."
};

export default function TermsPage() {
  return (
    <main className="bg-slate-950 pb-10 pt-6 sm:pt-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-slate-400">Last updated: March 2024</p>
        </div>

        <div className="mt-12 space-y-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <section className="glass-panel rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-slate-50">Rental Agreement</h2>
            <p className="mt-3 text-sm text-slate-300">
              By booking a vehicle through CarBook, you agree to these terms and conditions. The rental agreement begins 
              at the time of pickup and ends when the vehicle is returned in the same condition, subject to normal wear and tear.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-slate-50">Eligibility</h2>
            <p className="mt-3 text-sm text-slate-300">
              Drivers must be at least 21 years old (25 for premium vehicles), hold a valid driver's license, and have 
              a valid credit card. Additional fees may apply for drivers under 25 years of age.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-slate-50">Booking and Cancellation</h2>
            <p className="mt-3 text-sm text-slate-300">
              Bookings can be cancelled or modified up to 24 hours before pickup at no charge. Cancellations within 24 hours 
              may incur a fee. Refunds are processed to the original payment method within 5-10 business days.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-slate-50">Vehicle Use and Restrictions</h2>
            <p className="mt-3 text-sm text-slate-300">
              Vehicles must be used in accordance with all applicable laws. Prohibited uses include off-road driving, 
              racing, towing without authorization, and transporting illegal substances. Violations may result in immediate 
              termination of the rental and additional fees.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-slate-50">Damage and Liability</h2>
            <p className="mt-3 text-sm text-slate-300">
              Renters are responsible for any damage to the vehicle during the rental period. Basic insurance is included, 
              but additional protection plans are available. All damages must be reported immediately to CarBook.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-slate-50">Contact Us</h2>
            <p className="mt-3 text-sm text-slate-300">
              For questions about these Terms of Service, please contact us at support@carbook.co or through our contact page.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
