export const profile = {
  name: "Hi, I'm Andri Pramuji",
  role: "Senior Software Engineer | Technical Leadership",
  location: "Bandung, West Java, Indonesia",
  phone: "0856-1963-999",
  email: "andripramuji88@gmail.com",
  linkedin: "https://www.linkedin.com/in/andri-pramuji-47aa42220/",
  summary:
    "Software engineer with 13+ years in technology and 25 applications delivered across web, mobile, desktop, and banking payment platforms.\n\nLed cross-functional teams of up to 12 people across Frontend, Backend, and QA, owning end-to-end Agile delivery while remaining hands-on in full-stack development and system integration.\n\nCombines team leadership, stakeholder coordination, and AI-assisted engineering to improve productivity, software quality, and operational efficiency. Helps developers adopt structured prompting, spec-driven development, and AI-assisted testing and code review.",
};

export const hero = {
  eyebrow: "Professional Summary",
  title: "Hands-on Engineering & Technical Leadership",
  description:
    "Turning business needs into full-stack solutions across commerce, enterprise platforms, field operations, and banking payments. Hands-on delivery, cross-functional collaboration, and practical AI adoption.",
};

export const metrics = [
  {
    icon: "ai-adoption",
    value: "29% → 100%",
    title: "Developer AI Adoption",
    description:
      "As Squad Leader at Nabati, helped 7 of 7 developers adopt AI tools, up from 2 of 7, through mentoring and guidance. QA is excluded from this measure.",
  },
  {
    icon: "team-efficiency",
    value: "10%",
    title: "Team Productivity Improved",
    description:
      "As Technical Lead at Nabati, through modernization, build optimization, and stronger engineering practices, tracked in weekly reports.",
  },
  {
    icon: "transaction-packets",
    value: "~50%",
    title: "Transaction Packet Sizes Reduced",
    description:
      "Refactored BPD Bali's EDC application at Arahnet, also cutting complex transaction response times from 4-5 seconds to 2 seconds.",
  },
  {
    icon: "sms-reporting",
    value: "60%",
    title: "SMS Reporting Consolidation Time Reduced",
    description:
      "Built a web-based SMS gateway supporting 30 vessels at Nelly.",
  },
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
      "Led a 12-person team as Technical Lead and a 9-person cross-functional squad across Frontend, Backend, and QA as Squad Leader.",
  },
  {
    icon: "tech-debt",
    value: "~90%",
    title: "SonarQube Issues Reduced",
    description:
      "Reduced technical debt, bringing SonarQube-reported issues from 5,000+ to 450 within 6 months.",
  },
  {
    icon: "build-time",
    value: "~80%",
    title: "UI Library Build Time Reduced",
    description:
      "Led Storybook.js and Rollup.js optimization, reducing build time from 8-10 to 1-2 minutes within 3 months.",
  },
  {
    icon: "code-issues",
    value: "~70%",
    title: "Weekly Bug Tickets Reduced",
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
        experience: "2+ Years Experience",
        iconKey: "teamleadership",
      },
      {
        name: "Workforce Planning",
        experience: "2+ Years Experience",
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
      experience: "3 Years Experience",
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
      experience: "4 Years Experience",
      badges: [],
    },
  ]),

  ...createSkillGroup(GROUPS.backend, "Languages & Runtime", [
    {
      name: "Go",
      iconKey: "go",
      color: "#00ADD8",
      experience: "2+ Years Experience",
      badges: BADGES.handsOnProduction,
    },
    {
      name: "PHP",
      iconKey: "php",
      color: "#777BB4",
      experience: "4+ Years Experience",
      badges: BADGES.handsOnProduction,
    },
    {
      name: "Node.js",
      iconKey: "nodejs",
      color: "#5FA04E",
      experience: "2+ Years Experience",
      badges: BADGES.handsOnProduction,
    },
  ]),
  ...createSkillGroup(GROUPS.backend, "API & Communication", [
    {
      name: "gRPC",
      iconKey: "grpc",
      experience: "1 Year Experience",
    },
    {
      name: "Protocol Buffers",
      iconKey: "protobuf",
      experience: "1 Year Experience",
      badges: [],
    },
    {
      name: "Microservices",
      iconKey: "microservices",
      experience: "Sales, Inventory, Reporting, Logistics & Shipments",
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
      experience: "2+ Years Experience",
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
      experience: "2 Years Experience",
      badges: BADGES.handsOnProduction,
    },
  ]),

  ...createSkillGroup(GROUPS.backend, "Messaging", [
    {
      name: "cron jobs",
      iconKey: "cron",
      experience: "2 Years Experience",
    },
    {
      name: "RabbitMQ",
      iconKey: "rabbitmq",
      color: "#FF6600",
      experience: "2 Years Experience",
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
      name: "Mini Program (Taro.js)",
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
    {
      name: "Agile / Scrum / Waterfall",
      iconKey: "delivery",
      experience: "Delivery methodologies",
      badges: [],
    },
    {
      name: "Sprint Planning & Backlog Refinement",
      iconKey: "delivery",
      experience: "Delivery planning",
      badges: [],
    },
    {
      name: "Code Review & Engineering Standardization",
      iconKey: "quality",
      experience: "Engineering quality",
      badges: [],
    },
    {
      name: "Trunk-Based Development",
      iconKey: "git",
      experience: "Development workflow",
      badges: [],
    },
    {
      name: "Release Planning & Technical Documentation",
      iconKey: "documentation",
      experience: "Delivery coordination",
      badges: [],
    },
    {
      name: "AI-Assisted Development",
      iconKey: "ai",
      experience: "Development workflows",
      badges: [],
    },
  ]),
  ...createSkillGroup(GROUPS.delivery, "Management Tools", [
    {
      name: "Jira",
      iconKey: "jira",
      experience: "Project management",
      badges: [],
    },
    {
      name: "ClickUp",
      iconKey: "clickup",
      experience: "Work coordination",
      badges: [],
    },
    {
      name: "YouTrack",
      iconKey: "youtrack",
      experience: "Issue tracking",
      badges: [],
    },
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
  ...createSkillGroup(GROUPS.devopsQuality, "Cloud Platforms", [
    {
      name: "AWS (EC2, S3, RDS)",
      iconKey: "aws",
      experience: "EC2, S3, RDS",
      badges: [],
    },
  ]),
  ...createSkillGroup(GROUPS.backend, "Database Administration", [
    {
      name: "phpMyAdmin",
      iconKey: "phpmyadmin",
      experience: "MySQL database administration",
      badges: [],
    },
  ]),
  ...createSkillGroup(GROUPS.delivery, "AI Tools & Practices", [
    {
      name: "Codex",
      iconKey: "codex",
      experience: "Agentic AI development tools",
      badges: [],
    },
    {
      name: "Claude Code",
      iconKey: "claudecode",
      experience: "Agentic AI development tools",
      badges: [],
    },
    {
      name: "Kiro (AWS)",
      iconKey: "kiro",
      experience: "Agentic AI development tools",
      badges: [],
    },
    {
      name: "Antigravity (Google)",
      iconKey: "antigravity",
      experience: "Agentic AI development tools",
      badges: [],
    },
    {
      name: "Hermes Agent",
      iconKey: "hermesagent",
      experience: "AI-assisted workflows",
      badges: [],
    },
  ]),
];

export const coreSkills = [
  {
    category: "Engineering Leadership",
    items:
      "Engineering Leadership, Technical Leadership, Cross-Functional Team Leadership, Mentoring, AI Adoption, Stakeholder Alignment, Delivery Planning, Risk Management, Performance Review Input, Workforce Planning, Project Management.",
  },
  {
    category: "Delivery & Engineering Practices",
    items:
      "Agile, Scrum, Waterfall, Spec-Driven Development (SDD), Test-Driven Development (TDD), Sprint Planning, Backlog Refinement, Code Review, Pair Programming, Trunk-Based Development, Release Planning, Technical Documentation, Technical Debt Reduction, AI-Assisted Development.",
  },
  {
    category: "AI Tools & Practices",
    items:
      "Prompt Engineering, Prompt-Driven AI Orchestration, Codex, Claude Code, Kiro (AWS), Antigravity (Google), Hermes Agent.",
  },
  {
    category: "Frontend Stack",
    items:
      "JavaScript, TypeScript, React.js, Next.js, React Native, Vite.js, Rollup.js, React Query, Zustand, Redux, Axios, Tailwind CSS, Ant Design, Radix UI, Storybook.js, Mini Program, Monorepo, Microfrontends.",
  },
  {
    category: "Backend, BaaS, API & Integration",
    items:
      "Go, Node.js, Express.js, REST APIs, Third-Party Integrations, gRPC, Protocol Buffers, Microservices, RabbitMQ, Redis, MySQL, MongoDB, PHP, Firebase, cron jobs.",
  },
  {
    category: "Quality, Observability & DevOps",
    items:
      "Jest, Playwright, SonarQube, Automated Testing, AI-Assisted Test Development, API Testing, Test Planning, Use Case Analysis, Edge Case Analysis, UAT Support, Docker, Kubernetes, OpenTelemetry, Elastic APM, Vault, Grafana, Argo CD.",
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
      "Owned end-to-end Agile delivery using AI-assisted workflows, coordinating stakeholders, priorities, risks, and documentation.",
      "Used Spec-Driven Development (SDD) and structured AI prompt engineering to build and maintain 8 React.js/Next.js apps and 5 Go microservices, implement third-party integrations, and support UAT.",
      "Led squad-wide adoption of AI tools and mentored developers in prompt-driven workflows to accelerate development.",
      "Used prompt-driven AI orchestration to automate API testing workflows.",
      "Applied TDD using AI-generated Jest/Playwright tests aligned with stakeholder use cases and edge cases, alongside AI-assisted code reviews.",
    ],
    techStackIconKeys: [
      "react",
      "nextjs",
      "typescript",
      "radixui",
      "antdesign",
      "tailwind",
      "redux",
      "zustand",
      "go",
      "mongodb",
      "redis",
      "grpc",
      "rabbitmq",
      "cron",
      "api",
      "jest",
      "playwright",
      "grafana",
      "opentelemetry",
      "elastic",
      "vault",
      "argocd",
    ],
  },
  {
    role: "Technical Lead",
    period: "Apr 2024 - Dec 2025",
    duration: "1 yr 9 months",
    employmentType: "Full-time",
    company: "PT. Kaldu Sari Nabati Indonesia (NABATI)",
    location: "Bandung, Indonesia",
    responsibilities: [
      "Led a 12-person team across quality, workforce planning, KPIs, performance review input, hiring, and technical decisions.",
      "Reduced technical debt, bringing SonarQube-reported issues from 5,000+ to 450 (approximately 90%) within 6 months.",
      "Led UI library optimization using Storybook.js and Rollup.js, reducing build time by approximately 80%, from 8-10 to 1-2 minutes within 3 months.",
      "Designed and implemented Jest testing, 1:1 code reviews, codebase modernization, and engineering standardization with the team, cutting weekly bug tickets by approximately 70%, from 20-30 to 5-10 within 4 months.",
      "Engineered 4 full-stack apps for senior management using React.js, Vite.js, Go, Node.js, Express.js, and monolithic/layered architecture.",
      "Built and maintained 12 frontend apps in monorepo and microfrontend environments using React.js, Next.js, and Vite.js, alongside React Native mobile apps, across ERP, SFA, HRIS, FICO, VIM, Logistics, and other field operations tools.",
    ],
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
      "express",
      "nodejs",
      "api",
      "mysql",
      "jest",
      "sonarqube",
      "aws",
    ],
  },
  {
    role: "Senior Frontend Developer",
    period: "Mar 2023 - Apr 2024",
    duration: "1 yr 2 months",
    employmentType: "Full-time",
    company: "PT. Kaldu Sari Nabati Indonesia (NABATI)",
    location: "Bandung, Indonesia",
    responsibilities: [
      "Delivered 4 ERP web and mobile apps using React.js, Next.js, and React Native, with reusable frontend workflows and microfrontend architecture for web, collaborating with Backend and QA on API integration, testing, and production releases.",
    ],
    techStackIconKeys: ["react", "nextjs", "antdesign", "reactnative", "api"],
  },
  {
    role: "Frontend Developer - Payment Systems",
    period: "Dec 2016 - Mar 2023",
    duration: "6 yrs 4 months",
    employmentType: "Full-time",
    company: "PT. Arah Dinamika Abadi",
    location: "DKI Jakarta, Indonesia",
    responsibilities: [
      "Delivered EDC, POS, and TMS solutions for 8 Indonesian banks using C, C++, PHP, and Kotlin, covering NSICCS-compliant ISO8583 implementations, mandatory updates, pre/post-UAT, troubleshooting, compliance, and legacy support.",
      "Mentored 3 junior developers and interns from Feb 2021 to Dec 2022.",
    ],
    notableProjectsTitle: "Notable Projects",
    notableProjects: [
      "BPD Bali, BPD Jateng, Bank Victoria, BNI, Bank Syariah Mandiri (now BSI), Bank Aceh, and Bank NTT; legacy support and updates for Bank Mandiri.",
    ],
    techStackIconKeys: ["c", "cplusplus", "php", "kotlin"],
  },
  {
    role: "IT Staff & Full-stack Developer",
    period: "Mar 2013 - Nov 2016",
    duration: "3 yrs 9 months",
    employmentType: "Full-time",
    company: "PT. Pelayaran Nelly Dwi Putri Tbk.",
    location: "DKI Jakarta, Indonesia",
    responsibilities: [
      "Developed and maintained a full-stack company website using HTML, CSS, JavaScript, PHP, and MySQL, enabling regular content updates to support periodic reviews by the Indonesia Stock Exchange (IDX).",
      "Initiated, built, and maintained a web-based SMS gateway, reducing weekly SMS consolidation time by approximately 60%. Automated company file backups to support operational continuity.",
      "Provided infrastructure, networking, maintenance, and troubleshooting support for 40+ PCs across office and operational environments.",
    ],
    techStackIconKeys: [
      "html5",
      "css",
      "javascript",
      "php",
      "phpmyadmin",
      "mysql",
    ],
  },
];

