import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = ["Full Stack Developer" , "Information Technology"];
  const colors = [
    "hsl(220, 90%, 56%)", // primary
    "hsl(260, 80%, 60%)", // accent
    "hsl(200, 90%, 50%)", // cyan
    "hsl(280, 70%, 60%)", // purple
    "hsl(340, 80%, 60%)", // pink
  ];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    const colorInterval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 2000);

    return () => {
      clearInterval(titleInterval);
      clearInterval(colorInterval);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-sm md:text-base font-medium text-primary mb-4"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground"
            >
              Benson M. Maina
            </motion.h1>

            <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 h-12 sm:h-14 md:h-16 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentTitle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  style={{ color: colors[colorIndex] }}
                  className="font-semibold transition-colors duration-1000"
                >
                  {titles[currentTitle]}
                </motion.h2>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Building scalable web apps & solving problems with clean code.
              <br />
              BSc. IT Graduate specializing in modern web technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="shadow-elegant group"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("/cv.pdf", "_blank")}
                className="shadow-elegant group"
              >
                Download CV
                <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex justify-center gap-6"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-primary">3+</h3>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </motion.div>
            <div className="w-px bg-border" />
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-primary">20+</h3>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </motion.div>
            <div className="w-px bg-border" />
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-primary">10+</h3>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection("#about")}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
        >
          <span className="text-sm">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight className="rotate-90 h-5 w-5" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
