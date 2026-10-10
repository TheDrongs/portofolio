export const profile = {
  name: "Hi, I'm Andri Pramuji",
  role: "Senior Software Engineer | Technical Leadership",
  location: "Bandung, West Java, Indonesia",
  phone: "0856-1963-999",
  email: "thedrongs@gmail.com",
  linkedin: "https://www.linkedin.com/in/andri-pramuji-47aa42220/",
  github: "https://github.com/thedrongs",
  summary:
    "Software engineer and technical leader with 13+ years of experience in technology, spanning IT operations, banking payment systems, and enterprise applications. Delivered 25 applications across web, mobile, desktop, and payment platforms through individual contributor and leadership roles.\n\nLed teams of up to 12 people and coordinated delivery across Frontend, Backend, and QA, combining hands-on development, system integration, and technical leadership.",
};

export const hero = {
  eyebrow: "Professional Summary",
  title: "Hands-on Engineering & Technical Leadership",
  description:
    "Focused on team alignment, clear execution, sustainable delivery, and maintaining engineering quality across custom SaaS, enterprise platforms, internal business systems, field operations, and payment transaction systems.",
};

export const metrics = [
  {
    icon: "projects",
    value: "25",
    title: "Total Apps Delivered",
    description:
      "Delivered applications across web, mobile, desktop, and payment platforms as an individual contributor and technical leader.",
  },
  {
    icon: "team",
    value: "12",
    title: "Largest Team Led",
    description:
      "12-person frontend team; 9-person cross-functional squad across Frontend, Backend, and QA.",
  },
  {
    icon: "tech-debt",
    value: "~90%",
    title: "Technical Debt Reduced",
    description:
      "5,000+ to 450 (Jun-Dec 2025). SonarQube quality gates and refactoring.",
  },
  {
    icon: "build-time",
    value: "~80%",
    title: "UI Library Build Time Reduced",
    description:
      "8-10 to 1-2 minutes in 3 months. Dependency cleanup and build architecture improvements.",
  },
  {
    icon: "code-issues",
    value: "~70%",
    title: "Frontend Bug Tickets Reduced",
    description:
      "20-30 to 5-10 tickets/week in 4 months. Jest, 1:1 reviews, modernization, and engineering standards.",
  },
];

export const leadershipSkillGroups = [
  {
    title: "Management Skills",
    items: [
      {
        name: "Project Management",
        experience: "5+ Years Experience",
        iconKey: "projectmanagement",
      },
      {
        name: "Team Leadership",
        experience: "3 Years Experience",
        iconKey: "teamleadership",
      },
      {
        name: "Man Power Planning",
        experience: "3 Years Experience",
        iconKey: "manpowerplanning",
      },
      {
        name: "Technical Standards",
        experience: "2 Years Experience",
        iconKey: "techStandards",
      },
    ],
  },
  {
    title: "Product Related Skills",
    items: [
      {
        name: "Product Ownership",
        experience: "2 Years Experience",
        iconKey: "productownership",
      },
      {
        name: "User Experience",
        experience: "2 Years Experience",
        iconKey: "UX",
      },
    ],
  },
  {
    title: "Execution Skills",
    items: [
      {
        name: "Web Development",
        experience: "9+ Years Experience",
        iconKey: "webdev",
      },
      {
        name: "App Development",
        experience: "6+ Years Experience",
        iconKey: "appdev",
      }, 
      {
        name: "Mobile Development",
        experience: "2+ Years Experience",
        iconKey: "mobiledev",
      },
      {
        name: "Fullstack Development",
        experience: "3+ Years Experience",
        iconKey: "fullstack",
      },
    ],
  },
];

export const techStackGroups = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "mobile", label: "Mobile" },
  { key: "devops-quality", label: "DevOps & Quality" },
  { key: "delivery", label: "Delivery & Tools" },
  { key: "embedded", label: "Embedded" },
];

const BADGES = {
  advancedProduction: ["Advanced", "Production"],
  handsOnProduction: ["Hands-on", "Production"],
  handsOnProject: ["Hands-on", "Project Use"],
  handsOn: ["Hands-on"],
};

