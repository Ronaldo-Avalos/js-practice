
// for( let i = 0; i < 6; i++){
        
//     document.write( i + "<br>")

// }


// let animales = ['gato','perro',"conejo"];

// for (animal in animales) {

// }
arrary1 = ["juanito","walter"];
array2 = ["maria","juan","roberto",arrary1, "lolita"];

forrancio: //label
for  (let array in array2) {
    if (array == 3) {
        for (let array of arrary1){
            document.write(array + "<br>");
            break forrancio;
        }
        
    }else{
        document.write(array2[array] + "<br>");
    }
}

