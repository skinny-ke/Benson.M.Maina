import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import haven from "@/assets/haven.png";
import benmarket from "@/assets/benmarket.png";
import Notesapp from "@/assets/Notesapp.png";
import safecycle from "@/assets/safecycle.png";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Ben-MarketShop",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: benmarket,
      tech: ["React", "Node.js", "MongoDB", "Stripe", "M-pesa"],
      github: "#",
      demo: "https://ben-market-shop.pages.dev",
    },
    {
      title: "Keep-Notes",
      description: "A notes app where you can store your notes with media safe and secure.",
      image: Notesapp,
      tech: ["Next.js", "TypeScript", "PostgreSQL",],
      github: "#",
      demo: "https://keep-notes-green.vercel.app",
    },
    {
      title: "SafeCycle Period Tracker",
      description: "A periods tracker with cycle calender and AI health insights.",
      image: safecycle,
      tech: ["React", "Supabase", "Tailwind CSS", "Redux"],
      github: "#",
      demo: "https://safe-cycleapp.vercel.app",
    },
    {
      title: "Haven Companion",
      description: "AI application for people dealing with mental healt issues, has a journal, a community, and emergency support.",
      image: haven,
      tech: ["React", "OpenAI", "Supabase", "Tailwind"],
      github: "#",
      demo: "https://haven-companion.vercel.app",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group glass-effect rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
