import { useState } from "react";
import { PageTitle } from "../components/components.js";
import { containerStyle } from "./styles.js";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SiJavascript, SiReact, SiCplusplus, SiKotlin, SiGit, SiTypescript, SiDocker, 
  SiKubernetes, SiRabbitmq, SiGo, SiNodedotjs, SiJest, SiSonarqube, SiExpress, 
  SiPhp, SiMysql, SiMongodb, SiNextdotjs, SiC, SiStorybook, SiRollupdotjs,
  SiAntdesign, SiTailwindcss, SiRedux, SiOpenstreetmap, SiGooglemaps,
  SiHtml5, SiCss3,
  SiAngular,
  SiVuedotjs
} from "react-icons/si";
import ViteLogo from "../assets/Vitejs-logo.png";
import ZustandLogo from "../assets/zustand.svg";
import FinclipLogo from "../assets/finclip.png";
import PMLogo from "../assets/PM.png";
import ManPowerPlanLogo from "../assets/MPP.jpg"
import TechStandardsLogo from "../assets/techStandards.png"
import UXLogo from "../assets/UX.png"
import LeadershipLogo from "../assets/leadership.jpg"
import ProductOwnershipLogo from "../assets/productOwner.jpg"
import PrototypingLogo from "../assets/prototyping.png"
import RestAPILogo from "../assets/restApi.png"
import WebDevIcon from "../assets/webdevicon.jpg"
import AppDevIcon from "../assets/appdevicon.png"

const versioningTools = [
  { Component: SiGit, name: "Git", description: "3+ Years Experience", percentage: 82 },
];

const technicalSkillsByCategory = {
  "Web Programming": {
    "Frontend Stack": {
      "Languages": [
        { Component: SiJavascript, name: "JavaScript", description: "5+ Years Experience", percentage: 90 },
        { Component: SiTypescript, name: "TypeScript", description: "3+ Years Experience", percentage: 83 },
      ],
      "UI Library & Frameworks": [
        { Component: SiReact, name: "React", description: "4+ Years Experience", percentage: 88 },
        { Component: SiNextdotjs, name: "NextJS", description: "3+ Years Experience", percentage: 81 },
        { Component: SiAngular, name: "Angular", description: "1 Years Experience", percentage: 70 },
        { Component: SiVuedotjs, name: "Vue", description: "1 Years Experience", percentage: 70 },
      ],
      "Styling": [
        { Component: SiHtml5, name: "HTML5", description: "6+ Years Experience", percentage: 86 },
        { Component: SiCss3, name: "CSS3", description: "6+ Years Experience", percentage: 85 },
        { Component: SiAntdesign, name: "AntDesign", description: "3+ Years Experience", percentage: 85 },
        { Component: SiTailwindcss, name: "TailwindCSS", description: "1+ Years Experience", percentage: 75 },
      ],
      "State Management": [
        { Component: SiReact, name: "ReactContextAPI", description: "3+ Years Experience", percentage: 85 },
        { Component: SiRedux, name: "Redux", description: "1+ Years Experience", percentage: 78 },
        { Component: ZustandLogo, name: "Zustand", description: "1+ Years Experience", percentage: 78 },
      ],
      "Build Tools & Config": [
        { Component: ViteLogo, name: "ViteJS", description: "2+ Years Experience", percentage: 81 },
        { Component: SiRollupdotjs, name: "RollupJS", description: "1+ Years Experience", percentage: 75 },
        { Component: SiStorybook, name: "StorybookJS", description: "1+ Years Experience", percentage: 75 },
      ],
      "Map Integration": [
        { Component: SiOpenstreetmap, name: "OpenStreetMap", description: "2+ Years Experience", percentage: 85 },
        { Component: SiGooglemaps, name: "GoogleMapAPI", description: "1+ Years Experience", percentage: 82 },
      ]
    },
      "Backend Stack": {
      "Languages & Runtime": [
        { Component: SiGo, name: "Go", description: "1 Year Experience", percentage: 67 },
        { Component: SiPhp, name: "PHP", description: "3+ Years Experience", percentage: 78 },
        { Component: SiNodedotjs, name: "NodeJS", description: "1+ Years Experience", percentage: 72 },
      ],
      "Frameworks": [
        { Component: SiExpress, name: "ExpressJS", description: "1+ Years Experience", percentage: 71 },
      ],
      "Database": [
        { Component: SiMysql, name: "MySQL", description: "2+ Years Experience", percentage: 75 },
        { Component: SiMongodb, name: "MongoDB", description: "1+ Years Experience", percentage: 70 },
      ],
      "API & Communication": [
        { Component: RestAPILogo, name: "RestAPI", description: "3+ Years Experience", percentage: 82 },
      ],
      "Messaging & Queue": [
        { Component: SiRabbitmq, name: "RabbitMQ", description: "1 Year Experience", percentage: 65 },
      ]
    },
    "CI/CD": [
      { Component: SiDocker, name: "Docker", description: "1 Year Experience", percentage: 68 },
      { Component: SiKubernetes, name: "Kubernetes", description: "1 Year Experience", percentage: 66 },
    ],
    "Testing & Quality": [
      { Component: SiJest, name: "Jest", description: "1+ Years Experience", percentage: 75 },
      { Component: SiSonarqube, name: "Sonarqube", description: "1 Year Experience", percentage: 75 },
    ]
  },
  "Mobile Programming": [
    { Component: SiReact, name: "ReactNative", description: "2+ Years Experience", percentage: 80 },
    { Component: SiKotlin, name: "Kotlin", description: "1+ Years Experience", percentage: 70 },
    { Component: FinclipLogo, name: "MiniProgram", description: "1+ Years Experience", percentage: 79 },
  ],
  "Embedded Programming": [
    { Component: SiC, name: "C", description: "6+ Years Experience", percentage: 94 },
    { Component: SiCplusplus, name: "C++", description: "6+ Years Experience", percentage: 85 },
  ]
};

