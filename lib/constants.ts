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
export const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio application built with Next.js, TypeScript, and Tailwind CSS, featuring dynamic content rendering and an integrated AI-powered chatbot for interactive user engagement.",
    longDescription: `
    Built a fully responsive, SEO-optimized portfolio application using Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui. The project features an AI-powered chatbot assistant, animated project cards, an interactive experience timeline, and a contact form implemented with Next.js API routes and SendGrid. Includes dark mode support, sticky navigation, and is optimized for deployment on Vercel
  `,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React",
      "Framer Motion",
      "SendGrid",
      "Vercel",
      "AI Chatbot",
    ],
    features: [
      "Interactive AI chatbot assistant integrated via OpenAI API",
      "Dynamic sections: Home, Skills, Projects, About, Experience, Contact",
      "Animated project cards with live demos and GitHub links",
      "Experience timeline with roles and achievements",
      "About section with photo and social links",
      "Contact form (Next.js API + SendGrid)",
      "Deployed and optimized on Vercel",
      "Tailwind CSS with dark mode and responsive design",
      "SEO-friendly routing and performance optimization",
      "Dark mode, sticky navigation, SEO optimization",
    ],
    challenges:
      "Faced API quota limitations and resolved it by switching to OpenAI's free-tier API for chatbot functionality. Integrated it seamlessly using serverless Next.js API routes with error handling and fallback messaging.",
    image: "/portfolio.png",
    liveUrl: "https://bikeshshrestha.vercel.app/",
    repoUrl: "https://github.com/undead-bacteria/Personal-Next.js-Portfolio",
  },
  {
    id: 2,
    title: "Simplified POS System",
    description:
      "A containerized, event-driven POS system leveraging Node.js microservices, MongoDB, RabbitMQ, and Docker.",
    longDescription: `
    A containerized, event-driven Point of Sale (POS) system built using a microservices architecture. The system consists of two independently deployable services: an order service that publishes order events to RabbitMQ and an inventory service that consumes those events to update stock levels. MongoDB is used for persistence, with Docker Compose orchestrating the full stack.
  `,
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "RabbitMQ",
      "Docker",
      "Docker Compose",
    ],
    features: [
      "Order service for creating orders and sending messages to RabbitMQ",
      "Inventory service for processing orders and updating stock",
      "MongoDB for storing orders and inventory data",
      "RabbitMQ for decoupled service communication",
      "Fully containerized with Docker and Docker Compose",
    ],
    image: "/pos.jpeg",
    liveUrl: "",
    repoUrl: "https://github.com/undead-bacteria/Simple-POS-App",
  },
  {
    id: 3,
    title: "Don Bosco School Website",
    description:
      "A responsive and informative school website designed to showcase academic programs, facilities, and institutional values, with a clean UI and user-friendly navigation.",
    longDescription: `
    Designed and developed a responsive school website for Don Bosco School to present key  information including academics, facilities, faculty, and contact details. The website focuses on  accessibility, clarity, and performance, providing parents and students with an intuitive  browsing experience. It highlights the school's mission, achievements, infrastructure, and   extracurricular activities while maintaining a modern, professional design optimized for all  devices.
  `,
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "Netlify"],
    features: [
      "Responsive layout optimized for desktop, tablet, and mobile devices",
      "Clear navigation across sections such as Home, About, Facilities, and Contact",
      "Informative sections highlighting academics, labs, sports, and activities",
      "Clean and minimal UI focused on readability and usability",
      "Fast-loading static site deployed on Netlify",
      "Accessible design for parents, students, and staff",
    ],
    challenges:
      "Ensuring clear information architecture and readability for a wide range of users, including parents and students, while keeping the design lightweight and easy to maintain.",
    image: "/school.png",
    liveUrl: "https://donboscoschool.netlify.app/",
    repoUrl: "https://github.com/undead-bacteria/Don-Bosco-School-Brt",
  },
  {
    id: 4,
    title: "Social Media Application",
    description:
      "A full-stack social media application similar to Facebook, featuring user authentication, posts, likes, comments, and a real-time dashboard built using the MERN stack.",
    longDescription: `
    Built a full-featured social media platform using the MERN stack, enabling users to create  accounts, authenticate securely, create posts, upload images, and interact through likes and   comments. The application includes a responsive dashboard UI, RESTful APIs, and cloud-based media handling. Firebase Authentication ensures secure user access, while Cloudinary and Multer manage image uploads efficiently. The UI is designed with Material UI and Tailwind CSS to deliver a modern, responsive user experience across devices.
  `,
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "REST API",
      "Material UI",
      "Tailwind CSS",
      "Firebase Authentication",
      "Cloudinary",
      "Multer",
    ],
    features: [
      "User authentication and authorization using Firebase Auth",
      "Create, edit, delete posts with image uploads",
      "Like and comment functionality on posts",
      "User profile pages with personal posts and activity",
      "Responsive dashboard interface",
      "Image upload and optimization using Cloudinary and Multer",
      "RESTful API architecture with secure endpoints",
      "Modern UI built with Material UI and Tailwind CSS",
    ],
    challenges:
      "Managing secure authentication and media uploads while maintaining performance and scalability. Solved by integrating Firebase Authentication for auth handling and Cloudinary for optimized image storage and delivery.",
    image: "/socialmedia.png",
    liveUrl: "",
    repoUrl: "https://github.com/undead-bacteria/socialmedia",
  },

  {
    id: 4,
    title: "E-commerce Backend API",
    description:
      "A backend-only e-commerce application built with Django and Django REST Framework, providing product management, order processing, payment integration, and shipping functionality via RESTful APIs.",
    longDescription: `
    Developed a robust backend for an e-commerce platform using Django and Django REST Framework  (DRF). The API supports product catalog management, shopping cart operations, order processing, and secure payments. Carrier/shipping API integration is included to handle real-time  shipping rates and tracking. This backend is designed to serve as the core engine for a  full-stack e-commerce application, providing well-structured, secure, and scalable RESTful  endpoints.
  `,
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "Stripe API",
      "Shipping API Integration",
      "SQLite",
      "REST API",
    ],
    features: [
      "CRUD operations for products, categories, and inventory",
      "Shopping cart and order management endpoints",
      "Secure payment processing with Stripe",
      "Carrier/shipping API integration for real-time shipping rates",
      "User authentication and authorization",
      "RESTful API endpoints following best practices",
      "Error handling and input validation",
      "Optimized for scalability and maintainability",
    ],
    challenges:
      "Integrating payment and shipping APIs while ensuring secure, reliable, and real-time transactions. Resolved by using DRF serializers, Stripe webhooks, and proper API authentication techniques.",
    image: "/ecommerce.png",
    liveUrl: "",
    repoUrl: "https://github.com/undead-bacteria/Django-Ecommerce-Backend",
  },
];

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
