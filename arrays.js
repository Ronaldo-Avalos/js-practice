frutas  =  ["manzana","mango","pera"];


// arrays asociativo

let pc1 = {
    nombre: "ronaldo",
    procesador: "rayzer 7",
    ram: "8GB",
    espacio: "1TB"
};

let nombre = pc1["nombre"];
let procesador = pc1["procesador"]
let ram = pc1["ram"];
let espacio = pc1["espacio"];

let frase = ` el nombre de mi pc es: ${nombre} <br>
              El procesar de mi pc es un: ${procesador}`;


document.write(frase);


    