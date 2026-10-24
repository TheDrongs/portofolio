const operationLabels = { '+': '+', '-': '−', '*': '×', '/': '÷' };

export function createCalculatorState() {
  return { display: '0', stored: null, operation: null, awaiting: false, lastOperation: null, lastOperand: null, history: '' };
}

function formatNumber(value) {
  return Number.isFinite(value) ? String(Number(value.toPrecision(12))) : 'Error';
}

function calculate(left, right, operation) {
  if (operation === '+') return left + right;
  if (operation === '-') return left - right;
  if (operation === '*') return left * right;
  if (operation === '/') return right === 0 ? NaN : left / right;
  return left;
}

function resultState(left, right, operation) {
  const display = formatNumber(calculate(left, right, operation));
  return display === 'Error'
    ? { ...createCalculatorState(), display, awaiting: true, history: operation === '/' && right === 0 ? 'Cannot divide by zero' : 'Result out of range' }
    : { ...createCalculatorState(), display, awaiting: true, lastOperation: operation, lastOperand: right, history: `${formatNumber(left)} ${operationLabels[operation]} ${formatNumber(right)} =` };
}

export function calculatorReducer(state, action) {
  if (action.type === 'clear') return createCalculatorState();
  if (state.display === 'Error') {
    if (['digit', 'decimal', 'backspace'].includes(action.type)) state = createCalculatorState();
    else return state;
  }
  switch (action.type) {
    case 'digit': {
      if (!/^\d$/.test(action.value)) return state;
      let display;
      if (state.awaiting || state.display === '0') display = action.value;
      else if (state.display === '-0') display = '-' + action.value;
      else {
        if (state.display.replace(/[^\d]/g, '').length >= 12) return state;
        display = state.display + action.value;
      }
      return { ...state, display, awaiting: false, lastOperation: null, lastOperand: null, history: state.operation ? state.history : '' };
    }
    case 'decimal':
      if (!state.awaiting && state.display.includes('.')) return state;
      return { ...state, display: state.awaiting ? '0.' : state.display + '.', awaiting: false, lastOperation: null, lastOperand: null, history: state.operation ? state.history : '' };
    case 'operator': {
      if (!operationLabels[action.value]) return state;
      const operand = Number(state.display);
      const result = state.operation && state.stored !== null && !state.awaiting
        ? resultState(state.stored, operand, state.operation)
        : state;
      if (result.display === 'Error') return result;
      const display = result.display;
      return { ...result, stored: Number(display), operation: action.value, awaiting: true, lastOperation: null, lastOperand: null, history: `${display} ${operationLabels[action.value]}` };
    }
    case 'equals': {
      const operation = state.operation || state.lastOperation;
      if (!operation) return { ...state, awaiting: true };
      const left = state.operation ? state.stored : Number(state.display);
      const right = state.operation ? Number(state.display) : state.lastOperand;
      return resultState(left, right, operation);
    }
    case 'sign':
      return { ...state, display: state.display.startsWith('-') ? state.display.slice(1) : '-' + state.display, awaiting: state.operation ? false : state.awaiting };
    case 'percent': {
      const input = Number(state.display);
      const value = state.stored !== null && ['+', '-'].includes(state.operation)
        ? state.stored * input / 100
        : input / 100;
      return { ...state, display: formatNumber(value), awaiting: !state.operation, lastOperation: null, lastOperand: null, history: state.operation ? state.history : `${state.display}%` };
    }
    case 'backspace': {
      if (state.awaiting) return state;
      const shortened = /e/i.test(state.display) ? '' : state.display.slice(0, -1);
      return { ...state, display: !shortened || shortened === '-' ? '0' : shortened };
    }
    default:
      return state;
  }
}
