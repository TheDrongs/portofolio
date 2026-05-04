export const profile = {
  name: "Andri Pramuji",
  role: "Engineering Leadership",
  location: "Bandung, West Java, Indonesia",
  phone: "0856-1963-999",
  email: "thedrongs@gmail.com",
  linkedin: "https://linkedin.com/in/andri-pramuji-47aa42220",
  github: "https://github.com/TheDrongs",
  summary:
    "Experienced Software Engineer with 13+ years of experience across web, mobile, and desktop environments, along with 3+ years in leadership roles, focused on building and scaling custom SaaS and internal business systems.",
};

export const hero = {
  eyebrow: "Professional Summary",
  title: "Experienced Engineering Leadership",
  description:
    "Focused on team alignment, clear execution, sustainable delivery, and maintaining engineering quality across custom SaaS, enterprise platforms, internal business systems, field operations, and payment transaction systems.",
};

export const metrics = [
  {
    icon: "projects",
    value: "20+",
    title: "Total Apps Delivered",
    description:
      "Developed and delivered  applications across web, mobile, Android, EDC, and enterprise platforms.",
  },
  {
    icon: "team",
    value: "12",
    title: "Largest Team Led",
    description:
      "Led teams of up to 12 members across FE, BE, and QA, manage coordination, ownership, and execution quality.",
  },
  {
    icon: "tech-debt",
    value: "10%",
    title: "Increase Delivery Efficiency",
    description:
      "Reduced technical debt by 90% within 6 months, improving delivery efficiency and reducing rework-related cost risks.",
  },
  {
    icon: "build-time",
    value: "10%",
    title: "Increase Frontend Productivity",
    description:
      "Reduced UI library build time by 80% within 3 months, reducing overall idle time of engineers.",
  },
  {
    icon: "code-issues",
    value: "70%",
    title: "Frontend Reliability Improved",
    description:
      "Reduced frontend-related issues by 70% through codebase modernization, dependency simplification, and engineering standardization.",
  },
];

export const leadershipHighlights = [
  "Handled delivery planning, task coordination, timeline tracking, and delivery risk follow-up.",
  "Led FE,BE, and QA team while helping clarify priorities and execution flow.",
  "Supported team capacity planning, workload distribution, and role mapping based on project needs.",
  "Maintained engineering standards through code review, documentation, quality checks, and team alignment.",
  "Translated business requirements into clear scope and sprint-ready tasks for engineering execution.",
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
      "Team & Technical Leadership, Delivery Planning, Stakeholder Alignment, Risk & Performance Management, Workforce Planning.",
  },
  {
    category: "Software Delivery",
    items:
      "Full-Stack Delivery, SaaS & Enterprise Platforms, Technical Planning, Process Improvement, Cross-functional Execution.",
  },
  {
    category: "Frontend Stack",
    items:
      "JavaScript, TypeScript, React.js, Next.js, React Native, Vite.js, Zustand, Redux, Tailwind CSS, Ant Design, Radix UI, Storybook.js.",
  },
  {
    category: "Backend, BaaS, API & Integration",
    items:
      "Go, Node.js, Express.js, REST APIs, RabbitMQ, Redis, MySQL, MongoDB, PHP, Google Firebase.",
  },
  {
    category: "Quality, Observability & DevOps",
    items:
      "Jest, SonarQube, Docker, Kubernetes, OpenTelemetry, Elastic APM, Vault, Grafana, Argo CD.",
  },
  {
    category: "Management Tools",
    items: "Jira, Clickup.",
  },
  {
    category: "Additional Programming Experience",
    items: "C, C++.",
  },
];

export const accordionItems = [
  {
    title: "Career Timeline",
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
    title: "Education & Languages",
    type: "education-language",
  },
];

