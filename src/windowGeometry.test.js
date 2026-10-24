import test from 'node:test';
import assert from 'node:assert/strict';
import { clampWindowPosition, moveWindowPosition } from './windowGeometry.js';
const area = { width: 936, height: 543 };
const size = { width: 310, height: 390 };

test('drag clamps all edges within the usable screen above the taskbar', () => {
  assert.deepEqual(moveWindowPosition({x:100,y:100},{x:-1000,y:-1000},area,size),{x:0,y:0});
  assert.deepEqual(moveWindowPosition({x:100,y:100},{x:1000,y:1000},area,size),{x:626,y:153});
});

test('drag compensates for laptop CSS3D zoom and phone screen scaling', () => {
  for (const scale of [.75,1,1.15,1.8]) {
    const position=moveWindowPosition({x:50,y:20},{x:100*scale,y:50*scale},area,size,{x:scale,y:scale});
    assert(Math.abs(position.x-150)<1e-9);
    assert(Math.abs(position.y-70)<1e-9);
  }
});

test('resize reclamps existing positions and handles a window filling the available area', () => {
  assert.deepEqual(clampWindowPosition({x:500,y:150},{width:300,height:420},{width:284,height:390}),{x:16,y:30});
  assert.deepEqual(clampWindowPosition({x:500,y:150},{width:280,height:300},size),{x:0,y:0});
});
