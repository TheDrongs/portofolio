import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import {
  certifications,
  coreSkills,
  education,
  keyAchievements,
  languages,
  selectedProjects,
  timelineItems,
} from "../data/portofolioData";

import { GroupedTechStackIcons } from "./icons/TechStackIcons";

const projectScreenshotModules = import.meta.glob(
  "../assets/projects/**/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);

const certificateModules = import.meta.glob(
  "../assets/certificates/**/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);

const formatMediaName = (path) => {
  const fileName = path.split("/").pop() || "Screenshot";

  return fileName
    .replace(/\.(png|jpg|jpeg|webp)$/i, "")
    .replace(/[-_]/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .trim();
};

const getProjectScreenshots = (folderName) => {
  if (!folderName) return [];

  return Object.entries(projectScreenshotModules)
    .filter(([path]) => path.includes(`/projects/${folderName}/`))
    .map(([path, src]) => ({
      src,
      label: formatMediaName(path),
    }));
};

const getCertificateMedia = (certificate) => {
  if (!certificate?.certificateFile) return null;

  const matchedCertificate = Object.entries(certificateModules).find(([path]) =>
    path.endsWith(`/certificates/${certificate.certificateFile}`),
  );

  if (!matchedCertificate) return null;

  const [path, src] = matchedCertificate;

  return {
    src,
    label: certificate.title || formatMediaName(path),
  };
};

const getSortedCertifications = () => {
  return [...certifications].sort((firstItem, secondItem) =>
    firstItem.issuedAt.localeCompare(secondItem.issuedAt),
  );
};

export default function AccordionItem({ item, isOpen, isFirst, onClick }) {
  const [activeMedia, setActiveMedia] = useState(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  useEffect(() => {
    if (!activeMedia) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [activeMedia]);

  const openMediaViewer = (title, mediaItems) => {
    setActiveMedia({
      title,
      items: mediaItems,
    });
    setActiveMediaIndex(0);
  };

  const closeMediaViewer = () => {
    setActiveMedia(null);
    setActiveMediaIndex(0);
  };

  const handlePreviousMedia = (event) => {
    event.stopPropagation();

    setActiveMediaIndex((currentIndex) => {
      const totalItems = activeMedia?.items?.length || 0;

      if (totalItems <= 1) return currentIndex;

      return currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
    });
  };

  const handleNextMedia = (event) => {
    event.stopPropagation();

    setActiveMediaIndex((currentIndex) => {
      const totalItems = activeMedia?.items?.length || 0;

      if (totalItems <= 1) return currentIndex;

      return currentIndex === totalItems - 1 ? 0 : currentIndex + 1;
    });
  };

  const styles = {
    accordionItem: {
      borderTop: isFirst ? 0 : "1px solid rgba(226, 232, 240, 0.9)",
      boxSizing: "border-box",
    },
    accordionTrigger: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 18px",
      border: 0,
      color: "#1e1b4b",
      cursor: "pointer",
      background:
        "linear-gradient(90deg, rgba(237, 233, 254, 0.72), rgba(255, 255, 255, 0.9))",
      textAlign: "left",
      fontFamily: "inherit",
    },
    accordionTitle: {
      color: "#1e1b4b",
      fontSize: 18,
      fontWeight: 800,
      lineHeight: 1.25,
    },
    accordionIcon: {
      display: "grid",
      placeItems: "center",
      width: 26,
      height: 26,
      borderRadius: 999,
      color: "#6d28d9",
      background: "#ede9fe",
      border: "1px solid rgba(221, 214, 254, 0.95)",
      fontSize: 16,
      lineHeight: 1,
      flexShrink: 0,
      boxSizing: "border-box",
    },
    accordionContent: {
      padding: "18px 20px 20px",
      color: "#475569",
      background: "#ffffff",
      fontSize: 14,
      lineHeight: 1.5,
      boxSizing: "border-box",
    },
    timeline: {
      display: "grid",
      gap: 0,
    },
    timelineItem: {
      display: "grid",
      gridTemplateColumns: "26px 1fr",
      gap: 14,
      alignItems: "stretch",
    },
    timelineMarker: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100%",
    },
    timelineDot: {
      width: 12,
      height: 12,
      marginTop: 6,
      borderRadius: 999,
      background: "#7c3aed",
      boxShadow: "0 0 0 5px #ede9fe",
      flexShrink: 0,
    },
    timelineLine: {
      width: 2,
      flex: 1,
      marginTop: 8,
      marginBottom: -2,
      background: "rgba(167, 139, 250, 0.55)",
      borderRadius: 999,
    },
    timelineContent: {
      paddingBottom: 24,
    },
    roleText: {
      color: "#111827",
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.35,
    },
    strongText: {
      color: "#111827",
    },
    metaText: {
      display: "block",
      marginTop: 5,
      color: "#64748b",
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.45,
    },
    paragraph: {
      margin: "8px 0 0",
      fontSize: 15,
      lineHeight: 1.6,
      whiteSpace: "pre-line",
    },
    subSection: {
      marginTop: 12,
    },
    subSectionTitle: {
      display: "block",
      marginTop: 10,
      color: "#334155",
      fontSize: 15,
      fontWeight: 800,
      lineHeight: 1.45,
    },
    bulletList: {
      margin: "6px 0 0",
      paddingLeft: 18,
      display: "grid",
      gap: 6,
    },
    bulletItem: {
      color: "#475569",
      fontSize: 14,
      lineHeight: 1.6,
    },
    mediaButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "fit-content",
      marginTop: 14,
      padding: "9px 14px",
      border: "1px solid rgba(99, 102, 241, 0.28)",
      borderRadius: 999,
      background: "#e4e4e4",
      color: "black",
      cursor: "pointer",
      fontSize: 13,
      fontWeight: 800,
      fontFamily: "inherit",
      boxShadow: "0 6px 16px rgba(49, 46, 129, 0.08)",
    },
    modalBackdrop: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9999,
      width: "100vw",
      height: "100dvh",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      background: "rgba(15, 23, 42, 0.55)",
      boxSizing: "border-box",
      overflow: "hidden",
      overscrollBehavior: "contain",
    },
    modalCard: {
      width: "min(1180px, calc(100vw - 48px))",
      maxHeight: "calc(100dvh - 48px)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: 18,
      borderRadius: 18,
      background: "#ffffff",
      border: "1px solid rgba(226, 232, 240, 0.92)",
      boxShadow: "0 24px 80px rgba(15, 23, 42, 0.28)",
      boxSizing: "border-box",
    },
    modalHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      marginBottom: 14,
      flexShrink: 0,
    },
    modalTitle: {
      margin: 0,
      color: "#111827",
      fontSize: 18,
      fontWeight: 800,
      lineHeight: 1.3,
    },
    closeButton: {
      width: 34,
      height: 34,
      display: "grid",
      placeItems: "center",
      border: 0,
      borderRadius: 999,
      color: "#334155",
      background: "#f1f5f9",
      cursor: "pointer",
      fontSize: 18,
      fontWeight: 900,
      fontFamily: "inherit",
      flexShrink: 0,
    },
    mediaViewer: {
      position: "relative",
      width: "100%",
      height: "min(74dvh, 720px)",
      minHeight: 360,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px 64px 54px",
      borderRadius: 16,
      background: "#f8fafc",
      border: "1px solid rgba(226, 232, 240, 0.92)",
      boxSizing: "border-box",
      overflow: "hidden",
    },
    mediaImage: {
      maxWidth: "100%",
      maxHeight: "100%",
      width: "auto",
      height: "auto",
      display: "block",
      objectFit: "contain",
      margin: "0 auto",
      borderRadius: 12,
      boxSizing: "border-box",
    },
    mediaNavButton: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 42,
      height: 42,
      display: "grid",
      placeItems: "center",
      border: "1px solid rgba(99, 102, 241, 0.24)",
      borderRadius: 999,
      color: "#312e81",
      background: "#ffffff",
      cursor: "pointer",
      fontSize: 24,
      fontWeight: 900,
      fontFamily: "inherit",
      boxShadow: "0 10px 24px rgba(15, 23, 42, 0.14)",
      zIndex: 2,
    },
    mediaPrevButton: {
      left: 14,
    },
    mediaNextButton: {
      right: 14,
    },
    mediaLabel: {
      position: "absolute",
      left: 16,
      right: 16,
      bottom: 14,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      color: "#475569",
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 1.4,
      textAlign: "center",
    },
    mediaCounter: {
      color: "#64748b",
      fontSize: 12,
      fontWeight: 800,
    },
    list: {
      display: "grid",
      gap: 10,
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    listItem: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: 9,
    },
    checkIcon: {
      color: "#7c3aed",
      fontWeight: 900,
    },
    projectList: {
      display: "grid",
      gap: 14,
    },
    projectCard: {
      padding: 14,
      borderRadius: 14,
      background: "#f8fafc",
      border: "1px solid rgba(226, 232, 240, 0.92)",
      boxSizing: "border-box",
    },
    skillList: {
      display: "grid",
      gap: 12,
      fontSize: 16,
    },
    skillCard: {
      padding: 14,
      borderRadius: 14,
      background: "#f8fafc",
      border: "1px solid rgba(226, 232, 240, 0.92)",
      boxSizing: "border-box",
    },
    educationCard: {
      display: "grid",
      gap: 12,
      fontSize: 16,
    },
    pillWrap: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 8,
    },
    pill: {
      padding: "8px 11px",
      borderRadius: 999,
      color: "#312e81",
      background: "#ede9fe",
      fontSize: 14,
      fontWeight: 700,
    },
    certificationList: {
      display: "grid",
      gap: 18,
      marginTop: 14,
    },
    certificationItem: {
      paddingBottom: 16,
      borderBottom: "1px solid rgba(226, 232, 240, 0.92)",
    },
    certificationItemLast: {
      paddingBottom: 0,
      marginBottom: 0,
      borderBottom: "none",
    },
    certificationHeader: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexWrap: "wrap",
    },
    certificationTitle: {
      color: "#111827",
      fontSize: 15,
      fontWeight: 800,
      lineHeight: 1.4,
    },
    inlineCertificateLink: {
      padding: 0,
      border: 0,
      background: "transparent",
      color: "#4f46e5",
      cursor: "pointer",
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 1.4,
      fontFamily: "inherit",
      textDecoration: "none",
    },
    certificationIssuer: {
      display: "block",
      marginTop: 6,
      color: "#475569",
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1.45,
    },
    certificationMeta: {
      display: "block",
      marginTop: 4,
      color: "#64748b",
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 1.45,
    },
    certificationCredential: {
      margin: "6px 0 0",
      color: "#475569",
      fontSize: 13,
      lineHeight: 1.5,
    },
    certificationSkillWrap: {
      display: "flex",
      flexWrap: "wrap",
      gap: 7,
      marginTop: 8,
    },
    certificationSkillPill: {
      padding: "6px 9px",
      borderRadius: 999,
      color: "#312e81",
      background: "#ede9fe",
      fontSize: 12,
      fontWeight: 700,
    },
  };

  const renderContent = () => {
    if (item.type === "timeline") {
      return (
        <div style={styles.timeline}>
          {timelineItems.map((timeline, index) => {
            const isLastItem = index === timelineItems.length - 1;

            return (
              <div
                key={`${timeline.role}-${timeline.period}`}
                style={styles.timelineItem}
              >
                <div style={styles.timelineMarker}>
                  <span style={styles.timelineDot} />
                  {!isLastItem && <span style={styles.timelineLine} />}
                </div>

                <div style={styles.timelineContent}>
                  <strong style={styles.roleText}>{timeline.role}</strong>

                  <span style={styles.metaText}>
                    {timeline.period}
                    {timeline.duration ? ` · ${timeline.duration}` : ""}
                  </span>

                  <span style={styles.metaText}>
                    {timeline.company}
                    {timeline.employmentType
                      ? ` · ${timeline.employmentType}`
                      : ""}
                  </span>

                  <span style={styles.metaText}>{timeline.location}</span>

                  <p style={styles.paragraph}>{timeline.description}</p>

                  {timeline.notableProjects?.length > 0 && (
                    <div style={styles.subSection}>
                      <span style={styles.subSectionTitle}>
                        {timeline.notableProjectsTitle || "Notable Projects"}
                      </span>
                      <ul style={styles.bulletList}>
                        {timeline.notableProjects.map((project) => (
                          <li key={project} style={styles.bulletItem}>
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {timeline.techStackIconKeys?.length > 0 && (
                    <div style={styles.subSection}>
                      <span style={styles.subSectionTitle}>Tech Stack(s)</span>
                      <GroupedTechStackIcons iconKeys={timeline.techStackIconKeys} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    if (item.type === "skills") {
      return (
        <div style={styles.skillList}>
          {coreSkills.map((skill) => (
            <div key={skill.category} style={styles.skillCard}>
              <strong style={styles.strongText}>{skill.category}</strong>
              <p style={styles.paragraph}>{skill.items}</p>
            </div>
          ))}
        </div>
      );
    }

    if (item.type === "projects") {
      return (
        <div style={styles.projectList}>
          {selectedProjects.map((project) => {
            const screenshots = getProjectScreenshots(project.screenshotFolder);
            const hasScreenshots = screenshots.length > 0;

            return (
              <div key={project.title} style={styles.projectCard}>
                <strong style={styles.strongText}>{project.title}</strong>
                <span style={styles.metaText}>{project.period}</span>
                <p style={styles.paragraph}>{project.description}</p>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      marginTop: 8,
                      color: "#2563eb",
                      fontSize: 14,
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    Visit Project
                  </a>
                )}

                {project.techStackIconKeys?.length > 0 && (
                  <div style={styles.subSection}>
                    <span style={styles.subSectionTitle}>Tech Stack(s)</span>
                    <GroupedTechStackIcons iconKeys={project.techStackIconKeys} />
                  </div>
                )}

                {hasScreenshots && (
                  <button
                    type="button"
                    style={styles.mediaButton}
                    onClick={() => openMediaViewer(project.title, screenshots)}
                  >
                    View Screenshot
                  </button>
                )}
              </div>
            );
          })}
        </div>
      );
    }

    if (item.type === "achievements") {
      return (
        <ul style={styles.list}>
          {keyAchievements.map((achievement) => (
            <li key={achievement} style={styles.listItem}>
              <span style={styles.checkIcon}>✓</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      );
    }

    if (item.type === "education-language") {
      const sortedCertifications = getSortedCertifications();

      return (
        <div style={styles.educationCard}>
          <div style={styles.projectCard}>
            <strong style={styles.strongText}>{education.school}</strong>
            <span style={styles.metaText}>{education.degree}</span>
            <p style={styles.paragraph}>{education.period}</p>
          </div>

          <div style={styles.projectCard}>
            <strong style={styles.strongText}>Languages</strong>

            <div style={styles.pillWrap}>
              {languages.map((language) => (
                <span key={language} style={styles.pill}>
                  {language}
                </span>
              ))}
            </div>
          </div>

          {sortedCertifications.length > 0 && (
            <div style={styles.projectCard}>
              <strong style={styles.strongText}>Certifications</strong>

              <div style={styles.certificationList}>
                {sortedCertifications.map((certificate, index) => {
                  const certificateMedia = getCertificateMedia(certificate);
                  const isLastItem = index === sortedCertifications.length - 1;

                  return (
                    <div
                      key={`${certificate.title}-${certificate.issuedAt}`}
                      style={{
                        ...styles.certificationItem,
                        ...(isLastItem ? styles.certificationItemLast : {}),
                      }}
                    >
                      <div style={styles.certificationHeader}>
                        <strong style={styles.certificationTitle}>
                          {certificate.title}
                        </strong>

                        {certificateMedia && (
                          <button
                            type="button"
                            style={styles.inlineCertificateLink}
                            onClick={() =>
                              openMediaViewer(certificate.title, [
                                certificateMedia,
                              ])
                            }
                          >
                            [Show Certificate]
                          </button>
                        )}
                      </div>

                      <span style={styles.certificationIssuer}>
                        {certificate.issuer}
                      </span>

                      <span style={styles.certificationMeta}>
                        {certificate.issued}
                      </span>

                      {certificate.credentialId && (
                        <p style={styles.certificationCredential}>
                          Credential ID: {certificate.credentialId}
                        </p>
                      )}

                      {certificate.skills?.length > 0 && (
                        <div style={styles.certificationSkillWrap}>
                          {certificate.skills.map((skill) => (
                            <span
                              key={`${certificate.title}-${skill}`}
                              style={styles.certificationSkillPill}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  const currentMedia = activeMedia?.items?.[activeMediaIndex] || null;
  const hasMultipleMedia = (activeMedia?.items?.length || 0) > 1;

  const mediaModal =
    activeMedia && currentMedia ? (
      <div style={styles.modalBackdrop} onClick={closeMediaViewer}>
        <div
          style={styles.modalCard}
          onClick={(event) => event.stopPropagation()}
        >
          <div style={styles.modalHeader}>
            <h3 style={styles.modalTitle}>{activeMedia.title}</h3>

            <button
              type="button"
              style={styles.closeButton}
              onClick={closeMediaViewer}
            >
              ×
            </button>
          </div>

          <div style={styles.mediaViewer}>
            {hasMultipleMedia && (
              <button
                type="button"
                style={{
                  ...styles.mediaNavButton,
                  ...styles.mediaPrevButton,
                }}
                onClick={handlePreviousMedia}
                aria-label="Previous item"
              >
                ‹
              </button>
            )}

            <img
              src={currentMedia.src}
              alt={currentMedia.label}
              style={styles.mediaImage}
            />

            {hasMultipleMedia && (
              <button
                type="button"
                style={{
                  ...styles.mediaNavButton,
                  ...styles.mediaNextButton,
                }}
                onClick={handleNextMedia}
                aria-label="Next item"
              >
                ›
              </button>
            )}

            <span style={styles.mediaLabel}>
              <span>{currentMedia.label}</span>

              {hasMultipleMedia && (
                <span style={styles.mediaCounter}>
                  {activeMediaIndex + 1} / {activeMedia.items.length}
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    ) : null;

  return (
    <div style={styles.accordionItem}>
      <button style={styles.accordionTrigger} onClick={onClick}>
        <span style={styles.accordionTitle}>{item.title}</span>
        <span style={styles.accordionIcon}>{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && <div style={styles.accordionContent}>{renderContent()}</div>}

      {typeof document !== "undefined" && mediaModal
        ? createPortal(mediaModal, document.body)
        : null}
    </div>
  );
}