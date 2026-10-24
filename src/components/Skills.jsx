import { FiChevronDown } from 'react-icons/fi';
import { cvSkillGroups, techStack } from '../data/portofolioData';
import SkillIcon from './SkillIcon';

const codingGroups = new Set(['frontend', 'backend-integration', 'other-languages']);

function getCodingExperience(groupKey, iconKey) {
  if (!codingGroups.has(groupKey)) return null;
  const match = techStack
    .filter(skill => skill.iconKey === iconKey)
    .map(skill => skill.experience?.match(/^(<\s*)?(\d+(?:\.\d+)?)(\+)?\s+Years? Experience$/i))
    .find(Boolean);
  if (!match) return null;
  const years = Number(match[2]);
  const amount = (match[1] ? '<' : '') + match[2] + (match[3] || '');
  return amount + ' ' + (years === 1 && !match[1] && !match[3] ? 'year' : 'years');
}

export default function Skills() {
  return (
    <>
      <div className="document-eyebrow">THE TOOLS CHANGE. THE CURIOSITY STAYS.</div>
      <h1>My working<br /><em>toolbox.</em></h1>
      <div className="cv-skills" aria-label="Skills grouped by CV category">
        {cvSkillGroups.map((group, index) => (
          <details className="cv-skill-group" key={group.key} open={index === 0}>
            <summary>
              <SkillIcon iconKey={group.iconKey} />
              <h2>{group.label}</h2>
              <span className="skill-count" aria-label={`${group.items.length} skills`}>{group.items.length}</span>
              <FiChevronDown className="skill-expand" aria-hidden="true" />
            </summary>
            <ul className="cv-skill-items" aria-label={group.label}>
              {group.items.map(item => {
                const experience = getCodingExperience(group.key, item.iconKey);
                return (
                  <li key={item.name}>
                    <SkillIcon iconKey={item.iconKey} />
                    <span className="skill-name">{item.name}</span>
                    {experience && <span className="skill-yoe" aria-label={experience + ' of experience'}>{experience}</span>}
                  </li>
                );
              })}
            </ul>
          </details>
        ))}
      </div>
    </>
  );
}
