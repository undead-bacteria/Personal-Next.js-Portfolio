"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { socialLinks, bioDetails } from "@/lib/constants";
import Image from "next/image";

export function BioSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <div className="mt-4 max-w-3xl mx-auto text-muted-foreground">
            {bioDetails.paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-square w-64 md:w-80"
          >
            <div className="absolute inset-0 rounded-2xl rotate-3 bg-primary/10" />
            <div className="absolute inset-0 rounded-2xl -rotate-3 bg-secondary/10" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src={bioDetails.image}
                alt="Profile photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div variants={item} className="mt-8">
              <h3 className="text-lg font-medium mb-4">Connect with me</h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>

            <motion.div variants={item} className="mt-8">
              <Button asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
