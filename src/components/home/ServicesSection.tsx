import { motion } from "framer-motion";
import { Home, Building2, Factory, Paintbrush } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Painting",
    description: "Transform your home with our expert residential painting services. Interior and exterior solutions tailored to your style.",
    features: ["Interior Walls & Ceilings", "Exterior House Painting", "Deck & Fence Staining", "Cabinet Refinishing"],
  },
  {
    icon: Building2,
    title: "Commercial Painting",
    description: "Professional painting solutions for offices, retail spaces, restaurants, and more. Minimal disruption to your business.",
    features: ["Office Buildings", "Retail Stores", "Restaurants & Hotels", "Healthcare Facilities"],
  },
  {
    icon: Factory,
    title: "Industrial Painting",
    description: "Heavy-duty coating solutions for warehouses, factories, and industrial facilities. Protective and durable finishes.",
    features: ["Warehouse Coating", "Factory Floors", "Structural Steel", "Protective Coatings"],
  },
  {
    icon: Paintbrush,
    title: "Interior & Exterior",
    description: "Complete painting solutions for any surface, inside or out. Premium paints and finishes that last.",
    features: ["Wall Texturing", "Trim & Molding", "Pressure Washing", "Color Consultation"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Painting Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From cozy homes to sprawling industrial complexes, we deliver exceptional 
            painting services tailored to your unique needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-lime-400 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-secondary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
