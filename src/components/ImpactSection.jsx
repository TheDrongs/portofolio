import { metrics } from "../data/portofolioData";
import MetricCard from "./MetricCard";
import { useBreakpoint } from "./useBreakpoint";

export default function ImpactSection() {
  const { isMedium, isMobile } = useBreakpoint();

  const isFiveItemsDesktop = !isMobile && !isMedium && metrics.length === 5;

  const divider = "1px solid rgba(226, 232, 240, 0.92)";

  const getGridColumn = (index) => {
    if (isMobile || isMedium) return undefined;

    if (isFiveItemsDesktop) {
      if (index <= 2) return "span 2";
      if (index === 3) return "1 / span 3";
      if (index === 4) return "4 / span 3";
    }

    return undefined;
  };

  const getBorderRight = (index) => {
    if (isMobile) return 0;

    if (isMedium) {
      return (index + 1) % 2 === 0 ? 0 : divider;
    }

    if (isFiveItemsDesktop) {
      if (index === 2 || index === 4) return 0;
      return divider;
    }

    return (index + 1) % 3 === 0 ? 0 : divider;
  };

  const getBorderBottom = (index) => {
    if (isMobile) {
      return index === metrics.length - 1 ? 0 : divider;
    }

    if (isMedium) {
      const totalRows = Math.ceil(metrics.length / 2);
      const currentRow = Math.floor(index / 2);

      return currentRow === totalRows - 1 ? 0 : divider;
    }

    if (isFiveItemsDesktop) {
      return index <= 2 ? divider : 0;
    }

    const totalRows = Math.ceil(metrics.length / 3);
    const currentRow = Math.floor(index / 3);

    return currentRow === totalRows - 1 ? 0 : divider;
  };

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
        : isFiveItemsDesktop
        ? "repeat(6, minmax(0, 1fr))"
        : "repeat(3, minmax(0, 1fr))",
      border: divider,
      borderRadius: 18,
      overflow: "hidden",
      background: "rgba(255, 255, 255, 0.88)",
      boxShadow: "0 12px 32px rgba(15, 23, 42, 0.04)",
    },
    metricItem: {
      boxSizing: "border-box",
    },
  };

  return (
    <section style={styles.impactSection}>
      <div>
        <span style={styles.sectionHeadingText}>Key Achievements</span>
      </div>

      <div style={styles.metricsGrid}>
        {metrics.map((metric, index) => (
          <div
            key={metric.title}
            style={{
              ...styles.metricItem,
              gridColumn: getGridColumn(index),
              borderRight: getBorderRight(index),
              borderBottom: getBorderBottom(index),
            }}
          >
            <MetricCard
              metric={metric}
              isCentered={isFiveItemsDesktop && index >= 3}
            />
          </div>
        ))}
      </div>
    </section>
  );
}