const GROUPS = {
  frontend: "frontend",
  backend: "backend",
  mobile: "mobile",
  devopsQuality: "devops-quality",
  delivery: "delivery",
  embedded: "embedded",
};

const createSkill = ({
  name,
  iconKey,
  color,
  textColor,
  group,
  subcategory,
  experience,
  badges = BADGES.handsOnProduction,
}) => ({
  name,
  iconKey,
  color,
  textColor,
  group,
  subcategory,
  experience,
  badges,
});

const createSkillGroup = (group, subcategory, skills) =>
  skills.map((skill) =>
    createSkill({
      group,
      subcategory,
      ...skill,
    }),
  );

export const techStack = [
  ...createSkillGroup(GROUPS.frontend, "Languages", [
    {
      name: "JavaScript",
      iconKey: "javascript",
      color: "#F7DF1E",
      textColor: "#111827",
      experience: "6+ Years Experience",
      badges: BADGES.advancedProduction,
    },
    {
      name: "TypeScript",
      iconKey: "typescript",
      color: "#3178C6",
      experience: "4+ Years Experience",
      badges: BADGES.advancedProduction,
    },
  ]),

  ...createSkillGroup(GROUPS.frontend, "UI Library & Frameworks", [
    {
      name: "React",
      iconKey: "react",
      color: "#61DAFB",
      textColor: "#0f172a",
      experience: "5+ Years Experience",
      badges: BADGES.advancedProduction,
    },
    {
      name: "Next.js",
      iconKey: "nextjs",
      color: "#000000",
      experience: "4+ Years Experience",
      badges: BADGES.advancedProduction,
    },
    {
      name: "Vite.js",
      iconKey: "vitejs",
      color: "#646CFF",
      experience: "3+ Years Experience",
      badges: BADGES.advancedProduction,
    },
    {
      name: "Angular.js",
      iconKey: "angular",
      color: "#DD0031",
      experience: "1 Year Experience",
      badges: BADGES.handsOnProject,
    },
    {
      name: "Vue.js",
      iconKey: "vue",
      color: "#4FC08D",
      experience: "1 Year Experience",
      badges: BADGES.handsOnProject,
    },
  ]),

  ...createSkillGroup(GROUPS.frontend, "Styling", [
    {
      name: "HTML5",
      iconKey: "html5",
      color: "#E34F26",
      experience: "7+ Years Experience",
      badges: BADGES.advancedProduction,
    },
    {
      name: "CSS",
      iconKey: "css",
      color: "#1572B6",
      experience: "7+ Years Experience",
      badges: BADGES.advancedProduction,
    },
    {
      name: "Ant Design",
      iconKey: "antdesign",
      color: "#1677FF",
      experience: "3+ Years Experience",
      badges: BADGES.advancedProduction,
    },
    {
      name: "Tailwind CSS",
      iconKey: "tailwind",
      color: "#06B6D4",
      experience: "2 Years Experience",
      badges: BADGES.handsOnProduction,
    },
    {
      name: "Radix UI",
      iconKey: "radixui",
      color: "#161618",
      experience: "2 Years Experience",
      badges: BADGES.handsOnProduction,
    },
  ]),

  ...createSkillGroup(GROUPS.frontend, "State Management", [
    {
      name: "React Query",
      iconKey: "reactquery",
      experience: "Server-state management",
      badges: [],
    },
    {
      name: "React Context API",
      iconKey: "react",
      color: "#61DAFB",
      textColor: "#0f172a",
      experience: "4+ Years Experience",
      badges: BADGES.advancedProduction,
    },
    {
      name: "Redux",
      iconKey: "redux",
      color: "#764ABC",
      experience: "2 Years Experience",
      badges: BADGES.handsOnProject,
    },
    {
      name: "Zustand",
      iconKey: "zustand",
      color: "#443E38",
      experience: "2 Years Experience",
      badges: BADGES.handsOnProduction,
    },
  ]),

  ...createSkillGroup(GROUPS.frontend, "Build Tools & Config", [
    {
      name: "Monorepo",
      iconKey: "monorepo",
      experience: "Shared frontend codebases",
    },
    {
      name: "Microfrontends",
      iconKey: "microfrontends",
      experience: "Modular frontend applications",
    },
    {
      name: "Rollup.js",
      iconKey: "rollup",
      color: "#EC4A3F",
      experience: "1+ Years Experience",
      badges: BADGES.handsOnProject,
    },
    {
      name: "Storybook.js",
      iconKey: "storybook",
      color: "#FF4785",
      experience: "2 Years Experience",
      badges: BADGES.handsOnProduction,
    },
  ]),

  ...createSkillGroup(GROUPS.frontend, "Map Integration", [
    {
      name: "OpenStreetMap",
      iconKey: "openstreetmap",
      color: "#7EBC6F",
      experience: "2+ Years Experience",
      badges: BADGES.handsOnProduction,
    },
    {
      name: "Google Maps API",
      iconKey: "googlemaps",
      color: "#4285F4",
      experience: "2+ Years Experience",
      badges: BADGES.handsOnProduction,
    },
  ]),

  ...createSkillGroup(GROUPS.frontend, "API Integration", [
    {
      name: "Axios",
      iconKey: "axios",
      experience: "HTTP client",
      badges: [],
    },
  ]),

  ...createSkillGroup(GROUPS.backend, "Languages & Runtime", [
    {
      name: "Go",
      iconKey: "go",
      color: "#00ADD8",
      experience: "1+ Years Experience",
      badges: BADGES.handsOnProduction,
    },
    {
      name: "PHP",
      iconKey: "php",
      color: "#777BB4",
      experience: "3+ Years Experience",
      badges: BADGES.handsOnProduction,
    },
    {
      name: "Node.js",
      iconKey: "nodejs",
      color: "#5FA04E",
      experience: "1+ Years Experience",
      badges: BADGES.handsOnProduction,
    },
  ]),
  ...createSkillGroup(GROUPS.backend, "API & Communication", [
    {
      name: "gRPC",
      iconKey: "grpc",
      experience: "Backend service communication",
    },
    {
      name: "Protocol Buffers",
      iconKey: "protobuf",
      experience: "Service interface definitions",
      badges: [],
    },
    {
      name: "Microservices",
      iconKey: "microservices",
      experience: "Sales, Inventory & Reporting",
    },
    {
      name: "REST API",
      iconKey: "api",
      color: "#2563EB",
      experience: "4+ Years Experience",
      badges: BADGES.advancedProduction,
    },
    {
      name: "GraphQL",
      iconKey: "graphql",
      color: "#E10098",
      experience: "1+ Years Experience",
      badges: BADGES.handsOnProject,
    },
  ]),

  ...createSkillGroup(GROUPS.backend, "Frameworks", [
    {
      name: "Express.js",
      iconKey: "express",
      color: "#000000",
      experience: "1+ Years Experience",
      badges: BADGES.handsOnProject,
    },
  ]),

  ...createSkillGroup(GROUPS.backend, "Database & Cache", [
    {
      name: "MySQL",
      iconKey: "mysql",
      color: "#4479A1",
      experience: "2+ Years Experience",
      badges: BADGES.handsOnProduction,
    },
    {
      name: "MongoDB",
      iconKey: "mongodb",
      color: "#47A248",
      experience: "1+ Years Experience",
      badges: BADGES.handsOnProduction,
    },
    {
      name: "Redis",
      iconKey: "redis",
      color: "#FF4438",
      experience: "1+ Years Experience",
      badges: BADGES.handsOnProduction,
    },
  ]),

  ...createSkillGroup(GROUPS.backend, "Messaging", [
    {
      name: "cron jobs",
      iconKey: "cron",
      experience: "Scheduled backend processing",
    },
    {
      name: "RabbitMQ",
      iconKey: "rabbitmq",
      color: "#FF6600",
      experience: "1+ Year Experience",
      badges: BADGES.handsOnProduction,
    },
  ]),

  ...createSkillGroup(GROUPS.mobile, "Mobile Programming", [
    {
      name: "React Native",
      iconKey: "reactnative",
      color: "#61DAFB",
      textColor: "#0f172a",
      experience: "2+ Years Experience",
      badges: BADGES.advancedProduction,
    },
    {
      name: "Kotlin",
      iconKey: "kotlin",
      color: "#7F52FF",
      experience: "1+ Years Experience",
      badges: BADGES.handsOnProduction,
    },
    {
      name: "Mini Program",
      iconKey: "miniprogram",
      color: "#07C160",
      experience: "1+ Years Experience",
      badges: BADGES.handsOnProduction,
    },
  ]),

  ...createSkillGroup(GROUPS.devopsQuality, "CI/CD", [
    {
      name: "Git",
      iconKey: "git",
      experience: "Version control",
      badges: [],
    },
    {
      name: "GitLab",
      iconKey: "gitlab",
      experience: "Version control & CI/CD",
      badges: [],
    },
    {
      name: "GitHub Actions",
      iconKey: "githubactions",
      experience: "CI/CD workflows",
      badges: [],
    },
    {
      name: "Docker",
      iconKey: "docker",
      color: "#2496ED",
      experience: "1+ Year Experience",
      badges: BADGES.handsOnProduction,
    },
    {
      name: "Kubernetes",
      iconKey: "kubernetes",
      color: "#326CE5",
      experience: "1+ Year Experience",
      badges: BADGES.handsOnProduction,
    },
  ]),

  ...createSkillGroup(GROUPS.devopsQuality, "Testing & Quality", [
    {
      name: "Playwright",
      iconKey: "playwright",
      experience: "Automated testing",
    },
    {
      name: "Jest",
      iconKey: "jest",
      color: "#C21325",
      experience: "2 Years Experience",
      badges: BADGES.handsOnProduction,
    },
    {
      name: "SonarQube",
      iconKey: "sonarqube",
      color: "#4E9BCD",
      experience: "2 Years Experience",
      badges: BADGES.advancedProduction,
    },
  ]),

  ...createSkillGroup(GROUPS.devopsQuality, "Observability", [
    {
      name: "OpenTelemetry",
      iconKey: "opentelemetry",
      color: "#000000",
      experience: "<1 Year Experience",
      badges: BADGES.handsOnProduction,
    },
    {
      name: "Elastic APM",
      iconKey: "elastic",
      color: "#005571",
      experience: "<1 Year Experience",
      badges: BADGES.handsOnProduction,
    },
    {
      name: "Grafana",
      iconKey: "grafana",
      color: "#F46800",
      experience: "1 Year Experience",
      badges: BADGES.handsOnProduction,
    },
  ]),

  ...createSkillGroup(GROUPS.devopsQuality, "Platform & Config", [
    {
      name: "Vault",
      iconKey: "vault",
      color: "#FFEC6E",
      textColor: "#111827",
      experience: "<1 Year Experience",
      badges: BADGES.handsOnProduction,
    },
    {
      name: "Argo CD",
      iconKey: "argocd",
      color: "#EF7B4D",
      experience: "<1 Year Experience",
      badges: BADGES.handsOnProduction,
    },
  ]),

  ...createSkillGroup(GROUPS.embedded, "Embedded Programming", [
    {
      name: "C",
      iconKey: "c",
      color: "#A8B9CC",
      textColor: "#111827",
      experience: "6+ Years Experience",
      badges: BADGES.advancedProduction,
    },
    {
      name: "C++",
      iconKey: "cplusplus",
      color: "#00599C",
      experience: "6+ Years Experience",
      badges: BADGES.advancedProduction,
    },
  ]),

  ...createSkillGroup(GROUPS.delivery, "Delivery & Engineering Practices", [
    { name: "Agile / Scrum / Waterfall", iconKey: "delivery", experience: "Delivery methodologies", badges: [] },
    { name: "Sprint Planning & Backlog Refinement", iconKey: "delivery", experience: "Delivery planning", badges: [] },
    { name: "Code Review & Engineering Standardization", iconKey: "quality", experience: "Engineering quality", badges: [] },
    { name: "Trunk-Based Development", iconKey: "git", experience: "Development workflow", badges: [] },
    { name: "Release Planning & Technical Documentation", iconKey: "documentation", experience: "Delivery coordination", badges: [] },
    { name: "AI-Assisted Development", iconKey: "ai", experience: "Development workflows", badges: [] },
  ]),
  ...createSkillGroup(GROUPS.delivery, "Management Tools", [
    { name: "Jira", iconKey: "jira", experience: "Project management", badges: [] },
    { name: "ClickUp", iconKey: "clickup", experience: "Work coordination", badges: [] },
    { name: "YouTrack", iconKey: "youtrack", experience: "Issue tracking", badges: [] },
  ]),

    ...createSkillGroup(GROUPS.backend, "Cloud & BaaS", [
    {
      name: "Google Firebase",
      iconKey: "firebase",
      color: "#FFCA28",
      textColor: "#111827",
      experience: "1 Year Experience",
      badges: BADGES.handsOnProduction,
    },
  ]),
];

