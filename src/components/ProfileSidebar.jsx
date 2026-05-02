import { profile } from "../data/portofolioData";
import { useBreakpoint } from "./useBreakpoint";

export default function ProfileSidebar() {
  const { isTablet, isMobile } = useBreakpoint();

  const styles = {
    sidebar: {
      padding: isMobile ? 10 : isTablet ? 14 : "18px 14px",
      background: "#f8fafc",
      borderRight: isTablet ? "0" : "1px solid rgba(226, 232, 240, 0.92)",
      boxSizing: "border-box",
    },
    sidebarInner: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      padding: isMobile ? 16 : isTablet ? 18 : "18px 14px",
      borderRadius: 16,
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(249, 250, 251, 0.98))",
      border: "1px solid rgba(226, 232, 240, 0.85)",
      boxSizing: "border-box",
    },
    profileBlock: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    profileImageWrap: {
      width: isMobile ? 96 : 110,
      height: isMobile ? 96 : 110,
      marginBottom: 18,
      overflow: "hidden",
      borderRadius: 999,
      background: "#eef2f7",
      border: "1px solid rgba(226, 232, 240, 0.95)",
      boxSizing: "border-box",
    },
    profileImage: {
      width: "100%",
      height: "100%",
      display: "block",
      objectFit: "cover",
    },
    sidebarName: {
      margin: 0,
      color: "#111827",
      fontSize: isMobile ? 20 : 22,
      fontWeight: 700,
      lineHeight: 1.15,
      letterSpacing: "-0.03em",
    },
    sidebarRole: {
      margin: "6px 0 0",
      color: "#4b5563",
      fontSize: 13,
      fontWeight: 600,
      lineHeight: 1.45,
    },
    sidebarSummary: {
      margin: "18px 0 0",
      color: "#6b7280",
      fontSize: 13,
      lineHeight: 1.65,
    },
    connectSection: {
      display: "grid",
      gap: 14,
      marginTop: 28,
    },
    connectLink: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      color: "#1f2937",
      textDecoration: "none",
      fontSize: 13,
      fontWeight: 500,
      wordBreak: "break-word",
    },
    connectIcon: {
      width: 18,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#111827",
      fontSize: 12,
      fontWeight: 700,
      flexShrink: 0,
    },
    downloadButton: {
      width: "100%",
      marginTop: "auto",
      padding: "13px 16px",
      border: 0,
      borderRadius: 999,
      color: "#ffffff",
      cursor: "pointer",
      fontWeight: 700,
      background: "linear-gradient(135deg, #111827, #1e3a8a)",
      boxShadow: "0 12px 28px rgba(30, 58, 138, 0.18)",
      fontFamily: "inherit",
    },
  };

  return (
    <aside style={styles.sidebar}>
      <div style={styles.sidebarInner}>
        <div style={styles.profileBlock}>
          <div style={styles.profileImageWrap}>
            <img
              src="/profile-photo.jpg"
              alt={profile.name}
              style={styles.profileImage}
            />
          </div>

          <h1 style={styles.sidebarName}>{profile.name}</h1>
          <p style={styles.sidebarRole}>{profile.role}</p>

          <p style={styles.sidebarSummary}>{profile.summary}</p>
        </div>

        <div style={styles.connectSection}>
          <a href={`mailto:${profile.email}`} style={styles.connectLink}>
            <span style={styles.connectIcon}>✉</span>
            <span>{profile.email}</span>
          </a>

          <a href={`tel:${profile.phone}`} style={styles.connectLink}>
            <span style={styles.connectIcon}>☎</span>
            <span>{profile.phone}</span>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            style={styles.connectLink}
          >
            <span style={styles.connectIcon}>in</span>
            <span>LinkedIn</span>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            style={styles.connectLink}
          >
            <span style={styles.connectIcon}>◔</span>
            <span>GitHub</span>
          </a>
        </div>

        <button style={styles.downloadButton}>Download CV</button>
      </div>
    </aside>
  );
}
