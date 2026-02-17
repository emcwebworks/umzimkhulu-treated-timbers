import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

const Contact = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="bg-charcoal py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider text-primary-foreground">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="mt-4 text-primary-foreground/70 max-w-2xl mx-auto">
            Get in touch for quotes, enquiries, or technical information
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground mb-6">
                Get In <span className="text-primary">Touch</span>
              </h2>
              <div className="space-y-5">
                <a href="tel:0820844410" className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-primary/10 transition-colors group">
                  <Phone className="text-primary" size={24} />
                  <div>
                    <div className="font-heading text-sm uppercase tracking-wider text-foreground">Phone</div>
                    <div className="text-muted-foreground text-sm">082 084 4410</div>
                  </div>
                </a>
                <a href="https://wa.me/27820844410" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-primary/10 transition-colors group">
                  <MessageCircle className="text-primary" size={24} />
                  <div>
                    <div className="font-heading text-sm uppercase tracking-wider text-foreground">WhatsApp</div>
                    <div className="text-muted-foreground text-sm">Chat with us on WhatsApp</div>
                  </div>
                </a>
                <a href="mailto:ncebamolnzi4@gmail.com" className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-primary/10 transition-colors group">
                  <Mail className="text-primary" size={24} />
                  <div>
                    <div className="font-heading text-sm uppercase tracking-wider text-foreground">Email</div>
                    <div className="text-muted-foreground text-sm">ncebamolnzi4@gmail.com</div>
                  </div>
                </a>
                <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                  <MapPin className="text-primary mt-0.5" size={24} />
                  <div>
                    <div className="font-heading text-sm uppercase tracking-wider text-foreground">Address</div>
                    <div className="text-muted-foreground text-sm">
                      R56 Road, Highlands Farm<br />
                      Umzimkhulu, KwaZulu-Natal 3297<br />
                      P.O. Box 530, Umzimkhulu
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => setQuoteOpen(true)}
                  className="w-full bg-primary text-primary-foreground font-heading uppercase tracking-wider px-6 py-4 rounded hover:bg-primary/90 transition-colors"
                >
                  Request a Quote
                </button>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground mb-6">
                Send a <span className="text-primary">Message</span>
              </h2>
              {sent ? (
                <div className="bg-secondary rounded-lg p-8 text-center">
                  <div className="text-primary text-4xl mb-3">✓</div>
                  <h3 className="font-heading text-xl uppercase mb-2 text-foreground">Message Sent!</h3>
                  <p className="text-muted-foreground">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground">Name *</label>
                      <input required className="w-full mt-1 px-3 py-2 border border-input rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Company</label>
                      <input className="w-full mt-1 px-3 py-2 border border-input rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
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
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <input className="w-full mt-1 px-3 py-2 border border-input rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Message *</label>
                    <textarea required rows={5} className="w-full mt-1 px-3 py-2 border border-input rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-primary text-primary-foreground font-heading uppercase tracking-wider py-3 rounded hover:bg-primary/90 transition-colors text-sm">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-80">
        <iframe
          title="Umzimkhulu Treated Timbers Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28100!2d29.92!3d-30.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef5c3b3b3b3b3b3%3A0x0!2sUmzimkhulu!5e0!3m2!1sen!2sza!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  );
};

export default Contact;
