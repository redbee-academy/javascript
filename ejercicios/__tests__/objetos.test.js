const unObjeto = require('../objetos')

describe('el objeto cumple con las consignas', () => {
  it('tiene por lo menos un numero', () => {
    expect(Object.values(unObjeto()).some(v => typeof v === 'number')).toBe(true)
  })

  it ('tiene por lo menos 3 strings', () => {
    expect(
      Object
        .values(unObjeto())
        .map(v => typeof v)
        .filter(v => v === 'string')
        .length >= 3
    ).toBe(true)
  })

  it ('tiene por lo menos 1 array de números', () => {
    expect(
      Object
        .values(unObjeto())
        .some(v => 
          Array.isArray(v) && 
          v.every(e => typeof e === 'number')
        )
    ).toBe(true)
  })

  it('tiene una propiedad "borrado" con el valor false', () => {
    expect(unObjeto().borrado).toBe(false)
  })

  it('tiene una propiedad "porDefinir" con el valor null', () => {
    expect(unObjeto().porDefinir).toBe(null)
  })

  it('el valor de acceder a la propiedad noExiste es undefined', () => {
    expect(unObjeto().noExiste).toBe(undefined)
  })
})