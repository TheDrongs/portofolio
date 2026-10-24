import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef, useState, useReducer } from "react";
import {
  FiArrowUpRight,
  FiArrowLeft,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiFileText,
  FiFolder,
  FiGithub,
  FiMail,
  FiMinus,
  FiMonitor,
  FiUser,
  FiX,
  FiPower,
  FiGrid,
} from "react-icons/fi";
import { TbCalculator } from "react-icons/tb";
import { VscChromeMaximize, VscChromeRestore } from "react-icons/vsc";
import LaptopScene from "./components/LaptopScene";
import Skills from "./components/Skills";
import WindowMenu from "./components/WindowMenu";
import ResumeDownload from "./components/ResumeDownload";
import JakartaClock from "./components/JakartaClock";
import StartMenu from "./components/StartMenu";
import DesktopTool from "./components/DesktopTool";
import useMouseClickSound from "./components/useMouseClickSound";
import {
  createDesktopState,
  desktopReducer,
  SHUTDOWN_DURATION,
} from "./desktopState";
import {
  certifications,
  education,
  languages,
  metrics,
  profile,
  selectedProjects,
  techStack,
  timelineItems,
} from "./data/portofolioData";
const sections = [
  {
    id: "home",
    label: "Home",
    Icon: FiMonitor,
  },
  {
    id: "about",
    label: "About",
    Icon: FiUser,
  },
  {
    id: "experience",
    label: "Experience",
    Icon: FiBriefcase,
  },
  {
    id: "projects",
    label: "Projects",
    Icon: FiFolder,
  },
  {
    id: "skills",
    label: "Skills",
    Icon: FiCode,
  },
  {
    id: "credentials",
    label: "Credentials",
    Icon: FiBookOpen,
  },
  {
    id: "contact",
    label: "Contact",
    Icon: FiMail,
  },
];
const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`;
const imageFiles = import.meta.glob("./assets/projects/**/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
});
const certificates = import.meta.glob(
  "./assets/certificates/*.{png,jpg,jpeg}",
  {
    eager: true,
    import: "default",
  },
);
const projectImages = (project) => {
  const entries = Object.entries(imageFiles).filter(([path]) =>
    path.includes(`/projects/${project.screenshotFolder}/`),
  );
  return project.screenshotFiles?.length
    ? project.screenshotFiles
        .map((file) => entries.find(([path]) => path.endsWith(`/${file}`))?.[1])
        .filter(Boolean)
    : entries.sort(([a], [b]) => a.localeCompare(b)).map(([, url]) => url);
};
function ResumeLinks() {
  return (
    <div className="resume-links">
      <FiFileText aria-hidden="true" />
      <div>
        <span>Looking for my resume?</span>
        <div>
          <a
            href={publicAsset("documents/CV_Andri-Pramuji-ATS.pdf")}
            download="Andri_Pramuji_CV_English.pdf"
          >
            English ↓
          </a>
          <span className="link-separator">/</span>
          <a
            href={publicAsset("documents/CV_Andri-Pramuji-ATS-Indonesia.pdf")}
            download="Andri_Pramuji_CV_Indonesia.pdf"
          >
            Bahasa Indonesia ↓
          </a>
        </div>
      </div>
    </div>
  );
}
function Home({ navigate }) {
  return (
    <>
      <div className="document-eyebrow">
        HELLO, WORLD. WELCOME TO MY CORNER OF THE INTERNET.
      </div>
      <h1>
        Hi, I'm Andri.
        <br />I build things
        <br />
        <em>that work.</em>
      </h1>
      <p className="home-role">
        Software engineer. Technical leader.
        <br />
      </p>
      <p>
        From banking payment systems to enterprise platforms, I turn complex
        problems into useful software, and help teams do their best work.
      </p>
      <button className="text-link" onClick={() => navigate("about")}>
        Let's start the story <FiArrowUpRight />
      </button>
      <div className="home-footnote">
        <span>Based in Bandung, Indonesia</span>
        <span>Engineering since 2013</span>
      </div>
    </>
  );
}
function About() {
  return (
    <>
      <div className="document-eyebrow">THE PERSON BEHIND THE SCREEN</div>
      <h1>
        A little
        <br />
        <em>about me.</em>
      </h1>
      <div className="about-intro">
        <img src={publicAsset("pas-photo.png")} alt="Andri Pramuji" />{" "}
        <p>
          {profile.role}
          <br />
          <span className="muted-copy">{profile.location}</span>
        </p>
      </div>
      {profile.summary.split("\n\n").map((text) => (
        <p key={text}>{text}</p>
      ))}
      <h2>A few things along the way</h2>
      <div className="achievement-list">
        {metrics.map((metric) => (
          <div key={metric.title}>
            <strong>{metric.value}</strong>
            <div>
              <h3>{metric.title}</h3>
              <p>{metric.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
function Experience() {
  return (
    <>
      <ResumeLinks />
      <h1>
        The journey
        <br />
        <em>so far.</em>
      </h1>
      {timelineItems.map((item) => (
        <section
          className="experience-entry"
          key={`${item.role}-${item.period}`}
        >
          <div className="entry-meta">
            <span>{item.period}</span>
            <span>{item.location}</span>
          </div>
          <h2>{item.role}</h2>
          <p className="company-name">{item.company}</p>
          <ul>
            {item.responsibilities.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          {item.notableProjects?.map((text) => (
            <p key={text}>
              <strong>{item.notableProjectsTitle}: </strong>
              {text}
            </p>
          ))}
          {item.techStackIconKeys?.length > 0 && (
            <div
              className="experience-technologies"
              role="group"
              aria-label={`Tech stack for ${item.role}`}
            >
              <h3>Tech Stack</h3>
              <ul className="technology-list">
                {item.techStackIconKeys.map((key) => (
                  <li key={key}>
                    <span>
                      {techStack.find((skill) => skill.iconKey === key)?.name ||
                        key}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      ))}
    </>
  );
}
function Projects() {
  const [active, setActive] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const images = active ? projectImages(active) : [];
  if (active)
    return (
      <>
        <button
          className="text-link project-back"
          onClick={() => setActive(null)}
        >
          <FiArrowLeft /> All projects
        </button>
        <div className="document-eyebrow">{active.period}</div>
        <h1 className="project-detail-title">{active.title}</h1>
        {images.length > 0 && (
          <div
            className={`project-viewer ${active.screenshotDisplay === "mobile" ? "portrait-project" : ""}`}
          >
            <img
              src={images[imageIndex]}
              alt={`${active.title}, screenshot ${imageIndex + 1}`}
            />
            <div className="image-controls">
              <button
                className="retro-button"
                disabled={images.length < 2}
                onClick={() =>
                  setImageIndex(
                    (imageIndex - 1 + images.length) % images.length,
                  )
                }
                aria-label="Previous screenshot"
              >
                ←
              </button>
              <span>
                {imageIndex + 1} / {images.length}
              </span>
              <button
                className="retro-button"
                disabled={images.length < 2}
                onClick={() => setImageIndex((imageIndex + 1) % images.length)}
                aria-label="Next screenshot"
              >
                →
              </button>
            </div>
          </div>
        )}
        <p>{active.description}</p>
        <div className="technology-list">
          {active.techStackIconKeys.map((key) => (
            <span key={key}>
              {techStack.find((skill) => skill.iconKey === key)?.name || key}
            </span>
          ))}
        </div>
        {active.url && (
          <a href={active.url} target="_blank" rel="noreferrer">
            Visit project <FiArrowUpRight />
          </a>
        )}
      </>
    );
  return (
    <>
      <div className="document-eyebrow">
        A SELECTION OF THINGS I'VE HELPED BUILD
      </div>
      <h1>
        From idea
        <br />
        <em>to Production.</em>
      </h1>
      <p>
        Enterprise applications, payment systems, and a few things in between.
        Open a project to have a closer look.
      </p>
      <div className="project-list">
        {selectedProjects.map((project, index) => {
          const image = projectImages(project)[0];
          return (
            <button
              className="project-row"
              key={project.title}
              onClick={() => {
                setActive(project);
                setImageIndex(0);
              }}
            >
              <span className="project-number">0{index + 1}</span>
              <div>
                {image ? (
                  <img src={image} alt="" loading="lazy" />
                ) : (
                  <div className="project-placeholder">
                    <FiCode />
                  </div>
                )}
                <h2>{project.title}</h2>
                <span>{project.period}</span>
              </div>
              <FiArrowUpRight aria-hidden="true" />
            </button>
          );
        })}
      </div>
    </>
  );
}
function Credentials() {
  return (
    <>
      <div className="document-eyebrow">KEEP LEARNING. KEEP MAKING.</div>
      <h1>
        Notes from
        <br />
        <em>the classroom.</em>
      </h1>
      <h2>{education.school}</h2>
      <p>
        {education.degree}
        <br />
        {education.period}
      </p>
      <h2>Certifications</h2>
      {certifications.map((certificate) => {
        const image = Object.entries(certificates).find(([path]) =>
          path.endsWith(`/${certificate.certificateFile}`),
        )?.[1];
        return (
          <section className="certificate-entry" key={certificate.title}>
            <h3>{certificate.title}</h3>
            <p>
              {certificate.issuer} · {certificate.issued}
            </p>
            {image && (
              <a href={image} target="_blank" rel="noreferrer">
                View certificate <FiArrowUpRight />
              </a>
            )}
          </section>
        );
      })}
      <h2>Languages</h2>
      {languages.map((language) => (
        <p key={language}>{language}</p>
      ))}
    </>
  );
}
function Contact() {
  return (
    <>
      <div className="document-eyebrow">
        GOOD THINGS START WITH A CONVERSATION
      </div>
      <h1>
        Let's make
        <br />
        something
        <br />
        <em>good.</em>
      </h1>
      <p>
        Have a project in mind, a tricky problem to solve, or just want to say
        hello? My inbox is open.
      </p>
      <a className="contact-email" href={`mailto:${profile.email}`}>
        {profile.email} <FiArrowUpRight />
      </a>
      <div className="contact-links">
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn <FiArrowUpRight />
        </a>
      </div>
      <ResumeLinks />
      <p className="muted-copy">{profile.location}</p>
    </>
  );
}
function RetroDesktop({ onShutdown, opened }) {
  const [state, dispatch] = useReducer(
    desktopReducer,
    undefined,
    createDesktopState,
  );
  const [shutdownProgress, setShutdownProgress] = useState(0);
  const {
    page,
    maximized,
    minimized,
    windowOpen,
    menuOpen,
    power,
    tools,
    windowOrder,
  } = state;
  const activeWindow = windowOrder.at(-1);
  const contentRef = useRef(null);
  const navRef = useRef(null);
  const startRef = useRef(null);
  const rootRef = useRef(null);
  const dialogRef = useRef(null);
  const noRef = useRef(null);
  const navigate = (next) => dispatch({ type: "NAVIGATE", page: next });
  const focusWindow = (id) => {
    requestAnimationFrame(() => {
      const windowElement = rootRef.current?.querySelector(
        `[data-desktop-window="${id}"]`,
      );
      (
        windowElement?.querySelector("nav button, .calculator-key") ||
        windowElement ||
        startRef.current
      )?.focus({ preventScroll: true });
    });
  };
  const openPortfolio = () => {
    dispatch({ type: "OPEN_PORTFOLIO" });
    focusWindow("portfolio");
  };
  const openTool = (tool) => {
    dispatch({ type: "OPEN_TOOL", tool });
    focusWindow(tool);
  };
  const hideTool = (tool, type) => {
    dispatch({ type, tool });
    focusWindow(windowOrder.filter((id) => id !== tool).at(-1));
  };

  useEffect(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0;
  }, [page]);
  useEffect(() => {
    if (!opened) return;
    const frame = requestAnimationFrame(() => {
      if (power === "confirm") noRef.current?.focus({ preventScroll: true });
      else if (activeWindow) {
        const windowElement = rootRef.current?.querySelector(
          `[data-desktop-window="${activeWindow}"]`,
        );
        if (!windowElement?.contains(document.activeElement))
          (
            windowElement?.querySelector("nav button, .calculator-key") ||
            windowElement
          )?.focus({ preventScroll: true });
      } else
        rootRef.current
          ?.querySelector("[data-portfolio-shortcut]")
          ?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [opened, power, activeWindow]);
  useEffect(() => {
    if (power !== "shutting-down" || !opened) return;
    setShutdownProgress(0);
    const start = performance.now();
    const interval = setInterval(() => {
      setShutdownProgress(
        Math.min(100, ((performance.now() - start) / SHUTDOWN_DURATION) * 100),
      );
    }, 25);
    const timer = setTimeout(() => {
      setShutdownProgress(100);
      onShutdown();
    }, SHUTDOWN_DURATION);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [power, opened, onShutdown]);

  const cancelShutdown = () => {
    dispatch({ type: "CANCEL_SHUTDOWN" });
    requestAnimationFrame(() =>
      startRef.current?.focus({ preventScroll: true }),
    );
  };
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      event.stopPropagation();
      if (power === "confirm") cancelShutdown();
      else {
        dispatch({ type: "DISMISS_START" });
        startRef.current?.focus({ preventScroll: true });
      }
    }
    if (power === "confirm" && event.key === "Tab") {
      const buttons = [...dialogRef.current.querySelectorAll("button")];
      const index = buttons.indexOf(document.activeElement);
      const next =
        (index + (event.shiftKey ? -1 : 1) + buttons.length) % buttons.length;
      event.preventDefault();
      buttons[next].focus();
    }
  };

  return (
    <div
      className={`retro-desktop ${maximized && windowOpen && !minimized ? "window-maximized" : ""}`}
      ref={rootRef}
      onKeyDown={handleKeyDown}
      onPointerDown={(event) => {
        if (!event.target.closest(".start-menu, .start-button"))
          dispatch({ type: "DISMISS_START" });
      }}
    >
      {power === "shutting-down" ? (
        <div className="shutdown-screen" role="status" aria-live="polite">
          <div className="shutdown-logo" aria-hidden="true">
            ap.
          </div>
          <h2>Shutting Down</h2>
          <p>Please wait a moment.</p>
          <progress
            className="shutdown-progress"
            max="100"
            value={shutdownProgress}
            aria-label="Shutting down"
          />
        </div>
      ) : (
        <>
          <div
            className="desktop-workspace"
            inert={power === "confirm" ? "" : undefined}
          >
            {(!windowOpen || minimized) && (
              <div className="desktop-shortcuts" aria-label="Desktop shortcuts">
                <button
                  type="button"
                  data-portfolio-shortcut=""
                  onClick={openPortfolio}
                >
                  <span>
                    <FiFolder />
                  </span>
                  Portofolio
                </button>
              </div>
            )}
            {windowOpen && !minimized && (
              <section
                className="portfolio-window"
                aria-label="Andri Pramuji portfolio"
                data-desktop-window="portfolio"
                data-window-active={
                  activeWindow === "portfolio" && power === "on"
                }
                style={{ zIndex: windowOrder.indexOf("portfolio") + 1 }}
                onPointerDownCapture={() =>
                  dispatch({ type: "FOCUS_WINDOW", id: "portfolio" })
                }
                onFocusCapture={() =>
                  dispatch({ type: "FOCUS_WINDOW", id: "portfolio" })
                }
              >
                <header className="window-title">
                  <span>
                    <FiMonitor aria-hidden="true" /> Andri Pramuji — Personal
                    Portfolio
                  </span>
                  <div className="window-controls">
                    <button
                      aria-label="Minimize portfolio"
                      onClick={() => dispatch({ type: "MINIMIZE" })}
                    >
                      <FiMinus />
                    </button>
                    <button
                      aria-label={
                        maximized ? "Restore window" : "Maximize window"
                      }
                      onClick={() => dispatch({ type: "TOGGLE_MAXIMIZE" })}
                    >
                      {maximized ? (
                        <VscChromeRestore aria-hidden="true" />
                      ) : (
                        <VscChromeMaximize aria-hidden="true" />
                      )}
                    </button>
                    <button
                      aria-label="Close portfolio"
                      onClick={() => dispatch({ type: "CLOSE_WINDOW" })}
                    >
                      <FiX />
                    </button>
                  </div>
                </header>
                <WindowMenu
                  sections={sections}
                  onNavigate={navigate}
                  onExit={() => dispatch({ type: "CLOSE_WINDOW" })}
                />
                <div className="window-layout">
                  <aside className="portfolio-sidebar">
                    <a
                      className="sidebar-name"
                      href="#home"
                      onClick={(event) => {
                        event.preventDefault();
                        navigate("home");
                      }}
                    >
                      Andri
                      <br /> Pramuji<span>Personal showcase '26</span>
                    </a>
                    <nav aria-label="Main navigation">
                      {sections.map(({ id, label }, index) => (
                        <button
                          key={id}
                          ref={index === 0 ? navRef : undefined}
                          aria-current={page === id ? "page" : undefined}
                          onClick={() => navigate(id)}
                        >
                          <span className="nav-marker" aria-hidden="true">
                            •
                          </span>
                          {label}
                        </button>
                      ))}
                    </nav>
                    <ResumeDownload />
                    <div className="sidebar-signature">
                      Don't be afraid to fail. <br />
                      Be afraid not to try.<span>— Michael Jordan</span>
                    </div>
                  </aside>
                  <main
                    className="portfolio-document"
                    ref={contentRef}
                    id="portfolio-document"
                    aria-label={`${page} content`}
                    tabIndex={0}
                  >
                    <div className="document-path">
                      C: / ANDRI / {page.toUpperCase()}
                    </div>
                    <div className="document-page" key={page}>
                      {page === "home" && <Home navigate={navigate} />}
                      {page === "about" && <About />}
                      {page === "experience" && <Experience />}
                      {page === "projects" && <Projects />}
                      {page === "skills" && <Skills />}
                      {page === "credentials" && <Credentials />}
                      {page === "contact" && <Contact />}
                    </div>
                  </main>
                </div>
                <footer className="window-status">
                  <span>© {new Date().getFullYear()} Andri Pramuji</span>
                  <span>
                    {sections.find((item) => item.id === page)?.label} · Ready
                  </span>
                  <span className="resize-grip" aria-hidden="true">
                    ◢
                  </span>
                </footer>
              </section>
            )}
            {Object.entries(tools).map(([tool, toolState]) => (
              <DesktopTool
                key={tool}
                tool={tool}
                active={activeWindow === tool && power === "on"}
                minimized={toolState.minimized}
                zIndex={windowOrder.indexOf(tool) + 1}
                onActivate={() => dispatch({ type: "FOCUS_WINDOW", id: tool })}
                onMinimize={() => hideTool(tool, "MINIMIZE_TOOL")}
                onClose={() => hideTool(tool, "CLOSE_TOOL")}
              />
            ))}
          </div>
          <div
            className="desktop-system"
            inert={power === "confirm" ? "" : undefined}
          >
            {menuOpen && (
              <StartMenu
                onPortfolio={openPortfolio}
                onCalculator={() => openTool("calculator")}
                onGame={() => openTool("game")}
                onShutdown={() => dispatch({ type: "REQUEST_SHUTDOWN" })}
              />
            )}
            <footer className="desktop-taskbar">
              <button
                className="start-button"
                ref={startRef}
                aria-haspopup="menu"
                aria-expanded={menuOpen}
                aria-controls="portfolio-start-menu"
                onClick={() => dispatch({ type: "TOGGLE_START" })}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    dispatch({ type: "OPEN_START" });
                    requestAnimationFrame(() =>
                      rootRef.current
                        ?.querySelector('[role="menuitem"]')
                        ?.focus(),
                    );
                  }
                }}
              >
                <span aria-hidden="true">▦</span> Start
              </button>
              <div
                className="taskbar-apps"
                role="group"
                aria-label="Open applications"
              >
                {windowOpen && (
                  <button
                    className={`taskbar-app ${activeWindow === "portfolio" ? "is-active" : ""}`}
                    aria-pressed={activeWindow === "portfolio"}
                    aria-label={
                      activeWindow === "portfolio"
                        ? "Minimize portfolio"
                        : "Restore portfolio"
                    }
                    onClick={() => dispatch({ type: "TOGGLE_TASKBAR" })}
                  >
                    <FiMonitor />
                    <span>Portofolio</span>
                  </button>
                )}
                {Object.entries(tools).map(([tool]) => (
                  <button
                    key={tool}
                    type="button"
                    className={`taskbar-app ${activeWindow === tool ? "is-active" : ""}`}
                    aria-pressed={activeWindow === tool}
                    aria-label={`${activeWindow === tool ? "Minimize" : "Restore"} ${tool === "calculator" ? "calculator" : "game"}`}
                    title={tool === "calculator" ? "Calculator" : "Game 01"}
                    onClick={() =>
                      dispatch({ type: "TOGGLE_TOOL_TASKBAR", tool })
                    }
                  >
                    {tool === "calculator" ? <TbCalculator /> : <FiGrid />}
                    <span>
                      {tool === "calculator" ? "Calculator" : "Game 01"}
                    </span>
                  </button>
                ))}
              </div>
              <JakartaClock />
            </footer>
          </div>
          {power === "confirm" && (
            <div className="shutdown-backdrop">
              <section
                className="shutdown-dialog"
                ref={dialogRef}
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="shutdown-title"
                aria-describedby="shutdown-description"
              >
                <header className="window-title" id="shutdown-title">
                  <span>
                    <FiPower /> Shut Down
                  </span>
                </header>
                <div className="shutdown-dialog-body">
                  <FiPower aria-hidden="true" />
                  <p id="shutdown-description">Click Yes to shutdown</p>
                </div>
                <div className="shutdown-actions">
                  <button
                    className="retro-button"
                    onClick={() => dispatch({ type: "CONFIRM_SHUTDOWN" })}
                  >
                    Yes
                  </button>
                  <button
                    className="retro-button"
                    ref={noRef}
                    onClick={cancelShutdown}
                  >
                    No
                  </button>
                </div>
              </section>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function App() {
  const [opened, setOpened] = useState(false);
  const [bootId, setBootId] = useState(0);
  const [settled, setSettled] = useState(false);
  const [fallback, setFallback] = useState(false);
  const [ready, setReady] = useState(false);
  const [screenElement] = useState(() => {
    const element = document.createElement("div");
    element.className = "screen-surface";
    element.id = "laptop-portfolio";
    return element;
  });
  const playMouseClick = useMouseClickSound();
  const activate = useCallback(() => {
    // Reset the desktop in the same commit that starts opening, before it can fade in.
    setBootId((current) => current + 1);
    setOpened(true);
  }, []);
  const mobileHost = useRef(null);
  const welcomeRef = useRef(null);
  const close = useCallback(() => {
    setSettled(false);
    setOpened(false);
    requestAnimationFrame(() =>
      welcomeRef.current?.focus({ preventScroll: true }),
    );
  }, []);
  const onSettled = useCallback((value) => setSettled(value), []);
  const onReady = useCallback(() => setReady(true), []);
  const onFallback = useCallback(() => {
    setFallback(true);
    setReady(true);
  }, []);
  useEffect(() => {
    screenElement.inert = !settled;
    screenElement.setAttribute("aria-hidden", String(!settled));
  }, [screenElement, settled]);
  useEffect(() => {
    if (fallback) setSettled(opened);
  }, [fallback, opened]);
  return (
    <div
      onClickCapture={playMouseClick}
      className={`portfolio-app ${opened ? "is-open" : ""} ${settled ? "is-settled" : ""} ${fallback ? "has-fallback" : ""}`}
    >
      <header className="site-header">
        <a
          className="site-brand"
          href="#"
          onClick={(event) => {
            event.preventDefault();
            close();
          }}
          aria-label="Andri Pramuji, return to welcome"
        >
          <span className="brand-monogram">ap.</span>
          <span style={{ fontSize: 15 }}>
            ANDRI PRAMUJI
            <small style={{ fontSize: 10 }}>A PERSONAL PORTFOLIO · 2026</small>
          </span>
        </a>
        {opened && (
          <button className="close-laptop" onClick={close}>
            <FiArrowLeft /> <span style={{ fontSize: 13 }}>Back to desk</span>
          </button>
        )}
      </header>
      <div className="desk-stage">
        <LaptopScene
          opened={opened}
          screenElement={screenElement}
          mobileHost={mobileHost}
          onSettled={onSettled}
          onReady={onReady}
          onFallback={onFallback}
          onActivate={activate}
        />
        {!opened && (
          <div className="welcome-copy">
            <span className="welcome-eyebrow" style={{ fontSize: 14 }}>
              PULL UP A CHAIR. STAY A LITTLE WHILE.
            </span>
            <h1>
              Make yourself
              <br />
              <em>at home.</em>
            </h1>
            <p style={{ fontSize: 13 }}>
              I'm Andri. Come in and take a look around.
            </p>
            <button
              className="welcome-button"
              aria-controls="laptop-portfolio"
              aria-expanded={opened}
              ref={welcomeRef}
              disabled={!ready}
              onClick={activate}
            >
              {ready ? "WELCOME" : "SETTING THE DESK"}
              <FiArrowUpRight aria-hidden="true" />
            </button>
          </div>
        )}
        {!opened && (
          <span className="scene-caption">
            <span className="desktop-caption" style={{ fontSize: 12 }}>
              A closed laptop. A few stories inside.
            </span>
            <span className="mobile-caption">
              A little world, in the palm of your hand.
            </span>
          </span>
        )}
        {fallback && !opened && (
          <button
            className="fallback-device"
            onClick={activate}
            aria-label="Open portfolio"
          >
            ap.
          </button>
        )}
        {opened && !settled && (
          <span className="opening-status" role="status">
            Powering on…
          </span>
        )}
      </div>
      <div className="mobile-screen-host" ref={mobileHost}>
        {opened && !settled && (
          <div className="mobile-startup" role="status" aria-live="polite">
            <span className="startup-monogram" aria-hidden="true">
              ap.
            </span>
            <span className="startup-title">Starting up</span>
            <span className="startup-caption">
              A little world is waking up.
            </span>
            <span className="startup-loading" aria-hidden="true">
              <span />
            </span>
          </div>
        )}
      </div>
      {createPortal(
        <RetroDesktop key={bootId} onShutdown={close} opened={settled} />,
        screenElement,
      )}
      <footer className="site-footer">
        <span style={{ fontSize: 14 }}>BUILT WITH CURIOSITY.</span>
      </footer>
    </div>
  );
}
