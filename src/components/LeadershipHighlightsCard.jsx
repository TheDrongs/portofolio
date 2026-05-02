import {
  leadershipHighlights,
  leadershipSkillGroups,
} from "../data/portofolioData";
import { useBreakpoint } from "./useBreakpoint";

import projectManagementIcon from "../assets/projectmanagement.png";
import teamLeadershipIcon from "../assets/teamleadership.png";
import manpowerPlanningIcon from "../assets/manpowerplanning.png";
import techStandardsIcon from "../assets/techStandards.png";
import productOwnershipIcon from "../assets/productownership.png";
import uxIcon from "../assets/UX.png";
import webDevIcon from "../assets/webdev.png";
import appDevIcon from "../assets/appdev.png";
import fullstackIcon from "../assets/fullstack.png";

const leadershipIconMap = {
  projectmanagement: projectManagementIcon,
  teamleadership: teamLeadershipIcon,
  manpowerplanning: manpowerPlanningIcon,
  techStandards: techStandardsIcon,
  productownership: productOwnershipIcon,
  UX: uxIcon,
  webdev: webDevIcon,
  appdev: appDevIcon,
  fullstack: fullstackIcon,
};

export default function LeadershipHighlightsCard() {
  const { isMobile } = useBreakpoint();

  const styles = {
    panelCard: {
      padding: 22,
      border: "1px solid rgba(226, 232, 240, 0.92)",
      borderRadius: 18,
      background: "rgba(255, 255, 255, 0.88)",
      boxShadow: "0 12px 32px rgba(15, 23, 42, 0.04)",
      boxSizing: "border-box",
    },
    title: {
      margin: "0 0 16px",
      color: "#0f172a",
      fontSize: 17,
      fontWeight: 800,
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
      color: "#475569",
      fontSize: 14,
      lineHeight: 1.5,
    },
    checkIcon: {
      color: "#7c3aed",
      fontWeight: 900,
    },
    divider: {
      height: 1,
      margin: "22px 0 0",
      background: "rgba(226, 232, 240, 0.92)",
    },
    section: {
      display: "grid",
      gap: 12,
      marginTop: 22,
    },
    sectionTitle: {
      margin: 0,
      color: "#1f2937",
      fontSize: 15,
      fontWeight: 800,
    },
    skillGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
      gap: 12,
    },
    skillCard: {
      display: "grid",
      gridTemplateColumns: "64px 1fr",
      alignItems: "center",
      gap: 14,
      minHeight: 94,
      padding: "14px 16px",
      borderRadius: 14,
      background: "#f8fafc",
      border: "1px solid rgba(226, 232, 240, 0.95)",
      boxSizing: "border-box",
    },
    iconBox: {
      width: 64,
      height: 64,
      display: "grid",
      placeItems: "center",
      borderRadius: 16,
      background: "#ffffff",
      border: "1px solid rgba(226, 232, 240, 0.95)",
      overflow: "hidden",
      boxSizing: "border-box",
    },
    icon: {
      width: 50,
      height: 50,
      objectFit: "contain",
      display: "block",
    },
    skillInfo: {
      minWidth: 0,
    },
    skillName: {
      margin: 0,
      color: "#1f2937",
      fontSize: 15,
      fontWeight: 800,
      lineHeight: 1.25,
    },
    skillExperience: {
      margin: "4px 0 0",
      color: "#64748b",
      fontSize: 14,
      lineHeight: 1.35,
    },
  };

  return (
    <article style={styles.panelCard}>
      <h3 style={styles.title}>Leadership Highlights</h3>

      <ul style={styles.list}>
        {leadershipHighlights.map((item) => (
          <li key={item} style={styles.listItem}>
            <span style={styles.checkIcon}>✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div style={styles.divider} />

      {leadershipSkillGroups.map((group) => (
        <section key={group.title} style={styles.section}>
          <h4 style={styles.sectionTitle}>{group.title}</h4>

          <div style={styles.skillGrid}>
            {group.items.map((item) => {
              const icon = leadershipIconMap[item.iconKey];

              return (
                <div key={item.name} style={styles.skillCard}>
                  <div style={styles.iconBox}>
                    {icon && (
                      <img src={icon} alt={item.name} style={styles.icon} />
                    )}
                  </div>

                  <div style={styles.skillInfo}>
                    <p style={styles.skillName}>{item.name}</p>
                    <p style={styles.skillExperience}>{item.experience}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </article>
  );
}
