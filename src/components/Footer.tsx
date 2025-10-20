import { ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, link: "https://github.com", label: "GitHub" },
    { icon: Linkedin, link: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, link: "https://twitter.com", label: "Twitter" },
    { icon: Mail, link: "mailto:bensonmurage254@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
              Benson Murage
            </h3>
            <p className="text-muted-foreground mb-4">
              Software Engineer & Full Stack Developer building modern web solutions with passion and precision.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-primary/10 hover:bg-primary hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="mailto:benson.murage@email.com" className="hover:text-primary transition-colors">
                  bensonmurage254@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+254742846843" className="hover:text-primary transition-colors">
                  +254 742846842
                </a>
              </li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Benson Murage. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="p-3 rounded-lg bg-primary text-white hover:shadow-glow transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
