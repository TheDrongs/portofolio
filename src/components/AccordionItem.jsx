import {
  coreSkills,
  education,
  keyAchievements,
  languages,
  selectedProjects,
  timelineItems,
} from "../data/portofolioData";

import reactLogo from "../assets/react.svg";
import sonarqubeLogo from "../assets/sonarqube.png";
import zustandLogo from "../assets/zustand.jpg";
import vaultLogo from "../assets/vault.png";
import vitejsLogo from "../assets/vitejs.jpg";

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiAngular,
  SiVuedotjs,
  SiHtml5,
  SiAntdesign,
  SiTailwindcss,
  SiRadixui,
  SiRedux,
  SiRollupdotjs,
  SiStorybook,
  SiOpenstreetmap,
  SiGooglemaps,
  SiGo,
  SiPhp,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiGraphql,
  SiRabbitmq,
  SiKotlin,
  SiDocker,
  SiKubernetes,
  SiJest,
  SiOpentelemetry,
  SiElastic,
  SiGrafana,
  SiArgo,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { TbApi, TbBrandReactNative, TbDeviceMobileCode } from "react-icons/tb";

const reactIconMap = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  nextjs: SiNextdotjs,
  vite: SiVite,
  angular: SiAngular,
  vue: SiVuedotjs,
  html5: SiHtml5,
  css: FaCss3Alt,
  antdesign: SiAntdesign,
  tailwind: SiTailwindcss,
  radixui: SiRadixui,
  redux: SiRedux,
  rollup: SiRollupdotjs,
  storybook: SiStorybook,
  openstreetmap: SiOpenstreetmap,
  googlemaps: SiGooglemaps,

  go: SiGo,
  php: SiPhp,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mysql: SiMysql,
  mongodb: SiMongodb,
  redis: SiRedis,
  graphql: SiGraphql,
  rabbitmq: SiRabbitmq,
  api: TbApi,

  reactnative: TbBrandReactNative,
  kotlin: SiKotlin,
  miniprogram: TbDeviceMobileCode,

  docker: SiDocker,
  kubernetes: SiKubernetes,
  jest: SiJest,
  opentelemetry: SiOpentelemetry,
  elastic: SiElastic,
  grafana: SiGrafana,
  argocd: SiArgo,

  c: SiC,
  cplusplus: SiCplusplus,
};

const assetIconMap = {
  react: reactLogo,
  sonarqube: sonarqubeLogo,
  zustand: zustandLogo,
  vault: vaultLogo,
  vitejs: vitejsLogo,
};

const techIconColorMap = {
  javascript: "#f7df1e",
  typescript: "#3178c6",
  nextjs: "#000000",
  vite: "#646cff",
  vitejs: "#646cff",
  angular: "#dd0031",
  vue: "#42b883",
  html5: "#e34f26",
  css: "#1572b6",
  antdesign: "#1677ff",
  tailwind: "#06b6d4",
  radixui: "#111827",
  redux: "#764abc",
  rollup: "#ec4a3f",
  storybook: "#ff4785",

  react: "#61dafb",
  reactnative: "#61dafb",
  miniprogram: "#64748b",

  go: "#00add8",
  php: "#777bb4",
  nodejs: "#339933",
  express: "#111827",
  mysql: "#4479a1",
  mongodb: "#47a248",
  redis: "#dc382d",
  graphql: "#e10098",
  rabbitmq: "#ff6600",
  api: "#2563eb",
  kotlin: "#7f52ff",

  docker: "#2496ed",
  kubernetes: "#326ce5",
  jest: "#c21325",
  sonarqube: "#4e9bcd",
  opentelemetry: "#000000",
  elastic: "#005571",
  grafana: "#f46800",
  vault: "#111827",
  argocd: "#ef7b4d",

  c: "#a8b9cc",
  cplusplus: "#00599c",
};

const techIconLabelMap = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  nextjs: "Next.js",
  vite: "Vite",
  vitejs: "Vite.js",
  angular: "Angular",
  vue: "Vue.js",
  html5: "HTML5",
  css: "CSS",
  antdesign: "Ant Design",
  tailwind: "Tailwind CSS",
  radixui: "Radix UI",
  redux: "Redux",
  rollup: "Rollup.js",
  storybook: "Storybook",
  react: "React",
  reactnative: "React Native",
  miniprogram: "Mini Program",
  go: "Go",
  php: "PHP",
  nodejs: "Node.js",
  express: "Express.js",
  mysql: "MySQL",
  mongodb: "MongoDB",
  redis: "Redis",
  graphql: "GraphQL",
  rabbitmq: "RabbitMQ",
  api: "RESTful API",
  kotlin: "Kotlin",
  docker: "Docker",
  kubernetes: "Kubernetes",
  jest: "Jest",
  sonarqube: "SonarQube",
  opentelemetry: "OpenTelemetry",
  elastic: "Elastic APM",
  grafana: "Grafana",
  vault: "Vault",
  argocd: "ArgoCD",
  c: "C",
  cplusplus: "C++",
};

