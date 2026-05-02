import LeadershipHighlightsCard from "./LeadershipHighlightsCard";
import TechStackCard from "./TechStackCard";
import { useBreakpoint } from "./useBreakpoint";

export default function SummarySection() {
  const { isMedium } = useBreakpoint();

  const styles = {
    summaryGrid: {
      display: "grid",
      gridTemplateColumns: isMedium ? "1fr" : "1.45fr 0.95fr",
      gap: 18,
    },
  };

  return (
    <section style={styles.summaryGrid}>
      <LeadershipHighlightsCard />
      <TechStackCard />
    </section>
  );
}
