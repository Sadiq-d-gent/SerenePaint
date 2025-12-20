import { motion } from "framer-motion";
import { Shield, Clock, Award, Users, ThumbsUp, Leaf } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed professionals with comprehensive insurance coverage for your peace of mind.",
  },
  {
    icon: Clock,
    title: "On-Time Completion",
    description: "We respect your time and deliver projects on schedule without compromising quality.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Premium materials and expert craftsmanship backed by our satisfaction guarantee.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with years of experience in all types of painting projects.",
  },
  {
    icon: ThumbsUp,
    title: "Clean Workspace",
    description: "We leave your space spotless. No mess, no stress—just beautiful results.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Options",
    description: "Low-VOC and environmentally friendly paint options for a healthier space.",
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Trusted by Hundreds of{" "}
              <span className="text-lime-400">Happy Clients</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over 15 years of experience, we've built our reputation on quality workmanship, 
              reliability, and exceptional customer service. Here's what sets us apart from the rest.
            </p>

            {/* Highlight Box */}
            <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-lime-400 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">5-Year Warranty</h4>
                  <p className="text-primary-foreground/80 text-sm">
                    All our painting projects come with a comprehensive 5-year warranty 
                    covering both materials and workmanship.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-xl border border-border hover:border-secondary/50 hover:shadow-soft transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
                  <reason.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{reason.title}</h4>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