const nonTechnicalSkills = {
  management: [
    { src: PMLogo, name: "Project Management", description: "5+ Years Experience." },
    { src: LeadershipLogo, name: "Team Leadership", description: "2+ Years Experience." },
    { src: ManPowerPlanLogo, name: "Man Power Planning", description: "1+ Years Experience." },
    { src: TechStandardsLogo, name: "Technical Standards", description: "1+ Years Experience." },
    { src: UXLogo, name: "User Experience", description: "1+ Years Experience." },
    { src: ProductOwnershipLogo, name: "Product Ownership", description: "1+ Years Experience." }, 
  ],
  individualContributor: [
    { src: WebDevIcon, name: "Web Development", description: "9+ Years Experience." },
    { src: AppDevIcon, name: "App Development", description: "6+ Years Experience." },
    { src: PrototypingLogo, name: "Full-Stack Prototyping", description: "2+ Years Experience." },
  ],
};



const getSkillColor = (name) => {
  const colors = {
    JavaScript: "#F7DF1E",
    React: "#61DAFB",
    TypeScript: "#3178C6",
    Kotlin: "#A97BFF",
    "C++": "#00599C",
    C: "#A8B9CC",
    Git: "#F05032",
    Go: "#00ADD8",
    NodeJS: "#339933",
    ExpressJS: "#000000",
    RabbitMQ: "#FF6600",
    PHP: "#777BB4",
    MySQL: "#4479A1",
    MongoDB: "#47A248",
    NextJS: "#000000",
    Docker: "#2496ED",
    Kubernetes: "#326CE5",
    Jest: "#C21325",
    SonarQube: "#4E9BCD",
    StorybookJS: "#FF4785",
    RollupJS: "#EC4A3F",
    ReactContextAPI: "#61DAFB",
    ReactNative: "#61DAFB",
    Redux: "#764ABC",
    AntDesign: "#0170FE",
    TailwindCSS: "#06B6D4",
    GoogleMapAPI: "#4285F4",
    OpenStreetMap: "#7EBC6F",
    HTML5: "#E34F26",
    CSS3: "#1572B6",
    Angular: "#DD0031",
    Vue: "#42B883"
  };
  return colors[name] || "#1F2430";
};

  
function getSkillProgressColor(percentage) {
  if (percentage >= 65) return "green"; 
  if (percentage >= 40) return "orange"; 
  return "red"; 
}

