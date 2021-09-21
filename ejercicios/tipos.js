// Una funcion que suma todos sus argumentos
// De todos los parámetros sumar solo los números
//  y las strings si son representaciones de números válidas
function sumarStringsONumerosConFor (...argumentos) {
  let acumulador = 0

  for (let i = 0; i < argumentos.length; i += 1) {
    const elemento = argumentos[i]
    if (typeof elemento === 'number') {
      acumulador += elemento
    } else if (elemento !== true && !Number.isNaN(Number(elemento))) {
      acumulador += Number(elemento)
    }
  }

  return acumulador
}

function isNumber(elemento) {
  if (typeof elemento === 'number') {
    return elemento
  } else if (elemento !== true && !Number.isNaN(Number(elemento))) {
    return Number(elemento)
  }
}

function sumarStringsONumeros(...argumentos) {
  return argumentos
    .filter(isNumber)
    .reduce((total, n) => total + Number(n), 0)
}

Number('123') === 123 // numero a string
Number('asdb') // NaN
Number.isNaN(NaN) === true

module.exports = sumarStringsONumeros