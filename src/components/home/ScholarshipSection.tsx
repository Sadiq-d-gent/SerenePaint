import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, ArrowRight, Users, DollarSign, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ScholarshipSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="relative rounded-3xl overflow-hidden bg-primary p-8 md:p-12 lg:p-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-lime-400 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-secondary-foreground" />
                </div>
                <span className="text-lime-400 font-semibold">Education Support Program</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Serene Paint Scholarship Program
              </h2>
              
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                We believe in investing in the future. Our scholarship program supports 
                talented students who demonstrate academic excellence and a commitment 
                to making a positive impact in their communities.
              </p>

              <Button asChild variant="hero" size="lg">
                <Link to="/scholarship" className="gap-2 bg-lime-400">
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            {/* Right Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                {
                  icon: Users,
                  value: "50+",
                  label: "Students Supported",
                },
                {
                  icon: DollarSign,
                  value: "₦5M+",
                  label: "Total Awarded",
                },
                {
                  icon: BookOpen,
                  value: "100%",
                  label: "Success Rate",
                },
                {
                  icon: GraduationCap,
                  value: "5+",
                  label: "Years Running",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-primary-foreground/10 rounded-2xl p-6 backdrop-blur-sm"
                >
                  <stat.icon className="w-8 h-8 text-lime-400 mb-3" />
                  <p className="text-3xl font-bold text-primary-foreground mb-1">{stat.value}</p>
                  <p className="text-sm text-primary-foreground/70">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
