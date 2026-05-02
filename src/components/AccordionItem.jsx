import {
  coreSkills,
  education,
  keyAchievements,
  languages,
  selectedProjects,
  timelineItems,
} from "../data/portofolioData";

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
      padding: "15px 16px",
      border: 0,
      color: "#1e1b4b",
      cursor: "pointer",
      background:
        "linear-gradient(90deg, rgba(237, 233, 254, 0.72), rgba(255, 255, 255, 0.9))",
      fontSize: 14,
      fontWeight: 800,
      textAlign: "left",
      fontFamily: "inherit",
    },
    accordionIcon: {
      display: "grid",
      placeItems: "center",
      width: 24,
      height: 24,
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
      padding: "16px 18px 18px",
      color: "#475569",
      background: "#ffffff",
      fontSize: 14,
      lineHeight: 1.5,
      boxSizing: "border-box",
    },
    timeline: {
      display: "grid",
      gap: 16,
    },
    timelineItem: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: 12,
    },
    timelineDot: {
      width: 11,
      height: 11,
      marginTop: 5,
      borderRadius: 999,
      background: "#7c3aed",
      boxShadow: "0 0 0 5px #ede9fe",
    },
    strongText: {
      color: "#111827",
    },
    metaText: {
      display: "block",
      marginTop: 3,
      color: "#64748b",
      fontSize: 12,
      fontWeight: 700,
    },
    paragraph: {
      margin: "6px 0 0",
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
      fontSize: 12,
      fontWeight: 700,
    },
  };

  const renderContent = () => {
    if (item.type === "timeline") {
      return (
        <div style={styles.timeline}>
          {timelineItems.map((timeline) => (
            <div
              key={`${timeline.role}-${timeline.period}`}
              style={styles.timelineItem}
            >
              <span style={styles.timelineDot} />

              <div>
                <strong style={styles.strongText}>{timeline.role}</strong>
                <span style={styles.metaText}>{timeline.period}</span>
                <span style={styles.metaText}>
                  {timeline.company} | {timeline.location}
                </span>
                <p style={styles.paragraph}>{timeline.description}</p>
              </div>
            </div>
          ))}
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
        <span>{item.title}</span>
        <span style={styles.accordionIcon}>{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && <div style={styles.accordionContent}>{renderContent()}</div>}
    </div>
  );
}
