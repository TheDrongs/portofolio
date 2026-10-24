import { useEffect, useRef, useState } from 'react';
import { FiX } from 'react-icons/fi';

const menuNames = ['file', 'explore'];

export default function WindowMenu({ sections, onNavigate, onExit }) {
  const [active, setActive] = useState(null);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const dismiss = event => {
      if (!rootRef.current?.contains(event.target)) setActive(null);
    };
    document.addEventListener('pointerdown', dismiss);
    return () => document.removeEventListener('pointerdown', dismiss);
  }, [active]);

  const trigger = name => rootRef.current?.querySelector(`[data-window-menu="${name}"]`);
  const openAndFocus = (name, last = false) => {
    setActive(name);
    requestAnimationFrame(() => {
      const items = rootRef.current?.querySelectorAll(`#window-${name}-menu [role="menuitem"]`);
      items?.[last ? items.length - 1 : 0]?.focus();
    });
  };
  const dismiss = name => {
    setActive(null);
    trigger(name)?.focus();
  };
  const switchMenu = (event, name) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return false;
    const next = menuNames[(menuNames.indexOf(name) + 1) % menuNames.length];
    event.preventDefault();
    if (active) openAndFocus(next);
    else trigger(next)?.focus();
    return true;
  };
  const handleTriggerKey = (event, name) => {
    if (switchMenu(event, name)) return;
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      openAndFocus(name, event.key === 'ArrowUp');
    } else if (event.key === 'Escape' && active) {
      event.stopPropagation();
      event.preventDefault();
      dismiss(name);
    }
  };
  const handleMenuKey = (event, name) => {
    if (switchMenu(event, name)) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      dismiss(name);
      return;
    }
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    const items = [...event.currentTarget.querySelectorAll('[role="menuitem"]')];
    const index = items.indexOf(document.activeElement);
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : (index + (event.key === 'ArrowUp' ? -1 : 1) + items.length) % items.length;
    event.preventDefault();
    items[next]?.focus();
  };

  return (
    <div className="window-menu" ref={rootRef} onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget)) setActive(null);
    }}>
      <div className="window-menu-actions" role="menubar" aria-label="Portfolio menu">
        {menuNames.map(name => (
          <div className="window-menu-group" key={name} role="none"
            onPointerEnter={event => { if (event.pointerType === 'mouse') setActive(name); }}
            onPointerLeave={event => { if (event.pointerType === 'mouse') setActive(null); }}>
            <button className="window-menu-trigger" role="menuitem" data-window-menu={name}
              aria-haspopup="menu" aria-expanded={active === name} aria-controls={`window-${name}-menu`}
              onKeyDown={event => handleTriggerKey(event, name)}
              onClick={event => {
                if (event.nativeEvent.pointerType === 'mouse') setActive(name);
                else setActive(current => current === name ? null : name);
              }}>
              {name === 'file' ? 'File' : 'Explore'}
            </button>
            {active === name && (
              <div className="window-menu-popup" id={`window-${name}-menu`} role="menu"
                aria-label={`${name === 'file' ? 'File' : 'Explore'} menu`} onKeyDown={event => handleMenuKey(event, name)}>
                {name === 'file' ? (
                  <button role="menuitem" onClick={() => { setActive(null); onExit(); }}><FiX aria-hidden="true" />Exit</button>
                ) : sections.map(({ id, label, Icon }) => (
                  <button role="menuitem" key={id} onClick={() => { setActive(null); onNavigate(id); }}><Icon aria-hidden="true" />{label}</button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <span className="window-menu-note">Made with curiosity</span>
    </div>
  );
}
