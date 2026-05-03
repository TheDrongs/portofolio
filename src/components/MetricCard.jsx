import MetricIcon from "./MetricIcon";
import { useBreakpoint } from "./useBreakpoint";

const metricThemes = [
  {
    color: "#2563eb",
    bg: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
    border: "rgba(147, 197, 253, 0.55)",
  },
  {
    color: "#0f9f9a",
    bg: "linear-gradient(135deg, #ecfeff 0%, #ccfbf1 100%)",
    border: "rgba(94, 234, 212, 0.45)",
  },
  {
    color: "#2f7ed8",
    bg: "linear-gradient(135deg, #f0f9ff 0%, #dbeafe 100%)",
    border: "rgba(125, 211, 252, 0.45)",
  },
  {
    color: "#7c3aed",
    bg: "linear-gradient(135deg, #faf5ff 0%, #ede9fe 100%)",
    border: "rgba(196, 181, 253, 0.5)",
  },
  {
    color: "#2f9e44",
    bg: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
    border: "rgba(134, 239, 172, 0.5)",
  },
  {
    color: "#d97706",
    bg: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
    border: "rgba(251, 191, 36, 0.45)",
  },
];

export default function MetricCard({ metric, index, total }) {
  const { isMedium, isMobile } = useBreakpoint();

  const columns = isMobile ? 1 : isMedium ? 2 : 3;
  const isLastColumn = (index + 1) % columns === 0;
  const isLastRow = index >= total - columns;

  const theme = metricThemes[index] || metricThemes[0];

  const styles = {
    metricCard: {
      display: "flex",
      alignItems: "center",
      gap: 18,
      minHeight: 118,
      padding: "20px 18px",
      borderRight: isLastColumn ? 0 : "1px solid rgba(226, 232, 240, 0.92)",
      borderBottom: isLastRow ? 0 : "1px solid rgba(226, 232, 240, 0.92)",
      boxSizing: "border-box",
    },
    metricIconWrap: {
      width: 72,
      height: 72,
      flexShrink: 0,
      display: "grid",
      placeItems: "center",
      borderRadius: 999,
      background: theme.bg,
      color: theme.color,
      border: `1px solid ${theme.border}`,
      boxSizing: "border-box",
    },
    metricContent: {
      minWidth: 0,
    },
    metricValue: {
      marginBottom: 6,
      color: theme.color,
      fontSize: 28,
      fontWeight: 800,
      lineHeight: 1,
    },
    metricTitle: {
      marginBottom: 4,
      color: "#111827",
      fontSize: 15,
      fontWeight: 700,
    },
    metricDescription: {
      color: "#64748b",
      fontSize: 12,
      lineHeight: 1.45,
    },
  };

  return (
    <article style={styles.metricCard}>
      <div style={styles.metricIconWrap}>
        <MetricIcon type={metric.icon} index={index} />
      </div>

      <div style={styles.metricContent}>
        <div style={styles.metricValue}>{metric.value}</div>
        <div style={styles.metricTitle}>{metric.title}</div>
        <div style={styles.metricDescription}>{metric.description}</div>
      </div>
    </article>
  );
}
