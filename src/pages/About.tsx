import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Target, Heart, Award, Users, CheckCircle } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project5 from "@/assets/project-5.jpg";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for perfection in every brush stroke, delivering results that exceed expectations.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Honest pricing, transparent communication, and ethical practices guide everything we do.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Premium materials and expert craftsmanship ensure lasting, beautiful results.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We invest in our community through our scholarship program and local partnerships.",
  },
];

const milestones = [
  { year: "2008", title: "Company Founded", description: "Started with a vision to transform spaces" },
  { year: "2012", title: "100th Project", description: "Celebrated our first major milestone" },
  { year: "2015", title: "Commercial Expansion", description: "Entered commercial and industrial markets" },
  { year: "2018", title: "Scholarship Program", description: "Launched our community education initiative" },
  { year: "2023", title: "500+ Projects", description: "Continuing to grow and serve our community" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-lime-400 text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Building Trust Through Quality Workmanship
            </h1>
            <p className="text-xl text-primary-foreground/80">
              For over 15 years, we've been transforming spaces and creating lasting 
              impressions through professional painting services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                From Humble Beginnings to Industry Leaders
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ProPaint was founded in 2008 with a simple mission: to provide exceptional 
                  painting services that transform spaces and exceed customer expectations. 
                  What started as a small team of dedicated painters has grown into one of 
                  the most trusted painting companies in the region.
                </p>
                <p>
                  Our journey has been defined by an unwavering commitment to quality, 
                  innovation, and customer satisfaction. We've painted everything from 
                  cozy family homes to towering commercial buildings, always bringing the 
                  same level of care and attention to detail.
                </p>
                <p>
                  Today, we're proud to have completed over 500 projects and built lasting 
                  relationships with homeowners, businesses, and communities across the country.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src={project1}
                alt="Interior painting project"
                className="rounded-2xl shadow-medium w-full h-64 object-cover"
              />
              <img
                src={project5}
                alt="Exterior painting project"
                className="rounded-2xl shadow-medium w-full h-64 object-cover mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Drives Us Every Day
            </h2>
            <p className="text-lg text-muted-foreground">
              Our core values shape every decision we make and every project we undertake.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 text-center shadow-card"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Milestones Along the Way
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-4" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Our Commitment to the Community
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-6 leading-relaxed">
                We believe that true success is measured not just by business growth, 
                but by the positive impact we make in our community. Through our scholarship 
                program, we're investing in the next generation of leaders.
              </p>
              <ul className="space-y-3">
                {[
                  "Supporting education through scholarships",
                  "Creating local job opportunities",
                  "Using environmentally friendly practices",
                  "Partnering with community organizations",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary-foreground/90">
                    <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-foreground/10 rounded-2xl p-8"
            >
              <div className="text-center">
                <p className="text-5xl font-bold text-lime-400 mb-2">50+</p>
                <p className="text-primary-foreground/80 mb-6">Students Supported</p>
                <p className="text-5xl font-bold text-lime-400 mb-2">₦5M+</p>
                <p className="text-primary-foreground/80">Total Scholarship Awards</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
