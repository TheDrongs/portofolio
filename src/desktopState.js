export const SHUTDOWN_DURATION = 1000;

export function createDesktopState() {
  return {
    page: 'home',
    windowOpen: true,
    minimized: false,
    maximized: false,
    menuOpen: false,
    power: 'on',
    tools: {},
    windowOrder: ['portfolio'],
  };
}

function raiseWindow(order, id) {
  return [...order.filter(item => item !== id), id];
}

function isVisible(state, id) {
  return id === 'portfolio'
    ? state.windowOpen && !state.minimized
    : Boolean(state.tools[id] && !state.tools[id].minimized);
}

export function desktopReducer(state, action) {
  if (action.type === 'BOOT') return createDesktopState();
  if (state.power === 'shutting-down') return state;
  if (state.power === 'confirm' && !['CANCEL_SHUTDOWN', 'CONFIRM_SHUTDOWN'].includes(action.type)) return state;

  switch (action.type) {
    case 'NAVIGATE':
      return { ...state, page: action.page, windowOpen: true, minimized: false, menuOpen: false, windowOrder: raiseWindow(state.windowOrder, 'portfolio') };
    case 'OPEN_PORTFOLIO':
      return { ...state, windowOpen: true, minimized: false, menuOpen: false, windowOrder: raiseWindow(state.windowOrder, 'portfolio') };
    case 'CLOSE_WINDOW':
      return { ...state, windowOpen: false, minimized: false, menuOpen: false, windowOrder: state.windowOrder.filter(id => id !== 'portfolio') };
    case 'MINIMIZE':
      return { ...state, minimized: true, menuOpen: false, windowOrder: state.windowOrder.filter(id => id !== 'portfolio') };
    case 'TOGGLE_TASKBAR': {
      const minimize = isVisible(state, 'portfolio') && state.windowOrder.at(-1) === 'portfolio';
      return { ...state, windowOpen: true, minimized: minimize, menuOpen: false,
        windowOrder: minimize ? state.windowOrder.filter(id => id !== 'portfolio') : raiseWindow(state.windowOrder, 'portfolio') };
    }
    case 'FOCUS_WINDOW':
      return !isVisible(state, action.id) || state.windowOrder.at(-1) === action.id
        ? state : { ...state, windowOrder: raiseWindow(state.windowOrder, action.id) };
    case 'OPEN_TOOL':
      if (!['calculator', 'game'].includes(action.tool)) return state;
      return { ...state, tools: { ...state.tools, [action.tool]: { minimized: false } }, menuOpen: false, windowOrder: raiseWindow(state.windowOrder, action.tool) };
    case 'CLOSE_TOOL': {
      if (!state.tools[action.tool]) return state;
      const tools = { ...state.tools };
      delete tools[action.tool];
      return { ...state, tools, menuOpen: false, windowOrder: state.windowOrder.filter(id => id !== action.tool) };
    }
    case 'MINIMIZE_TOOL':
    case 'TOGGLE_TOOL_TASKBAR': {
      if (!state.tools[action.tool]) return state;
      const minimize = action.type === 'MINIMIZE_TOOL' || (isVisible(state, action.tool) && state.windowOrder.at(-1) === action.tool);
      return { ...state, tools: { ...state.tools, [action.tool]: { minimized: minimize } }, menuOpen: false,
        windowOrder: minimize ? state.windowOrder.filter(id => id !== action.tool) : raiseWindow(state.windowOrder, action.tool) };
    }
    case 'TOGGLE_MAXIMIZE':
      return { ...state, maximized: !state.maximized };
    case 'OPEN_START':
      return { ...state, menuOpen: true };
    case 'TOGGLE_START':
      return { ...state, menuOpen: !state.menuOpen };
    case 'DISMISS_START':
      return state.menuOpen ? { ...state, menuOpen: false } : state;
    case 'REQUEST_SHUTDOWN':
      return { ...state, menuOpen: false, power: 'confirm' };
    case 'CANCEL_SHUTDOWN':
      return { ...state, power: 'on' };
    case 'CONFIRM_SHUTDOWN':
      return state.power === 'confirm' ? { ...state, power: 'shutting-down' } : state;
    default:
      return state;
  }
}
