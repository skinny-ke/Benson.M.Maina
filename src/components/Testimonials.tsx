import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Kenya",
      content: "Benson is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "CTO, Digital Solutions Ltd",
      content: "Working with Benson was a pleasure. He brought fresh ideas to the team and his technical expertise helped us launch our product ahead of schedule.",
      avatar: "MC",
    },
    {
      name: "Emily Wanjiku",
      role: "Project Manager, InnovateTech",
      content: "Benson's ability to understand complex requirements and translate them into elegant solutions is remarkable. A true professional and team player.",
      avatar: "EW",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Client <span className="gradient-primary bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What people say about working with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect p-6 rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
