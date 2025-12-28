"use client"; // Add this at the top

// Import useState and useEffect
import { useState, useEffect } from "react";
import Link from "next/link";
import { socialLinks } from "@/lib/constants";

export function Footer() {
  // Use state to store the year
  const [year, setYear] = useState("");

  // Update year on client side only
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center text-center">
          <div className="md:col-span-2 flex flex-col items-center">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Portfolio
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">
              Full-Stack Developer with experience building scalable web
              applications using modern technologies.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#skills"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Connect</h3>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {year} Bikesh Shrestha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
