import { test, expect } from 'vitest';
import { caesarCipher, caesarDecipher } from './solution';

test('caesarCipher', () => {
  expect(caesarCipher('Hello there traveller', 72)).toBe('Dahhk pdaoa nphhjzph');
});

test('caesarDecipher', () => {
  expect(caesarDecipher('Dahhk pdaoa nphhjzph', 72)).toBe('Hello there traveller');
});