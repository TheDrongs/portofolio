import { metrics } from "../data/portofolioData";
import MetricCard from "./MetricCard";
import { useBreakpoint } from "./useBreakpoint";

export default function ImpactSection() {
  const { isMedium, isMobile } = useBreakpoint();

  const styles = {
    impactSection: {
      display: "grid",
      gap: 10,
    },
    sectionHeadingText: {
      color: "#0f172a",
      fontSize: 16,
      fontWeight: 800,
    },
    metricsGrid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : isMedium
          ? "repeat(2, minmax(0, 1fr))"
          : "repeat(3, minmax(0, 1fr))",
      border: "1px solid rgba(226, 232, 240, 0.92)",
      borderRadius: 18,
      overflow: "hidden",
      background: "rgba(255, 255, 255, 0.88)",
      boxShadow: "0 12px 32px rgba(15, 23, 42, 0.04)",
    },
  };

  return (
    <section style={styles.impactSection}>
      <div>
        <span style={styles.sectionHeadingText}>Key Impact</span>
      </div>

      <div style={styles.metricsGrid}>
        {metrics.map((metric, index) => (
          <MetricCard
            key={metric.title}
            metric={metric}
            index={index}
            total={metrics.length}
          />
        ))}
      </div>
    </section>
  );
}