export const selectedProjects = [
  {
    title: "rimce.id — Bakery E-Commerce & Management System",
    period: "Sep 2026 - Ongoing",
    screenshotFolder: "rimce",
    description:
      "Digitalizing a 6-year-old bakery business serving 20+ customers monthly across Jakarta and Bandung. A preorder e-commerce platform with 5 services supports order, payment, production, delivery, and financial management.",
    url: "https://rimce.id",
    techStackIconKeys: [],
  },
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
      "Web ERP, SFA, VIM, and FICO with SAP integration, alongside HRIS, Salesman Tracker for 8,000+ outlets, Surveyor App, Routing and Tracker System, Logistics Monitoring System, Restaurant Mapping, and a multi-user Meeting App.",
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
    period: "Dec 2016 - Mar 2023",
    screenshotFolder: "edc",
    description:
      "Delivered NSICCS-compliant ISO8583 EDC, POS, and TMS solutions for 7 Indonesian banks: BPD Bali, BPD Jateng, Bank Victoria, BNI, Bank Syariah Mandiri (now BSI), Bank Aceh, and Bank NTT, supporting certification, UAT, issue resolution, mandatory updates, and transaction continuity. Provided legacy payment system support and updates for Bank Mandiri.",
    techStackIconKeys: ["c", "cplusplus", "php", "kotlin"],
  },
  {
    title: "Company Website & IDX Content Updates",
    period: "Mar 2013 - Nov 2016",
    screenshotFolder: "nelly",
    description:
      "Built and maintained a company website that required regular content updates for IDX-related checking and public information needs.",
    url: "https://www.nellydwiputri.co.id",
    techStackIconKeys: ["html5", "css", "php", "mysql"],
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
  "At Nabati as Squad Leader, helped increase developer AI adoption from 29% to 100% (2 to 7 of 7 developers) through mentoring and guidance.",
  "At Nabati as Technical Lead, improved team productivity by 10% through modernization, build optimization, and stronger engineering practices, as tracked in weekly reports.",
  "At Arahnet, refactored BPD Bali's EDC application, reducing transaction packet sizes by approximately 50% and cutting response times for complex transactions from 4-5 seconds to 2 seconds.",
  "At Nelly, reduced weekly SMS reporting consolidation time by 60% by building a web-based SMS gateway supporting 30 vessels.",
];

