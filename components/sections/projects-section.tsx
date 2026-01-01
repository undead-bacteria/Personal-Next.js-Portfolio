"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

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
    <section id="projects" className="py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, personal projects, and contributions
            to open-source.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="h-full flex flex-col overflow-hidden group border-border hover:border-primary/30 transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={340}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto pt-2 flex justify-between">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" className="gap-2">
                        Details <ArrowRight className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">
                          {project.title}
                        </DialogTitle>
                        <DialogDescription className="text-muted-foreground">
                          {project.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-6">
                        <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={800}
                            height={450}
                            className="object-cover"
                          />
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-2">
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium mb-2">
                              Project Details
                            </h4>
                            <p className="text-muted-foreground">
                              {project.longDescription}
                            </p>
                          </div>

                          {project.features && (
                            <div>
                              <h4 className="font-medium mb-2">Key Features</h4>
                              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                {project.features.map((feature, index) => (
                                  <li key={index}>{feature}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {project.challenges && (
                            <div>
                              <h4 className="font-medium mb-2">
                                Challenges & Solutions
                              </h4>
                              <p className="text-muted-foreground">
                                {project.challenges}
                              </p>
                            </div>
                          )}
                        </div>

                        <div className="flex gap-4 mt-8">
                          {project.liveUrl && (
                            <Button asChild>
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="gap-2"
                              >
                                View Live <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          )}

                          {project.repoUrl && (
                            <Button variant="outline" asChild>
                              <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="gap-2"
                              >
                                View Code <Github className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <div className="flex gap-2">
                    {project.repoUrl && (
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View source code"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}

                    {project.liveUrl && (
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View live project"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
