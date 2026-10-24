import { useEffect, useRef, useState } from 'react';
import { FiFileText } from 'react-icons/fi';

const cvOptions = [
  { language: 'English', file: 'CV_Andri-Pramuji-ATS.pdf', download: 'Andri_Pramuji_CV_ATS_English.pdf' },
  { language: 'Bahasa Indonesia', file: 'CV_Andri-Pramuji-ATS-Indonesia.pdf', download: 'Andri_Pramuji_CV_ATS_Indonesia.pdf' },
];

export default function ResumeDownload() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const dismiss = event => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('pointerdown', dismiss);
    return () => document.removeEventListener('pointerdown', dismiss);
  }, [open]);

  const focusOption = last => {
    setOpen(true);
    requestAnimationFrame(() => {
      const options = rootRef.current?.querySelectorAll('[role="menuitem"]');
      options?.[last ? options.length - 1 : 0]?.focus({ preventScroll: true });
    });
  };
  return (
    <div className="resume-download" ref={rootRef}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}
      onKeyDown={event => {
        if (event.key === 'Escape' && open) {
          event.preventDefault();
          event.stopPropagation();
          setOpen(false);
          buttonRef.current?.focus({ preventScroll: true });
        }
      }}>
      <button type="button" className="sidebar-resume" ref={buttonRef}
        aria-haspopup="menu" aria-expanded={open} aria-controls="resume-language-menu"
        onClick={() => setOpen(current => !current)}
        onKeyDown={event => {
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            focusOption(event.key === 'ArrowUp');
          }
        }}>
        <FiFileText aria-hidden="true" /> Download CV ↓
      </button>
      {open && (
        <div className="resume-language-menu" id="resume-language-menu" role="menu" aria-label="CV language"
          onKeyDown={event => {
            if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
            const options = [...event.currentTarget.querySelectorAll('[role="menuitem"]')];
            const current = options.indexOf(document.activeElement);
            const next = event.key === 'Home' ? 0 : event.key === 'End' ? options.length - 1 : (current + (event.key === 'ArrowUp' ? -1 : 1) + options.length) % options.length;
            event.preventDefault();
            options[next]?.focus({ preventScroll: true });
          }}>
          {cvOptions.map(option => (
            <a key={option.file} role="menuitem" href={`${import.meta.env.BASE_URL}documents/${option.file}`}
              download={option.download} onClick={() => setOpen(false)}>
              <FiFileText aria-hidden="true" />{option.language}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
