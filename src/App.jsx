import {
  createElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createPortal } from "react-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiCode,
  FiDownload,
  FiFileText,
  FiLinkedin,
  FiMail,
  FiMonitor,
  FiSend,
  FiSmartphone,
  FiTarget,
  FiUsers,
  FiX,
} from "react-icons/fi";
import { FaAndroid } from "react-icons/fa";
import {
  TbCloud,
  TbDeviceDesktopAnalytics,
  TbDeviceMobileCog,
} from "react-icons/tb";
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
import ClickSpark from "./components/ClickSpark";
import CircularGallery from "./components/CircularGallery";
import MetricIcon from "./components/MetricIcon";
import ProjectModal from "./components/ProjectModal";

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

const projectImages = import.meta.glob(
  "./assets/projects/**/*.{png,jpg,jpeg}",
  {
    eager: true,
    import: "default",
  },
);

const certificateImages = import.meta.glob(
  "./assets/certificates/**/*.{png,jpg,jpeg}",
  {
    eager: true,
    import: "default",
  },
);

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

const getProjectImages = (folder) => {
  if (!folder) return [];

  return Object.entries(projectImages)
    .filter(([path]) => path.includes(`/projects/${folder}/`))
    .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath))
    .map(([, image]) => image);
};

const getCertificateImage = (fileName) => {
  if (!fileName) return null;

  const match = Object.entries(certificateImages).find(([path]) =>
    path.endsWith(`/certificates/${fileName}`),
  );

  return match?.[1] || null;
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
    <a
      className="social-button"
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
    >
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
    () =>
      sortByExperience(techStack.filter((item) => item.group === activeGroup)),
    [activeGroup],
  );

  const groupedTechStack = useMemo(() => {
    const groups = [];

    filteredTechStack.forEach((item) => {
      const sectionTitle = item.subcategory || "Others";
      const existingGroup = groups.find(
        (group) => group.title === sectionTitle,
      );

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
                    const { IconComponent, assetIcon, color } = getTechIconInfo(
                      item.iconKey,
                    );

                    return (
                      <article
                        className="tech-item-card"
                        key={`${item.group}-${item.subcategory}-${item.name}`}
                      >
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
  return (
    <section className="slide slide-intro">
      <span className="intro-circuit intro-circuit-top" aria-hidden="true" />
      <span className="intro-circuit intro-circuit-bottom" aria-hidden="true" />
      <span className="intro-dot-grid intro-dot-grid-top" aria-hidden="true" />
      <span
        className="intro-dot-grid intro-dot-grid-bottom"
        aria-hidden="true"
      />

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
          <SocialLink
            href={profile.linkedin}
            icon={FiLinkedin}
            label="LinkedIn"
          />
          <SocialLink
            href={`mailto:${profile.email}`}
            icon={FiMail}
            label="Email"
          />
          <a
            className="download-button"
            href={publicAsset("documents/CV_Andri-Pramuji-Visual.pdf")}
            download
          >
            <FiDownload />
            CV
          </a>
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
            <article
              className="career-card"
              key={`${item.role}-${item.period}`}
            >
              <div className="career-marker">
                <span>
                  {companyLogo ? (
                    <img src={companyLogo} alt="" />
                  ) : (
                    <FiBriefcase />
                  )}
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

                <p className="career-description">
                  {cleanText(item.description)}
                </p>

                {item.notableProjects?.length ? (
                  <div className="career-projects">
                    <strong>
                      {item.notableProjectsTitle || "Notable Projects"}
                    </strong>
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
      <img
        className="growth-road-bg"
        src={growthRoadBackground}
        alt=""
        aria-hidden="true"
      />

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
              <article
                className="growth-stage-card"
                key={stage.title}
                tabIndex={0}
              >
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
      <SlideHeader
        eyebrow="Delivery Portfolio"
        title="Built Across Business Platforms"
      />

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
            Delivered both as individual contributor and in engineering
            leadership roles.
          </p>
        </div>

        <div className="delivery-achievement-panel">
          {metrics
            .filter((metric) => metric.icon !== "projects")
            .map((metric, index) => (
              <article className="delivery-achievement-card" key={metric.title}>
                <span>
                  <MetricIcon
                    type={metric.icon || metric.title}
                    index={index + 1}
                  />
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
      <SlideHeader
        eyebrow="Leadership & Strengths"
        title="Built for Delivery Ownership"
      />

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
                    <span>{icon ? <img src={icon} alt="" /> : null}</span>
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
  const [activeProject, setActiveProject] = useState(null);
  const projects = useMemo(
    () =>
      selectedProjects
        .filter((project) => project.screenshotFolder)
        .map((project, index) => ({
          ...project,
          id: index,
          period: cleanText(project.period),
          description: cleanText(project.description),
          images: getProjectImages(project.screenshotFolder),
        })),
    [],
  );
  const galleryItems = useMemo(
    () =>
      projects.map((project) => ({
        id: project.id,
        image: project.images[0],
        text: project.title,
      })),
    [projects],
  );
  const openProject = useCallback(
    (projectId) => {
      const project = projects.find((item) => item.id === projectId);
      if (project) setActiveProject(project);
    },
    [projects],
  );

  return (
    <>
      <section className="slide projects-slide">
        <SlideHeader
          eyebrow="Selected Projects"
          title="Portfolio Highlights"
          description="Drag to explore. Click a project to open its details and screenshots."
        />

        <div className="project-gallery-shell">
          <CircularGallery
            items={galleryItems}
            onSelect={openProject}
            bend={0.5}
            borderRadius={0.045}
            scrollSpeed={2.2}
          />
        </div>
      </section>

      {activeProject ? (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      ) : null}
    </>
  );
}

function DetailsSlide() {
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
              const certificateImage = getCertificateImage(
                certification.certificateFile,
              );

              return (
                <section key={certification.title}>
                  <div className="certification-title">
                    <strong>{certification.title}</strong>
                    {certificateImage ? (
                      <a
                        href={certificateImage}
                        target="_blank"
                        rel="noreferrer"
                      >
                        [Show Certificate]
                      </a>
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
    </section>
  );
}

const opportunityTags = [
  "Engineering Leadership",
  "Technical Lead",
  "Technical PM",
  "Software Engineering",
  "Remote / Hybrid Opportunities",
];

function ContactDialog({ type, onClose }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = formData.get("subject") || "Portfolio collaboration";
    const body = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      "",
      formData.get("message"),
    ].join("\n");

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    document.body.classList.add("contact-modal-open");
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("contact-modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="contact-dialog-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="contact-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-dialog-title"
      >
        <button
          type="button"
          className="contact-dialog-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <FiX />
        </button>

        {type === "email" ? (
          <>
            <div className="contact-dialog-heading">
              <span><FiMail /></span>
              <div>
                <p>Get in touch</p>
                <h2 id="contact-dialog-title">Send Me a Message</h2>
              </div>
            </div>
            <form className="contact-dialog-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="contact-name">Name</label>
                <input id="contact-name" name="name" type="text" required />
              </div>
              <div>
                <label htmlFor="contact-email">Email</label>
                <input id="contact-email" name="email" type="email" required />
              </div>
              <div className="full-width">
                <label htmlFor="contact-subject">Subject</label>
                <input id="contact-subject" name="subject" type="text" required />
              </div>
              <div className="full-width">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" required />
              </div>
              <button className="full-width" type="submit">
                <FiSend /> Send Message
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="contact-dialog-heading">
              <span><FiDownload /></span>
              <div>
                <p>Download CV</p>
                <h2 id="contact-dialog-title">Choose a CV Format</h2>
              </div>
            </div>
            <div className="cv-choice-list">
              <a
                href={publicAsset("documents/CV_Andri-Pramuji-ATS.pdf")}
                download
                onClick={onClose}
              >
                <span><FiFileText /></span>
                <div>
                  <strong>ATS-Friendly CV</strong>
                  <small>Optimized for applicant tracking systems</small>
                </div>
                <FiDownload />
              </a>
              <a
                href={publicAsset("documents/CV_Andri-Pramuji-Visual.pdf")}
                download
                onClick={onClose}
              >
                <span><FiFileText /></span>
                <div>
                  <strong>Visual CV</strong>
                  <small>Designed presentation with a visual layout</small>
                </div>
                <FiDownload />
              </a>
            </div>
          </>
        )}
      </section>
    </div>,
    document.body,
  );
}

function ContactSlide() {
  const [activeDialog, setActiveDialog] = useState(null);

  return (
    <section className="slide contact-slide">
      <div className="contact-hero">
        <p className="contact-hero-eyebrow">Contact Me</p>
        <h2>Let&apos;s Build Something<br />Impactful Together</h2>
       <p className="contact-hero-description">
        I help teams turn business goals into reliable digital products by combining
        hands-on engineering experience, technical leadership, and strong delivery
        ownership.
      </p>

        <div className="contact-hero-tags">
          {opportunityTags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>

        <div className="contact-action-orbs">
          <button
            type="button"
            className="email"
            onClick={() => setActiveDialog("email")}
          >
            <FiMail /><span>Email Me</span>
          </button>
          <a
            className="linkedin"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin /><span>Connect on<br />LinkedIn</span>
          </a>
          <button
            type="button"
            className="download"
            onClick={() => setActiveDialog("cv")}
          >
            <FiDownload /><span>Download<br />CV</span>
          </button>
        </div>
      </div>

      {activeDialog ? (
        <ContactDialog
          type={activeDialog}
          onClose={() => setActiveDialog(null)}
        />
      ) : null}
    </section>
  );
}

const slides = [
  { title: "Intro", component: IntroSlide },
  { title: "Growth", component: GrowthSlide },
  { title: "Career", component: JourneySlide },
  { title: "Delivery", component: DeliverySlide },
  { title: "Leadership", component: LeadershipSlide },
  { title: "Tech Stack", component: TechStackSlide },
  { title: "Skill Groups", component: SkillGroupsSlide },
  { title: "Projects", component: ProjectsSlide },
  { title: "Details", component: DetailsSlide },
  { title: "Contact", component: ContactSlide },
];

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState("next");
  const [isMobileLayout, setIsMobileLayout] = useState(() =>
    window.matchMedia("(max-width: 640px)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const updateLayout = (event) => setIsMobileLayout(event.matches);
    mediaQuery.addEventListener("change", updateLayout);

    return () => mediaQuery.removeEventListener("change", updateLayout);
  }, []);

  const ActiveSlide = useMemo(
    () => slides[activeSlide].component,
    [activeSlide],
  );
  const previousSlide = activeSlide > 0 ? slides[activeSlide - 1] : null;
  const nextSlide =
    activeSlide < slides.length - 1 ? slides[activeSlide + 1] : null;

  const goToSlide = useCallback(
    (index) => {
      if (index < 0 || index >= slides.length) return;

      setTransitionDirection(index > activeSlide ? "next" : "prev");
      setActiveSlide(index);
    },
    [activeSlide],
  );

  useEffect(() => {
    document.title = `${profile.name} | Portfolio Slideshow`;

    if (isMobileLayout) return undefined;

    const handleKeyDown = (event) => {
      if (
        document.body.classList.contains("project-modal-open") ||
        document.body.classList.contains("contact-modal-open")
      ) return;
      if (event.key === "ArrowRight" && nextSlide) goToSlide(activeSlide + 1);
      if (event.key === "ArrowLeft" && previousSlide)
        goToSlide(activeSlide - 1);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSlide, goToSlide, isMobileLayout, nextSlide, previousSlide]);

  if (isMobileLayout) {
    return (
      <ClickSpark sparkColor="#a8ecff">
        <main className="portfolio-page mobile-portfolio-page">
          <div className="mobile-portfolio-flow" aria-label="Portfolio">
            {slides.map(({ title, component: SlideComponent }) => (
              <div
                className="mobile-portfolio-section"
                id={`mobile-${title.toLowerCase().replaceAll(" ", "-")}`}
                key={title}
              >
                {createElement(SlideComponent)}
              </div>
            ))}
          </div>
        </main>
      </ClickSpark>
    );
  }

  return (
    <ClickSpark sparkColor="#a8ecff">
      <main className="portfolio-page">
        <section className="deck-shell" aria-label="Portfolio slideshow">
          <div
            className={`slide-frame${activeSlide > 0 ? " has-brand-header" : ""}`}
          >
            {activeSlide > 0 ? (
              <button
                type="button"
                className="slide-brand-header"
                onClick={() => goToSlide(0)}
                aria-label="Back to intro slide"
              >
                <span className="brand-dot" />
                <span className="brand-copy">
                  <strong>{profile.name}</strong>
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

            <nav
              className={`side-controls${slides[activeSlide].title === "Contact" ? " contact-side-controls" : ""}`}
              aria-label="Slide controls"
            >
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
    </ClickSpark>
  );
}
