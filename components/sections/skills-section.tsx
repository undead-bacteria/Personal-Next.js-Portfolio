"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { skills, SkillCategory } from "@/lib/constants";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">(
    "all"
  );

  const categories: { id: SkillCategory | "all"; label: string }[] = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "devops", label: "DevOps" },
    { id: "tools", label: "Tools & Methods" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  // Fallback: If no skills match, show all skills
  const displaySkills = filteredSkills.length > 0 ? filteredSkills : skills;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive collection of technologies and methodologies
            I&apos;ve mastered throughout my professional journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={cn(
                "text-sm py-1 px-3 cursor-pointer transition-all",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-primary/10"
              )}
              onClick={() =>
                setActiveCategory(category.id as SkillCategory | "all")
              }
            >
              {category.label}
            </Badge>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory} // <-- Add this line to force re-render on filter change
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {displaySkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="group relative bg-card hover:bg-card/80 rounded-lg p-6 text-center 
                         transition-all duration-300 border border-border hover:border-primary/30 
                         hover:shadow-md"
            >
              <div className="flex flex-col items-center">
                <div className="mb-3 text-primary">
                  <skill.icon className="h-8 w-8" />
                </div>
                <h3 className="font-medium text-sm">{skill.name}</h3>
                {skill.level && (
                  <div className="w-full mt-3 bg-muted rounded-full h-1.5">
                    <div
                      className="bg-primary h-1.5 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
