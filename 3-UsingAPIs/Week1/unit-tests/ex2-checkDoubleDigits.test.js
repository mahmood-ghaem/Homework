/* eslint-disable hyf/camelcase */
'use strict';
const walk = require('acorn-walk');
const { beforeAllHelper } = require('../../../test-runner/unit-test-helpers');

describe('checkDoubleDigits', () => {
  const state = {};
  let exported, rootNode, checkDoubleDigits;

  beforeAll(() => {
    ({ exported, rootNode } = beforeAllHelper(__filename, {
      parse: true,
    }));

    checkDoubleDigits = exported;

    rootNode &&
      walk.simple(rootNode, {
        NewExpression({ callee }) {
          if (callee.type === 'Identifier' && callee.name === 'Promise') {
            state.newPromise = true;
          }
        },
        CallExpression({ callee, arguments: args }) {
          if (['resolve', 'reject'].includes(callee.name)) {
            state[callee.name] = args.length;
          }
        },
      });
  });

  it('should exist and be executable', () => {
    expect(exported).toBeDefined();
  });

  it('should call new Promise()', () => {
    if (!exported) return;
    expect(state.newPromise).toBeDefined();
  });

  it(': `resolve()` should be called with a one argument', () => {
    if (!exported) return;
    expect(state.resolve).toBe(1);
  });

  it(': `reject()` should be called with a one argument', () => {
    if (!exported) return;
    expect(state.reject).toBe(1);
  });

  it('should be a function that takes a single argument', () => {
    if (!exported) return;
    expect(
      typeof checkDoubleDigits === 'function' && checkDoubleDigits.length === 1
    ).toBe(true);
  });

  it('"(11) should return a promise that resolves to "This is a double digit number!"', () => {
    if (!exported) return;
    expect.assertions(2);
    const promise = checkDoubleDigits(11);
    expect(promise).toBeInstanceOf(Promise);
    return expect(promise).resolves.toEqual(
      expect.stringContaining('This is a double digit number!')
    );
  });

  it('(5) should return a rejected promise with an Error object', () => {
    if (!exported) return;
    expect.assertions(2);
    const promise = checkDoubleDigits(5);
    expect(promise).toBeInstanceOf(Promise);
    return expect(promise).rejects.toBeInstanceOf(Error);
  });

  it('(123) should return a rejected promise with an Error object', () => {
    if (!exported) return;
    expect.assertions(2);
    const promise = checkDoubleDigits(123);
    expect(promise).toBeInstanceOf(Promise);
    return expect(promise).rejects.toBeInstanceOf(Error);
  });
});
