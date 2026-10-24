import { useLayoutEffect, useReducer, useRef, useState } from 'react';
import { FiGrid, FiMinus, FiX } from 'react-icons/fi';
import { calculatorReducer, createCalculatorState } from '../calculator';
import { clampWindowPosition, moveWindowPosition } from '../windowGeometry';

const keys = [
  { label: 'C', name: 'Clear calculator', action: { type: 'clear' } },
  { label: '⌫', name: 'Backspace', action: { type: 'backspace' } },
  { label: '%', name: 'Percent', action: { type: 'percent' } },
  { label: '÷', name: 'Divide', action: { type: 'operator', value: '/' }, operator: true },
  ...['7','8','9'].map(value => ({ label: value, action: { type: 'digit', value } })),
  { label: '×', name: 'Multiply', action: { type: 'operator', value: '*' }, operator: true },
  ...['4','5','6'].map(value => ({ label: value, action: { type: 'digit', value } })),
  { label: '−', name: 'Subtract', action: { type: 'operator', value: '-' }, operator: true },
  ...['1','2','3'].map(value => ({ label: value, action: { type: 'digit', value } })),
  { label: '+', name: 'Add', action: { type: 'operator', value: '+' }, operator: true },
  { label: '±', name: 'Change sign', action: { type: 'sign' } },
  { label: '0', action: { type: 'digit', value: '0' } },
  { label: '.', name: 'Decimal point', action: { type: 'decimal' } },
  { label: '=', name: 'Equals', action: { type: 'equals' }, equals: true },
];

function Calculator() {
  const [state, dispatch] = useReducer(calculatorReducer, undefined, createCalculatorState);
  return (
    <div className="calculator" onKeyDown={event => {
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      let action;
      if (/^\d$/.test(event.key)) action = { type: 'digit', value: event.key };
      else if (['+', '-', '*', '/'].includes(event.key)) action = { type: 'operator', value: event.key };
      else if (event.key === '.' || event.key === ',') action = { type: 'decimal' };
      else if (event.key === 'Enter' || event.key === '=') action = { type: 'equals' };
      else if (event.key === 'Backspace') action = { type: 'backspace' };
      else if (event.key === 'Delete' || event.key.toLowerCase() === 'c') action = { type: 'clear' };
      else if (event.key === '%') action = { type: 'percent' };
      if (action) { event.preventDefault(); event.stopPropagation(); dispatch(action); }
    }}>
      <div className="calculator-readout">
        <div className="calculator-history">{state.history || '\u00a0'}</div>
        <output className="calculator-display" data-long={state.display.length > 13} aria-label="Calculator result" aria-live="polite" aria-atomic="true">{state.display}</output>
      </div>
      <div className="calculator-grid">
        {keys.map(key => (
          <button type="button" key={key.label} aria-label={key.name || key.label}
            className={`calculator-key ${key.operator ? 'calculator-operator' : ''} ${key.equals ? 'calculator-equals' : ''}`}
            onClick={() => dispatch(key.action)}>{key.label}</button>
        ))}
      </div>
      <p className="calculator-hint">Keyboard supported · Esc to close</p>
    </div>
  );
}

export default function DesktopTool({ tool, active, minimized, zIndex, onActivate, onMinimize, onClose }) {
  const ref = useRef(null);
  const layerRef = useRef(null);
  const drag = useRef(null);
  const [position, setPosition] = useState(null);
  const [dragging, setDragging] = useState(false);
  useLayoutEffect(() => {
    const layer = layerRef.current;
    const windowElement = ref.current;
    const fit = () => {
      if (!layer.clientWidth || !layer.clientHeight) return;
      const area = { width: layer.clientWidth, height: layer.clientHeight };
      const size = { width: windowElement.offsetWidth, height: windowElement.offsetHeight };
      setPosition(previous => {
        const next = clampWindowPosition(previous || { x: (area.width - size.width) / 2, y: (area.height - size.height) / 2 }, area, size);
        return previous?.x === next.x && previous?.y === next.y ? previous : next;
      });
    };
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(layer);
    observer.observe(windowElement);
    return () => observer.disconnect();
  }, []);

  const finishDrag = event => {
    if (drag.current?.pointerId !== event.pointerId) return;
    drag.current = null;
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return (
    <div className="desktop-tool-layer" ref={layerRef} hidden={minimized} style={{ zIndex }}>
      <section className={`desktop-tool-window ${tool === 'calculator' ? 'calculator-window' : 'game-placeholder-window'} ${active ? 'is-active' : 'is-inactive'}`}
        data-desktop-tool={tool} data-desktop-window={tool} data-window-active={active} role="dialog" aria-labelledby={`${tool}-title`} tabIndex={-1} ref={ref}
        style={{ left: position?.x || 0, top: position?.y || 0, visibility: position ? 'visible' : 'hidden' }}
        onPointerDownCapture={onActivate} onFocusCapture={onActivate}
        onKeyDown={event => {
          if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); onClose(); }
        }}>
        <header className={`window-title draggable-title ${dragging ? 'is-dragging' : ''}`}
          onPointerDown={event => {
            if (event.button !== 0 || event.isPrimary === false || event.target.closest('button') || !position) return;
            event.preventDefault();
            drag.current = { pointerId: event.pointerId, clientX: event.clientX, clientY: event.clientY, origin: position };
            event.currentTarget.setPointerCapture(event.pointerId);
            setDragging(true);
          }}
          onPointerMove={event => {
            if (drag.current?.pointerId !== event.pointerId) return;
            const layer = layerRef.current;
            const bounds = layer.getBoundingClientRect();
            setPosition(moveWindowPosition(drag.current.origin,
              { x: event.clientX - drag.current.clientX, y: event.clientY - drag.current.clientY },
              { width: layer.clientWidth, height: layer.clientHeight },
              { width: ref.current.offsetWidth, height: ref.current.offsetHeight },
              { x: bounds.width / layer.clientWidth, y: bounds.height / layer.clientHeight }));
          }}
          onPointerUp={finishDrag} onPointerCancel={finishDrag} onLostPointerCapture={finishDrag}>
          <span id={`${tool}-title`}>{tool === 'calculator' ? 'Calculator' : 'Game 01'}</span>
          <div className="window-controls">
            <button type="button" aria-label={`Minimize ${tool === 'calculator' ? 'calculator' : 'game'}`} onClick={onMinimize}><FiMinus /></button>
            <button type="button" aria-label={`Close ${tool === 'calculator' ? 'calculator' : 'game'}`} onClick={onClose}><FiX /></button>
          </div>
        </header>
        <div className="desktop-tool-body">
          {tool === 'calculator' ? <Calculator /> : (
            <div className="game-placeholder"><FiGrid aria-hidden="true" /><h2>Coming soon.</h2><p>A new game is on the way.<br />Come back for a little break.</p></div>
          )}
        </div>
      </section>
    </div>
  );
}
