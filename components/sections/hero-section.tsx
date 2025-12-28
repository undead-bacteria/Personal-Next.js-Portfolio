"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={container}
        >
          <motion.div variants={item}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Full-Stack
              <span className="text-primary block mt-2">Developer</span>
            </h1>
          </motion.div>

          <motion.div variants={item}>
            <p className="text-xl text-muted-foreground mb-8">
              Building and deploying scalable web applications using modern
              technologies. Experience with Docker, AWS fundamentals, CI/CD
              workflows, and web development.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="gap-2"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("skills")}
          aria-label="Scroll down"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  );
}
