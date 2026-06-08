import { createElement, useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiCode,
  FiDownload,
  FiFileText,
  FiGlobe,
  FiLinkedin,
  FiMail,
  FiMaximize2,
  FiMonitor,
  FiSmartphone,
  FiTarget,
  FiUsers,
  FiX,
} from "react-icons/fi";
import { FaAndroid } from "react-icons/fa";
import { TbCloud, TbDeviceDesktopAnalytics, TbDeviceMobileCog } from "react-icons/tb";
import {
  certifications,
  education,
  languages,
  leadershipHighlights,
  leadershipSkillGroups,
  metrics,
  profile,
  selectedProjects,
  techStack,
  techStackGroups,
  timelineItems,
} from "./data/portofolioData";
import {
  getBadgeConfig,
  getTechIconInfo,
  sortByExperience,
  TechIcon,
} from "./components/icons/techStackIcons";
import MetricIcon from "./components/MetricIcon";

import projectManagementIcon from "./assets/projectmanagement.png";
import teamLeadershipIcon from "./assets/teamleadership.png";
import manpowerPlanningIcon from "./assets/manpowerplanning.png";
import techStandardsIcon from "./assets/techStandards.png";
import productOwnershipIcon from "./assets/productownership.png";
import uxIcon from "./assets/UX.png";
import webDevIcon from "./assets/webdev.png";
import appDevIcon from "./assets/appdev.png";
import fullstackIcon from "./assets/fullstack.png";
import mobileDevIcon from "./assets/mobiledev.png";
import growthRoadBackground from "./assets/growth-road-bg.svg";
import arahnetsLogo from "./assets/logo/arahnets.png";
import nabatiLogo from "./assets/logo/nabatilogo.png";
import nellyLogo from "./assets/logo/nelly.jpg";

const projectImages = import.meta.glob("./assets/projects/**/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
});

const certificateImages = import.meta.glob("./assets/certificates/**/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
});

