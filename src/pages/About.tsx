import { Shield, Award, Factory, Users } from "lucide-react";
import treatmentImg from "@/assets/treatment-plant.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const About = () => (
  <>
    {/* Hero */}
    <section className="relative py-32 overflow-hidden">
      <img src={heroBg} alt="Treatment plant" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-charcoal/75" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider text-primary-foreground">
          About <span className="text-primary">Us</span>
        </h1>
        <p className="mt-4 text-primary-foreground/70 max-w-2xl mx-auto">
          Over four decades of excellence in timber treatment
        </p>
      </div>
    </section>

    {/* History */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h2 className="font-heading text-3xl font-bold uppercase tracking-wider text-foreground mb-8">
          Our <span className="text-primary">History</span>
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Umzimkhulu Treated Timbers (PTY) LTD was established in 1982 by the late Mvuleni Waters Mlonzi. With over twenty years of experience managing creosoted pole treating plants in the former Transkei homeland, he brought deep expertise to the business.
          </p>
          <p>
            In 2006, due to health reasons, he retired and entrusted the business to his son, Nceba Mlonzi, to carry on the legacy. Under Nceba's leadership, the company was revived and modernised — transitioning to a state-of-the-art Chromated Copper Arsenate (CCA) production line for eucalyptus poles.
          </p>
          <p>
            The business closed its old operations and invested in building a modern treatment plant that meets the standards required by the formal pole market. Today, the plant operates along the R56 road at Highlands Farm in Umzimkhulu Local Municipality, producing up to 250 tons of CCA treated poles per month.
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <h2 className="font-heading text-3xl font-bold uppercase tracking-wider text-foreground text-center mb-12">
          What We <span className="text-primary">Stand For</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "25-Year Guarantee", desc: "Every pole we produce is backed by our lifetime guarantee against termites, fungi, and decay." },
            { icon: Award, title: "SABS Compliant", desc: "Our products meet South African Bureau of Standards requirements for the formal pole market." },
            { icon: Factory, title: "Modern Plant", desc: "State-of-the-art Full Cell treatment facility with capacity for 250 tons per month." },
            { icon: Users, title: "Family Legacy", desc: "A family business built on decades of expertise in timber treatment and preservation." },
          ].map((item) => (
            <div key={item.title} className="bg-card p-6 rounded-lg text-center shadow">
              <item.icon className="mx-auto text-primary mb-4" size={36} />
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 25 Year Guarantee */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-wider text-foreground mb-6">
              The <span className="text-primary">25-Year Guarantee</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              CCA preservative enhances the lifespan of timber by creating a chemical barrier that protects against termites, fungi, and other wood-destroying organisms. Combined with our Weatherwood treatment, we confidently issue a 25-year lifetime guarantee on all poles purchased.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This guarantee reflects our commitment to quality and the proven effectiveness of the Full Cell treatment process. When you buy from UTT, you're investing in poles that will outlast the structures they support.
            </p>
          </div>
          <img src={treatmentImg} alt="Treatment facility" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </section>

    {/* Production process */}
    <section className="py-20 bg-charcoal">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h2 className="font-heading text-3xl font-bold uppercase tracking-wider text-primary-foreground mb-8">
          Production <span className="text-primary">Process</span>
        </h2>
        <div className="space-y-4 text-primary-foreground/70 leading-relaxed">
          <p>
            Umzimkhulu Treated Timbers applies the <strong className="text-primary-foreground">Full Cell (Bethel) process</strong> — the global gold standard for timber treatment:
          </p>
          <ol className="list-decimal list-inside space-y-2 pl-4">
            <li>Timber is placed in a sealed treatment cylinder</li>
            <li>A vacuum is drawn to remove air from the timber cells</li>
            <li>The cylinder is flooded with CCA preservative while maintaining vacuum</li>
            <li>Preservative pressure is raised and held until required retention is achieved</li>
            <li>Pressure is released and excess preservative is recovered</li>
            <li>A final vacuum removes surface preservative</li>
          </ol>
          <p>
            The complete cycle varies from 30 minutes to 1 hour, depending on timber species and permeability. This process ensures deep, uniform penetration of preservative throughout every pole.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default About;
