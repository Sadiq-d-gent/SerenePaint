import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Calendar, ArrowRight, ArrowLeft, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const pressArticles = [
  {
    id: "scholarship-program-2024",
    title: "ProPaint Launches 2024 Scholarship Program",
    excerpt: "We're excited to announce the opening of applications for our annual scholarship program, supporting students across Nigeria in their educational pursuits.",
    content: `
      <p>We are thrilled to announce the launch of our 2024 Scholarship Program, continuing our commitment to supporting education in Nigeria. This year, we're expanding the program to reach even more deserving students.</p>
      
      <h3>About the Program</h3>
      <p>The ProPaint Scholarship Program was established in 2018 to provide financial assistance to talented students who demonstrate academic excellence and community involvement. Since its inception, we've supported over 50 students in achieving their educational goals.</p>
      
      <h3>Eligibility Requirements</h3>
      <p>Applicants must be Nigerian citizens, have completed their SSCE with good results, and demonstrate financial need. The scholarship covers tuition fees and provides a monthly stipend for living expenses.</p>
      
      <h3>How to Apply</h3>
      <p>Interested students can apply through our website by submitting the online application form along with required documents. The deadline for applications is March 31, 2024.</p>
    `,
    date: "2024-01-15",
    author: "ProPaint Team",
    readTime: "3 min read",
    image: project1,
    category: "Scholarship",
  },
  {
    id: "commercial-project-milestone",
    title: "ProPaint Completes Landmark Commercial Project",
    excerpt: "Our team successfully completed the painting of a 20-story office complex, one of the largest commercial projects in our company's history.",
    content: `
      <p>We are proud to announce the successful completion of what has become one of the most significant projects in our company's 15-year history. The 20-story Apex Business Tower now stands as a testament to our commitment to excellence.</p>
      
      <h3>Project Highlights</h3>
      <p>The project involved a team of 50 professional painters working over six months. We used premium-grade paints and coatings designed to withstand the harsh tropical climate while maintaining their aesthetic appeal for years to come.</p>
      
      <h3>Sustainable Practices</h3>
      <p>In line with our commitment to environmental responsibility, we utilized low-VOC paints and implemented waste reduction strategies throughout the project. This approach not only benefits the environment but also ensures a healthier indoor environment for the building's occupants.</p>
    `,
    date: "2023-11-20",
    author: "ProPaint Team",
    readTime: "4 min read",
    image: project2,
    category: "Projects",
  },
  {
    id: "community-initiative",
    title: "ProPaint Partners with Local Schools for Community Initiative",
    excerpt: "In our ongoing effort to give back to the community, we've partnered with five local schools to refresh their facilities with new paint.",
    content: `
      <p>Education is the foundation of progress, and we believe every student deserves to learn in an inspiring environment. That's why we've launched our Schools Beautification Initiative, partnering with five schools in the Lagos area.</p>
      
      <h3>The Initiative</h3>
      <p>Our team of volunteers, including employees and their families, spent several weekends transforming classrooms, libraries, and common areas. The bright, fresh colors have already had a positive impact on student morale and engagement.</p>
      
      <h3>Looking Forward</h3>
      <p>This is just the beginning. We plan to expand this initiative to reach more schools in the coming years, because we believe that investing in education is investing in the future.</p>
    `,
    date: "2023-09-05",
    author: "ProPaint Team",
    readTime: "3 min read",
    image: project3,
    category: "Community",
  },
];

export const Press = () => {
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
              Press & Updates
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Latest News & Announcements
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Stay updated with our latest projects, company news, scholarship announcements, 
              and community initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-8">
            {pressArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-medium transition-all duration-300"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="aspect-video md:aspect-auto md:h-full overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div>
                      <Button asChild variant="ghost" className="group/btn p-0">
                        <Link to={`/press/${article.id}`} className="flex items-center gap-2">
                          Read More
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const PressArticle = () => {
  const { id } = useParams<{ id: string }>();
  const article = pressArticles.find((a) => a.id === id);

  if (!article) {
    return (
      <Layout>
        <section className="section-padding bg-background">
          <div className="container-custom text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/press">Back to Press</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/press"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Press
            </Link>
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {article.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full rounded-2xl shadow-medium mb-10"
              />
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Press;
