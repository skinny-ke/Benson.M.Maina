import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const posts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Best practices and patterns for creating maintainable and performant React applications at scale.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "React",
    },
    {
      title: "Mastering TypeScript for Backend Development",
      excerpt: "How TypeScript can improve your Node.js applications with type safety and better tooling.",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "TypeScript",
    },
    {
      title: "Modern API Design with REST and GraphQL",
      excerpt: "Comparing REST and GraphQL approaches, and when to use each for your next project.",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "API Design",
    },
    {
      title: "Optimizing Web Performance in 2024",
      excerpt: "Latest techniques and tools for making your web applications lightning fast.",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Performance",
    },
  ];

  return (
    <section id="blog" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Latest <span className="gradient-primary bg-clip-text text-transparent">Blog Posts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-effect p-6 rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-300 group cursor-pointer"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {post.category}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="group-hover:text-primary"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