const renderSkillCard = (skill, index) => (
  <div
    key={index}
    className="flex items-center gap-3 bg-white border-2 p-3 rounded-md shadow-md"
    style={{ borderColor: "#1F2430" }}
  >
     {skill.name === "ViteJS" ? (
      <img src={ViteLogo} alt="ViteJS" className="h-12 w-12 object-contain" />
      ) : skill.name === "Zustand" ? (
        <img src={ZustandLogo} alt="Zustand" className="h-12 w-12 object-contain" />
      ) : skill.name === "MiniProgram" ? (
        <img src={FinclipLogo} alt="MiniProgram" className="h-12 w-12 object-contain" />
      ) : skill.name === "RestAPI" ? (
        <img src={RestAPILogo} alt="RestAPI" className="h-12 w-12 object-contain" />
      ): (
        <skill.Component
          className="h-12 w-12"
          style={{ fill: getSkillColor(skill.name), color: getSkillColor(skill.name) }}
        />
      )}
      
    <div className="flex-1">
      <h3 className="text-base font-semibold text-[#1F2430]">{skill.name}</h3>
      <p className="text-sm text-[#1F2430]">{skill.description}</p>
    </div>
    <div className="w-full sm:w-4/6 flex flex-col items-start">
      <span className="text-xs text-gray-600 mb-1">Proficiency Level</span>
      <div className="relative w-full h-2 bg-gray-200 rounded overflow-hidden" title={`Proficiency: ${skill.percentage}%`}>
        <div
          className="absolute top-0 left-0 h-full rounded"
          style={{
            width: `${skill.percentage}%`,
            backgroundColor: getSkillProgressColor(skill.percentage),
          }}
        ></div>
      </div>
    </div>
  </div>
);

