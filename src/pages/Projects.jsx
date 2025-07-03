import { PageTitle, Project } from "../components/components.js";
import { projectsPage } from "../assets/assets.js";
import { containerStyle } from "./styles.js";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowBackOutline, IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedScreenshots, setSelectedScreenshots] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

    const handleViewClick = (screenshots) => {
      setSelectedScreenshots(screenshots || []);
      setCurrentIndex(0);
      setShowModal(true);
    };

  useEffect(() => {
    if (projectsPage && projectsPage.length > 0) {
      let btn = document.querySelector(".project-btn");

      const handleMouseEnter = () => {
        setIsHovered(true);
      };

      const handleMouseLeave = () => {
        setIsHovered(false);
      };

      btn.addEventListener("mouseenter", handleMouseEnter);
      btn.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        btn.removeEventListener("mouseenter", handleMouseEnter);
        btn.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

    const getFilenameWithoutExtension = (path) => {
      if (!path) return "";
      const parts = path.split("/").pop().split(".");
      parts.pop();
      return parts.join(".");
    };

  return (
    <>
      { (projectsPage && projectsPage.length > 0) && 
        <div id="Projects" className={`${containerStyle}`}>
          <AnimatePresence>
            {showModal && selectedScreenshots.length > 0 && (
              <motion.div
                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowModal(false)}
              >
                <motion.div
                 className="bg-white w-full max-w-2xl md:max-w-[1000px] lg:max-w-[1100px] xl:max-w-[1200px] rounded-lg p-6 shadow-xl relative overflow-hidden"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-black">Project Preview</h2>
                    <button
                      onClick={() => setShowModal(false)}
                      className="text-black hover:text-red-500 transition-colors"
                      title="Close"
                    >
                      <IoClose className="w-6 h-6" />
                    </button>
                  </div>
                  <p className="text-center text-sm font-medium text-gray-800 mb-2">
                    {getFilenameWithoutExtension(selectedScreenshots[currentIndex])}
                  </p>
                 <img
                    src={selectedScreenshots[currentIndex]}
                    alt={`Screenshot ${currentIndex + 1}`}
                    className="w-full max-h-[400px] md:max-h-[600px] object-contain border border-gray-300 rounded transition-all duration-300"
                  />
                  <div className="flex justify-between items-center mt-4">
                    <button
                      onClick={() =>
                        setCurrentIndex((prev) =>
                          prev === 0 ? selectedScreenshots.length - 1 : prev - 1
                        )
                      }
                      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
                    >
                      ← Prev
                    </button>

                    <div className="text-sm text-gray-700">
                      {currentIndex + 1} / {selectedScreenshots.length}
                    </div>

                    <button
                      onClick={() =>
                        setCurrentIndex((prev) =>
                          prev === selectedScreenshots.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
                    >
                      Next →
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <PageTitle title={"Projects"} />
          <div>
            <div className="grid grid-cols-1 bedar-sc2:grid-cols-2 gap-5">
              {projectsPage.map(
                ({
                  projectName,
                  projectDescription,
                  projectDetails,
                  projectRole,
                  projectURL,
                  tags,
                  date,
                  screenshots,
                }) => (
                  <Project
                    key={1}
                    projectName={projectName}
                    projectDescription={projectDescription}
                    projectDetails={projectDetails}
                    projectRole={projectRole}
                    projectURL={projectURL}
                    screenshots={screenshots}
                    tags={tags}
                    date={date}
                    onViewClick={handleViewClick}
                  />
                )
              )}
            </div>
            <div>
              <Link to={"/"} className="flex justify-center mt-9">
                <button className="project-btn bg-mainColor hover:bg-mainHover text-white py-3 px-4 rounded-full flex items-center gap-2 transition-all ease-linear">
                  More Projects{" "}
                  {isHovered ? (
                    <IoArrowBackOutline className="w-5 h-5 rotate-180" />
                  ) : (
                    <IoIosArrowForward className="w-5 h-5" />
                  )}
                </button>
              </Link>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Projects;
