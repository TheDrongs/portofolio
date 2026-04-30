import { useState } from "react";
import { PageTitle } from "../components/components.js";
import { containerStyle } from "./styles.js";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiCplusplus,
  SiKotlin,
  SiGit,
  SiTypescript,
  SiDocker,
  SiKubernetes,
  SiRabbitmq,
  SiGo,
  SiNodedotjs,
  SiJest,
  SiExpress,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiNextdotjs,
  SiC,
  SiStorybook,
  SiRollupdotjs,
  SiAntdesign,
  SiTailwindcss,
  SiRedux,
  SiOpenstreetmap,
  SiGooglemaps,
  SiHtml5,
  SiAngular,
  SiVuedotjs,
  SiRadixui,
  SiGraphql,
  SiVault,
  SiArgo,
  SiRedis,
  SiGrafana,
} from "react-icons/si";
import {
  FaCss3Alt,
  FaChartLine,
  FaChartBar,
  FaCheckCircle,
  FaGraduationCap,
  FaFolderOpen,
} from "react-icons/fa";

import ViteLogo from "../assets/Vitejs-logo.png";
import ZustandLogo from "../assets/zustand.svg";
import FinclipLogo from "../assets/finclip.png";
import PMLogo from "../assets/projectmanagement.png";
import ManPowerPlanLogo from "../assets/manpowerplanning.png";
import UXLogo from "../assets/UX.png";
import LeadershipLogo from "../assets/teamleadership.png";
import ProductOwnershipLogo from "../assets/productownership.png";
import PrototypingLogo from "../assets/fullstack.png";
import RestAPILogo from "../assets/restApi.png";
import WebDevIcon from "../assets/webdev.png";
import AppDevIcon from "../assets/appdev.png";
import SonarqubeLogo from "../assets/sonarqube.png";
import TechStandardsLogo from "../assets/techStandards.png";

const sk = (Component, name, description, badges = []) => ({
  Component,
  name,
  description,
  badges,
});

const nt = (src, name, description) => ({ src, name, description });

