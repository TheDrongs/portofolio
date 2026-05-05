import { useEffect, useMemo, useState } from "react";
import { techStack, techStackGroups } from "../data/portofolioData";
import { useBreakpoint } from "./useBreakpoint";

import {
  getBadgeConfig,
  getTechIconInfo,
  sortByExperience,
} from "./icons/techStackIcons";

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
      padding: isMobile ? 18 : 22,
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
      fontSize: isMobile ? 18 : 19,
      fontWeight: 700,
    },
    totalText: {
      color: "#64748b",
      fontSize: isMobile ? 14 : 16,
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
      padding: isMobile ? "8px 12px" : "9px 13px",
      borderRadius: 999,
      border: "1px solid rgba(226, 232, 240, 0.95)",
      background: "#ffffff",
      color: "#475569",
      cursor: "pointer",
      fontSize: isMobile ? 12 : 13,
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
      minWidth: isMobile ? 20 : 22,
      height: isMobile ? 20 : 22,
      padding: "0 7px",
      borderRadius: 999,
      fontSize: isMobile ? 12 : 13,
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
      fontSize: isMobile ? 15 : 16,
      fontWeight: 800,
      lineHeight: 1.35,
    },
    toggleText: {
      color: "#312e81",
      fontSize: isMobile ? 11 : 12,
      fontWeight: 900,
      whiteSpace: "nowrap",
    },
    sectionMeta: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      color: "#64748b",
      fontSize: isMobile ? 12 : 13,
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
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: isMobile ? 12 : 14,
    },
    techItem: {
      display: "grid",
      gap: isMobile ? 9 : 10,
      minHeight: isMobile ? 118 : 112,
      padding: isMobile ? "13px 12px 12px" : "15px 17px 13px",
      borderRadius: 14,
      background: "#f8fafc",
      border: "1px solid rgba(226, 232, 240, 0.95)",
      boxSizing: "border-box",
      overflow: "visible",
    },
    techHeader: {
      display: "grid",
      gridTemplateColumns: isMobile ? "44px 1fr" : "52px 1fr",
      alignItems: "start",
      gap: isMobile ? 10 : 13,
      minWidth: 0,
    },
    iconBox: {
      width: isMobile ? 44 : 52,
      height: isMobile ? 44 : 52,
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
      width: isMobile ? 28 : 34,
      height: isMobile ? 28 : 34,
      objectFit: "contain",
      display: "block",
    },
    infoWrap: {
      minWidth: 0,
      paddingTop: 2,
    },
    techName: {
      color: "#1f2937",
      fontSize: isMobile ? 14 : 15,
      lineHeight: 1.25,
      fontWeight: 800,
      marginBottom: 3,
      wordBreak: "break-word",
    },
    metaText: {
      color: "#64748b",
      fontSize: isMobile ? 12 : 13,
      lineHeight: 1.35,
    },
    badgeWrap: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: isMobile ? 5 : 6,
      marginTop: 2,
      paddingLeft: isMobile ? 0 : 65,
      overflow: "visible",
      maxWidth: "100%",
      minWidth: 0,
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: isMobile ? 4 : 5,
      minWidth: 0,
      maxWidth: "100%",
      padding: isMobile ? "5px 7px" : "6px 9px",
      borderRadius: 8,
      fontSize: isMobile ? 10 : 11,
      fontWeight: 800,
      lineHeight: 1.1,
      border: "1px solid transparent",
      boxSizing: "border-box",
      whiteSpace: "normal",
      overflow: "visible",
      textOverflow: "clip",
    },
    emptyState: {
      padding: 18,
      borderRadius: 14,
      background: "#f8fafc",
      border: "1px dashed rgba(148, 163, 184, 0.75)",
      color: "#64748b",
      fontSize: isMobile ? 14 : 15,
      textAlign: "center",
      gridColumn: "1 / -1",
    },
  };

  const renderTechItem = (item) => {
    const { IconComponent, assetIcon, color } = getTechIconInfo(item.iconKey);

    return (
      <div
        style={styles.techItem}
        key={`${item.group}-${item.subcategory}-${item.name}`}
      >
        <div style={styles.techHeader}>
          <div
            style={{
              ...styles.iconBox,
              color: item.color || color,
            }}
          >
            {assetIcon ? (
              <img src={assetIcon} alt={item.name} style={styles.assetIcon} />
            ) : IconComponent ? (
              <IconComponent size={isMobile ? 26 : 30} />
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
                  key={`${item.name}-${badge}`}
                  style={{
                    ...styles.badge,
                    color: badgeConfig.color,
                    background: badgeConfig.background,
                    borderColor: badgeConfig.border,
                  }}
                >
                  <BadgeIcon size={isMobile ? 11 : 14} />
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