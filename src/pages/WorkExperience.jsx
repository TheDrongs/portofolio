import { PageTitle } from "../components/components.js";
import { containerStyle } from "./styles.js";

const monthDate = (date) => {
  const [year, month] = date.split("-").map(Number);
  return new Date(year, month - 1, 1);
};

const addMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 1);

const getDuration = (startDate, endDate) => {
  const start = monthDate(startDate);
  const end = endDate ? addMonth(monthDate(endDate)) : addMonth(new Date());

  const totalMonths = Math.max(
    0,
    (end.getFullYear() - start.getFullYear()) * 12 +
      end.getMonth() -
      start.getMonth()
  );

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return (
    [
      years ? `${years} yr${years > 1 ? "s" : ""}` : "",
      months ? `${months} mo${months > 1 ? "s" : ""}` : "",
    ]
      .filter(Boolean)
      .join(" ") || "0 mo"
  );
};

const period = (startLabel, startDate, endLabel = "Present", endDate) =>
  `${startLabel} - ${endLabel} · ${getDuration(startDate, endDate)}`;

const workExperiences = [
  {
    company: "PT. KALDU SARI NABATI INDONESIA (NABATI) - FULL TIME",
    period: period("Mar 2023", "2023-03-01"),
    roles: [
      {
        title: "Squad Leader",
        location: "Bandung, West Java, Indonesia · On-site",
        period: period("Dec 2025", "2025-12-01"),
        duties: [
          "Led a 7-person frontend and backend team, working with 2 QA members from a separate function, to translate business goals into sprint-ready tasks, align delivery, unblock execution, maintain code quality, and keep clear documentation.",
        ],
        techStacks: [
          ["Frontend", "React, Next.js, TypeScript"],
          ["Backend", "GO, MongoDB, Redis"],
          ["Testing & Quality", "Jest"],
          ["Observability", "Grafana, OpenTelemetry, Elastic APM"],
          ["Tools & Platforms", "Vault, ArgoCD"],
        ],
      },
      {
        title: "Technical Lead Frontend",
        location: "Bandung, West Java, Indonesia · On-site",
        period: period("Apr 2024", "2024-04-01", "Dec 2025", "2025-12-01"),
        duties: [
          "Led a 12-person frontend team supporting SaaS delivery, legacy support, MPP, KPI tracking, risk management, and performance review input.",
          "Implemented SonarQube and reduced technical debt by 90% within 6 months.",
          "Led the UI library improvement initiative, reducing build time by 80% in 3 months.",
          "Lowered code issues by 70% through 1:1 reviews and supported reusable UI library adoption across 10+ projects and internal business applications.",
        ],
        notableProjects: [
          "Led development of strategic SaaS platforms, including a reusable UI library (adopted by 10+ projects), SFA, ERP, and HRIS systems.",
          "Delivered custom digital tools such as Salesman Tracker (8,000+ outlets), Surveyor App, Routing System, and Restaurant Mapping.",
        ],
        techStacks: [
          [
            "Frontend",
            "React.js, Next.js, Vite.js, Rollup.js, Ant Design, Tailwind CSS, Zustand, Storybook.js",
          ],
          ["Mobile", "React Native, Mini Program"],
          [
            "Backend",
            "GO-Lang, Node.js, Express.js, RESTful API, RabbitMQ, Redis",
          ],
          ["Testing & Quality", "Jest, SonarQube"],
        ],
      },
      {
        title: "Sr. Frontend Developer",
        location: "Bandung, West Java, Indonesia · On-site",
        period: period("Mar 2023", "2023-03-01", "Apr 2024", "2024-04-01"),
        duties: [
          "Create, develop, and manage the company's web-based ERP system based on user requirements.",
        ],
        techStacks: [
          [
            "",
            "React.js, Next.js, Ant Design, React Context API, React Native",
          ],
        ],
      },
    ],
  },
  {
    company: "PT. ARAH DINAMIKA ABADI - FULL TIME",
    period: period("Dec 2016", "2016-12-01", "Mar 2023", "2023-03-01"),
    roles: [
      {
        title: "Frontend Developer",
        location: "South Jakarta, DKI Jakarta, Indonesia · On-site",
        period: period("Dec 2016", "2016-12-01", "Mar 2023", "2023-03-01"),
        duties: [
          "Developed and managed secure ISO8583 EDC applications, NSICCS-compliant, collaborating with cross-functional teams, including TMS and pre & post UAT support.",
        ],
        notableProjects: [
          "Bank BPD Bali, Bank BPD NTT, Bank Nasional Indonesia, Bank Syariah Mandiri (Now BSI), Bank Aceh Syariah, Bank Victoria, Bank BPD Jateng.",
        ],
        techStacks: [["", ".C, .C++, PHP, Kotlin"]],
      },
    ],
  },
  {
    company: "PT. PELAYARAN NELLY DWI PUTRI Tbk. - FULL TIME",
    period: period("Mar 2013", "2013-03-01", "Nov 2016", "2016-11-01"),
    roles: [
      {
        title: "ICT Staff & ICT Administrator",
        location: "Central Jakarta, DKI Jakarta, Indonesia · On-site",
        duties: [
          "IT infrastructure & network (MikroTik), end-to-end support for 40+ PCs, and delivery of internal web systems (SMS Gateway, company website) with automated backups.",
        ],
        notableProjects: [
          "Developed web-based SMS Gateway Management System and the company's official website (www.nellydwiputri.co.id).",
          "Implemented routine company file backups using open-source applications.",
        ],
        techStacks: [["", "HTML, CSS, PHP, MySQL"]],
      },
    ],
  },
];

