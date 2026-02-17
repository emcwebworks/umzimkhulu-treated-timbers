import { useState } from "react";
import { Download, FileText } from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

const Pricing = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <section className="bg-charcoal py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider text-primary-foreground">
            <span className="text-primary">Pricing</span>
          </h1>
          <p className="mt-4 text-primary-foreground/70 max-w-2xl mx-auto">
            Request our latest price list or get a custom bulk quote
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <FileText className="mx-auto text-primary mb-6" size={64} />
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wider text-foreground mb-4">
            Request Our Latest Price List
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Timber prices fluctuate based on market conditions, raw material availability, and treatment costs. To ensure you receive the most up-to-date pricing, we provide our current price list directly upon request.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our price list covers all CCA treated pole sizes from 32mm to 175mm diameter across all available lengths (1.2m – 7.2m). Wholesale pricing is available excluding VAT.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setQuoteOpen(true)}
              className="bg-primary text-primary-foreground font-heading uppercase tracking-wider px-8 py-4 rounded hover:bg-primary/90 transition-colors"
            >
              Request Price List
            </button>
            <button
              onClick={() => setQuoteOpen(true)}
              className="border-2 border-primary text-primary font-heading uppercase tracking-wider px-8 py-4 rounded hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Get Bulk Quote
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground text-center mb-8">
            What's <span className="text-primary">Included</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "All Sizes", desc: "Pricing for poles from 32mm to 175mm diameter, 1.2m to 7.2m length." },
              { title: "Wholesale Rates", desc: "Competitive wholesale pricing excluding VAT for contractors and bulk buyers." },
              { title: "Volume Discounts", desc: "Contact us for custom pricing on large orders and ongoing supply contracts." },
            ].map((item) => (
              <div key={item.title} className="bg-card p-6 rounded-lg shadow text-center">
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

export default Pricing;
