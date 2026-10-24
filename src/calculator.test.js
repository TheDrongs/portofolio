import test from 'node:test';
import assert from 'node:assert/strict';
import { calculatorReducer as reduce, createCalculatorState } from './calculator.js';
const enter = (state, value) => [...String(value)].reduce((current, digit) => reduce(current, digit === '.' ? { type: 'decimal' } : { type: 'digit', value: digit }), state);
const op = (state, value) => reduce(state, { type: 'operator', value });
const equals = state => reduce(state, { type: 'equals' });

test('calculator supports the four basic operations', () => {
  for (const [operation, expected] of [['+','12'],['-','4'],['*','32'],['/','2']]) {
    assert.equal(equals(enter(op(enter(createCalculatorState(),8),operation),4)).display,expected);
  }
});
test('decimal results do not expose floating point noise', () => {
  assert.equal(equals(enter(op(enter(createCalculatorState(),'0.1'),'+'),'0.2')).display,'0.3');
  let state=enter(createCalculatorState(),'1.2');
  state=reduce(state,{type:'decimal'});
  assert.equal(state.display,'1.2');
});
test('standard calculator chains operations and lets an operator be replaced', () => {
  let state=enter(op(enter(createCalculatorState(),2),'+'),3);
  state=enter(op(state,'*'),4);
  assert.equal(equals(state).display,'20');
  state=op(op(enter(createCalculatorState(),8),'+'),'-');
  assert.equal(equals(enter(state,3)).display,'5');
});
test('repeated equals repeats the previous operation; new input starts a new calculation', () => {
  const result=equals(enter(op(enter(createCalculatorState(),2),'+'),3));
  assert.equal(equals(result).display,'8');
  assert.equal(equals(equals(result)).display,'11');
  assert.equal(enter(result,4).display,'4');
  assert.equal(equals(enter(result,4)).display,'4');
});
test('percent supports a percentage of the left operand for addition', () => {
  let state=enter(op(enter(createCalculatorState(),200),'+'),10);
  state=reduce(state,{type:'percent'});
  assert.equal(state.display,'20');
  assert.equal(equals(state).display,'220');
  assert.equal(reduce(enter(createCalculatorState(),50),{type:'percent'}).display,'0.5');
});
test('sign, backspace, clear, and digit limits work', () => {
  let state=reduce(enter(createCalculatorState(),123),{type:'sign'});
  assert.equal(state.display,'-123');
  assert.equal(reduce(state,{type:'backspace'}).display,'-12');
  assert.deepEqual(reduce(state,{type:'clear'}),createCalculatorState());
  assert.equal(enter(createCalculatorState(),'1234567890123').display,'123456789012');
});
test('division by zero shows an error and recovers on the next digit', () => {
  const state=equals(enter(op(enter(createCalculatorState(),5),'/'),0));
  assert.equal(state.display,'Error');
  assert.equal(state.history,'Cannot divide by zero');
  assert.equal(enter(state,7).display,'7');
  assert.equal(reduce(state,{type:'decimal'}).display,'0.');
});
