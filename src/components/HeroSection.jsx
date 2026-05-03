import { hero, profile } from "../data/portofolioData";
import { useBreakpoint } from "./useBreakpoint";

export default function HeroSection() {
  const { isMobile } = useBreakpoint();

  const styles = {
    heroCard: {
      position: "relative",
      overflow: "hidden",
      minHeight: isMobile ? "auto" : 180,
      padding: isMobile ? 20 : 30,
      borderRadius: 22,
      border: "1px solid rgba(226, 232, 240, 0.88)",
      background:
        "radial-gradient(circle at 90% 20%, rgba(139, 92, 246, 0.12), transparent 24%), linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(248, 250, 252, 0.84))",
      boxShadow: "0 10px 28px rgba(15, 23, 42, 0.04)",
      boxSizing: "border-box",
    },
    heroCircle: {
      position: "absolute",
      right: -48,
      top: -62,
      width: 180,
      height: 180,
      borderRadius: 999,
      background: "rgba(167, 139, 250, 0.12)",
      pointerEvents: "none",
    },
    heroCopy: {
      position: "relative",
      zIndex: 1,
      maxWidth: 980,
    },
    eyebrow: {
      display: "inline-flex",
      marginBottom: 10,
      color: "#312e81",
      fontSize: 14,
      fontWeight: 800,
    },
    title: {
      maxWidth: 980,
      margin: 0,
      color: "#0f172a",
      fontSize: isMobile ? 30 : "clamp(30px, 3vw, 48px)",
      lineHeight: 1.16,
      letterSpacing: "-0.045em",
    },
    description: {
      maxWidth: 860,
      margin: "14px 0 0",
      color: "#475569",
      fontSize: isMobile ? 15 : 17,
      lineHeight: 1.65,
    },
    meta: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 18,
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

  return (
    <div style={styles.heroCard}>
      <div style={styles.heroCircle} />

      <div style={styles.heroCopy}>
        <span style={styles.eyebrow}>{hero.eyebrow}</span>

        <h2 style={styles.title}>{hero.title}</h2>

        <p style={styles.description}>{hero.description}</p>

        <div style={styles.meta}>
          <span style={styles.pill}>13+ Years Software Engineering</span>
          <span style={styles.pill}>3+ Years Team & Delivery Leadership</span>
          <span style={styles.pill}>Web, Mobile & Desktop</span>
          <span style={styles.pill}>SaaS & Enterprise Platforms</span>
          <span style={styles.pill}>ISO8583 & EDC Systems</span>
        </div>
      </div>
    </div>
  );
}
