import MyClass, { funcionCompartida } from "./shared.js"
import chalk from 'chalk'

funcionCompartida()
new MyClass().metodo()

console.log(chalk.green.bold('Salvemos el medio ambiente'))