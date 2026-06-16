import { motion } from "framer-motion";

const technologies = [
  "React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS",
  "PostgreSQL", "Python", "Express", "Git", "Docker",
  "Supabase", "REST APIs", "Framer Motion", "MongoDB",
];

const TechMarquee = () => {
  return (
    <section
      aria-label="Technologies I work with"
      className="relative border-y border-border/60 bg-secondary/30 py-6 overflow-hidden"
    >
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="flex w-max animate-marquee">
        {[...technologies, ...technologies].map((tech, i) => (
          <motion.span
            key={i}
            whileHover={{ scale: 1.1 }}
            className="mx-6 flex items-center gap-2 text-lg font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
            {tech}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default TechMarquee;
