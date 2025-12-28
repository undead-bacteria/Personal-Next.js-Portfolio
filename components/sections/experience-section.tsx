"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { experiences } from '@/lib/constants';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

export function ExperienceSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My career journey and professional growth as a Full-Stack & DevOps Engineer.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-ml-0.5" />
          
          <motion.div 
            className="space-y-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {experiences.map((experience, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className={cn(
                  "relative md:flex md:justify-between md:items-start",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 top-5 h-3 w-3 rounded-full bg-primary md:left-1/2 md:-ml-1.5" />
                
                {/* Date */}
                <div className={cn(
                  "hidden md:block md:w-[45%]",
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                )}>
                  <Badge variant="outline" className="inline-flex items-center gap-1 text-xs px-2 py-0.5">
                    <Calendar className="h-3 w-3" />
                    <span>
                      {format(new Date(experience.startDate), 'MMM yyyy')} — 
                      {experience.endDate 
                        ? format(new Date(experience.endDate), ' MMM yyyy')
                        : ' Present'}
                    </span>
                  </Badge>
                </div>
                
                {/* Content */}
                <Card className={cn(
                  "relative ml-10 md:w-[45%] md:ml-0",
                  "border-border hover:border-primary/30 transition-all duration-300"
                )}>
                  <CardHeader className="pb-2">
                    <div className="md:hidden flex items-center gap-1 text-xs text-muted-foreground mb-2">
                      <Calendar className="h-3 w-3" />
                      <span>
                        {format(new Date(experience.startDate), 'MMM yyyy')} — 
                        {experience.endDate 
                          ? format(new Date(experience.endDate), ' MMM yyyy')
                          : ' Present'}
                      </span>
                    </div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-primary" />
                      {experience.position}
                    </CardTitle>
                    <CardDescription>
                      {experience.company} • {experience.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-primary">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1 mt-4">
                      {experience.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}