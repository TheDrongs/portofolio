import { useEffect } from "react";
import ProfileSidebar from "./components/ProfileSidebar";
import HeroSection from "./components/HeroSection";
import ImpactSection from "./components/ImpactSection";
import SummarySection from "./components/SummarySection";
import PortfolioAccordion from "./components/PortfolioAccordion";
import { useBreakpoint } from "./components/useBreakpoint";

export default function App() {
  const { isTablet } = useBreakpoint();

  useEffect(() => {
    document.documentElement.style.margin = "0";
    document.documentElement.style.width = "100%";
    document.documentElement.style.minHeight = "100%";
    document.documentElement.style.fontFamily =
      'Calibri, "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif';
    document.documentElement.style.color = "#111827";
    document.documentElement.style.background = "#f4f6fb";
    document.documentElement.style.fontSynthesis = "none";
    document.documentElement.style.textRendering = "optimizeLegibility";

    document.body.style.margin = "0";
    document.body.style.minWidth = "320px";
    document.body.style.minHeight = "100vh";
    document.body.style.overflowX = "hidden";

    const root = document.getElementById("root");
    if (root) {
      root.style.margin = "0";
      root.style.width = "100%";
      root.style.minHeight = "100%";
    }
  }, []);

  const styles = {
    page: {
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: isTablet ? 10 : 10,
      background:
        "radial-gradient(circle at top right, rgba(139, 92, 246, 0.16), transparent 32%), linear-gradient(135deg, #eef3ff 0%, #ffffff 48%, #f6f0ff 100%)",
      boxSizing: "border-box",
    },
    portfolioShell: {
      width: "min(100%, calc(100vw - 20px))",
      minHeight: "calc(100vh - 20px)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: isTablet ? "1fr" : "250px minmax(0, 1fr)",
      overflow: "hidden",
      border: "1px solid rgba(148, 163, 184, 0.18)",
      borderRadius: 20,
      background: "rgba(255, 255, 255, 0.86)",
      boxShadow: "0 18px 50px rgba(15, 23, 42, 0.08)",
      backdropFilter: "blur(18px)",
      boxSizing: "border-box",
    },
    content: {
      width: "100%",
      maxWidth: "none",
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 18,
      padding: isTablet ? "22px 18px" : "24px 20px",
      boxSizing: "border-box",
    },
  };

  return (
    <main style={styles.page}>
      <section style={styles.portfolioShell}>
        <ProfileSidebar />

        <section style={styles.content}>
          <HeroSection />
          <ImpactSection />
          <SummarySection />
          <PortfolioAccordion />
        </section>
      </section>
    </main>
  );
}
