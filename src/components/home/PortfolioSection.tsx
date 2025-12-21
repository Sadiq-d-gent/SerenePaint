import { motion } from "framer-motion";
import { useState } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const paintProducts = [
  {
    image: project1,
    title: "Wooding Coating",
    category: "Wooding",
    description:
      "Premium wood protection coating that enhances natural grain while providing long-lasting resistance against moisture, termites, and UV exposure.",
  },
  {
    image: project2,
    title: "Satin Finish Paint",
    category: "Satin",
    description:
      "Smooth, low-sheen decorative coating ideal for interior walls. Easy to clean, durable, and perfect for modern living spaces.",
  },
  {
    image: project3,
    title: "Heavy-Duty Floor Coating",
    category: "Floor",
    description:
      "High-performance floor coating designed for durability, abrasion resistance, and chemical protection in residential and commercial spaces.",
  },
  {
    image: project4,
    title: "Marine Protective Coating",
    category: "Marine",
    description:
      "Advanced marine-grade coating formulated to resist saltwater corrosion, humidity, and harsh weather conditions.",
  },
  {
    image: project5,
    title: "Automotive Paint System",
    category: "Automotive",
    description:
      "High-gloss automotive coating offering superior color retention, scratch resistance, and professional-grade finish.",
  },
  {
    image: project6,
    title: "Industrial & Waterseal Coating",
    category: "Industrial",
    description:
      "Industrial-strength protective coating and waterseal solution designed to safeguard surfaces from moisture, chemicals, and heavy wear.",
  },
];

const productCategories = [
  "All",
  "Wooding",
  "Satin",
  "Floor",
  "Marine",
  "Automotive",
  "Industrial",
];

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? paintProducts
      : paintProducts.filter(
          (product) => product.category === activeCategory
        );

  return (
    <>
      {/* ===================== PAINT PRODUCTS SECTION ===================== */}
      <section id="products" className="section-padding bg-muted">
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
              Our Products
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Premium Paint & Coating Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our wide range of professional-grade paints and coatings
              designed for durability, beauty, and long-lasting protection.
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
            {productCategories.map((category) => (
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

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-medium transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <span className="text-lime-400 text-sm font-medium mb-2">
                    {product.category} Coating
                  </span>
                  <h3 className="text-xl font-bold text-background mb-1">
                    {product.title}
                  </h3>
                  <p className="text-background/80 text-sm">
                    {product.description}
                  </p>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/90 text-xs font-medium text-foreground">
                  {product.category}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== INTERIOR & EXTERIOR SYSTEMS ===================== */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Paint Systems
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interior & Exterior Finishing Systems
            </h2>
            <p className="text-muted-foreground text-lg">
              Carefully engineered paint systems that deliver superior
              performance, beauty, and environmental protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Interior */}
            <div className="rounded-3xl p-8 bg-muted shadow-soft">
              <h3 className="text-2xl font-bold mb-4">Interior Systems</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Expressions – Rich colors with elegant depth</li>
                <li>• Trust – Reliable everyday interior protection</li>
                <li>• Smooth Finish – Ultra-smooth premium wall finish</li>
              </ul>
            </div>

            {/* Exterior */}
            <div className="rounded-3xl p-8 bg-gradient-to-br from-primary/5 to-muted shadow-soft">
              <h3 className="text-2xl font-bold mb-4">Exterior Systems</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Shield – Pure Acrylic-Based Protection</li>
                <li>• Smooth Finish – Clean, modern exterior look</li>
                <li>• Texture Finish – Decorative & weather-resistant</li>
                <li>• Serene Tile Coating System – Long-lasting tile care</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