export const coreSkills = [
  {
    category: "Engineering Leadership",
    items:
      "Engineering Leadership, Technical Leadership, Mentoring, Stakeholder Alignment, Delivery Planning, Risk Management, Performance Review Input, Workforce Planning, Project Management.",
  },
  {
    category: "Delivery & Engineering Practices",
    items:
      "Agile, Scrum, Waterfall, Sprint Planning, Backlog Refinement, Code Review, Trunk-Based Development, Release Planning, Technical Documentation, Engineering Standardization, AI-Assisted Development.",
  },
  {
    category: "Frontend Stack",
    items:
      "JavaScript, TypeScript, React.js, Next.js, React Native, Vite.js, Rollup.js, React Query, Zustand, Redux, Axios, Tailwind CSS, Ant Design, Radix UI, Storybook.js, Mini Program, Monorepo, Microfrontends.",
  },
  {
    category: "Backend, BaaS, API & Integration",
    items:
      "Go, Node.js, Express.js, REST APIs, GraphQL, gRPC, Protocol Buffers, Microservices, RabbitMQ, Redis, MySQL, MongoDB, PHP, Firebase, cron jobs.",
  },
  {
    category: "Quality, Observability & DevOps",
    items:
      "Jest, Playwright, SonarQube, Docker, Kubernetes, OpenTelemetry, Elastic APM, Vault, Grafana, Argo CD.",
  },
  {
    category: "Management Tools",
    items: "Jira, ClickUp, YouTrack.",
  },
  {
    category: "Version Control & CI/CD",
    items: "Git, GitLab, GitHub Actions.",
  },
  {
    category: "Additional Programming Experience",
    items: "C, C++.",
  },
];

