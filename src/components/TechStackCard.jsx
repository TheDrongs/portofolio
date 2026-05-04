import { useEffect, useMemo, useState } from "react";
import { techStack, techStackGroups } from "../data/portofolioData";
import { useBreakpoint } from "./useBreakpoint";

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
  SiFirebase,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { TbApi, TbBrandReactNative, TbDeviceMobileCode } from "react-icons/tb";
import {
  FiBarChart2,
  FiCheckCircle,
  FiBookOpen,
  FiLayers,
  FiStar,
} from "react-icons/fi";

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

  firebase: SiFirebase,
};

const assetIconMap = {
  react: reactLogo,
  sonarqube: sonarqubeLogo,
  zustand: zustandLogo,
  vault: vaultLogo,
  vitejs: vitejsLogo,
};

const getExperienceScore = (experience) => {
  const text = String(experience || "").toLowerCase();

  if (text.includes("<1")) return 0.5;
  if (text.includes("project exposure")) return 0.25;

  const match = text.match(/(\d+(?:\.\d+)?)/);
  return match ? Number(match[1]) : 0;
};

const sortByExperience = (items) => {
  return items
    .map((item, index) => ({ item, index }))
    .sort((a, b) => {
      const experienceDiff =
        getExperienceScore(b.item.experience) -
        getExperienceScore(a.item.experience);

      if (experienceDiff !== 0) return experienceDiff;

      return a.index - b.index;
    })
    .map(({ item }) => item);
};

const getBadgeConfig = (badge) => {
  const key = String(badge).toLowerCase().trim();

  if (key === "advanced") {
    return {
      icon: FiBarChart2,
      color: "#2563eb",
      background: "#e8f0ff",
      border: "#bfd3ff",
    };
  }

  if (key === "production") {
    return {
      icon: FiCheckCircle,
      color: "#1f9d55",
      background: "#e8f7ee",
      border: "#b8e2c6",
    };
  }

  if (key === "hands-on") {
    return {
      icon: FiBookOpen,
      color: "#dd6b20",
      background: "#fff1e8",
      border: "#f5c8a6",
    };
  }

  if (key === "project use") {
    return {
      icon: FiLayers,
      color: "#7c3aed",
      background: "#f1eafe",
      border: "#d7c2fb",
    };
  }

  return {
    icon: FiStar,
    color: "#475569",
    background: "#f1f5f9",
    border: "#cbd5e1",
  };
};

