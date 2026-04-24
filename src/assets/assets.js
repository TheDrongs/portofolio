import {
  FaLinkedin,
  FaHtml5,
  FaGitAlt,
  FaJs,
  FaCss3Alt,
  FaReact,
} from "react-icons/fa";
import { TbBrandCpp, TbBrandKotlin, TbBrandTypescript } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";
import Hacktiv8Certificate from "../assets/certificate/hacktiv8.jpg"
import GolangCertificate from "../assets/certificate/golang.jpg"
import DockerKubernetesCertificate from "../assets/certificate/dockerKubernetes.jpg"
import EDCScreenshot from "../assets/projectScreenshot/EDC-LIST.png"
import TermManageEDC from "../assets/projectScreenshot/Terminal-Management-System.jpg"
import PelayaranNelly from "../assets/projectScreenshot/Pelayaran-Nelly-Dwi-Putri-Tbk.png"
import ErpScreenshot from "../assets/projectScreenshot/Erp.png"
import SfaScreenshot from "../assets/projectScreenshot/Sfa.png"
import SurveyorScreenshot from "../assets/projectScreenshot/surveyor-app.png"
import RestaurantScreenshot from "../assets/projectScreenshot/restaurant-system.png"
import BinusLogo from "../assets/Logo-BINUS-University.png";

const footerIcons = [
  {
    name: "linkedIn", 
    component: FaLinkedin, 
    link: "https://www.linkedin.com/in/andri-p-47aa42220/", 
  },
  {
    name: "github",
    component: IoLogoGithub, 
    link: "https://github.com/TheDrongs",
  },
];

const textLogo = "Andri Pramuji - Technical Lead Software Engineer";
const imgLogo = null;

const navElements = ["About", "Education", "Skills", "Projects", "Contact"];

const AboutPage = {
  authorProfile: "", 
 authorDescription:
  "Experienced Software Engineer with 13+ years of experience across web, mobile, and desktop environments, along with 3+ years in leadership roles, focused on building and scaling custom SaaS and internal business systems.\n\nStrong focus on team alignment, clear execution, and maintaining engineering quality to support effective collaboration and sustainable business delivery.\nLeads with clarity and accountability, while continuously developing both self and team to support sustainable delivery and long-term organizational impact.",
  getInTouchUrl: "#Contact",
  authorName: "Andri Pramuji", 
  profileImgTagLine: "Technical Lead Frontend @ Kaldu Sari Nabati Indonesia", 
  authorContactMail: "", 
  authorContactNumber: "-", 
};

const EducationPage = [
  {
    degreeType: "Bachelor of Computer Science (S.Kom)",
    graduationYear: "2007 - 2012",
    institution: "Bina Nusantara University (BINUS)",
    institutionUrl: "https://binus.ac.id",
    institutionLogo: BinusLogo,
  },
];

const CertificatesPage = [
  {
    img: Hacktiv8Certificate, 
    title: "React & React Native", 
    description: "Issued Dec 2022", 
    issuedBy: "Hacktiv8",
    credentialURL: "", 
  },
   {
    img: GolangCertificate, 
    title: "GO-Lang Beginner to Master", 
    description: "Issued June 2025", 
    issuedBy: "UDEMY", 
    credentialURL: "https://www.udemy.com/certificate/UC-4fba38e0-1953-4a0d-8931-105f75d8bdcc/", 
  },
   {
    img: DockerKubernetesCertificate, 
    title: "Docker & Kubernetes",
    description: "Issued May 2025",
    issuedBy: "UDEMY", 
    credentialURL: "https://www.udemy.com/certificate/UC-d150c485-8c8e-4a04-8999-feff3b989ca6/", 
  },
];

const skillsPage = [
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  TbBrandCpp,
  TbBrandKotlin,
  FaGitAlt,
  TbBrandTypescript,
];

const projectsPage = [
  {
    projectName: "PINPad & MiniATM Projects", 
    projectDescription: "New Project, NSICCS Migration, TMS Update & Migration", 
    projectDetails: "Bank BPD Bali, Bank BPD NTT, Bank Nasional Indonesia, Bank Syariah Mandiri (Now BSI), Bank Aceh Syariah, Bank Victoria, Bank BPD Jateng.",
    projectRole: "Frontend Developer",
    projectURL: "", 
    screenshots: [EDCScreenshot, TermManageEDC],
    tags: ".C, .C++, PHP, Kotlin", 
    date: "Dec 2016 - Mar 2023",
  },
  {
    projectName: "Pelayaran Nelly Dwi Putri TBK. Profile Page", 
    projectDescription: "Compro with CRUD Capabilities for regular IDX checking",
    projectDetails: "Pelayaran Nelly Dwi Putri Tbk. Site : https://nellydwiputri.co.id",
    projectRole: "Full-Stack Developer (FREELANCE)",
    projectURL: "",
    screenshots: [PelayaranNelly],
    tags: "HTML, CSS, JavaScript, PHP, MySQL",
    date: "Oct 2018 - Feb 2019", 
  },
   {
    projectName: "Internal Web Systems(SaaS) at KSNI", 
    projectDescription: "ERP, SFA, UI Library, HRIS, Geo-Mapping App, Geo-Tagging App, etc",
    projectDetails: "Not all Screenshot provided, since some contains confidential information",
    projectRole: "Sr. Frontend Developer -> Technical Lead Frontend & Full-Stack Developer",
    projectURL: "",
    screenshots: [ErpScreenshot, SfaScreenshot, RestaurantScreenshot, SurveyorScreenshot],
    tags: "React.js, React Native, Next.js, Node.js, Express.js",
    date: "Mar 2023 - current", 
  },
];

export {
  navElements,
  textLogo,
  imgLogo,
  AboutPage,
  footerIcons,
  EducationPage,
  skillsPage,
  projectsPage,
  CertificatesPage,
};