export const accordionItems = [
  {
    title: "Career",
    type: "timeline",
  },
  {
    title: "Core Skills",
    type: "skills",
  },
  {
    title: "Projects",
    type: "projects",
  },
  {
    title: "Education, Languages & Certifications",
    type: "education-language",
  },
];

export const timelineItems = [
  {
    role: "Squad Leader",
    period: "Dec 2025 - Oct 2026",
    duration: "11 months",
    employmentType: "Full-time",
    company: "PT. Kaldu Sari Nabati Indonesia (NABATI)",
    location: "Bandung, Indonesia",
    responsibilities: [
      "Led a 9-person cross-functional squad across Frontend, Backend, and QA, translating business goals into sprint-ready delivery plans.",
      "Coordinated priorities, workloads, dependencies, risks, documentation, and engineering quality across Agile releases.",
      "Developed and maintained frontend applications within a monorepo and microfrontend environment, supporting reusable UI components and API integrations.",
      "Developed and maintained backend microservices across Sales, Inventory, and Reporting, supporting customer management, shipment workflows, and reporting through Go, gRPC, REST APIs, RabbitMQ, Redis, and cron jobs.",
      "Supported logistics and transportation workflows, including booking, shipment updates, and third-party integrations, through debugging, API improvements, and UAT support.",
      "Improved delivery quality through code reviews, refactoring, automated testing with Jest and Playwright, and AI-assisted development workflows.",
    ],
    techStackIconKeys: [
      "react",
      "nextjs",
      "typescript",
      "go",
      "mongodb",
      "grpc",
      "rabbitmq",
      "cron",
      "api",
      "jest",
      "playwright",
      "grafana",
      "opentelemetry",
      "elastic",
      "redis",
      "vault",
      "argocd",
    ],
  },
  {
    role: "Technical Lead Frontend",
    period: "Apr 2024 – Dec 2025",
    duration: "1 yr 9 months",
    employmentType: "Full-time",
    company: "PT. Kaldu Sari Nabati Indonesia (NABATI)",
    location: "Bandung, Indonesia",
    responsibilities: [
      "Led a 12-person frontend team, managing delivery, legacy support, workforce planning, and KPIs, providing input for performance reviews, and guiding technical decisions through team feedback.",
      "Reduced technical debt by approximately 90%, from 5,000+ to 450 between June and December 2025, through SonarQube quality gates and refactoring.",
      "Cut UI library build time by approximately 80%, from 8-10 to 1-2 minutes, within 3 months, through dependency cleanup and build architecture improvements.",
      "Reduced weekly frontend bug tickets by approximately 70%, from 20-30 to 5-10, within 4 months, through Jest testing, 1:1 code reviews, codebase modernization, and engineering standardization.",
      "Rapidly built and maintained internal full-stack applications using React.js, Node.js, Express.js, Go, and MySQL, evolving prototypes into reporting tools for senior management.",
      "Developed and maintained web applications within a monorepo and microfrontend environment, alongside mobile applications, across ERP, SFA, HRIS, and field operation tools.",
    ],
    techStackIconKeys: [
      "react",
      "nextjs",
      "vitejs",
      "typescript",
      "rollup",
      "antdesign",
      "tailwind",
      "zustand",
      "storybook",
      "reactnative",
      "miniprogram",
      "go",
      "nodejs",
      "express",
      "api",
      "mysql",
      "jest",
      "sonarqube",
    ],
  },
  {
    role: "Senior Frontend Developer",
    period: "Mar 2023 – Apr 2024",
    duration: "1 yr 2 months",
    employmentType: "Full-time",
    company: "PT. Kaldu Sari Nabati Indonesia (NABATI)",
    location: "Bandung, Indonesia",
    responsibilities: [
      "Developed and delivered ERP web modules within a microfrontend architecture, alongside mobile applications, building reusable frontend workflows and collaborating with backend engineers on API integration, testing, and production releases.",
    ],
    techStackIconKeys: ["react", "nextjs", "antdesign", "reactnative", "api"],
  },
  {
    role: "Frontend Developer - Payment Systems",
    period: "Dec 2016 – Mar 2023",
    duration: "6 yrs 4 months",
    employmentType: "Full-time",
    company: "PT. Arah Dinamika Abadi",
    location: "DKI Jakarta, Indonesia",
    responsibilities: [
      "Delivered secure NSICCS-compliant ISO8583 EDC, POS, and Terminal Management System solutions for 7 Indonesian banks.",
      "Supported mandatory updates, pre- and post-UAT, issue analysis, regulatory compliance, and banking payment system continuity.",
      "Mentored 3 junior developers and interns from Feb 2021 to Dec 2022.",
    ],
    notableProjectsTitle: "Notable Projects",
    notableProjects: [
      "BPD Bali, BPD NTT, BNI, Bank Syariah Mandiri (Now BSI), Bank Aceh Syariah, Bank Victoria, BPD Jateng",
    ],
    techStackIconKeys: ["c", "cplusplus", "php", "kotlin"],
  },
  {
    role: "ICT Staff & Administration",
    period: "Mar 2013 – Nov 2016",
    duration: "3 yrs 9 months",
    employmentType: "Full-time",
    company: "PT. Pelayaran Nelly Dwi Putri Tbk.",
    location: "DKI Jakarta, Indonesia",
    responsibilities: [
      "Managed infrastructure, networking, maintenance, and troubleshooting for 40+ PCs across office and operational environments.",
      "Delivered an SMS Gateway, company website, and automated file backups to support communication, administration, and operational continuity.",
    ],
    techStackIconKeys: ["html5", "css", "php", "mysql"],
  },
];

