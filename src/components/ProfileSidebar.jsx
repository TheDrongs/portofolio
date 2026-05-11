import { useEffect, useRef, useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { profile } from "../data/portofolioData";
import { useBreakpoint } from "./useBreakpoint";

export default function ProfileSidebar() {
  const { isTablet, isMobile } = useBreakpoint();
  const [downloadCooldown, setDownloadCooldown] = useState(0);
  const [isCvMenuOpen, setIsCvMenuOpen] = useState(false);
  
  const cvMenuRef = useRef(null);
  const basePath = import.meta.env.BASE_URL;
  const profilePhotoUrl = `${basePath}pas-photo.png`;

  const cvOptions = [
    {
      label: "CV ATS",
      description: "ATS Version",
      url: `${basePath}documents/CV_Andri-Pramuji-ATS.pdf`,
      downloadName: "Andri-Pramuji-CV-ATS.pdf",
    },
    {
      label: "CV Visual",
      description: "CV Visual Version",
      url: `${basePath}documents/CV_Andri-Pramuji-Visual.pdf`,
      downloadName: "Andri-Pramuji-CV-Visual.pdf",
    },
  ];

  const isDownloadDisabled = downloadCooldown > 0;

  useEffect(() => {
    if (downloadCooldown <= 0) return;

    const timer = setInterval(() => {
      setDownloadCooldown((currentCooldown) => {
        if (currentCooldown <= 1) return 0;
        return currentCooldown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [downloadCooldown]);

  useEffect(() => {
    if (!isCvMenuOpen) return;

    const handleClickOutside = (event) => {
      if (!cvMenuRef.current) return;

      if (!cvMenuRef.current.contains(event.target)) {
        setIsCvMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsCvMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isCvMenuOpen]);

  const handleDownloadButtonClick = () => {
    if (isDownloadDisabled) return;

    setIsCvMenuOpen((currentValue) => !currentValue);
  };

  const handleDownloadOptionClick = () => {
    setDownloadCooldown(15);
    setIsCvMenuOpen(false);
  };

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
      fontSize: 15,
      lineHeight: 1.7,
    },
    connectSection: {
      display: "grid",
      gap: 14,
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
      width: 28,
      height: 28,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#111827",
      background: "#ffffff",
      border: "1px solid rgba(226, 232, 240, 0.95)",
      borderRadius: 999,
      boxShadow: "0 6px 14px rgba(15, 23, 42, 0.06)",
      flexShrink: 0,
      fontSize: 14,
      boxSizing: "border-box",
    },
    downloadArea: {
      width: "90%",
      alignSelf: "center",
      position: "relative",
      marginTop: 28,
    },
    downloadButton: {
      width: "100%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      padding: "14px 18px",
      border: 0,
      borderRadius: 999,
      color: "#ffffff",
      cursor: isDownloadDisabled ? "not-allowed" : "pointer",
      fontSize: 14,
      fontWeight: 800,
      textDecoration: "none",
      background: isDownloadDisabled
        ? "linear-gradient(135deg, #64748b, #475569)"
        : "linear-gradient(135deg, #111827, #1e3a8a)",
      boxShadow: isDownloadDisabled
        ? "0 8px 20px rgba(71, 85, 105, 0.14)"
        : "0 12px 28px rgba(30, 58, 138, 0.18)",
      fontFamily: "inherit",
      boxSizing: "border-box",
      opacity: isDownloadDisabled ? 0.82 : 1,
      userSelect: "none",
    },
    cvPopup: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: "calc(100% + 10px)",
      zIndex: 20,
      display: isCvMenuOpen ? "grid" : "none",
      gap: 6,
      padding: 8,
      borderRadius: 14,
      background: "rgba(255, 255, 255, 0.98)",
      border: "1px solid rgba(226, 232, 240, 0.95)",
      boxShadow: "0 18px 40px rgba(15, 23, 42, 0.16)",
      boxSizing: "border-box",
    },
    cvPopupTitle: {
      margin: "2px 4px 4px",
      color: "#64748b",
      fontSize: 15,
      fontWeight: 800,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
    },
    cvOption: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
      padding: "10px 11px",
      borderRadius: 11,
      color: "#111827",
      textDecoration: "none",
      background: "#f8fafc",
      border: "1px solid rgba(226, 232, 240, 0.8)",
      boxSizing: "border-box",
    },
    cvOptionText: {
      display: "grid",
      gap: 2,
    },
    cvOptionLabel: {
      color: "#111827",
      fontSize: 14,
      fontWeight: 800,
      lineHeight: 1.25,
    },
    cvOptionDescription: {
      color: "#64748b",
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1.35,
    },
    cvOptionIcon: {
      width: 24,
      height: 24,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      borderRadius: 999,
      color: "#ffffff",
      background: "#111827",
      fontSize: 12,
      fontWeight: 900,
    },
  };

  return (
    <aside style={styles.sidebar}>
      <div style={styles.sidebarInner}>
        <div style={styles.profileBlock}>
          <div style={styles.profileImageWrap}>
            <img
              src={profilePhotoUrl}
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
            <span style={styles.connectIcon}>
              <FiMail />
            </span>
            <span>{profile.email}</span>
          </a>

          <a href={`tel:${profile.phone}`} style={styles.connectLink}>
            <span style={styles.connectIcon}>
              <FiPhone />
            </span>
            <span>{profile.phone}</span>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            style={styles.connectLink}
          >
            <span style={styles.connectIcon}>
              <FaLinkedinIn />
            </span>
            <span>LinkedIn</span>
          </a>
        </div>

        <div ref={cvMenuRef} style={styles.downloadArea}>
          <div style={styles.cvPopup}>
            <p style={styles.cvPopupTitle}>Choose CV Format</p>

            {cvOptions.map((cvOption) => (
              <a
                key={cvOption.label}
                href={cvOption.url}
                download={cvOption.downloadName}
                onClick={handleDownloadOptionClick}
                style={styles.cvOption}
              >
                <span style={styles.cvOptionText}>
                  <span style={styles.cvOptionLabel}>{cvOption.label}</span>
                  <span style={styles.cvOptionDescription}>
                    {cvOption.description}
                  </span>
                </span>

                <span style={styles.cvOptionIcon}>↓</span>
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={handleDownloadButtonClick}
            disabled={isDownloadDisabled}
            aria-expanded={isCvMenuOpen}
            aria-haspopup="menu"
            style={styles.downloadButton}
          >
            <span>
              {isDownloadDisabled ? `Wait ${downloadCooldown}s` : "Download CV"}
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}