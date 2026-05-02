import MetricIcon from "./MetricIcon";
import { useBreakpoint } from "./useBreakpoint";

export default function MetricCard({ metric, index, total }) {
  const { isMedium, isMobile } = useBreakpoint();

  const columns = isMobile ? 1 : isMedium ? 2 : 3;
  const isLastColumn = (index + 1) % columns === 0;
  const isLastRow = index >= total - columns;

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
      width: 58,
      height: 58,
      flexShrink: 0,
      display: "grid",
      placeItems: "center",
      borderRadius: 999,
      background: "#eef2ff",
      color: "#2563eb",
      border: "1px solid rgba(219, 234, 254, 0.9)",
      boxSizing: "border-box",
    },
    metricContent: {
      minWidth: 0,
    },
    metricValue: {
      marginBottom: 6,
      color: "#2563eb",
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
        <MetricIcon type={metric.icon} />
      </div>

      <div style={styles.metricContent}>
        <div style={styles.metricValue}>{metric.value}</div>
        <div style={styles.metricTitle}>{metric.title}</div>
        <div style={styles.metricDescription}>{metric.description}</div>
      </div>
    </article>
  );
}