export const selectedProjects = [
  {
    title: "Enterprise Web, SaaS & Internal Business Platforms",
    period: "Mar 2023 - Oct 2026",
    screenshotFolder: "ksni",
    screenshotFiles: [
      "Erp.png",
      "Sfa.png",
      "HRIS.png",
      "meeting-room.png",
      "UI-Library.png",
      "restaurant-system.png",
      "surveyor-app.png",
    ],
    description:
      "Delivered ERP, SFA, HRIS, Salesman Tracker for 8,000+ outlets, Surveyor App, Routing and Tracker System, Logistics Monitoring System, Restaurant Mapping, and a multi-user Meeting App.",
    techStackIconKeys: [
      "react",
      "nextjs",
      "typescript",
      "vitejs",
      "rollup",
      "antdesign",
      "tailwind",
      "zustand",
      "storybook",
      "reactnative",
      "miniprogram",
      "go",
      "nodejs",
      "express",
      "api",
      "rabbitmq",
      "redis",
      "mongodb",
      "jest",
      "grpc",
      "cron",
      "mysql",
      "playwright",
      "sonarqube",
      "grafana",
      "opentelemetry",
      "elastic",
      "vault",
      "argocd",
    ],
  },
  {
    title: "NSICCS, EDC & POS Payment Applications",
    period: "Dec 2016 – Mar 2023",
    screenshotFolder: "edc",
    description:
      "Delivered NSICCS-compliant ISO8583 EDC, POS, and TMS solutions for 7 Indonesian banks, supporting certification, UAT, issue resolution, mandatory updates, and transaction continuity.",
    techStackIconKeys: ["c", "cplusplus", "php", "kotlin"],
  },
  {
    title: "Company Website & IDX Content Updates",
    period: "Oct 2018 – Feb 2019",
    screenshotFolder: "nelly",
    description:
      "Built and maintained a company website that required regular content updates for IDX-related checking and public information needs.",
    url: "https://www.nellydwiputri.co.id",
    techStackIconKeys: ["html5", "css", "php", "mysql"],
  },
  {
    title: "Bakery E-Commerce Web Platform",
    period: "Aug 2022 – Jan 2023",
    description:
      "Built and managed an e-commerce web platform for a bakery shop, covering product catalog, transaction flow, and backend data integration.",
    techStackIconKeys: ["html5", "javascript", "react", "mongodb", "api"],
  },
  {
    title: "Crewing Offshore Recruitment App",
    period: "Jul 2023 – Dec 2023",
    screenshotFolder: "musaproject",
    screenshotDisplay: "mobile",
    description:
      "Built an Android application for offshore crewing recruitment to support candidate data collection and recruitment workflow needs.",
    techStackIconKeys: ["kotlin", "firebase"],
  },
];

