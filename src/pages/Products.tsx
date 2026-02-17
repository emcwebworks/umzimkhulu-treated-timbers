import { useState } from "react";
import { CheckCircle, Download } from "lucide-react";
import QuoteModal from "@/components/QuoteModal";
import polesImg from "@/assets/poles-closeup.jpg";
import fencingImg from "@/assets/fencing-poles.jpg";

const Products = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider text-primary-foreground">
            Our <span className="text-primary">Products</span>
          </h1>
          <p className="mt-4 text-primary-foreground/70 max-w-2xl mx-auto">
            CCA treated eucalyptus poles in varying grades, lengths, and diameters
          </p>
        </div>
      </section>

      {/* Building Poles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <img src={polesImg} alt="Building poles" className="w-full rounded-lg shadow-lg" />
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-wider text-foreground mb-4">Building Poles</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our building poles are ideal for construction, structural support, roofing, and general building applications. Each pole undergoes CCA treatment and rigorous quality inspection before dispatch.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-primary" /><span className="text-foreground font-medium">Lengths:</span><span className="text-muted-foreground">1.2m – 7.4m</span></div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-primary" /><span className="text-foreground font-medium">Diameters:</span><span className="text-muted-foreground">32mm – 175mm</span></div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-primary" /><span className="text-foreground font-medium">Treatment:</span><span className="text-muted-foreground">CCA Full Cell Process</span></div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-primary" /><span className="text-foreground font-medium">Guarantee:</span><span className="text-muted-foreground">25-year lifetime</span></div>
              </div>
              <button onClick={() => setQuoteOpen(true)} className="bg-primary text-primary-foreground font-heading uppercase tracking-wider px-6 py-3 rounded hover:bg-primary/90 transition-colors text-sm">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Fencing Poles */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="order-2 md:order-1">
              <h2 className="font-heading text-3xl font-bold uppercase tracking-wider text-foreground mb-4">Fencing Poles</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Purpose-built for agricultural, perimeter, and security fencing applications. Our fencing poles are CCA treated to withstand the harshest South African conditions, providing long-lasting protection for your property.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-primary" /><span className="text-foreground font-medium">CCA treated</span><span className="text-muted-foreground">for maximum durability</span></div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-primary" /><span className="text-foreground font-medium">Agricultural grade</span><span className="text-muted-foreground">quality poles</span></div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-primary" /><span className="text-foreground font-medium">Bulk orders</span><span className="text-muted-foreground">available</span></div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-primary" /><span className="text-foreground font-medium">Various sizes</span><span className="text-muted-foreground">to suit any project</span></div>
              </div>
              <button onClick={() => setQuoteOpen(true)} className="bg-primary text-primary-foreground font-heading uppercase tracking-wider px-6 py-3 rounded hover:bg-primary/90 transition-colors text-sm">
                Request Quote
              </button>
            </div>
            <img src={fencingImg} alt="Fencing poles" className="w-full rounded-lg shadow-lg order-1 md:order-2" />
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wider text-foreground text-center mb-10">
            Technical <span className="text-primary">Specifications</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-charcoal text-primary-foreground">
                  <th className="font-heading uppercase tracking-wider text-left px-4 py-3">Length (m)</th>
                  <th className="font-heading uppercase tracking-wider text-left px-4 py-3">Diameter Range</th>
                  <th className="font-heading uppercase tracking-wider text-left px-4 py-3">Application</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["1.2", "32–50mm", "Short fencing, garden stakes"],
                  ["1.4", "32–75mm", "Fencing, garden"],
                  ["1.8", "32–100mm", "Standard fencing"],
                  ["2.1", "50–125mm", "Fencing, light construction"],
                  ["2.4", "50–150mm", "Construction, structural"],
                  ["2.7", "75–150mm", "Construction, structural"],
                  ["3.0", "75–175mm", "Building, heavy construction"],
                  ["3.6", "75–175mm", "Building, roofing"],
                  ["4.2", "100–175mm", "Structural support"],
                  ["4.8", "100–175mm", "Structural, transmission"],
                  ["5.4", "100–175mm", "Heavy structural"],
                  ["6.0", "125–175mm", "Heavy structural, long span"],
                  ["7.2", "125–175mm", "Long span structural"],
                ].map(([len, dia, app], i) => (
                  <tr key={len} className={i % 2 === 0 ? "bg-secondary" : "bg-card"}>
                    <td className="px-4 py-3 font-medium text-foreground">{len}</td>
                    <td className="px-4 py-3">{dia}</td>
                    <td className="px-4 py-3">{app}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 bg-secondary rounded-lg p-6">
            <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-foreground mb-3">Treatment Standards</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary mt-0.5" /> CCA (Chromated Copper Arsenate) preservative</li>
              <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary mt-0.5" /> Full Cell (Bethel) pressure treatment process</li>
              <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary mt-0.5" /> Quality inspected before dispatch</li>
              <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary mt-0.5" /> SABS compliant for the formal pole market</li>
              <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary mt-0.5" /> 25-year lifetime guarantee on all poles</li>
            </ul>
          </div>
        </div>
      </section>

      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  );
};

export default Products;
