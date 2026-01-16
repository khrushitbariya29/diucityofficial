import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube, MapPin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h3 className="mb-4 font-display text-3xl font-medium text-secondary-foreground">
              Explore Diu
            </h3>
            <p className="mb-6 max-w-md font-body text-secondary-foreground/70">
              Crafting digital gateways to heritage. Experience the Mediterranean soul of India 
              through curated journeys and authentic stories.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-4 font-display text-lg font-medium text-secondary-foreground">
              Explore
            </h4>
            <ul className="space-y-3 font-body text-secondary-foreground/70">
              <li><a href="#" className="transition-colors hover:text-primary">Diu Fort</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Naida Caves</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Nagoa Beach</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">St. Paul's Church</a></li>
            </ul>
          </motion.div>

          {/* Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="mb-4 font-display text-lg font-medium text-secondary-foreground">
              Partners
            </h4>
            <ul className="space-y-3 font-body text-sm text-secondary-foreground/70">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Diu Tourism Board
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                contact@explorediu.com
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 border-t border-secondary-foreground/10 pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-body text-sm text-secondary-foreground/60">
              © 2025 Explore Diu. All rights reserved.
            </p>
            <p className="flex items-center gap-1 font-body text-sm text-secondary-foreground/60">
              Made with <Heart className="h-4 w-4 fill-accent text-accent" /> for heritage lovers
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;