const cleanText = (text = "") =>
  String(text)
    .replaceAll("â€“", "-")
    .replaceAll("â€¢", "•")
    .replaceAll("â€™", "'")
    .replaceAll("â€œ", '"')
    .replaceAll("â€", '"')
    .replaceAll(/\s+/g, " ")
    .trim();

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`;

const getProjectImage = (folder) => {
  if (!folder) return null;

  const match = Object.entries(projectImages).find(([path]) =>
    path.includes(`/projects/${folder}/`),
  );

  return match?.[1] || null;
};

const getProjectScreenshots = (folder) => {
  if (!folder) return [];

  return Object.entries(projectImages)
    .filter(([path]) => path.includes(`/projects/${folder}/`))
    .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
    .map(([, image]) => image);
};

const getCertificateImage = (fileName) => {
  if (!fileName) return null;

  const match = Object.entries(certificateImages).find(([path]) =>
    path.endsWith(`/certificates/${fileName}`),
  );

  return match?.[1] || null;
};

const getProjectFinishedTime = (period = "") => {
  if (period.includes("Present")) return Number.MAX_SAFE_INTEGER;

  const finishedDateText = period.split("–").pop()?.trim() || period;
  const finishedDate = new Date(`1 ${finishedDateText}`);

  return Number.isNaN(finishedDate.getTime()) ? 0 : finishedDate.getTime();
};

const platformCards = [
  { label: "SaaS", icon: TbCloud },
  { label: "ERP", icon: TbDeviceDesktopAnalytics },
  { label: "Mobile", icon: FiSmartphone },
  { label: "Android", icon: FaAndroid },
  { label: "EDC", icon: TbDeviceMobileCog },
  { label: "Desktop", icon: FiMonitor },
];

const growthStages = [
  {
    title: "ICT Staff & Administration",
    icon: FiMonitor,
    where: "PT. Pelayaran Nelly Dwi Putri Tbk.",
    points: [
      "Supported IT infrastructure and operations",
      "Managed internal systems and devices",
      "Built early web and automated backup solutions",
    ],
    focus: "Foundation & Operations",
    story:
      "Started close to day-to-day operations, learning how business users work, how systems fail, and how support discipline shapes reliable delivery.",
  },
  {
    title: "Software Engineer / Frontend Developer",
    icon: FiCode,
    where: "PT. Arah Dinamika Abadi",
    points: [
      "Built secure transaction systems using ISO8583",
      "Worked on EDC, POS, desktop, and System delivery",
    ],
    focus: "Systems & Product Engineering",
    story:
      "Moved into software delivery with more ownership across frontend, EDC, and banking-related products, building the bridge from support work to engineering craft.",
  },
  {
    title: "Senior Frontend Developer",
    icon: FiCode,
    where: "PT. Kaldu Sari Nabati Indonesia",
    points: [
      "Owned complex frontend delivery",
      "Improved reusability and maintainability",
      "Collaborated closely with product and backend teams",
    ],
    focus: "Engineering Craft",
    story:
      "Took deeper ownership of frontend architecture, delivery predictability, reusable UI patterns, and production-quality business applications.",
  },
  {
    title: "Frontend Technical Lead",
    icon: FiUsers,
    where: "PT. Kaldu Sari Nabati Indonesia",
    points: [
      "Led frontend team, standards, and code reviews",
      "Improved UI platform, quality, and build performance",
      "Reduced technical debt and strengthened reliability",
    ],
    focus: "Team Quality & Delivery",
    story:
      "Shifted from individual delivery to technical direction, mentoring engineers and turning scattered frontend work into clearer standards and execution quality.",
  },
  {
    title: "Squad Lead / Engineering Leader",
    icon: FiTarget,
    where: "PT. Kaldu Sari Nabati Indonesia",
    points: [
      "Led cross-functional delivery across FE, BE, and QA",
      "Drove planning, execution, and stakeholder alignment",
      "Balanced people leadership with business impact",
    ],
    focus: "Strategy & Execution",
    story:
      "Expanded into delivery ownership across people, product, and engineering quality, aligning teams around business outcomes and sustainable execution.",
  },
];

const leadershipCards = [
  { label: "Led Teams up to 12 Members", icon: FiUsers },
  { label: "Cross-functional Collaboration", icon: FiBriefcase },
  { label: "Delivery Planning & Execution", icon: FiCheckCircle },
  { label: "Risk & Issue Management", icon: FiTarget },
  { label: "Stakeholder Communication", icon: FiMail },
  { label: "Engineering Standards", icon: FiCode },
];

const leadershipIconMap = {
  projectmanagement: projectManagementIcon,
  teamleadership: teamLeadershipIcon,
  manpowerplanning: manpowerPlanningIcon,
  techStandards: techStandardsIcon,
  productownership: productOwnershipIcon,
  UX: uxIcon,
  webdev: webDevIcon,
  appdev: appDevIcon,
  mobiledev: mobileDevIcon,
  fullstack: fullstackIcon,
};

const getCompanyLogo = (company = "") => {
  const normalizedCompany = company.toLowerCase();

  if (normalizedCompany.includes("nabati")) return nabatiLogo;
  if (normalizedCompany.includes("arah")) return arahnetsLogo;
  if (normalizedCompany.includes("nelly")) return nellyLogo;

  return null;
};

function SlideHeader({ eyebrow, title, description }) {
  return (
    <header className="slide-header">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <span>{description}</span> : null}
    </header>
  );
}

function SocialLink({ href, icon: Icon, label }) {
  return (
    <a className="social-button" href={href} aria-label={label} target="_blank" rel="noreferrer">
      {createElement(Icon)}
    </a>
  );
}

function TechStackExplorer() {
  const [activeGroup, setActiveGroup] = useState("frontend");
  const [openSections, setOpenSections] = useState({});

  const visibleGroups = useMemo(
    () => techStackGroups.filter((group) => group.key !== "all"),
    [],
  );

  const filteredTechStack = useMemo(
    () => sortByExperience(techStack.filter((item) => item.group === activeGroup)),
    [activeGroup],
  );

  const groupedTechStack = useMemo(() => {
    const groups = [];

    filteredTechStack.forEach((item) => {
      const sectionTitle = item.subcategory || "Others";
      const existingGroup = groups.find((group) => group.title === sectionTitle);

      if (existingGroup) {
        existingGroup.items.push(item);
        return;
      }

      groups.push({
        title: sectionTitle,
        items: [item],
      });
    });

    return groups;
  }, [filteredTechStack]);

  useEffect(() => {
    if (groupedTechStack.length === 0) {
      setOpenSections({});
      return;
    }

    if (activeGroup === "frontend") {
      setOpenSections({
        Languages: true,
        "UI Library & Frameworks": true,
      });
      return;
    }

    if (activeGroup === "backend") {
      setOpenSections({
        "Languages & Runtime": true,
        "API & Communication": true,
      });
      return;
    }

    setOpenSections({
      [groupedTechStack[0].title]: true,
    });
  }, [activeGroup, groupedTechStack]);

  const getGroupCount = (groupKey) =>
    techStack.filter((item) => item.group === groupKey).length;

  const toggleSection = (sectionTitle) => {
    setOpenSections((currentSections) => ({
      ...currentSections,
      [sectionTitle]: !currentSections[sectionTitle],
    }));
  };

  return (
    <article className="tech-explorer">
      <div className="tech-tabs">
        {visibleGroups.map((group) => {
          const isActive = activeGroup === group.key;

          return (
            <button
              type="button"
              className={isActive ? "active" : ""}
              key={group.key}
              onClick={() => setActiveGroup(group.key)}
            >
              <span>{group.label}</span>
              <b>{getGroupCount(group.key)}</b>
            </button>
          );
        })}
      </div>

      <div className="tech-scroll">
        {groupedTechStack.map((group) => {
          const isOpen = Boolean(openSections[group.title]);

          return (
            <section className="tech-section" key={group.title}>
              <button type="button" onClick={() => toggleSection(group.title)}>
                <span>{group.title}</span>
                <small>
                  {group.items.length} Skills / {isOpen ? "hide" : "show"}
                </small>
              </button>

              {isOpen ? (
                <div className="tech-section-grid">
                  {group.items.map((item) => {
                    const { IconComponent, assetIcon, color } = getTechIconInfo(item.iconKey);

                    return (
                      <article className="tech-item-card" key={`${item.group}-${item.subcategory}-${item.name}`}>
                        <div className="tech-item-main">
                          <span className="tech-item-icon">
                            {assetIcon ? (
                              <img src={assetIcon} alt="" />
                            ) : IconComponent ? (
                              <IconComponent color={item.color || color} />
                            ) : null}
                          </span>
                          <div>
                            <h3>{item.name}</h3>
                            <p>{cleanText(item.experience)}</p>
                          </div>
                        </div>

                        <div className="tech-item-badges">
                          {item.badges?.map((badge) => {
                            const badgeConfig = getBadgeConfig(badge);
                            const BadgeIcon = badgeConfig.icon;

                            return (
                              <span
                                key={`${item.name}-${badge}`}
                                style={{
                                  color: badgeConfig.color,
                                  background: badgeConfig.background,
                                  borderColor: badgeConfig.border,
                                }}
                              >
                                <BadgeIcon />
                                {badge}
                              </span>
                            );
                          })}
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : null}
            </section>
          );
        })}
      </div>
    </article>
  );
}

function IntroSlide() {
  const [isCvMenuOpen, setIsCvMenuOpen] = useState(false);

  return (
    <section className="slide slide-intro">
      <span className="intro-circuit intro-circuit-top" aria-hidden="true" />
      <span className="intro-circuit intro-circuit-bottom" aria-hidden="true" />
      <span className="intro-dot-grid intro-dot-grid-top" aria-hidden="true" />
      <span className="intro-dot-grid intro-dot-grid-bottom" aria-hidden="true" />

      <div className="intro-copy">
        <p className="eyebrow">Engineering Portfolio</p>
        <h1>{profile.name}</h1>
        <h3>Engineering Leader & Software Engineer</h3>
        <div className="intro-summary">
          {profile.summary.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{cleanText(paragraph)}</p>
          ))}
        </div>

        <div className="intro-actions">
          <SocialLink href={profile.linkedin} icon={FiLinkedin} label="LinkedIn" />
          <SocialLink href={`mailto:${profile.email}`} icon={FiMail} label="Email" />
          <div className="cv-download">
            <button
              type="button"
              className="download-button"
              onClick={() => setIsCvMenuOpen((currentValue) => !currentValue)}
              aria-expanded={isCvMenuOpen}
              aria-haspopup="menu"
            >
              <FiDownload />
              CV
            </button>

            {isCvMenuOpen ? (
              <div className="cv-download-menu" role="menu">
                <a
                  href={publicAsset("documents/CV_Andri-Pramuji-Visual.pdf")}
                  download
                  role="menuitem"
                  onClick={() => setIsCvMenuOpen(false)}
                >
                  <FiFileText />
                  CV Visual
                </a>
                <a
                  href={publicAsset("documents/CV_Andri-Pramuji-ATS.pdf")}
                  download
                  role="menuitem"
                  onClick={() => setIsCvMenuOpen(false)}
                >
                  <FiFileText />
                  CV ATS
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="portrait-stage">
        <div className="portrait-ring" />
        <div className="portrait-photo">
          <img src={publicAsset("pas-photo.png")} alt={profile.name} />
        </div>
      </div>
    </section>
  );
}

function JourneySlide() {
  return (
    <section className="slide">
      <SlideHeader
        eyebrow="Career Journey"
        title="Experience Timeline"
        description="Career history, delivery ownership, and technology exposure across each role."
      />

      <div className="career-scroll">
        {timelineItems.map((item) => {
          const companyLogo = getCompanyLogo(item.company);

          return (
            <article className="career-card" key={`${item.role}-${item.period}`}>
              <div className="career-marker">
                <span>
                  {companyLogo ? <img src={companyLogo} alt="" /> : <FiBriefcase />}
                </span>
              </div>

              <div className="career-content">
                <div className="career-title-row">
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <span>{cleanText(item.period)}</span>
                </div>

                <div className="career-meta">
                  <span>{cleanText(item.duration)}</span>
                  <span>{item.employmentType}</span>
                  <span>{item.location}</span>
                </div>

                <p className="career-description">{cleanText(item.description)}</p>

                {item.notableProjects?.length ? (
                  <div className="career-projects">
                    <strong>{item.notableProjectsTitle || "Notable Projects"}</strong>
                    {item.notableProjects.map((project) => (
                      <span key={project}>{cleanText(project)}</span>
                    ))}
                  </div>
                ) : null}

                {item.techStackIconKeys?.length ? (
                  <div className="career-tech">
                    {item.techStackIconKeys.map((iconKey, techIndex) => (
                      <TechIcon
                        key={`${item.role}-${iconKey}-${techIndex}`}
                        iconKey={iconKey}
                        index={techIndex}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function GrowthSlide() {
  return (
    <section className="slide growth-slide">
      <img className="growth-road-bg" src={growthRoadBackground} alt="" aria-hidden="true" />

      <SlideHeader
        eyebrow="Career Highlight"
        title="13 Years Career Growth Journey"
        description="From ICT support and operations to software engineering, frontend leadership, and cross-functional delivery ownership."
      />

      <div className="growth-roadmap">
        <div className="growth-stage-grid">
          {growthStages.map((stage, index) => {
            const Icon = stage.icon;

            return (
              <article className="growth-stage-card" key={stage.title} tabIndex={0}>
                <span className="growth-stage-icon">
                  <Icon />
                </span>
                <h3>{stage.title}</h3>
                <span className="growth-stage-place">Where: {stage.where}</span>
                <ul>
                  {stage.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <strong>Focus: {stage.focus}</strong>
                <b>{index + 1}</b>
                <div className="growth-popover" role="tooltip">
                  <strong>{stage.title}</strong>
                  <p>{stage.story}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DeliverySlide() {
  const appMetric = metrics.find((item) => item.icon === "projects");

  return (
    <section className="slide">
      <SlideHeader eyebrow="Delivery Portfolio" title="Built Across Business Platforms" />

      <div className="delivery-achievement-layout">
        <div className="delivery-grid">
          <div className="big-number">
            <strong>{appMetric?.value || "20+"}</strong>
            <div>
              <h3>Applications Go-Live</h3>
              <p>{cleanText(appMetric?.description)}</p>
            </div>
          </div>

          <div className="platform-grid">
            {platformCards.map((item) => {
              const Icon = item.icon;

              return (
                <div className="platform-card" key={item.label}>
                  <Icon />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>

          <p className="supporting-copy">
            Delivered both as individual contributor and in engineering leadership roles.
          </p>
        </div>

        <div className="delivery-achievement-panel">
          {metrics
            .filter((metric) => metric.icon !== "projects")
            .map((metric, index) => (
              <article className="delivery-achievement-card" key={metric.title}>
                <span>
                  <MetricIcon type={metric.icon || metric.title} index={index + 1} />
                </span>
                <div>
                  <strong>{metric.value}</strong>
                  <h3>{metric.title}</h3>
                  <p>{cleanText(metric.description)}</p>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipSlide() {
  return (
    <section className="slide">
      <SlideHeader eyebrow="Leadership & Strengths" title="Built for Delivery Ownership" />

      <div className="leadership-grid">
        {leadershipCards.map((item) => {
          const Icon = item.icon;

          return (
            <article className="leadership-card" key={item.label}>
              <Icon />
              <span>{item.label}</span>
            </article>
          );
        })}
      </div>

      <div className="leadership-strip">
        {leadershipHighlights.slice(0, 3).map((item) => (
          <span key={item}>{cleanText(item)}</span>
        ))}
      </div>
    </section>
  );
}

function TechStackSlide() {
  return (
    <section className="slide">
      <SlideHeader
        eyebrow="Tech Stack"
        title="Interactive Stack by Domain"
        description="Browse stack categories, open the relevant section, and keep longer lists scrollable inside the slide."
      />

      <TechStackExplorer />
    </section>
  );
}

function SkillGroupsSlide() {
  return (
    <section className="slide">
      <SlideHeader
        eyebrow="Leadership Skill Groups"
        title="Management, Product & Execution Skills"
      />

      <div className="skill-groups-scroll">
        {leadershipSkillGroups.map((group) => (
          <section className="skill-group-section" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-group-grid">
              {group.items.map((item) => {
                const icon = leadershipIconMap[item.iconKey];

                return (
                  <article className="skill-group-card" key={item.name}>
                    <span>
                      {icon ? <img src={icon} alt="" /> : null}
                    </span>
                    <div>
                      <h4>{item.name}</h4>
                      <p>{cleanText(item.experience)}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

function ProjectsSlide() {
  const [previewProject, setPreviewProject] = useState(null);
  const [previewIndex, setPreviewIndex] = useState(0);
  const visibleProjects = useMemo(
    () =>
      selectedProjects
        .slice()
        .sort((firstProject, secondProject) =>
          getProjectFinishedTime(secondProject.period) -
          getProjectFinishedTime(firstProject.period),
        )
        .slice(0, 4),
    [],
  );
  const previewScreenshots = previewProject
    ? getProjectScreenshots(previewProject.screenshotFolder)
    : [];
  const activeScreenshot = previewScreenshots[previewIndex];
  const hasMultipleScreenshots = previewScreenshots.length > 1;

  const openProjectPreview = (project) => {
    setPreviewProject(project);
    setPreviewIndex(0);
  };

  const showPreviousScreenshot = () => {
    if (!previewScreenshots.length) return;

    setPreviewIndex((currentIndex) =>
      currentIndex === 0 ? previewScreenshots.length - 1 : currentIndex - 1,
    );
  };

  const showNextScreenshot = () => {
    if (!previewScreenshots.length) return;

    setPreviewIndex((currentIndex) =>
      currentIndex === previewScreenshots.length - 1 ? 0 : currentIndex + 1,
    );
  };

  useEffect(() => {
    if (!previewProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setPreviewProject(null);
      if (event.key === "ArrowLeft") showPreviousScreenshot();
      if (event.key === "ArrowRight") showNextScreenshot();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewProject, previewScreenshots.length]);

  return (
    <section className="slide projects-slide">
      <SlideHeader eyebrow="Selected Projects" title="Portfolio Highlights" />

      <div className="project-grid">
        {visibleProjects.map((project) => {
          const image = getProjectImage(project.screenshotFolder);
          const hasPreview = Boolean(project.screenshotFolder && image);

          return (
            <article className={`project-card${hasPreview ? " has-preview" : ""}`} key={project.title}>
              {image ? <img src={image} alt="" /> : <div className="project-fallback"><FiGlobe /></div>}
              <div>
                <span>{cleanText(project.period)}</span>
                <h3>{project.title}</h3>
                <p>{cleanText(project.description)}</p>
                <div className="project-tech">
                  {project.techStackIconKeys.slice(0, 7).map((key, index) => (
                    <TechIcon key={`${project.title}-${key}-${index}`} iconKey={key} />
                  ))}
                </div>
                {hasPreview ? (
                  <button
                    type="button"
                    className="project-preview-button"
                    onClick={() => openProjectPreview(project)}
                  >
                    <FiMaximize2 />
                    Preview
                  </button>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>

      {previewProject ? createPortal(
        <div
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-preview-title"
          onMouseDown={() => setPreviewProject(null)}
        >
          <div className="project-modal-panel" onMouseDown={(event) => event.stopPropagation()}>
            <header>
              <div>
                <span>{cleanText(previewProject.period)}</span>
                <h3 id="project-preview-title">{previewProject.title}</h3>
              </div>
              <button
                type="button"
                className="project-modal-close"
                onClick={() => setPreviewProject(null)}
                aria-label="Close screenshot preview"
              >
                <FiX />
              </button>
            </header>

            <div className={`project-modal-viewer ${previewProject.screenshotDisplay || "desktop"}`}>
              {hasMultipleScreenshots ? (
                <button
                  type="button"
                  className="project-modal-nav project-modal-prev"
                  onClick={showPreviousScreenshot}
                  aria-label="Previous screenshot"
                >
                  <FiArrowLeft />
                </button>
              ) : null}

              {activeScreenshot ? (
                <img
                  src={activeScreenshot}
                  alt={`${previewProject.title} screenshot ${previewIndex + 1}`}
                />
              ) : null}

              {hasMultipleScreenshots ? (
                <button
                  type="button"
                  className="project-modal-nav project-modal-next"
                  onClick={showNextScreenshot}
                  aria-label="Next screenshot"
                >
                  <FiArrowRight />
                </button>
              ) : null}
            </div>

            {hasMultipleScreenshots ? (
              <footer className="project-modal-counter">
                {previewIndex + 1} / {previewScreenshots.length}
              </footer>
            ) : null}
          </div>
        </div>
      , document.body) : null}
    </section>
  );
}

function DetailsSlide() {
  const [previewCertificate, setPreviewCertificate] = useState(null);

  useEffect(() => {
    if (!previewCertificate) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setPreviewCertificate(null);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewCertificate]);

  return (
    <section className="slide">
      <SlideHeader
        eyebrow="Education, Languages & Certifications"
        title="Education, Languages & Certifications"
      />

      <div className="credentials-panel">
        <article className="credential-card education-card credential-education">
          <h3>{education.school}</h3>
          <strong>{education.degree}</strong>
          <p>{cleanText(education.period)}</p>
        </article>

        <article className="credential-card language-card credential-languages">
          <h3>Languages</h3>
          <div>
            {languages.map((language) => (
              <span key={language}>{language}</span>
            ))}
          </div>
        </article>

        <article className="credential-card certification-card credential-certifications">
          <h3>Certifications</h3>
          <div className="certification-list">
            {certifications.map((certification) => {
              const certificateImage = getCertificateImage(certification.certificateFile);

              return (
                <section key={certification.title}>
                  <div className="certification-title">
                    <strong>{certification.title}</strong>
                    {certificateImage ? (
                      <button
                        type="button"
                        onClick={() =>
                          setPreviewCertificate({
                            ...certification,
                            image: certificateImage,
                          })
                        }
                      >
                        [Show Certificate]
                      </button>
                    ) : null}
                  </div>
                  <b>{certification.issuer}</b>
                  <p>{certification.issued}</p>
                  <span>Credential ID: {certification.credentialId}</span>
                </section>
              );
            })}
          </div>
        </article>
      </div>

      {previewCertificate ? createPortal(
        <div
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-preview-title"
          onMouseDown={() => setPreviewCertificate(null)}
        >
          <div className="project-modal-panel" onMouseDown={(event) => event.stopPropagation()}>
            <header>
              <div>
                <span>{previewCertificate.issuer}</span>
                <h3 id="certificate-preview-title">{previewCertificate.title}</h3>
              </div>
              <button
                type="button"
                className="project-modal-close"
                onClick={() => setPreviewCertificate(null)}
                aria-label="Close certificate preview"
              >
                <FiX />
              </button>
            </header>

            <div className="project-modal-viewer certificate-preview">
              <img
                src={previewCertificate.image}
                alt={`${previewCertificate.title} certificate`}
              />
            </div>
          </div>
        </div>
      , document.body) : null}
    </section>
  );
}

const slides = [
  { title: "Intro", component: IntroSlide },
  { title: "Growth", component: GrowthSlide },
  { title: "Career", component: JourneySlide },
  { title: "Delivery", component: DeliverySlide },
  { title: "Tech Stack", component: TechStackSlide },
  { title: "Skill Groups", component: SkillGroupsSlide },
  { title: "Projects", component: ProjectsSlide },
  { title: "Details", component: DetailsSlide },
];

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState("next");
  const [isSinglePageMobile, setIsSinglePageMobile] = useState(false);

  const ActiveSlide = useMemo(() => slides[activeSlide].component, [activeSlide]);
  const previousSlide = activeSlide > 0 ? slides[activeSlide - 1] : null;
  const nextSlide = activeSlide < slides.length - 1 ? slides[activeSlide + 1] : null;

  const goToSlide = useCallback((index) => {
    if (index < 0 || index >= slides.length) return;

    setTransitionDirection(index > activeSlide ? "next" : "prev");
    setActiveSlide(index);
  }, [activeSlide]);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 980px)");
    const updateLayoutMode = () => setIsSinglePageMobile(mobileQuery.matches);

    updateLayoutMode();
    mobileQuery.addEventListener("change", updateLayoutMode);

    return () => mobileQuery.removeEventListener("change", updateLayoutMode);
  }, []);

  useEffect(() => {
    document.title = `${profile.name} | Portfolio Slideshow`;

    if (isSinglePageMobile) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight" && nextSlide) goToSlide(activeSlide + 1);
      if (event.key === "ArrowLeft" && previousSlide) goToSlide(activeSlide - 1);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSlide, goToSlide, isSinglePageMobile, nextSlide, previousSlide]);

  if (isSinglePageMobile) {
    return (
      <main className="portfolio-page mobile-single-page">
        <section className="mobile-deck" aria-label="Portfolio single page">
          {slides.map(({ title, component: SlideComponent }) => (
            <div className="mobile-slide-frame" key={title}>
              <SlideComponent />
            </div>
          ))}
        </section>
      </main>
    );
  }

  return (
    <main className="portfolio-page">
      <section className="deck-shell" aria-label="Portfolio slideshow">
        <div className={`slide-frame${activeSlide > 0 ? " has-brand-header" : ""}`}>
          {activeSlide > 0 ? (
            <button
              type="button"
              className="slide-brand-header"
              onClick={() => goToSlide(0)}
              aria-label="Back to intro slide"
            >
              <span className="brand-dot" />
              <span className="brand-copy">
                <strong>Hi, Im {profile.name}</strong>
                <small>Engineering Leadership | Software Engineer</small>
                <span className="brand-tags">
                  <b>
                    <FiCode />
                    Builder
                  </b>
                  <b>
                    <FiUsers />
                    Leader
                  </b>
                  <b>
                    <FiTarget />
                    Delivery Owner
                  </b>
                  <b>
                    <FiCheckCircle />
                    Quality Driven
                  </b>
                </span>
              </span>
              <span className="brand-shape" />
            </button>
          ) : null}

          <div
            key={activeSlide}
            className={`slide-transition ${transitionDirection}`}
          >
            <ActiveSlide />
          </div>

          <nav className="side-controls" aria-label="Slide controls">
            {previousSlide ? (
              <button
                type="button"
                className="side-control side-control-prev"
                onClick={() => goToSlide(activeSlide - 1)}
                aria-label={`Previous slide: ${previousSlide.title}`}
              >
                <FiArrowLeft />
                <span>Prev slide: {previousSlide.title}</span>
              </button>
            ) : null}

            {nextSlide ? (
              <button
                type="button"
                className="side-control side-control-next"
                onClick={() => goToSlide(activeSlide + 1)}
                aria-label={`Next slide: ${nextSlide.title}`}
              >
                <span>Next slide: {nextSlide.title}</span>
                <FiArrowRight />
              </button>
            ) : null}
          </nav>
        </div>
      </section>
    </main>
  );
}
