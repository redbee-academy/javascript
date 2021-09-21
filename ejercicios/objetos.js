// Una funcion que devuelve un objeto que deber tener entre sus propiedades:
//  - por lo menos 1 número
//  - por lo menos 3 strings
//  - por lo menos 1 array de numeros
//  - una propiedad llamada "borrado" en false
//  - una propiedad llamada "porDefinir" en null
//  - si intento acceder a la propiedad "noExiste" debo obtener undefined
// Ademas, agreguen una consigna que inventen ustedes y hagan que la función la cumpla
// No se olviden de agregar una prueba unitaria que compruebe la consigna que inventaron
// Las pruebas estan en: ./__tests__/objetos.test.js
function unObjeto() {
  return {
    id: 1,
    nombre: 'Marcelo',
    apellido: 'Rodriguez',
    domicilio: 'Calle falsa 123',
    hobbies: ['Natacion', 'Boxeo', 'Paracaidisimo'],
    numerosDeLaSuerte: [1,2,3],
    borrado: false,
    porDefinir: null,
    hola: function () {
      console.log('Hola ' + this.nombre)
    }
  }
}

module.exports = unObjeto