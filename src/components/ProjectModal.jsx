import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiGlobe,
  FiX,
} from "react-icons/fi";
import { TechIcon } from "./icons/techStackIcons";

export default function ProjectModal({ project, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = project.images[activeImageIndex] || null;
  const hasMultipleImages = project.images.length > 1;

  const showPreviousImage = () => {
    setActiveImageIndex((current) =>
      current === 0 ? project.images.length - 1 : current - 1,
    );
  };

  const showNextImage = () => {
    setActiveImageIndex((current) =>
      current === project.images.length - 1 ? 0 : current + 1,
    );
  };

  useEffect(() => {
    document.body.classList.add("project-modal-open");
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && project.images.length > 1) {
        event.preventDefault();
        setActiveImageIndex((current) =>
          current === 0 ? project.images.length - 1 : current - 1,
        );
      }
      if (event.key === "ArrowRight" && project.images.length > 1) {
        event.preventDefault();
        setActiveImageIndex((current) =>
          current === project.images.length - 1 ? 0 : current + 1,
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("project-modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, project.images.length]);

  return createPortal(
    <div
      className="project-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          type="button"
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <FiX />
        </button>

        <div className="project-modal-media">
          {activeImage ? (
            <img src={activeImage} alt={`Screenshot of ${project.title}`} />
          ) : (
            <div className="project-modal-fallback">
              <FiGlobe />
              <span>Preview is being prepared</span>
            </div>
          )}

          {hasMultipleImages ? (
            <nav
              className="project-modal-navigation"
              aria-label="Screenshot navigation"
            >
              <button
                type="button"
                className="previous"
                onClick={showPreviousImage}
                aria-label="Previous screenshot"
                title="Previous screenshot"
              >
                <FiChevronLeft />
              </button>
              <span>{activeImageIndex + 1} / {project.images.length}</span>
              <button
                type="button"
                className="next"
                onClick={showNextImage}
                aria-label="Next screenshot"
                title="Next screenshot"
              >
                <FiChevronRight />
              </button>
            </nav>
          ) : null}
        </div>

        <div className="project-modal-copy">
          <span>{project.period}</span>
          <h2 id="project-modal-title">{project.title}</h2>
          <p>{project.description}</p>

          <div className="project-modal-tech" aria-label="Technologies used">
            {project.techStackIconKeys.map((iconKey, index) => (
              <TechIcon
                key={`${project.title}-${iconKey}-${index}`}
                iconKey={iconKey}
                index={index}
              />
            ))}
          </div>

          {project.url ? (
            <a href={project.url} target="_blank" rel="noreferrer">
              Visit project <FiExternalLink />
            </a>
          ) : null}
        </div>
      </section>
    </div>,
    document.body,
  );
}