const Hr = () => <hr style={{ border: "1px solid #ddd", margin: "20px 0" }} />;

const SectionList = ({ title, items }) =>
  items?.length ? (
    <>
      <b>{title}</b>
      <ul className="list-disc ml-5 mt-1 text-sm text-[#1F2430]">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  ) : null;

const TechStackList = ({ items }) =>
  items?.length ? (
    <>
      <b>Tech Stack(s) :</b>
      <ul className="list-disc ml-5 mt-1 text-sm text-[#1F2430]">
        {items.map(([label, value], index) => (
          <li key={index}>
            {label && (
              <>
                <b>{label}:</b>{" "}
              </>
            )}
            {value}
          </li>
        ))}
      </ul>
    </>
  ) : null;

const WorkExperience = () => (
  <div id="WorkExperience" className={containerStyle}>
    <div className="flex flex-col gap-6">
      {workExperiences.map(({ company, period, roles }, companyIndex) => (
        <div
          key={company}
          className="border-2 border-[#1F2430] rounded-lg p-4 shadow-md bg-white"
        >
          <h3
            className="text-lg font-bold text-[#1F2430]"
            style={{
              fontSize: companyIndex === 0 ? "25px" : "22px",
              fontWeight: "bold",
            }}
          >
            {company}
          </h3>

          <p
            className="text-sm text-gray-700"
            style={{
              fontSize: companyIndex === 0 ? "17px" : "18px",
              fontWeight: "bold",
            }}
          >
            {period}
          </p>

          {roles.map((role, roleIndex) => (
            <div key={role.title}>
              <Hr />

              <p
                style={{
                  fontSize:
                    companyIndex === 0 && roleIndex === 0 ? "19px" : "17px",
                  fontWeight: "bold",
                }}
              >
                {role.title}
              </p>

              {role.location && <p>{role.location}</p>}

              {role.period && (
                <p
                  className="text-sm text-gray-700"
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  {role.period}
                </p>
              )}

              <Hr />

              <SectionList title="Role Overview :" items={role.duties} />
              <SectionList
                title="Notable Projects:"
                items={role.notableProjects}
              />
              <SectionList title="Achievements:" items={role.achievements} />
              <TechStackList items={role.techStacks} />
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default WorkExperience;