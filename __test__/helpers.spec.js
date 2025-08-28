const { suma, resta, multiplica, divide } = require('../helpers/users');

test('suma 2 + 3 = 5', () => {
  expect(suma(2, 3)).toBe(5);
});

test('resta 5 - 2 = 3', () => {
  expect(resta(5, 2)).toBe(3);
});

test('multiplica 4 * 3 = 12', () => {
  expect(multiplica(4, 3)).toBe(12);
});

test('divide 10 / 2 = 5', () => {
  expect(divide(10, 2)).toBe(5);
});

test('divide por 0 lanza error', () => {
  expect(() => divide(10, 0)).toThrow("No se puede dividir por 0");
});
