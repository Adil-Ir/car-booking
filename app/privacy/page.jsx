export const metadata = {
  title: "Privacy Policy | CarBook",
  description: "CarBook privacy policy and data protection information."
};

export default function PrivacyPage() {
  return (
    <main className="bg-slate-950 pb-10 pt-6 sm:pt-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-slate-400">Last updated: March 2024</p>
        </div>

        <div className="mt-12 space-y-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <section className="glass-panel rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-slate-50">Information We Collect</h2>
            <p className="mt-3 text-sm text-slate-300">
              We collect information you provide directly to us, such as when you create an account, make a reservation, 
              contact customer support, or subscribe to our newsletter. This may include your name, email address, phone number, 
              payment information, and driver's license details.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-slate-50">How We Use Your Information</h2>
            <p className="mt-3 text-sm text-slate-300">
              We use the information we collect to process your bookings, communicate with you about your reservations, 
              send you marketing communications (with your consent), improve our services, and comply with legal obligations.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-slate-50">Data Security</h2>
            <p className="mt-3 text-sm text-slate-300">
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. All payment information is encrypted and processed 
              through secure payment processors.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-slate-50">Your Rights</h2>
            <p className="mt-3 text-sm text-slate-300">
              You have the right to access, correct, or delete your personal information at any time. You can also opt-out 
              of marketing communications by clicking the unsubscribe link in our emails or contacting us directly.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-slate-50">Contact Us</h2>
            <p className="mt-3 text-sm text-slate-300">
              If you have questions about this Privacy Policy, please contact us at privacy@carbook.co or through our 
              contact page.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
