import {
  Code,
  Server,
  Database,
  Cloud,
  Github,
  Linkedin,
  Mail,
  FileCode,
  Globe,
  Monitor,
  Terminal,
  PenTool,
  Cpu,
  Layers,
  GitBranch,
  Clock,
} from "lucide-react";

// Navigation Items
export const navigationItems = [
  { label: "Skills", path: "#skills" },
  { label: "Projects", path: "#projects" },
  { label: "Experience", path: "#experience" },
  { label: "About", path: "#about" },
  { label: "Contact", path: "#contact" },
];

// Social Links
export const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/undead-bacteria/" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.instagram.com/undead_bacteria/",
  },
  { name: "Email", icon: Mail, url: "mailto:er.bikesh.shrestha@gmail.com" },
];

// Skills Data
export type SkillCategory = "frontend" | "backend" | "devops" | "tools";

export const skills = [
  // Frontend
  { name: "React", icon: Code, category: "frontend", level: 85 },
  { name: "Next.js", icon: Globe, category: "frontend", level: 85 },
  { name: "TypeScript", icon: FileCode, category: "frontend", level: 75 },
  { name: "shadcn/ui", icon: Layers, category: "frontend", level: 80 },
  { name: "Tailwind CSS", icon: PenTool, category: "frontend", level: 85 },
  { name: "JavaScript", icon: FileCode, category: "frontend", level: 85 },
  { name: "HTML/CSS", icon: Monitor, category: "frontend", level: 85 },
  { name: "Redux", icon: Layers, category: "frontend", level: 75 },

  // Backend
  { name: "Node.js", icon: Server, category: "backend", level: 85 },
  { name: "Express.js", icon: Server, category: "backend", level: 85 },
  { name: "Python", icon: FileCode, category: "backend", level: 80 },
  { name: "RESTful APIs", icon: Server, category: "backend", level: 85 },
  { name: "PostgreSQL", icon: Database, category: "backend", level: 85 },
  { name: "MongoDB", icon: Database, category: "backend", level: 80 },

  // DevOps
  { name: "Docker", icon: Cloud, category: "devops", level: 80 },
  { name: "AWS", icon: Cloud, category: "devops", level: 60 },
  { name: "Vercel", icon: Cloud, category: "devops", level: 80 },
  { name: "CI/CD", icon: GitBranch, category: "devops", level: 75 },
  { name: "GitHub Actions", icon: Github, category: "devops", level: 80 },

  // Tools & Methods
  { name: "Git", icon: GitBranch, category: "tools", level: 85 },
  { name: "Agile", icon: Clock, category: "tools", level: 80 },
  { name: "Jest", icon: Terminal, category: "tools", level: 60 },
  { name: "VS Code", icon: Code, category: "tools", level: 90 },
  { name: "System Design", icon: Cpu, category: "tools", level: 65 },
];

// Projects

// Experience data
export const experiences = [
  {
    company: "SUSANKHYA FutureTech Pvt. Ltd.",
    position: "Software Engineer",
    location: "Kathmandu, Nepal",
    startDate: "2025-09-01",
    endDate: null, // Present
    achievements: [
      "Developed and maintained production web applications using Django, Flask, React, and Next.js.",
      "Integrated RESTful APIs, relational databases, and third-party services for authentication and data flow.",
      "Worked closely with cross-functional teams to deliver scalable features and improve code quality.",
      "Optimized backend logic and API performance for high-traffic use cases.",
    ],
    technologies: [
      "Django",
      "Flask",
      "React",
      "PostgreSQL",
      "Docker",
      "REST APIs",
    ],
  },
  {
    company: "EsyGrab",
    position: "Software Engineer",
    location: "Kathmandu, Nepal",
    startDate: "2025-02-01",
    endDate: "2025-09-01",
    achievements: [
      "Led development of web applications using the MERN stack and Next.js.",
      "Designed responsive user interfaces and integrated backend APIs for improved UX.",
      "Used Docker for containerization and Supabase for real-time database and frontend hosting.",
      "Implemented CI/CD pipelines and performance tuning for production systems.",
      "Collaborated with a remote team using Git and Agile practices.",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Next.js",
      "Docker",
      "Supabase",
      "CI/CD",
      "Git",
    ],
  },
  {
    company: "GenFourTech",
    position: "Backend Developer",
    location: "Dubai, UAE",
    startDate: "2024-08-01",
    endDate: "2025-11-01",
    achievements: [
      "Developed and optimized RESTful APIs using Django and PostgreSQL.",
      "Improved API response times by approximately 30% through query and logic optimization.",
      "Assisted in database design and migration of legacy queries to more efficient structures.",
      "Worked closely with frontend developers to ensure smooth API integration.",
      "Participated in code reviews and backend planning discussions.",
    ],
    technologies: [
      "Django",
      "PostgreSQL",
      "REST APIs",
      "Python",
      "Docker",
      "Git",
      "Agile",
    ],
  },
  {
    company: "GenFourTech",
    position: "Backend Developer Intern",
    location: "Dubai, UAE",
    startDate: "2024-06-01",
    endDate: "2024-11-01",
    achievements: [
      "Assisted in building backend services using Django and MySQL.",
      "Designed and maintained database schemas to improve data integrity.",
      "Performed query optimization and performance tuning to reduce server load.",
      "Gained hands-on experience with Agile development workflows and version control.",
    ],
    technologies: ["Django", "MySQL", "Python", "Git", "Agile"],
  },
];

// Bio details
export const bioDetails = {
  image: "/photo.png",
  paragraphs: [
    "Hi, I’m a Full Stack Developer with a strong focus on backend engineering. I have hands-on experience building and maintaining production-ready web applications with an emphasis on clean architecture, performance, and scalability.",
    "I come from a Computer Engineering background and have worked across startups and real-world projects where I handled API development, database design, authentication systems, and cloud deployments. This has helped me understand how to build software that is both technically solid and practical for real users.",
    "I enjoy working in collaborative environments, taking ownership of features end-to-end, and continuously improving my skills. I'm particularly interested in system reliability, and building products that solve meaningful problems.",
  ],
};
