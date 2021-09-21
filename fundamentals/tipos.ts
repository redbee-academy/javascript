console.log(typeof 2)
console.log(typeof '123')
console.log(typeof {})
console.log(typeof [])
console.log(typeof true)
console.log(Array.isArray([]) ? 'Es un array' : 'No es un array')

interface Pato {
  cuack: () => void
}

interface Gato {
  meow: () => void;
}

const loguear = (mensaje: Pato | Gato) => {
  if ((mensaje as Pato).cuack) {
    (mensaje as Pato).cuack()
  } else {
    (mensaje as Gato).meow()
  }
}