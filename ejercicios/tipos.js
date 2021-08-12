// Una funcion que suma todos sus argumentos
// De todos los parámetros sumar solo los números
//  y las strings si son representaciones de números válidas
function sumarStringsONumeros (...argumentos) {
  return argumentos
    .filter(n => typeof n === 'string' || typeof n === 'number')
    .map(Number)
    .filter(n => !Number.isNaN(n))
    .reduce((total, n) => total + n, 0)
}

module.exports = sumarStringsONumeros