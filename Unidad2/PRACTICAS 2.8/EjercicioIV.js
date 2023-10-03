'use strict'
let num, res;
num = prompt('Introduzca un numero.');
res=(isNaN(num)) ? "No has introducido un numero" : "Has introducido un numero"; //El isNaN devuelve true or false si es un numero o no.
alert(res);