const technicalSkillsByCategory = {
  "Web Programming": {
    "Frontend Stack": {
      Languages: [
        sk(SiJavascript, "JavaScript", "6+ Years Experience", [
          "Advanced",
          "Production Use",
        ]),
        sk(SiTypescript, "TypeScript", "4+ Years Experience", [
          "Advanced",
          "Production Use",
        ]),
      ],
      "UI Library & Frameworks": [
        sk(SiReact, "React", "5+ Years Experience", [
          "Advanced",
          "Production Use",
        ]),
        sk(SiNextdotjs, "NextJS", "4+ Years Experience", [
          "Advanced",
          "Production Use",
        ]),
        sk(ViteLogo, "ViteJS", "3+ Years Experience", [
          "Advanced",
          "Production Use",
        ]),
        sk(SiAngular, "Angular", "1 Year Experience", [
          "Working Knowledge",
          "Project Exposure",
        ]),
        sk(SiVuedotjs, "Vue", "1 Year Experience", [
          "Working Knowledge",
          "Project Exposure",
        ]),
      ],
      Styling: [
        sk(SiHtml5, "HTML5", "7+ Years Experience", [
          "Advanced",
          "Production Use",
        ]),
        sk(FaCss3Alt, "CSS", "7+ Years Experience", [
          "Advanced",
          "Production Use",
        ]),
        sk(SiAntdesign, "AntDesign", "3+ Years Experience", [
          "Advanced",
          "Production Use",
        ]),
        sk(SiTailwindcss, "TailwindCSS", "2 Years Experience", [
          "Working Knowledge",
          "Production Use",
        ]),
        sk(SiRadixui, "RadixUI", "2 Years Experience", [
          "Working Knowledge",
          "Production Use",
        ]),
      ],
      "State Management": [
        sk(SiReact, "ReactContextAPI", "4+ Years Experience", [
          "Advanced",
          "Production Use",
        ]),
        sk(SiRedux, "Redux", "2 Years Experience", [
          "Working Knowledge",
          "Project Exposure",
        ]),
        sk(ZustandLogo, "Zustand", "2 Years Experience", [
          "Working Knowledge",
          "Production Use",
        ]),
      ],
      "Build Tools & Config": [
        sk(SiRollupdotjs, "RollupJS", "1+ Years Experience", [
          "Working Knowledge",
          "Project Exposure",
        ]),
        sk(SiStorybook, "StorybookJS", "2 Years Experience", [
          "Working Knowledge",
          "Production Use",
        ]),
      ],
      "Map Integration": [
        sk(SiOpenstreetmap, "OpenStreetMap", "2+ Years Experience", [
          "Working Knowledge",
          "Production Use",
        ]),
        sk(SiGooglemaps, "GoogleMapAPI", "2+ Years Experience", [
          "Working Knowledge",
          "Production Use",
        ]),
      ],
    },
    "Backend Stack": {
      "Languages & Runtime": [
        sk(SiGo, "GO", "1+ Years Experience", [
          "Working Knowledge",
          "Production Use",
        ]),
        sk(SiPhp, "PHP", "3+ Years Experience", [
          "Working Knowledge",
          "Production Use",
        ]),
        sk(SiNodedotjs, "NodeJS", "1+ Years Experience", [
          "Working Knowledge",
          "Production Use",
        ]),
      ],
      Frameworks: [
        sk(SiExpress, "ExpressJS", "1+ Years Experience", [
          "Working Knowledge",
          "Project Exposure",
        ]),
      ],
      "Database & Cache": [
        sk(SiMysql, "MySQL", "2+ Years Experience", [
          "Working Knowledge",
          "Production Use",
        ]),
        sk(SiMongodb, "MongoDB", "1+ Years Experience", [
          "Working Knowledge",
          "Production Use",
        ]),
        sk(SiRedis, "Redis", "1+ Years Experience", [
          "Working Knowledge",
          "Production Use",
        ]),
      ],
      "API & Communication": [
        sk(RestAPILogo, "RestAPI", "4+ Years Experience", [
          "Advanced",
          "Production Use",
        ]),
        sk(SiGraphql, "GraphQL", "1+ Years Experience", [
          "Working Knowledge",
          "Project Exposure",
        ]),
      ],
      Messaging: [
        sk(SiRabbitmq, "RabbitMQ", "1+ Year Experience", [
          "Working Knowledge",
          "Production Use",
        ]),
      ],
    },
    "CI/CD": [
      sk(SiDocker, "Docker", "1+ Year Experience", [
        "Working Knowledge",
        "Production Use",
      ]),
      sk(SiKubernetes, "Kubernetes", "1+ Year Experience", [
        "Working Knowledge",
        "Production Use",
      ]),
    ],
    "Testing & Quality": [
      sk(SiJest, "Jest", "2 Years Experience", [
        "Working Knowledge",
        "Production Use",
      ]),
      sk(SonarqubeLogo, "Sonarqube", "2 Year Experience", [
        "Advanced",
        "Production Use",
      ]),
    ],
  },
  "Mobile Programming": [
    sk(SiReact, "ReactNative", "2+ Years Experience", [
      "Advanced",
      "Production Use",
    ]),
    sk(SiKotlin, "Kotlin", "1+ Years Experience", [
      "Working Knowledge",
      "Production Use",
    ]),
    sk(FinclipLogo, "MiniProgram", "1+ Years Experience", [
      "Working Knowledge",
      "Production Use",
    ]),
  ],
  "Embedded Programming": [
    sk(SiC, "C", "6+ Years Experience", ["Advanced", "Production Use"]),
    sk(SiCplusplus, "C++", "6+ Years Experience", [
      "Advanced",
      "Production Use",
    ]),
  ],
};

const nonTechnicalSkills = {
  management: [
    nt(PMLogo, "Project Management", "5+ Years Experience."),
    nt(LeadershipLogo, "Team Leadership", "3 Years Experience."),
    nt(ManPowerPlanLogo, "Man Power Planning", "3 Years Experience."),
    nt(TechStandardsLogo, "Technical Standards", "2 Years Experience."),
  ],
  product: [
    nt(ProductOwnershipLogo, "Product Ownership", "2 Years Experience."),
    nt(UXLogo, "User Experience", "2 Years Experience."),
  ],
  individualContributor: [
    nt(WebDevIcon, "Web Development", "9+ Years Experience."),
    nt(AppDevIcon, "App Development", "6+ Years Experience."),
    nt(PrototypingLogo, "Fullstack Development", "2+ Years Experience."),
  ],
};

