import { PageTitle } from "../components/components.js";
import { projectsPage } from "../assets/assets.js";
import { containerStyle } from "./styles.js";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import {
  FaBuilding,
  FaCalendarAlt,
  FaFolderOpen,
  FaImages,
  FaUserTie,
} from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const normalizeTags = (tags) => {
  if (!tags) return [];

  if (typeof tags === "string") {
    return tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  if (!Array.isArray(tags)) return [];

  return tags
    .map((tag) => {
      if (typeof tag === "string") return tag.trim();
      return tag?.name || tag?.label || tag?.title || "";
    })
    .filter(Boolean);
};

const normalizeDetails = (details) => {
  if (!details) return "";

  if (Array.isArray(details)) {
    return details.join(", ");
  }

  return details;
};

const ModernSplitProjectCard = ({
  projectName,
  projectDescription,
  projectDetails,
  projectRole,
  tags,
  date,
  screenshots,
  onViewClick,
}) => {
  const techStacks = normalizeTags(tags);
  const details = normalizeDetails(projectDetails);
  const hasScreenshots = Array.isArray(screenshots) && screenshots.length > 0;
  const hasTechStacks = techStacks.length > 0;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="grid h-full grid-cols-1 md:grid-cols-[42%_58%]">
        <div className="flex h-full flex-col bg-[#1F2430] p-6 text-white sm:p-7">
          <div className="flex items-center gap-3 text-[#FEDF89]">
            <FaFolderOpen className="h-5 w-5 shrink-0" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">
              Project
            </p>
          </div>

          <div className="flex flex-1 items-center justify-center py-10 text-center">
            <h3 className="max-w-[300px] break-words text-3xl font-semibold leading-tight sm:text-[27px]">
              {projectName}
            </h3>
          </div>

          <div className="space-y-4 border-t border-white/10 pt-6">
            <div className="flex items-start gap-3">
              <FaCalendarAlt className="mt-1 h-4 w-4 shrink-0 text-[#FEDF89]" />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Duration
                </p>
                <p className="mt-1 text-sm font-medium text-white">{date}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaUserTie className="mt-1 h-4 w-4 shrink-0 text-[#FEDF89]" />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Role
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  {projectRole}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-full flex-col bg-[#FFFDF9] p-6 sm:p-7">
          <div className="flex-1">
            <div className="flex items-start gap-3">
              <FaBuilding className="mt-1 h-4 w-4 shrink-0 text-[#C98B2E]" />
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9A7442]">
                  Clients / Notes
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                  {projectDescription && <li>{projectDescription}</li>}
                  {details && <li>{details}</li>}
                </ul>
              </div>
            </div>

            <div className="mt-6 border-t border-[#E9DEC9] pt-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9A7442]">
                Tech Stack
              </p>

              {hasTechStacks ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {techStacks.map((tag, index) => (
                    <span
                      key={`${tag}-${index}`}
                      className="rounded-full border border-[#E2D0B2] bg-white px-3 py-1.5 text-xs font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-sm text-slate-400">
                  Tech stack is not listed.
                </p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <button
              type="button"
              disabled={!hasScreenshots}
              onClick={() => hasScreenshots && onViewClick(screenshots)}
              className={`flex min-h-[52px] w-full items-center justify-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                hasScreenshots
                  ? "bg-[#1F2430] text-white hover:bg-[#111827]"
                  : "cursor-not-allowed border border-slate-200 bg-slate-100 text-slate-400"
              }`}
            >
              <FaImages className="h-4 w-4 shrink-0" />
              {hasScreenshots ? "Screenshots" : "No Screenshots"}
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedScreenshots, setSelectedScreenshots] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const visibleProjects = showAllProjects
    ? projectsPage
    : projectsPage.slice(0, 2);

  const handleViewClick = (screenshots) => {
    setSelectedScreenshots(screenshots || []);
    setCurrentIndex(0);
    setShowModal(true);
  };

  const getFilenameWithoutExtension = (path) => {
    if (!path) return "";

    const filenameWithExt = path.split("/").pop();
    const filename = filenameWithExt.split(".").slice(0, -1).join(".");

    const lastDashIndex = filename.lastIndexOf("-");
    if (lastDashIndex !== -1) {
      return filename.slice(0, lastDashIndex);
    }

    return filename;
  };

  return (
    <>
      {projectsPage && projectsPage.length > 0 && (
        <div id="Projects" className={`${containerStyle}`}>
          <AnimatePresence>
            {showModal && selectedScreenshots.length > 0 && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowModal(false)}
              >
                <motion.div
                  className="relative w-full max-w-2xl overflow-hidden rounded-lg bg-white p-6 shadow-xl md:max-w-[1000px] lg:max-w-[1100px] xl:max-w-[1200px]"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-black">
                      Project Screenshot
                    </h2>

                    <button
                      onClick={() => setShowModal(false)}
                      className="text-black transition-colors hover:text-red-500"
                      title="Close"
                    >
                      <IoClose className="h-6 w-6" />
                    </button>
                  </div>

                  <p className="mb-2 text-center text-sm font-medium text-gray-800">
                    {getFilenameWithoutExtension(
                      selectedScreenshots[currentIndex],
                    )}
                  </p>

                  <img
                    src={selectedScreenshots[currentIndex]}
                    alt={`Screenshot ${currentIndex + 1}`}
                    className="max-h-[400px] w-full rounded border border-gray-300 object-contain transition-all duration-300 md:max-h-[600px]"
                  />

                  <div className="relative mt-6 flex w-full items-center justify-between">
                    <button
                      onClick={() =>
                        setCurrentIndex((prev) =>
                          prev === 0
                            ? selectedScreenshots.length - 1
                            : prev - 1,
                        )
                      }
                      className="rounded-full border border-black bg-white p-3 text-2xl shadow transition hover:bg-gray-100"
                      aria-label="Previous"
                    >
                      ←
                    </button>

                    <div className="text-base font-light tabular-nums tracking-wide text-gray-600">
                      {currentIndex + 1} <span className="opacity-60">/</span>{" "}
                      {selectedScreenshots.length}
                    </div>

                    <button
                      onClick={() =>
                        setCurrentIndex((prev) =>
                          prev === selectedScreenshots.length - 1
                            ? 0
                            : prev + 1,
                        )
                      }
                      className="rounded-full border border-black bg-white p-3 text-2xl shadow transition hover:bg-gray-100"
                      aria-label="Next"
                    >
                      →
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <PageTitle title={"Projects"} />

          <div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {visibleProjects.map(
                (
                  {
                    projectName,
                    projectDescription,
                    projectDetails,
                    projectRole,
                    tags,
                    date,
                    screenshots,
                  },
                  index,
                ) => (
                  <ModernSplitProjectCard
                    key={index}
                    projectName={projectName}
                    projectDescription={projectDescription}
                    projectDetails={projectDetails}
                    projectRole={projectRole}
                    screenshots={screenshots}
                    tags={tags}
                    date={date}
                    onViewClick={handleViewClick}
                  />
                ),
              )}
            </div>

            <div className="mt-9 flex justify-center">
              <button
                onClick={() => {
                  if (showAllProjects) {
                    document
                      .getElementById("Projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }

                  setShowAllProjects(!showAllProjects);
                }}
                className="project-btn flex items-center gap-2 rounded-full bg-mainColor px-4 py-3 text-white transition-all ease-linear hover:bg-mainHover"
              >
                {showAllProjects ? "Show Less" : "More Projects"}

                <IoIosArrowDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    showAllProjects ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