export default function TechStackCard() {
  const { isMobile } = useBreakpoint();
  const [activeGroup, setActiveGroup] = useState("frontend");
  const [isListVisible, setIsListVisible] = useState(true);
  const [openSections, setOpenSections] = useState({});

  const visibleTechStackGroups = useMemo(() => {
    return techStackGroups.filter((group) => group.key !== "all");
  }, []);

  useEffect(() => {
    setIsListVisible(false);

    const animationFrame = requestAnimationFrame(() => {
      setIsListVisible(true);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [activeGroup]);

  const filteredTechStack = useMemo(() => {
    const items = techStack.filter((item) => item.group === activeGroup);

    return sortByExperience(items);
  }, [activeGroup]);

  const groupedTechStack = useMemo(() => {
    const groupItems = techStack.filter((item) => item.group === activeGroup);
    const groups = [];

    groupItems.forEach((item) => {
      const sectionTitle = item.subcategory || "Others";
      const existingGroup = groups.find(
        (group) => group.title === sectionTitle,
      );

      if (existingGroup) {
        existingGroup.items.push(item);
        return;
      }

      groups.push({
        title: sectionTitle,
        items: [item],
      });
    });

    return groups.map((group) => ({
      ...group,
      items: sortByExperience(group.items),
    }));
  }, [activeGroup]);

  useEffect(() => {
    if (groupedTechStack.length === 0) {
      setOpenSections({});
      return;
    }

    if (activeGroup === "frontend") {
      setOpenSections({
        Languages: true,
        "UI Library & Frameworks": true,
      });
      return;
    }

    if (activeGroup === "backend") {
      setOpenSections({
        "Languages & Runtime": true,
        "API & Communication": true,
      });
      return;
    }

    const firstSection = groupedTechStack[0]?.title;

    setOpenSections({
      [firstSection]: true,
    });
  }, [activeGroup, groupedTechStack]);

  const getGroupCount = (groupKey) => {
    return techStack.filter((item) => item.group === groupKey).length;
  };

  const handleToggleSection = (sectionTitle) => {
    setOpenSections((currentSections) => ({
      ...currentSections,
      [sectionTitle]: !currentSections[sectionTitle],
    }));
  };

  const styles = {
    panelCard: {
      padding: 22,
      border: "1px solid rgba(226, 232, 240, 0.92)",
      borderRadius: 18,
      background: "rgba(255, 255, 255, 0.88)",
      boxShadow: "0 12px 32px rgba(15, 23, 42, 0.04)",
      boxSizing: "border-box",
    },
    titleWrap: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      marginBottom: 14,
    },
    title: {
      margin: 0,
      color: "#0f172a",
      fontSize: 19,
      fontWeight: 700,
    },
    totalText: {
      color: "#64748b",
      fontSize: 16,
      fontWeight: 700,
      whiteSpace: "nowrap",
    },
    groupButtons: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 18,
    },
    groupButton: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "9px 13px",
      borderRadius: 999,
      border: "1px solid rgba(226, 232, 240, 0.95)",
      background: "#ffffff",
      color: "#475569",
      cursor: "pointer",
      fontSize: 13,
      fontWeight: 800,
      fontFamily: "inherit",
    },
    groupButtonActive: {
      border: "1px solid rgba(99, 102, 241, 0.4)",
      background: "#312e81",
      color: "#ffffff",
      boxShadow: "0 8px 20px rgba(49, 46, 129, 0.18)",
    },
    groupCount: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 22,
      height: 22,
      padding: "0 7px",
      borderRadius: 999,
      fontSize: 13,
      fontWeight: 800,
      background: "rgba(148, 163, 184, 0.16)",
      boxSizing: "border-box",
    },
    groupCountActive: {
      background: "rgba(255, 255, 255, 0.2)",
      color: "#ffffff",
    },
    stackArea: {
      display: "grid",
      gap: 16,
      opacity: isListVisible ? 1 : 0,
      transform: isListVisible ? "translateY(0)" : "translateY(8px)",
      transition: "opacity 220ms ease, transform 220ms ease",
    },
    section: {
      display: "grid",
      gap: 12,
    },
    sectionHeader: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      padding: "0 0 8px",
      border: 0,
      borderBottom: "1px solid rgba(226, 232, 240, 0.92)",
      background: "transparent",
      cursor: "pointer",
      textAlign: "left",
      fontFamily: "inherit",
    },
    sectionHeaderLeft: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      minWidth: 0,
    },
    sectionTitle: {
      margin: 0,
      color: "#1f2937",
      fontSize: 16,
      fontWeight: 800,
    },
    toggleText: {
      color: "#312e81",
      fontSize: 12,
      fontWeight: 900,
      whiteSpace: "nowrap",
    },
    sectionMeta: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      color: "#64748b",
      fontSize: 13,
      fontWeight: 800,
      whiteSpace: "nowrap",
    },
    sectionBody: {
      display: "grid",
      gap: 14,
      animation: "fadeInSection 220ms ease",
    },
    techGrid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "repeat(2, minmax(0, 1fr))"
        : "repeat(2, minmax(0, 1fr))",
      gap: 14,
    },
    techItem: {
      display: "grid",
      gap: 10,
      minHeight: 112,
      padding: "15px 17px 13px",
      borderRadius: 14,
      background: "#f8fafc",
      border: "1px solid rgba(226, 232, 240, 0.95)",
      boxSizing: "border-box",
    },
    techHeader: {
      display: "grid",
      gridTemplateColumns: "52px 1fr",
      alignItems: "start",
      gap: 13,
    },
    iconBox: {
      width: 52,
      height: 52,
      display: "grid",
      placeItems: "center",
      borderRadius: 12,
      boxShadow: "0 8px 18px rgba(15, 23, 42, 0.06)",
      background: "#ffffff",
      border: "1px solid rgba(226, 232, 240, 0.95)",
      overflow: "hidden",
      flexShrink: 0,
      boxSizing: "border-box",
    },
    assetIcon: {
      width: 34,
      height: 34,
      objectFit: "contain",
      display: "block",
    },
    infoWrap: {
      minWidth: 0,
      paddingTop: 2,
    },
    techName: {
      color: "#1f2937",
      fontSize: 15,
      lineHeight: 1.25,
      fontWeight: 800,
      marginBottom: 3,
    },
    metaText: {
      color: "#64748b",
      fontSize: 13,
      lineHeight: 1.35,
    },
    badgeWrap: {
      display: "flex",
      flexWrap: "nowrap",
      alignItems: "center",
      gap: 6,
      marginTop: 2,
      paddingLeft: 65,
      overflow: "hidden",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      padding: "6px 9px",
      borderRadius: 8,
      fontSize: 11,
      fontWeight: 800,
      lineHeight: 1,
      border: "1px solid transparent",
      boxSizing: "border-box",
      whiteSpace: "nowrap",
    },
    emptyState: {
      padding: 18,
      borderRadius: 14,
      background: "#f8fafc",
      border: "1px dashed rgba(148, 163, 184, 0.75)",
      color: "#64748b",
      fontSize: 15,
      textAlign: "center",
      gridColumn: "1 / -1",
    },
  };

  const renderTechItem = (item) => {
    const IconComponent = reactIconMap[item.iconKey];
    const assetIcon = assetIconMap[item.iconKey];

    return (
      <div
        style={styles.techItem}
        key={`${item.group}-${item.subcategory}-${item.name}`}
      >
        <div style={styles.techHeader}>
          <div
            style={{
              ...styles.iconBox,
              color: item.color || "#2563eb",
            }}
          >
            {assetIcon ? (
              <img src={assetIcon} alt={item.name} style={styles.assetIcon} />
            ) : IconComponent ? (
              <IconComponent size={30} />
            ) : null}
          </div>

          <div style={styles.infoWrap}>
            <div style={styles.techName}>{item.name}</div>
            {item.experience && (
              <div style={styles.metaText}>{item.experience}</div>
            )}
          </div>
        </div>

        {item.badges?.length > 0 && (
          <div style={styles.badgeWrap}>
            {item.badges.map((badge) => {
              const badgeConfig = getBadgeConfig(badge);
              const BadgeIcon = badgeConfig.icon;

              return (
                <span
                  key={badge}
                  style={{
                    ...styles.badge,
                    color: badgeConfig.color,
                    background: badgeConfig.background,
                    borderColor: badgeConfig.border,
                  }}
                >
                  <BadgeIcon size={14} />
                  <span>{badge}</span>
                </span>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <article style={styles.panelCard}>
      <div style={styles.titleWrap}>
        <h3 style={styles.title}>Tech Stack</h3>
        <span style={styles.totalText}>{filteredTechStack.length} Skills</span>
      </div>

      <div style={styles.groupButtons}>
        {visibleTechStackGroups.map((group) => {
          const isActive = activeGroup === group.key;

          return (
            <button
              key={group.key}
              type="button"
              onClick={() => setActiveGroup(group.key)}
              style={{
                ...styles.groupButton,
                ...(isActive ? styles.groupButtonActive : {}),
              }}
            >
              <span>{group.label}</span>
              <span
                style={{
                  ...styles.groupCount,
                  ...(isActive ? styles.groupCountActive : {}),
                }}
              >
                {getGroupCount(group.key)}
              </span>
            </button>
          );
        })}
      </div>

      <div style={styles.stackArea}>
        {filteredTechStack.length === 0 ? (
          <div style={styles.emptyState}>
            Tidak ada tech stack untuk kategori ini.
          </div>
        ) : (
          groupedTechStack.map((group) => {
            const isOpen = Boolean(openSections[group.title]);

            return (
              <section key={group.title} style={styles.section}>
                <button
                  type="button"
                  onClick={() => handleToggleSection(group.title)}
                  style={styles.sectionHeader}
                >
                  <div style={styles.sectionHeaderLeft}>
                    <h4 style={styles.sectionTitle}>{group.title}</h4>
                    <span style={styles.toggleText}>
                      [{isOpen ? "hide" : "show"}]
                    </span>
                  </div>

                  <span style={styles.sectionMeta}>
                    {group.items.length} Skills
                  </span>
                </button>

                {isOpen && (
                  <div style={styles.sectionBody}>
                    <div style={styles.techGrid}>
                      {group.items.map(renderTechItem)}
                    </div>
                  </div>
                )}
              </section>
            );
          })
        )}
      </div>
    </article>
  );
}