const toolsUtilities = [
  sk(SiGit, "Git", "4+ Years Experience", ["Advanced", "Production Use"]),
  sk(SiVault, "Vault", "<1 Year Experience", [
    "Working Knowledge",
    "Production Use",
  ]),
  sk(SiArgo, "ArgoCD", "<1 Year Experience", [
    "Working Knowledge",
    "Production Use",
  ]),
  sk(SiGrafana, "Grafana", "1 Year Experience", [
    "Working Knowledge",
    "Production Use",
  ]),
];

const skillColors = {
  JavaScript: "#F7DF1E",
  React: "#61DAFB",
  TypeScript: "#3178C6",
  Kotlin: "#A97BFF",
  "C++": "#00599C",
  C: "#A8B9CC",
  Git: "#F05032",
  GO: "#00ADD8",
  Go: "#00ADD8",
  NodeJS: "#339933",
  ExpressJS: "#000000",
  RabbitMQ: "#FF6600",
  PHP: "#777BB4",
  MySQL: "#4479A1",
  MongoDB: "#47A248",
  NextJS: "#000000",
  Docker: "#2496ED",
  Kubernetes: "#326CE5",
  Jest: "#C21325",
  SonarQube: "#4E9BCD",
  Sonarqube: "#4E9BCD",
  StorybookJS: "#FF4785",
  RollupJS: "#EC4A3F",
  ReactContextAPI: "#61DAFB",
  ReactNative: "#61DAFB",
  Redux: "#764ABC",
  AntDesign: "#0170FE",
  TailwindCSS: "#06B6D4",
  GoogleMapAPI: "#4285F4",
  OpenStreetMap: "#7EBC6F",
  HTML5: "#E34F26",
  CSS: "#1572B6",
  CSS3: "#1572B6",
  Angular: "#DD0031",
  Vue: "#42B883",
  Vault: "#FFEC6E",
  ArgoCD: "#F05A28",
  GraphQL: "#E10098",
  Redis: "#DC382D",
  Grafana: "#F46800",
};

const imageSkillNames = [
  "ViteJS",
  "Zustand",
  "MiniProgram",
  "RestAPI",
  "Sonarqube",
];

const badgeStyles = {
  Advanced: {
    Icon: FaChartBar,
    className: "bg-blue-50 text-blue-700 border-blue-200",
  },
  "Production Use": {
    Icon: FaCheckCircle,
    className: "bg-green-50 text-green-700 border-green-200",
  },
  "Working Knowledge": {
    Icon: FaGraduationCap,
    className: "bg-orange-50 text-orange-700 border-orange-200",
  },
  "Project Exposure": {
    Icon: FaFolderOpen,
    className: "bg-purple-50 text-purple-700 border-purple-200",
  },
};

