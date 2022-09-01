import { concat } from '../src/index';

test('Concat function works', () => {
  expect(concat(1, 2)).toBe('12');
  expect(concat(1, '2')).toBe('12');
  expect(concat('1', '2')).toBe('12');
});
