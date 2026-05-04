import totalAppsIcon from "../assets/metrics/totalapps.png";
import teamsLogoIcon from "../assets/metrics/teamslogo.png";
import codeIssuesIcon from "../assets/metrics/codeissues.png";
import fasterBuildTimeIcon from "../assets/metrics/fasterbuildtime.png";
import feIssuesIcon from "../assets/metrics/feissues.png";
import banksIcon from "../assets/metrics/banksicon.png";

const metricIcons = {
  projects: totalAppsIcon,
  team: teamsLogoIcon,
  "tech-debt": codeIssuesIcon,
  "build-time": fasterBuildTimeIcon,
  "code-issues": feIssuesIcon,
  banking: banksIcon,
};

const metricThemes = {
  projects: "#2563eb",
  team: "#0f9f9a",
  "tech-debt": "#2563eb",
  "build-time": "#7c3aed",
  "code-issues": "#16a34a",
  banking: "#d97706",
};

export default function MetricCard({ metric, isCentered = false }) {
  const metricIcon = metricIcons[metric.icon] || totalAppsIcon;
  const metricColor = metricThemes[metric.icon] || "#2563eb";

  const styles = {
    metricCard: {
      display: "flex",
      alignItems: "center",
      justifyContent: isCentered ? "center" : "flex-start",
      gap: 18,
      minHeight: 128,
      padding: "22px 20px",
      boxSizing: "border-box",
    },
    metricIconWrap: {
      width: 64,
      height: 64,
      flexShrink: 0,
      display: "grid",
      placeItems: "center",
      borderRadius: 999,
      overflow: "hidden",
      background: "transparent",
      boxSizing: "border-box",
    },
    metricIcon: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      background: "transparent",
    },
    metricContent: {
      minWidth: 0,
      maxWidth: isCentered ? 520 : "none",
    },
    metricValue: {
      marginBottom: 6,
      color: metricColor,
      fontSize: 30,
      fontWeight: 800,
      lineHeight: 1,
    },
    metricTitle: {
      marginBottom: 5,
      color: "#111827",
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.25,
    },
    metricDescription: {
      color: "#64748b",
      fontSize: 14,
      lineHeight: 1.45,
    },
  };

  return (
    <article style={styles.metricCard}>
      <div style={styles.metricIconWrap}>
        <img src={metricIcon} alt={metric.title} style={styles.metricIcon} />
      </div>

      <div style={styles.metricContent}>
        <div style={styles.metricValue}>{metric.value}</div>
        <div style={styles.metricTitle}>{metric.title}</div>
        <div style={styles.metricDescription}>{metric.description}</div>
      </div>
    </article>
  );
}