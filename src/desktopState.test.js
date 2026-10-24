import test from 'node:test';
import assert from 'node:assert/strict';
import { createDesktopState, desktopReducer as reduce, SHUTDOWN_DURATION } from './desktopState.js';

test('X closes only the portfolio; its desktop shortcut can restore the same page', () => {
  let state = reduce(createDesktopState(), { type: 'NAVIGATE', page: 'experience' });
  state = reduce(state, { type: 'CLOSE_WINDOW' });
  assert.equal(state.windowOpen, false);
  assert.equal(state.power, 'on');
  state = reduce(state, { type: 'OPEN_PORTFOLIO' });
  assert.equal(state.windowOpen, true);
  assert.equal(state.minimized, false);
  assert.equal(state.page, 'experience');
});

test('minimize keeps the window open and taskbar restores it', () => {
  let state = reduce(createDesktopState(), { type: 'MINIMIZE' });
  assert.equal(state.windowOpen, true);
  assert.equal(state.minimized, true);
  state = reduce(state, { type: 'TOGGLE_TASKBAR' });
  assert.equal(state.minimized, false);
});

test('Start opens a menu and choosing Portofolio restores a closed window', () => {
  let state = reduce(createDesktopState(), { type: 'CLOSE_WINDOW' });
  state = reduce(state, { type: 'TOGGLE_START' });
  assert.equal(state.menuOpen, true);
  state = reduce(state, { type: 'OPEN_PORTFOLIO' });
  assert.equal(state.menuOpen, false);
  assert.equal(state.windowOpen, true);
});

test('Shut Down requests confirmation, and No preserves the current desktop', () => {
  let state = reduce(createDesktopState(), { type: 'NAVIGATE', page: 'contact' });
  state = reduce(state, { type: 'TOGGLE_START' });
  state = reduce(state, { type: 'REQUEST_SHUTDOWN' });
  assert.equal(state.power, 'confirm');
  assert.equal(state.menuOpen, false);
  assert.equal(reduce(state, { type: 'CLOSE_WINDOW' }), state);
  state = reduce(state, { type: 'CANCEL_SHUTDOWN' });
  assert.equal(state.power, 'on');
  assert.equal(state.page, 'contact');
  assert.equal(state.windowOpen, true);
});

test('shutdown requires Yes, locks other actions, and uses a one second delay', () => {
  const initial = createDesktopState();
  assert.equal(reduce(initial, { type: 'CONFIRM_SHUTDOWN' }), initial);
  let state = reduce(initial, { type: 'REQUEST_SHUTDOWN' });
  state = reduce(state, { type: 'CONFIRM_SHUTDOWN' });
  assert.equal(state.power, 'shutting-down');
  assert.equal(reduce(state, { type: 'NAVIGATE', page: 'home' }), state);
  assert.equal(reduce(state, { type: 'CANCEL_SHUTDOWN' }), state);
  assert.equal(SHUTDOWN_DURATION, 1000);
});

test('powering on after shutdown starts a fresh portfolio session', () => {
  let state = reduce(createDesktopState(), { type: 'CLOSE_WINDOW' });
  state = reduce(state, { type: 'REQUEST_SHUTDOWN' });
  state = reduce(state, { type: 'CONFIRM_SHUTDOWN' });
  state = reduce(state, { type: 'BOOT' });
  assert.deepEqual(state, createDesktopState());
});

test('Games and Calculator stay open together with one focused front window', () => {
  let state = reduce(createDesktopState(), {type:'OPEN_TOOL',tool:'calculator'});
  state = reduce(state, {type:'OPEN_TOOL',tool:'game'});
  assert.deepEqual(Object.keys(state.tools), ['calculator','game']);
  assert.deepEqual(state.windowOrder, ['portfolio','calculator','game']);
  state = reduce(state, {type:'FOCUS_WINDOW',id:'portfolio'});
  assert.deepEqual(state.windowOrder, ['calculator','game','portfolio']);
  state = reduce(state, {type:'OPEN_TOOL',tool:'calculator'});
  assert.deepEqual(state.windowOrder, ['game','portfolio','calculator']);
  assert.equal(Object.keys(state.tools).length, 2, 'Opening again must reuse the same application');
});

test('taskbar brings an inactive window forward before minimizing it on the next click', () => {
  let state = reduce(createDesktopState(), {type:'OPEN_TOOL',tool:'calculator'});
  state = reduce(state, {type:'TOGGLE_TASKBAR'});
  assert.equal(state.minimized, false);
  assert.equal(state.windowOrder.at(-1), 'portfolio');
  state = reduce(state, {type:'TOGGLE_TOOL_TASKBAR',tool:'calculator'});
  assert.equal(state.tools.calculator.minimized, false);
  assert.equal(state.windowOrder.at(-1), 'calculator');
  state = reduce(state, {type:'TOGGLE_TOOL_TASKBAR',tool:'calculator'});
  assert.equal(state.tools.calculator.minimized, true);
  assert.deepEqual(state.windowOrder, ['portfolio']);
  assert.equal(reduce(state, {type:'FOCUS_WINDOW',id:'calculator'}), state);
  state = reduce(state, {type:'TOGGLE_TOOL_TASKBAR',tool:'calculator'});
  assert.equal(state.tools.calculator.minimized, false);
  assert.equal(state.windowOrder.at(-1), 'calculator');
});

test('closing or minimizing a tool leaves other applications intact and selects the next window', () => {
  let state = reduce(createDesktopState(), {type:'OPEN_TOOL',tool:'calculator'});
  state = reduce(state, {type:'OPEN_TOOL',tool:'game'});
  state = reduce(state, {type:'MINIMIZE_TOOL',tool:'game'});
  assert.equal(state.tools.game.minimized, true);
  assert.equal(state.windowOrder.at(-1), 'calculator');
  state = reduce(state, {type:'CLOSE_TOOL',tool:'calculator'});
  assert.equal(state.tools.calculator, undefined);
  assert.equal(state.tools.game.minimized, true);
  assert.equal(state.windowOpen, true);
  assert.deepEqual(state.windowOrder, ['portfolio']);
  state = reduce(state, {type:'CLOSE_WINDOW'});
  assert.deepEqual(state.windowOrder, []);
  state = reduce(state, {type:'OPEN_TOOL',tool:'game'});
  assert.deepEqual(state.windowOrder, ['game']);
  state = reduce(state, {type:'BOOT'});
  assert.deepEqual(state, createDesktopState());
});