const Skills = () => {
  const mainTabs = Object.keys(technicalSkillsByCategory);

  const [activeMainTab, setActiveMainTab] = useState("Web Programming");
  const [activeSubTab, setActiveSubTab] = useState("Frontend Stack");
  const [activeFrontendChildTab, setActiveFrontendChildTab] = useState("");
  const [activeBackendChildTab, setActiveBackendChildTab] = useState("");

  return (
    <div id="Skills" className={`${containerStyle}`}>
      <PageTitle title="Work Experience & Expertise" />

      <div className="flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
          <PageTitle title="Work Experience" />
            <div className="flex flex-col gap-6">
            <div className="border-2 border-[#1F2430] rounded-lg p-4 shadow-md">
              <h3
                className="text-lg font-bold text-[#1F2430]"
                style={{ fontSize: '25px', fontWeight: 'bold' }}
              >
                PT. KALDU SARI NABATI INDONESIA (NABATI) - FULL TIME
              </h3>
              <p
                className="text-sm text-gray-700"
                style={{ fontSize: '17px', fontWeight: 'bold' }}
              >
                Mar 2023 - Present · 2 yrs 6 mos
              </p>
               <hr style={{ border: '1px solid #ddd', margin: '20px 0' }} />

            <p style={{ fontSize: '19px', fontWeight: 'bold' }}>
              Technical Lead Frontend
            </p>
             
              <p>
              Bandung, West Java, Indonesia · On-site
              </p>
              <span className="text-gray-600" style={{ fontSize: '15px', fontWeight:'bold' }}>
                Apr 2024 - Present · 1yr 4 mos
              </span>
               <hr style={{ border: '1px solid #ddd', margin: '20px 0' }} />
               <span style={{ fontSize: '15px', fontWeight:'bold' }}>
               Duties & Responsibilites :
              </span>
              <ul className="list-disc ml-5 mt-1 text-sm text-[#1F2430]">
              <li>Lead and manage a team of 10 Frontend Developers, driving project quality and delivery, and optimizing team performance through KPI setting, Manpower Planning, and timeline estimation.</li>
              <li>Lead the creation, development, and management of web-based SaaS solutions, including new system builds and enhancements.</li>
              <li>Continuously improve the Software Development Life Cycle (SDLC) processes.</li>
              <li>Contribute as a Full-Stack developer to create demo products for end-users.</li>
            </ul>

            <b>Notable Projects:</b>
            <ul className="list-disc ml-5 mt-1 text-sm text-[#1F2430]">
              <li>Developed and managed key SaaS(Software as a Service) solutions including a Single UI Library (used across 10+ projects), SFA, ERP, and HRIS systems, along with specialized tools like Salesman Tracker (8,000+ stores/outlets), Surveyor Application, Routing Management System and a Restaurant Mapping System.</li>
            </ul>

            <b>Achievements:</b>
            <ul className="list-disc ml-5 mt-1 text-sm text-[#1F2430]">
              <li>Improved Frontend code quality by 100% through SonarQube implementation.</li>
              <li>Reduced UI Library build/update time by up to 80% through team guidance and optimization.</li>
              <li>Reduced code errors by 70% by introducing 1:1 code reviews.</li>
              <li>Increased test coverage by 100% via adoption of Jest for unit testing.</li>
            </ul>

            <b>Tech Stack(s):</b>
            <ul className="list-disc ml-5 mt-1 text-sm text-[#1F2430]">
              <li><b>Frontend:</b> React.js, Next.js, Vite.js, Rollup.js, Ant Design, Tailwind CSS, Zustand, Storybook.js</li>
              <li><b>Mobile:</b> React Native, Mini Program</li>
              <li><b>Backend:</b> Node.js, Express.js, RESTful API, GO-Lang</li>
              <li><b>Testing & Quality:</b> Jest, SonarQube</li>
            </ul>
              <hr style={{ border: '1px solid #ddd', margin: '20px 0' }} />
              <p style={{ fontSize: '17px', fontWeight: 'bold' }}>Sr. Frontend Developer</p>
              <span className="text-gray-600" style={{ fontSize: '15px', fontWeight:'bold' }}>
                Mar 2023 - Apr 2024 · 1 yr 2 mos
              </span>
              <hr style={{ border: '1px solid #ddd', margin: '20px 0' }} />
             <b>Duties & Responsibilities :</b>
              <ul className="list-disc ml-5 mt-1 text-sm text-[#1F2430]">
                <li>
                  Create, develop, and manage the company's web-based ERP system based on
                  user requirements.
                </li>
              </ul>
              <b>Tech Stack(s) :</b>
               <ul className="list-disc ml-5 mt-1 text-sm text-[#1F2430]">
                <li>
                  React.js, Next.js, Ant Design, React Context API, React Native
                </li>
              </ul>

            </div>

              <div className="border-2 border-[#1F2430] rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-bold text-[#1F2430]" style={{fontSize:'22px', fontWeight:'bold'}}>
                  PT. ARAH DINAMIKA ABADI - FULL TIME
                </h3>
                <p className="text-sm text-gray-700" style={{fontSize:'18px', fontWeight:'bold'}}>
                  Dec 2016 - Mar 2023 · 6 yrs 4 mos
                </p>
                <hr style={{ border: '1px solid #ddd', margin: '20px 0' }} />
                <p style={{ fontSize: '17px', fontWeight: 'bold' }}>
                Frontend Developer
                </p>
                <p>
                South Jakarta, DKI Jakarta, Indonesia · On-site
                </p>
                <p
                className="text-sm text-gray-700"
                style={{ fontSize: '15px', fontWeight: 'bold' }}
                >
                  Dec 2016 - Mar 2023 · 6 yrs 4 mos
                </p>
                <hr style={{ border: '1px solid #ddd', margin: '20px 0' }} />
                <span style={{ fontSize: '15px', fontWeight:'bold' }}>
                 Duties & Responsibilites :
                </span>
                <ul className="list-disc ml-5 mt-2 text-sm text-[#1F2430]">
                  <li>
                    <li>
                      Developed and managed secure EDC applications using the ISO8583 Protocol, ensuring compliance with NSICCS Standards through robust security and verification.
                    </li>
                    <li>Collaborated with cross-functional teams to meet client application requirements, performing debugging and tracing for pre/post-UAT issues.</li>
                    <li>Controlled and managed applications via Web-Based TMS (Terminal Management System), including necessary migrations.</li>
                  </li>
                  
                </ul>
                <p className="font-semibold mt-2">Notable Projects:</p>
                <ul className="list-disc ml-5 mt-1 text-sm text-[#1F2430]">
                    <li>Bank BPD Bali, Bank BPD NTT, Bank Nasional Indonesia, Bank Syariah Mandiri (Now BSI), Bank Aceh Syariah, Bank Victoria, Bank BPD Jateng.</li>
                </ul>
                 <b>Tech Stack(s) :</b>
                  <ul className="list-disc ml-5 mt-1 text-sm text-[#1F2430]">
                    <li>
                      .C, .C++, PHP, Kotlin
                    </li>
                  </ul>
              </div>

              <div className="border-2 border-[#1F2430] rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-bold text-[#1F2430]" style={{fontSize:'22px', fontWeight:'bold'}}>
                  PT. PELAYARAN NELLY DWI PUTRI Tbk. - FULL TIME
                </h3>
                <p className="text-sm text-gray-700" style={{fontSize:'18px', fontWeight:'bold'}}>
                 Mar 2013 - Nov 2016 · 3 yrs 9 mos
                </p>
                <hr style={{ border: '1px solid #ddd', margin: '20px 0' }} />
                <p style={{ fontSize: '17px', fontWeight: 'bold' }}>
                ICT Staff & ICT Administrator
                </p>
                <p>
                Central Jakarta, DKI Jakarta, Indonesia · On-site
                </p>
                <hr style={{ border: '1px solid #ddd', margin: '20px 0' }} />
                <span style={{ fontSize: '15px', fontWeight:'bold' }}>
                 Duties & Responsibilites :
                </span>
                <ul className="list-disc ml-5 mt-2 text-sm text-[#1F2430]">
                  <li>Managed IT administration and network infrastructure (MikroTik).</li>
                  <li>Performed routine hardware/software maintenance and troubleshooting for 40+ company PCs/laptops, along with repair services.</li>
                </ul>
                <p className="font-semibold mt-2">Notable Projects:</p>
                <ul className="list-disc ml-5 mt-1 text-sm text-[#1F2430]">
                  <li>
                    Developed web-based SMS Gateway Management System and the company's official website (www.nellydwiputri.co.id).
                  </li>
                  <li>Implemented routine company file backups using open-source applications.</li>
                </ul>
                 <b>Tech Stack(s) :</b>
                  <ul className="list-disc ml-5 mt-1 text-sm text-[#1F2430]">
                    <li>
                      HTML, CSS, PHP, MySQL
                    </li>
                  </ul>
              </div>
            </div>
          </div>
    
          <div className="w-full lg:w-1/2">
            <PageTitle title="Technical Skills" />

            <div className="flex flex-wrap gap-3 mb-6">
              {mainTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveMainTab(tab);
                    if (tab === "Web Programming") {
                      setActiveSubTab("Frontend Stack");
                      setActiveFrontendChildTab("Languages");
                    } else if (tab === "Backend Stack") {
                      setActiveSubTab("Backend Stack");
                      setActiveBackendChildTab("Languages & Runtime");
                    } else {
                      setActiveSubTab(tab);
                      setActiveFrontendChildTab("");
                      setActiveBackendChildTab("");
                    }
                  }}
                  className={`px-4 py-2 rounded-full border font-semibold transition-all ${
                    activeMainTab === tab
                      ? "bg-[#1F2430] text-white"
                      : "bg-white text-[#1F2430] hover:bg-[#fedf89]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeMainTab === "Web Programming" && (
              <div className="flex flex-wrap gap-3 mb-6">
                {Object.keys(technicalSkillsByCategory["Web Programming"]).map((subTab) => (
                  <button
                    key={subTab}
                    onClick={() => {
                      setActiveSubTab(subTab);
                      if (subTab === "Frontend Stack") {
                        setActiveFrontendChildTab("Languages");
                      } else if (subTab === "Backend Stack") {
                        setActiveBackendChildTab("Languages & Runtime");
                      } else {
                        setActiveFrontendChildTab("");
                        setActiveBackendChildTab("");
                      }
                    }}
                    className={`px-3 py-1 rounded-full border text-sm transition-all ${
                      activeSubTab === subTab
                        ? "bg-[#1F2430] text-white"
                        : "bg-white text-[#1F2430] hover:bg-[#fedf89]"
                    }`}
                  >
                    {subTab}
                  </button>
                ))}
              </div>
            )}

            {activeMainTab === "Web Programming" &&
              activeSubTab === "Frontend Stack" &&
              typeof technicalSkillsByCategory["Web Programming"]["Frontend Stack"] === "object" && (
                <div className="flex flex-wrap gap-3 mb-6">
                  {Object.keys(
                    technicalSkillsByCategory["Web Programming"]["Frontend Stack"]
                  ).map((childTab) => (
                    <button
                      key={childTab}
                      onClick={() => setActiveFrontendChildTab(childTab)}
                      className={`px-3 py-1 rounded-full border text-sm transition-all ${
                        activeFrontendChildTab === childTab
                          ? "bg-[#1F2430] text-white"
                          : "bg-white text-[#1F2430] hover:bg-[#fedf89]"
                      }`}
                    >
                      {childTab}
                    </button>
                  ))}
                </div>
              )}

            {activeMainTab === "Web Programming" &&
              activeSubTab === "Backend Stack" &&
              typeof technicalSkillsByCategory["Web Programming"]["Backend Stack"] === "object" && (
                <div className="flex flex-wrap gap-3 mb-6">
                  {Object.keys(
                    technicalSkillsByCategory["Web Programming"]["Backend Stack"]
                  ).map((childTab) => (
                    <button
                      key={childTab}
                      onClick={() => setActiveBackendChildTab(childTab)}
                      className={`px-3 py-1 rounded-full border text-sm transition-all ${
                        activeBackendChildTab === childTab
                          ? "bg-[#1F2430] text-white"
                          : "bg-white text-[#1F2430] hover:bg-[#fedf89]"
                      }`}
                    >
                      {childTab}
                    </button>
                  ))}
                </div>
              )}

            <AnimatePresence mode="wait">
              <motion.div
                key={
                  activeMainTab +
                  activeSubTab +
                  (activeFrontendChildTab || "") +
                  (activeBackendChildTab || "")
                }
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-4 mb-8"
              >
                {activeMainTab === "Web Programming" ? (
                  activeSubTab === "Frontend Stack" && activeFrontendChildTab ? (
                    technicalSkillsByCategory["Web Programming"]["Frontend Stack"][activeFrontendChildTab]?.map(renderSkillCard)
                  ) : activeSubTab === "Backend Stack" && activeBackendChildTab ? (
                    technicalSkillsByCategory["Web Programming"]["Backend Stack"][activeBackendChildTab]?.map(renderSkillCard)
                  ) : activeSubTab !== "Frontend Stack" && activeSubTab !== "Backend Stack" ? (
                    technicalSkillsByCategory["Web Programming"][activeSubTab]?.map(renderSkillCard)
                  ) : null
                ) : (
                  technicalSkillsByCategory[activeMainTab]?.map(renderSkillCard)
                )}
              </motion.div>
            </AnimatePresence>

            <PageTitle title="Versioning Tools" />
            <div className="flex flex-col gap-3 mt-4 mb-8">
              {versioningTools.map(renderSkillCard)}
            </div>

            <PageTitle title="Non-Technical Skills" />
              <h4 className="text-lg font-semibold text-[#1F2430] mb-2 mt-4">Management Skills</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {nonTechnicalSkills.management.map((skill, index) => (
                  <div
                    key={`management-${index}`}
                    className="flex items-center gap-4 bg-white border-2 p-3 rounded-md shadow-md"
                    style={{ borderColor: "#1F2430" }}
                  >
                    <img src={skill.src} alt={skill.name} className="h-12 w-12 object-contain" />
                    <div>
                      <h3 className="text-base font-semibold text-[#1F2430]">{skill.name}</h3>
                      <p className="text-sm text-[#1F2430]">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h4 className="text-lg font-semibold text-[#1F2430] mb-2 mt-6">Individual Contributor Skills</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {nonTechnicalSkills.individualContributor.map((skill, index) => (
                  <div
                    key={`ic-${index}`}
                    className="flex items-center gap-4 bg-white border-2 p-3 rounded-md shadow-md"
                    style={{ borderColor: "#1F2430" }}
                  >
                    <img src={skill.src} alt={skill.name} className="h-12 w-12 object-contain" />
                    <div>
                      <h3 className="text-base font-semibold text-[#1F2430]">{skill.name}</h3>
                      <p className="text-sm text-[#1F2430]">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
