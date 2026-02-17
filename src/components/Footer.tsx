import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-charcoal text-primary-foreground/80">
    <div className="container mx-auto px-4 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-heading text-xl font-bold text-primary-foreground uppercase tracking-wider mb-4">
            Umzimkhulu <span className="text-primary">Treated Timbers</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Premium CCA treated timber poles for building, fencing, and agricultural applications. Trusted since 1982 with a 25-year guarantee.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            <Link to="/transport" className="hover:text-primary transition-colors">Transport & Logistics</Link>
            <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary mb-4">Products</h4>
          <div className="flex flex-col gap-2 text-sm">
            <span>Building Poles</span>
            <span>Fencing Poles</span>
            <span>CCA Treated Timber</span>
            <span>Custom Lengths</span>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm">
            <a href="tel:0820844410" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} /> 082 084 4410
            </a>
            <a href="mailto:ncebamolnzi4@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} /> ncebamolnzi4@gmail.com
            </a>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 flex-shrink-0" />
              <span>R56 Road, Highlands Farm<br />Umzimkhulu, KZN 3297</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Umzimkhulu Treated Timbers (PTY) LTD. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
