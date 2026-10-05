import { MapPin } from "lucide-react";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

const stores = [];

export function Stores() {
  return (
    <div className="min-h-screen bg-brand-light">
      <section className="bg-brand-primary py-20 text-brand-cream">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-highlight">Come taste the journey</p>
          <h1 className="mt-4 max-w-3xl font-heading text-5xl font-bold text-brand-cream md:text-6xl">Find your nearest Desi Break</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-cream/85">
            Store details will appear here as each Desi Break location opens its doors.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex min-h-[360px] items-center justify-center rounded-[28px] border border-brand-border bg-white p-8 text-center shadow-card">
              <div className="max-w-sm">
                <MapPin className="mx-auto text-brand-secondary" size={42} aria-hidden="true" />
                <h2 className="mt-5 font-heading text-3xl font-bold text-brand-primary">The map is getting ready</h2>
                <p className="mt-4 leading-7 text-stone-600">
                  We will add the live store map and directions as verified outlet information becomes available.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-3xl font-bold text-brand-primary">Our stores</h2>
              {stores.length === 0 ? (
                <div className="mt-5 rounded-2xl border border-dashed border-brand-border bg-white p-8">
                  <p className="leading-7 text-stone-600">No store locations have been published yet.</p>
                  <p className="mt-3 leading-7 text-stone-600">Check back soon for addresses, hours, contact details, and directions.</p>
                </div>
              ) : (
                <div className="mt-5 space-y-4">{stores.map((store) => <div key={store.id}>{store.name}</div>)}</div>
              )}
              <Button to="/drinks" className="mt-8">Start Your Journey</Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}