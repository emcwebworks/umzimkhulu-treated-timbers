import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import QuoteModal from "./QuoteModal";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/transport", label: "Transport" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-sm border-b border-primary/20">
        <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-heading text-xl md:text-2xl font-bold text-primary-foreground tracking-wider uppercase">
              Umzimkhulu <span className="text-primary">Treated Timbers</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`font-heading text-sm uppercase tracking-wider transition-colors hover:text-primary ${
                  location.pathname === l.to ? "text-primary" : "text-primary-foreground/80"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => setQuoteOpen(true)}
              className="ml-2 bg-primary text-primary-foreground font-heading text-sm uppercase tracking-wider px-5 py-2 rounded hover:bg-primary/90 transition-colors"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-charcoal border-t border-primary/20 pb-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`block px-6 py-3 font-heading text-sm uppercase tracking-wider transition-colors hover:text-primary ${
                  location.pathname === l.to ? "text-primary" : "text-primary-foreground/80"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="px-6 pt-2">
              <button
                onClick={() => { setQuoteOpen(true); setOpen(false); }}
                className="w-full bg-primary text-primary-foreground font-heading text-sm uppercase tracking-wider px-5 py-3 rounded hover:bg-primary/90 transition-colors"
              >
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </nav>
      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  );
};

export default Navbar;
