export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  image: string;
  featured: boolean;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud & Tools';
  description: string;
  icon: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  description?: string;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  organization: string;
  description: string;
  tags: string[];
}

export const personalInfo = {
  name: "Omkar Dhanave",
  initials: "OD",
  title: "Full Stack Web Developer",
  headline: "Building digital experiences that actually matter.",
  subheadline: "Hi, I'm Omkar Dhanave — a Full Stack Web Developer focused on building modern, scalable, and user-friendly web applications across the JavaScript ecosystem.",
  status: "AVAILABLE FOR OPPORTUNITIES",
  email: "o.m.dhanave@gmail.com",
  phone: "+91 7040328972",
  location: "Satara, Maharashtra, India",
  githubUrl: "https://github.com/omkar231098",
  linkedinUrl: "https://www.linkedin.com/in/omkardhanave/",
  resumeUrl: "https://drive.google.com/file/d/1ibhDKls-u7FWQ_UkA6eo2PMNEFG2AoSx/view?usp=sharing",
  resumeDocUrl: "https://docs.google.com/document/d/134onkh0n9vD4TGn4rmCmKfOxwNBSKE29J56SRIOcgIs/edit?usp=sharing",
  whatsappUrl: "https://wa.me/7040328972?text=Hi%20Omkar,%20I%20reviewed%20your%20portfolio%20and%20would%20love%20to%20connect!",
  aboutLead: "Turning complex backend logic and user requirements into clean, scalable, high-performance web products.",
  aboutParagraphs: [
    "I am a dedicated Full Stack Developer with an engineering mindset and a strong commitment to building resilient web software. My development philosophy is rooted in clarity: clean codebases, modular architectures, and friction-free user experiences.",
    "Specializing in JavaScript and TypeScript, I work comfortably across the entire application stack. On the backend, I design performant RESTful APIs and database schemas using Node.js, Express, MongoDB, and SQL. On the frontend, I craft fluid, responsive interfaces using React, Next.js, and modern CSS systems.",
    "Through rigorous hands-on projects at Masai School and my engineering foundation from Karmaveer Bhaurao Patil College of Engineering, I have honed my ability to analyze problems methodically, collaborate effectively, and adapt rapidly to new technologies."
  ],
  pillars: [
    {
      title: "Full Stack Architecture",
      desc: "End-to-end web applications with modular code and clean separation of concerns.",
    },
    {
      title: "JavaScript & Node.js Core",
      desc: "Deep familiarity with async patterns, event loops, REST API design, and modern ES6+.",
    },
    {
      title: "Problem Solving",
      desc: "Logical approach to debugging, algorithmic problem solving, and data persistence.",
    },
    {
      title: "Continuous Evolution",
      desc: "Relentless curiosity to learn modern tooling, performance optimization, and cloud workflows.",
    },
  ],
};

