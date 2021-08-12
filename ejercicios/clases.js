class Mascota {
  constructor(nombre) {
    this.nombre = nombre
  }

  nombre
}

class Gato extends Mascota {
  constructor(nombre, color) {
    super(nombre)
    this.color = color
  }

  color

  hacerRuido() {
    return 'Miau'
  }
}

// Una función que debe devolver una instancia de una clase que herede de mascota
// La instancia debe tener una propiedad que sea color de tipo string
//  y un método que sea hacerRuido() que devuelve un string
function miMascota() {
  return new Gato('Klaus', 'tricolor')
}


module.exports = {
  Mascota,
  miMascota
}