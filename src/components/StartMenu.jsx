import { useRef, useState } from 'react';
import { FiChevronRight, FiFolder, FiGrid, FiPlay, FiPower } from 'react-icons/fi';
import { TbCalculator } from 'react-icons/tb';

export default function StartMenu({ onPortfolio, onCalculator, onGame, onShutdown }) {
  const [gamesOpen, setGamesOpen] = useState(false);
  const root = useRef(null);
  const gamesTrigger = useRef(null);
  const focusGame = () => {
    setGamesOpen(true);
    requestAnimationFrame(() => root.current?.querySelector('#start-games-menu [role="menuitem"]')?.focus());
  };
  return (
    <div className="start-menu" id="portfolio-start-menu" role="menu" aria-label="Start menu" ref={root}
      onKeyDown={event => {
        if (!['ArrowDown','ArrowUp','Home','End'].includes(event.key)) return;
        const items = [...event.currentTarget.querySelectorAll('[role="menuitem"]')];
        const index = items.indexOf(document.activeElement);
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : (index + (event.key === 'ArrowUp' ? -1 : 1) + items.length) % items.length;
        event.preventDefault(); items[next]?.focus();
      }}>
      <div className="start-menu-brand" aria-hidden="true">Andri OS</div>
      <div className="start-menu-items">
        <div className="start-games-group" onPointerEnter={event => { if (event.pointerType === 'mouse') setGamesOpen(true); }}
          onPointerLeave={event => { if (event.pointerType === 'mouse') setGamesOpen(false); }}>
          <button type="button" role="menuitem" ref={gamesTrigger} aria-haspopup="menu" aria-expanded={gamesOpen} aria-controls="start-games-menu"
            onClick={event => { if (event.nativeEvent.pointerType === 'mouse') setGamesOpen(true); else setGamesOpen(current => !current); }}
            onKeyDown={event => { if (event.key === 'ArrowRight') { event.preventDefault(); event.stopPropagation(); focusGame(); } }}>
            <FiGrid aria-hidden="true" />Games<FiChevronRight className="start-games-arrow" aria-hidden="true" />
          </button>
          {gamesOpen && (
            <div className="start-games-submenu" id="start-games-menu" role="menu" aria-label="Games"
              onKeyDown={event => {
                if (event.key === 'ArrowLeft' || event.key === 'Escape') {
                  event.preventDefault(); event.stopPropagation(); setGamesOpen(false); gamesTrigger.current?.focus();
                }
              }}>
              <button type="button" role="menuitem" onClick={onGame}><FiPlay aria-hidden="true" /><span>Game 01<small>Coming soon</small></span></button>
            </div>
          )}
        </div>
        <button type="button" role="menuitem" onClick={onCalculator}><TbCalculator aria-hidden="true" />Calculator</button>
        <button type="button" role="menuitem" onClick={onPortfolio}><FiFolder aria-hidden="true" />Portofolio</button>
        <button type="button" role="menuitem" onClick={onShutdown}><FiPower aria-hidden="true" />Shut Down</button>
      </div>
    </div>
  );
}
