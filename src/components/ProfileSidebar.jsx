import { profile } from "../data/portofolioData";
import { useBreakpoint } from "./useBreakpoint";

export default function ProfileSidebar() {
  const { isTablet, isMobile } = useBreakpoint();

  const styles = {
    sidebar: {
      position: isTablet ? "relative" : "sticky",
      top: isTablet ? "auto" : 10,
      alignSelf: "start",
      height: isTablet ? "auto" : "calc(100vh - 20px)",
      padding: isMobile ? 10 : isTablet ? 14 : "18px 14px",
      background: "#f8fafc",
      borderRight: isTablet ? "0" : "1px solid rgba(226, 232, 240, 0.92)",
      boxSizing: "border-box",
      overflow: isTablet ? "visible" : "auto",
    },
    sidebarInner: {
      minHeight: isTablet ? "auto" : "100%",
      display: "flex",
      flexDirection: "column",
      padding: isMobile ? 18 : isTablet ? 20 : "20px 16px",
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
      width: isMobile ? 100 : 112,
      height: isMobile ? 100 : 112,
      marginBottom: 20,
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
      fontSize: isMobile ? 22 : 24,
      fontWeight: 800,
      lineHeight: 1.15,
      letterSpacing: "-0.03em",
    },
    sidebarRole: {
      margin: "8px 0 0",
      color: "#374151",
      fontSize: 15,
      fontWeight: 700,
      lineHeight: 1.45,
    },
    sidebarSummary: {
      margin: "22px 0 0",
      color: "#5f6b7a",
      fontSize: 14,
      lineHeight: 1.5,
    },
    connectSection: {
      display: "grid",
      gap: 16,
      marginTop: 30,
    },
    connectLink: {
      display: "inline-flex",
      alignItems: "center",
      gap: 11,
      color: "#111827",
      textDecoration: "none",
      fontSize: 15,
      fontWeight: 500,
      wordBreak: "break-word",
    },
    connectIcon: {
      width: 19,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#111827",
      fontSize: 13,
      fontWeight: 800,
      flexShrink: 0,
    },
    downloadButton: {
      width: "90%",
      alignSelf: "center",
      marginTop: 28,
      padding: "14px 18px",
      border: 0,
      borderRadius: 999,
      color: "#ffffff",
      cursor: "pointer",
      fontSize: 14,
      fontWeight: 800,
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

        <button style={styles.downloadButton}>Download CV ATS</button>
      </div>
    </aside>
  );
}