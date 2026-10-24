import { FaAws } from 'react-icons/fa';
import { SiOpenai, SiClaude, SiVault, SiSonarqubeserver } from 'react-icons/si';
import { FiUsers, FiLayers, FiGitBranch, FiTool, FiCpu, FiCloud, FiCheckCircle, FiClipboard, FiMessageCircle, FiShield, FiCalendar, FiHexagon, FiZap, FiBox, FiUserCheck, FiCode, FiDatabase, FiLink } from 'react-icons/fi';
import { getTechIconInfo } from './icons/techStackIcons';

const icons = {
  leadership: FiUsers,
  architecture: FiLayers,
  frontend: FiCode,
  backend: FiDatabase,
  cloud: FiCloud,
  'version-control': FiGitBranch,
  management: FiTool,
  embedded: FiCpu,
  cpu: FiCpu,
  users: FiUsers,
  message: FiMessageCircle,
  calendar: FiCalendar,
  shield: FiShield,
  'user-check': FiUserCheck,
  clipboard: FiClipboard,
  monolithic: FiBox,
  layered: FiLayers,
  'event-driven': FiGitBranch,
  clean: FiCheckCircle,
  hexagonal: FiHexagon,
  iteration: FiGitBranch,
  aws: FaAws,
  vault: SiVault,
  sonarqube: SiSonarqubeserver,
  grpc: FiLink,
  codex: SiOpenai,
  claudecode: SiClaude,
  kiro: FiCpu,
  antigravity: FiZap,
};


// Chromatic accents also cover brands whose standard mark is monochrome.
const iconColors = {
  leadership: '#8b5cf6', architecture: '#6366f1', frontend: '#0c8fba',
  backend: '#168d70', cloud: '#ea8a13', 'version-control': '#e15a38',
  management: '#d64c8b', embedded: '#537bd4', cpu: '#8b5cf6',
  users: '#a44cce', message: '#078ca1', calendar: '#d2682a',
  shield: '#169275', 'user-check': '#9370d8', clipboard: '#3d83c9',
  monolithic: '#d47b25', layered: '#8661c8', 'event-driven': '#d0539b',
  clean: '#14936e', hexagonal: '#5b73d5', iteration: '#d5742e',
  delivery: '#dc8430', quality: '#23966c', documentation: '#4f7fce',
  ai: '#9d58d5', aws: '#e98b0b', codex: '#10a37f', claudecode: '#c96945',
  kiro: '#9862d1', antigravity: '#427ce4',
  javascript: '#c49a08', typescript: '#3178c6', react: '#098faf',
  reactnative: '#098faf', nextjs: '#7056c8', radixui: '#9764ce',
  express: '#659337', opentelemetry: '#e48f13', protobuf: '#7161be',
  microservices: '#2c8dbb', microfrontends: '#8d65c8', monorepo: '#db783b',
  reactquery: '#e85268', axios: '#7354c5', miniprogram: '#0aac7f',
  grpc: '#119fa2', cron: '#b77727', playwright: '#249c58',
  git: '#ef5737', gitlab: '#e8752b', githubactions: '#2685d1',
  jira: '#2675d5', clickup: '#9957de', youtrack: '#e34897',
  vault: '#c49a08', sonarqube: '#3277b2', c: '#5b7dcc',
};

export default function SkillIcon({ iconKey }) {
  const { IconComponent, assetIcon, color } = getTechIconInfo(iconKey);
  const Icon = icons[iconKey] || IconComponent || FiCode;
  const tint = iconColors[iconKey] || color;
  return (
    <span className="skill-glyph" style={{ "--skill-color": tint }} aria-hidden="true">
      {assetIcon && !icons[iconKey] ? <img src={assetIcon} alt="" loading="lazy" /> : <Icon color={tint} />}
    </span>
  );
}
