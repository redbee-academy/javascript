const { Mascota, miMascota } = require('../clases')

it('crea una mascota', () => {
  const mascota = miMascota()

  expect(mascota instanceof Mascota).toBe(true)
  expect(typeof mascota.color).toBe('string')
  expect(typeof mascota.hacerRuido()).toBe('string')
})