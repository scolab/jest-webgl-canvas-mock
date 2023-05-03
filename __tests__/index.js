/**
 * test canvas
 */

import { ver, setupJestCanvasMock } from '../src';
import pkg from '../package.json';

let canvas;

beforeEach(() => {
  canvas = document.createElement('canvas');
});

describe('canvas', () => {
  it('should have correct version', () => {
    expect(ver).toBe(pkg.version);
  });
});
