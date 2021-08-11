const leerEdificios = require('../control-de-flujo')

it('edificios', () => {
  const edificios = leerEdificios()

  expect(edificios.indexOf('Rascacielos') !== -1).toBe(true)
  expect(edificios.indexOf('Boulevard Inventado 742') !== -1).toBe(true)
  expect(edificios.indexOf('Oficinas')  !== -1).toBe(true)
  expect(edificios.indexOf('Distrito Comercial 4, Torre 3') !== -1).toBe(true)
  expect(edificios.indexOf('Oficinas') < edificios.indexOf('Rascacielos')).toBe(true)
  expect(edificios.indexOf('Penthouses')).toBe(-1)
  expect(edificios.indexOf('Casa de Pepito')).toBe(-1)
  expect(edificios.split('\n').filter(x => x).length).toBe(2)
})