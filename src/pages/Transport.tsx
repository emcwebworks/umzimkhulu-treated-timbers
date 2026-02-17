import { useState } from "react";
import { CheckCircle, Truck, Clock, Package, MapPin } from "lucide-react";
import QuoteModal from "@/components/QuoteModal";
import truckImg from "@/assets/delivery-truck.jpg";

const Transport = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <section className="bg-charcoal py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider text-primary-foreground">
            Transport & <span className="text-primary">Logistics</span>
          </h1>
          <p className="mt-4 text-primary-foreground/70 max-w-2xl mx-auto">
            Reliable delivery with our own fleet of vehicles
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src={truckImg} alt="UTT delivery truck" className="w-full rounded-lg shadow-lg" />
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-wider text-foreground mb-6">
                Direct-to-Site <span className="text-primary">Delivery</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Umzimkhulu Treated Timbers operates its own fleet of heavy-duty vehicles, eliminating third-party delays and ensuring your order arrives on time. From our treatment plant in Umzimkhulu, we deliver across KwaZulu-Natal and surrounding regions.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Truck, label: "Own Fleet" },
                  { icon: Clock, label: "Reliable Turnaround" },
                  { icon: Package, label: "Bulk Capacity" },
                  { icon: MapPin, label: "Regional Coverage" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 bg-secondary p-3 rounded">
                    <item.icon size={20} className="text-primary" />
                    <span className="font-heading text-xs uppercase tracking-wider text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => setQuoteOpen(true)} className="bg-primary text-primary-foreground font-heading uppercase tracking-wider px-6 py-3 rounded hover:bg-primary/90 transition-colors text-sm">
                Request Delivery Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wider text-foreground text-center mb-10">
            How It <span className="text-primary">Works</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Place Order", desc: "Submit your quote request with quantity, sizes, and delivery location." },
              { step: "02", title: "We Prepare", desc: "Your poles are treated, inspected, and loaded onto our trucks." },
              { step: "03", title: "We Deliver", desc: "Direct delivery to your site with our own fleet vehicles." },
            ].map((item) => (
              <div key={item.step} className="bg-card p-6 rounded-lg text-center shadow">
                <div className="font-heading text-4xl font-bold text-primary mb-3">{item.step}</div>
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  );
};

export default Transport;
