import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuoteModal = ({ open, onOpenChange }: QuoteModalProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onOpenChange(false);
    }, 2500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto bg-background">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl uppercase tracking-wider text-foreground">
            Request a Quote
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill in your details and we'll get back to you with a competitive quote.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="text-primary text-4xl mb-3">✓</div>
            <h3 className="font-heading text-xl uppercase mb-2">Thank You!</h3>
            <p className="text-muted-foreground">We'll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground">Name *</label>
                <input required className="w-full mt-1 px-3 py-2 border border-input rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Company</label>
                <input className="w-full mt-1 px-3 py-2 border border-input rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground">Phone *</label>
                <input required type="tel" className="w-full mt-1 px-3 py-2 border border-input rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Email *</label>
                <input required type="email" className="w-full mt-1 px-3 py-2 border border-input rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Product Type</label>
              <select className="w-full mt-1 px-3 py-2 border border-input rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Building Poles</option>
                <option>Fencing Poles</option>
                <option>Both</option>
                <option>Other</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground">Quantity</label>
                <input className="w-full mt-1 px-3 py-2 border border-input rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="e.g. 500 poles" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Delivery Location</label>
                <input className="w-full mt-1 px-3 py-2 border border-input rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Message</label>
              <textarea rows={3} className="w-full mt-1 px-3 py-2 border border-input rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-heading uppercase tracking-wider py-3 rounded hover:bg-primary/90 transition-colors text-sm"
            >
              Submit Quote Request
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;
