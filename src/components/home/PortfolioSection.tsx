import { motion } from "framer-motion";
import { useState } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  {
    image: project1,
    title: "Modern Living Room",
    category: "Residential",
    description: "Complete interior painting with custom wall texturing",
  },
  {
    image: project2,
    title: "Corporate Office Building",
    category: "Commercial",
    description: "Exterior facade painting and restoration",
  },
  {
    image: project3,
    title: "Master Bedroom Suite",
    category: "Residential",
    description: "Elegant neutral tones with accent wall",
  },
  {
    image: project4,
    title: "Industrial Warehouse",
    category: "Industrial",
    description: "Protective coating and safety markings",
  },
  {
    image: project5,
    title: "Luxury Home Exterior",
    category: "Residential",
    description: "Full exterior painting and trim work",
  },
  {
    image: project6,
    title: "Contemporary Kitchen",
    category: "Residential",
    description: "Cabinet refinishing and wall painting",
  },
];

const categories = ["All", "Residential", "Commercial", "Industrial"];

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            See Our Completed Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Browse through our gallery of completed painting projects and see 
            the quality of our work firsthand.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-medium transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <span className="text-lime-400 text-sm font-medium mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-background mb-1">
                  {project.title}
                </h3>
                <p className="text-background/80 text-sm">
                  {project.description}
                </p>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/90 text-xs font-medium text-foreground">
                {project.category}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
