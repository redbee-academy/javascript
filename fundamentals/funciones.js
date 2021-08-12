function suma(a, b) {
  return a + b
}

const resta = (a, b) => a - b
const multiplicacion = (a, b) => {
  return a * b
}

const sumarTodos = (...argumentos) => argumentos.reduce((total, n) => total + n, 0)

console.log(suma(1, 2))
console.log(resta(5, 4))
console.log(multiplicacion(2, 6))