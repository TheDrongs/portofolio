import reactLogo from "../../assets/react.svg";
import sonarqubeLogo from "../../assets/sonarqube.png";
import zustandLogo from "../../assets/zustand.jpg";
import vaultLogo from "../../assets/vault.png";
import vitejsLogo from "../../assets/vitejs.jpg";

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
  SiFirebase,
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
  firebase: SiFirebase,

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
  zustand: "#443e38",
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
  firebase: "#ffca28",
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
  zustand: "Zustand",
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
  firebase: "Google Firebase",
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

const techStackGroupMap = {
  javascript: "frontend",
  typescript: "frontend",
  react: "frontend",
  nextjs: "frontend",
  vite: "frontend",
  vitejs: "frontend",
  angular: "frontend",
  vue: "frontend",
  html5: "frontend",
  css: "frontend",
  antdesign: "frontend",
  tailwind: "frontend",
  radixui: "frontend",
  redux: "frontend",
  zustand: "frontend",
  rollup: "frontend",
  storybook: "frontend",
  reactnative: "frontend",
  miniprogram: "frontend",
  openstreetmap: "frontend",
  googlemaps: "frontend",
  c: "frontend",
  cplusplus: "frontend",
  kotlin: "frontend",

  go: "backend",
  nodejs: "backend",
  express: "backend",
  php: "backend",
  api: "backend",
  graphql: "backend",
  mysql: "backend",
  mongodb: "backend",
  firebase: "backend",

  redis: "others",
  rabbitmq: "others",
  docker: "others",
  kubernetes: "others",
  jest: "others",
  sonarqube: "others",
  opentelemetry: "others",
  elastic: "others",
  grafana: "others",
  vault: "others",
  argocd: "others",
};

const styles = {
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
  techStackGroupList: {
    display: "grid",
    gap: 0,
    marginTop: 8,
  },
  techStackGroupRow: {
    display: "grid",
    gridTemplateColumns: "90px 1fr",
    gap: 10,
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid rgba(226, 232, 240, 0.92)",
  },
  techStackGroupRowFirst: {
    paddingTop: 0,
  },
  techStackGroupRowLast: {
    paddingBottom: 0,
    borderBottom: "none",
  },
  techStackGroupTitle: {
    color: "#475569",
    fontSize: 13,
    fontWeight: 800,
    lineHeight: 1.4,
  },
};

const getGroupedTechStacks = (techStackIconKeys = []) => {
  const groupedTechStacks = {
    frontend: [],
    backend: [],
    others: [],
  };

  techStackIconKeys.forEach((iconKey) => {
    const groupName = techStackGroupMap[iconKey] || "others";
    groupedTechStacks[groupName].push(iconKey);
  });

  return [
    {
      title: "Frontend",
      keys: groupedTechStacks.frontend,
    },
    {
      title: "Backend",
      keys: groupedTechStacks.backend,
    },
    {
      title: "Others",
      keys: groupedTechStacks.others,
    },
  ].filter((group) => group.keys.length > 0);
};

export function TechIcon({ iconKey, index = 0 }) {
  const IconComponent = reactIconMap[iconKey];
  const assetIcon = assetIconMap[iconKey];
  const label = techIconLabelMap[iconKey] || iconKey;
  const color = techIconColorMap[iconKey] || "#2563eb";

  return (
    <span key={`${iconKey}-${index}`} style={styles.techIconBox} title={label}>
      {assetIcon ? (
        <img src={assetIcon} alt={label} style={styles.assetIcon} />
      ) : IconComponent ? (
        <IconComponent size={21} color={color} />
      ) : null}
    </span>
  );
}

export function TechIconList({ iconKeys = [], customStyle = {} }) {
  if (!iconKeys.length) return null;

  return (
    <div
      style={{
        ...styles.techIconWrap,
        ...customStyle,
      }}
    >
      {iconKeys.map((iconKey, index) => (
        <TechIcon key={`${iconKey}-${index}`} iconKey={iconKey} index={index} />
      ))}
    </div>
  );
}

export function GroupedTechStackIcons({ iconKeys = [] }) {
  const groupedTechStacks = getGroupedTechStacks(iconKeys);

  if (!groupedTechStacks.length) return null;

  return (
    <div style={styles.techStackGroupList}>
      {groupedTechStacks.map((group, index) => {
        const isFirstItem = index === 0;
        const isLastItem = index === groupedTechStacks.length - 1;

        return (
          <div
            key={group.title}
            style={{
              ...styles.techStackGroupRow,
              ...(isFirstItem ? styles.techStackGroupRowFirst : {}),
              ...(isLastItem ? styles.techStackGroupRowLast : {}),
            }}
          >
            <span style={styles.techStackGroupTitle}>{group.title}:</span>

            <TechIconList iconKeys={group.keys} customStyle={{ marginTop: 0 }} />
          </div>
        );
      })}
    </div>
  );
}