export const keyAchievements = [
  "Delivered 25 applications across web, mobile, desktop, and payment platforms through individual contributor and leadership roles.",
  "Led engineering teams up to 12 members, improving delivery coordination, risk control, and engineering quality.",
  "Reduced technical debt by approximately 90%, from 5,000+ to 450 between June and December 2025.",
  "Reduced UI library build time by approximately 80%, from 8-10 to 1-2 minutes within 3 months.",
  "Reduced weekly frontend bug tickets by approximately 70%, from 20-30 to 5-10 within 4 months.",
  "Delivered mandatory NSICCS updates for 7 Indonesian banks, ensuring BI compliance and ISO8583 transaction continuity.",
];

export const education = {
  school: "Bina Nusantara University (BINUS)",
  degree: "Bachelor of Computer Science (S.Kom)",
  period: "2007 – 2012",
};

export const languages = [
  "Bahasa Indonesia (Native)",
  "English (Business Working Proficiency)",
];

export const certifications = [
  {
    title: "React & React Native",
    issuer: "Hacktiv8 Indonesia",
    issued: "Issued Nov 2022",
    issuedAt: "2022-11-01",
    credentialId: "Batch 63",
    certificateFile: "hacktiv8.jpg",
  },
  {
    title: "Docker & Kubernetes",
    issuer: "Udemy",
    issued: "Issued May 2025",
    issuedAt: "2025-05-01",
    credentialId: "UC-d150c485-8c8e-4a04-8999-feff3b989ca6",
    certificateFile: "dockerKubernetes.jpg",
  },
  {
    title: "GO-Lang Beginner to Advanced",
    issuer: "Udemy",
    issued: "Issued Jun 2025",
    issuedAt: "2025-06-01",
    credentialId: "UC-4fba38e0-1953-4a0d-8931-105f75d8bdcc",
    certificateFile: "golang.jpg",
  },
];
