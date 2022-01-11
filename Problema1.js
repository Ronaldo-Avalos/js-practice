// 3 chicos de 23 años perfectamente nomales entran a una heladeria
// a comprar un helado pero hay un problema: los precios
//  no estan al lado de cada estante con su respectivo helado.
// Ellos quieren comprar el helado mas caro que pueden con la
// plata que tienen , asi que vamos ayudarlos

//Roberto tiene $1.5 USD
//Pedro tiene $1.7 USD
//Cofla tiene %3 USD 

//Los precios de helados son los siguientes:
// Palito de helado de agua:           $0.6 usd
// Palito de helado de crema           $1   usd
// Bombón helado marca heladix         $1.6 usd
// Bombón helado marca heladovich      $1.7 usd
// Bombón helado marca helardo         $1.8 usd
// Potecio confitnes                   $2.9 usd
// Pote de 1/4 KG                      $2.9 usd

//Crear soluciones
// Pedirles que ingrsen el monto que tienen y mostrarles el helado mas caro que tienen
// Si hay 3 o mas con el mismo precio, mostrar ambos.
// Congla quiere saber cuanto es el vuelto


 let dineroCofla = prompt("Cuanto dinero tienes cofla?");
 let dineroPedro = prompt("Cuanto dinero tienes pedro?");
 let dineroRoberto = prompt("Cuanto dinero tienes roberto?");
dineroCofla = parseInt(dineroCofla);
 if ( dineroCofla >= 0.6 && dineroCofla < 1 ) {
    alert("Cofla Comprate el palito de agua y te sobra " + (dineroCofla - 0.6));
}
else if ( dineroCofla >= 1 && dineroCofla < 1.6 ) {
    alert("Cofla Comaprate el helado de crema y te sobra " + (dineroCofla - 1));
}
 else if ( dineroCofla >= 1.6 && dineroCofla < 1.7 ) {
    alert("Cofla Comaprate el helado de heladix y te sobra " + (dineroCofla - 1.6));
}
 else if ( dineroCofla >= 1.7 && dineroCofla < 1.8 ) {
    alert("Cofla Comaprate el helado de heladovich y te sobra " + (dineroCofla - 1.7));
}
 else if ( dineroCofla >= 1.8 && dineroCofla < 2.9 ) {
    alert("Cofla Comaprate el helado de helardo y te sobra " + (dineroCofla - 1.8));
}
 else if ( dineroCofla >= 2.9) {
    alert("Cofla Comaprate el helado de confitnes o  el de pote 1/4 KG y te sobra " + (dineroCofla - 2.9));
} 
else{
    alert(" Cofla No te alcanza pa nada puto")
}
// PEDRO
if ( dineroPedro >= 0.6 && dineroPedro < 1 ) {
    alert("Pedro Comprate el palito de agua");
}
else if ( dineroPedro >= 1 && dineroPedro < 1.6 ) {
    alert("Pedro Comaprate el helado de crema");
}
 else if ( dineroPedro >= 1.6 && dineroPedro < 1.7 ) {
    alert("Pedro Comaprate el helado de heladix");
}
 else if ( dineroPedro >= 1.7 && dineroPedro < 1.8 ) {
    alert("Pedro Comaprate el helado de heladovich");
}
 else if ( dineroPedro >= 1.8 && dineroPedro < 2.9 ) {
    alert("Pedro Comaprate el helado de helardo")
}
 else if ( dineroPedro >= 2.9) {
    alert("Pedro Comaprate el helado de confitnes o  el de pote 1/4 KG");
} 
else{
    alert("Pedro No te alcanza pa nada puto")
}
//Roberto
if ( dineroRoberto >= 0.6 && dineroRoberto < 1 ) {
    alert("Roberto Comprate el palito de agua");
}
else if ( dineroRoberto >= 1 && dineroRoberto < 1.6 ) {
    alert("Roberto Comaprate el helado de crema");
}
 else if ( dineroRoberto >= 1.6 && dineroRoberto < 1.7 ) {
    alert("Roberto Comaprate el helado de heladix");
}
 else if ( dineroRoberto >= 1.7 && dineroRoberto < 1.8 ) {
    alert("Roberto Comaprate el helado de heladovich");
}
 else if ( dineroRoberto >= 1.8 && dineroRoberto < 2.9 ) {
    alert("Roberto Comaprate el helado de helardo")
}
 else if ( dineroRoberto >= 2.9) {
    alert("Roberto Comaprate el helado de confitnes o  el de pote 1/4 KG");
} 
else{
    alert("Roberto No te alcanza pa nada puto");
}
