// Esto se comnoce como una exprecion de clase ->
// const Rectangulo = class R{
// }

//clases declaradas con class no tienen hoisting
class Rectangulo{ // ESta es una declaracion de clase

}
// Hoisting -> lleva las a las variables al principio para ejecutarlas
//cuando tomamos cariables definidas con var y function y las lleva al comienxo del archivo
// console.log(Cuadrado);
function Cuadrado() {}
// console.log(Cuadrado, Rectangulo);


const r =  new Rectangulo()

class chancho {
    propiedad = 'mi propiedad'
    #hambre // declaración de variable privada 
    static estatico = 42;
    constructor(estado = 'feliz', hambre = true){
        this.estado = estado
        this.hambre = hambre
    
    }
    hablar() {
        console.log(`Soy un chancho ${this.estado} ${this.hambre ? 
        'con mucha hambre' : 'satisfecho!'}`);
    }

    static comer(){
        console.log(this.estatico,'Estoy comiendo!');
    }
}

chancho.comer()
const feliz = new chancho('feliz');
// console.log(feliz.__proto__);
// feliz.hablar()
// console.log(feliz);
const triste = new chancho('triste');
// triste.hablar()
const nose = new chancho();
// nose.hablar()
















