import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline = [
    {
      type: "education",
      icon: GraduationCap,
      title: "BSc. Information Technology",
      organization: "Murang'a University of Technology",
      period: "2024 - 2028",
      description: "Graduated with honors. Focus on software engineering, database systems, and web technologies.",
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Full Stack Developer Intern",
      organization: "TechStart Kenya",
      period: "2021 - 2022",
      description: "Built responsive web applications using React and Node.js. Collaborated with cross-functional teams.",
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Frontend Developer",
      organization: "Digital Solutions Ltd",
      period: "2022 - 2023",
      description: "Developed and maintained client-facing applications. Improved performance by 40%.",
    },
    {
      type: "certification",
      icon: Award,
      title: "AWS Certified Developer",
      organization: "Amazon Web Services",
      period: "2023",
      description: "Certified in cloud development and deployment best practices.",
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Software Engineer",
      organization: "InnovateTech",
      period: "2023 - Present",
      description: "Leading development of scalable full-stack solutions. Mentoring junior developers.",
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Experience & <span className="gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                  }`}
                >
                  <div className="flex items-start gap-4 md:block">
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-full gradient-primary flex items-center justify-center shadow-glow z-10">
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <div className="ml-20 md:ml-0 glass-effect p-6 rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-300 md:w-[calc(50%-4rem)]">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          {item.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-primary font-medium mb-3">{item.organization}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
