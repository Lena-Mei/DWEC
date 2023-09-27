'use strict'
let numHermanos, cantidad;
numHermanos=prompt("Introduzca el numero de hermanos que hay: ");
cantidad= parseFloat(prompt("Introduzca la cantidad a calcular: "));
if(numHermanos==0){
    alert('Como no se presentan hermanos, no se le aplica ningun descuento: \n Cantidad: ' + cantidad)
}
else if(numHermanos>=3){
    alert('Familia numerosa-> se aplica el 15% de descuento: \n Cantidad: ' + (cantidad-(cantidad*0.15)))
}
else{
    alert('Familia normal-> se aplica el 5% de descuento: \n Cantidad: ' + (cantidad-(cantidad*0.05)))
}
