import { useState } from "react";
import "./App.css";

const focusAreas = [
  "Team Leadership",
  "Frontend Architecture",
  "Delivery & Planning",
  "Code Quality",
  "Stakeholder Alignment",
];

const metrics = [
  {
    icon: "tech-debt",
    value: "90%",
    title: "Tech Debt Down",
    description: "Improved code health and system sustainability",
  },
  {
    icon: "build-time",
    value: "80%",
    title: "Faster Build Time",
    description: "Optimized CI/CD and build pipeline efficiency",
  },
  {
    icon: "code-issues",
    value: "70%",
    title: "Fewer Code Issues",
    description: "Stronger quality gates and engineering practices",
  },
  {
    icon: "projects",
    value: "10+",
    title: "Projects Supported",
    description: "Across teams and business domains",
  },
];

const leadershipHighlights = [
  "Led cross-functional frontend initiatives across multiple business platforms.",
  "Established engineering standards and best practices.",
  "Improved team performance, delivery predictability, and code quality.",
  "Mentored engineers and supported career growth.",
];

const techStack = [
  { name: "React", icon: "⚛" },
  { name: "Next.js", icon: "N" },
  { name: "TypeScript", icon: "TS" },
  { name: "Redux", icon: "◇" },
  { name: "Node.js", icon: "⬢" },
  { name: "GraphQL", icon: "✧" },
];

const accordionItems = [
  {
    title: "Career Timeline",
    content: (
      <div className="timeline">
        <div className="timeline-item">
          <span className="timeline-dot" />
          <div>
            <strong>Frontend Developer</strong>
            <p>Built strong technical foundation in web and frontend development.</p>
          </div>
        </div>

        <div className="timeline-item">
          <span className="timeline-dot" />
          <div>
            <strong>Senior Frontend Engineer</strong>
            <p>Delivered complex features, improved frontend quality, and supported reusable components.</p>
          </div>
        </div>

        <div className="timeline-item">
          <span className="timeline-dot" />
          <div>
            <strong>Frontend Team Lead</strong>
            <p>Led planning, delivery, review process, mentoring, and engineering quality improvements.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Selected Projects",
    content: (
      <div className="project-list">
        <span>ERP & Internal Business Platforms</span>
        <span>Sales Force Automation</span>
        <span>HRIS</span>
        <span>Salesman Tracker</span>
        <span>Surveyor App</span>
        <span>Routing & Tracker System</span>
      </div>
    ),
  },
  {
    title: "Case Studies",
    content: (
      <div className="case-study">
        <strong>Technical Debt Reduction Initiative</strong>
        <p>
          Implemented SonarQube-based quality monitoring, improved code review standards,
          and reduced technical debt by 90% within 6 months.
        </p>
      </div>
    ),
  },
];

function MetricIcon({ type }) {
  switch (type) {
    case "tech-debt":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="metric-svg">
          <path
            d="M19 7L13 13L10 10L5 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 13V7H13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "build-time":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="metric-svg">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 8V12L15 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 3L6 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16 3L18 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "code-issues":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="metric-svg">
          <path
            d="M12 3L19 6V11C19 15.5 16.1 19.4 12 20.7C7.9 19.4 5 15.5 5 11V6L12 3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 11.5L11 13L14.5 9.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "projects":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="metric-svg">
          <path
            d="M12 4L18 7L12 10L6 7L12 4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M6 12L12 15L18 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M6 17L12 20L18 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return null;
  }
}

function MetricCard({ metric }) {
  return (
    <article className="metric-card">
      <div className="metric-icon-wrap">
        <MetricIcon type={metric.icon} />
      </div>

      <div className="metric-content">
        <div className="metric-value">{metric.value}</div>
        <div className="metric-title">{metric.title}</div>
        <div className="metric-description">{metric.description}</div>
      </div>
    </article>
  );
}

function AccordionItem({ item, isOpen, onClick }) {
  return (
    <div className={`accordion-item ${isOpen ? "is-open" : ""}`}>
      <button className="accordion-trigger" onClick={onClick}>
        <span>{item.title}</span>
        <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && <div className="accordion-content">{item.content}</div>}
    </div>
  );
}

export default function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggleAccordion = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <main className="page">
      <section className="portfolio-shell">
        <aside className="sidebar">
          <div className="sidebar-inner">
            <div className="profile-block">
              <div className="profile-image-wrap">
                <img
                  src="/profile-photo.jpg"
                  alt="Andri Pramuji"
                  className="profile-image"
                />
              </div>

              <h1 className="sidebar-name">Andri Pramuji</h1>
              <p className="sidebar-role">Engineering Manager</p>

              <p className="sidebar-summary">
                Frontend-focused leader with 12+ years of experience building
                high-quality products and empowering teams.
              </p>
            </div>

            <div className="connect-section">
              <a href="mailto:andri@example.com" className="connect-link">
                <span className="connect-icon">✉</span>
                <span>Email</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="connect-link"
              >
                <span className="connect-icon">in</span>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="connect-link"
              >
                <span className="connect-icon">◔</span>
                <span>GitHub</span>
              </a>
            </div>

            <button className="download-button">Download CV</button>
          </div>
        </aside>

        <section className="content">
          <div className="hero-card">
            <div className="hero-copy">
              <span className="eyebrow">Executive Summary</span>

              <h2>
                Engineering leader with 12+ years of frontend experience and
                3+ years in leadership roles.
              </h2>

              <p>
                I help teams build maintainable systems, improve engineering
                culture, and deliver impactful products with measurable business
                outcomes.
              </p>
            </div>
          </div>

          <section className="impact-section">
            <div className="section-heading">
              <span>Key Impact</span>
            </div>

            <div className="metrics-grid">
              {metrics.map((metric) => (
                <MetricCard key={metric.title} metric={metric} />
              ))}
            </div>
          </section>

          <section className="summary-grid">
            <article className="panel-card leadership-card">
              <h3>Leadership Highlights</h3>

              <ul>
                {leadershipHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="panel-card tech-card">
              <h3>Tech Stack</h3>

              <div className="tech-grid">
                {techStack.map((item) => (
                  <div className="tech-item" key={item.name}>
                    <span>{item.icon}</span>
                    <small>{item.name}</small>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="accordion-list">
            {accordionItems.map((item, index) => (
              <AccordionItem
                key={item.title}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleToggleAccordion(index)}
              />
            ))}
          </section>
        </section>
      </section>
    </main>
  );
}