const SkillBadge = ({ label }) => {
  const badge = badgeStyles[label];
  if (!badge) return null;

  const { Icon, className } = badge;

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-md border text-[10px] sm:text-xs font-semibold leading-none whitespace-nowrap ${className}`}
    >
      <Icon className="w-3 h-3 flex-shrink-0" />
      <span>{label}</span>
    </span>
  );
};

const SkillCard = ({ skill, index }) => {
  const Icon = skill.Component;
  const isImage = imageSkillNames.includes(skill.name);

  return (
    <div
      key={index}
      className="flex items-start gap-3 bg-white border-2 p-3 rounded-md shadow-md min-w-0"
      style={{ borderColor: "#1F2430" }}
    >
      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-md border border-gray-200 flex items-center justify-center bg-white">
        {isImage ? (
          <img
            src={Icon}
            alt={skill.name}
            className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
          />
        ) : (
          <Icon
            className="h-8 w-8 sm:h-10 sm:w-10"
            style={{
              fill: skillColors[skill.name] || "#1F2430",
              color: skillColors[skill.name] || "#1F2430",
            }}
          />
        )}
      </div>

      <div className="flex-1 min-w-0 overflow-hidden">
        <h3 className="text-sm sm:text-base font-bold text-[#1F2430] break-words leading-snug">
          {skill.name}
        </h3>

        <p className="text-xs sm:text-sm text-gray-600 mt-0.5 leading-snug break-words">
          {skill.description}
        </p>

        {skill.badges?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {skill.badges.map((badge) => (
              <SkillBadge key={badge} label={badge} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const NonTechnicalCard = ({ skill, prefix, index }) => (
  <div
    key={`${prefix}-${index}`}
    className="flex items-center gap-4 bg-white border-2 p-3 rounded-md shadow-md"
    style={{ borderColor: "#1F2430" }}
  >
    <img
      src={skill.src}
      alt={skill.name}
      className="h-12 w-12 object-contain"
    />

    <div>
      <h3 className="text-base font-semibold text-[#1F2430]">{skill.name}</h3>
      <p className="text-sm text-[#1F2430]">{skill.description}</p>
    </div>
  </div>
);

const Skills = () => {
  const mainTabs = Object.keys(technicalSkillsByCategory);
  const webSkills = technicalSkillsByCategory["Web Programming"];

  const [activeMainTab, setActiveMainTab] = useState("Web Programming");
  const [activeSubTab, setActiveSubTab] = useState("Frontend Stack");
  const [activeFrontendChildTab, setActiveFrontendChildTab] =
    useState("Languages");
  const [activeBackendChildTab, setActiveBackendChildTab] = useState("");

  const handleMainTabClick = (tab) => {
    setActiveMainTab(tab);
    setActiveSubTab(tab === "Web Programming" ? "Frontend Stack" : tab);
    setActiveFrontendChildTab(tab === "Web Programming" ? "Languages" : "");
    setActiveBackendChildTab("");
  };

  const handleSubTabClick = (subTab) => {
    setActiveSubTab(subTab);
    setActiveFrontendChildTab(subTab === "Frontend Stack" ? "Languages" : "");
    setActiveBackendChildTab(
      subTab === "Backend Stack" ? "Languages & Runtime" : "",
    );
  };

  const visibleSkills =
    activeMainTab !== "Web Programming"
      ? technicalSkillsByCategory[activeMainTab]
      : activeSubTab === "Frontend Stack"
        ? webSkills["Frontend Stack"][activeFrontendChildTab]
        : activeSubTab === "Backend Stack"
          ? webSkills["Backend Stack"][activeBackendChildTab]
          : webSkills[activeSubTab];

  const renderTabs = (
    items,
    activeItem,
    onClick,
    className = "px-3 py-1 rounded-full border text-sm transition-all",
  ) => (
    <div className="flex flex-wrap gap-3 mb-6">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onClick(item)}
          className={`${className} ${
            activeItem === item
              ? "bg-[#1F2430] text-white"
              : "bg-white text-[#1F2430] hover:bg-[#fedf89]"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );

  return (
    <div id="Skills" className={`${containerStyle}`}>
      {renderTabs(
        mainTabs,
        activeMainTab,
        handleMainTabClick,
        "px-4 py-2 rounded-full border font-semibold transition-all",
      )}

      {activeMainTab === "Web Programming" &&
        renderTabs(Object.keys(webSkills), activeSubTab, handleSubTabClick)}

      {activeMainTab === "Web Programming" &&
        activeSubTab === "Frontend Stack" &&
        renderTabs(
          Object.keys(webSkills["Frontend Stack"]),
          activeFrontendChildTab,
          setActiveFrontendChildTab,
        )}

      {activeMainTab === "Web Programming" &&
        activeSubTab === "Backend Stack" &&
        renderTabs(
          Object.keys(webSkills["Backend Stack"]),
          activeBackendChildTab,
          setActiveBackendChildTab,
        )}

      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeMainTab}${activeSubTab}${activeFrontendChildTab}${activeBackendChildTab}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-3 mb-8"
        >
          {visibleSkills?.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>

      <PageTitle title="Tools & Utilities" />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-4 mb-8">
        {toolsUtilities.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>

      <h4 className="text-lg font-semibold text-[#1F2430] mb-2 mt-4">
        Management Skills
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {nonTechnicalSkills.management.map((skill, index) => (
          <NonTechnicalCard
            key={index}
            skill={skill}
            prefix="management"
            index={index}
          />
        ))}
      </div>

      <h4 className="text-lg font-semibold text-[#1F2430] mb-2 mt-6">
        Product Related Skills
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {nonTechnicalSkills.product.map((skill, index) => (
          <NonTechnicalCard
            key={index}
            skill={skill}
            prefix="ic"
            index={index}
          />
        ))}
      </div>

      <h4 className="text-lg font-semibold text-[#1F2430] mb-2 mt-6">
        Execution Skills
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {nonTechnicalSkills.individualContributor.map((skill, index) => (
          <NonTechnicalCard
            key={index}
            skill={skill}
            prefix="ic"
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;