export const skillsData: SkillItem[] = [
  // Frontend
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    description: "Modern asynchronous workflows, closures, promises, DOM manipulation, and core language fundamentals.",
    icon: "Code2",
  },
  {
    name: "React.js",
    category: "Frontend",
    description: "Component-driven architecture, custom hooks, state management, and modern lifecycle optimizations.",
    icon: "Atom",
  },
  {
    name: "HTML5",
    category: "Frontend",
    description: "Semantic document structuring, accessibility (a11y) standards, and SEO best practices.",
    icon: "FileCode",
  },
  {
    name: "CSS3 & Tailwind CSS",
    category: "Frontend",
    description: "Modern utility-first styling, responsive layouts, flexbox, CSS grid, and GPU animations.",
    icon: "Palette",
  },
  // Backend
  {
    name: "Node.js",
    category: "Backend",
    description: "Event-driven runtime for building non-blocking, asynchronous backend services and microservices.",
    icon: "Server",
  },
  {
    name: "Express.js",
    category: "Backend",
    description: "RESTful API development, middleware integration, route orchestration, and error handling.",
    icon: "Layers",
  },
  {
    name: "Mongoose & ODM",
    category: "Backend",
    description: "Schema validation, population, aggregation pipelines, and document lifecycle hooks.",
    icon: "Workflow",
  },
  {
    name: "RESTful APIs & Auth",
    category: "Backend",
    description: "Secure endpoint design, JWT token validation, Bcrypt password encryption, and status code standards.",
    icon: "ShieldCheck",
  },
  // Database
  {
    name: "MongoDB Atlas",
    category: "Database",
    description: "NoSQL document database design, cloud clustering, indexing, and scalable queries.",
    icon: "Database",
  },
  {
    name: "MySQL",
    category: "Database",
    description: "Relational database structuring, ACID compliance, table normalization, and SQL queries.",
    icon: "Table",
  },
  // Cloud & Tools
  {
    name: "AWS",
    category: "Cloud & Tools",
    description: "Cloud fundamentals, cloud hosting configurations, and object storage integration.",
    icon: "Cloud",
  },
  {
    name: "Git & GitHub",
    category: "Cloud & Tools",
    description: "Version control workflows, branching, pull requests, code reviews, and remote collaboration.",
    icon: "GitBranch",
  },
  {
    name: "Postman",
    category: "Cloud & Tools",
    description: "API testing, automated collection runs, header authentication, and request payload debugging.",
    icon: "Send",
  },
  {
    name: "Vercel & Netlify",
    category: "Cloud & Tools",
    description: "Continuous deployment pipelines, automated previews, static asset caching, and production hosting.",
    icon: "Globe",
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "tiny-trendz",
    title: "Tiny Trendz",
    category: "Full Stack E-Commerce",
    description: "An Indian e-commerce web platform specializing in baby and kids' products including clothing, toys, and healthcare.",
    longDescription: "Tiny Trendz is a dedicated e-commerce web solution designed for Indian families shopping for baby and child essentials. The platform features an intuitive shopping experience with dynamic product filtering, keyword search, cart simulation, and checkout flows. Additionally, an administrative interface allows real-time CRUD operations directly synchronized with a cloud-hosted MongoDB Atlas database.",
    technologies: ["Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "JavaScript", "HTML5", "CSS3"],
    liveUrl: "https://incandescent-gelato-68929c.netlify.app/index.html",
    githubUrl: "https://github.com/omkar231098/Tiny-Trendz",
    image: "/images/tiny-trendz.png",
    featured: true,
    highlights: [
      "Dynamic catalog searching, multi-criteria filtering, and price sorting algorithms",
      "Full administrative dashboard supporting complete product lifecycle CRUD operations",
      "Client-side cart calculations, interactive item adjustments, and payment simulation",
      "Robust REST API endpoints built with Express and backed by MongoDB Atlas"
    ],
  },
  {
    id: "healthconnect-plus",
    title: "HealthConnect+",
    category: "Healthcare Platform",
    description: "A user-friendly online healthcare platform designed to simplify doctor appointment booking and patient-provider coordination.",
    longDescription: "HealthConnect+ bridges the gap between healthcare professionals and patients by providing a seamless, reliable digital booking platform. The platform features dual interfaces for patients and doctors, enabling patients to browse specialists, check schedule availability, and secure appointments, while doctors manage their schedules and consultation requests with full validation.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "AWS", "JWT", "Bcrypt"],
    liveUrl: "https://healthconnectpluse.netlify.app/",
    githubUrl: "https://github.com/omkar231098/HealthConnect",
    image: "/images/healthconnect.png",
    featured: true,
    highlights: [
      "Role-based authentication & route protection separating doctor and patient portals",
      "Intuitive appointment booking engine with slot reservation and cancellation capabilities",
      "Dual database integration leveraging MongoDB for dynamic profiles and MySQL for relational records",
      "Cloud asset storage and production hosting orchestrated for high availability"
    ],
  },
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: "2024 — Present",
    title: "Full Stack Web Development Immersion",
    organization: "Masai School",
    description: "Undergoing rigorous military-style coding curriculum focused on full-stack web architecture, data structures, collaborative agile sprints, and production-level JavaScript/Node.js ecosystems.",
    tags: ["MERN Stack", "System Design", "Agile Sprints", "Full Stack Development"],
  },
  {
    year: "2020 — 2024",
    title: "Engineering Transition & Technical Deepening",
    organization: "Self-Driven Software & Applied Projects",
    description: "Deepened core programming paradigms, transitioned from engineering principles into modern web systems, built independent web applications, and explored database design and cloud services.",
    tags: ["JavaScript ES6+", "Web Architectures", "Database Design", "API Development"],
  },
  {
    year: "2016 — 2020",
    title: "Bachelor Degree",
    organization: "Karmaveer Bhaurao Patil College of Engineering, Satara",
    description: "Acquired strong foundation in analytical reasoning, mathematics, engineering logic, and systematic problem-solving methodology over a rigorous 4-year curriculum.",
    tags: ["Engineering Foundations", "Analytical Logic", "Problem Solving", "Satara"],
  },
];

export const educationData: EducationItem[] = [
  {
    period: "2024 — Present",
    degree: "Full Stack Web Development",
    institution: "Masai School",
    location: "Online / Bangalore, India",
    description: "Intensive hands-on immersion in modern full-stack web architecture, algorithmic thinking, and collaborative software engineering.",
  },
  {
    period: "2016 — 2020",
    degree: "Bachelor Degree",
    institution: "Karmaveer Bhaurao Patil College of Engineering",
    location: "Satara, Maharashtra",
    description: "Four-year technical degree strengthening mathematical modeling, analytical problem solving, and engineering disciplines.",
  },
  {
    period: "2018 — 2020",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Yashwantarao Chavan Institute of Science",
    location: "Satara, Maharashtra",
    description: "Advanced scientific coursework emphasizing physics, chemistry, and mathematics.",
  },
  {
    period: "2008 — 2018",
    degree: "Secondary School Certificate (SSC)",
    institution: "Balasaheb Pawar High School",
    location: "Udtare, Satara, Maharashtra",
    description: "Foundational academic education completed with excellence.",
  },
];
