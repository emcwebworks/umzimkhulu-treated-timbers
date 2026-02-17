import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Truck, Factory, TreePine, CheckCircle } from "lucide-react";
import QuoteModal from "@/components/QuoteModal";
import heroBg from "@/assets/hero-bg.jpg";
import polesImg from "@/assets/poles-closeup.jpg";
import fencingImg from "@/assets/fencing-poles.jpg";
import treatmentImg from "@/assets/treatment-plant.jpg";
import truckImg from "@/assets/delivery-truck.jpg";

const Index = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Timber treatment plant with stacked poles" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider text-primary-foreground animate-fade-in-up">
            Premium Treated Timber Poles<br />
            <span className="text-primary">Built to Last</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            CCA treated eucalyptus poles for building and fencing — backed by our 25-year lifetime guarantee. Trusted since 1982.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <button onClick={() => setQuoteOpen(true)} className="bg-primary text-primary-foreground font-heading uppercase tracking-wider px-8 py-4 text-lg rounded hover:bg-primary/90 transition-colors">
              Request a Quote
            </button>
            <Link to="/products" className="border-2 border-primary-foreground/30 text-primary-foreground font-heading uppercase tracking-wider px-8 py-4 text-lg rounded hover:bg-primary-foreground/10 transition-colors">
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-primary py-4">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 text-primary-foreground text-sm font-heading uppercase tracking-wider">
          <span className="flex items-center gap-2"><Shield size={18} /> 25-Year Guarantee</span>
          <span className="flex items-center gap-2"><Factory size={18} /> SABS Compliant</span>
          <span className="flex items-center gap-2"><Truck size={18} /> Own Fleet Delivery</span>
          <span className="flex items-center gap-2"><TreePine size={18} /> Since 1982</span>
        </div>
      </section>

      {/* About preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider text-foreground mb-6">
              A Legacy of <span className="text-primary">Quality & Durability</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 1982, Umzimkhulu Treated Timbers (PTY) LTD has been a trusted name in timber treatment for over four decades. Our CCA treated eucalyptus poles are engineered to resist termites, fungi, and decay — giving our customers the confidence of a 25-year lifetime guarantee.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From our modern treatment plant along the R56 road in Umzimkhulu, KwaZulu-Natal, we produce up to 250 tons of treated poles per month, serving contractors, farmers, and developers across the region.
            </p>
            <Link to="/about" className="inline-block bg-primary text-primary-foreground font-heading uppercase tracking-wider px-6 py-3 rounded hover:bg-primary/90 transition-colors text-sm">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Products overview */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider text-foreground text-center mb-12">
            Our <span className="text-primary">Products</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Building Poles */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <img src={polesImg} alt="Building poles" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground mb-3">Building Poles</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  High-quality CCA treated eucalyptus poles for construction and structural support. Available in lengths from 1.2m to 7.4m with diameters from 32mm to 175mm.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-5">
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Multiple diameter options</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Quality inspected</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> 25-year guarantee</li>
                </ul>
                <div className="flex gap-3">
                  <Link to="/products" className="text-sm font-heading uppercase tracking-wider text-primary hover:underline">View Specs</Link>
                  <button onClick={() => setQuoteOpen(true)} className="text-sm font-heading uppercase tracking-wider bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors">Request Quote</button>
                </div>
              </div>
            </div>

            {/* Fencing Poles */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <img src={fencingImg} alt="Fencing poles" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground mb-3">Fencing Poles</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Durable CCA treated fencing poles ideal for agricultural, perimeter, and security fencing. Built to withstand harsh South African conditions.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-5">
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> CCA treated for longevity</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Agricultural grade</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Bulk orders available</li>
                </ul>
                <div className="flex gap-3">
                  <Link to="/products" className="text-sm font-heading uppercase tracking-wider text-primary hover:underline">View Specs</Link>
                  <button onClick={() => setQuoteOpen(true)} className="text-sm font-heading uppercase tracking-wider bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors">Request Quote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider text-foreground mb-6">
                Full Cell <span className="text-primary">Treatment Process</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the Full Cell (Bethel) process — the industry's gold standard for timber preservation. Timber is placed in a sealed cylinder, vacuum-drawn, and flooded with CCA preservative under pressure until the required retention level is achieved.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This process ensures deep penetration of preservative into the timber, providing maximum protection against termites, fungi, and decay. Treatment cycles run 30 minutes to 1 hour depending on timber species and permeability.
              </p>
              <Link to="/about" className="inline-block text-sm font-heading uppercase tracking-wider text-primary hover:underline">
                View Technical Specs →
              </Link>
            </div>
            <img src={treatmentImg} alt="Treatment pressure cylinder" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Transport */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <img src={truckImg} alt="Delivery truck with timber" className="w-full rounded-lg shadow-lg order-2 md:order-1" />
            <div className="order-1 md:order-2">
              <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider text-foreground mb-6">
                Reliable <span className="text-primary">Delivery</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                UTT operates its own fleet of vehicles for reliable, direct-to-site delivery across KwaZulu-Natal and surrounding regions. We handle bulk orders with efficient turnaround times.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Own fleet — no third-party delays</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Regional coverage</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Bulk order capacity</li>
              </ul>
              <Link to="/transport" className="inline-block text-sm font-heading uppercase tracking-wider bg-primary text-primary-foreground px-6 py-3 rounded hover:bg-primary/90 transition-colors">
                Check Delivery Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-wider text-primary-foreground mb-6">
            Need Quality Treated Poles?<br />
            <span className="text-primary">Get a Quote Today</span>
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Whether you're a contractor, farmer, or developer — we deliver the right poles at the right price, backed by our 25-year guarantee.
          </p>
          <button onClick={() => setQuoteOpen(true)} className="bg-primary text-primary-foreground font-heading uppercase tracking-wider px-10 py-4 text-lg rounded hover:bg-primary/90 transition-colors">
            Request a Quote
          </button>
        </div>
      </section>

      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  );
};

export default Index;
