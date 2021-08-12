console.log(typeof 2)
console.log(typeof '123')
console.log(typeof {})
console.log(typeof [])
console.log(typeof true)
console.log(Array.isArray([]) ? 'Es un array' : 'No es un array')

// Convertir a boolean
Boolean(4) // true
Boolean(0) // false
Boolean('texto') // true
Boolean('') // false
Boolean(null) // false
Boolean(undefined) // false

// Convertir a string
(4).toString() // '4'
(true).toString() // 'true'
({}).toString() // [object Object]

// Convertir a number
Number('4') // 4
Number('') // 0
Number('texto') // NaN , valor especial que significa "no es un numero" o "numero inválido"
Number.isNaN(Number('texto')) // true
Number.isNaN(4) // false
Number.isNaN(0 / 0) // true