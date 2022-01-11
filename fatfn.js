// Funciones que se declaran con la palabra reservada function 
function Fn(){

    this.prop = 'propiedad'
    return 'chanchito feliz'
}
Fn.prototype.lala = function FuntionDePrototipo(){}
const r = new Fn()
// console.log(r.__proto__); 

//fat arrow function / no pueden ser llamadas con la palabra reservada de new
// no van a usar el contexto de this
const fatFn = () => {
    return "chancho feliz"
}
const r1 = fatFn()
// console.log(r1);


// return implisito

const fnR = () => 2

console.log(fnR())