export const education = {
  school: "Bina Nusantara University (BINUS)",
  degree: "Bachelor of Computer Science (S.Kom)",
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

// Categories and item order follow the latest supplied CV.
export const cvSkillGroups = [
  {
    key: "leadership",
    label: "Leadership",
    iconKey: "leadership",
    items: [
      {
        name: "Engineering Leadership",
        iconKey: "leadership",
      },
      {
        name: "Technical Leadership",
        iconKey: "cpu",
      },
      {
        name: "Cross-Functional Team Leadership",
        iconKey: "users",
      },
      {
        name: "Mentoring",
        iconKey: "users",
      },
      {
        name: "AI Adoption",
        iconKey: "ai",
      },
      {
        name: "Stakeholder Alignment",
        iconKey: "message",
      },
      {
        name: "Delivery Planning",
        iconKey: "calendar",
      },
      {
        name: "Risk Management",
        iconKey: "shield",
      },
      {
        name: "Performance Review Input",
        iconKey: "user-check",
      },
      {
        name: "Workforce Planning",
        iconKey: "users",
      },
      {
        name: "Project Management",
        iconKey: "clipboard",
      },
    ],
  },
  {
    key: "architecture",
    label: "Software Design & Architecture",
    iconKey: "architecture",
    items: [
      {
        name: "Monolithic",
        iconKey: "monolithic",
      },
      {
        name: "Microfrontend",
        iconKey: "microfrontends",
      },
      {
        name: "Microservices",
        iconKey: "microservices",
      },
      {
        name: "Layered",
        iconKey: "layered",
      },
      {
        name: "Event-Driven",
        iconKey: "event-driven",
      },
      {
        name: "Clean",
        iconKey: "clean",
      },
      {
        name: "Hexagonal",
        iconKey: "hexagonal",
      },
    ],
  },
  {
    key: "engineering-practices",
    label: "Delivery & Engineering Practices",
    iconKey: "delivery",
    items: [
      {
        name: "Agile",
        iconKey: "iteration",
      },
      {
        name: "Scrum",
        iconKey: "users",
      },
      {
        name: "Waterfall",
        iconKey: "layered",
      },
      {
        name: "Spec-Driven Development (SDD)",
        iconKey: "documentation",
      },
      {
        name: "Test-Driven Development (TDD)",
        iconKey: "quality",
      },
      {
        name: "Sprint Planning",
        iconKey: "calendar",
      },
      {
        name: "Backlog Refinement",
        iconKey: "clipboard",
      },
      {
        name: "Code Review",
        iconKey: "quality",
      },
      {
        name: "Pair Programming",
        iconKey: "users",
      },
      {
        name: "Trunk-Based Development",
        iconKey: "git",
      },
      {
        name: "Release Planning",
        iconKey: "calendar",
      },
      {
        name: "Technical Documentation",
        iconKey: "documentation",
      },
      {
        name: "Technical Debt Reduction",
        iconKey: "shield",
      },
      {
        name: "AI-Assisted Development",
        iconKey: "ai",
      },
    ],
  },
  {
    key: "agentic-ai",
    label: "AI Tools & Practices",
    iconKey: "ai",
    items: [
      {
        name: "Prompt Engineering",
        iconKey: "message",
      },
      {
        name: "Prompt-Driven AI Orchestration",
        iconKey: "ai",
      },
      {
        name: "Codex",
        iconKey: "codex",
      },
      {
        name: "Claude Code",
        iconKey: "claudecode",
      },
      {
        name: "Kiro (AWS)",
        iconKey: "kiro",
      },
      {
        name: "Antigravity (Google)",
        iconKey: "antigravity",
      },
      {
        name: "Hermes Agent",
        iconKey: "hermesagent",
      },
    ],
  },
  {
    key: "frontend",
    label: "Frontend",
    iconKey: "frontend",
    items: [
      {
        name: "JavaScript",
        iconKey: "javascript",
      },
      {
        name: "TypeScript",
        iconKey: "typescript",
      },
      {
        name: "React.js",
        iconKey: "react",
      },
      {
        name: "Next.js",
        iconKey: "nextjs",
      },
      {
        name: "React Native",
        iconKey: "reactnative",
      },
      {
        name: "Vite.js",
        iconKey: "vitejs",
      },
      {
        name: "Rollup.js",
        iconKey: "rollup",
      },
      {
        name: "React Query",
        iconKey: "reactquery",
      },
      {
        name: "Zustand",
        iconKey: "zustand",
      },
      {
        name: "Redux",
        iconKey: "redux",
      },
      {
        name: "Axios",
        iconKey: "axios",
      },
      {
        name: "Tailwind CSS",
        iconKey: "tailwind",
      },
      {
        name: "Ant Design",
        iconKey: "antdesign",
      },
      {
        name: "Radix UI",
        iconKey: "radixui",
      },
      {
        name: "Storybook.js",
        iconKey: "storybook",
      },
      {
        name: "Mini Program (Taro.js)",
        iconKey: "miniprogram",
      },
    ],
  },
  {
    key: "backend-integration",
    label: "Backend & Integration",
    iconKey: "backend",
    items: [
      {
        name: "Go",
        iconKey: "go",
      },
      {
        name: "Node.js",
        iconKey: "nodejs",
      },
      {
        name: "Express.js",
        iconKey: "express",
      },
      {
        name: "REST APIs",
        iconKey: "api",
      },
      {
        name: "Third-Party Integrations",
        iconKey: "grpc",
      },
      {
        name: "gRPC",
        iconKey: "grpc",
      },
      {
        name: "Protocol Buffers",
        iconKey: "protobuf",
      },
      {
        name: "RabbitMQ",
        iconKey: "rabbitmq",
      },
      {
        name: "Redis",
        iconKey: "redis",
      },
      {
        name: "MySQL",
        iconKey: "mysql",
      },
      {
        name: "MongoDB",
        iconKey: "mongodb",
      },
      {
        name: "PHP",
        iconKey: "php",
      },
      {
        name: "Firebase",
        iconKey: "firebase",
      },
      {
        name: "cron jobs",
        iconKey: "cron",
      },
    ],
  },
  {
    key: "testing-quality",
    label: "Testing & Quality",
    iconKey: "quality",
    items: [
      {
        name: "Jest",
        iconKey: "jest",
      },
      {
        name: "Playwright",
        iconKey: "playwright",
      },
      {
        name: "SonarQube",
        iconKey: "sonarqube",
      },
      {
        name: "Automated Testing",
        iconKey: "quality",
      },
      {
        name: "AI-Assisted Test Development",
        iconKey: "ai",
      },
      {
        name: "API Testing",
        iconKey: "api",
      },
      {
        name: "Test Planning",
        iconKey: "clipboard",
      },
      {
        name: "Use Case Analysis",
        iconKey: "message",
      },
      {
        name: "Edge Case Analysis",
        iconKey: "quality",
      },
      {
        name: "UAT Support",
        iconKey: "user-check",
      },
    ],
  },
  {
    key: "cloud-devops-observability",
    label: "Cloud, DevOps & Observability",
    iconKey: "cloud",
    items: [
      {
        name: "AWS (EC2, S3, RDS)",
        iconKey: "aws",
      },
      {
        name: "Docker",
        iconKey: "docker",
      },
      {
        name: "Kubernetes",
        iconKey: "kubernetes",
      },
      {
        name: "Argo CD",
        iconKey: "argocd",
      },
      {
        name: "Vault",
        iconKey: "vault",
      },
      {
        name: "OpenTelemetry",
        iconKey: "opentelemetry",
      },
      {
        name: "Elastic APM",
        iconKey: "elastic",
      },
      {
        name: "Grafana",
        iconKey: "grafana",
      },
    ],
  },
  {
    key: "version-control",
    label: "Version Control & CI/CD",
    iconKey: "version-control",
    items: [
      {
        name: "Git",
        iconKey: "git",
      },
      {
        name: "GitLab",
        iconKey: "gitlab",
      },
      {
        name: "GitHub Actions",
        iconKey: "githubactions",
      },
    ],
  },
  {
    key: "management-tools",
    label: "Management Tools",
    iconKey: "management",
    items: [
      {
        name: "Jira",
        iconKey: "jira",
      },
      {
        name: "ClickUp",
        iconKey: "clickup",
      },
      {
        name: "YouTrack",
        iconKey: "youtrack",
      },
    ],
  },
  {
    key: "other-languages",
    label: "Other Programming Languages",
    iconKey: "embedded",
    items: [
      {
        name: "C",
        iconKey: "c",
      },
      {
        name: "C++",
        iconKey: "cplusplus",
      },
    ],
  },
];
