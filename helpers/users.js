function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplica(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("No se puede dividir por 0");
  return a / b;
}

module.exports = { suma, resta, multiplica, divide };

// module.exports = {
//   suma,
//   resta,
//   multiplica,
//   divide,
// };