export const timelineItems = [
  {
    role: "Squad Leader",
    period: "Dec 2025 – Present",
    duration: "6 months",
    employmentType: "Full-time",
    company: "PT. Kaldu Sari Nabati Indonesia (NABATI)",
    location: "Bandung, Indonesia",
    description:
      "- Led a 7-person frontend and backend team and collaborated with 2 QA members from a separate function to translate business goals into sprint-ready tasks, align delivery, unblock execution, maintain code quality, and keep clear documentation.",
    techStackIconKeys: [
      "react",
      "nextjs",
      "typescript",
      "go",
      "mongodb",
      "jest",
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
    description:
      "- Led a 12-person frontend team supporting SaaS delivery, legacy support, MPP, KPI tracking, risk management, and performance review input.\n - Implemented SonarQube and reduced technical debt by 90% within 6 months.\n- Led the UI library improvement initiative, reducing build time by 80% in 3 months.\n- Reduced frontend-related issues by 70% within 4 months through technical guidance and engineering standardization.",
    notableProjectsTitle: "Notable Projects",
    notableProjects: [
      "Led development of strategic SaaS platforms, including a reusable UI library adopted by 10+ projects, SFA, ERP, and HRIS systems.",
      "Delivered custom digital tools such as Salesman Tracker, Surveyor App, Routing System, and Restaurant Mapping.",
    ],
    techStackIconKeys: [
      "react",
      "nextjs",
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
    description:
      "- Created, developed, and managed the company's web-based ERP using existing systems or built new solutions based on user requirements.",
    techStackIconKeys: ["react", "nextjs", "antdesign", "reactnative", "api"],
  },
  {
    role: "Frontend Developer",
    period: "Dec 2016 – Mar 2023",
    duration: "6 yrs 4 months",
    employmentType: "Full-time",
    company: "PT. Arah Dinamika Abadi",
    location: "Jakarta, Indonesia",
    description:
      "- Built secure NSICCS-compliant ISO8583 EDC applications, supported TMS and UAT for 7 Indonesian banks, and provided legacy system support.",
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
    location: "Jakarta, Indonesia",
    description:
      "- Managed IT infrastructure and network support for 40+ PCs, and delivered internal web systems including an SMS Gateway and company website with automated backups.",
    notableProjectsTitle: "Notable Projects",
    notableProjects: [
      "Developed a web-based SMS Gateway Management System and the company's official website.",
      "Implemented routine company file backups using open-source applications.",
    ],
    techStackIconKeys: ["html5", "css", "php", "mysql"],
  },
];

export const selectedProjects = [
  {
    title: "Enterprise Web, SaaS & Internal Business Platforms",
    period: "Mar 2023 – Present",
    description:
      "Delivered and supported ERP modules, SFA, HRIS, Salesman Tracker for 8,000+ outlets, Surveyor App, Routing & Tracker System, Restaurant Mapping, and multi-user Meeting App.",
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
      "sonarqube",
      "grafana",
      "opentelemetry",
      "elastic",
      "vault",
      "argocd",
    ],
  },
  {
    title: "NSICCS & ISO8583 EDC Applications",
    period: "Dec 2016 – Mar 2023",
    description:
      "Delivered mandatory NSICCS and ISO8583 EDC application updates for BPD Bali, BPD NTT, Bank Nasional Indonesia, Bank Syariah Mandiri (Now BSI), Bank Aceh Syariah, Bank Victoria, and BPD Jateng.",
    techStackIconKeys: ["c", "cplusplus", "php", "kotlin"],
  },
  {
    title: "Company Website & IDX Content Updates",
    period: "Oct 2018 – Feb 2019",
    description:
      "Built and maintained a company website that required regular content updates for IDX-related checking and public information needs.",
    url: "https://www.nellydwiputri.co.id",
    techStackIconKeys: ["html5", "css", "php", "mysql"],
  },
  {
    title: "Offshore Crewing Recruitment App",
    period: "May 2022 – Jul 2022",
    description:
      "Built an Android application for offshore crewing recruitment to support candidate data collection and recruitment workflow needs.",
    techStackIconKeys: ["kotlin", "firebase"],
  },
  {
    title: "Bakery E-Commerce Web Platform",
    period: "Aug 2022 – Jan 2023",
    description:
      "Built and managed an e-commerce web platform for a bakery shop, covering product catalog, transaction flow, and backend data integration.",
    techStackIconKeys: ["html5", "javascript", "react", "mongodb", "api"],
  },
];

export const keyAchievements = [
  "Delivered and led 10+ enterprise applications across ERP, SFA, HRIS, field operations, routing, and meeting platforms.",
  "Led engineering teams up to 12 members, improving delivery coordination, risk control, and engineering quality.",
  "Reduced technical debt by 90%, improving delivery efficiency by up to 10% and reducing rework-related cost risks.",
  "Reduced UI library build time by 80%–90%, recovering approximately 8% of daily engineering capacity.",
  "Reduced frontend-related issues by 70% through technical guidance, codebase modernization, and engineering standardization.",
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
