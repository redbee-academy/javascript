const sumarStringsONumeros = require('../tipos')

it('suma numeros', () => {
  expect(sumarStringsONumeros(1, 2, '3', 'texto', {}, true, [])).toBe(1 + 2 + 3)
})