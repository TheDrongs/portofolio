import { useRef, useState } from "react";
import { Navbar, Footer } from "./components/components.js";
import {
  About,
  Education,
  Skills,
  Projects,
  Contact,
  Certificates,
  WorkExperience,
} from "./pages/pages.js";
import { navElements } from "./assets/assets.js";

const ChevronIcon = ({ isOpen }) => {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-slate-700 transition-transform duration-300 ${
        isOpen ? "rotate-180" : ""
      }`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const accordionSections = [
  {
    id: "workExperience",
    title: "Work Experience",
    navKeys: ["Work Experience", "Experience", "Professional Overview"],
    component: <WorkExperience />,
  },
  {
    id: "skills",
    title: "Technical Skills",
    navKeys: ["Skills", "Technical Skills"],
    component: <Skills />,
  },
  {
    id: "certificates",
    title: "Certificates",
    navKeys: ["Certificates"],
    component: <Certificates />,
  },
  {
    id: "projects",
    title: "Projects",
    navKeys: ["Projects"],
    component: <Projects />,
  },
  {
    id: "education",
    title: "Education",
    navKeys: ["Education"],
    component: <Education />,
  },
  {
    id: "contact",
    title: "Contact",
    navKeys: ["Contact"],
    component: <Contact />,
  },
];

const getNavLabel = (elem) => {
  if (typeof elem === "string") return elem;

  return (
    elem?.name ||
    elem?.title ||
    elem?.label ||
    elem?.text ||
    elem?.id ||
    ""
  );
};

const getSectionIdByNavElem = (elem) => {
  const label = getNavLabel(elem);

  const section = accordionSections.find((item) =>
    item.navKeys.some(
      (key) => key.toLowerCase() === String(label).toLowerCase()
    )
  );

  return section?.id;
};

const App = () => {
  const sectionRefs = useRef({});

  const [activeElem, setActiveElem] = useState(navElements[0]);

  const [openSections, setOpenSections] = useState({
    workExperience: false,
    skills: true,
    certificates: false,
    projects: false,
    education: false,
    contact: false,
  });

  const scrollToSection = (sectionId) => {
    window.setTimeout(() => {
      sectionRefs.current[sectionId]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleActiveElemChange = (elem) => {
    setActiveElem(elem);

    const sectionId = getSectionIdByNavElem(elem);

    if (!sectionId) return;

    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: true,
    }));

    scrollToSection(sectionId);
  };

  const handleToggleSection = (sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <div className="relative min-h-screen selection:bg-[#fedf89] selection:text-textColor">
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-white to-[#e0f2ff]" />

      <Navbar
        activeElem={activeElem}
        setActiveElem={handleActiveElemChange}
      />

      <div className="relative max-w-[1800px] mt-[7rem] bedar-sc2:mt-[6.8rem] w-full m-auto px-5 bedar-sc1:px-20 overflow-auto pb-12">
        <About />

        <div className="mt-8">
          {accordionSections.map((section) => {
            const isOpen = openSections[section.id];

            return (
             <section
                key={section.id}
                ref={(el) => {
                  sectionRefs.current[section.id] = el;
                }}
                id={section.id}
                className="scroll-mt-28"
              >
                <button
                  type="button"
                  onClick={() => handleToggleSection(section.id)}
                  className="flex w-full items-center justify-between gap-4 border-b border-slate-300/60 py-5 text-left transition hover:text-[#1F2430]"
                >
                  <h2 className="text-xl font-semibold text-[#1F2430]">
                    {section.title}
                  </h2>

                  <ChevronIcon isOpen={isOpen} />
                </button>

                {isOpen && (
                  <div className="pb-8 pt-6">
                    {section.component}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>

      <Footer
        activeElem={activeElem}
        setActiveElem={handleActiveElemChange}
      />
    </div>
  );
};

export default App;