export default function AccordionItem({ item, isOpen, isFirst, onClick }) {
  const styles = {
    accordionItem: {
      borderTop: isFirst ? 0 : "1px solid rgba(226, 232, 240, 0.9)",
      boxSizing: "border-box",
    },
    accordionTrigger: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 18px",
      border: 0,
      color: "#1e1b4b",
      cursor: "pointer",
      background:
        "linear-gradient(90deg, rgba(237, 233, 254, 0.72), rgba(255, 255, 255, 0.9))",
      textAlign: "left",
      fontFamily: "inherit",
    },
    accordionTitle: {
      color: "#1e1b4b",
      fontSize: 18,
      fontWeight: 800,
      lineHeight: 1.25,
    },
    accordionIcon: {
      display: "grid",
      placeItems: "center",
      width: 26,
      height: 26,
      borderRadius: 999,
      color: "#6d28d9",
      background: "#ede9fe",
      border: "1px solid rgba(221, 214, 254, 0.95)",
      fontSize: 16,
      lineHeight: 1,
      flexShrink: 0,
      boxSizing: "border-box",
    },
    accordionContent: {
      padding: "18px 20px 20px",
      color: "#475569",
      background: "#ffffff",
      fontSize: 14,
      lineHeight: 1.5,
      boxSizing: "border-box",
    },
    timeline: {
      display: "grid",
      gap: 0,
    },
    timelineItem: {
      display: "grid",
      gridTemplateColumns: "26px 1fr",
      gap: 14,
      alignItems: "stretch",
    },
    timelineMarker: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100%",
    },
    timelineDot: {
      width: 12,
      height: 12,
      marginTop: 6,
      borderRadius: 999,
      background: "#7c3aed",
      boxShadow: "0 0 0 5px #ede9fe",
      flexShrink: 0,
    },
    timelineLine: {
      width: 2,
      flex: 1,
      marginTop: 8,
      marginBottom: -2,
      background: "rgba(167, 139, 250, 0.55)",
      borderRadius: 999,
    },
    timelineContent: {
      paddingBottom: 24,
    },

    roleText: {
      color: "#111827",
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.35,
    },
    strongText: {
      color: "#111827",
    },
    metaText: {
      display: "block",
      marginTop: 5,
      color: "#64748b",
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.45,
    },
    paragraph: {
      margin: "8px 0 0",
      fontSize: 15,
      lineHeight: 1.6,
      whiteSpace: "pre-line",
    },
    subSection: {
      marginTop: 12,
    },
    subSectionTitle: {
      display: "block",
      marginTop: 10,
      color: "#334155",
      fontSize: 15,
      fontWeight: 800,
      lineHeight: 1.45,
    },
    bulletList: {
      margin: "6px 0 0",
      paddingLeft: 18,
      display: "grid",
      gap: 6,
    },
    bulletItem: {
      color: "#475569",
      fontSize: 14,
      lineHeight: 1.6,
    },

    techIconWrap: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 8,
    },
    techIconBox: {
      width: 34,
      height: 34,
      display: "grid",
      placeItems: "center",
      borderRadius: 10,
      background: "#ffffff",
      border: "1px solid rgba(226, 232, 240, 0.95)",
      boxShadow: "0 6px 14px rgba(15, 23, 42, 0.05)",
      overflow: "hidden",
      boxSizing: "border-box",
    },
    assetIcon: {
      width: 22,
      height: 22,
      objectFit: "contain",
      display: "block",
    },

    list: {
      display: "grid",
      gap: 10,
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    listItem: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: 9,
    },
    checkIcon: {
      color: "#7c3aed",
      fontWeight: 900,
    },
    projectList: {
      display: "grid",
      gap: 14,
    },
    projectCard: {
      padding: 14,
      borderRadius: 14,
      background: "#f8fafc",
      border: "1px solid rgba(226, 232, 240, 0.92)",
      boxSizing: "border-box",
    },
    skillList: {
      display: "grid",
      gap: 12,
      fontSize: 16,
    },
    skillCard: {
      padding: 14,
      borderRadius: 14,
      background: "#f8fafc",
      border: "1px solid rgba(226, 232, 240, 0.92)",
      boxSizing: "border-box",
    },
    educationCard: {
      display: "grid",
      gap: 12,
      fontSize: 16,
    },
    pillWrap: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 8,
    },
    pill: {
      padding: "8px 11px",
      borderRadius: 999,
      color: "#312e81",
      background: "#ede9fe",
      fontSize: 14,
      fontWeight: 700,
    },
  };

  const renderTechIcon = (iconKey) => {
    const IconComponent = reactIconMap[iconKey];
    const assetIcon = assetIconMap[iconKey];
    const label = techIconLabelMap[iconKey] || iconKey;
    const color = techIconColorMap[iconKey] || "#2563eb";

    return (
      <span key={iconKey} style={styles.techIconBox} title={label}>
        {assetIcon ? (
          <img src={assetIcon} alt={label} style={styles.assetIcon} />
        ) : IconComponent ? (
          <IconComponent size={21} color={color} />
        ) : null}
      </span>
    );
  };

  const renderContent = () => {
    if (item.type === "timeline") {
      return (
        <div style={styles.timeline}>
          {timelineItems.map((timeline, index) => {
            const isLastItem = index === timelineItems.length - 1;

            return (
              <div
                key={`${timeline.role}-${timeline.period}`}
                style={styles.timelineItem}
              >
                <div style={styles.timelineMarker}>
                  <span style={styles.timelineDot} />
                  {!isLastItem && <span style={styles.timelineLine} />}
                </div>

                <div style={styles.timelineContent}>
                  <strong style={styles.roleText}>{timeline.role}</strong>

                  <span style={styles.metaText}>
                    {timeline.period}
                    {timeline.duration ? ` · ${timeline.duration}` : ""}
                  </span>

                  <span style={styles.metaText}>
                    {timeline.company}
                    {timeline.employmentType
                      ? ` · ${timeline.employmentType}`
                      : ""}
                  </span>

                  <span style={styles.metaText}>{timeline.location}</span>

                  <p style={styles.paragraph}>{timeline.description}</p>

                  {timeline.notableProjects?.length > 0 && (
                    <div style={styles.subSection}>
                      <span style={styles.subSectionTitle}>
                        {timeline.notableProjectsTitle || "Notable Projects"}
                      </span>
                      <ul style={styles.bulletList}>
                        {timeline.notableProjects.map((project) => (
                          <li key={project} style={styles.bulletItem}>
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {timeline.techStackIconKeys?.length > 0 && (
                    <div style={styles.subSection}>
                      <span style={styles.subSectionTitle}>Tech Stack(s)</span>
                      <div style={styles.techIconWrap}>
                        {timeline.techStackIconKeys.map(renderTechIcon)}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    if (item.type === "skills") {
      return (
        <div style={styles.skillList}>
          {coreSkills.map((skill) => (
            <div key={skill.category} style={styles.skillCard}>
              <strong style={styles.strongText}>{skill.category}</strong>
              <p style={styles.paragraph}>{skill.items}</p>
            </div>
          ))}
        </div>
      );
    }

    if (item.type === "projects") {
      return (
        <div style={styles.projectList}>
          {selectedProjects.map((project) => (
            <div key={project.title} style={styles.projectCard}>
              <strong style={styles.strongText}>{project.title}</strong>
              <span style={styles.metaText}>{project.period}</span>
              <p style={styles.paragraph}>{project.description}</p>
            </div>
          ))}
        </div>
      );
    }

    if (item.type === "achievements") {
      return (
        <ul style={styles.list}>
          {keyAchievements.map((achievement) => (
            <li key={achievement} style={styles.listItem}>
              <span style={styles.checkIcon}>✓</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      );
    }

    if (item.type === "education-language") {
      return (
        <div style={styles.educationCard}>
          <div style={styles.projectCard}>
            <strong style={styles.strongText}>{education.school}</strong>
            <span style={styles.metaText}>{education.degree}</span>
            <p style={styles.paragraph}>{education.period}</p>
          </div>

          <div style={styles.projectCard}>
            <strong style={styles.strongText}>Languages</strong>
            <div style={styles.pillWrap}>
              {languages.map((language) => (
                <span key={language} style={styles.pill}>
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div style={styles.accordionItem}>
      <button style={styles.accordionTrigger} onClick={onClick}>
        <span style={styles.accordionTitle}>{item.title}</span>
        <span style={styles.accordionIcon}>{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && <div style={styles.accordionContent}>{renderContent()}</div>}
    </div>
  );
}