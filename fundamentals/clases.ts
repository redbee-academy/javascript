class MyClass {
  constructor(a: number, b: number) {
    this.a = a
    this.b = b
  }

  a: number
  b: number

  get aMasB(): number {
    return this.a + this.b
  }

  loguearAMasB() {
    console.log(this.aMasB)
  }
}

class MyOtherClass extends MyClass {
  constructor(a: number, b: number, c: string) {
    super(a, b)
    this.c = c
  }
  c: string
}

const miInstancia = new MyClass(1, 2)

miInstancia.loguearAMasB()

const miOtraInstancia = new MyOtherClass(1 , 2, '3')

if (miOtraInstancia instanceof MyClass) {
  console.log('Es una instancia de la clase')
}